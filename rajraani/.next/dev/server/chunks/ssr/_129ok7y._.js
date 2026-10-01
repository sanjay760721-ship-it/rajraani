module.exports = [
"[project]/.next-internal/server/app/admin/(protected)/team/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/admin/team-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0097ce86dad8aae1c05d70f65885cbfc1a7ae7900b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"],
    "403d62db63d4c1eb350d1e91662aa80d0576de75aa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$team$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeAdminAction"],
    "60144b3652dbf0593c25478b07750e7ea4746ed2f7",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$team$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addAdminAction"],
    "7042dd2dc945e57536d6bac10bd6154b43b88980b8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$team$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["changeMyPasswordAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f28$protected$292f$team$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$admin$2f$team$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/(protected)/team/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/admin/team-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$team$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/team-actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/admin/(protected)/team/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/admin/team-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$team$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/team-actions.ts [app-rsc] (ecmascript)");
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
"[project]/src/lib/admin/team-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"403d62db63d4c1eb350d1e91662aa80d0576de75aa":{"name":"removeAdminAction"},"60144b3652dbf0593c25478b07750e7ea4746ed2f7":{"name":"addAdminAction"},"7042dd2dc945e57536d6bac10bd6154b43b88980b8":{"name":"changeMyPasswordAction"}},"src/lib/admin/team-actions.ts",""] */ __turbopack_context__.s([
    "addAdminAction",
    ()=>addAdminAction,
    "changeMyPasswordAction",
    ()=>changeMyPasswordAction,
    "removeAdminAction",
    ()=>removeAdminAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/password.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/history.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
const MIN_PASSWORD = 12;
async function addAdminAction(email, password) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const address = email.trim().toLowerCase();
    if (!EMAIL.test(address)) return {
        ok: false,
        error: "That does not look like an email address."
    };
    if (password.length < MIN_PASSWORD) return {
        ok: false,
        error: `The password needs at least ${MIN_PASSWORD} characters.`
    };
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT 1 FROM admin_user WHERE email = ?").get(address)) {
        return {
            ok: false,
            error: "That person can already sign in."
        };
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("INSERT INTO admin_user (email, password_hash, created_at) VALUES (?, ?, ?)").run(address, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashPassword"])(password), new Date().toISOString());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
        kind: "note",
        target: address,
        label: "Team",
        who: admin.email,
        before: null,
        after: null,
        summary: `Added ${address} as an admin`,
        restorable: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/team");
    return {
        ok: true,
        message: `${address} can now sign in. Give them the password privately — they can change it under Team.`
    };
}
async function removeAdminAction(id) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    if (id === admin.id) return {
        ok: false,
        error: "You cannot remove yourself. Ask another admin to."
    };
    const count = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT COUNT(*) AS n FROM admin_user").get().n;
    if (count <= 1) return {
        ok: false,
        error: "This is the only admin account, so it cannot be removed."
    };
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT email FROM admin_user WHERE id = ?").get(id);
    if (!row) return {
        ok: false,
        error: "That account no longer exists."
    };
    // Sessions go with it (ON DELETE CASCADE), so they are signed out at once.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("DELETE FROM admin_user WHERE id = ?").run(id);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
        kind: "note",
        target: row.email,
        label: "Team",
        who: admin.email,
        before: null,
        after: null,
        summary: `Removed ${row.email} — they can no longer sign in`,
        restorable: false
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/admin/team");
    return {
        ok: true,
        message: `${row.email} can no longer sign in.`
    };
}
async function changeMyPasswordAction(current, next, again) {
    const admin = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT password_hash FROM admin_user WHERE id = ?").get(admin.id);
    if (!row) {
        return {
            ok: false,
            error: "This is the developer sign-in used on a developer's machine; it has no password to change."
        };
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyPassword"])(current, row.password_hash)) return {
        ok: false,
        error: "Your current password is not right."
    };
    if (next.length < MIN_PASSWORD) return {
        ok: false,
        error: `The new password needs at least ${MIN_PASSWORD} characters.`
    };
    if (next !== again) return {
        ok: false,
        error: "The two new passwords do not match."
    };
    if (next === current) return {
        ok: false,
        error: "Choose a password different from the current one."
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("UPDATE admin_user SET password_hash = ? WHERE id = ?").run((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$password$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashPassword"])(next), admin.id);
    // Sign out every other device: a changed password should end sessions that
    // might belong to whoever knew the old one. Keep this browser signed in.
    const token = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])()).get("rj_admin")?.value;
    const mine = token ? (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["createHash"])("sha256").update(token).digest("hex") : "";
    const ended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("DELETE FROM admin_session WHERE user_id = ? AND token <> ?").run(admin.id, mine);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$history$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["recordChange"])({
        kind: "note",
        target: admin.email,
        label: "Team",
        who: admin.email,
        before: null,
        after: null,
        summary: "Changed their own password",
        restorable: false
    });
    const others = Number(ended.changes);
    return {
        ok: true,
        message: `Password changed.${others ? ` Signed out on ${others} other device${others === 1 ? "" : "s"}.` : ""}`
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    addAdminAction,
    removeAdminAction,
    changeMyPasswordAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(addAdminAction, "60144b3652dbf0593c25478b07750e7ea4746ed2f7", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(removeAdminAction, "403d62db63d4c1eb350d1e91662aa80d0576de75aa", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(changeMyPasswordAction, "7042dd2dc945e57536d6bac10bd6154b43b88980b8", null);
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
];

//# sourceMappingURL=_129ok7y._.js.map