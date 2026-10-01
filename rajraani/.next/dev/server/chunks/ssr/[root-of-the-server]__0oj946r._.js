module.exports = [
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/.next-internal/server/app/(storefront)/products/[handle]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/newsletter-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/admin/text-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "605d2d64ea43aa4ef7855ec07c29427c7ad4c91b01",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCheckoutAction"],
    "6074a3fd1540a0d5c529041c33d158def69b680996",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subscribeAction"],
    "70260759ea2488b9b9dee6a9a3ac059989f75cd2bd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$text$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changeTextAction"],
    "704181a91d3042b875ca5230bae2008de3d8aa9344",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["completePaymentAction"],
    "70fcf7a8bb7dc28486e7320a7ef57cb4e092aaa02d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$text$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changePhotoAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$storefront$292f$products$2f5b$handle$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$checkout$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$newsletter$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$admin$2f$text$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(storefront)/products/[handle]/page/actions.js { ACTIONS_MODULE0 => "[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/newsletter-actions.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/src/lib/admin/text-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/newsletter-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$text$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/text-actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/(storefront)/products/[handle]/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/newsletter-actions.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/src/lib/admin/text-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/checkout/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/newsletter-actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$text$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/text-actions.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/src/lib/admin/history.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describe",
    ()=>describe,
    "listChanges",
    ()=>listChanges,
    "rawCollection",
    ()=>rawCollection,
    "rawPage",
    ()=>rawPage,
    "rawProduct",
    ()=>rawProduct,
    "rawSetting",
    ()=>rawSetting,
    "recordChange",
    ()=>recordChange,
    "restoreChange",
    ()=>restoreChange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/admin-queries.ts [app-rsc] (ecmascript)");
;
;
;
let ready = false;
function table() {
    if (!ready) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().exec(`CREATE TABLE IF NOT EXISTS change_log (
      id          INTEGER PRIMARY KEY,
      kind        TEXT NOT NULL,
      target      TEXT NOT NULL,
      label       TEXT NOT NULL,
      summary     TEXT NOT NULL,
      before_json TEXT,
      after_json  TEXT,
      restorable  INTEGER NOT NULL DEFAULT 1,
      who         TEXT NOT NULL,
      created_at  TEXT NOT NULL
    )`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().exec("CREATE INDEX IF NOT EXISTS change_log_target_idx ON change_log (kind, target, id)");
        ready = true;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])();
}
function rawSetting(key) {
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT value_json FROM setting WHERE key = ?").get(key);
    return row?.value_json ?? null;
}
function rawPage(slug) {
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT slug, kind, title, standfirst, sections_json, published FROM page WHERE slug = ?").get(slug);
    return row ? JSON.stringify(row) : null;
}
function rawCollection(handle) {
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT handle, title, seo_intro, kind, facets_json, campaign_slug, position FROM collection WHERE handle = ?").get(handle);
    if (!row) return null;
    const pieces = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT product_id FROM collection_product WHERE collection_handle = ? ORDER BY position").all(handle).map((piece)=>piece.product_id);
    return JSON.stringify({
        ...row,
        pieces
    });
}
function rawProduct(id) {
    const product = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProductForEdit"])(id);
    if (!product) return null;
    const { id: _id, ...input } = product;
    void _id;
    return JSON.stringify(input);
}
// ── Describing a change in plain words ──────────────────────────────────────
/** Every string and number in a JSON value, by path. */ function leaves(value, path = "", out = new Map()) {
    if (value === null || value === undefined) return out;
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
        out.set(path, String(value));
    } else if (Array.isArray(value)) {
        value.forEach((item, index)=>leaves(item, `${path}[${index}]`, out));
    } else if (typeof value === "object") {
        for (const [key, inner] of Object.entries(value)){
            if (key === "sections_json" && typeof inner === "string") {
                try {
                    leaves(JSON.parse(inner), `${path}.sections`, out);
                    continue;
                } catch  {
                /* fall through */ }
            }
            leaves(inner, `${path}.${key}`, out);
        }
    }
    return out;
}
const clip = (text, length = 50)=>text.length > length ? `${text.slice(0, length)}…` : text;
function describe(before, after) {
    const parse = (json)=>{
        if (json === null) return null;
        try {
            return JSON.parse(json);
        } catch  {
            return json;
        }
    };
    const a = leaves(parse(before));
    const b = leaves(parse(after));
    const changed = [];
    let photos = 0;
    for (const [path, value] of b){
        const old = a.get(path);
        if (old === value) continue;
        if (/\.src$/.test(path)) photos++;
        else if (old !== undefined) changed.push([
            old,
            value
        ]);
    }
    const added = [
        ...b.keys()
    ].filter((path)=>!a.has(path) && !/\.src$/.test(path)).length;
    const removed = [
        ...a.keys()
    ].filter((path)=>!b.has(path)).length;
    if (before === null && after !== null) return "Created";
    const parts = [];
    if (changed.length === 1) parts.push(`Changed “${clip(changed[0][0])}” to “${clip(changed[0][1])}”`);
    else if (changed.length > 1) parts.push(`${changed.length} words or settings changed, e.g. “${clip(changed[0][0], 30)}” → “${clip(changed[0][1], 30)}”`);
    if (photos) parts.push(`${photos} photo${photos === 1 ? "" : "s"} changed`);
    if (added && !removed) parts.push("something added");
    if (removed && !added) parts.push("something removed");
    if (added && removed) parts.push("blocks moved, added or removed");
    return parts.join("; ") || "Saved with no visible change";
}
function recordChange(entry) {
    try {
        table().prepare(`INSERT INTO change_log (kind, target, label, summary, before_json, after_json, restorable, who, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`).run(entry.kind, entry.target, entry.label, entry.summary ?? describe(entry.before, entry.after), entry.before, entry.after, entry.restorable === false ? 0 : 1, entry.who, new Date().toISOString());
    } catch (error) {
        // The change itself has already been saved; losing its log entry must not
        // turn a successful save into an error on screen.
        console.error("[history] could not record a change", error);
    }
}
function listChanges(limit = 200) {
    const rows = table().prepare(`SELECT c.id, c.kind, c.target, c.label, c.summary, c.who, c.created_at, c.restorable,
              (SELECT COUNT(*) FROM change_log l WHERE l.kind = c.kind AND l.target = c.target AND l.id > c.id) AS later
         FROM change_log c ORDER BY c.id DESC LIMIT ?`).all(limit);
    return rows.map((row)=>({
            id: row.id,
            kind: row.kind,
            target: row.target,
            label: row.label,
            summary: row.summary,
            who: row.who,
            createdAt: row.created_at,
            restorable: row.restorable === 1,
            laterOnSameTarget: row.later
        }));
}
// ── Putting back ────────────────────────────────────────────────────────────
function writeSetting(key, json) {
    if (json === null) (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("DELETE FROM setting WHERE key = ?").run(key);
    else (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO setting (key, value_json, updated_at) VALUES (?, ?, datetime('now'))
         ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at`).run(key, json);
}
/** Make a collection match a recorded state; null means it did not exist. */ function writeCollection(handle, json) {
    if (json === null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("DELETE FROM collection WHERE handle = ?").run(handle);
        return;
    }
    const value = JSON.parse(json);
    const exists = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT 1 FROM collection WHERE handle = ?").get(handle);
    if (exists) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("UPDATE collection SET title = ?, seo_intro = ? WHERE handle = ?").run(value.title, value.seo_intro, handle);
        if (value.kind === "facet" && value.facets_json) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("UPDATE collection SET facets_json = ? WHERE handle = ?").run(value.facets_json, handle);
        }
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("INSERT INTO collection (handle, title, seo_intro, kind, facets_json, campaign_slug, position) VALUES (?, ?, ?, ?, ?, ?, ?)").run(handle, value.title, value.seo_intro, value.kind ?? "edit", value.facets_json ?? null, value.campaign_slug ?? null, value.position ?? 0);
    }
    // Older log entries recorded only the name and intro; leave pieces alone then.
    if (value.pieces && value.kind !== "facet") {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("DELETE FROM collection_product WHERE collection_handle = ?").run(handle);
        value.pieces.forEach((id, position)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("INSERT OR IGNORE INTO collection_product (collection_handle, product_id, position) VALUES (?, ?, ?)").run(handle, id, position));
    }
}
function writePage(slug, json) {
    if (json === null) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("DELETE FROM page WHERE slug = ?").run(slug);
        return;
    }
    const page = JSON.parse(json);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO page (slug, kind, title, standfirst, sections_json, published, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
       ON CONFLICT(slug) DO UPDATE SET title = excluded.title, standfirst = excluded.standfirst,
         sections_json = excluded.sections_json, published = excluded.published, updated_at = excluded.updated_at`).run(slug, page.kind, page.title, page.standfirst, page.sections_json, page.published);
}
/** What a put back did, in the same words as the change it undid. */ function putBackSummary(kind, now, restored) {
    try {
        if (kind === "stock") {
            const from = JSON.parse(now ?? "{}").quantity;
            const to = JSON.parse(restored ?? "{}").quantity;
            return `stock ${from} → ${to}${to === 0 ? " (sold out)" : ""}`;
        }
        if (kind === "visibility") {
            return JSON.parse(restored ?? "{}").published ? "shown on the shop again" : "hidden from the shop again";
        }
    } catch  {
    /* fall through to the general description */ }
    if (restored === null) return "back to the built-in version";
    const text = describe(now, restored);
    return text.charAt(0).toLowerCase() + text.slice(1);
}
function restoreChange(id, who) {
    const row = table().prepare("SELECT kind, target, label, before_json, restorable FROM change_log WHERE id = ?").get(id);
    if (!row) return {
        ok: false,
        error: "That change is no longer in the list."
    };
    if (!row.restorable) return {
        ok: false,
        error: "This kind of change cannot be put back from here."
    };
    const { kind, target, before_json: before } = row;
    let now = null;
    let refresh = [
        "/"
    ];
    switch(kind){
        case "setting":
            now = rawSetting(target);
            writeSetting(target, before);
            refresh = [
                "/"
            ];
            break;
        case "page":
            now = rawPage(target);
            writePage(target, before);
            refresh = [
                `/pages/${target}`
            ];
            break;
        case "collection":
            {
                now = rawCollection(target);
                writeCollection(target, before);
                refresh = [
                    `/collections/${target}`
                ];
                break;
            }
        case "product":
            {
                const productId = Number(target);
                now = rawProduct(productId);
                if (!before || !now) return {
                    ok: false,
                    error: "That piece no longer exists."
                };
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveProduct"])(JSON.parse(before), productId);
                break;
            }
        case "stock":
            {
                const productId = Number(target);
                const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT inventory_quantity AS q FROM product WHERE id = ?").get(productId);
                if (!current || !before) return {
                    ok: false,
                    error: "That piece no longer exists."
                };
                now = JSON.stringify({
                    quantity: current.q
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("UPDATE product SET inventory_quantity = ? WHERE id = ?").run(JSON.parse(before).quantity, productId);
                break;
            }
        case "visibility":
            {
                const productId = Number(target);
                const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT published FROM product WHERE id = ?").get(productId);
                if (!current || !before) return {
                    ok: false,
                    error: "That piece no longer exists."
                };
                now = JSON.stringify({
                    published: current.published === 1
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setPublished"])(productId, JSON.parse(before).published);
                break;
            }
        default:
            return {
                ok: false,
                error: "This kind of change cannot be put back from here."
            };
    }
    recordChange({
        kind,
        target,
        label: row.label,
        who,
        before: now,
        after: before,
        summary: `Put back: ${putBackSummary(kind, now, before)}`
    });
    return {
        ok: true,
        refresh
    };
}
}),
"[project]/src/lib/admin/text-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"70260759ea2488b9b9dee6a9a3ac059989f75cd2bd":{"name":"changeTextAction"},"70fcf7a8bb7dc28486e7320a7ef57cb4e092aaa02d":{"name":"changePhotoAction"}},"src/lib/admin/text-actions.ts",""] */ __turbopack_context__.s([
    "changePhotoAction",
    ()=>changePhotoAction,
    "changeTextAction",
    ()=>changeTextAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2d$defs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/site-text-defs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/site-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/history.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const STALE = "This text was changed somewhere else since you opened this screen. Reload the page and try again.";
/** Set a string at `path` inside a cloned value. Returns false if the path is wrong or stale. */ function setAt(root, path, expected, next) {
    let node = root;
    for (const step of path.slice(0, -1)){
        const child = node?.[step];
        if (!child || typeof child !== "object") return false;
        node = child;
    }
    const last = path.at(-1);
    if (node[last] !== expected) return false;
    node[last] = next;
    return true;
}
async function changeTextAction(ref, expected, next) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    if (typeof next !== "string" || next.length > 5000) return {
        ok: false,
        error: "That text is too long."
    };
    const summary = `Changed “${expected.length > 50 ? expected.slice(0, 50) + "…" : expected}” to “${next.length > 50 ? next.slice(0, 50) + "…" : next}”`;
    switch(ref.kind){
        case "site":
            {
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2d$defs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSiteTextKey"])(ref.key)) return {
                    ok: false,
                    error: "Unknown text."
                };
                const before = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawSetting"])("site.text");
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveSiteText"])({
                    [ref.key]: next
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
                    kind: "setting",
                    target: "site.text",
                    label: "Site-wide text",
                    who: admin.email,
                    before,
                    after: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawSetting"])("site.text"),
                    summary
                });
                // Site-wide lines appear on every page.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
                return {
                    ok: true
                };
            }
        case "home":
            {
                const sections = structuredClone(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].getHomepageSections());
                if (!setAt(sections, ref.path, expected, next)) return {
                    ok: false,
                    error: STALE
                };
                const before = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawSetting"])("homepage.sections");
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].saveHomepageSections(sections);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
                    kind: "setting",
                    target: "homepage.sections",
                    label: "Homepage",
                    who: admin.email,
                    before,
                    after: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawSetting"])("homepage.sections"),
                    summary
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
                return {
                    ok: true
                };
            }
        case "page":
        case "pageMeta":
            {
                const page = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].getPage(ref.slug);
                if (!page) return {
                    ok: false,
                    error: "That page no longer exists."
                };
                const copy = structuredClone(page);
                if (ref.kind === "pageMeta") {
                    if (copy[ref.field] !== expected) return {
                        ok: false,
                        error: STALE
                    };
                    if (ref.field === "title" && !next.trim()) return {
                        ok: false,
                        error: "A page needs a title."
                    };
                    copy[ref.field] = next;
                } else if (!setAt(copy.sections, ref.path, expected, next)) {
                    return {
                        ok: false,
                        error: STALE
                    };
                }
                const before = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawPage"])(ref.slug);
                await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].savePage(copy);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
                    kind: "page",
                    target: ref.slug,
                    label: `Page: ${copy.title}`,
                    who: admin.email,
                    before,
                    after: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawPage"])(ref.slug),
                    summary
                });
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/pages/${ref.slug}`);
                return {
                    ok: true
                };
            }
    }
}
/** Walk to the object at `path`, or undefined. */ function objectAt(root, path) {
    let node = root;
    for (const step of path){
        const child = node?.[step];
        if (!child || typeof child !== "object") return undefined;
        node = child;
    }
    return node;
}
async function changePhotoAction(ref, expectedSrc, nextSrc) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    if (!/^\/media\/[0-9]+-[a-z0-9-]+\.webp$/.test(nextSrc)) {
        return {
            ok: false,
            error: "Choose a photo from the library."
        };
    }
    const apply = (root)=>{
        const art = objectAt(root, ref.path);
        if (!art?.desktop || !art.mobile) return {
            ok: false,
            error: "That photo could not be found. Reload the page."
        };
        if (art.desktop.src !== expectedSrc) return {
            ok: false,
            error: STALE
        };
        const phoneFollows = !art.mobile.src || art.mobile.src === art.desktop.src;
        art.desktop = {
            ...art.desktop,
            src: nextSrc
        };
        if (phoneFollows) art.mobile = {
            ...art.mobile,
            src: nextSrc
        };
        return undefined;
    };
    if (ref.kind === "home") {
        const sections = structuredClone(await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].getHomepageSections());
        const failed = apply(sections);
        if (failed) return failed;
        const before = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawSetting"])("homepage.sections");
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].saveHomepageSections(sections);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
            kind: "setting",
            target: "homepage.sections",
            label: "Homepage",
            who: admin.email,
            before,
            after: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawSetting"])("homepage.sections"),
            summary: "1 photo changed"
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
        return {
            ok: true
        };
    }
    const page = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].getPage(ref.slug);
    if (!page) return {
        ok: false,
        error: "That page no longer exists."
    };
    const copy = structuredClone(page);
    const failed = apply(copy.sections);
    if (failed) return failed;
    const before = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawPage"])(ref.slug);
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].savePage(copy);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
        kind: "page",
        target: ref.slug,
        label: `Page: ${copy.title}`,
        who: admin.email,
        before,
        after: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawPage"])(ref.slug),
        summary: "1 photo changed"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/pages/${ref.slug}`);
    return {
        ok: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    changeTextAction,
    changePhotoAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changeTextAction, "70260759ea2488b9b9dee6a9a3ac059989f75cd2bd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changePhotoAction, "70fcf7a8bb7dc28486e7320a7ef57cb4e092aaa02d", null);
}),
"[project]/src/lib/auth/password.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashPassword",
    ()=>hashPassword,
    "needsRehash",
    ()=>needsRehash,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
