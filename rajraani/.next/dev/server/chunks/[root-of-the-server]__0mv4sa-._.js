module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:fs [external] (node:fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:fs", () => require("node:fs"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/src/app/media/[file]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/media/library.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function GET(_request, { params }) {
    const { file } = await params;
    const body = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readMediaFile"])(file);
    if (!body) return new Response("Not found", {
        status: 404
    });
    return new Response(new Uint8Array(body), {
        headers: {
            "Content-Type": "image/webp",
            "Content-Length": String(body.byteLength),
            "Cache-Control": "public, max-age=31536000, immutable"
        }
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/db/client.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/media/library.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "ACCEPTED_TYPES",
    ()=>ACCEPTED_TYPES,
    "MAX_UPLOAD_BYTES",
    ()=>MAX_UPLOAD_BYTES,
    "MEDIA_DIR",
    ()=>MEDIA_DIR,
    "MEDIA_FILE",
    ()=>MEDIA_FILE,
    "UploadError",
    ()=>UploadError,
    "getMediaByFile",
    ()=>getMediaByFile,
    "listMedia",
    ()=>listMedia,
    "readMediaFile",
    ()=>readMediaFile,
    "saveUpload",
    ()=>saveUpload,
    "setMediaAlt",
    ()=>setMediaAlt
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__ = __turbopack_context__.i("[externals]/sharp [external] (sharp, esm_import, [project]/node_modules/sharp)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
const MEDIA_DIR = process.env.MEDIA_PATH ?? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "media");
const MEDIA_FILE = /^[0-9]+-[a-z0-9-]{1,60}\.webp$/;
const MAX_EDGE = 3000;
const MAX_UPLOAD_BYTES = 30 * 1024 * 1024;
const ACCEPTED_TYPES = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/avif",
    "image/heic",
    "image/heif"
];
let ready = false;
/**
 * The table is created on first use as well as in schema.sql.
 *
 * `schema.sql` is only applied by `npm run db:seed`; a database seeded before
 * this table existed would otherwise make every upload a 500 until someone
 * reseeded — and reseeding wipes content.
 */ function table() {
    if (!ready) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"])().exec(`CREATE TABLE IF NOT EXISTS media (
      id            INTEGER PRIMARY KEY,
      file          TEXT NOT NULL UNIQUE,
      original_name TEXT NOT NULL,
      width         INTEGER NOT NULL,
      height        INTEGER NOT NULL,
      bytes         INTEGER NOT NULL,
      alt           TEXT NOT NULL DEFAULT '',
      created_at    TEXT NOT NULL
    )`);
        ready = true;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"])();
}
const toItem = (row)=>({
        id: row.id,
        file: row.file,
        src: `/media/${row.file}`,
        originalName: row.original_name,
        width: row.width,
        height: row.height,
        bytes: row.bytes,
        alt: row.alt,
        createdAt: row.created_at
    });
/** A filename-safe slug from whatever the camera called the file. */ function slugFrom(name) {
    const base = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].parse(name).name.toLowerCase();
    const slug = base.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60);
    return slug || "photo";
}
function listMedia() {
    const rows = table().prepare(`SELECT id, file, original_name, width, height, bytes, alt, created_at
       FROM media ORDER BY id DESC`).all();
    return rows.map(toItem);
}
function getMediaByFile(file) {
    const row = table().prepare(`SELECT id, file, original_name, width, height, bytes, alt, created_at
       FROM media WHERE file = ?`).get(file);
    return row ? toItem(row) : undefined;
}
class UploadError extends Error {
}
async function saveUpload(input, originalName) {
    if (input.byteLength > MAX_UPLOAD_BYTES) {
        throw new UploadError("That file is over 30 MB. Export a smaller copy and try again.");
    }
    let output;
    try {
        output = await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$sharp__$5b$external$5d$__$28$sharp$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$sharp$29$__["default"])(input, {
            failOn: "error"
        }).rotate().resize({
            width: MAX_EDGE,
            height: MAX_EDGE,
            fit: "inside",
            withoutEnlargement: true
        }).webp({
            quality: 88
        }).toBuffer({
            resolveWithObject: true
        });
    } catch  {
        throw new UploadError("That file could not be read as a photograph. Use a JPEG, PNG, WebP or AVIF.");
    }
    const { data, info } = output;
    if (Math.min(info.width, info.height) < 400) {
        throw new UploadError(`That photo is only ${info.width}×${info.height}px — too small to look sharp anywhere on the site. Use one at least 1200px wide.`);
    }
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["mkdirSync"])(MEDIA_DIR, {
        recursive: true
    });
    const database = table();
    const insert = database.prepare(`INSERT INTO media (file, original_name, width, height, bytes, alt, created_at)
     VALUES (?, ?, ?, ?, ?, '', ?)`);
    // Insert with a placeholder name to get the id, then name the file after it:
    // ids never repeat, so two uploads called IMG_0001.jpg cannot collide.
    const placeholder = `pending-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const result = insert.run(placeholder, originalName, info.width, info.height, data.byteLength, new Date().toISOString());
    const id = Number(result.lastInsertRowid);
    const file = `${id}-${slugFrom(originalName)}.webp`;
    try {
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["writeFileSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(MEDIA_DIR, file), data);
    } catch (error) {
        database.prepare("DELETE FROM media WHERE id = ?").run(id);
        throw error;
    }
    database.prepare("UPDATE media SET file = ? WHERE id = ?").run(file, id);
    return getMediaByFile(file);
}
function setMediaAlt(id, alt) {
    table().prepare("UPDATE media SET alt = ? WHERE id = ?").run(alt.trim(), id);
}
function readMediaFile(file) {
    if (!MEDIA_FILE.test(file)) return undefined;
    if (!getMediaByFile(file)) return undefined;
    try {
        return (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["readFileSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(MEDIA_DIR, file));
    } catch  {
        return undefined;
    }
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0mv4sa-._.js.map