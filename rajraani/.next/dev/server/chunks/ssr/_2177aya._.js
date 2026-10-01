module.exports = [
"[project]/.next-internal/server/app/admin/(protected)/products/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/admin/product-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0097ce86dad8aae1c05d70f65885cbfc1a7ae7900b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"],
    "4015cb5d413ca44e5f2fa5f32b877ce6e51abf16ba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$product$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["togglePublishedAction"],
    "603f58fa4ca8220b5957bcbeac373bbaed959d3537",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$product$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adjustStockAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f28$protected$292f$products$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$admin$2f$product$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/(protected)/products/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/admin/product-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$product$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/product-actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/admin/(protected)/products/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/admin/product-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$product$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/product-actions.ts [app-rsc] (ecmascript)");
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
"[project]/src/lib/admin/product-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4015cb5d413ca44e5f2fa5f32b877ce6e51abf16ba":{"name":"togglePublishedAction"},"40df3dcf5ef8617763428dd8b5e1ad0e04b3231068":{"name":"deleteProductAction"},"603f58fa4ca8220b5957bcbeac373bbaed959d3537":{"name":"adjustStockAction"},"604c8f943ec27aeea2ed355a39e376c1ba58a1c2dd":{"name":"saveProductAction"}},"src/lib/admin/product-actions.ts",""] */ __turbopack_context__.s([
    "adjustStockAction",
    ()=>adjustStockAction,
    "deleteProductAction",
    ()=>deleteProductAction,
    "saveProductAction",
    ()=>saveProductAction,
    "togglePublishedAction",
    ()=>togglePublishedAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/history.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/admin-queries.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/taxonomy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
function text(form, key) {
    return String(form.get(key) ?? "").trim();
}
function integer(form, key) {
    const value = Number(text(form, key));
    return Number.isFinite(value) ? Math.trunc(value) : Number.NaN;
}
function parse(form) {
    return {
        handle: text(form, "handle"),
        title: text(form, "title"),
        poeticName: text(form, "poeticName"),
        sku: text(form, "sku"),
        priceRupees: Number(text(form, "priceRupees")),
        inventoryQuantity: integer(form, "inventoryQuantity"),
        fulfilmentMode: text(form, "fulfilmentMode"),
        dispatchDaysMin: integer(form, "dispatchDaysMin"),
        dispatchDaysMax: integer(form, "dispatchDaysMax"),
        narrative: text(form, "narrative"),
        specColour: text(form, "specColour"),
        specTechnique: text(form, "specTechnique"),
        specFabric: text(form, "specFabric"),
        specSpeciality: text(form, "specSpeciality"),
        specCollectionNote: text(form, "specCollectionNote"),
        specNote: text(form, "specNote"),
        provenanceWorkshop: text(form, "provenanceWorkshop"),
        provenanceLoom: text(form, "provenanceLoom"),
        provenanceWeeks: integer(form, "provenanceWeeks"),
        provenanceArtisans: integer(form, "provenanceArtisans"),
        garmentType: text(form, "garmentType"),
        weave: text(form, "weave"),
        fabric: text(form, "fabric"),
        colourFamily: text(form, "colourFamily"),
        campaignSlug: text(form, "campaignSlug"),
        motifs: form.getAll("motifs").map(String),
        zariTypes: form.getAll("zariTypes").map(String),
        published: form.get("published") === "on"
    };
}
/** Fulfilment wording that must never reach a title. The database also refuses. */ const FULFILMENT_IN_TITLE = /pre[-\s]?order|ready to ship|made to order|sold out|coming soon/i;
function validate(input, id) {
    const errors = {};
    if (!input.handle) errors.handle = "Required.";
    else if (!SLUG.test(input.handle)) {
        errors.handle = "Lower-case words separated by single hyphens.";
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleTaken"])(input.handle, id)) {
        errors.handle = "Another piece already uses this web address.";
    }
    if (!input.title) errors.title = "Required.";
    else if (FULFILMENT_IN_TITLE.test(input.title)) {
        // Worth explaining, because it looks arbitrary and is not.
        errors.title = "Titles cannot mention stock or dispatch state. That lives in the Dispatch field and shows as a badge — in a title it ends up in Google results and cart lines, where it cannot be corrected without changing the title.";
    }
    if (!input.poeticName) errors.poeticName = "Required — the piece's proper name.";
    if (!input.sku) errors.sku = "Required.";
    else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skuTaken"])(input.sku, id)) errors.sku = "Another piece already uses this SKU.";
    if (!Number.isFinite(input.priceRupees) || input.priceRupees <= 0) {
        errors.priceRupees = "A price in rupees, greater than zero.";
    }
    if (!Number.isFinite(input.inventoryQuantity) || input.inventoryQuantity < 0) {
        errors.inventoryQuantity = "Zero or more.";
    }
    if (!Number.isFinite(input.dispatchDaysMin) || input.dispatchDaysMin < 1) {
        errors.dispatchDaysMin = "At least one day.";
    }
    if (input.dispatchDaysMax < input.dispatchDaysMin) {
        errors.dispatchDaysMax = "Cannot be sooner than the minimum.";
    }
    if (input.narrative.length < 80) {
        errors.narrative = "Too short. Around 90 words is the house length.";
    }
    for (const field of [
        "specColour",
        "specTechnique",
        "specFabric",
        "provenanceWorkshop",
        "provenanceLoom"
    ]){
        if (!input[field]) errors[field] = "Required.";
    }
    if (!Number.isFinite(input.provenanceWeeks) || input.provenanceWeeks < 1) {
        errors.provenanceWeeks = "At least one week.";
    }
    if (!Number.isFinite(input.provenanceArtisans) || input.provenanceArtisans < 1) {
        errors.provenanceArtisans = "At least one weaver.";
    }
    // Vocabulary. The database triggers enforce this too; catching it here turns
    // an aborted transaction into a message beside the right field.
    const single = [
        [
            "garmentType",
            "garment"
        ],
        [
            "weave",
            "weave"
        ],
        [
            "fabric",
            "fabric"
        ],
        [
            "colourFamily",
            "colour"
        ],
        [
            "fulfilmentMode",
            "fulfilment"
        ]
    ];
    /**
   * Garment types that may leave `weave` blank — stitched, not woven to shape.
   * Kept as a list rather than a `weave`-is-always-optional rule, because a
   * saree with no weave is a mistake and should still be caught here.
   */ const STITCHED = new Set([
        "suit"
    ]);
    for (const [field, group] of single){
        const value = input[field];
        if (!value) {
            if (field === "weave" && STITCHED.has(input.garmentType)) continue;
            errors[field] = "Required.";
            continue;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["termsForGroup"])(group).some((term)=>term.slug === value)) {
            errors[field] = `"${value}" is not in the vocabulary.`;
        }
    }
    for (const [field, group] of [
        [
            "motifs",
            "motif"
        ],
        [
            "zariTypes",
            "zari"
        ]
    ]){
        for (const value of input[field]){
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["termsForGroup"])(group).some((term)=>term.slug === value)) {
                errors[field] = `"${value}" is not in the vocabulary.`;
            }
        }
    }
    return errors;
}
async function saveProductAction(_previous, form) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const rawId = String(form.get("id") ?? "");
    const id = rawId ? Number(rawId) : undefined;
    const input = parse(form);
    const errors = validate(input, id);
    if (Object.keys(errors).length > 0) {
        // Hand the values back, so a mistake in one field does not empty the form.
        return {
            errors,
            values: input
        };
    }
    let savedId;
    const before = id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawProduct"])(id) : null;
    try {
        savedId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveProduct"])(input, id);
    } catch (error) {
        // The database holds constraints the form does not duplicate. Surface the
        // message rather than a 500 — they are written to be read.
        return {
            errors: {
                form: error instanceof Error ? error.message : "Could not save."
            },
            values: input
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
        kind: "product",
        target: String(savedId),
        label: `Piece: ${input.poeticName}`,
        who: admin.email,
        before,
        after: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawProduct"])(savedId),
        // A brand-new piece is not "put back" — hide it instead.
        restorable: before !== null
    });
    // The storefront prerenders these, so without this the edit would not appear
    // until the cache expired.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/admin/products/${savedId}?saved=1`);
}
async function deleteProductAction(form) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const id = Number(form.get("id"));
    if (!Number.isFinite(id)) return;
    const before = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawProduct"])(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProduct"])(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
        kind: "product",
        target: String(id),
        label: `Piece: ${before ? JSON.parse(before).poeticName : id}`,
        who: admin.email,
        before,
        after: null,
        summary: "Deleted",
        restorable: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin/products?deleted=1");
}
async function adjustStockAction(id, delta) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    if (!Number.isInteger(id) || !Number.isInteger(delta)) {
        return {
            ok: false,
            error: "Invalid stock adjustment."
        };
    }
    // Bound the step. The dashboard only ever sends ±1, so anything larger is a
    // hand-crafted POST rather than a click.
    if (Math.abs(delta) > 100) {
        return {
            ok: false,
            error: "Stock adjustment out of range."
        };
    }
    const quantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["adjustStock"])(id, delta);
    if (quantity === undefined) {
        return {
            ok: false,
            error: "That piece no longer exists."
        };
    }
    const name = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawProduct"])(id) ?? "{}").poeticName ?? String(id);
    const was = Math.max(0, quantity - delta);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
        kind: "stock",
        target: String(id),
        label: `Piece: ${name}`,
        who: admin.email,
        before: JSON.stringify({
            quantity: was
        }),
        after: JSON.stringify({
            quantity
        }),
        summary: `Stock ${was} → ${quantity}${quantity === 0 ? " (sold out)" : ""}`
    });
    // Sold-out state is rendered on the storefront, so the change has to reach it.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
    return {
        ok: true,
        quantity
    };
}
async function togglePublishedAction(form) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const id = Number(form.get("id"));
    if (!Number.isFinite(id)) return;
    const publish = form.get("publish") === "1";
    const name = JSON.parse((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rawProduct"])(id) ?? "{}").poeticName ?? String(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setPublished"])(id, publish);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
        kind: "visibility",
        target: String(id),
        label: `Piece: ${name}`,
        who: admin.email,
        before: JSON.stringify({
            published: !publish
        }),
        after: JSON.stringify({
            published: publish
        }),
        summary: publish ? "Shown on the shop" : "Hidden from the shop"
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/admin/products?saved=1");
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveProductAction,
    deleteProductAction,
    adjustStockAction,
    togglePublishedAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveProductAction, "604c8f943ec27aeea2ed355a39e376c1ba58a1c2dd", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProductAction, "40df3dcf5ef8617763428dd8b5e1ad0e04b3231068", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(adjustStockAction, "603f58fa4ca8220b5957bcbeac373bbaed959d3537", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(togglePublishedAction, "4015cb5d413ca44e5f2fa5f32b877ce6e51abf16ba", null);
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
"[project]/src/lib/domain/facets.generated.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// GENERATED FILE — DO NOT EDIT.
// Source: taxonomy/facets.json
// Regenerate: npm run taxonomy
//
// The JSON is the source of truth and the reviewable artefact; this module
// exists so the vocabulary can be bundled into client components. See
// taxonomy/REVIEW.md for the 11 decisions still open.
__turbopack_context__.s([
    "FACETS",
    ()=>FACETS
]);
const FACETS = {
    "garment": {
        "label": "Garment",
        "metaobject": "garment",
        "values": [
            {
                "canonical": "saree",
                "label": "Saree",
                "aliases": [
                    "sari",
                    "sarees",
                    "saris",
                    "seere"
                ]
            },
            {
                "canonical": "dupatta",
                "label": "Dupatta",
                "aliases": [
                    "dupattas",
                    "odhni",
                    "chunni"
                ]
            },
            {
                "canonical": "lehenga",
                "label": "Lehenga",
                "aliases": [
                    "lehengas",
                    "lehanga",
                    "ghagra"
                ]
            },
            {
                "canonical": "suit",
                "label": "Suit",
                "aliases": [
                    "suits",
                    "anarkali",
                    "anarkalis",
                    "kurta-set",
                    "kurta-sets",
                    "salwar-suit",
                    "salwar-kameez",
                    "churidar-set",
                    "sharara-set"
                ],
                "definition": "A stitched multi-piece ensemble — kurta or anarkali with churidar, salwar or palazzo, usually with a dupatta. Tailored from cloth rather than woven to shape, which is why it is the first garment in this vocabulary that may carry no `weave`.",
                "review": true,
                "decision": "ADDED 22 Aug 2026 to admit the first stitched garments to the catalogue. Two things need a domain reviewer. (1) Is `suit` the right umbrella, or should `anarkali`, `kurta-set` and `sharara-set` be siblings rather than aliases? Aliasing them is reversible now and becomes a URL later — the same argument that made `kadhua` worth confirming. (2) A suit is the only garment here assembled from several cloths, so `fabric` and `weave` describe its principal piece and silently drop the dupatta and churidar. If that matters commercially it wants a component model, not a facet."
            },
            {
                "canonical": "stole",
                "label": "Stole",
                "aliases": [
                    "stoles",
                    "scarf",
                    "scarves"
                ]
            },
            {
                "canonical": "blouse-piece",
                "label": "Blouse piece",
                "aliases": [
                    "blouse",
                    "blouses",
                    "blouse-fabric",
                    "choli-piece"
                ]
            },
            {
                "canonical": "yardage",
                "label": "Fabric by the metre",
                "aliases": [
                    "fabric",
                    "running-fabric",
                    "by-the-metre",
                    "fabric-length"
                ]
            }
        ]
    },
    "weave": {
        "label": "Weave",
        "metaobject": "weave",
        "note": "Loom technique only. Dyeing and surface treatments (bandhani, batik) are deliberately excluded — they are not weaves, and mixing them here is how a taxonomy starts to rot.",
        "values": [
            {
                "canonical": "kadhua",
                "label": "Kadhua",
                "aliases": [
                    "kadwa",
                    "kadua",
                    "kadhwa",
                    "kadhuwa",
                    "kadva"
                ],
                "definition": "Discontinuous supplementary weft. Each motif is woven separately with its own small shuttle, so nothing floats behind the ground and the reverse is clean.",
                "review": true,
                "decision": "MEASURED 50/50 — `kadhua*` 16 tag variants, `kadwa*` 16 on the reference catalogue. No frequency signal exists to break the tie. Recommending `kadhua` because it transliterates the aspirated Devanagari form more faithfully and is the spelling used in most published Banarasi literature. THIS IS THE SINGLE JUDGEMENT MOST WORTH A WEAVER'S CONFIRMATION — it is cheap to flip now and expensive after launch, because it becomes a URL."
            },
            {
                "canonical": "kadiyal",
                "label": "Kadiyal",
                "aliases": [
                    "kadial",
                    "kadhiyal",
                    "kadiyal-border",
                    "koradi"
                ],
                "definition": "Interlocked warp and weft so the border and body are woven in genuinely different colours, not printed or attached.",
                "review": true,
                "decision": "`koradi` listed as an alias tentatively — confirm it refers to the same construction and is not a separate regional technique."
            },
            {
                "canonical": "jangla",
                "label": "Jangla",
                "aliases": [
                    "jangala",
                    "jungla"
                ],
                "definition": "Dense all-over creeper and vine patterning covering the full ground.",
                "review": true,
                "decision": "COLLISION: `jangla` reads as both a weave-density style and a motif family. Modelled here as a weave and deliberately NOT repeated under motif — a value that lives in two facets makes counts double and shoppers distrust them."
            },
            {
                "canonical": "jamawar",
                "label": "Jamawar",
                "aliases": [
                    "jamavar",
                    "jamewar"
                ],
                "definition": "Shawl-derived all-over ornamentation, densely patterned across the field."
            },
            {
                "canonical": "tanchoi",
                "label": "Tanchoi",
                "aliases": [
                    "tanchui",
                    "tanchoi-silk"
                ],
                "definition": "Extra-weft satin weave with no floats on the reverse; pattern comes from weft colour, not added zari."
            },
            {
                "canonical": "cutwork",
                "label": "Cutwork",
                "aliases": [
                    "fekuwa",
                    "phekuwa",
                    "fekua",
                    "cut-work",
                    "cutwork-jamdani"
                ],
                "definition": "Continuous supplementary weft carried across the width, with the floats cut away after weaving."
            },
            {
                "canonical": "jamdani",
                "label": "Jamdani",
                "aliases": [
                    "jamdhani",
                    "jamadani"
                ],
                "definition": "Discontinuous supplementary weft on a fine ground, motif built by hand at the loom."
            },
            {
                "canonical": "rangkat",
                "label": "Rangkat",
                "aliases": [
                    "rangkaat",
                    "rang-kat"
                ],
                "definition": "Ground pieced from blocks of different colours joined within the weave itself."
            },
            {
                "canonical": "bootidar",
                "label": "Bootidar",
                "aliases": [
                    "butidar",
                    "bootidaar",
                    "butidaar"
                ],
                "definition": "Ground scattered with regularly repeating small motifs.",
                "review": true,
                "decision": "Borderline — arguably a motif layout rather than a weave. Kept here because merchandisers describe pieces this way. Flag if it belongs under motif instead."
            }
        ]
    },
    "fabric": {
        "label": "Fabric",
        "metaobject": "fabric",
        "values": [
            {
                "canonical": "katan-silk",
                "label": "Katan silk",
                "aliases": [
                    "katan",
                    "pure-katan",
                    "katan-pure-silk"
                ],
                "definition": "Twisted filament pure silk. The default Banarasi ground."
            },
            {
                "canonical": "kora-organza",
                "label": "Kora (organza) silk",
                "aliases": [
                    "kora",
                    "organza",
                    "kora-silk",
                    "organza-silk",
                    "kora-by-cotton"
                ]
            },
            {
                "canonical": "khaddi-georgette",
                "label": "Khaddi georgette",
                "aliases": [
                    "khaddi",
                    "khadi-georgette",
                    "handwoven-georgette",
                    "khaddi-chiffon"
                ],
                "review": true,
                "decision": "`khaddi` here means handwoven-on-pit-loom georgette, NOT khadi hand-spun cotton. Same transliteration, different material. Confirm the label reads unambiguously to a shopper — if not, rename the label (free) rather than the canonical (a migration)."
            },
            {
                "canonical": "georgette",
                "label": "Georgette",
                "aliases": [
                    "georgett",
                    "gerogette",
                    "pure-georgette"
                ]
            },
            {
                "canonical": "tissue-silk",
                "label": "Tissue silk",
                "aliases": [
                    "tissue",
                    "tissue-by-cotton"
                ],
                "review": true,
                "decision": "COLLISION: `tissue` also names a weave effect (metallic zari in the weft). Held as a fabric only. Confirm merchandisers agree."
            },
            {
                "canonical": "satin-silk",
                "label": "Satin silk",
                "aliases": [
                    "satin",
                    "satin-tanchoi"
                ]
            },
            {
                "canonical": "tussar-silk",
                "label": "Tussar silk",
                "aliases": [
                    "tussar",
                    "tussah",
                    "tasar",
                    "kosa",
                    "kosa-silk"
                ]
            },
            {
                "canonical": "muslin-cotton",
                "label": "Muslin cotton",
                "aliases": [
                    "muslin",
                    "cotton",
                    "pure-cotton",
                    "malmal"
                ]
            },
            {
                "canonical": "silk-wool",
                "label": "Silk wool",
                "aliases": [
                    "silk-and-wool",
                    "wool-silk"
                ]
            },
            {
                "canonical": "moonga-silk",
                "label": "Moonga silk",
                "aliases": [
                    "moonga",
                    "muga",
                    "munga"
                ]
            }
        ]
    },
    "zari": {
        "label": "Zari",
        "note": "Fixed by build.md §2.1 as list.single_line_text — a product may carry more than one. Not a metaobject; the set is small, closed, and stable.",
        "multiSelect": true,
        "values": [
            {
                "canonical": "real_zari",
                "label": "Real zari",
                "aliases": [
                    "real-zari",
                    "pure-zari",
                    "asli-zari",
                    "gold-zari-real"
                ],
                "definition": "Silver thread gilded with gold, tested and certified."
            },
            {
                "canonical": "roopa_sona",
                "label": "Roopa sona",
                "aliases": [
                    "roopa-sona",
                    "rupa-sona",
                    "roopasona"
                ],
                "definition": "Silver-and-gold zari, the traditional half-fine quality."
            },
            {
                "canonical": "gold",
                "label": "Gold zari",
                "aliases": [
                    "gold-zari",
                    "golden-zari",
                    "sona"
                ]
            },
            {
                "canonical": "silver",
                "label": "Silver zari",
                "aliases": [
                    "silver-zari",
                    "chandi",
                    "silver-tested"
                ]
            },
            {
                "canonical": "resham",
                "label": "Resham",
                "aliases": [
                    "reshm",
                    "silk-thread",
                    "resham-work"
                ],
                "definition": "Silk thread rather than metallic — no zari content."
            }
        ]
    },
    "motif": {
        "label": "Motif",
        "metaobject": "motif",
        "multiSelect": true,
        "values": [
            {
                "canonical": "booti",
                "label": "Booti",
                "aliases": [
                    "buti",
                    "bootis",
                    "butis",
                    "booty",
                    "kadwa-booti",
                    "kadhua-booti"
                ],
                "definition": "Small scattered motif, repeated across the ground.",
                "review": true,
                "decision": "`booti` and `boota` are DIFFERENT SIZES OF THE SAME IDEA, not spelling variants. They are kept as separate concepts on purpose. A naive normalisation script would merge them and destroy a distinction merchandisers rely on — this is exactly the reconciliation pre-build-gaps §1 says a regex cannot do."
            },
            {
                "canonical": "boota",
                "label": "Boota",
                "aliases": [
                    "buta",
                    "butta",
                    "bootas",
                    "butas"
                ],
                "definition": "Larger standalone motif, typically placed with space around it.",
                "review": true,
                "decision": "MEASURED `boota*` 26 variants vs `buta*` 2. Frequency is decisive here, unlike kadhua/kadwa — recommending `boota`."
            },
            {
                "canonical": "jaal",
                "label": "Jaal",
                "aliases": [
                    "jal",
                    "jaal-work",
                    "net"
                ],
                "definition": "All-over lattice or net of connected motifs.",
                "review": true,
                "decision": "`jaali` deliberately NOT aliased — it more often names pierced/openwork rather than the lattice layout. Confirm."
            },
            {
                "canonical": "konia",
                "label": "Konia",
                "aliases": [
                    "koniya",
                    "kaniya",
                    "corner-motif",
                    "konia-work"
                ],
                "definition": "Corner motif, placed at the pallu or across the fall."
            },
            {
                "canonical": "paisley",
                "label": "Paisley (ambi)",
                "aliases": [
                    "ambi",
                    "aam",
                    "keri",
                    "mango",
                    "paisely",
                    "kalka"
                ],
                "review": true,
                "decision": "`paisely` is a misspelling present in the reference data — kept as an import alias only. Deciding whether the shopper-facing label is \"Paisley\" or \"Ambi\" is a brand-voice call, not a data call."
            },
            {
                "canonical": "meenakari",
                "label": "Meenakari",
                "aliases": [
                    "meena",
                    "mina",
                    "minakari",
                    "meenakaari",
                    "meena-work"
                ],
                "definition": "Coloured resham worked inside or alongside zari motifs, giving an enamelled effect.",
                "review": true,
                "decision": "MEASURED `meena*` 38 vs `mina*` 1 — frequency decisive. Also a TECHNIQUE/MOTIF collision: it describes how a motif is coloured, not the motif's shape. Held under motif because that is where shoppers look for it. Flag if you disagree."
            },
            {
                "canonical": "shikargah",
                "label": "Shikargah",
                "aliases": [
                    "shikaargah",
                    "shikargarh",
                    "hunting-scene"
                ],
                "definition": "Hunting-scene narrative field with animals, birds and foliage."
            },
            {
                "canonical": "bel",
                "label": "Bel",
                "aliases": [
                    "bail",
                    "belwork",
                    "creeper",
                    "vine"
                ],
                "definition": "Running creeper, most often along a border."
            },
            {
                "canonical": "floral",
                "label": "Floral",
                "aliases": [
                    "phool",
                    "phul",
                    "flower",
                    "flowers",
                    "gulab"
                ]
            },
            {
                "canonical": "geometric",
                "label": "Geometric",
                "aliases": [
                    "geometry",
                    "geometrical",
                    "chevron",
                    "stripe",
                    "checks"
                ]
            },
            {
                "canonical": "bird-animal",
                "label": "Bird & animal",
                "aliases": [
                    "bird",
                    "birds",
                    "peacock",
                    "mor",
                    "parrot",
                    "tota",
                    "elephant",
                    "haathi",
                    "animal"
                ]
            }
        ]
    },
    "colour": {
        "label": "Colour",
        "metaobject": "colour",
        "note": "pre-build-gaps §1 measured 207 colour-ish tags on the reference catalogue. This collapses to 17 families. The precise shade belongs in the `spec_color` metafield as prose — it is copy, not a facet. Shoppers filter by family and read for shade.",
        "values": [
            {
                "canonical": "red",
                "label": "Red",
                "hex": "#B02020",
                "aliases": [
                    "scarlet",
                    "crimson",
                    "sindoori",
                    "lal",
                    "cherry"
                ]
            },
            {
                "canonical": "maroon",
                "label": "Maroon",
                "hex": "#6E1B24",
                "aliases": [
                    "wine",
                    "burgundy",
                    "oxblood",
                    "deep-red"
                ]
            },
            {
                "canonical": "pink",
                "label": "Pink",
                "hex": "#D46A8B",
                "aliases": [
                    "rose",
                    "blush",
                    "rani-pink",
                    "gulabi",
                    "fuchsia",
                    "magenta"
                ]
            },
            {
                "canonical": "orange",
                "label": "Orange",
                "hex": "#D2691E",
                "aliases": [
                    "rust",
                    "terracotta",
                    "peach",
                    "coral",
                    "narangi"
                ]
            },
            {
                "canonical": "yellow",
                "label": "Yellow",
                "hex": "#D9A404",
                "aliases": [
                    "mustard",
                    "haldi",
                    "lemon",
                    "ochre",
                    "peela"
                ]
            },
            {
                "canonical": "gold",
                "label": "Gold",
                "hex": "#B08D3F",
                "aliases": [
                    "golden",
                    "antique-gold",
                    "sona",
                    "champagne"
                ]
            },
            {
                "canonical": "green",
                "label": "Green",
                "hex": "#2E6B45",
                "aliases": [
                    "emerald",
                    "olive",
                    "mehendi",
                    "hara",
                    "bottle-green",
                    "sage"
                ]
            },
            {
                "canonical": "teal",
                "label": "Teal",
                "hex": "#1F6B6B",
                "aliases": [
                    "turquoise",
                    "aqua",
                    "sea-green",
                    "firozi"
                ]
            },
            {
                "canonical": "blue",
                "label": "Blue",
                "hex": "#2A5599",
                "aliases": [
                    "sky",
                    "cobalt",
                    "peacock-blue",
                    "neela",
                    "powder-blue"
                ]
            },
            {
                "canonical": "indigo",
                "label": "Indigo",
                "hex": "#2A3A6B",
                "aliases": [
                    "navy",
                    "midnight",
                    "neel",
                    "ink-blue"
                ]
            },
            {
                "canonical": "purple",
                "label": "Purple",
                "hex": "#5B3A78",
                "aliases": [
                    "violet",
                    "lilac",
                    "lavender",
                    "mauve",
                    "baingani",
                    "plum"
                ]
            },
            {
                "canonical": "black",
                "label": "Black",
                "hex": "#1A1614",
                "aliases": [
                    "kala",
                    "jet-black",
                    "charcoal"
                ]
            },
            {
                "canonical": "white",
                "label": "White",
                "hex": "#FFFFFF",
                "aliases": [
                    "pure-white",
                    "safed"
                ]
            },
            {
                "canonical": "off-white",
                "label": "Off-white",
                "hex": "#EFE7DA",
                "aliases": [
                    "offwhite",
                    "ivory",
                    "cream",
                    "ecru",
                    "champagne-white",
                    "chalk"
                ]
            },
            {
                "canonical": "grey",
                "label": "Grey",
                "hex": "#7A736C",
                "aliases": [
                    "gray",
                    "silver-grey",
                    "slate",
                    "steel"
                ]
            },
            {
                "canonical": "brown",
                "label": "Brown",
                "hex": "#6B4A2F",
                "aliases": [
                    "coffee",
                    "chocolate",
                    "tan",
                    "bronze",
                    "beige",
                    "sand",
                    "khaki",
                    "camel"
                ]
            },
            {
                "canonical": "multicolour",
                "label": "Multicolour",
                "hex": null,
                "aliases": [
                    "multi",
                    "multicolor",
                    "rainbow",
                    "rangkat-multi",
                    "assorted"
                ]
            }
        ]
    },
    "availability": {
        "label": "Availability",
        "note": "pre-build-gaps §2: 49% of the reference catalogue is sold out. This is not an edge case — it is half the catalogue, and the arithmetic consequence of unique-piece inventory. It must be a first-class facet with honest counts, or shoppers filter into empty grids.",
        "derived": true,
        "values": [
            {
                "canonical": "available",
                "label": "Available",
                "source": "Shopify variant availableForSale"
            },
            {
                "canonical": "sold-out",
                "label": "Sold out",
                "source": "Shopify variant availableForSale"
            }
        ]
    },
    "fulfilment": {
        "label": "Dispatch",
        "note": "pre-build-gaps §3: the reference site encoded 'Pre-Order:' into 463 product TITLES, so it leaked into breadcrumbs, og:title, cart lines and JSON-LD. Acceptance criterion: no fulfilment state may ever appear in a product title. Badging is presentation and belongs to the template.",
        "metafield": "fulfilment_mode",
        "values": [
            {
                "canonical": "ready_to_ship",
                "label": "Ready to ship"
            },
            {
                "canonical": "made_to_order",
                "label": "Made to order"
            },
            {
                "canonical": "pre_order",
                "label": "Pre-order"
            }
        ]
    },
    "price": {
        "label": "Price",
        "computed": true,
        "note": "No stored values, by design. Bands are computed at query time from Algolia numeric faceting, per currency. build.md §2.1: storing `over-40000` as a tag breaks the moment a price changes or a shopper switches to one of the other 7 markets."
    }
};
}),
"[project]/src/lib/domain/taxonomy.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVAILABILITY_OPTIONS",
    ()=>AVAILABILITY_OPTIONS,
    "COLOURS",
    ()=>COLOURS,
    "FABRICS",
    ()=>FABRICS,
    "FACET_GROUPS",
    ()=>FACET_GROUPS,
    "FACET_GROUP_LABELS",
    ()=>FACET_GROUP_LABELS,
    "FULFILMENT_OPTIONS",
    ()=>FULFILMENT_OPTIONS,
    "GARMENT_TYPES",
    ()=>GARMENT_TYPES,
    "MOTIFS",
    ()=>MOTIFS,
    "PRICE_BANDS",
    ()=>PRICE_BANDS,
    "WEAVES",
    ()=>WEAVES,
    "ZARI_TYPES",
    ()=>ZARI_TYPES,
    "findTerm",
    ()=>findTerm,
    "resolveTerm",
    ()=>resolveTerm,
    "termsAwaitingReview",
    ()=>termsAwaitingReview,
    "termsForGroup",
    ()=>termsForGroup
]);
/**
 * The controlled vocabulary.
 *
 * `taxonomy/facets.json` is the single source of truth. This module is a typed
 * reader over it and adds no terms of its own, so the vocabulary stays
 * reviewable by someone who will never open a `.ts` file. `taxonomy/REVIEW.md`
 * is the same content written for a human reviewer.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * STILL A DRAFT. 11 decisions need domain sign-off before Sprint 3 — most
 * importantly whether the canonical spelling is `kadhua` or `kadwa`, which the
 * reference catalogue split exactly 50/50 across 32 tag variants. Canonical
 * slugs become URLs, so they are free to change now and expensive later.
 * `npm run check:taxonomy` re-prints the open list.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * This file is also the governance rule from build.md §7.3. On a greenfield
 * catalogue the tag-migration workstream inverts into one discipline: define
 * the vocabulary before the first product exists, and never allow free-text
 * term creation. The reference catalogue reached 1,592 unique tags, 703 of them
 * used exactly once, for want of it.
 *
 * ALIAS RESOLUTION IS FACET-SCOPED, NEVER GLOBAL. `gold` is claimed by both
 * `zari.gold` (the metallic thread) and `colour.gold` (the shade); both are
 * correct, and a shopper tells them apart from the group label. Resolving a
 * term without naming its facet is therefore always a bug — which is why
 * `resolveTerm` takes the group as its first argument.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$facets$2e$generated$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/facets.generated.ts [app-rsc] (ecmascript)");
;
const FACET_GROUPS = [
    "garment",
    "weave",
    "fabric",
    "colour",
    "zari",
    "motif",
    "price",
    "availability",
    "fulfilment"
];
function readGroup(group) {
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$facets$2e$generated$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FACETS"][group]?.values ?? [];
    return values.map((value)=>({
            slug: value.canonical,
            name: value.label,
            ...value.definition ? {
                description: value.definition
            } : {},
            ...value.aliases ? {
                aliases: value.aliases
            } : {},
            ...value.hex ? {
                hex: value.hex
            } : {},
            ...value.review ? {
                needsReview: true
            } : {},
            ...value.decision ? {
                reviewNote: value.decision
            } : {}
        }));
}
const GARMENT_TYPES = readGroup("garment");
const WEAVES = readGroup("weave");
const FABRICS = readGroup("fabric");
const COLOURS = readGroup("colour");
const ZARI_TYPES = readGroup("zari");
const MOTIFS = readGroup("motif");
const AVAILABILITY_OPTIONS = readGroup("availability");
const FULFILMENT_OPTIONS = readGroup("fulfilment");
const PRICE_BANDS = [
    {
        slug: "under-25000",
        name: "Under ₹25,000",
        min: 0,
        max: 2_500_000
    },
    {
        slug: "25000-50000",
        name: "₹25,000 – ₹50,000",
        min: 2_500_000,
        max: 5_000_000
    },
    {
        slug: "50000-100000",
        name: "₹50,000 – ₹1,00,000",
        min: 5_000_000,
        max: 10_000_000
    },
    {
        slug: "over-100000",
        name: "Over ₹1,00,000",
        min: 10_000_000
    }
];
const FACET_GROUP_LABELS = {
    garment: "Garment",
    weave: "Weave",
    fabric: "Fabric",
    colour: "Colour",
    zari: "Zari",
    motif: "Motif",
    price: "Price",
    availability: "Availability",
    fulfilment: "Dispatch"
};
function termsForGroup(group) {
    switch(group){
        case "garment":
            return GARMENT_TYPES;
        case "weave":
            return WEAVES;
        case "fabric":
            return FABRICS;
        case "colour":
            return COLOURS;
        case "zari":
            return ZARI_TYPES;
        case "motif":
            return MOTIFS;
        case "price":
            return PRICE_BANDS;
        case "availability":
            return AVAILABILITY_OPTIONS;
        case "fulfilment":
            return FULFILMENT_OPTIONS;
    }
}
function findTerm(group, slug) {
    return termsForGroup(group).find((term)=>term.slug === slug);
}
function resolveTerm(group, input) {
    const needle = input.trim().toLowerCase().replace(/\s+/g, " ");
    return termsForGroup(group).find((term)=>term.slug.toLowerCase() === needle || term.name.toLowerCase() === needle || term.aliases?.some((alias)=>alias.toLowerCase() === needle));
}
function termsAwaitingReview() {
    return FACET_GROUPS.flatMap((group)=>termsForGroup(group).filter((term)=>term.needsReview).map((term)=>({
                group,
                term
            })));
}
}),
];

//# sourceMappingURL=_2177aya._.js.map