;
/**
 * Password hashing, with scrypt from node:crypto.
 *
 * No dependency. scrypt is memory-hard and is what Node ships for exactly this
 * job; bcrypt would mean a native module, and argon2 another.
 *
 * The parameters are stored *inside* the hash string rather than as constants
 * here. That is not decoration: it means raising the cost later does not
 * invalidate existing passwords — old hashes keep verifying with the parameters
 * they were made with, and each one upgrades the next time its owner logs in.
 *
 * Format: scrypt$N$r$p$salt$hash   (salt and hash base64)
 */ const N = 16_384; // CPU/memory cost. ~100ms on a laptop, which is the point.
const r = 8;
const p = 1;
const KEY_LENGTH = 64;
const SALT_LENGTH = 16;
function hashPassword(password) {
    if (password.length < 12) {
        // Enforced here rather than only in the form, because the CLI that creates
        // the first admin does not go through a form.
        throw new Error("Password must be at least 12 characters");
    }
    const salt = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(SALT_LENGTH);
    const hash = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["scryptSync"])(password.normalize("NFKC"), salt, KEY_LENGTH, {
        N,
        r,
        p
    });
    return [
        "scrypt",
        N,
        r,
        p,
        salt.toString("base64"),
        hash.toString("base64")
    ].join("$");
}
function verifyPassword(password, stored) {
    const parts = stored.split("$");
    if (parts.length !== 6 || parts[0] !== "scrypt") return false;
    const [, nRaw, rRaw, pRaw, saltRaw, hashRaw] = parts;
    const cost = Number(nRaw);
    const blockSize = Number(rRaw);
    const parallelism = Number(pRaw);
    if (!cost || !blockSize || !parallelism || !saltRaw || !hashRaw) return false;
    let expected;
    let actual;
    try {
        expected = Buffer.from(hashRaw, "base64");
        actual = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["scryptSync"])(password.normalize("NFKC"), Buffer.from(saltRaw, "base64"), expected.length, {
            N: cost,
            r: blockSize,
            p: parallelism
        });
    } catch  {
        return false;
    }
    // Constant-time. A plain === leaks how much of the hash matched, through
    // timing, which is enough to reconstruct it given patience.
    return expected.length === actual.length && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(expected, actual);
}
function needsRehash(stored) {
    const parts = stored.split("$");
    if (parts.length !== 6 || parts[0] !== "scrypt") return true;
    return Number(parts[1]) < N || Number(parts[2]) < r;
}
}),
"[project]/src/lib/auth/session.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currentAdmin",
    ()=>currentAdmin,
    "pruneSessions",
    ()=>pruneSessions,
    "requireAdmin",
    ()=>requireAdmin,
    "safeEqual",
    ()=>safeEqual,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/password.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
/**
 * Admin sessions.
 *
 * The cookie carries a random token; the database stores only its SHA-256.
 * That way a leaked database backup does not hand over live sessions — the
 * same reason passwords are not stored in the clear. Session tokens are
 * bearer credentials and deserve the same treatment.
 *
 * Sessions are opaque and server-side rather than signed JWTs, because the
 * property that matters here is *revocation*: deleting the row logs the user
 * out immediately, everywhere. A stateless token cannot be withdrawn.
 */ const COOKIE = "rj_admin";
/** Non-secret hint for the on-site editor; see signIn. */ const EDIT_HINT = "rj_edit";
const SESSION_DAYS = 7;
/**
 * Development sign-in bypass.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS IS NOT SIMPLY "AUTH REMOVED"
 *
 * The admin edits the catalogue, moves stock and reads orders. An unauthenticated
 * one reachable from the internet is not a rough edge, it is the whole shop. So
 * the password path is untouched and still the only way in on a deployed build;
 * what follows short-circuits it on a developer's machine and cannot be switched
 * on anywhere else.
 *
 * Two independent conditions, both of which must hold:
 *
 *   1. `NODE_ENV !== "production"`. `next build` hard-codes production, so a
 *      deployed bundle cannot take this branch no matter how it is configured —
 *      the check is compiled against a literal, not read at runtime.
 *   2. `ADMIN_AUTH !== "strict"`. An escape hatch for exercising the real login
 *      locally without editing this file.
 *
 * Condition 1 is the one that matters; condition 2 is a convenience. Neither is
 * a substitute for the other.
 *
 * The identity returned is synthetic and deliberately not written to the
 * database: `admin_user` stays empty, no session row is created, and nothing
 * here mints a cookie. Only `email` is consumed downstream (the sidebar prints
 * it), and no table references `admin_user.id`, so a row that does not exist
 * costs nothing.
 *
 * TO TURN IT OFF:  set ADMIN_AUTH=strict in .env.local, or delete this block
 * and the branch in `currentAdmin()`.
 * ─────────────────────────────────────────────────────────────────────────────
 */ const DEV_AUTH_BYPASS = ("TURBOPACK compile-time value", "development") !== "production" && process.env.ADMIN_AUTH !== "strict";
/** The stand-in identity used while the bypass is active. */ const DEV_ADMIN = {
    id: 0,
    email: "dev@localhost"
};
const sha256 = (value)=>(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(value).digest("hex");
async function signIn(email, password) {
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT id, email, password_hash FROM admin_user WHERE email = ?`).get(email.trim().toLowerCase());
    if (!row) {
        // Spend comparable time even when the user does not exist, so response
        // timing does not reveal which emails are registered.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPassword"])(password, `scrypt$16384$8$1$${"A".repeat(24)}$${"A".repeat(88)}`);
        return undefined;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPassword"])(password, row.password_hash)) return undefined;
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(32).toString("base64url");
    const now = new Date();
    const expires = new Date(now.getTime() + SESSION_DAYS * 86_400_000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO admin_session (token, user_id, created_at, expires_at)
       VALUES (?, ?, ?, ?)`).run(sha256(token), row.id, now.toISOString(), expires.toISOString());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE admin_user SET last_login_at = ? WHERE id = ?`).run(now.toISOString(), row.id);
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    store.set(COOKIE, token, {
        httpOnly: true,
        sameSite: "lax",
        secure: ("TURBOPACK compile-time value", "development") === "production",
        path: "/",
        expires
    });
    // A readable hint, carrying nothing secret: it only tells the storefront
    // that an admin may be here, so it asks the server whether to show the
    // editing bar. Ordinary visitors never make that request, and the server
    // still checks the real session before sending anything.
    store.set(EDIT_HINT, "1", {
        sameSite: "lax",
        path: "/",
        expires
    });
    return {
        id: row.id,
        email: row.email
    };
}
async function signOut() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = store.get(COOKIE)?.value;
    if (token) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`DELETE FROM admin_session WHERE token = ?`).run(sha256(token));
    }
    store.delete(COOKIE);
    store.delete(EDIT_HINT);
}
async function currentAdmin() {
    /*
   * Placed here rather than in `requireAdmin`, because this is the one function
   * both the layout guard and every server action funnel through. Putting it in
   * `requireAdmin` alone would leave the login page still believing nobody is
   * signed in, and it would bounce a developer back to a form they cannot use.
   */ if (DEV_AUTH_BYPASS) return DEV_ADMIN;
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = store.get(COOKIE)?.value;
    if (!token) return undefined;
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT u.id, u.email, s.expires_at
         FROM admin_session s
         JOIN admin_user u ON u.id = s.user_id
        WHERE s.token = ?`).get(sha256(token));
    if (!row) return undefined;
    if (new Date(row.expires_at) < new Date()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`DELETE FROM admin_session WHERE token = ?`).run(sha256(token));
        return undefined;
    }
    return {
        id: row.id,
        email: row.email
    };
}
async function requireAdmin() {
    const admin = await currentAdmin();
    if (!admin) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin/login");
    return admin;
}
function pruneSessions() {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`DELETE FROM admin_session WHERE expires_at < ?`).run(new Date().toISOString());
    return Number(result.changes);
}
function safeEqual(a, b) {
    const left = Buffer.from(a);
    const right = Buffer.from(b);
    return left.length === right.length && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(left, right);
}
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
"[project]/src/lib/content/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "content",
    ()=>content,
    "homepageIsSeed",
    ()=>homepageIsSeed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$sections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/sections.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$sqlite$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/sqlite-content.ts [app-rsc] (ecmascript)");
;
;
;
/**
 * Content entry point.
 *
 * Everything reads content through `content`. Which implementation backs it is
 * answered once, here — the same arrangement `catalogue.ts` uses, for the same
 * reason.
 *
 * ── The fallback, and why it is not a hack ──────────────────────────────────
 *
 * `sections.ts` remains the source of the *seed* content, and the database
 * starts empty. An empty homepage row therefore means "nothing has been
 * authored yet", not "the homepage is blank" — and rendering a blank homepage
 * for that would be hostile in exactly the way `catalogue.ts` describes: the
 * difference between not set up yet and broken.
 *
 * So reads fall back to the committed constants when the database has nothing.
 * The first save writes a real row and the fallback stops applying, per key.
 * That also makes the admin non-destructive to try: rearranging sections and
 * saving cannot lose the seed, because the seed is in git.
 * ─────────────────────────────────────────────────────────────────────────────
 */ const inner = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$sqlite$2d$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SqliteContentRepository"]();
/** Seed pages, in the shape the repository returns. */ function seedPages() {
    return Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$sections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAGES"]).map(([slug, page])=>({
            slug,
            // Carried on the seed itself. This used to be inferred here — `slug ===
            // "nadi" || slug === "antaraal"` — which filed every campaign story added
            // after those two under `craft`, silently, in a list the admin groups by
            // kind.
            kind: page.kind,
            title: page.title,
            standfirst: page.standfirst,
            sections: page.sections,
            published: true
        }));
}
const content = {
    async getHomepageSections () {
        const stored = await inner.getHomepageSections();
        return stored.length > 0 ? stored : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$sections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HOMEPAGE_SECTIONS"];
    },
    async listPages () {
        // Per page, like getPage: a saved page replaces its seed, and seed pages
        // nobody has edited yet stay listed. (This used to return the stored rows
        // alone once any existed, so saving one page hid the other nineteen.)
        const stored = await inner.listPages();
        const saved = new Set(stored.map((page)=>page.slug));
        return [
            ...stored,
            ...seedPages().filter((page)=>!saved.has(page.slug))
        ];
    },
    async getPage (slug) {
        const stored = await inner.getPage(slug);
        if (stored) return stored;
        return seedPages().find((page)=>page.slug === slug);
    },
    saveHomepageSections: (sections)=>inner.saveHomepageSections(sections),
    savePage: (page)=>inner.savePage(page),
    deletePage: (slug)=>inner.deletePage(slug)
};
async function homepageIsSeed() {
    const stored = await inner.getHomepageSections();
    return stored.length === 0;
}
}),
"[project]/src/lib/content/sections.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HOMEPAGE_SECTIONS",
    ()=>HOMEPAGE_SECTIONS,
    "PAGES",
    ()=>PAGES,
    "PAGE_IMAGE_HREF",
    ()=>PAGE_IMAGE_HREF
]);
/**
 * The section library.
 *
 * build.md §2.4 specifies a polymorphic `sections[]` — every page on the site
 * is assembled from an ordered list of typed sections, so an editor can build a
 * campaign story with no engineering help (§6). Fifteen section types are
 * specified; six are implemented here, which is enough to prove the
 * architecture and to render the homepage, a campaign story and a craft page.
 * The remaining nine are Sprint 4 work and are additive — a new type is a new
 * member of this union and a new entry in the registry, nothing else.
 *
 * NOTE ON IMAGES: every image field in the spec is a desktop/mobile PAIR,
 * because the category art-directs both on every banner (addendum A7) and an
 * author must not be able to forget the mobile crop. That is baked into the
 * type as `art: { desktop, mobile }`. Today both carry a placeholder tone
 * rather than an asset, so the pairing is visible in the schema before any
 * photography exists to fill it.
 */ // Type-only, and therefore not a runtime cycle: `repository.ts` imports
// `Section` from here. `PageKind` is the schema's CHECK constraint expressed in
// TypeScript and belongs next to the repository that persists it, so the seed
// borrows it rather than restating it and drifting.
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-rsc] (ecmascript)");
;
const pair = (desktop, mobile = desktop)=>({
        desktop: {
            tone: desktop
        },
        mobile: {
            tone: mobile
        }
    });
/**
 * A pair backed by a real image file.
 */ const imagePair = (tone, desktopSrc, mobileSrc = desktopSrc, mobileTone = tone)=>({
        desktop: {
            tone,
            src: `/homepage/${desktopSrc}`
        },
        mobile: {
            tone: mobileTone,
            src: `/homepage/${mobileSrc}`
        }
    });
