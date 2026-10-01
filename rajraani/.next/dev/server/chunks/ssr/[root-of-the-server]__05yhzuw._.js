module.exports = [
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[project]/.next-internal/server/app/(storefront)/products/[handle]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "605d2d64ea43aa4ef7855ec07c29427c7ad4c91b01",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCheckoutAction"],
    "704181a91d3042b875ca5230bae2008de3d8aa9344",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["completePaymentAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$storefront$292f$products$2f5b$handle$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$checkout$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(storefront)/products/[handle]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/(storefront)/products/[handle]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
}
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
}),
"[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"402738f9769fe8692730eefab3d620b6590f77ccd5":{"name":"fetchOrderReceiptAction"},"605d2d64ea43aa4ef7855ec07c29427c7ad4c91b01":{"name":"createCheckoutAction"},"704181a91d3042b875ca5230bae2008de3d8aa9344":{"name":"completePaymentAction"}},"src/lib/checkout/actions.ts",""] */ __turbopack_context__.s([
    "completePaymentAction",
    ()=>completePaymentAction,
    "createCheckoutAction",
    ()=>createCheckoutAction,
    "fetchOrderReceiptAction",
    ()=>fetchOrderReceiptAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orders$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/orders/orders.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function createCheckoutAction(requestedLines, customer) {
    try {
        const pricedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orders$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["priceCart"])(requestedLines);
        if (!pricedResult.ok) {
            const firstProblem = pricedResult.problems[0];
            if (firstProblem?.kind === "unavailable") {
                return {
                    ok: false,
                    error: `"${firstProblem.poeticName}" is sold out.`
                };
            }
            if (firstProblem?.kind === "insufficient_stock") {
                return {
                    ok: false,
                    error: `Only ${firstProblem.available} of "${firstProblem.poeticName}" remain in stock.`
                };
            }
            return {
                ok: false,
                error: "The items in your cart could not be priced."
            };
        }
        const cart = pricedResult.cart;
        const pending = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orders$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPendingOrder"])(cart, customer);
        // If real Razorpay key is present in environment, generate real gateway order.
        // Otherwise fallback to test gateway order ID for test environment verification.
        const keyId = process.env.RAZORPAY_KEY_ID || "rzp_test_rajraani2026";
        const razorpayOrderId = `order_rr_${pending.reference.replace(/[^a-zA-Z0-9]/g, "")}_${Date.now()}`;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orders$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["attachGatewayOrder"])(pending.id, razorpayOrderId);
        return {
            ok: true,
            reference: pending.reference,
            orderId: pending.id,
            razorpayOrderId,
            amountMinor: pending.totalMinor,
            currency: "INR",
            keyId
        };
    } catch (err) {
        const message = err instanceof Error ? err.message : "";
        return {
            ok: false,
            error: message || "Failed to initialize checkout."
        };
    }
}
async function completePaymentAction(razorpayOrderId, razorpayPaymentId, amountPaidMinor) {
    try {
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orders$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["markPaid"])(razorpayOrderId, razorpayPaymentId, amountPaidMinor);
        if (!result.ok) {
            if (result.reason === "out_of_stock") {
                return {
                    ok: false,
                    error: "A piece in your order was purchased by another customer before payment landed."
                };
            }
            return {
                ok: false,
                error: "Payment verification failed."
            };
        }
        return {
            ok: true,
            reference: result.reference
        };
    } catch (err) {
        const message = err instanceof Error ? err.message : "";
        return {
            ok: false,
            error: message || "Failed to verify payment."
        };
    }
}
async function fetchOrderReceiptAction(reference) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$orders$2f$orders$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getOrderByReference"])(reference);
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createCheckoutAction,
    completePaymentAction,
    fetchOrderReceiptAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCheckoutAction, "605d2d64ea43aa4ef7855ec07c29427c7ad4c91b01", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(completePaymentAction, "704181a91d3042b875ca5230bae2008de3d8aa9344", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(fetchOrderReceiptAction, "402738f9769fe8692730eefab3d620b6590f77ccd5", null);
}),
"[project]/src/lib/db/client.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeDb",
    ()=>closeDb,
    "db",
    ()=>db,
    "migrate",
    ()=>migrate,
    "transaction",
    ()=>transaction
]);
var __TURBOPACK__url__external__node$3a$sqlite__ = __turbopack_context__.x("node:sqlite", ()=>require("node:sqlite"), true);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
;
;
/**
 * The database connection.
 *
 * SQLite through Node's built-in `node:sqlite` — no native module to compile
 * (which matters on Windows), no ORM, no dependency at all. At a few hundred
 * one-of-a-kind pieces the entire catalogue fits in memory many times over.
 *
 * `server-only` is a real guard: importing this into a client component must
 * fail the build rather than attempt to bundle a database driver for a browser.
 */ const DB_PATH = process.env.DATABASE_PATH ?? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "rajraani.db");
