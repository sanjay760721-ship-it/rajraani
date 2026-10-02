import { execFileSync } from "node:child_process";
import { it } from "node:test";

it("prices against real storage, merges duplicate stock requests, and records payments atomically once", () => {
  // Isolated SQLite memory database: never read or mutate shop orders/stock.
  execFileSync(process.execPath, ["--conditions=react-server", "--input-type=module", "-e", `
    import assert from 'node:assert/strict';
    import { db, migrate, closeDb } from './src/lib/db/client.ts';
    import { priceCart, createPendingOrder, attachGatewayOrder, markPaid, OutOfStockError } from './src/lib/orders/orders.ts';
    migrate();
    const term = db().prepare('INSERT INTO taxonomy_term (facet, slug, label) VALUES (?, ?, ?)');
    for (const [facet, slug] of [['garment','saree'],['weave','kadhua'],['fabric','katan-silk'],['colour','red'],['fulfilment','ready_to_ship']]) term.run(facet, slug, slug);
    const product = {
      handle:'test-piece', title:'Silk Saree', poetic_name:'Test', sku:'TEST', price_minor:100000,
      inventory_quantity:1, dispatch_days_min:1, dispatch_days_max:2, narrative:'Test',
      spec_colour:'Red', spec_technique:'Kadhua', spec_fabric:'Silk', provenance_workshop:'Test',
      provenance_loom:'Pit', provenance_weeks:2, provenance_artisans:1, garment_type:'saree',
      weave:'kadhua', fabric:'katan-silk', colour_family:'red', published:1,
      created_at:new Date().toISOString(), updated_at:new Date().toISOString(),
    };
    const columns = Object.keys(product);
    db().prepare('INSERT INTO product ('+columns.join(',')+') VALUES ('+columns.map(()=>'?').join(',')+')').run(...Object.values(product));
    for (const input of [null, [], [{handle:'test-piece',quantity:-1}], [{handle:'test-piece',quantity:1.5}], [{handle:'test-piece',quantity:Infinity}], [{handle:'test-piece',quantity:1},{handle:'test-piece',quantity:1}]]) assert.equal(priceCart(input).ok,false);
    const priced = priceCart([{handle:'test-piece',quantity:1,price:1}]);
    assert.equal(priced.ok,true);
    assert.equal(priced.cart.totalMinor,100000);
    const customer = {email:'test@example.invalid',phone:'1234567890',fullName:'Test',addressLine1:'Test',city:'Test',state:'Test',postcode:'221001'};
    const first = createPendingOrder(priced.cart,customer);
    const second = createPendingOrder(priced.cart,customer);
    assert.notEqual(first.reference,second.reference);
    attachGatewayOrder(first.id,'order_first');
    attachGatewayOrder(second.id,'order_second');
    assert.equal(markPaid('order_first','pay_first',1).ok,false);
    assert.equal(db().prepare('SELECT inventory_quantity AS n FROM product').get().n,1);
    assert.equal(markPaid('order_first','pay_first',100000).ok,true);
    assert.equal(markPaid('order_first','pay_first',100000).alreadyRecorded,true);
    assert.equal(db().prepare('SELECT inventory_quantity AS n FROM product').get().n,0);
    assert.throws(()=>markPaid('order_second','pay_second',100000),OutOfStockError);
    assert.equal(db().prepare('SELECT status FROM customer_order WHERE id=?').get(second.id).status,'pending');
    closeDb();
  `], { cwd: process.cwd(), env: { ...process.env, DATABASE_PATH: ":memory:" }, stdio: "pipe" });
});