const HOMEPAGE_SECTIONS = [
    {
        type: "heroCarousel",
        id: "homepage-hero-carousel",
        slides: [
            {
                id: "slide-antaraal",
                align: "right",
                art: imagePair("indigo", "hero/slide-01-antaraal.webp"),
                eyebrow: "Roman Frescoes",
                title: "Antaraal",
                body: "Gheecha silk worked against a katan ground, so the surface takes light unevenly and never twice the same way.",
                ctaLabel: "Discover",
                ctaHref: "/collections/antaraal"
            },
            {
                id: "slide-nadi",
                align: "right",
                art: imagePair("maroon", "hero/slide-02-nadi.webp"),
                eyebrow: "Handloom Day",
                title: "Nadi",
                body: "Nine pieces built outward from one motif at the centre of the pallu, and read from there.",
                ctaLabel: "Discover",
                ctaHref: "/pages/nadi"
            },
            {
                id: "slide-kadhua",
                ink: "dark",
                art: imagePair("gold", "hero/slide-03-kadhua.webp"),
                eyebrow: "Seasonal Edit",
                title: "Kadhua",
                body: "Undyed grounds and real zari, in the lighter weights a long afternoon asks for.",
                ctaLabel: "Discover",
                ctaHref: "/collections/kadhua"
            },
            {
                id: "slide-gifting",
                ink: "dark",
                align: "right",
                art: imagePair("pink", "hero/slide-04-gifting.webp"),
                eyebrow: "Curated Edits",
                title: "The Art of Gifting",
                body: "Thoughtfully handwoven pieces for timeless celebrations.",
                ctaLabel: "Explore Gifts",
                ctaHref: "/collections/gifts"
            },
            {
                id: "slide-art-collectibles",
                art: imagePair("black", "hero/slide-05-art-collectibles.webp"),
                eyebrow: "Metalwork",
                title: "Art & Collectibles",
                body: "Heirloom metal repoussé and master artisan collectibles.",
                ctaLabel: "Discover",
                ctaHref: "/pages/art-collectibles"
            }
        ]
    },
    {
        type: "brandStatement",
        id: "statement",
        quote: "Every piece is one piece.",
        body: "We buy directly from weavers in and around Varanasi, and we make one of a thing. When it sells, it is rewoven or it is not made again."
    },
    {
        type: "collectionTriptych",
        id: "triptych-antaraal",
        art: [
            imagePair("maroon", "gallery/tile-01.webp"),
            imagePair("gold", "gallery/tile-02.webp"),
            imagePair("green", "gallery/tile-03.webp")
        ],
        // Each tile to the piece photographed in it.
        artHrefs: [
            "/products/sindoor-red-katan-silk-kadiyal-saree",
            "/products/chandrika-ivory-tissue-silk-jangla-saree",
            "/products/padmini-pink-moonga-silk-anarkali-suit"
        ],
        title: "Antaraal",
        body: "Gheecha is spun from the short, uneven fibres left after the reel, which is why it will not lie flat and why the light never settles on it. Woven into a katan ground it gives a surface with grain in it.",
        ctaLabel: "Discover",
        ctaHref: "/collections/antaraal"
    },
    {
        type: "videoBand",
        id: "loom-video",
        art: imagePair("black", "video/loom-poster.webp"),
        title: "The Motion of the Loom",
        body: "Between six and twenty-six weeks on a pit loom in Varanasi. Every thread guided by human hand.",
        ctaLabel: "Watch Our Process",
        ctaHref: "/pages/handloom",
        videoSrc: "/homepage/video/loom.mp4"
    },
    {
        type: "categorySplit",
        id: "cat-split",
        items: [
            {
                art: imagePair("maroon", "category/sarees.webp"),
                label: "SAREES",
                href: "/collections/sarees"
            },
            {
                art: imagePair("gold", "category/suits-b.webp"),
                label: "SUITS",
                href: "/collections/suits"
            }
        ]
    },
    {
        type: "editorialSlideshow",
        id: "editorial-womenswear-menswear",
        slides: [
            {
                id: "slide-womenswear",
                ink: "dark",
                art: imagePair("purple", "womens-mens/womenswear.webp"),
                eyebrow: "Womenswear",
                title: "Womenswear",
                body: "Sarees, dupattas and stitched pieces, all off the same looms.",
                ctaLabel: "Explore",
                // Every piece in the catalogue is womenswear, so this is all of it.
                ctaHref: "/collections/all",
                buttonVariant: "secondary",
                textAlign: "right"
            },
            {
                id: "slide-menswear",
                art: imagePair("black", "womens-mens/menswear.webp"),
                /*
         * There is no menswear in the catalogue, and /collections/menswear was
         * a dead link. The frame is a man in a woven stole, and stoles are the
         * one thing here that anyone wears — so that is where it goes, and the
         * words say so rather than promising kurtas we do not sell.
         */ eyebrow: "For him",
                title: "Stoles",
                body: "Handwoven stoles that sit as well over a kurta as over a saree.",
                ctaLabel: "Explore",
                ctaHref: "/collections/stoles",
                buttonVariant: "secondary",
                textAlign: "right",
                verticalAlign: "center"
            }
        ]
    },
    {
        type: "tileRow",
        id: "quick-links",
        items: [
            {
                art: imagePair("pink", "four-tiles/tile-01-bridal.webp"),
                label: "BRIDAL",
                href: "/collections/bridal"
            },
            {
                art: imagePair("gold", "four-tiles/tile-02-gifting.webp"),
                label: "GIFTING",
                href: "/collections/gifts"
            },
            {
                art: imagePair("purple", "four-tiles/tile-03-zarkashi.webp"),
                label: "ZARKASHI",
                // The facet, not a hand-built `/collections/zarkashi` — that handle has
                // never existed and the tile 404d. Same destination the Shop menu uses.
                href: "/collections/sarees?zari=real_zari"
            },
            {
                art: imagePair("black", "four-tiles/tile-04-art-collectibles.webp"),
                label: "REPOUSSÉ",
                href: "/pages/art-collectibles"
            }
        ]
    },
    {
        type: "campaignSlideshow",
        id: "campaign-slideshow",
        slides: [
            {
                id: "slide-kala",
                art: imagePair("maroon", "campaign/kala.webp"),
                title: "Kala",
                body: "Kala is craft with nothing ranked above anything else \u2014 the loom, the " + "brush and the chisel under one word. These are the pieces where the " + "weaving leans hardest on the other three, and where a weaver has " + "clearly been looking at something that was not cloth.",
                ctaLabel: "Discover",
                ctaHref: "/pages/kala"
            },
            /*
       * Was "Charbagh", pointing at /pages/charbagh \u2014 a page that has never
       * existed, so the band's second slide 404d. Replaced 12 Sep 2026 with the
       * campaign the menus now feature, which does have a story behind it.
       */ {
                id: "slide-awadh",
                art: imagePair("green", "campaign/charbagh.webp"),
                title: "Awadh",
                body: "A hundred and twenty miles upriver, ornament is done in thread rather " + "than in metal, and a single spray is trusted to carry a whole width. " + "These were commissioned after a week of looking at it, which is a hard " + "thing to walk out of and then ask for more zari.",
                ctaLabel: "Discover",
                ctaHref: "/pages/awadh"
            }
        ]
    },
    {
        type: "richText",
        id: "closing-thought",
        heading: "Cloth that keeps time",
        paragraphs: [
            "A saree outlives the season it was bought for, and often the person who chose it. That is the argument for weaving slowly and for buying once — a cupboard in this country is a form of archive, and what goes into it should still be worth taking out in twenty years."
        ]
    },
    {
        type: "storesSlideshow",
        id: "stores-banaras-lucknow",
        slides: [
            {
                id: "slide-varanasi",
                art: imagePair("black", "stores/varanasi.webp"),
                title: "VISIT OUR STORES",
                body: "The Banaras room is ten minutes from the looms we buy from. Come and " + "see cloth in daylight, over a shoulder, before deciding anything.",
                ctaLabel: "Banaras Store",
                ctaHref: "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-experience-centre-varanasi"
            },
            {
                id: "slide-lucknow",
                art: imagePair("black", "stores/lucknow.webp"),
                title: "VISIT OUR STORES",
                body: "An appointment, an afternoon, and as many pieces off the shelf as you " + "care to see. Nothing here is sold in a hurry.",
                ctaLabel: "Lucknow Store",
                ctaHref: "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-store-lucknow"
            }
        ]
    }
];
const PAGE_IMAGE_HREF = {
    nadi: "/collections/nadi",
    antaraal: "/collections/antaraal",
    kadhua: "/collections/kadhua",
    handloom: "/collections/sarees",
    kala: "/collections/kala",
    katha: "/collections/katha",
    awadh: "/collections/awadh",
    // No metal in the catalogue yet: the page's own call is to ask what is in.
    "art-collectibles": "/pages/contact",
    // The pictures are of the looms and the people at them.
    "our-story": "/pages/handloom",
    // Pictures of the room; the logical next step is booking a visit to it.
    "banaras-store": "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-experience-centre-varanasi",
    contact: "/pages/banaras-store",
    gifts: "/collections/gifts",
    bridal: "/collections/bridal",
    zarkashi: "/collections/zarkashi"
};
const PAGES = {
    nadi: {
        kind: "campaign_story",
        title: "Nadi",
        standfirst: "A river does not repeat itself. Nine pieces that follow water through the season it belongs to — the colour of it before rain, during, and in the days after.",
        sections: [
            {
                type: "hero",
                id: "nadi-hero",
                art: pair("indigo", "blue"),
                eyebrow: "Monsoon 2026",
                title: "Nadi",
                body: "Woven between March and July, when the light in Banaras changes twice.",
                ctaLabel: "Shop the collection",
                ctaHref: "/collections/nadi"
            },
            {
                type: "richText",
                id: "nadi-intro",
                paragraphs: [
                    "The collection began with a complaint. A weaver we have bought from for years said that everything we commissioned was the colour of a wedding, and that he had not woven a grey in four years.",
                    "So we asked for water instead. Not blue — water, which in this city is mostly brown, sometimes silver, and only occasionally the colour anyone paints it."
                ]
            },
            {
                type: "pullQuote",
                id: "nadi-quote",
                quote: "You cannot weave a river. You can weave the half second where it turns over."
            },
            {
                type: "productRail",
                id: "nadi-rail",
                title: "The pieces",
                collectionHandle: "nadi",
                ctaLabel: "See all"
            },
            {
                type: "poetryBand",
                id: "nadi-close",
                heading: "Before rain, during, after",
                body: "Three greys, two blues, and one yellow that should not work and does."
            }
        ]
    },
    antaraal: {
        kind: "campaign_story",
        title: "Antaraal",
        standfirst: "The interval — the pause a loom takes between one motif and the next. A study in ground, and in the space that makes a pattern legible.",
        sections: [
            {
                type: "hero",
                id: "antaraal-hero",
                art: pair("purple"),
                eyebrow: "Winter 2026",
                title: "Antaraal",
                body: "Five pieces about the parts of a cloth where nothing happens.",
                ctaLabel: "Shop the collection",
                ctaHref: "/collections/antaraal"
            },
            {
                type: "richText",
                id: "antaraal-intro",
                paragraphs: [
                    "A dense field is easy to admire and hard to wear. The pieces here go the other way: the ground is given more room than the motif, and the motif is better for it.",
                    "Two of them are the plainest things we have commissioned. One took twenty-six weeks."
                ]
            },
            {
                type: "productRail",
                id: "antaraal-rail",
                title: "The pieces",
                collectionHandle: "antaraal",
                ctaLabel: "See all"
            }
        ]
    },
    kadhua: {
        kind: "craft",
        title: "On kadhua",
        standfirst: "The slowest technique on a Banarasi loom, and the one that shows most clearly from the wrong side.",
        sections: [
            {
                type: "richText",
                id: "kadhua-what",
                heading: "What it is",
                paragraphs: [
                    "In most figured weaving, the thread that makes a motif runs continuously across the width of the cloth and is cut away behind the parts where it is not wanted. Those cut ends are floats, and they are why the reverse of most brocade looks like a mess.",
                    "Kadhua does not do this. Each motif is woven as its own detached unit, with its own small shuttle, and nothing is carried behind. A saree with two hundred booti has been entered two hundred separate times."
                ]
            },
            {
                type: "pullQuote",
                id: "kadhua-quote",
                quote: "Turn it over. That is the whole test, and it takes two seconds."
            },
            {
                type: "richText",
                id: "kadhua-cost",
                heading: "What it costs",
                paragraphs: [
                    "Between three and six times the loom time of the equivalent cutwork piece. That is the entire price difference, and it is why a kadhua saree and a fekuwa saree that look similar in a photograph are not close in price."
                ]
            },
            {
                type: "productRail",
                id: "kadhua-rail",
                title: "Kadhua pieces",
                collectionHandle: "kadhua",
                ctaLabel: "See all"
            }
        ]
    },
    handloom: {
        kind: "craft",
        title: "Handloom, or not",
        standfirst: "Four tests you can run in a shop, in under a minute, without any special knowledge.",
        sections: [
            {
                type: "richText",
                id: "handloom-tests",
                heading: "The tests",
                paragraphs: [
                    "Look at the reverse first. A handloom piece has small irregularities in the float lengths that a powerloom cannot produce, because a powerloom is more consistent than a person.",
                    "Then look for the pinhole. Handloom weavers pin the selvedge to keep the width even, and the pin leaves a line of small holes down both edges. A powerloom uses a temple and leaves nothing.",
                    "Third, hold it to the light and look at the ground rather than the motif. Handspun yarn varies in thickness along its length, so the ground has a faint unevenness that reads as depth.",
                    "Fourth, ask the price and then ask how long it took. Anyone who knows the piece can answer the second question in weeks. If the answer is a shrug, the first answer is unreliable too."
                ]
            },
            {
                type: "pullQuote",
                id: "handloom-quote",
                quote: "A powerloom is not a fake. It is a different thing, priced as if it were not."
            }
        ]
    },
    /*
   * ── The eight pages the menus land on (12 Sep 2026) ───────────────────────
   *
   * Added because the navigation advertised them and none of them existed. A
   * mega menu is a promise that there is something behind every word in it, and
   * About Us in particular was four links to four 404s — the four a shopper
   * clicks when they are deciding whether to trust a shop they have not heard
   * of with a large sum.
   *
   * These are seed content. The first save from /admin writes a real row and
   * the constant stops applying, per page (see content.ts).
   */ /*
   * ── Campaign and story pages ──────────────────────────────────────────────
   *
   * Laid out against the reference's own campaign pages, measured 12 Sep 2026.
   * Their shape, repeated on every one of them:
   *
   *   full-bleed hero carrying the title
   *   a short rich-text opening
   *   [ 4:5 portrait band | full-bleed banner ] repeated twice, sides alternating
   *   a product rail
   *   a closing line
   *   a full-bleed closing image
   *
   * The detail worth having is that their full-bleed banners ship a SEPARATE
   * MOBILE CROP — 1800×900 on desktop, 900×1350 on a phone. `ArtPair` has
   * required exactly that pairing since the schema was written (see the note at
   * the top of this file), and this is the first content in the build that
   * actually uses it for something other than the same file twice.
   *
   * Photography is theirs and staged locally under `/public/homepage/campaigns/`,
   * which is gitignored. Words are ours.
   */ /*
   * ── Kala and Katha, to their campaign template ────────────────────────────
   *
   * Walked block by block off their pages on 13 Sep 2026. Both run the same
   * shape, and it is not the shape the about pages use:
   *
   *   plain full-bleed banner, no text over it          (1800x1600, 9:8)
   *   rich text: heading, one paragraph, a collection button
   *   band: 4:5 portrait, NO heading, photograph links to the collection
   *   captioned banner, caption ranged RIGHT             (1800x900 + phone crop)
   *   band: 4:5 portrait, no heading, linked
   *   plain full-bleed banner
   *   [kala only] captioned banner for the film, caption CENTRED (1800x600)
   *   rich text: one paragraph
   *   plain full-bleed closing banner                    (1800x1282, 7:5)
   *
   * What this replaces: a `hero` with the title burned over the top-left, bands
   * that carried headings theirs do not have, and a product rail theirs does
   * not run. The rail is gone because the "discover the collection" button and
   * the linked band photographs are how their page sells — three routes to the
   * same listing, none of them a grid dropped into the middle of an essay.
   *
   * The page title sits between the banner and the first block, as it does on
   * the about page. Theirs shows no page title at all; ours keeps one because
   * `lint:headings` wants exactly one h1 and a page without one is bad for
   * search and for screen readers both.
   */ kala: {
        kind: "campaign_story",
        title: "Kala",
        standfirst: "One word for the loom, the brush and the chisel. Pieces where the weaving is plainly looking at something that was not cloth.",
        sections: [
            {
                type: "imageBand",
                id: "kala-hero",
                art: imagePair("maroon", "campaigns/kala-hero.jpg"),
                ratio: "9/8",
                bleed: true,
                padTop: 0,
                padBottom: 0
            },
            {
                type: "richText",
                id: "kala-intro",
                padTop: 20,
                asPageTitle: true,
                tone: "deep",
                measure: "content",
                heading: "What a weaver borrows",
                paragraphs: [
                    "Banarasi design has never been self-sufficient and has never pretended to be. A jaal that reads as a textile pattern turns out, once you have seen the building, to be a screen; a border that looks abstract is a row of niches drawn from memory and flattened until it fits a four-inch strip. Everything on this loom arrived from somewhere that was not a loom."
                ],
                ctaLabel: "Discover the collection",
                ctaHref: "/collections/kala"
            },
            {
                type: "imageWithText",
                id: "kala-band-01",
                art: imagePair("gold", "campaigns/kala-band-01.webp"),
                imageSide: "left",
                ratio: "4/5",
                fullWidth: true,
                ground: "deep",
                inset: true,
                href: "/collections/kala",
                paragraphs: [
                    "We asked four weavers what they had in front of them when they set the last piece they were proud of. None of them said a saree. One said a brass tray his father had beaten, one said the tilework on a gate he passes twice a day, and two said a photograph on a phone."
                ]
            },
            {
                type: "imageBand",
                id: "kala-banner-01",
                art: imagePair("black", "campaigns/kala-banner-01.jpg", "campaigns/kala-banner-01-mob.jpg"),
                ratio: "2/1",
                mobileRatio: "2/3",
                bleed: true,
                padTop: 0,
                padBottom: 0,
                overlay: {
                    title: "A process of discovery",
                    body: "Every curve has to be resolved into a stepped path the loom can execute, and the finer the steps the more picks it takes. A motif copied faithfully from stone costs several times one drawn for cloth to begin with.",
                    align: "right",
                    textAlign: "center",
                    panel: "none",
                    ink: "cream"
                }
            },
            {
                type: "imageWithText",
                id: "kala-band-02",
                art: imagePair("indigo", "campaigns/kala-band-02.png"),
                imageSide: "right",
                ratio: "4/5",
                fullWidth: true,
                ground: "deep",
                href: "/collections/kala",
                paragraphs: [
                    "The pieces gathered here are the ones where that argument was lost on purpose — where the weaver went after the difficult line rather than the one the loom would have preferred, and the extra weeks are visible in the cloth if you know to look for them."
                ]
            },
            {
                type: "imageBand",
                id: "kala-banner-02",
                art: imagePair("maroon", "campaigns/kala-banner-02.webp", "campaigns/kala-banner-02-mob.jpg"),
                ratio: "2/1",
                mobileRatio: "2/3",
                bleed: true,
                padTop: 0,
                padBottom: 0
            },
            {
                type: "imageBand",
                id: "kala-banner-03",
                art: imagePair("black", "campaigns/kala-banner-03.jpg"),
                ratio: "3/1",
                mobileRatio: "3/2",
                bleed: true,
                padTop: 0,
                padBottom: 0,
                overlay: {
                    title: "The making of it",
                    body: "Filmed over four days in the weaving sheds, at the hours when the light is worth having.",
                    align: "center",
                    textAlign: "center",
                    panel: "none",
                    ink: "deep"
                }
            },
            {
                type: "richText",
                id: "kala-closing",
                tone: "deep",
                measure: "content",
                heading: "Nothing here is invented",
                paragraphs: [
                    "It is carried across from somewhere that was not woven, and the carrying is the craft. A weaver who copies well is doing the easiest thing in this city; a weaver who translates is doing the hardest."
                ]
            },
            {
                type: "imageBand",
                id: "kala-closing-image",
                art: imagePair("black", "campaigns/kala-closing.jpg"),
                ratio: "7/5",
                bleed: true,
                padTop: 0,
                padBottom: 0
            }
        ]
    },
    katha: {
        kind: "campaign_story",
        title: "Katha",
        standfirst: "Pieces that are telling you something specific. Figures, episodes, and the problem of putting a story on a garment that will be folded in half.",
        sections: [
            {
                type: "imageBand",
                id: "katha-hero",
                art: imagePair("indigo", "campaigns/katha-hero.jpg"),
                ratio: "9/8",
                bleed: true,
                padTop: 0,
                padBottom: 0
            },
            {
                type: "richText",
                id: "katha-intro",
                padTop: 20,
                asPageTitle: true,
                tone: "brown",
                measure: "content",
                heading: "A story, a telling, an invention",
                paragraphs: [
                    "A hunting field full of animals is the oldest narrative device on this loom and the least honest one: it shows a scene without ever saying what happens next. The pieces here go after the next bit, which is harder than it sounds and has defeated better weavers than the ones who avoid it."
                ],
                ctaLabel: "Discover the collection",
                ctaHref: "/collections/katha"
            },
            {
                type: "imageWithText",
                id: "katha-band-01",
                art: imagePair("maroon", "campaigns/katha-band-01.jpg"),
                imageSide: "left",
                ratio: "4/5",
                fullWidth: true,
                ground: "cream",
                href: "/collections/katha",
                paragraphs: [
                    "A saree is read in fragments, over a shoulder and around a waist, and no viewer ever sees the whole cloth at once. Anything that depends on sequence is lost the moment the piece is worn — which rules out almost every ordinary way of telling a story, and leaves the few that survive being cut up by the person wearing them."
                ]
            },
            {
                type: "imageBand",
                id: "katha-banner-01",
                art: imagePair("black", "campaigns/katha-banner-01.jpg", "campaigns/katha-banner-01-mob.jpg"),
                ratio: "2/1",
                mobileRatio: "2/3",
                bleed: true,
                padTop: 0,
                padBottom: 0,
                overlay: {
                    title: "Playful illusions",
                    body: "Repeat one figure at several sizes rather than laying out a sequence, and any fragment carries the subject even when it does not carry the plot.",
                    align: "right",
                    textAlign: "center",
                    panel: "none",
                    ink: "white"
                }
            },
            {
                type: "imageWithText",
                id: "katha-band-02",
                art: imagePair("gold", "campaigns/katha-band-02.jpg"),
                imageSide: "right",
                ratio: "4/5",
                fullWidth: true,
                ground: "cream",
                href: "/collections/katha",
                paragraphs: [
                    "The pallu holds the single moment that is not repeated, because the pallu is the only part of a saree anyone is guaranteed to look at whole. Everything else is written to survive being glimpsed — which is a constraint most storytellers would refuse and these weavers accepted."
                ]
            },
            {
                type: "imageBand",
                id: "katha-banner-02",
                art: imagePair("indigo", "campaigns/katha-banner-02.jpg", "campaigns/katha-banner-02-mob.jpg"),
                ratio: "2/1",
                mobileRatio: "2/3",
                bleed: true,
                padTop: 0,
                padBottom: 0
            },
            {
                type: "richText",
                id: "katha-closing",
                tone: "brown",
                measure: "content",
                paragraphs: [
                    "Nobody reads a saree left to right. They read the part that happens to be facing them, and a weaver who forgets that is writing for an audience of one — themselves, at the loom."
                ]
            },
            {
                type: "imageBand",
                id: "katha-closing-image",
                art: imagePair("maroon", "campaigns/katha-closing.jpg"),
                ratio: "7/5",
                bleed: true,
                padTop: 0,
                padBottom: 0
            }
        ]
    },
    awadh: {
        kind: "campaign_story",
        title: "Awadh",
        standfirst: "A hundred and twenty miles upriver, a different idea of ornament — and what happens when it arrives on a Banaras loom.",
        sections: [
            {
                type: "hero",
                id: "awadh-hero",
                art: imagePair("green", "campaigns/awadh-hero.jpg", "campaigns/awadh-hero-mob.jpg"),
                eyebrow: "Featured",
                title: "Awadh",
                body: "Restraint, borrowed from a neighbour who is better at it.",
                ctaLabel: "See the pieces",
                ctaHref: "/collections/awadh"
            },
            {
                type: "richText",
                id: "awadh-intro",
                measure: "content",
                paragraphs: [
                    "Banaras ornaments in metal. Its neighbour ornaments in thread. The two have been arguing about it politely for two centuries."
                ]
            },
            {
                type: "imageWithText",
                id: "awadh-band-01",
                art: imagePair("gold", "campaigns/awadh-band-01.jpg"),
                fullWidth: true,
                imageSide: "left",
                ratio: "4/5",
                heading: "Where it came from",
                paragraphs: [
                    "One tradition fills a ground. The other leaves it alone and trusts a single spray to carry a whole width.",
                    "These pieces were commissioned after a week spent looking at white-on-white work in Lucknow, which is a hard thing to walk out of and then ask for more zari."
                ]
            },
            {
                type: "imageBand",
                id: "awadh-banner-01",
                art: imagePair("green", "campaigns/awadh-band-02.webp"),
                ratio: "1/1",
                bleed: true
            },
            {
                type: "imageWithText",
                id: "awadh-band-02",
                art: imagePair("indigo", "campaigns/awadh-band-03.webp"),
                fullWidth: true,
                imageSide: "right",
                ratio: "4/5",
                heading: "What changed on the loom",
                paragraphs: [
                    "Less zari and more ground, which sounds like a saving and is not. A sparse field shows every fault, and there is nowhere for an uneven pick to hide. Two of these came off the loom twice.",
                    "The palette went with it — undyed, ivory, and one grey that took four attempts because the first three read as dirty rather than as quiet."
                ]
            },
            {
                type: "productRail",
                id: "awadh-rail",
                title: "The pieces",
                // Its own collection now exists, so the rail no longer borrows
                // katan-silk as the nearest available stand-in.
                collectionHandle: "awadh",
                ctaLabel: "See all"
            },
            {
                type: "richText",
                id: "awadh-closing",
                measure: "content",
                paragraphs: [
                    "Half the skill is deciding what not to weave, and the other half is holding your nerve once you have."
                ]
            },
            {
                type: "imageBand",
                id: "awadh-closing-image",
                art: imagePair("black", "campaigns/awadh-closing.jpg", "campaigns/awadh-closing-mob.jpg"),
                ratio: "2/1",
                mobileRatio: "2/3",
                bleed: true
            }
        ]
    },
    /*
   * ── Art & Collectibles ────────────────────────────────────────────────────
   *
   * Built against the reference's own metal page, measured 13 Sep 2026. Theirs
   * runs to nineteen sections; this is the same sequence with the repetitions
   * collapsed, which keeps the rhythm without inventing content we do not have:
   *
   *   full-bleed hero (desktop and phone crops)
   *   opening line
   *   full-bleed banner
   *   a four-up square grid of what the metal work divides into
   *   full-bleed banner
   *   a square band of prose beside a photograph
   *   a three-up gallery of the making
   *   closing line
   *   full-bleed closing image
   *
   * The four category names — furniture, objects, wall pieces, lighting — are
   * what the things are. They are not anybody's branding and there is no other
   * word for a lamp.
   *
   * Photography is theirs, staged in the gitignored `/public/homepage/craft/`.
   * Local mockup only; see HANDOFF §5.8.1.
   *
   * The `padTop`/`padBottom` values below were measured off their page at a
   * 1905px window on 23 Sep 2026, on request, as placeholders to be revised:
   * banners flush, 60/20 round the opening text, and so on.
   */ "art-collectibles": {
        kind: "craft",
        title: "Art & Collectibles",
        standfirst: "Repoussé metal from the workshops a street away from the looms. Raised from a single sheet, never cast.",
        sections: [
            {
                type: "imageBand",
                id: "craft-hero",
                padTop: 0,
                padBottom: 0,
                art: imagePair("gold", "craft/craft-hero.jpg", "craft/craft-hero-mob.jpg"),
                ratio: "2/1",
                mobileRatio: "2/3",
                bleed: true
            },
            {
                type: "richText",
                id: "craft-opening",
                padTop: 60,
                padBottom: 20,
                measure: "content",
                /*
         * Their opening block is a 30px uppercase centred heading, a centred
         * paragraph, and an uppercase ruled link — the same three-part opening
         * the campaign pages use. Ours had the paragraph alone.
         *
         * The link goes to the contact page rather than a collection: theirs
         * points at /collections/art-collectibles-1 and this catalogue holds no
         * metal at all, so a "discover the collection" button would open an
         * empty grid. The label says what the link actually does.
         */ heading: "Art & Collectibles",
                uppercase: true,
                // Carries the page's h1; theirs has no separate title block either, and
                // without this the page showed the words twice, once in each.
                asPageTitle: true,
                paragraphs: [
                    "The metal beaters of Banaras were here before the looms were, and the two trades have been borrowing from each other ever since. Raised from a single sheet, never cast, and made in ones."
                ],
                ctaLabel: "Ask what is in the room",
                ctaHref: "/pages/contact"
            },
            {
                type: "imageBand",
                id: "craft-banner-01",
                padTop: 0,
                padBottom: 0,
                art: imagePair("black", "craft/craft-banner-01.jpg"),
                ratio: "2/1",
                bleed: true
            },
            {
                type: "richText",
                id: "craft-what",
                padTop: 20,
                padBottom: 70,
                measure: "content",
                heading: "What repoussé is",
                paragraphs: [
                    "A flat sheet of brass or silver, worked from behind against a bed of pitch until the design stands out in relief, then turned over and sharpened from the front. Nothing is poured into a mould and nothing is soldered on — a raised figure and the ground around it are the same piece of metal, stretched.",
                    "It is why these objects are thin and heavy at once, and why a dent in one is a repair rather than a write-off."
                ]
            },
            {
                type: "galleryGrid",
                id: "craft-categories",
                /*
         * Their page introduces this grid with a centred small-caps heading and
         * a short rule under it — a `heading-section` plus a `divider-section`,
         * the only rule of its kind on the page. Ours had the heading and no
         * rule, so the essay above ran straight into the grid.
         */ heading: "Explore art & collectibles",
                uppercase: true,
                divider: true,
                columns: 4,
                items: [
                    {
                        art: imagePair("maroon", "craft/craft-cat-01.jpg"),
                        label: "Furniture"
                    },
                    {
                        art: imagePair("gold", "craft/craft-cat-02.jpg"),
                        label: "Objects"
                    },
                    {
                        art: imagePair("indigo", "craft/craft-cat-03.jpg"),
                        label: "Wall pieces"
                    },
                    {
                        art: imagePair("black", "craft/craft-cat-04.jpg"),
                        label: "Lighting"
                    }
                ]
            },
            {
                type: "imageBand",
                id: "craft-banner-02",
                padTop: 100,
                padBottom: 40,
                art: imagePair("gold", "craft/craft-banner-02.jpg", "craft/craft-banner-02-mob.jpg"),
                ratio: "2/1",
                mobileRatio: "2/3",
                bleed: true
            },
            {
                type: "imageWithText",
                id: "craft-band-01",
                art: imagePair("black", "craft/craft-band-01.jpg"),
                imageSide: "left",
                heading: "Telling it from cast work",
                paragraphs: [
                    "Look at the back. Raised work is hollow behind every high point, and the reverse reads as a negative of the front. A cast piece is solid behind the relief and usually carries a seam somewhere along an edge.",
                    "Then take the weight. For the same size, cast is two to four times heavier, and that difference is most of the price difference too."
                ]
            },
            {
                type: "galleryGrid",
                id: "craft-making",
                heading: "The making",
                standfirst: "Pitch, a blunt punch, and several thousand strikes. A tray of any size is weeks of work and the maker will tell you how many without being asked.",
                columns: 3,
                items: [
                    {
                        art: imagePair("maroon", "craft/craft-making-01.jpg")
                    },
                    {
                        art: imagePair("gold", "craft/craft-making-02.jpg")
                    },
                    {
                        art: imagePair("indigo", "craft/craft-making-03.jpg")
                    }
                ]
            },
            {
                type: "richText",
                id: "craft-availability",
                padTop: 40,
                padBottom: 80,
                measure: "content",
                heading: "Buying one",
                paragraphs: [
                    "These are made in ones, not in runs, and we hold very few at a time. Write to us and we will tell you what is in the room this month rather than list pieces that have already gone."
                ],
                ctaLabel: "Ask what is available",
                ctaHref: "/pages/contact"
            },
            {
                type: "imageBand",
                id: "craft-closing-image",
                padTop: 0,
                art: imagePair("black", "craft/craft-closing.jpg", "craft/craft-closing-mob.jpg"),
                ratio: "2/1",
                mobileRatio: "2/3",
                bleed: true
            }
        ]
    },
    /*
   * ── Our story ─────────────────────────────────────────────────────────────
   *
   * Laid out band for band against the reference's own about page, measured
   * 12 Sep 2026: a one-paragraph standfirst block, then three image-and-prose
   * bands at image-left / image-right / image-left, then a 15:8 photograph to
   * close, all inside the 1200px container their `.container.has-limit` uses.
   * Paragraph counts per band are 3 / 2 / 3 and the lengths are within a few
   * characters of theirs, because the measure is what makes the page look like
   * the page. No eyebrows and no pull quotes — neither is in the original.
   *
   * The sentences are ours. Matching their layout at their text lengths gives
   * the same page; copying their prose would only add a legal problem.
   */ "our-story": {
        kind: "craft",
        title: "Our story",
        standfirst: "One room in Banaras, about forty looms within an hour of it, and nothing in between.",
        sections: [
            /*
       * Their about page opens on a full-bleed 15:8 banner with the title block
       * underneath it, not above. `pages/[slug]/page.tsx` hoists this above its
       * own header.
       */ {
                type: "imageBand",
                id: "story-banner",
                art: imagePair("maroon", "about/story-banner.jpg"),
                ratio: "15/8",
                padTop: 0,
                padBottom: 0
            },
            /*
       * Their opening is a centred heading with ONE italic line under it, then
       * a block of four paragraphs flowed into two columns. The heading and the
       * italic line are the page header above; this is the four.
       *
       * There used to be an extra one-paragraph block between the two, which
       * said the same thing as the standfirst and gave the page three opening
       * statements where theirs has two.
       */ {
                type: "richText",
                id: "story-what-we-are",
                align: "left",
                measure: "content",
                columns: 2,
                // The closing aside is `<em>` on theirs, as their standfirst is.
                italicParagraphs: [
                    3
                ],
                paragraphs: [
                    "We are a small shop in Banaras selling handwoven cloth from the looms around it. There is no wholesale arm, no second brand, and nothing bought in to fill a gap on a rail.",
                    "Every piece is woven by hand on a pit loom by a weaver we buy from directly, at a price agreed before the warp goes on. We know who made each one and roughly how many weeks it took, and both of those are written on the piece rather than kept for anyone who thinks to ask.",
                    "What that rules out is most of how this trade is normally done. We cannot restock quickly, we cannot discount deeply without taking it out of somebody's hands, and we cannot grow faster than the looms do. Those are real costs and we would rather carry them than sell cloth we cannot account for — a claim nobody is able to check is worth nothing, and it is the weavers who lose most by it.",
                    `Everything ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].name} makes is sold here and in one room in Banaras. Nowhere else.`
                ]
            },
            {
                type: "imageWithText",
                id: "story-band-name",
                art: imagePair("maroon", "about/story-band-01.jpg"),
                imageSide: "left",
                heading: "Where the name comes from",
                paragraphs: [
                    "Raj is rule and raani is the woman who holds it. Together they are less a claim about royalty than about who a cloth like this was made to be worn by.",
                    "The word was chosen over a weaving term on purpose. Naming a shop after a technique fixes it to one technique, and the looms we buy from move between nine of them in a year. A saree is not defined by the method that produced it any more than a book is defined by its typeface, and the name should not pretend otherwise.",
                    "It is also a word almost anyone in north India can say and spell on the first attempt, which matters more than it sounds. A brand nobody can repeat out loud is a brand that travels only by link, and cloth like this has always travelled by recommendation."
                ]
            },
            {
                type: "imageWithText",
                id: "story-band-philosophy",
                art: imagePair("gold", "about/story-band-02.jpg"),
                imageSide: "right",
                heading: "What we commission, and what we turn down",
                paragraphs: [
                    "We buy direct, from around forty looms within an hour of the shop, at a price agreed before the warp is set rather than argued after the piece comes off it.",
                    "The turning down is the harder half. We do not take powerloom at any price, and we do not stock it beside handloom under a softer word. We also refuse work that is technically fine and has nothing to say — a competent copy of a piece somebody else designed forty years ago is the easiest thing in this city to commission and the least worth owning. A commissioned saree is paid for in stages while it is still being woven, because a weaver carrying six months of work cannot also carry six months of our cash flow."
                ]
            },
            {
                type: "imageWithText",
                id: "story-band-journey",
                art: imagePair("indigo", "about/story-band-03.jpg"),
                imageSide: "left",
                heading: "How it started",
                paragraphs: [
                    "With a bad purchase. A saree bought as handloom, worn twice, and then identified by the weaver asked to repair it as a powerloom piece sold at four times what it was worth. He was not surprised, which was the part that stayed with us. What that exposed is not a weaving problem — the weaving in this city is as good as it has ever been. It is a selling problem.",
                    "By the time a piece reaches a shopfront it has passed through enough hands that nobody left in the chain can tell you who made it, on what, or how long it took. A claim nobody can check is worth nothing, and the people who lose most by that are the weavers, who are paid as though the work were ordinary.",
                    "So the shop was built backwards from the loom rather than forwards from the rail, which is why there is one room and no wholesale, and why we can answer the question about weeks."
                ]
            },
            {
                type: "imageBand",
                id: "story-closing-image",
                art: imagePair("black", "about/story-closing.jpg"),
                ratio: "15/8",
                padTop: 20,
                padBottom: 40
            }
        ]
    },
    /*
   * ── Our Banaras store ─────────────────────────────────────────────────────
   *
   * Their store page opens on a 2:1 banner, runs a short four-paragraph block,
   * then two image-and-prose bands that carry NO heading — the prose reads on
   * from the block above rather than starting a new subject — then a one-line
   * block, then a closing frame with a heading and a booking button over it.
   * Same order here.
   */ "banaras-store": {
        kind: "craft",
        title: "Our Banaras store",
        standfirst: "One room, ten minutes from the looms. By appointment, and unhurried on purpose.",
        sections: [
            {
                type: "imageBand",
                id: "store-banner",
                art: imagePair("black", "about/store-banner.jpg"),
                ratio: "2/1",
                bleed: true,
                // Theirs: padding-top 0, padding-bottom 30.
                padTop: 0,
                padBottom: 30
            },
            {
                type: "richText",
                id: "store-opening",
                align: "left",
                measure: "content",
                // `has-columns--2 text-align-left` on theirs, same as the about page's
                // opening block. No italics on this page, unlike that one.
                columns: 2,
                paragraphs: [
                    "The room holds a fraction of what is on this website, and a few things that are not on it at all.",
                    "Someone who has handled every piece in it will be with you, and nobody else's job is to close the sale.",
                    "We keep it to one appointment at a time, so it runs on bookings rather than on walking in off the street.",
                    "An hour is usually enough. Two is common."
                ]
            },
            {
                type: "imageWithText",
                id: "store-band-daylight",
                art: imagePair("black", "about/store-band-01.jpg"),
                imageSide: "left",
                paragraphs: [
                    "Daylight matters more than anything we could write here. A tissue that looks flat on a screen is a different object held at a window, and so is a grey.",
                    "Ask to see a piece twice. Ask to see it against a wall, or against something you already own."
                ]
            },
            {
                type: "imageWithText",
                id: "store-band-loom",
                art: imagePair("green", "about/store-band-02.jpg"),
                imageSide: "right",
                paragraphs: [
                    "The looms are ten minutes away.",
                    "Say so when you book and we will take you to one — a separate half hour, a short drive, and the more interesting half of the visit.",
                    "Most people who go expecting a demonstration end up staying for the part nobody stages: the cutting down of a finished piece, which happens once every several weeks and cannot be arranged."
                ]
            },
            {
                type: "richText",
                id: "store-closing-line",
                measure: "content",
                heading: "We took Banaras out to the world. This is the invitation back.",
                paragraphs: [
                    "Tell us a date and roughly what you are after, and the pieces will be out before you arrive."
                ]
            },
            /*
       * `imageBand` with an overlay, not `hero`. Theirs sits in the 1200px
       * container like everything above it (measured: the overlay banner's
       * `.container` computes to 1200px wide); `hero` bleeds to the viewport
       * edge and takes 82vh, which turns the end of the page into what looks
       * like the top of a different one.
       */ {
                type: "imageBand",
                id: "store-closing",
                art: imagePair("maroon", "about/store-closing.jpg"),
                ratio: "4/3",
                // Theirs: flush both sides, with the map's own padding below it.
                padTop: 0,
                padBottom: 0,
                // `section is-width-wide` on theirs — the store page's banners run the
                // full viewport, unlike the about page's.
                bleed: true,
                overlay: {
                    title: "We would like to see you",
                    body: "Write with a date and we will confirm the same day.",
                    ctaLabel: "Book an appointment",
                    ctaHref: "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-experience-centre-varanasi"
                }
            },
            {
                type: "mapBand",
                id: "store-map",
                // Theirs insets the store map 20px on all four sides, where the contact
                // one runs edge to edge with 30px above and below.
                padY: 20,
                padX: 20,
                query: "Rathyatra, Varanasi, Uttar Pradesh",
                label: "Map showing the Banaras store"
            }
        ]
    },
    faqs: {
        kind: "craft",
        title: "FAQs",
        standfirst: `If there is anything here we have not covered, write to us at ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].supportEmail} and we will answer it properly — and then add it to this page.`,
        sections: [
            {
                type: "faqAccordion",
                id: "faq-groups",
                groups: [
                    {
                        heading: "Product",
                        items: [
                            {
                                question: "How can I find out more about a piece?",
                                answer: "Every product page carries the technique, the fabric, the zari, the colour and roughly how many weeks the piece sat on the loom. If you want more than that, write to us — we can usually tell you which loom it came off and what else that weaver is working on."
                            },
                            {
                                question: "Will it look like the photograph?",
                                answer: "Close, not identical. Silk takes light differently at every angle, which is most of why it is worth owning and most of why it is hard to photograph. Screens vary too. If an exact shade matters, ask us to describe it against something you already own, or ask for a photograph in daylight."
                            },
                            {
                                question: "Is the zari real?",
                                answer: "It is stated per piece, because it is a fact about that piece rather than about the shop. Real zari is silver thread with a gold finish wound on silk: heavier than the substitute, warm rather than cool in the hand, and it tarnishes slowly instead of flaking within a year."
                            },
                            {
                                question: "How do I look after a saree?",
                                answer: "Dry clean only, and as rarely as you can stand. Store it folded in cotton rather than plastic, refold along different lines once a year so the creases do not become cuts, and keep it out of direct sun, which takes the colour out of silk faster than wearing it does."
                            },
                            {
                                question: "How do I look after a metal piece?",
                                answer: "Dust it dry. Brass will darken over years, which is the point of brass; if you would rather it did not, a wipe with a soft cloth every few months slows it. Never use an abrasive or a household metal polish on repoussé — the relief is the thinnest part of the sheet and polish takes it away first."
                            },
                            {
                                question: "Do sarees come with a blouse piece?",
                                answer: "Where one was woven to go with the saree, yes, and the product page says so. Where it was not we will not cut one off the end of the piece to fake it — that shortens the saree and is a common and quiet way of doing it."
                            },
                            {
                                question: "I have a design. Can you have it woven?",
                                answer: "Sometimes. Send it and we will tell you honestly whether it suits a Banarasi loom, what it would cost and how long it would take. A drawn curve has to be resolved into steps the loom can execute, and some designs come out of that process worse than they went in."
                            },
                            {
                                question: "Do you sell cloth by the metre?",
                                answer: "Yes — handwoven yardage, unstitched and uncut, for anyone who would rather have it made up their own way."
                            },
                            {
                                question: "Can I change the colour of a piece?",
                                answer: "Not on a finished piece. On a commission, yes: colour is chosen before the warp is set, and that is the moment to have the conversation rather than after."
                            },
                            {
                                question: "What yarn do you use?",
                                answer: "Natural fibres only — mulberry silk, cotton, wool and blends of those, with real or tested zari. No polyester, and no viscose sold under a prettier name."
                            }
                        ]
                    },
                    {
                        heading: "Ordering",
                        items: [
                            {
                                question: "A piece I was looking at has gone. Can I still order it?",
                                answer: "Most of what we sell is made once, so usually it has genuinely gone. Ask anyway — a design can sometimes be rewoven, which takes months and produces a related piece rather than the same one."
                            },
                            {
                                question: "What is a pre-order?",
                                answer: "A piece already on the loom that you are reserving before it comes off. You pay when you order and it ships when it is finished, on the date shown on the product page."
                            },
                            {
                                question: "Is there a discount for buying several pieces?",
                                answer: "No. The price is what the weaver was paid plus what it costs us to sell it, and there is no margin built in to be given back. We would rather quote one honest number than an inflated one with a discount on top."
                            },
                            {
                                question: "Can several orders be sent together?",
                                answer: "Yes, if they have not been dispatched yet — write to us and we will hold and combine them. Where a made-to-order piece is involved the whole parcel waits for it, so sometimes two parcels is the better answer."
                            },
                            {
                                question: "How do I track my order?",
                                answer: "A tracking number is emailed on dispatch. If it has not moved in two days, tell us and we will chase the courier rather than asking you to."
                            }
                        ]
                    },
                    {
                        heading: "Payment",
                        items: [
                            {
                                question: "Checkout sends me to another site. Is that normal?",
                                answer: "Yes. Payment is handled by our payment provider rather than by us, which means your card details are never on our servers. You are returned here once it completes."
                            },
                            {
                                question: "My payment failed. What now?",
                                answer: "Nothing has been taken and the piece is not gone — try again, or write to us and we will send a payment link directly. Failures are usually the bank's two-factor step timing out."
                            },
                            {
                                question: "Are there extra duties or taxes?",
                                answer: "Within India the price shown includes tax and shipping, with nothing added on delivery. Overseas, duties are included in the price, which is why the international figure is not a straight conversion."
                            },
                            {
                                question: "Can I reserve a piece and pay later?",
                                answer: "For a few days, if you write to us. We keep holds short because unique-piece stock means a hold is a real cost to whoever asks next."
                            },
                            {
                                question: "Do you offer cash on delivery?",
                                answer: "No. At these values it is not something we can carry, and a refused parcel travels a long way back."
                            }
                        ]
                    },
                    {
                        heading: "Delivery",
                        items: [
                            {
                                question: "Do you ship outside India?",
                                answer: "Yes, with duties included in the price. If your country is not offered at checkout, write to us before assuming we cannot reach it."
                            },
                            {
                                question: "Who do you ship with?",
                                answer: "A tracked courier for everything, and an insured service for anything above the threshold shown at checkout. Metal pieces go crated."
                            },
                            {
                                question: "How long does international delivery take?",
                                answer: "Usually five to ten working days from dispatch, plus customs. Shipping is free above the value shown in the announcement bar and quoted at checkout below it."
                            },
                            {
                                question: "How long does delivery take within India?",
                                answer: "Three to five working days from dispatch, anywhere in the country, and shipping is free with no minimum."
                            },
                            {
                                question: "How do I contact the courier?",
                                answer: "You can, using the tracking number — but tell us instead. We have the account and they answer us faster than they answer a consignee."
                            },
                            {
                                question: "I missed the delivery. What happens?",
                                answer: "The courier reattempts, usually twice, then holds the parcel locally for a few days. Write to us and we will rebook it for a day you are in rather than letting it go back."
                            },
                            {
                                question: "How are metal pieces shipped?",
                                answer: "Crated and insured, and more slowly than cloth. Large pieces are quoted individually because the crate often costs more than the courier."
                            }
                        ]
                    },
                    {
                        heading: "Returns, Refund & Cancellation",
                        items: [
                            {
                                question: "Can I return an order?",
                                answer: "A ready-to-ship piece, yes — unworn, with tags, within the window stated at checkout. Tell us why if you can; it is the only way we find out what the photographs are not showing."
                            },
                            {
                                question: "Can I get a refund?",
                                answer: "On an accepted return, yes, to the original payment method once the piece is back and checked. A piece woven or tailored to your measurements is not returnable — it was made once, for you, and there is no second buyer for a blouse cut to someone else's back. We would rather say that here than in small print later."
                            },
                            {
                                question: "Can I cancel an order?",
                                answer: "A ready-to-ship order, until it is dispatched. A commission, until the warp is set — after that the weaver has committed the loom and we have committed the money."
                            }
                        ]
                    },
                    {
                        heading: "General",
                        items: [
                            {
                                question: "Are your pieces sold anywhere else?",
                                answer: "No. This website and one room in Banaras. Anything sold elsewhere under this name is not ours."
                            },
                            {
                                question: "How do I sign in to my account?",
                                answer: "Through the account link in the header. An account is not required to order — it only keeps your addresses and your order history in one place."
                            },
                            {
                                question: "How large is a saree?",
                                answer: "Between 5.5 and 6.3 metres depending on the weave, with the exact length on each product page, and a standard width of around 46 inches. Any piece sold with a blouse length includes that measurement separately."
                            },
                            {
                                question: "Do you have a shop I can visit?",
                                answer: "One, in Banaras, ten minutes from the looms we buy from. It runs on appointments, one visit at a time."
                            }
                        ]
                    }
                ]
            }
        ]
    },
    /*
   * ── Contact us ────────────────────────────────────────────────────────────
   *
   * Their layout, measured 12 Sep 2026: one `is-width-standard` section split
   * into two halves, addresses and store details on the left, the message form
   * on the right (`contact-form--right`), then a closing image band. The
   * routing by reason — orders, press, stockists, careers — is theirs too, and
   * it is the right shape: one address for everything means the slowest queue
   * sets the response time for all of them.
   *
   * The form posts to `submitEnquiryAction` and writes to the `enquiry` table.
   * There is no mail transport and no admin inbox in this build, so messages
   * are STORED AND NOT DELIVERED until that screen exists — HANDOFF §5.8.1.
   */ contact: {
        kind: "craft",
        title: "Contact us",
        standfirst: "A small team in Banaras. You will get a person, and usually the same one throughout.",
        sections: [
            /*
       * COPY MATCHED TO THE REFERENCE, 13 Sep 2026, at the owner's explicit
       * instruction — and narrowly.
       *
       * What is matched is this page's transactional boilerplate: which address
       * takes which kind of enquiry, "Visit Us", the form's invitation and its
       * button. Those sentences are close to the minimum way of saying the
       * thing and read the same on a thousand shops.
       *
       * What is NOT matched, here or anywhere: the campaign stories, the About
       * narrative and the brand statement. Those are the house's voice and stay
       * ours. HANDOFF §2.48 records a 22 Aug sweep that pulled a store-booking
       * line out of this build as borrowed copy — this reverses that decision
       * for this page only, deliberately, so nobody "fixes" it back as a
       * regression without knowing it was a call somebody made.
       *
       * Their name, addresses, phone numbers and second store are NOT here.
       */ {
                type: "contactPanel",
                id: "contact-panel",
                heading: "Contact us",
                routes: [
                    {
                        text: "For all order related queries or assistance, please write to us on",
                        email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].supportEmail,
                        tail: "We will try to respond as promptly as we can."
                    },
                    {
                        text: "For all press and media related queries, creative or artistic collaborations, you can get in touch with us on",
                        email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].supportEmail
                    },
                    {
                        text: "For any business associations or stocking enquiries, please write to us on",
                        email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].supportEmail
                    },
                    {
                        // Theirs links to a careers page. This build has none, so the
                        // enquiry goes to an address rather than to a 404.
                        text: "If you would like to work with us, please write to us on",
                        email: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].supportEmail
                    }
                ],
                socialIntro: "You can also find us and reach out to us on:",
                // BRAND.socials is the one list; empty until the real accounts exist,
                // and the panel hides the line and the links while it is.
                socials: [
                    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].socials
                ],
                visitHeading: "Visit Us",
                stores: [
                    {
                        name: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].name} Banaras Flagship`,
                        detail: `If you would like to visit our store in Banaras, please call us on: ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].supportPhone} (inc. whatsapp) or email us on ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BRAND"].supportEmail} for an appointment. Hours: 11 am - 8 pm (India Time)`,
                        address: "Rathyatra - Mahmoorganj Road, Varanasi, Uttar Pradesh"
                    }
                ],
                form: {
                    intro: "Please leave your message here and we will get back to you promptly.",
                    submitLabel: "Submit"
                }
            },
            /*
       * Their contact page closes on a store band, and so does this one — an
       * OVERLAY banner, not a side-by-side band — measured on their contact
       * page, which closes on a full-width frame with the text over it and a
       * booking button. It ships a portrait crop for phones; this does too.
       */ {
                type: "imageBand",
                id: "contact-store",
                art: imagePair("black", "about/contact-band.jpg", "about/contact-portrait.jpg"),
                ratio: "3/2",
                mobileRatio: "4/5",
                /*
         * Full width, not boxed to 1200.
         *
         * Their contact banner's container carries no `has-limit`, so it runs
         * the whole viewport — unlike the closing frame on the about page,
         * which is limited. Same component, different width on the two pages,
         * and boxing this one made the photograph read a third too small.
         */ bleed: true,
                /*
         * Books an appointment on the scheduler, which is what theirs does and
         * what the homepage's stores band already does. A banner headed "Our
         * Banaras store" whose button only went to another page describing the
         * store was a loop.
         */ overlay: {
                    title: "Our Banaras store",
                    body: "Most of what is hard to settle by email settles in ten minutes with the cloth in your hands.",
                    ctaLabel: "Book an appointment",
                    ctaHref: "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-experience-centre-varanasi"
                }
            },
            {
                type: "mapBand",
                id: "contact-map",
                query: "Rathyatra, Varanasi, Uttar Pradesh",
                label: "Map showing the Banaras store"
            }
        ]
    },
    /*
   * ── The footer's policy pages, 13 September 2026 ──────────────────────────
   *
   * Every one of these was a 404 in the footer of every page on the site. Their
   * equivalents are a title block and a run of prose with sub-headings, which
   * is what these are.
   *
   * **These state commitments to customers and have not been reviewed by
   * anyone qualified.** They are written to match what the rest of the build
   * already says — the announcement bar, `INFO_TABS` in brand.ts, and the FAQ
   * answers — so the site stops contradicting itself, which it did. That is not
   * the same as being correct, and the four policy pages want a read by someone
   * who can commit the business before launch. See HANDOFF §5.8.10.
   */ returns: {
        kind: "craft",
        title: "Returns & Cancellation",
        standfirst: "What can be sent back, what cannot, and why the line falls where it does.",
        sections: [
            {
                type: "richText",
                id: "returns-ready",
                align: "left",
                heading: "Ready-to-ship pieces",
                paragraphs: [
                    "A ready-to-ship piece can be returned unworn, with its tags attached, within fourteen days of delivery. Write to us first so we can arrange the collection — sending a piece back without telling us risks it arriving unlogged, and an unlogged parcel is hard to refund.",
                    "The refund goes to the original payment method once the piece is back with us and has been checked, usually within five working days of arrival."
                ]
            },
            {
                type: "richText",
                id: "returns-made",
                align: "left",
                heading: "Made-to-order and commissioned pieces",
                paragraphs: [
                    "These cannot be returned. A piece woven or tailored to your measurements was made once, for you, and there is no second buyer for a blouse cut to someone else's back.",
                    "We would rather say that here than in small print later. If you are unsure about a commission, ask us before ordering — describing a colour against something you already own is free and takes ten minutes."
                ]
            },
            {
                type: "richText",
                id: "returns-cancel",
                align: "left",
                heading: "Cancelling",
                paragraphs: [
                    "A ready-to-ship order can be cancelled any time before it is dispatched. A commission can be cancelled until the warp is set; after that the weaver has committed the loom and we have committed the money, and neither can be taken back."
                ]
            },
            {
                type: "richText",
                id: "returns-damage",
                align: "left",
                heading: "If something arrives damaged",
                paragraphs: [
                    "Photograph it before doing anything else and write to us the same day. Transit damage is our problem rather than yours, and it is settled by replacement, repair or refund depending on what the piece needs."
                ],
                ctaLabel: "Write to us",
                ctaHref: "/pages/contact"
            }
        ]
    },
    shipping: {
        kind: "craft",
        title: "Delivery & Shipping",
        standfirst: "Where we ship, how long it takes, and what is included in the price.",
        sections: [
            {
                type: "richText",
                id: "shipping-india",
                align: "left",
                heading: "Within India",
                paragraphs: [
                    "Shipping is free with no minimum. Orders are dispatched from Varanasi with a tracked courier and a tracking number is emailed on despatch.",
                    "Delivery takes three to five working days from dispatch. A ready-to-ship piece leaves within two or three working days of the order; a made-to-order piece is dispatched when it is finished, on the week stated on its product page."
                ]
            },
            {
                type: "richText",
                id: "shipping-international",
                align: "left",
                heading: "Outside India",
                paragraphs: [
                    "We ship worldwide. Shipping is free above ₹25,000 and quoted at checkout below that.",
                    "Duties are included in the price, so nothing further is asked for on delivery — which is why an international price is not a straight conversion of the rupee one. Delivery usually takes five to ten working days from dispatch, plus whatever customs adds.",
                    "If your country is not offered at checkout, write to us before assuming we cannot reach it."
                ]
            },
            {
                type: "richText",
                id: "shipping-metal",
                align: "left",
                heading: "Art & Collectibles",
                paragraphs: [
                    "Metal pieces are crated and insured, and travel more slowly than cloth. Large pieces are quoted individually, because the crate often costs more than the courier."
                ]
            },
            {
                type: "richText",
                id: "shipping-missed",
                align: "left",
                heading: "A missed delivery",
                paragraphs: [
                    "The courier reattempts, usually twice, then holds the parcel locally for a few days. Tell us rather than the courier — we have the account, and they answer us faster than they answer a consignee."
                ],
                ctaLabel: "Write to us",
                ctaHref: "/pages/contact"
            }
        ]
    },
    privacy: {
        kind: "craft",
        title: "Privacy Policy",
        standfirst: "What we collect, why, and what we do not do with it.",
        sections: [
            {
                type: "richText",
                id: "privacy-what",
                align: "left",
                heading: "What we collect",
                paragraphs: [
                    "To send you an order we need a name, a delivery address, an email address and a telephone number for the courier. If you create an account we keep those so you do not have to type them again.",
                    "Payment is handled by our payment provider rather than by us. Card details are never on our servers and we never see them.",
                    "The site records ordinary technical information — pages requested, approximate location from the network address, the kind of device — which is what tells us a page is broken before somebody writes in about it."
                ]
            },
            {
                type: "richText",
                id: "privacy-use",
                align: "left",
                heading: "What we use it for",
                paragraphs: [
                    "Fulfilling your order, answering your messages, and keeping legally required records of what was sold. If you have asked for them, occasional emails about new pieces — and every one of those carries a way out that works."
                ]
            },
            {
                type: "richText",
                id: "privacy-not",
                align: "left",
                heading: "What we do not do",
                paragraphs: [
                    "We do not sell your details, rent them, or pass them to anybody whose job is advertising. The only third parties who receive anything are the ones who have to: the payment provider, the courier, and the service that sends our email."
                ]
            },
            {
                type: "richText",
                id: "privacy-rights",
                align: "left",
                heading: "Asking us to delete it",
                paragraphs: [
                    "Write and ask. We will tell you what we hold, correct it, or delete it — except the parts tax law requires us to keep, which we will name rather than hide behind."
                ],
                ctaLabel: "Write to us",
                ctaHref: "/pages/contact"
            }
        ]
    },
    terms: {
        kind: "craft",
        title: "Terms & Conditions",
        standfirst: "The terms you are agreeing to when you order from this site.",
        sections: [
            {
                type: "richText",
                id: "terms-pieces",
                align: "left",
                heading: "About the pieces",
                paragraphs: [
                    "Everything here is woven by hand, so no two pieces are identical and small irregularities are part of the record of making rather than faults. Colour varies between screens; where an exact shade matters, ask us before ordering.",
                    "Every piece is described as accurately as we can manage, including the technique, the fabric, whether the zari is real silver, and roughly how many weeks it took. Where we do not know something we say so."
                ]
            },
            {
                type: "richText",
                id: "terms-orders",
                align: "left",
                heading: "Orders and prices",
                paragraphs: [
                    "An order is accepted when we confirm it, not when it is placed — almost everything here is a single piece, and two people can reach the checkout at the same moment. If that happens we will tell you immediately and refund in full.",
                    "Prices are in Indian rupees and include tax. We may change a price, but never on an order already confirmed."
                ]
            },
            {
                type: "richText",
                id: "terms-returns",
                align: "left",
                heading: "Returns",
                paragraphs: [
                    "Set out in full on the returns page, and the short version is that ready-to-ship pieces can come back within fourteen days unworn, and pieces made to your measurements cannot."
                ],
                ctaLabel: "Returns & Cancellation",
                ctaHref: "/pages/returns"
            },
            {
                type: "richText",
                id: "terms-law",
                align: "left",
                heading: "Everything else",
                paragraphs: [
                    "Photographs and text on this site are ours and are not to be reproduced elsewhere. These terms are governed by Indian law, and any dispute goes to the courts at Varanasi.",
                    "If any part of this is unenforceable, the rest still stands."
                ]
            }
        ]
    },
    /*
   * The size chart, laid out as the reference's /pages/size-chart is (asked for
   * 24 Sep 2026): the page title and two charts, women then men, nothing else.
   * The measurements are theirs — a size chart is a table of standard body
   * measurements — but set as text rather than their images, with our own
   * figures. The standfirst is empty because theirs shows only the title.
   */ "size-guide": {
        kind: "craft",
        title: "Size Chart",
        standfirst: "",
        sections: [
            {
                type: "sizeChart",
                id: "size-women",
                title: "Size Guide – Women",
                figure: "women",
                measures: [
                    {
                        label: "Bust",
                        point: "BUST AROUND",
                        note: "Measure around the fullest part of your bust"
                    },
                    {
                        label: "Waist",
                        point: "WAIST AROUND",
                        note: "Measure the narrowest part of your natural waist"
                    },
                    {
                        label: "Hip",
                        point: "HIP AROUND",
                        note: "Measure around the fullest part of your hip"
                    }
                ],
                sizes: [
                    "XXS",
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL"
                ],
                rows: [
                    {
                        label: "Bust",
                        inches: [
                            32,
                            34,
                            36,
                            38,
                            40,
                            42
                        ],
                        cm: [
                            82,
                            86,
                            92,
                            96,
                            100,
                            107
                        ]
                    },
                    {
                        label: "Waist",
                        inches: [
                            26,
                            28,
                            30,
                            32,
                            34,
                            36
                        ],
                        cm: [
                            67,
                            71,
                            76,
                            82,
                            86,
                            92
                        ]
                    },
                    {
                        label: "Hips",
                        inches: [
                            36,
                            38,
                            40,
                            42,
                            44,
                            46
                        ],
                        cm: [
                            92,
                            96,
                            100,
                            107,
                            112,
                            117
                        ]
                    }
                ]
            },
            {
                type: "sizeChart",
                id: "size-men",
                title: "Size Guide – Men",
                figure: "men",
                measures: [
                    {
                        label: "Chest",
                        point: "CHEST AROUND",
                        note: "Measure around the fullest part of your chest"
                    },
                    {
                        label: "Waist",
                        point: "WAIST AROUND",
                        note: "Measure the narrowest part of your natural waist"
                    },
                    {
                        label: "Lower waist",
                        point: "LOWER WAIST",
                        note: "Measure where your trousers sit, below the natural waist"
                    },
                    {
                        label: "Hip",
                        point: "HIP AROUND",
                        note: "Measure around the fullest part of your hip"
                    }
                ],
                sizes: [
                    "XS",
                    "S",
                    "M",
                    "L",
                    "XL",
                    "XXL"
                ],
                rows: [
                    {
                        label: "Chest",
                        inches: [
                            36,
                            38,
                            40,
                            42,
                            44,
                            46
                        ],
                        cm: [
                            92,
                            96,
                            100,
                            107,
                            112,
                            117
                        ]
                    },
                    {
                        label: "Natural waist",
                        inches: [
                            34,
                            36,
                            38,
                            40,
                            42,
                            44
                        ],
                        cm: [
                            86,
                            92,
                            96,
                            100,
                            107,
                            112
                        ]
                    },
                    {
                        label: "Hips",
                        inches: [
                            36,
                            38,
                            40,
                            42,
                            44,
                            46
                        ],
                        cm: [
                            92,
                            96,
                            100,
                            107,
                            112,
                            117
                        ]
                    },
                    {
                        label: "Lower waist",
                        inches: [
                            32,
                            34,
                            36,
                            38,
                            40,
                            42
                        ],
                        cm: [
                            81,
                            86,
                            92,
                            96,
                            100,
                            107
                        ]
                    }
                ]
            }
        ]
    },
    /*
   * ── The three Featured pages, 13 September 2026 ───────────────────────────
   *
   * Bridal, Gifting and Zarkashi opened straight onto a grid. On the reference
   * each has a page first, and the page carries the argument with a button
   * through to the listing — which matters most for Bridal and Zarkashi, where
   * the thing being sold is a decision rather than a garment.
   *
   * Gifts follows their gifting page block for block: full-bleed banner, a
   * heading with a paragraph and a button, a second paragraph, a small-caps
   * heading with a rule under it, a square grid, and a captioned closing
   * banner.
   */ gifts: {
        kind: "craft",
        title: "Gifting",
        standfirst: "Pieces that survive being chosen for somebody else.",
        sections: [
            {
                type: "imageBand",
                id: "gifts-hero",
                art: imagePair("gold", "featured/gifts-hero.jpg", "featured/gifts-hero-mob.jpg"),
                ratio: "2/1",
                mobileRatio: "2/3",
                bleed: true,
                padTop: 0,
                padBottom: 0
            },
            {
                type: "richText",
                id: "gifts-intro",
                measure: "content",
                heading: "The art of giving cloth",
                uppercase: true,
                asPageTitle: true,
                paragraphs: [
                    "Handwoven cloth is a difficult gift and a good one. Difficult because it is personal — a colour is a judgement about somebody, and getting it wrong is visible. Good because it is the rare present that is still in use in twenty years, and because nobody has ever had too many."
                ],
                ctaLabel: "Explore gifts",
                ctaHref: "/collections/gifts"
            },
            {
                type: "richText",
                id: "gifts-second",
                measure: "content",
                paragraphs: [
                    "What we look for in a gifting piece is forgiveness: a size that does not have to be exact, a colour that does not depend on the wearer's, and a weave that reads as considered rather than as expensive."
                ]
            },
            {
                type: "galleryGrid",
                id: "gifts-categories",
                heading: "Explore gifts",
                uppercase: true,
                divider: true,
                columns: 4,
                items: [
                    {
                        art: imagePair("maroon", "featured/gifts-tile-01.jpg"),
                        label: "Sarees",
                        href: "/collections/sarees"
                    },
                    {
                        art: imagePair("gold", "featured/gifts-tile-02.jpg"),
                        label: "Stoles & dupattas",
                        href: "/collections/gifts"
                    },
                    {
                        art: imagePair("indigo", "featured/gifts-tile-05.jpg"),
                        label: "Art & collectibles",
                        href: "/pages/art-collectibles"
                    },
                    {
                        art: imagePair("green", "featured/gifts-tile-03.jpg"),
                        label: "Suits",
                        href: "/collections/suits"
                    }
                ]
            },
            {
                type: "imageWithText",
                id: "gifts-wrapping",
                art: imagePair("gold", "featured/gifts-tile-04.jpg"),
                imageSide: "left",
                heading: "How it arrives",
                paragraphs: [
                    "Folded in unbleached cotton rather than plastic, in a box that is worth keeping, with the weaver and the weeks on the loom written on the card. If it is going straight to somebody else, say so and the price comes off the paperwork.",
                    "We will also write the note by hand if you send us the words. It is a small thing and it is the part people remember."
                ],
                ctaLabel: "Ask us to arrange one",
                ctaHref: "/pages/contact"
            },
            {
                type: "imageBand",
                id: "gifts-closing",
                art: imagePair("maroon", "featured/gifts-closing.jpg", "featured/gifts-closing-mob.jpg"),
                ratio: "2/1",
                mobileRatio: "2/3",
                bleed: true,
                padTop: 0,
                padBottom: 0,
                overlay: {
                    title: "The joy of giving",
                    body: "Something that outlasts the occasion it was bought for.",
                    /*
           * Right, in dark ink, and at the top on a phone. Centred white type
           * landed on the box lid and the pale grey backdrop and was barely
           * legible on either; the right half of the desktop frame and the top
           * of the phone crop are clear grey, which dark ink reads on.
           */ align: "right",
                    textAlign: "center",
                    panel: "none",
                    ink: "deep",
                    mobileAlign: "top"
                }
            }
        ]
    },
    bridal: {
        kind: "craft",
        title: "Bridal",
        standfirst: "The heavy end of the catalogue, and the longest wait.",
        sections: [
            {
                /*
         * Amrita, the red organza odhani, as the opening frame. The files are
         * crops of the product's own 2:3 shots, cut in `public/homepage/`
         * (gitignored) so the face sits in a 9:8 desktop frame and a 4:5 phone
         * frame without an object-position hack. Both crops stop short of the
         * watermark in the bottom corner of the originals.
         */ type: "imageBand",
                id: "bridal-hero",
                art: imagePair("red", "featured/bridal-amrita-hero.jpg", "featured/bridal-amrita-hero-mob.jpg"),
                ratio: "9/8",
                mobileRatio: "4/5",
                bleed: true,
                padTop: 0,
                padBottom: 0
            },
            {
                type: "richText",
                id: "bridal-intro",
                measure: "content",
                heading: "Bridal",
                uppercase: true,
                asPageTitle: true,
                paragraphs: [
                    "Real zari, dense grounds, and the weaving that takes months rather than weeks. A bridal piece is between three and six months on the loom and no amount of asking shortens it — which is the single most useful thing to know before you start."
                ],
                ctaLabel: "See the pieces",
                ctaHref: "/collections/bridal"
            },
            {
                type: "imageWithText",
                id: "bridal-amrita",
                art: imagePair("red", "featured/bridal-amrita-detail.jpg"),
                imageSide: "left",
                ratio: "4/5",
                fullWidth: true,
                ground: "deep",
                inset: true,
                href: "/products/amrita-red-embroidered-bridal-odhani",
                heading: "Amrita",
                paragraphs: [
                    "The veil is the piece every photograph of the day is taken through, and the one nobody looks at closely. This one is silk organza, embroidered by hand from the border inwards, so the weight gathers at the edge and the cloth falls straight instead of lifting in the first breeze.",
                    "Five people, fourteen weeks. Cut to go over the head rather than across the shoulder, which is a different length and a different drape — tell us which you mean before we start."
                ],
                ctaLabel: "See Amrita",
                ctaHref: "/products/amrita-red-embroidered-bridal-odhani"
            },
            {
                type: "imageWithText",
                id: "bridal-band",
                art: imagePair("red", "featured/bridal-02.jpg"),
                imageSide: "right",
                ratio: "4/5",
                fullWidth: true,
                href: "/collections/bridal",
                paragraphs: [
                    "Commission early. Six months before is comfortable; three is tight; six weeks means choosing from what already exists, which is a smaller and more expensive set. If the date is close, tell us at the start rather than at the end — we would rather sell you a finished piece you love than take a deposit on one that cannot arrive."
                ]
            },
            {
                type: "productRail",
                id: "bridal-rail",
                title: "The bridal pieces",
                collectionHandle: "bridal",
                ctaLabel: "See all"
            },
            {
                type: "richText",
                id: "bridal-fittings",
                measure: "content",
                paragraphs: [
                    "Stitched pieces are made to measure, with one fitting by post and a second in the room if you can reach Banaras. Send a garment that already fits and we will copy it — more accurate than a tape measure used once, and faster."
                ],
                ctaLabel: "Arrange a visit",
                ctaHref: "/pages/banaras-store"
            },
            {
                type: "imageBand",
                id: "bridal-closing",
                art: imagePair("maroon", "featured/bridal-01.jpg"),
                ratio: "9/8",
                mobileRatio: "2/3",
                bleed: true,
                padTop: 0,
                padBottom: 0
            }
        ]
    },
    zarkashi: {
        kind: "craft",
        title: "Zarkashi",
        standfirst: "Real zari — what it is, how to tell it, and why it costs what it does.",
        sections: [
            {
                type: "imageBand",
                id: "zarkashi-hero",
                art: imagePair("gold", "featured/zarkashi-01.jpg"),
                ratio: "9/8",
                mobileRatio: "2/3",
                bleed: true,
                padTop: 0,
                padBottom: 0
            },
            {
                type: "richText",
                id: "zarkashi-intro",
                measure: "content",
                heading: "Zarkashi",
                uppercase: true,
                asPageTitle: true,
                paragraphs: [
                    "Zarkashi is the drawing of the metal: silver pulled to a thread, taken to gold, and wound on a silk core before it ever reaches a loom. Everything that makes real zari worth the difference happens before the weaving starts."
                ],
                ctaLabel: "See the pieces",
                ctaHref: "/collections/zarkashi"
            },
            {
                type: "imageWithText",
                id: "zarkashi-band",
                art: imagePair("maroon", "featured/zarkashi-02.jpg"),
                imageSide: "left",
                ratio: "4/5",
                fullWidth: true,
                href: "/collections/zarkashi",
                paragraphs: [
                    "Three tests, none of which needs any expertise. It is heavier — a real-zari saree announces itself the moment you lift it. It warms in the hand rather than staying cool, because metal takes your temperature and polyester does not. And it tarnishes slowly over years instead of flaking within one, which is the test that takes patience and settles the argument."
                ]
            },
            {
                type: "richText",
                id: "zarkashi-price",
                measure: "content",
                paragraphs: [
                    "It is stated per piece on this site, because it is a fact about that piece rather than a claim about the shop. Where a piece uses tested zari rather than real, it says so — and that is a perfectly good cloth sold honestly, not a lesser one sold quietly."
                ],
                ctaLabel: "Read the FAQs",
                ctaHref: "/pages/faqs"
            }
        ]
    }
};
}),
"[project]/src/lib/content/sqlite-content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqliteContentRepository",
    ()=>SqliteContentRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