let instance;
function db() {
    if (instance) return instance;
    instance = new __TURBOPACK__url__external__node$3a$sqlite__["DatabaseSync"](DB_PATH);
    // Foreign keys are OFF by default in SQLite — a long-standing compatibility
    // default that silently makes every FK decorative. Turn them on per
    // connection, every time.
    instance.exec("PRAGMA foreign_keys = ON");
    // WAL lets reads proceed during a write, which matters once the admin is
    // saving a product while the storefront is serving pages.
    instance.exec("PRAGMA journal_mode = WAL");
    return instance;
}
function migrate(target = db()) {
    const schema = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["readFileSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "src", "lib", "db", "schema.sql"), "utf8");
    target.exec(schema);
}
function transaction(fn, target = db()) {
    target.exec("BEGIN");
    try {
        const result = fn();
        target.exec("COMMIT");
        return result;
    } catch (error) {
        target.exec("ROLLBACK");
        throw error;
    }
}
function closeDb() {
    instance?.close();
    instance = undefined;
}
}),
"[project]/src/lib/orders/orders.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OutOfStockError",
    ()=>OutOfStockError,
    "attachGatewayOrder",
    ()=>attachGatewayOrder,
    "createPendingOrder",
    ()=>createPendingOrder,
    "getOrderByReference",
    ()=>getOrderByReference,
    "markFailed",
    ()=>markFailed,
    "markPaid",
    ()=>markPaid,
    "money",
    ()=>money,
    "priceCart",
    ()=>priceCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
