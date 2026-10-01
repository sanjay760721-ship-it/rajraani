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
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

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
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

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
"[project]/src/app/admin/api/media/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/session.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/media/library.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
async function POST(request) {
    if (!await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentAdmin"])()) {
        return Response.json({
            error: "Sign in again to upload."
        }, {
            status: 401
        });
    }
    let form;
    try {
        form = await request.formData();
    } catch  {
        return Response.json({
            error: "The upload did not arrive whole. Try again."
        }, {
            status: 400
        });
    }
    const files = form.getAll("file").filter((value)=>value instanceof File);
    if (files.length === 0) {
        return Response.json({
            error: "No photo was attached."
        }, {
            status: 400
        });
    }
    const saved = [];
    for (const file of files){
        if (file.type && !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ACCEPTED_TYPES"].includes(file.type)) {
            return Response.json({
                error: `"${file.name}" is not a photo this site can use. Use JPEG, PNG, WebP or AVIF.`
            }, {
                status: 415
            });
        }
        if (file.size > __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["MAX_UPLOAD_BYTES"]) {
            return Response.json({
                error: `"${file.name}" is over 30 MB. Export a smaller copy and try again.`
            }, {
                status: 413
            });
        }
        try {
            saved.push(await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveUpload"])(Buffer.from(await file.arrayBuffer()), file.name));
        } catch (error) {
            if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$media$2f$library$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["UploadError"]) {
                return Response.json({
                    error: `"${file.name}": ${error.message}`,
                    saved
                }, {
                    status: 422
                });
            }
            console.error("[media] upload failed", error);
            return Response.json({
                error: "The upload failed on the server.",
                saved
            }, {
                status: 500
            });
        }
    }
    return Response.json({
        saved
    });
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/lib/auth/password.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/auth/session.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$password$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/password.ts [app-route] (ecmascript)");
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
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT id, email, password_hash FROM admin_user WHERE email = ?`).get(email.trim().toLowerCase());
    if (!row) {
        // Spend comparable time even when the user does not exist, so response
        // timing does not reveal which emails are registered.
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$password$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPassword"])(password, `scrypt$16384$8$1$${"A".repeat(24)}$${"A".repeat(88)}`);
        return undefined;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$password$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPassword"])(password, row.password_hash)) return undefined;
    const token = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomBytes"])(32).toString("base64url");
    const now = new Date();
    const expires = new Date(now.getTime() + SESSION_DAYS * 86_400_000);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO admin_session (token, user_id, created_at, expires_at)
       VALUES (?, ?, ?, ?)`).run(sha256(token), row.id, now.toISOString(), expires.toISOString());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE admin_user SET last_login_at = ? WHERE id = ?`).run(now.toISOString(), row.id);
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
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
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = store.get(COOKIE)?.value;
    if (token) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"])().prepare(`DELETE FROM admin_session WHERE token = ?`).run(sha256(token));
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
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = store.get(COOKIE)?.value;
    if (!token) return undefined;
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT u.id, u.email, s.expires_at
         FROM admin_session s
         JOIN admin_user u ON u.id = s.user_id
        WHERE s.token = ?`).get(sha256(token));
    if (!row) return undefined;
    if (new Date(row.expires_at) < new Date()) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"])().prepare(`DELETE FROM admin_session WHERE token = ?`).run(sha256(token));
        return undefined;
    }
    return {
        id: row.id,
        email: row.email
    };
}
async function requireAdmin() {
    const admin = await currentAdmin();
    if (!admin) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["redirect"])("/admin/login");
    return admin;
}
function pruneSessions() {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"])().prepare(`DELETE FROM admin_session WHERE expires_at < ?`).run(new Date().toISOString());
    return Number(result.changes);
}
function safeEqual(a, b) {
    const left = Buffer.from(a);
    const right = Buffer.from(b);
    return left.length === right.length && (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["timingSafeEqual"])(left, right);
}
}),
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0rjl0bv._.js.map