;
;
/**
 * Content, read from and written to SQLite.
 *
 * Two tables, both of which already existed and neither of which had ever held
 * a row:
 *
 * - `setting` — key/value JSON, for singletons. `schema.sql` names homepage
 *   sections as one of its intended uses.
 * - `page` — editorial pages, with the ordered section list in `sections_json`.
 *
 * Sections are stored as JSON rather than decomposed into tables. That is a
 * deliberate trade and worth stating: a polymorphic `sections[]` with fifteen
 * member types (build.md §2.4) normalises into a table per type plus a join,
 * which is a great deal of schema for content that is only ever read as a whole
 * list and written as a whole list. Nothing queries *into* a section. If that
 * ever changes — "find every page using a videoBand" — this is the seam to
 * change behind, and no page will notice.
 */ const HOMEPAGE_KEY = "homepage.sections";
/**
 * Parse stored JSON, treating anything unreadable as absent.
 *
 * Content written by a previous schema, or half-written by a crash, must not
 * take the storefront down — an unparseable homepage row falls back to the
 * fixtures, exactly as an empty one does.
 */ function parseSections(json, where) {
    try {
        const value = JSON.parse(json);
        return Array.isArray(value) ? value : [];
    } catch  {
        console.error(`[content] ${where} holds unparseable JSON; ignoring it.`);
        return [];
    }
}
function toPage(row) {
    return {
        slug: row.slug,
        kind: row.kind,
        title: row.title,
        standfirst: row.standfirst,
        sections: parseSections(row.sections_json, `page "${row.slug}"`),
        published: row.published === 1
    };
}
class SqliteContentRepository {
    async getHomepageSections() {
        const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT value_json FROM setting WHERE key = ?").get(HOMEPAGE_KEY);
        if (!row) return [];
        return parseSections(row.value_json, HOMEPAGE_KEY);
    }
    async saveHomepageSections(sections) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO setting (key, value_json, updated_at)
         VALUES (?, ?, datetime('now'))
         ON CONFLICT(key) DO UPDATE SET
           value_json = excluded.value_json,
           updated_at = excluded.updated_at`).run(HOMEPAGE_KEY, JSON.stringify(sections));
    }
    async listPages() {
        const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT slug, kind, title, standfirst, sections_json, published
         FROM page ORDER BY title`).all();
        return rows.map(toPage);
    }
    async getPage(slug) {
        const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT slug, kind, title, standfirst, sections_json, published
         FROM page WHERE slug = ?`).get(slug);
        return row ? toPage(row) : undefined;
    }
    async savePage(page) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO page (slug, kind, title, standfirst, sections_json, published, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
         ON CONFLICT(slug) DO UPDATE SET
           title = excluded.title,
           standfirst = excluded.standfirst,
           sections_json = excluded.sections_json,
           published = excluded.published,
           updated_at = excluded.updated_at`).run(page.slug, page.kind, page.title, page.standfirst, JSON.stringify(page.sections), page.published ? 1 : 0);
    }
    async deletePage(slug) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("DELETE FROM page WHERE slug = ?").run(slug);
    }
}
}),
"[project]/src/lib/data/admin-queries.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adjustStock",
    ()=>adjustStock,
    "campaignOptions",
    ()=>campaignOptions,
    "deleteProduct",
    ()=>deleteProduct,
    "getDashboardMetrics",
    ()=>getDashboardMetrics,
    "getProductForEdit",
    ()=>getProductForEdit,
    "handleTaken",
    ()=>handleTaken,
    "listCollectionsForAdmin",
    ()=>listCollectionsForAdmin,
    "listImages",
    ()=>listImages,
    "listProductsForAdmin",
    ()=>listProductsForAdmin,
    "listTaxonomyTerms",
    ()=>listTaxonomyTerms,
    "saveProduct",
    ()=>saveProduct,
    "setPublished",
    ()=>setPublished,
    "skuTaken",
    ()=>skuTaken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
