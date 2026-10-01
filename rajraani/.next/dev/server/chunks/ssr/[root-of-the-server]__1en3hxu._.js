module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/admin/(protected)/taxonomy/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TaxonomyAdminPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/admin-queries.ts [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: "Taxonomy & Controlled Vocabulary"
};
async function TaxonomyAdminPage() {
    const terms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$admin$2d$queries$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["listTaxonomyTerms"])();
    // Group terms by facet
    const facetsGrouped = terms.reduce((acc, term)=>{
        acc[term.facet] = acc[term.facet] || [];
        acc[term.facet].push(term);
        return acc;
    }, {});
    const facetList = Object.keys(facetsGrouped);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-h2",
                                children: "Taxonomy & Controlled Vocabulary"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-caption mt-1 text-ink-muted",
                                children: "The controlled vocabulary enforcing consistent weave, garment, fabric, zari, and motif tags site-wide."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow px-3 py-1 border border-rule bg-bg-alt text-ink",
                                children: [
                                    terms.length,
                                    " Total Terms"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "bg-ink px-5 py-2.5 text-xs font-semibold tracking-wider uppercase text-bg hover:opacity-90",
                                children: "+ Add Vocabulary Term"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8",
                children: facetList.map((facet)=>{
                    const groupTerms = facetsGrouped[facet] || [];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border border-rule bg-bg p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between border-b border-rule pb-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display text-xl font-semibold capitalize text-ink",
                                            children: [
                                                facet,
                                                " Facet"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                            lineNumber: 49,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow text-[10px] px-2 py-0.5 border border-rule bg-bg-sand text-ink-muted",
                                            children: [
                                                groupTerms.length,
                                                " Terms"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                lineNumber: 47,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3",
                                children: groupTerms.map((term)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-rule/70 p-3 bg-bg-alt/30 hover:border-ink transition-colors flex flex-col justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-semibold text-ink text-sm",
                                                            children: term.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 25
                                                        }, this),
                                                        term.hex ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-4 h-4 rounded-full border border-rule shrink-0 shadow-xs",
                                                            style: {
                                                                backgroundColor: term.hex
                                                            },
                                                            title: term.hex
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                                            lineNumber: 69,
                                                            columnNumber: 27
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "eyebrow text-[10px] text-ink-muted block mt-0.5 font-mono",
                                                    children: [
                                                        "slug: ",
                                                        term.slug
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 23
                                                }, this),
                                                term.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-caption text-ink-body mt-2 text-xs line-clamp-2",
                                                    children: term.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                                    lineNumber: 80,
                                                    columnNumber: 25
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 21
                                        }, this)
                                    }, term.slug, false, {
                                        fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        ]
                    }, facet, true, {
                        fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                        lineNumber: 46,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/(protected)/taxonomy/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/(protected)/taxonomy/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/(protected)/taxonomy/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
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
                  AS image_count
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

//# sourceMappingURL=%5Broot-of-the-server%5D__1en3hxu._.js.map