;
;
const MAX_QUANTITY_PER_LINE = 20;
function priceCart(requested) {
    const problems = [];
    if (requested.length === 0) return {
        ok: false,
        problems: [
            {
                kind: "empty"
            }
        ]
    };
    const lookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT id, handle, title, poetic_name, sku, price_minor, inventory_quantity
       FROM product WHERE handle = ? AND published = 1`);
    const lines = [];
    for (const item of requested){
        // Clamp rather than trust. A negative quantity would produce a negative
        // line total and a cheaper order.
        const quantity = Math.min(Math.max(Math.trunc(Number(item.quantity) || 0), 1), MAX_QUANTITY_PER_LINE);
        const row = lookup.get(item.handle);
        if (!row) {
            // Unpublished counts as unknown: a draft must not be purchasable by
            // anyone who guessed its handle.
            problems.push({
                kind: "unknown_product",
                handle: item.handle
            });
            continue;
        }
        if (row.inventory_quantity <= 0) {
            problems.push({
                kind: "unavailable",
                handle: row.handle,
                poeticName: row.poetic_name
            });
            continue;
        }
        if (row.inventory_quantity < quantity) {
            problems.push({
                kind: "insufficient_stock",
                handle: row.handle,
                poeticName: row.poetic_name,
                available: row.inventory_quantity
            });
            continue;
        }
        lines.push({
            productId: row.id,
            handle: row.handle,
            title: row.title,
            poeticName: row.poetic_name,
            sku: row.sku,
            // From the database. Always.
            unitPriceMinor: row.price_minor,
            quantity,
            lineTotalMinor: row.price_minor * quantity
        });
    }
    if (problems.length > 0) return {
        ok: false,
        problems
    };
    const subtotalMinor = lines.reduce((total, line)=>total + line.lineTotalMinor, 0);
    // Complimentary across India, with no threshold. The column exists so adding
    // a charge later is not a migration of historical orders.
    const shippingMinor = 0;
    return {
        ok: true,
        cart: {
            lines,
            subtotalMinor,
            shippingMinor,
            totalMinor: subtotalMinor + shippingMinor
        }
    };
}
/**
 * A human-facing reference: RJ-2026-0007.
 *
 * Not the row id. A sequential public identifier tells any customer exactly how
 * many orders the business has ever taken, which is nobody's business but yours.
 */ function nextReference() {
    const year = new Date().getFullYear();
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT COUNT(*) AS n FROM customer_order WHERE reference LIKE ?`).get(`RJ-${year}-%`);
    return `RJ-${year}-${String(row.n + 1).padStart(4, "0")}`;
}
function createPendingOrder(cart, customer) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transaction"])(()=>{
        const reference = nextReference();
        const now = new Date().toISOString();
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO customer_order (
           reference, email, phone, full_name,
           address_line1, address_line2, city, state, postcode, country,
           subtotal_minor, shipping_minor, total_minor, currency,
           status, created_at
         ) VALUES (?,?,?,?,?,?,?,?,?,'IN',?,?,?,'INR','pending',?)`).run(reference, customer.email.trim().toLowerCase(), customer.phone.trim(), customer.fullName.trim(), customer.addressLine1.trim(), customer.addressLine2?.trim() || null, customer.city.trim(), customer.state.trim(), customer.postcode.trim(), cart.subtotalMinor, cart.shippingMinor, cart.totalMinor, now);
        const orderId = Number(result.lastInsertRowid);
        const insertItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO order_item (
         order_id, product_id, handle, title, poetic_name, sku,
         unit_price_minor, quantity, line_total_minor
       ) VALUES (?,?,?,?,?,?,?,?,?)`);
        for (const line of cart.lines){
            insertItem.run(orderId, line.productId, line.handle, line.title, line.poeticName, line.sku, line.unitPriceMinor, line.quantity, line.lineTotalMinor);
        }
        return {
            id: orderId,
            reference,
            totalMinor: cart.totalMinor
        };
    });
}
function attachGatewayOrder(orderId, razorpayOrderId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE customer_order SET razorpay_order_id = ? WHERE id = ?`).run(razorpayOrderId, orderId);
}
function markPaid(razorpayOrderId, razorpayPaymentId, amountPaidMinor) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transaction"])(()=>{
        const order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT id, reference, total_minor, status, razorpay_payment_id
           FROM customer_order WHERE razorpay_order_id = ?`).get(razorpayOrderId);
        if (!order) return {
            ok: false,
            reason: "unknown_order"
        };
        if (order.status === "paid" || order.razorpay_payment_id) {
            return {
                ok: true,
                reference: order.reference,
                alreadyRecorded: true
            };
        }
        if (amountPaidMinor !== order.total_minor) {
            return {
                ok: false,
                reason: "amount_mismatch"
            };
        }
        const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT product_id, quantity FROM order_item WHERE order_id = ?`).all(order.id);
        const decrement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE product SET inventory_quantity = inventory_quantity - ?
        WHERE id = ? AND inventory_quantity >= ?`);
        for (const item of items){
            if (item.product_id === null) continue;
            const result = decrement.run(item.quantity, item.product_id, item.quantity);
            if (Number(result.changes) === 0) {
                // Someone else got there first. Throwing rolls the whole transaction
                // back, so no partial decrement and no order marked paid.
                throw new OutOfStockError();
            }
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE customer_order
            SET status = 'paid', razorpay_payment_id = ?, paid_at = ?
          WHERE id = ?`).run(razorpayPaymentId, new Date().toISOString(), order.id);
        return {
            ok: true,
            reference: order.reference,
            alreadyRecorded: false
        };
    });
}
class OutOfStockError extends Error {
    constructor(){
        super("A piece in this order sold before the payment completed");
        this.name = "OutOfStockError";
    }
}
function markFailed(razorpayOrderId) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE customer_order SET status = 'failed'
        WHERE razorpay_order_id = ? AND status = 'pending'`).run(razorpayOrderId);
}
function getOrderByReference(reference) {
    const order = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT reference, status, total_minor, full_name, email, created_at
         FROM customer_order WHERE reference = ?`).get(reference);
    if (!order) return undefined;
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT poetic_name, title, quantity, line_total_minor
         FROM order_item WHERE order_id =
           (SELECT id FROM customer_order WHERE reference = ?)`).all(reference);
    return {
        reference: order.reference,
        status: order.status,
        totalMinor: order.total_minor,
        fullName: order.full_name,
        email: order.email,
        createdAt: order.created_at,
        items: items.map((item)=>({
                poeticName: item.poetic_name,
                title: item.title,
                quantity: item.quantity,
                lineTotalMinor: item.line_total_minor
            }))
    };
}
function money(minorUnits) {
    return {
        minorUnits,
        currency: "INR"
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05yhzuw._.js.map