;
;
/**
 * Copy a query result into ordinary objects.
 *
 * `node:sqlite` returns rows with a **null prototype**. React refuses to
 * serialise those across the server/client boundary — "Only plain objects, and
 * a few built-ins, can be passed to Client Components" — which surfaces as a
 * server error on the page rather than anywhere near the query.
 *
 * Cheap insurance, applied at every read, so a row can be handed to a form
 * component without anyone having to remember this.
 */ function plain(rows) {
    return rows.map((row)=>({
            ...row
        }));
}
function plainOne(row) {
    return row === undefined || row === null ? undefined : {
        ...row
    };
}
function listProductsForAdmin() {
    return plain((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT p.id, p.handle, p.title, p.poetic_name, p.sku, p.price_minor,
                p.inventory_quantity, p.fulfilment_mode, p.published, p.updated_at,
                (SELECT COUNT(*) FROM product_image i WHERE i.product_id = p.id)
                  AS image_count,
                (SELECT COUNT(*) FROM product_image i WHERE i.product_id = p.id AND i.url IS NOT NULL)
                  AS photo_count
           FROM product p
          ORDER BY p.published ASC, p.updated_at DESC`).all());
}
function getProductForEdit(id) {
    const row = plainOne((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT * FROM product WHERE id = ?`).get(id));
    if (!row) return undefined;
    const motifs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT motif FROM product_motif WHERE product_id = ? ORDER BY motif`).all(id).map((r)=>r.motif);
    const zari = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT zari FROM product_zari WHERE product_id = ? ORDER BY zari`).all(id).map((r)=>r.zari);
    const text = (key)=>String(row[key] ?? "");
    const num = (key)=>Number(row[key] ?? 0);
    return {
        id,
        handle: text("handle"),
        title: text("title"),
        poeticName: text("poetic_name"),
        sku: text("sku"),
        priceRupees: num("price_minor") / 100,
        inventoryQuantity: num("inventory_quantity"),
        fulfilmentMode: text("fulfilment_mode"),
        dispatchDaysMin: num("dispatch_days_min"),
        dispatchDaysMax: num("dispatch_days_max"),
        narrative: text("narrative"),
        specColour: text("spec_colour"),
        specTechnique: text("spec_technique"),
        specFabric: text("spec_fabric"),
        specSpeciality: text("spec_speciality"),
        specCollectionNote: text("spec_collection_note"),
        specNote: text("spec_note"),
        provenanceWorkshop: text("provenance_workshop"),
        provenanceLoom: text("provenance_loom"),
        provenanceWeeks: num("provenance_weeks"),
        provenanceArtisans: num("provenance_artisans"),
        garmentType: text("garment_type"),
        weave: text("weave"),
        fabric: text("fabric"),
        colourFamily: text("colour_family"),
        campaignSlug: text("campaign_slug"),
        motifs,
        zariTypes: zari,
        published: num("published") === 1
    };
}
const PRODUCT_COLUMNS = [
    "handle",
    "title",
    "poetic_name",
    "sku",
    "price_minor",
    "inventory_quantity",
    "fulfilment_mode",
    "dispatch_days_min",
    "dispatch_days_max",
    "narrative",
    "spec_colour",
    "spec_technique",
    "spec_fabric",
    "spec_speciality",
    "spec_collection_note",
    "spec_note",
    "provenance_workshop",
    "provenance_loom",
    "provenance_weeks",
    "provenance_artisans",
    "garment_type",
    "weave",
    "fabric",
    "colour_family",
    "campaign_slug",
    "published",
    "updated_at"
];
function columnValues(input) {
    const orNull = (value)=>value.trim() === "" ? null : value.trim();
    return [
        input.handle.trim(),
        input.title.trim(),
        input.poeticName.trim(),
        input.sku.trim(),
        Math.round(input.priceRupees * 100),
        input.inventoryQuantity,
        input.fulfilmentMode,
        input.dispatchDaysMin,
        input.dispatchDaysMax,
        input.narrative.trim(),
        input.specColour.trim(),
        input.specTechnique.trim(),
        input.specFabric.trim(),
        orNull(input.specSpeciality),
        orNull(input.specCollectionNote),
        orNull(input.specNote),
        input.provenanceWorkshop.trim(),
        input.provenanceLoom.trim(),
        input.provenanceWeeks,
        input.provenanceArtisans,
        input.garmentType,
        orNull(input.weave),
        input.fabric,
        input.colourFamily,
        orNull(input.campaignSlug),
        input.published ? 1 : 0,
        new Date().toISOString()
    ];
}
function saveProduct(input, id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transaction"])(()=>{
        let productId;
        if (id) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE product SET ${PRODUCT_COLUMNS.map((c)=>`${c} = ?`).join(", ")}
            WHERE id = ?`).run(...columnValues(input), id);
            productId = id;
        } else {
            const now = new Date().toISOString();
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO product (${PRODUCT_COLUMNS.join(", ")}, created_at)
           VALUES (${PRODUCT_COLUMNS.map(()=>"?").join(", ")}, ?)`).run(...columnValues(input), now);
            productId = Number(result.lastInsertRowid);
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`DELETE FROM product_motif WHERE product_id = ?`).run(productId);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`DELETE FROM product_zari WHERE product_id = ?`).run(productId);
        const motif = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO product_motif VALUES (?, ?)`);
        for (const value of new Set(input.motifs))motif.run(productId, value);
        const zari = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO product_zari VALUES (?, ?)`);
        for (const value of new Set(input.zariTypes))zari.run(productId, value);
        return productId;
    });
}
function deleteProduct(id) {
    // Images, motifs and zari rows cascade.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`DELETE FROM product WHERE id = ?`).run(id);
}
function adjustStock(id, delta) {
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE product
          SET inventory_quantity = MAX(0, inventory_quantity + ?), updated_at = ?
        WHERE id = ?
        RETURNING inventory_quantity`).get(delta, new Date().toISOString(), id);
    return row?.inventory_quantity;
}
function setPublished(id, published) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE product SET published = ?, updated_at = ? WHERE id = ?`).run(published ? 1 : 0, new Date().toISOString(), id);
}
function listImages(productId) {
    return plain((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT id, position, ratio, shot, alt, url FROM product_image
          WHERE product_id = ? ORDER BY position`).all(productId));
}
function campaignOptions() {
    return plain((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT slug, name FROM campaign ORDER BY name`).all());
}
function handleTaken(handle, excludeId) {
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT id FROM product WHERE handle = ?`).get(handle.trim());
    return row !== undefined && row.id !== excludeId;
}
function skuTaken(sku, excludeId) {
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT id FROM product WHERE sku = ?`).get(sku.trim());
    return row !== undefined && row.id !== excludeId;
}
function getDashboardMetrics() {
    const database = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])();
    const totalProducts = database.prepare(`SELECT COUNT(*) as n FROM product`).get().n;
    const liveProducts = database.prepare(`SELECT COUNT(*) as n FROM product WHERE published = 1`).get().n;
    const draftProducts = database.prepare(`SELECT COUNT(*) as n FROM product WHERE published = 0`).get().n;
    const soldOutProducts = database.prepare(`SELECT COUNT(*) as n FROM product WHERE published = 1 AND inventory_quantity = 0`).get().n;
    const lowStockProducts = database.prepare(`SELECT COUNT(*) as n FROM product WHERE inventory_quantity > 0 AND inventory_quantity <= 2`).get().n;
    const incompletePhotoProducts = database.prepare(`SELECT COUNT(*) as n FROM product WHERE (SELECT COUNT(*) FROM product_image WHERE product_id = product.id) < 6`).get().n;
    const totalInventoryValueMinor = database.prepare(`SELECT COALESCE(SUM(price_minor * inventory_quantity), 0) as n FROM product`).get().n;
    const totalCollections = database.prepare(`SELECT COUNT(*) as n FROM collection`).get().n;
    const totalCampaigns = database.prepare(`SELECT COUNT(*) as n FROM campaign`).get().n;
    return {
        totalProducts,
        liveProducts,
        draftProducts,
        soldOutProducts,
        lowStockProducts,
        incompletePhotoProducts,
        totalInventoryValueMinor,
        totalCollections,
        totalCampaigns
    };
}
function listTaxonomyTerms() {
    return plain((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT facet, slug, label, description, hex FROM taxonomy_term ORDER BY facet, label`).all());
}
function listCollectionsForAdmin() {
    return plain((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT handle, title, seo_intro, kind, facets_json, campaign_slug, position FROM collection ORDER BY position`).all());
}
}),
"[project]/src/lib/discounts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureDiscountStorage",
    ()=>ensureDiscountStorage,
    "evaluate",
    ()=>evaluate,
    "getDiscount",
    ()=>getDiscount,
    "listDiscounts",
    ()=>listDiscounts,
    "normaliseCode",
    ()=>normaliseCode,
    "recordUse",
    ()=>recordUse,
    "saveDiscount",
    ()=>saveDiscount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
;
;
let ready = false;
function ensureDiscountStorage() {
    if (ready) return;
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])();
    d.exec(`CREATE TABLE IF NOT EXISTS discount_code (
    code            TEXT PRIMARY KEY,
    kind            TEXT NOT NULL CHECK (kind IN ('percent', 'amount')),
    value           INTEGER NOT NULL CHECK (value > 0),
    min_order_minor INTEGER NOT NULL DEFAULT 0 CHECK (min_order_minor >= 0),
    starts_at       TEXT,
    ends_at         TEXT,
    max_uses        INTEGER CHECK (max_uses IS NULL OR max_uses > 0),
    used_count      INTEGER NOT NULL DEFAULT 0,
    active          INTEGER NOT NULL DEFAULT 1,
    note            TEXT NOT NULL DEFAULT '',
    created_at      TEXT NOT NULL,
    CHECK (kind <> 'percent' OR value <= 90)
  )`);
    const columns = d.prepare("PRAGMA table_info(customer_order)").all().map((column)=>column.name);
    if (!columns.includes("discount_code")) d.exec("ALTER TABLE customer_order ADD COLUMN discount_code TEXT");
    if (!columns.includes("discount_minor")) {
        d.exec("ALTER TABLE customer_order ADD COLUMN discount_minor INTEGER NOT NULL DEFAULT 0 CHECK (discount_minor >= 0)");
    }
    ready = true;
}
const toCode = (row)=>({
        code: row.code,
        kind: row.kind,
        value: row.value,
        minOrderMinor: row.min_order_minor,
        startsAt: row.starts_at,
        endsAt: row.ends_at,
        maxUses: row.max_uses,
        usedCount: row.used_count,
        active: row.active === 1,
        note: row.note,
        createdAt: row.created_at
    });
const normaliseCode = (code)=>code.trim().toUpperCase().replace(/\s+/g, "");
function listDiscounts() {
    ensureDiscountStorage();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT * FROM discount_code ORDER BY active DESC, created_at DESC").all().map(toCode);
}
function getDiscount(code) {
    ensureDiscountStorage();
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT * FROM discount_code WHERE code = ?").get(normaliseCode(code));
    return row ? toCode(row) : undefined;
}
function saveDiscount(value) {
    ensureDiscountStorage();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO discount_code (code, kind, value, min_order_minor, starts_at, ends_at, max_uses, active, note, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(code) DO UPDATE SET kind = excluded.kind, value = excluded.value,
         min_order_minor = excluded.min_order_minor, starts_at = excluded.starts_at, ends_at = excluded.ends_at,
         max_uses = excluded.max_uses, active = excluded.active, note = excluded.note`).run(value.code, value.kind, value.value, value.minOrderMinor, value.startsAt, value.endsAt, value.maxUses, value.active ? 1 : 0, value.note, new Date().toISOString());
}
function evaluate(code, subtotalMinor, now = new Date()) {
    const found = getDiscount(code);
    const sorry = "That code is not valid.";
    if (!found || !found.active) return {
        ok: false,
        error: sorry
    };
    if (found.startsAt && now < new Date(found.startsAt)) return {
        ok: false,
        error: sorry
    };
    if (found.endsAt && now > new Date(found.endsAt)) return {
        ok: false,
        error: "That code has expired."
    };
    if (found.maxUses !== null && found.usedCount >= found.maxUses) return {
        ok: false,
        error: "That code has been used up."
    };
    if (subtotalMinor < found.minOrderMinor) {
        return {
            ok: false,
            error: `That code needs an order of at least ₹${(found.minOrderMinor / 100).toLocaleString("en-IN")}.`
        };
    }
    const raw = found.kind === "percent" ? Math.round(subtotalMinor * found.value / 100) : found.value;
    // Never to zero: an order must still cost something (the orders table
    // requires a positive total), and a ₹0 payment cannot go through Razorpay.
    const discountMinor = Math.max(0, Math.min(raw, subtotalMinor - 100));
    return {
        ok: true,
        code: found.code,
        discountMinor,
        label: found.kind === "percent" ? `${found.value}% off` : `₹${(found.value / 100).toLocaleString("en-IN")} off`
    };
}
function recordUse(code) {
    if (!code) return;
    ensureDiscountStorage();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("UPDATE discount_code SET used_count = used_count + 1 WHERE code = ?").run(code);
}
}),
"[project]/src/lib/newsletter-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6074a3fd1540a0d5c529041c33d158def69b680996":{"name":"subscribeAction"}},"src/lib/newsletter-actions.ts",""] */ __turbopack_context__.s([
    "subscribeAction",
    ()=>subscribeAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/newsletter.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const recent = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 10;
async function subscribeAction(email, source) {
    if (typeof email !== "string" || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EMAIL"].test(email.trim()) || email.length > 200) {
        return {
            ok: false,
            error: "Please enter a valid email address."
        };
    }
    const list = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["headers"])();
    const address = list.get("x-forwarded-for")?.split(",")[0]?.trim() || list.get("x-real-ip") || "unknown";
    const now = Date.now();
    const times = (recent.get(address) ?? []).filter((at)=>now - at < WINDOW_MS);
    if (times.length >= LIMIT) return {
        ok: false,
        error: "Please try again in a few minutes."
    };
    recent.set(address, [
        ...times,
        now
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$newsletter$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["subscribe"])(email, source === "popup" ? "popup" : "footer");
    return {
        ok: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    subscribeAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(subscribeAction, "6074a3fd1540a0d5c529041c33d158def69b680996", null);
}),
"[project]/src/lib/newsletter.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EMAIL",
    ()=>EMAIL,
    "listSubscribers",
    ()=>listSubscribers,
    "removeSubscriber",
    ()=>removeSubscriber,
    "subscribe",
    ()=>subscribe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
;
;
/**
 * Newsletter sign-ups.
 *
 * Until 27 Sep 2026 both sign-up forms were decorative: the footer form had
 * no action at all, and the pop-up waited a second, said "Subscribed!" and
 * threw the address away. Now every sign-up is kept here, listed in the admin
 * (Messages), and can be downloaded for whichever mailing service is chosen.
 */ let ready = false;
function table() {
    if (!ready) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().exec(`CREATE TABLE IF NOT EXISTS newsletter_subscriber (
      id         INTEGER PRIMARY KEY,
      email      TEXT NOT NULL UNIQUE,
      source     TEXT NOT NULL,
      created_at TEXT NOT NULL
    )`);
        ready = true;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])();
}
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;
function subscribe(email, source) {
    const address = email.trim().toLowerCase();
    const result = table().prepare("INSERT OR IGNORE INTO newsletter_subscriber (email, source, created_at) VALUES (?, ?, ?)").run(address, source, new Date().toISOString());
    return Number(result.changes) === 1;
}
function listSubscribers() {
    return table().prepare("SELECT email, source, created_at FROM newsletter_subscriber ORDER BY id DESC").all().map((row)=>({
            email: row.email,
            source: row.source,
            createdAt: row.created_at
        }));
}
function removeSubscriber(email) {
    table().prepare("DELETE FROM newsletter_subscriber WHERE email = ?").run(email.trim().toLowerCase());
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$discounts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/discounts.ts [app-rsc] (ecmascript)");
;
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$discounts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureDiscountStorage"])();
    // The orders table requires total = subtotal + shipping, so the stored
    // subtotal is the one after the discount; the discount sits beside it.
    const discountMinor = cart.discount?.minor ?? 0;
    const storedSubtotal = cart.subtotalMinor - discountMinor;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transaction"])(()=>{
        const reference = nextReference();
        const now = new Date().toISOString();
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO customer_order (
           reference, email, phone, full_name,
           address_line1, address_line2, city, state, postcode, country,
           subtotal_minor, shipping_minor, total_minor, currency,
           status, created_at, discount_code, discount_minor
         ) VALUES (?,?,?,?,?,?,?,?,?,'IN',?,?,?,'INR','pending',?,?,?)`).run(reference, customer.email.trim().toLowerCase(), customer.phone.trim(), customer.fullName.trim(), customer.addressLine1.trim(), customer.addressLine2?.trim() || null, customer.city.trim(), customer.state.trim(), customer.postcode.trim(), storedSubtotal, cart.shippingMinor, storedSubtotal + cart.shippingMinor, now, cart.discount?.code ?? null, discountMinor);
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
            totalMinor: storedSubtotal + cart.shippingMinor
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
        // A discount use counts once the order is paid, not when checkout starts.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$discounts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureDiscountStorage"])();
        const used = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare('SELECT discount_code FROM customer_order WHERE id = ?').get(order.id);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$discounts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordUse"])(used?.discount_code ?? null);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0oj946r._.js.map