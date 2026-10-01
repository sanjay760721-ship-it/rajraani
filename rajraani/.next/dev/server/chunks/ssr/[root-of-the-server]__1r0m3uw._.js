module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(storefront)/collections/[handle]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionPage,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FacetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FacetSidebar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilterButton.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/data/catalogue.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/facets/engine.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/facets/url.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
/**
 * Product listing.
 *
 * Reads `searchParams`, so this route is dynamically rendered — correct for a
 * faceted grid. build.md §3's ISR-60s target applies to the unfiltered
 * collection shell and is revisited in Sprint 3, when Algolia takes over
 * faceting and the counts stop being computed in the request path.
 */ const PAGE_SIZE = 24;
async function generateStaticParams() {
    const collections = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["catalogue"].listCollections();
    return collections.map((collection)=>({
            handle: collection.handle
        }));
}
async function generateMetadata(props) {
    const { handle } = await props.params;
    const collection = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["catalogue"].getCollection(handle);
    if (!collection) return {};
    const { page } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseFacetUrlState"])(await props.searchParams);
    return {
        // "Page N" title suffix — the one thing the reference site's pagination
        // does textbook-correctly (pre-build-gaps.md §6). Worth copying.
        title: page > 1 ? `${collection.title} — Page ${page}` : collection.title,
        description: collection.seoIntro
    };
}
async function CollectionPage(props) {
    const { handle } = await props.params;
    const collection = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["catalogue"].getCollection(handle);
    if (!collection) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const { selection, sort, page } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseFacetUrlState"])(await props.searchParams);
    const base = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$catalogue$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["catalogue"].productsInCollection(collection);
    const filtered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sortProducts"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterProducts"])(base, selection), sort);
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["computeFacetCounts"])(base, selection);
    const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
    const currentPage = Math.min(page, pageCount);
    const visible = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "aria-label": "Breadcrumb",
                className: "py-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "eyebrow flex gap-2 text-ink-muted",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "hover:text-ink",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            "aria-hidden": true,
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            "aria-current": "page",
                            children: collection.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "pb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-h1",
                        children: collection.title
                    }, void 0, false, {
                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-prose mt-5 max-w-[var(--container-content)] text-ink-body",
                        children: collection.seoIntro
                    }, void 0, false, {
                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-8 pb-20 lg:grid-cols-[236px_1fr] lg:gap-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FilterButton"], {
                        className: "lg:hidden",
                        selection: selection,
                        counts: counts,
                        sort: sort,
                        resultCount: filtered.length
                    }, void 0, false, {
                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden lg:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FacetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FacetSidebar"], {
                            selection: selection,
                            counts: counts,
                            sort: sort
                        }, void 0, false, {
                            fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-5 flex flex-wrap items-baseline justify-between gap-4 border-b border-rule pb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow text-ink-muted",
                                        children: [
                                            filtered.length,
                                            " ",
                                            filtered.length === 1 ? "piece" : "pieces"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FacetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SortSelect"], {
                                        selection: selection,
                                        sort: sort
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FacetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ActiveFilterChips"], {
                                selection: selection,
                                sort: sort,
                                resultCount: filtered.length
                            }, void 0, false, {
                                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            visible.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-rule px-6 py-20 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-h3 text-ink",
                                        children: "Nothing matches all of those at once."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-ink-body",
                                        children: "Remove a filter above, or start again."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/collections/${collection.handle}`,
                                        className: "cta mt-6 inline-block",
                                        children: "Clear filters"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this) : /* Two to a row at every width. A saree is a full-length garment;
               at four across the drape stops being legible and the grid reads
               as a contact sheet. The reference site shows them large. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "grid grid-cols-2 gap-x-6 gap-y-12 lg:gap-x-8",
                                children: visible.map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductCard"], {
                                            product: product,
                                            priority: index < 2,
                                            headingLevel: 2,
                                            sizes: "(min-width: 1024px) 460px, 50vw"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this)
                                    }, product.handle, false, {
                                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this),
                            pageCount > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Pagination, {
                                handle: collection.handle,
                                currentPage: currentPage,
                                pageCount: pageCount,
                                selection: selection,
                                sort: sort
                            }, void 0, false, {
                                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(ItemListJsonLd, {
                products: visible,
                collectionTitle: collection.title,
                startIndex: (currentPage - 1) * PAGE_SIZE
            }, void 0, false, {
                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
function Pagination({ handle, currentPage, pageCount, selection, sort }) {
    const href = (page)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$url$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildFacetHref"])(`/collections/${handle}`, {
            selection,
            sort,
            page
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Pagination",
        className: "mt-14 flex justify-center gap-6",
        children: [
            currentPage > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: href(currentPage - 1),
                className: "eyebrow text-ink",
                rel: "prev",
                children: "Previous"
            }, void 0, false, {
                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                lineNumber: 198,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "eyebrow text-ink-muted",
                children: [
                    "Page ",
                    currentPage,
                    " of ",
                    pageCount
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            currentPage < pageCount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: href(currentPage + 1),
                className: "eyebrow text-ink",
                rel: "next",
                children: "Next"
            }, void 0, false, {
                fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
/**
 * ItemList on the PLP.
 *
 * pre-build-gaps.md §6: the reference site emits only BreadcrumbList and
 * WebSite on its collection pages. This is an open gap and cheap to take.
 */ function ItemListJsonLd({ products, collectionTitle, startIndex }) {
    const data = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: collectionTitle,
        mainEntity: {
            "@type": "ItemList",
            numberOfItems: products.length,
            itemListElement: products.map((product, index)=>({
                    "@type": "ListItem",
                    position: startIndex + index + 1,
                    url: `/products/${product.handle}`,
                    name: product.poeticName
                }))
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
            __html: JSON.stringify(data)
        }
    }, void 0, false, {
        fileName: "[project]/src/app/(storefront)/collections/[handle]/page.tsx",
        lineNumber: 246,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(storefront)/collections/[handle]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(storefront)/collections/[handle]/page.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/components/FacetSidebar.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActiveFilterChips",
    ()=>ActiveFilterChips,
    "FacetSidebar",
    ()=>FacetSidebar,
    "SortSelect",
    ()=>SortSelect
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ActiveFilterChips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ActiveFilterChips() from the server but ActiveFilterChips is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FacetSidebar.tsx", "ActiveFilterChips");
const FacetSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FacetSidebar() from the server but FacetSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FacetSidebar.tsx", "FacetSidebar");
const SortSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SortSelect() from the server but SortSelect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FacetSidebar.tsx", "SortSelect");
}),
"[project]/src/components/FacetSidebar.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActiveFilterChips",
    ()=>ActiveFilterChips,
    "FacetSidebar",
    ()=>FacetSidebar,
    "SortSelect",
    ()=>SortSelect
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ActiveFilterChips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ActiveFilterChips() from the server but ActiveFilterChips is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FacetSidebar.tsx <module evaluation>", "ActiveFilterChips");
const FacetSidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FacetSidebar() from the server but FacetSidebar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FacetSidebar.tsx <module evaluation>", "FacetSidebar");
const SortSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SortSelect() from the server but SortSelect is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FacetSidebar.tsx <module evaluation>", "SortSelect");
}),
"[project]/src/components/FacetSidebar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FacetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/FacetSidebar.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FacetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/FacetSidebar.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FacetSidebar$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/FilterButton.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterButton",
    ()=>FilterButton
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FilterButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FilterButton() from the server but FilterButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FilterButton.tsx", "FilterButton");
}),
"[project]/src/components/FilterButton.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterButton",
    ()=>FilterButton
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const FilterButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call FilterButton() from the server but FilterButton is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FilterButton.tsx <module evaluation>", "FilterButton");
}),
"[project]/src/components/FilterButton.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/FilterButton.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/FilterButton.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterButton$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/Frame.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Frame",
    ()=>Frame,
    "PLACEHOLDER_WASH",
    ()=>PLACEHOLDER_WASH,
    "ToneTile",
    ()=>ToneTile,
    "srcsetWidths",
    ()=>srcsetWidths,
    "toneFor",
    ()=>toneFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/taxonomy.ts [app-rsc] (ecmascript)");
;
;
;
/**
 * The single place photography enters the app.
 *
 * There is no photography yet — the brief is written but the shoot has not been
 * commissioned (HANDOFF §6). Rather than wire placeholder JPEGs, this renders a
 * schematic colour field at the exact capture ratio, which does three things:
 *
 * 1. Reserves both 2:3 and 1:1 in CSS, so CLS is already handled and the mixed
 *    gallery sequence is genuinely exercised (build.md §6, §9.3).
 * 2. Uses no imagery at all, which is the only way to be certain no competitor
 *    asset reaches the build (§6 Originality).
 * 3. Keeps the swap contained: when `src` is populated, this component switches
 *    to next/image and nothing else in the app changes.
 *
 * The `srcset` honesty rule (§9.3) lives here too — widths are generated from
 * the master's real dimensions, so the ladder can never advertise a width the
 * master cannot supply. The reference site declares up to 5000w against
 * 1440–1600px masters, and a browser that asks for it receives an upscale.
 */ const RATIO_CLASS = {
    portrait: "aspect-portrait",
    square: "aspect-square"
};
const PLACEHOLDER_WASH = "linear-gradient(160deg, rgb(255 255 255 / 0.22), rgb(0 0 0 / 0.18))";
/** Falls back to the muted-ink token rather than a literal colour. */ const NEUTRAL_TONE = "var(--color-ink-muted)";
function srcsetWidths(masterWidth) {
    return [
        400,
        600,
        900,
        1200,
        1800,
        2400,
        3000
    ].filter((width)=>width <= masterWidth);
}
function toneFor(colourSlug) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLOURS"].find((colour)=>colour.slug === colourSlug)?.hex ?? NEUTRAL_TONE;
}
function Frame({ image, colourSlug, priority = false, sizes = "(min-width: 1024px) 33vw, 50vw", className = "", showLabel = false }) {
    const ratioClass = RATIO_CLASS[image.ratio];
    if (image.src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative ${ratioClass} overflow-hidden bg-bg-alt ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: image.src,
                alt: image.alt,
                fill: true,
                sizes: sizes,
                priority: priority,
                quality: 100,
                unoptimized: true,
                className: "object-cover"
            }, void 0, false, {
                fileName: "[project]/src/components/Frame.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Frame.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this);
    }
    const tone = toneFor(colourSlug);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        // role/aria-label rather than an empty div: the frame still has to carry
        // its description to assistive technology while it is a placeholder.
        role: "img",
        "aria-label": image.alt,
        className: `relative ${ratioClass} overflow-hidden ${className}`,
        style: {
            backgroundColor: tone,
            backgroundImage: PLACEHOLDER_WASH
        },
        children: showLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow absolute bottom-3 left-3 bg-bg/90 px-2 py-1 text-ink",
            children: image.shot.replace(/_/g, " ")
        }, void 0, false, {
            fileName: "[project]/src/components/Frame.tsx",
            lineNumber: 104,
            columnNumber: 9
        }, this) : null
    }, void 0, false, {
        fileName: "[project]/src/components/Frame.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function ToneTile({ label, tone, ratio = "portrait" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${RATIO_CLASS[ratio]} overflow-hidden`,
        style: {
            backgroundColor: toneFor(tone),
            backgroundImage: PLACEHOLDER_WASH
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow absolute bottom-3 left-3 text-bg",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/Frame.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Frame.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Price.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Price",
    ()=>Price
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/money.ts [app-rsc] (ecmascript)");
;
;
function Price({ value, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `tabular-nums ${className}`,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatMoney"])(value)
    }, void 0, false, {
        fileName: "[project]/src/components/Price.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ProductCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Price$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Price.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistHeart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WishlistHeart.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
/**
 * The atomic unit of every grid.
 *
 * The card *is* the image — no border, no background, no shadow, no radius.
 * Aspect ratio is 2:3, never square: a saree cropped to 1:1 in a grid loses the
 * drape, which is the thing being sold (design.md §5.4, corrected).
 *
 * Fulfilment state is badged from `fulfilmentMode`, never read out of the
 * title (§9.8).
 */ const BADGES = {
    pre_order: "Pre-order",
    made_to_order: "Made to order"
};
/** Rails and mega-menu tiles; the PLP is two-up and passes its own. */ const RAIL_SIZES = "(min-width: 1440px) 25vw, (min-width: 768px) 33vw, 50vw";
function ProductCard({ product, priority = false, headingLevel = 3, sizes = RAIL_SIZES }) {
    const [primary, secondary] = product.images;
    if (!primary) return null;
    const Heading = `h${headingLevel}`;
    // Sold-out pieces are badged, not dimmed. Fading the photograph to 60% made
    // them read as poor photography rather than as unavailable stock — and on a
    // catalogue where roughly half of a mature season is sold out (§9.7), that
    // would be half the grid looking washed out for no informational gain. The
    // badge already carries the state.
    const badge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAvailable"])(product) ? BADGES[product.fulfilmentMode] : "Sold out";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Frame"], {
                        image: primary,
                        colourSlug: product.colourFamily,
                        priority: priority,
                        sizes: sizes
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    secondary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "absolute inset-0 opacity-0 transition-opacity duration-300 ease-brand group-hover:opacity-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Frame"], {
                            image: secondary,
                            colourSlug: product.colourFamily,
                            sizes: sizes
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this) : null,
                    badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow absolute top-3 left-3 bg-bg/92 px-2 py-1 text-ink",
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistHeart$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WishlistHeart"], {
                        product: product
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                        className: "font-display text-[1.375rem] leading-tight tracking-tight text-ink",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/products/${product.handle}`,
                            className: "after:absolute after:inset-0",
                            children: product.poeticName
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-caption mt-1.5 line-clamp-2 text-ink-muted",
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2.5 text-caption text-ink",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Price$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Price"], {
                            value: product.price
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WishlistHeart.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistHeart",
    ()=>WishlistHeart
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const WishlistHeart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WishlistHeart() from the server but WishlistHeart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/WishlistHeart.tsx", "WishlistHeart");
}),
"[project]/src/components/WishlistHeart.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistHeart",
    ()=>WishlistHeart
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const WishlistHeart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call WishlistHeart() from the server but WishlistHeart is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/WishlistHeart.tsx <module evaluation>", "WishlistHeart");
}),
"[project]/src/components/WishlistHeart.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistHeart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/WishlistHeart.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistHeart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/WishlistHeart.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistHeart$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/data/catalogue.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IS_FIXTURE_CATALOGUE",
    ()=>IS_FIXTURE_CATALOGUE,
    "catalogue",
    ()=>catalogue
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$local$2d$photography$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/local-photography.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mock$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/mock-repository.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$sqlite$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/sqlite-repository.ts [app-rsc] (ecmascript)");
;
;
;
;
;
/**
 * Catalogue entry point.
 *
 * Everything in the app reads the catalogue through `catalogue`. Which
 * implementation backs it is a configuration question, answered once, here.
 *
 * The database is used when it exists. It will not on a fresh clone before
 * `npm run db:seed`, and failing the build for that would be hostile — so the
 * fixtures remain as a fallback and the site says so in a banner. That is the
 * difference between "not set up yet" and "broken".
 */ const DB_PATH = process.env.DATABASE_PATH ?? __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "rajraani.db");
const hasDatabase = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["existsSync"])(DB_PATH);
/**
 * Wraps a repository so staged local photography reaches the pages.
 *
 * Applied here rather than inside either implementation, so both get it from
 * one place and neither knows about it — the seam absorbing a change again,
 * which is the third time it has (see repository.ts). It is a pass-through when
 * nothing is staged, which is the case on every clone and in CI.
 *
 * Deliberately NOT applied to the committed fixtures themselves: those must
 * keep `src` absent for the originality guard in catalogue.test.ts to mean
 * anything. See local-photography.ts.
 */ function withPhotography(inner) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$local$2d$photography$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HAS_LOCAL_PHOTOGRAPHY"]) return inner;
    return {
        listProducts: async ()=>photographed(await inner.listProducts()),
        getProduct: async (handle)=>onlyIfPhotographed((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$local$2d$photography$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withLocalPhotographyOne"])(await inner.getProduct(handle))),
        productsInCollection: async (collection)=>photographed(await inner.productsInCollection(collection)),
        listCollections: ()=>inner.listCollections(),
        getCollection: (handle)=>inner.getCollection(handle),
        getCampaign: (slug)=>inner.getCampaign(slug)
    };
}
/** A product is shoppable once at least one of its frames has a photograph. */ function hasPhotograph(product) {
    return product.images.some((image)=>Boolean(image.src));
}
/**
 * Overlay the staged photography, then drop what it did not reach.
 *
 * Once *any* photography is staged, a product still on placeholder colour
 * fields reads as a broken tile next to a real one rather than as pending — so
 * it leaves the grid entirely, and the facet counts, which are computed from
 * this same list, follow it out. With nothing staged the whole site is
 * schematic on purpose and this wrapper is never installed at all.
 */ function photographed(products) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$local$2d$photography$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["withLocalPhotography"])(products).filter(hasPhotograph);
}
/** The same rule for one product: an unphotographed handle is a 404. */ function onlyIfPhotographed(product) {
    return product && hasPhotograph(product) ? product : undefined;
}
function createCatalogue() {
    return withPhotography(hasDatabase ? new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$sqlite$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SqliteCatalogueRepository"]() : new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$mock$2d$repository$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MockCatalogueRepository"]());
}
const catalogue = createCatalogue();
;
const IS_FIXTURE_CATALOGUE = !hasDatabase;
}),
"[project]/src/lib/data/fixtures.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Seed catalogue.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ALL CONTENT HERE IS ORIGINAL TO THIS PROJECT.
 *
 * build.md §6 Originality applies to the repository, not only to the shipped
 * site: no competitor imagery, product copy, product names or campaign names
 * may appear in fixtures, seed data or test snapshots. The craft vocabulary
 * (kadhua, tanchoi, katan silk) is the domain's own technical language and is
 * not anyone's property — the poetic names, narratives and campaigns below are
 * written for this project and are placeholders for the editorial writer's work
 * (build.md §7.7), not finished copy.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Twelve pieces, and five of them are sold out. That ratio is deliberate:
 * pre-build-gaps.md §2 measured 49% of the reference catalogue unavailable, the
 * arithmetic consequence of inventory-of-1 pieces that stay listed after
 * selling. Building against an all-available fixture set would hide the
 * template that half of all product views actually land on.
 */ __turbopack_context__.s([
    "CAMPAIGNS",
    ()=>CAMPAIGNS,
    "COLLECTIONS",
    ()=>COLLECTIONS,
    "PRODUCTS",
    ()=>PRODUCTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/money.ts [app-rsc] (ecmascript)");
;
/** Master dimensions, fixed by photography-brief.md §2.1. */ const PORTRAIT = {
    width: 3000,
    height: 4500
};
const SQUARE = {
    width: 3000,
    height: 3000
};
const SHOT_DESCRIPTIONS = {
    on_model_full: "Full-length view of the draped piece",
    on_model_drape: "Three-quarter view showing the fall of the drape",
    on_model_pallu: "The pallu carried over the shoulder",
    on_model_detail: "Close view of the border against the body",
    on_model_movement: "The piece in movement, mid-turn",
    detail_weave: "Macro detail of the weave",
    detail_border: "Macro detail of the border and selvedge",
    flat_lay: "The piece laid flat, folded to show body, border and pallu"
};
/**
 * The shot template, locked from SKU #1 (build.md §9.11).
 *
 * Five 2:3 on-model frames then one or two 1:1 detail frames — the sequence
 * measured in sweep-findings.md §1.3 and specified in photography-brief.md §3.
 * Both ratios are reserved in CSS, so a mixed sequence costs no layout shift.
 */ function shotTemplate(input) {
    const shots = [
        "on_model_full",
        "on_model_drape",
        "on_model_pallu",
        "on_model_detail",
        "on_model_movement",
        "detail_weave"
    ];
    if (input.includeBorderFrame) shots.push("detail_border");
    return shots.map((shot, index)=>{
        const square = shot.startsWith("detail_");
        return {
            id: `${input.handle}-${index + 1}`,
            ratio: square ? "square" : "portrait",
            shot,
            /**
       * Alt describes the FRAME — weave, motif, colour, shot type — never the
       * product title repeated (build.md §9.9). Composed from attributes here
       * because there is no photography yet; once frames exist, these are
       * written per frame by the same person writing the narrative, since only
       * they can say what is actually in the picture.
       */ alt: `${SHOT_DESCRIPTIONS[shot]}: ${input.colour} ${input.garment} in ${input.weave} weave with ${input.motif} motifs`,
            ...square ? SQUARE : PORTRAIT
        };
    });
}
const CAMPAIGNS = [
    {
        slug: "nadi",
        name: "Nadi",
        season: "Monsoon 2026",
        storyPageSlug: "nadi",
        collectionHandle: "nadi",
        standfirst: "A river does not repeat itself. Nine pieces that follow water through the season it belongs to — the colour of it before rain, during, and in the days after."
    },
    {
        slug: "antaraal",
        name: "Antaraal",
        season: "Winter 2026",
        storyPageSlug: "antaraal",
        collectionHandle: "antaraal",
        standfirst: "The interval — the pause a loom takes between one motif and the next. A study in ground, in the space that makes the pattern legible."
    }
];
/**
 * The shot template for stitched garments.
 *
 * A suit is not draped, so the saree sequence does not transfer: there is no
 * pallu to carry over a shoulder and no selvedge to shoot. What replaces them
 * is a flat lay — the only way to show a multi-piece set as a set, since the
 * churidar and dupatta never appear together on the model.
 *
 * Deliberately reuses the existing `ShotType` union rather than widening it.
 * `on_model_drape` reads as the dupatta here, and inventing `on_model_dupatta`
 * would put a term in the type that photography-brief.md §3 has never briefed.
 */ function stitchedShotTemplate(input) {
    const shots = [
        "on_model_full",
        "on_model_drape",
        "on_model_detail",
        "on_model_movement",
        "flat_lay",
        "detail_weave"
    ];
    return shots.map((shot, index)=>{
        const square = shot.startsWith("detail_");
        return {
            id: `${input.handle}-${index + 1}`,
            ratio: square ? "square" : "portrait",
            shot,
            // Names the cloth rather than a weave, because a stitched garment has
            // none — see the `weave` field on Product.
            alt: `${SHOT_DESCRIPTIONS[shot]}: ${input.colour} ${input.garment} in ${input.cloth} with ${input.motif} motifs`,
            ...square ? SQUARE : PORTRAIT
        };
    });
}
const PRODUCTS = [
    {
        id: "1",
        handle: "aparajita-blue-katan-silk-kadhua-saree",
        title: "Blue Pure Katan Silk Kadhua Banarasi Handloom Saree",
        poeticName: "Aparajita",
        sku: "SRKKDBL10041",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(68_000),
        inventoryQuantity: 1,
        fulfilmentMode: "ready_to_ship",
        dispatchLeadDays: [
            10,
            12
        ],
        narrative: "Named for the flower that opens the same deep blue every morning and asks nothing of anyone. The ground is undyed katan taken to indigo in a single bath, and the kadhua booti sits detached across it — each one entered separately, no thread carried behind, so the reverse reads as cleanly as the face. Seventy days of a weaver's attention, and the restraint is the point.",
        spec: {
            colour: "Indigo blue",
            technique: "Kadhua, with detached booti across the field",
            fabric: "Pure Katan silk",
            speciality: "Real zari koniya at all four corners of the pallu",
            collectionNote: "From Nadi, the monsoon collection."
        },
        provenance: {
            workshop: "Lohta workshop",
            loom: "Pit loom, four-shaft",
            weaveTimeWeeks: 10,
            artisanCount: 2
        },
        garmentType: "saree",
        weave: "kadhua",
        fabric: "katan-silk",
        colourFamily: "blue",
        zariTypes: [
            "real_zari"
        ],
        motifs: [
            "booti",
            "konia"
        ],
        campaign: "nadi",
        images: shotTemplate({
            handle: "aparajita",
            colour: "indigo blue",
            weave: "kadhua",
            motif: "booti",
            garment: "saree",
            includeBorderFrame: true
        })
    },
    {
        id: "2",
        handle: "nishith-black-katan-silk-meenakari-saree",
        title: "Black Pure Katan Silk Meenakari Banarasi Handloom Saree",
        poeticName: "Nishith",
        sku: "SRKMNBK10088",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(94_000),
        inventoryQuantity: 0,
        fulfilmentMode: "made_to_order",
        dispatchLeadDays: [
            12,
            14
        ],
        narrative: "Black is difficult in this category and mostly avoided, which is the reason to attempt it. The ground is dense enough to hold light rather than reflect it, and the meenakari works against that — coloured resham laid inside a zari outline, so each motif carries its own small enamel. Read it at arm's length and the field is plain. Read it closer and it is not.",
        spec: {
            colour: "Black",
            technique: "Meenakari, resham within a zari outline",
            fabric: "Pure Katan silk",
            speciality: "Jaal across the pallu, drawn in gold and three resham colours",
            collectionNote: "From Antaraal.",
            note: "Woven to order. Please allow the full despatch window."
        },
        provenance: {
            workshop: "Madanpura workshop",
            loom: "Pit loom, jacquard",
            weaveTimeWeeks: 14,
            artisanCount: 3
        },
        garmentType: "saree",
        // Meenakari is a MOTIF in the vocabulary, not a weave � taxonomy/REVIEW.md
        // decision 4: it describes how a motif is coloured, not the loom
        // technique. The weave underneath it is cutwork.
        weave: "cutwork",
        fabric: "katan-silk",
        colourFamily: "black",
        zariTypes: [
            "gold",
            "resham"
        ],
        motifs: [
            "meenakari",
            "jaal",
            "floral"
        ],
        campaign: "antaraal",
        images: shotTemplate({
            handle: "nishith",
            colour: "black",
            weave: "cutwork",
            motif: "meenakari",
            garment: "saree"
        })
    },
    {
        id: "3",
        handle: "chandrika-ivory-tissue-silk-jangla-saree",
        title: "Ivory Tissue Silk Jangla Banarasi Handloom Saree",
        poeticName: "Chandrika",
        sku: "SRTJGIV10102",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(112_000),
        inventoryQuantity: 1,
        fulfilmentMode: "ready_to_ship",
        dispatchLeadDays: [
            10,
            12
        ],
        narrative: "Tissue carries zari right through the weft, so the cloth is metallic before a single motif is placed on it. Over that, a jangla — a creeping vine with no resting ground, running edge to edge without a break. Two decisions that should compete and instead settle: the vine reads as shadow on a surface that is already light. Heaviest piece we have woven this year, and it does not feel it.",
        spec: {
            colour: "Ivory and silver",
            technique: "Jangla, continuous vine across the full field",
            fabric: "Tissue silk with zari weft",
            speciality: "Silver zari throughout, with a kadiyal border in pale gold",
            collectionNote: "From Antaraal."
        },
        provenance: {
            workshop: "Sarai Mohana workshop",
            loom: "Pit loom, jacquard",
            weaveTimeWeeks: 16,
            artisanCount: 3
        },
        garmentType: "saree",
        weave: "jangla",
        fabric: "tissue-silk",
        colourFamily: "off-white",
        zariTypes: [
            "silver",
            "real_zari"
        ],
        motifs: [
            "bel",
            "jaal"
        ],
        campaign: "antaraal",
        images: shotTemplate({
            handle: "chandrika",
            colour: "ivory",
            weave: "jangla",
            motif: "bel",
            garment: "saree",
            includeBorderFrame: true
        })
    },
    {
        id: "4",
        handle: "kesari-orange-katan-silk-tanchoi-saree",
        title: "Saffron Pure Katan Silk Tanchoi Banarasi Handloom Saree",
        poeticName: "Kesari",
        sku: "SRKTNOR10117",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(46_500),
        inventoryQuantity: 0,
        fulfilmentMode: "made_to_order",
        dispatchLeadDays: [
            12,
            14
        ],
        narrative: "Tanchoi keeps its extra wefts bound into the body rather than floating them behind, which is why the reverse is almost as finished as the face and why the cloth falls the way it does. Self-toned figuring on a satin ground: the pattern is the same saffron as the field and shows only where the light turns. A quiet piece that photographs badly and wears extremely well.",
        spec: {
            colour: "Saffron",
            technique: "Tanchoi, self-toned figuring on a satin ground",
            fabric: "Pure Katan silk",
            speciality: "No zari at all — the figuring is entirely in silk",
            collectionNote: "From Nadi."
        },
        provenance: {
            workshop: "Lohta workshop",
            loom: "Pit loom, jacquard",
            weaveTimeWeeks: 8,
            artisanCount: 2
        },
        garmentType: "saree",
        weave: "tanchoi",
        fabric: "katan-silk",
        colourFamily: "orange",
        zariTypes: [
            "resham"
        ],
        motifs: [
            "booti",
            "bel"
        ],
        campaign: "nadi",
        images: shotTemplate({
            handle: "kesari",
            colour: "saffron",
            weave: "tanchoi",
            motif: "booti",
            garment: "saree"
        })
    },
    {
        id: "5",
        handle: "sharada-white-kora-organza-jamdani-saree",
        title: "White Kora Organza Jamdani Banarasi Handloom Saree",
        poeticName: "Sharada",
        sku: "SROJDWH10125",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(38_000),
        inventoryQuantity: 2,
        fulfilmentMode: "ready_to_ship",
        dispatchLeadDays: [
            10,
            12
        ],
        narrative: "Kora is silk left undegummed, so it holds its own shape instead of following the body — the reason this reads as architecture rather than drape. The jamdani is worked in by hand against the ground, motif by motif, with no jacquard deciding anything. Where the two meet you can see straight through the cloth to the motif sitting on it, which is the whole argument for organza.",
        spec: {
            colour: "White",
            technique: "Jamdani, discontinuous supplementary weft worked by hand",
            fabric: "Kora organza",
            speciality: "Scattered booti in resham, no metal anywhere in the piece",
            collectionNote: "From Nadi."
        },
        provenance: {
            workshop: "Ramnagar workshop",
            loom: "Pit loom, hand-picked jamdani",
            weaveTimeWeeks: 7,
            artisanCount: 2
        },
        garmentType: "saree",
        weave: "jamdani",
        fabric: "kora-organza",
        colourFamily: "off-white",
        zariTypes: [
            "resham"
        ],
        motifs: [
            "booti"
        ],
        campaign: "nadi",
        images: shotTemplate({
            handle: "sharada",
            colour: "white",
            weave: "jamdani",
            motif: "booti",
            garment: "saree"
        })
    },
    {
        id: "6",
        handle: "ambar-blue-katan-silk-rangkat-saree",
        title: "Blue and Ivory Pure Katan Silk Rangkat Banarasi Handloom Saree",
        poeticName: "Ambar",
        sku: "SRKRKBL10133",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(86_000),
        inventoryQuantity: 0,
        fulfilmentMode: "pre_order",
        dispatchLeadDays: [
            14,
            18
        ],
        narrative: "Rangkat changes the ground colour in blocks along the length, each section joined on the loom rather than dyed or stitched afterwards. Here it moves from ivory at the top of the drape to deep blue at the foot, in four steps, and every join had to be planned before the first pick. Get one wrong and the entire warp is spoiled. It is the least forgiving thing a Banarasi loom does.",
        spec: {
            colour: "Blue moving to ivory",
            technique: "Rangkat, four colour blocks joined on the loom",
            fabric: "Pure Katan silk",
            speciality: "Real zari bel running the full length of both borders",
            collectionNote: "From Antaraal.",
            note: "Available to pre-order. Woven after the order is placed."
        },
        provenance: {
            workshop: "Madanpura workshop",
            loom: "Pit loom, four-shaft",
            weaveTimeWeeks: 18,
            artisanCount: 4
        },
        garmentType: "saree",
        weave: "rangkat",
        fabric: "katan-silk",
        colourFamily: "blue",
        zariTypes: [
            "real_zari"
        ],
        motifs: [
            "bel",
            "konia"
        ],
        campaign: "antaraal",
        images: shotTemplate({
            handle: "ambar",
            colour: "blue and ivory",
            weave: "rangkat",
            motif: "bel",
            garment: "saree",
            includeBorderFrame: true
        })
    },
    {
        id: "7",
        handle: "vasanti-yellow-sooti-cotton-jamdani-saree",
        title: "Yellow Sooti Cotton Jamdani Banarasi Handloom Saree",
        poeticName: "Vasanti",
        sku: "SRCJDYW10140",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(21_500),
        inventoryQuantity: 3,
        fulfilmentMode: "ready_to_ship",
        dispatchLeadDays: [
            10,
            12
        ],
        narrative: "The everyday piece in the collection, and the hardest to price honestly — handspun cotton takes as long on the loom as silk and sells for a fifth as much. Jamdani in resham across a pale yellow ground, light enough to wear through a Banaras summer and plain enough to wear twice in a week without anyone counting.",
        spec: {
            colour: "Pale yellow",
            technique: "Jamdani, worked by hand in resham",
            fabric: "Handspun sooti cotton",
            speciality: "Phool patti scattered across the body, denser at the pallu",
            collectionNote: "From Nadi."
        },
        provenance: {
            workshop: "Ramnagar workshop",
            loom: "Pit loom, hand-picked jamdani",
            weaveTimeWeeks: 5,
            artisanCount: 1
        },
        garmentType: "saree",
        weave: "jamdani",
        fabric: "muslin-cotton",
        colourFamily: "yellow",
        zariTypes: [
            "resham"
        ],
        motifs: [
            "floral",
            "booti"
        ],
        campaign: "nadi",
        images: shotTemplate({
            handle: "vasanti",
            colour: "pale yellow",
            weave: "jamdani",
            motif: "phool patti",
            garment: "saree"
        })
    },
    {
        id: "8",
        handle: "nilambari-blue-katan-silk-shikargah-saree",
        title: "Deep Blue Pure Katan Silk Shikargah Banarasi Handloom Saree",
        poeticName: "Nilambari",
        sku: "SRKSGBL10158",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(148_000),
        inventoryQuantity: 0,
        fulfilmentMode: "made_to_order",
        dispatchLeadDays: [
            14,
            18
        ],
        narrative: "Shikargah is the hunting field — animals, riders and forest worked into one continuous composition, the most openly figurative thing the Banarasi vocabulary allows. Ours is read at dusk: the ground is deep enough that the figures surface slowly, and the deer at the pallu is turned away. Six months on the loom for a composition that took longer to draw than to weave.",
        spec: {
            colour: "Deep blue",
            technique: "Shikargah, continuous figurative field",
            fabric: "Pure Katan silk",
            speciality: "Real zari throughout, with meenakari at the pallu figures",
            collectionNote: "From Antaraal.",
            note: "Woven to order."
        },
        provenance: {
            workshop: "Madanpura workshop",
            loom: "Pit loom, jacquard",
            weaveTimeWeeks: 26,
            artisanCount: 4
        },
        garmentType: "saree",
        // Shikargah is a MOTIF in the vocabulary � the hunting-scene composition �
        // and the weave carrying it here is cutwork.
        weave: "cutwork",
        fabric: "katan-silk",
        colourFamily: "indigo",
        zariTypes: [
            "real_zari",
            "resham"
        ],
        motifs: [
            "shikargah",
            "jaal",
            "konia",
            "bird-animal"
        ],
        campaign: "antaraal",
        images: shotTemplate({
            handle: "nilambari",
            colour: "deep indigo",
            weave: "cutwork",
            motif: "shikargah",
            garment: "saree",
            includeBorderFrame: true
        })
    },
    {
        id: "9",
        handle: "sindoor-red-katan-silk-kadiyal-saree",
        title: "Red Pure Katan Silk Kadiyal Banarasi Handloom Saree",
        poeticName: "Sindoor",
        sku: "SRKKDRD10166",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(78_000),
        inventoryQuantity: 1,
        fulfilmentMode: "ready_to_ship",
        dispatchLeadDays: [
            10,
            12
        ],
        narrative: "Kadiyal interlocks the wefts so body and border are genuinely different colours in one cloth, joined by structure rather than by a seam. Red body, ivory border, and the join is a hard line you can find with a fingernail. The bridal piece in the collection, and the only one we would call that — the rest are for the days either side.",
        spec: {
            colour: "Red with an ivory border",
            technique: "Kadiyal, interlocked weft at the border",
            fabric: "Pure Katan silk",
            speciality: "Real zari koniya, with a paisley bel along both borders",
            collectionNote: "From Nadi."
        },
        provenance: {
            workshop: "Lohta workshop",
            loom: "Pit loom, four-shaft",
            weaveTimeWeeks: 12,
            artisanCount: 3
        },
        garmentType: "saree",
        weave: "kadiyal",
        fabric: "katan-silk",
        colourFamily: "red",
        zariTypes: [
            "real_zari"
        ],
        motifs: [
            "paisley",
            "konia",
            "bel"
        ],
        campaign: "nadi",
        images: shotTemplate({
            handle: "sindoor",
            colour: "red",
            weave: "kadiyal",
            motif: "paisley",
            garment: "saree",
            includeBorderFrame: true
        })
    },
    {
        id: "10",
        handle: "hemant-green-silk-wool-tanchoi-stole",
        title: "Green Silk Wool Tanchoi Banarasi Handloom Stole",
        poeticName: "Hemant",
        sku: "STWTNGR10174",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(18_500),
        inventoryQuantity: 4,
        fulfilmentMode: "ready_to_ship",
        dispatchLeadDays: [
            10,
            12
        ],
        narrative: "A silk warp against a fine wool weft — weight without stiffness, which is the only reason a Banarasi structure works at this scale. Tanchoi figuring in the same green as the ground, so it reads plain from across a room. Made for the six weeks in the year when Banaras is genuinely cold and nobody believes it.",
        spec: {
            colour: "Moss green",
            technique: "Tanchoi, self-toned",
            fabric: "Silk wool",
            speciality: "Hand-knotted fringe at both ends",
            collectionNote: "From Antaraal."
        },
        provenance: {
            workshop: "Sarai Mohana workshop",
            loom: "Pit loom, jacquard",
            weaveTimeWeeks: 4,
            artisanCount: 1
        },
        garmentType: "stole",
        weave: "tanchoi",
        fabric: "silk-wool",
        colourFamily: "green",
        zariTypes: [
            "resham"
        ],
        motifs: [
            "booti"
        ],
        campaign: "antaraal",
        images: shotTemplate({
            handle: "hemant",
            colour: "moss green",
            weave: "tanchoi",
            motif: "booti",
            garment: "stole"
        })
    },
    {
        id: "11",
        handle: "saanjh-purple-handwoven-georgette-kadhua-dupatta",
        title: "Purple Handwoven Georgette Kadhua Banarasi Handloom Dupatta",
        poeticName: "Saanjh",
        sku: "DPGKDPR10182",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(24_000),
        inventoryQuantity: 0,
        fulfilmentMode: "ready_to_ship",
        dispatchLeadDays: [
            10,
            12
        ],
        narrative: "Georgette is twisted hard in both directions, which gives it the grain and the fall — it will not hold a fold and does not try to. Kadhua booti scattered across it in gold, each one detached, which on a cloth this fine means the reverse is nearly as clean as the face. Named for the half hour when the light goes purple over the ghats and everyone stops what they are doing.",
        spec: {
            colour: "Deep purple",
            technique: "Kadhua, detached booti",
            fabric: "Handwoven georgette",
            speciality: "Gold zari booti, scattered rather than set to a grid",
            collectionNote: "From Nadi."
        },
        provenance: {
            workshop: "Ramnagar workshop",
            loom: "Pit loom, four-shaft",
            weaveTimeWeeks: 6,
            artisanCount: 2
        },
        garmentType: "dupatta",
        weave: "kadhua",
        fabric: "khaddi-georgette",
        colourFamily: "purple",
        zariTypes: [
            "gold"
        ],
        motifs: [
            "booti"
        ],
        campaign: "nadi",
        images: shotTemplate({
            handle: "saanjh",
            colour: "deep purple",
            weave: "kadhua",
            motif: "booti",
            garment: "dupatta"
        })
    },
    {
        id: "12",
        handle: "bela-white-handwoven-georgette-kadhua-saree",
        title: "Off-White Handwoven Georgette Kadhua Banarasi Handloom Saree",
        poeticName: "Bela",
        sku: "SRGKDWH10190",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(52_000),
        inventoryQuantity: 1,
        fulfilmentMode: "ready_to_ship",
        dispatchLeadDays: [
            10,
            12
        ],
        narrative: "Off-white on off-white: a georgette ground with kadhua worked in roopa sona, which is gilded silver and reads warmer than gold without ever announcing itself. The jasmine the piece is named for behaves the same way — you find it by smell before you find it by looking. The most-requested and least-photographed piece we make.",
        spec: {
            colour: "Off-white",
            technique: "Kadhua, detached booti and a bel border",
            fabric: "Handwoven georgette",
            speciality: "Roopa sona zari throughout",
            collectionNote: "From Nadi."
        },
        provenance: {
            workshop: "Lohta workshop",
            loom: "Pit loom, four-shaft",
            weaveTimeWeeks: 9,
            artisanCount: 2
        },
        garmentType: "saree",
        weave: "kadhua",
        fabric: "khaddi-georgette",
        colourFamily: "off-white",
        zariTypes: [
            "roopa_sona"
        ],
        motifs: [
            "booti",
            "bel",
            "floral"
        ],
        campaign: "nadi",
        images: shotTemplate({
            handle: "bela",
            colour: "off-white",
            weave: "kadhua",
            motif: "booti",
            garment: "saree"
        })
    },
    /* ------------------------------------------------------------------------
   * Stitched garments.
   *
   * The first pieces in this catalogue that are cut and tailored rather than
   * woven to shape, which is why four of the five carry no `weave` (Ksheera is
   * the exception — its cloth is genuinely a jamdani). taxonomy/facets.json
   * `garment.suit` records what still needs a domain reviewer's confirmation.
   *
   * A suit is also the first product here assembled from several cloths, so
   * `fabric` names its principal piece and the dupatta and churidar are
   * described in `spec` rather than faceted. That is a known simplification.
   * ---------------------------------------------------------------------- */ {
        id: "13",
        handle: "ksheera-off-white-muslin-cotton-jamdani-suit",
        title: "Off-White Muslin Cotton Jamdani Anarkali Suit",
        poeticName: "Ksheera",
        sku: "SUJMOW10131",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(42_000),
        inventoryQuantity: 1,
        fulfilmentMode: "made_to_order",
        dispatchLeadDays: [
            14,
            18
        ],
        narrative: "Ksheera is milk, and the whole piece stays inside that one word. The cloth is a jamdani woven in undyed muslin, the booti raised in the same thread as the ground so the pattern is a change in texture rather than in colour — visible when the light moves and almost gone when it does not. It is cut as an anarkali with a gathered fall from a high waist, and left unlined, because a cloth this fine is worth seeing light through.",
        spec: {
            colour: "Undyed off-white",
            technique: "Jamdani, with tonal booti across the panel",
            fabric: "Muslin cotton, unlined",
            speciality: "Self-thread booti — no zari anywhere on the piece",
            note: "Anarkali with churidar and a matching muslin dupatta."
        },
        provenance: {
            workshop: "Lohta workshop",
            loom: "Pit loom, jamdani",
            weaveTimeWeeks: 6,
            artisanCount: 2
        },
        garmentType: "suit",
        weave: "jamdani",
        fabric: "muslin-cotton",
        colourFamily: "off-white",
        zariTypes: [
            "resham"
        ],
        motifs: [
            "booti",
            "floral"
        ],
        images: stitchedShotTemplate({
            handle: "ksheera",
            colour: "off-white",
            cloth: "muslin cotton jamdani",
            motif: "booti",
            garment: "anarkali suit"
        })
    },
    {
        id: "14",
        handle: "shyamala-green-katan-silk-kurta-set",
        title: "Green Katan Silk Kurta Set",
        poeticName: "Shyamala",
        sku: "SUKTGR10141",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(36_000),
        inventoryQuantity: 1,
        fulfilmentMode: "ready_to_ship",
        dispatchLeadDays: [
            10,
            12
        ],
        narrative: "A green that sits closer to the leaf than to the emerald, which is the harder of the two to dye and the easier of the two to wear. There is no weave to name here — the cloth is plain katan, and everything the piece does it does through cut: a straight kurta that skims rather than fits, side slits taken high enough to walk in, and a churidar gathered short. Restraint standing in for ornament.",
        spec: {
            colour: "Leaf green",
            technique: "Plain-woven ground, tailored",
            fabric: "Pure Katan silk",
            note: "Straight kurta with churidar and a plain silk dupatta."
        },
        provenance: {
            workshop: "Ramnagar atelier",
            loom: "Pit loom, plain ground",
            weaveTimeWeeks: 3,
            artisanCount: 3
        },
        garmentType: "suit",
        fabric: "katan-silk",
        colourFamily: "green",
        zariTypes: [],
        motifs: [],
        images: stitchedShotTemplate({
            handle: "shyamala",
            colour: "leaf green",
            cloth: "plain katan silk",
            motif: "no",
            garment: "kurta set"
        })
    },
    {
        id: "15",
        handle: "padmini-pink-moonga-silk-anarkali-suit",
        title: "Rose Pink Moonga Silk Anarkali Suit",
        poeticName: "Padmini",
        sku: "SUMGPK10151",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(58_000),
        inventoryQuantity: 1,
        fulfilmentMode: "made_to_order",
        dispatchLeadDays: [
            16,
            20
        ],
        narrative: "Moonga takes dye unevenly, and that is the reason to use it: the rose here is deeper along the slubs and lighter between them, so the colour moves across the panel without anything having been done to make it. The anarkali is cut full from a high waist and carries its weight well. Over it sits an organza dupatta embroidered by hand — the only worked surface on the piece, and deliberately the lightest one.",
        spec: {
            colour: "Rose pink",
            technique: "Handwoven moonga ground, tailored; hand-embroidered dupatta",
            fabric: "Moonga silk",
            speciality: "Hand-embroidered organza dupatta",
            note: "Anarkali with churidar and an embroidered organza dupatta."
        },
        provenance: {
            workshop: "Sarnath atelier",
            loom: "Pit loom, moonga ground",
            weaveTimeWeeks: 5,
            artisanCount: 4
        },
        garmentType: "suit",
        fabric: "moonga-silk",
        colourFamily: "pink",
        zariTypes: [
            "resham"
        ],
        motifs: [
            "floral",
            "bel"
        ],
        images: stitchedShotTemplate({
            handle: "padmini",
            colour: "rose pink",
            cloth: "handwoven moonga silk",
            motif: "floral",
            garment: "anarkali suit"
        })
    },
    {
        id: "16",
        handle: "ashoka-maroon-satin-silk-anarkali-suit",
        title: "Maroon Satin Silk Anarkali Suit",
        poeticName: "Ashoka",
        sku: "SUSTMR10161",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(52_000),
        inventoryQuantity: 0,
        fulfilmentMode: "made_to_order",
        dispatchLeadDays: [
            16,
            20
        ],
        narrative: "Named for the tree that flowers red before it leafs. The ground is a light satin silk, chosen because an angrakha neckline has to cross and lie flat, and a heavier cloth will not do it without bulk. The tie sits off to one side where it belongs, the skirt is cut full, and the dupatta is organza worked with a running floral bel. Sold out, and it will be made again to measure rather than repeated exactly.",
        spec: {
            colour: "Deep maroon",
            technique: "Angrakha-style crossed neckline, tailored",
            fabric: "Light satin silk, in the Chanderi weight",
            speciality: "Embroidered organza dupatta with a running bel",
            note: "Anarkali with a silk churidar and an embroidered organza dupatta."
        },
        provenance: {
            workshop: "Ramnagar atelier",
            loom: "Pit loom, satin ground",
            weaveTimeWeeks: 4,
            artisanCount: 3
        },
        garmentType: "suit",
        fabric: "satin-silk",
        colourFamily: "maroon",
        zariTypes: [
            "resham"
        ],
        motifs: [
            "floral",
            "bel"
        ],
        images: stitchedShotTemplate({
            handle: "ashoka",
            colour: "deep maroon",
            cloth: "satin silk",
            motif: "bel",
            garment: "anarkali suit"
        })
    },
    {
        id: "17",
        handle: "baluka-beige-tussar-silk-embroidered-suit",
        title: "Beige Tussar Silk Embroidered Kurta Set",
        poeticName: "Baluka",
        sku: "SUTSBG10171",
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["money"])(64_000),
        inventoryQuantity: 1,
        fulfilmentMode: "made_to_order",
        dispatchLeadDays: [
            18,
            22
        ],
        narrative: "Baluka is sand, and the piece is built in three layers of it. A plain inner kurta, a churidar in a lighter weight, and over both an embroidered overlay in raw tussar that carries the whole of the ornament. Keeping the worked surface on a layer that comes off is a practical decision as much as a designed one — it makes one set read as two, and it puts the hand-embroidery where it can be seen against the light rather than flat against the body.",
        spec: {
            colour: "Sand beige",
            technique: "Hand-embroidered overlay over a plain inner kurta",
            fabric: "Raw tussar silk overlay, lighter silk inner",
            speciality: "Three pieces — overlay, inner kurta and churidar",
            note: "The overlay is the worked layer; the inner kurta is deliberately plain."
        },
        provenance: {
            workshop: "Sarnath atelier",
            loom: "Pit loom, tussar ground",
            weaveTimeWeeks: 7,
            artisanCount: 5
        },
        garmentType: "suit",
        fabric: "tussar-silk",
        colourFamily: "off-white",
        zariTypes: [
            "resham"
        ],
        motifs: [
            "floral",
            "jaal"
        ],
        images: stitchedShotTemplate({
            handle: "baluka",
            colour: "sand beige",
            cloth: "hand-embroidered tussar silk",
            motif: "floral",
            garment: "kurta set"
        })
    }
];
const COLLECTIONS = [
    {
        kind: "facet",
        handle: "sarees",
        title: "Sarees",
        seoIntro: "Every saree here is woven by hand on a pit loom in Banaras, in silk, cotton or wool, by weavers we buy from directly. Each is a single piece — when it is gone, it is rewoven or it is not made again.",
        facets: {
            garment: [
                "saree"
            ]
        }
    },
    {
        kind: "facet",
        handle: "suits",
        title: "Suits",
        seoIntro: "Anarkalis and kurta sets cut from the same handwoven cloth as the sarees, and tailored in Banaras. A stitched piece is made to measure more often than not, so most of these are made to order rather than held in stock.",
        facets: {
            garment: [
                "suit"
            ]
        }
    },
    {
        kind: "facet",
        handle: "dupattas",
        title: "Dupattas",
        seoIntro: "Handwoven dupattas in georgette, organza and silk, in the same techniques and from the same looms as the sarees.",
        facets: {
            garment: [
                "dupatta"
            ]
        }
    },
    {
        kind: "facet",
        handle: "kadhua",
        title: "Kadhua",
        seoIntro: "Kadhua enters each motif as a separate unit, with no thread carried behind the cloth. It is the slowest way to weave a Banarasi and the reason the reverse of these pieces reads almost as cleanly as the face.",
        facets: {
            weave: [
                "kadhua"
            ]
        }
    },
    {
        kind: "facet",
        handle: "katan-silk",
        title: "Katan Silk",
        seoIntro: "Twisted-filament pure silk — the weight and the fall this category is built on, and the ground most of the older techniques were designed for.",
        facets: {
            fabric: [
                "katan-silk"
            ]
        }
    },
    {
        kind: "campaign",
        handle: "nadi",
        title: "Nadi",
        seoIntro: "Nine pieces that follow water through the monsoon — the colour of it before rain, during, and in the days after.",
        campaignSlug: "nadi",
        productHandles: [
            "aparajita-blue-katan-silk-kadhua-saree",
            "kesari-orange-katan-silk-tanchoi-saree",
            "sharada-white-kora-organza-jamdani-saree",
            "vasanti-yellow-sooti-cotton-jamdani-saree",
            "sindoor-red-katan-silk-kadiyal-saree",
            "saanjh-purple-handwoven-georgette-kadhua-dupatta",
            "bela-white-handwoven-georgette-kadhua-saree"
        ]
    },
    {
        kind: "campaign",
        handle: "antaraal",
        title: "Antaraal",
        seoIntro: "The interval — the pause a loom takes between one motif and the next. A study in ground, and in the space that makes a pattern legible.",
        campaignSlug: "antaraal",
        productHandles: [
            "nishith-black-katan-silk-meenakari-saree",
            "chandrika-ivory-tissue-silk-jangla-saree",
            "ambar-blue-katan-silk-rangkat-saree",
            "nilambari-blue-katan-silk-shikargah-saree",
            "hemant-green-silk-wool-tanchoi-stole"
        ]
    }
];
}),
"[project]/src/lib/data/local-photography.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HAS_LOCAL_PHOTOGRAPHY",
    ()=>HAS_LOCAL_PHOTOGRAPHY,
    "withLocalPhotography",
    ()=>withLocalPhotography,
    "withLocalPhotographyOne",
    ()=>withLocalPhotographyOne
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:fs [external] (node:fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:path [external] (node:path, cjs)");
;
;
/**
 * The local photography overlay.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Why this exists rather than `src` in the fixtures.
 *
 * build.md §6 forbids competitor imagery anywhere in the repository, fixtures
 * included, and `catalogue.test.ts` enforces it by asserting that every fixture
 * frame carries no `src` — "no competitor asset can reach the build if no
 * fixture points off-site". Putting real reference photography into the
 * fixtures breaks that guard by design, and the guard is worth more than the
 * convenience.
 *
 * So the overlay is applied at the repository seam instead. The committed
 * catalogue stays clean and provably so; what a developer sees locally is the
 * catalogue plus whatever happens to be staged on their disk. Nothing here
 * reads a path that is committed, and with the staging directory absent — which
 * is the state of every fresh clone and every CI run — this module returns an
 * empty map and the site renders exactly the placeholder frames it did before.
 *
 * Staged by `scripts/import-local-photos.mjs`. See HANDOFF §2.45 decision 1.
 * ─────────────────────────────────────────────────────────────────────────────
 */ const STAGE_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "reference-only", "products");
const PUBLIC_PREFIX = "/reference-only/products";
const IMAGE_EXT = new Set([
    ".webp",
    ".jpg",
    ".jpeg",
    ".png",
    ".avif"
]);
const collator = new Intl.Collator("en", {
    numeric: true,
    sensitivity: "base"
});
/**
 * Read once per process in production, and per call in development.
 *
 * Doing this per request would stat the disk on every product view, which is
 * why it is cached at all. But in development the staging directory *does*
 * change — that is the entire point of the import script — and a stale cache
 * there is worse than the stat: re-running the import silently changed nothing
 * on the running server, so the pages kept serving the previous run's frame
 * order and the bug looked like it was in the sort.
 */ function readStagedPhotography() {
    const byHandle = new Map();
    if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["existsSync"])(STAGE_DIR)) return byHandle;
    for (const entry of (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["readdirSync"])(STAGE_DIR, {
        withFileTypes: true
    })){
        if (!entry.isDirectory()) continue;
        const files = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$fs__$5b$external$5d$__$28$node$3a$fs$2c$__cjs$29$__["readdirSync"])(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].join(STAGE_DIR, entry.name)).filter((name)=>IMAGE_EXT.has(__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$path__$5b$external$5d$__$28$node$3a$path$2c$__cjs$29$__["default"].extname(name).toLowerCase())).sort(collator.compare).map((name)=>`${PUBLIC_PREFIX}/${entry.name}/${name}`);
        if (files.length > 0) byHandle.set(entry.name, files);
    }
    return byHandle;
}
const IS_DEV = ("TURBOPACK compile-time value", "development") !== "production";
let cached;
function staged() {
    if ("TURBOPACK compile-time truthy", 1) return readStagedPhotography();
    //TURBOPACK unreachable
    ;
}
const HAS_LOCAL_PHOTOGRAPHY = readStagedPhotography().size > 0;
/**
 * Attach staged photography to one product.
 *
 * The frame COUNT follows the photographs, not the fixture. A fixture declares
 * six or seven frames against a shot template that has not been shot yet; a
 * folder holds however many exist. Padding to the fixture count would leave
 * real photographs sitting beside blank colour fields in the same gallery,
 * which reads as broken rather than as pending — so surplus frames are dropped
 * and surplus photographs appended.
 *
 * Alt text is reused positionally from the fixture, and appended frames fall
 * back to the last fixture frame's description. Both are approximations: the
 * alt describes the frame the template *intended* at that position, and a real
 * photograph may not be that frame. Acceptable for a local mockup, and exactly
 * the reason fixtures.ts says these strings must be rewritten per frame by the
 * person who can see the picture.
 */ function withStagedImages(product) {
    const files = staged().get(product.handle);
    if (!files || product.images.length === 0) return product;
    const template = product.images;
    const last = template[template.length - 1];
    const images = files.map((src, index)=>{
        const frame = template[index] ?? last;
        return {
            ...frame,
            id: `${product.handle}-${index + 1}`,
            src
        };
    });
    return {
        ...product,
        images
    };
}
function withLocalPhotography(products) {
    if (!HAS_LOCAL_PHOTOGRAPHY) return products;
    return products.map(withStagedImages);
}
function withLocalPhotographyOne(product) {
    if (!product || !HAS_LOCAL_PHOTOGRAPHY) return product;
    return withStagedImages(product);
}
}),
"[project]/src/lib/data/mock-repository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MockCatalogueRepository",
    ()=>MockCatalogueRepository
]);
/**
 * Fixture-backed catalogue.
 *
 * Serves the seed data in fixtures.ts through the same interface the database
 * repository implements. Used only before `npm run db:seed` has run.
 *
 * Async throughout, deliberately — a synchronous mock lets pages accidentally
 * depend on data being available during render, and that assumption breaks the
 * day a real data source arrives. It did.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/facets/engine.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/fixtures.ts [app-rsc] (ecmascript)");
;
;
class MockCatalogueRepository {
    async listProducts() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRODUCTS"];
    }
    async getProduct(handle) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRODUCTS"].find((product)=>product.handle === handle);
    }
    async listCollections() {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"];
    }
    async getCollection(handle) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["COLLECTIONS"].find((collection)=>collection.handle === handle);
    }
    async productsInCollection(collection) {
        if (collection.kind === "facet") {
            // A facet collection is a saved view, not a stored list — so it can never
            // drift out of sync with the catalogue behind it (build.md §9.5).
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterProducts"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRODUCTS"], collection.facets);
        }
        // A campaign collection is authored, and order is editorial.
        return collection.productHandles.map((handle)=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRODUCTS"].find((product)=>product.handle === handle)).filter((product)=>product !== undefined);
    }
    async getCampaign(slug) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CAMPAIGNS"].find((campaign)=>campaign.slug === slug);
    }
}
}),
"[project]/src/lib/data/sqlite-repository.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SqliteCatalogueRepository",
    ()=>SqliteCatalogueRepository
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/facets/engine.ts [app-rsc] (ecmascript)");
;
;
;
function toProduct(row, images, motifs, zari) {
    return {
        id: String(row.id),
        handle: row.handle,
        title: row.title,
        poeticName: row.poetic_name,
        sku: row.sku,
        price: {
            minorUnits: row.price_minor,
            currency: "INR"
        },
        inventoryQuantity: row.inventory_quantity,
        fulfilmentMode: row.fulfilment_mode,
        dispatchLeadDays: [
            row.dispatch_days_min,
            row.dispatch_days_max
        ],
        images,
        narrative: row.narrative,
        spec: {
            colour: row.spec_colour,
            technique: row.spec_technique,
            fabric: row.spec_fabric,
            ...row.spec_speciality ? {
                speciality: row.spec_speciality
            } : {},
            ...row.spec_collection_note ? {
                collectionNote: row.spec_collection_note
            } : {},
            ...row.spec_note ? {
                note: row.spec_note
            } : {}
        },
        provenance: {
            workshop: row.provenance_workshop,
            loom: row.provenance_loom,
            weaveTimeWeeks: row.provenance_weeks,
            artisanCount: row.provenance_artisans
        },
        garmentType: row.garment_type,
        // Spread rather than assigned, so a stitched garment carries no `weave` key
        // at all. `weave: undefined` would satisfy the type but survive JSON round
        // trips as an explicit null, and the domain rule is that the field is absent.
        ...row.weave ? {
            weave: row.weave
        } : {},
        fabric: row.fabric,
        colourFamily: row.colour_family,
        zariTypes: zari,
        motifs,
        ...row.campaign_slug ? {
            campaign: row.campaign_slug
        } : {}
    };
}
/** One pass over the catalogue, assembled in memory. */ function loadProducts() {
    const connection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])();
    const rows = connection.prepare(`SELECT * FROM product WHERE published = 1 ORDER BY id`).all();
    if (rows.length === 0) return [];
    const imageRows = connection.prepare(`SELECT product_id, position, ratio, shot, alt, url, width, height
         FROM product_image ORDER BY product_id, position`).all();
    const motifRows = connection.prepare(`SELECT product_id, motif AS value FROM product_motif ORDER BY motif`).all();
    const zariRows = connection.prepare(`SELECT product_id, zari AS value FROM product_zari ORDER BY zari`).all();
    const imagesByProduct = new Map();
    for (const image of imageRows){
        const list = imagesByProduct.get(image.product_id) ?? [];
        list.push({
            id: `${image.product_id}-${image.position + 1}`,
            ratio: image.ratio,
            shot: image.shot,
            alt: image.alt,
            width: image.width,
            height: image.height,
            ...image.url ? {
                src: image.url
            } : {}
        });
        imagesByProduct.set(image.product_id, list);
    }
    const group = (source)=>{
        const map = new Map();
        for (const item of source){
            const list = map.get(item.product_id) ?? [];
            list.push(item.value);
            map.set(item.product_id, list);
        }
        return map;
    };
    const motifsByProduct = group(motifRows);
    const zariByProduct = group(zariRows);
    return rows.map((row)=>toProduct(row, imagesByProduct.get(row.id) ?? [], motifsByProduct.get(row.id) ?? [], zariByProduct.get(row.id) ?? []));
}
function toCollection(row) {
    if (row.kind === "facet") {
        return {
            kind: "facet",
            handle: row.handle,
            title: row.title,
            seoIntro: row.seo_intro,
            // The CHECK constraint guarantees facets_json is present for this kind.
            facets: JSON.parse(row.facets_json ?? "{}")
        };
    }
    const handles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT p.handle FROM collection_product cp
         JOIN product p ON p.id = cp.product_id
        WHERE cp.collection_handle = ? AND p.published = 1
        ORDER BY cp.position`).all(row.handle);
    return {
        kind: "campaign",
        handle: row.handle,
        title: row.title,
        seoIntro: row.seo_intro,
        campaignSlug: row.campaign_slug ?? row.handle,
        productHandles: handles.map((item)=>item.handle)
    };
}
class SqliteCatalogueRepository {
    async listProducts() {
        return loadProducts();
    }
    async getProduct(handle) {
        return loadProducts().find((product)=>product.handle === handle);
    }
    async listCollections() {
        const rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT * FROM collection ORDER BY position, handle`).all();
        return rows.map(toCollection);
    }
    async getCollection(handle) {
        const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT * FROM collection WHERE handle = ?`).get(handle);
        return row ? toCollection(row) : undefined;
    }
    async productsInCollection(collection) {
        const products = loadProducts();
        if (collection.kind === "facet") {
            // A facet collection is a saved view, evaluated live — so it can never
            // drift out of sync with the catalogue behind it (build.md §9.5).
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterProducts"])(products, collection.facets);
        }
        // A campaign collection is authored, and its order is editorial.
        const byHandle = new Map(products.map((product)=>[
                product.handle,
                product
            ]));
        return collection.productHandles.map((handle)=>byHandle.get(handle)).filter((product)=>product !== undefined);
    }
    async getCampaign(slug) {
        const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT * FROM campaign WHERE slug = ?`).get(slug);
        if (!row) return undefined;
        return {
            slug: row.slug,
            name: row.name,
            season: row.season,
            standfirst: row.standfirst,
            storyPageSlug: row.story_page_slug,
            collectionHandle: row.collection_handle
        };
    }
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
"[project]/src/lib/domain/types.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Domain model.
 *
 * Follows the field model in build.md §2.1 and §2.2 — which was written for
 * Shopify metafields, but describes the domain rather than the platform, so it
 * survived Shopify being dropped intact. The database repository maps rows into
 * these; the fixture repository constructs them directly.
 *
 * Two structural rules from the research are encoded in the types themselves,
 * where they cannot be forgotten:
 *
 * - Fulfilment state is a field, never part of the title (§9.8). `title` has no
 *   place to put it and `fulfilmentMode` has nowhere else to go.
 * - Every image carries its own descriptive alt text and shot type (§9.9).
 *   `alt` is required, so an image cannot be added without one.
 */ /**
 * Currencies.
 *
 * Eight currencies per design.md §7. INR is the base; others are display-only
 * with static conversion rates for the prototype. Real rates require a rate
 * source (e.g., exchangerate.host API) and are Sprint 2 work.
 */ __turbopack_context__.s([
    "BASE_CURRENCY",
    ()=>BASE_CURRENCY,
    "CURRENCIES",
    ()=>CURRENCIES,
    "DISPLAY_RATES",
    ()=>DISPLAY_RATES,
    "isAvailable",
    ()=>isAvailable
]);
const CURRENCIES = [
    "INR",
    "USD",
    "CAD",
    "GBP",
    "AUD",
    "EUR",
    "JPY",
    "SGD"
];
const BASE_CURRENCY = "INR";
const DISPLAY_RATES = {
    INR: 1,
    USD: 0.012,
    CAD: 0.016,
    GBP: 0.0095,
    AUD: 0.018,
    EUR: 0.011,
    JPY: 1.8,
    SGD: 0.016
};
function isAvailable(product) {
    return product.inventoryQuantity > 0;
}
}),
"[project]/src/lib/facets/engine.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_SORT",
    ()=>DEFAULT_SORT,
    "SORT_OPTIONS",
    ()=>SORT_OPTIONS,
    "clearGroup",
    ()=>clearGroup,
    "computeFacetCounts",
    ()=>computeFacetCounts,
    "countActiveFacets",
    ()=>countActiveFacets,
    "filterProducts",
    ()=>filterProducts,
    "isSortOrder",
    ()=>isSortOrder,
    "matchesSelection",
    ()=>matchesSelection,
    "priceBandFor",
    ()=>priceBandFor,
    "productValues",
    ()=>productValues,
    "sortProducts",
    ()=>sortProducts,
    "toggleFacet",
    ()=>toggleFacet
]);
/**
 * Faceting.
 *
 * build.md §9.1 makes four requirements, all of which the category benchmark
 * fails: multi-select within a group, live result counts on every option, URL
 * state that survives sharing and the back button, and no full page reload.
 *
 * The subtle one is the count rule. A naive implementation counts against the
 * fully filtered set, so the moment you select "Blue" every other colour reads
 * zero and the group becomes un-explorable — which is worse than no counts at
 * all. Counts for a group must therefore be computed against everything
 * *except* that group's own selection.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/taxonomy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-rsc] (ecmascript)");
;
;
const SORT_OPTIONS = [
    {
        value: "featured",
        label: "Featured"
    },
    {
        value: "price-asc",
        label: "Price: low to high"
    },
    {
        value: "price-desc",
        label: "Price: high to low"
    },
    {
        value: "name-asc",
        label: "Name: A–Z"
    },
    {
        value: "name-desc",
        label: "Name: Z–A"
    }
];
const DEFAULT_SORT = "featured";
function isSortOrder(value) {
    return SORT_OPTIONS.some((option)=>option.value === value);
}
function priceBandFor(product) {
    const amount = product.price.minorUnits;
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRICE_BANDS"].find((band)=>amount >= band.min && (band.max === undefined || amount < band.max))?.slug;
}
function productValues(product, group) {
    switch(group){
        case "garment":
            return [
                product.garmentType
            ];
        case "weave":
            // A stitched garment has no loom technique, so it belongs in no weave
            // bucket — it must not become a phantom count under some default value.
            // Returning [] also keeps it correctly filtered *out* of any weave
            // selection, which is what a shopper narrowing by "kadhua" means.
            return product.weave ? [
                product.weave
            ] : [];
        case "fabric":
            return [
                product.fabric
            ];
        case "colour":
            return [
                product.colourFamily
            ];
        case "zari":
            return product.zariTypes;
        case "motif":
            return product.motifs;
        case "price":
            {
                const band = priceBandFor(product);
                return band ? [
                    band
                ] : [];
            }
        case "availability":
            // Derived, never stored — which is what keeps facet counts honest, so a
            // shopper cannot filter into an empty grid (build.md §9.7).
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAvailable"])(product) ? [
                "available"
            ] : [
                "sold-out"
            ];
        case "fulfilment":
            // A separate facet from availability. Conflating them is what produced
            // "Pre-Order:" in 463 product titles on the reference catalogue: a piece
            // can be sold out *and* made to order, and those are different questions.
            return [
                product.fulfilmentMode
            ];
    }
}
function matchesGroup(product, group, selected) {
    if (selected.length === 0) return true;
    const values = productValues(product, group);
    // OR within a group — this is what "multi-select" means, and it is the whole
    // reason a shopper can ask for Red *and* Maroon.
    return selected.some((value)=>values.includes(value));
}
function matchesSelection(product, selection, { ignoreGroup } = {}) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FACET_GROUPS"].every((group)=>{
        if (group === ignoreGroup) return true;
        return matchesGroup(product, group, selection[group] ?? []);
    });
}
function filterProducts(products, selection) {
    return products.filter((product)=>matchesSelection(product, selection));
}
function computeFacetCounts(products, selection) {
    const counts = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FACET_GROUPS"].map((group)=>[
            group,
            {}
        ]));
    for (const group of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FACET_GROUPS"]){
        const candidates = products.filter((product)=>matchesSelection(product, selection, {
                ignoreGroup: group
            }));
        const bucket = counts[group];
        for (const product of candidates){
            for (const value of productValues(product, group)){
                bucket[value] = (bucket[value] ?? 0) + 1;
            }
        }
    }
    return counts;
}
function sortProducts(products, order) {
    const sorted = [
        ...products
    ];
    switch(order){
        case "featured":
            return sorted.sort((a, b)=>{
                const availability = Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAvailable"])(b)) - Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAvailable"])(a));
                if (availability !== 0) return availability;
                return Number(a.id) - Number(b.id);
            });
        case "price-asc":
            return sorted.sort((a, b)=>a.price.minorUnits - b.price.minorUnits);
        case "price-desc":
            return sorted.sort((a, b)=>b.price.minorUnits - a.price.minorUnits);
        case "name-asc":
            return sorted.sort((a, b)=>a.poeticName.localeCompare(b.poeticName));
        case "name-desc":
            return sorted.sort((a, b)=>b.poeticName.localeCompare(a.poeticName));
    }
}
function countActiveFacets(selection) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FACET_GROUPS"].reduce((total, group)=>total + (selection[group]?.length ?? 0), 0);
}
function toggleFacet(selection, group, value) {
    const current = selection[group] ?? [];
    const next = current.includes(value) ? current.filter((item)=>item !== value) : [
        ...current,
        value
    ];
    const updated = {
        ...selection
    };
    if (next.length === 0) {
        delete updated[group];
    } else {
        updated[group] = next;
    }
    return updated;
}
function clearGroup(selection, group) {
    const updated = {
        ...selection
    };
    delete updated[group];
    return updated;
}
}),
"[project]/src/lib/facets/url.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PAGE_PARAM",
    ()=>PAGE_PARAM,
    "SORT_PARAM",
    ()=>SORT_PARAM,
    "activeFacetChips",
    ()=>activeFacetChips,
    "buildFacetHref",
    ()=>buildFacetHref,
    "buildFacetQuery",
    ()=>buildFacetQuery,
    "parseFacetUrlState",
    ()=>parseFacetUrlState
]);
/**
 * Facet state ↔ URL.
 *
 * ONE URL GRAMMAR. pre-build-gaps.md §6 records the reference site using path
 * segments for facets (`/collections/sarees/katan-silk+red`) and a query param
 * for pagination (`?page=3`) — two grammars for the same kind of state, which
 * makes canonicalisation and analytics harder than they need to be.
 *
 * Decision: query parameters for everything. Facets, sort and pagination all
 * live in the query string. Path segments identify the collection and nothing
 * else.
 *
 * Canonical form matters as much as the grammar. Groups are emitted in a fixed
 * order and values are sorted alphabetically within a group, so the same
 * selection always produces byte-identical URLs regardless of the order the
 * shopper clicked. Without that rule, one result set has dozens of URLs and
 * every one of them is a duplicate for a crawler.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/taxonomy.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/facets/engine.ts [app-rsc] (ecmascript)");
;
;
const PAGE_PARAM = "page";
const SORT_PARAM = "sort";
const VALUE_SEPARATOR = ",";
function readParam(params, key) {
    if (params instanceof URLSearchParams) {
        return params.get(key) ?? undefined;
    }
    const value = params[key];
    if (Array.isArray(value)) return value[0];
    return value;
}
function parseFacetUrlState(params) {
    const selection = {};
    for (const group of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FACET_GROUPS"]){
        const raw = readParam(params, group);
        if (!raw) continue;
        const values = raw.split(VALUE_SEPARATOR).map((value)=>value.trim()).filter(Boolean);
        if (values.length > 0) {
            selection[group] = [
                ...new Set(values)
            ].sort();
        }
    }
    const rawSort = readParam(params, SORT_PARAM);
    const sort = rawSort && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSortOrder"])(rawSort) ? rawSort : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SORT"];
    const rawPage = Number.parseInt(readParam(params, PAGE_PARAM) ?? "1", 10);
    const page = Number.isFinite(rawPage) && rawPage > 0 ? rawPage : 1;
    return {
        selection,
        sort,
        page
    };
}
function buildFacetQuery(state) {
    const params = new URLSearchParams();
    for (const group of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FACET_GROUPS"]){
        const values = state.selection?.[group];
        if (!values || values.length === 0) continue;
        params.set(group, [
            ...values
        ].sort().join(VALUE_SEPARATOR));
    }
    if (state.sort && state.sort !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SORT"]) {
        params.set(SORT_PARAM, state.sort);
    }
    if (state.page && state.page > 1) {
        params.set(PAGE_PARAM, String(state.page));
    }
    return params.toString();
}
function buildFacetHref(pathname, state) {
    const query = buildFacetQuery(state);
    return query ? `${pathname}?${query}` : pathname;
}
function activeFacetChips(selection) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FACET_GROUPS"].flatMap((group)=>(selection[group] ?? []).map((value)=>({
                group,
                value
            })));
}
}),
"[project]/src/lib/money.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMoney",
    ()=>addMoney,
    "convertMoney",
    ()=>convertMoney,
    "formatMoney",
    ()=>formatMoney,
    "money",
    ()=>money,
    "toMajorUnits",
    ()=>toMajorUnits
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-rsc] (ecmascript)");
;
function money(rupees, currency = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BASE_CURRENCY"]) {
    return {
        minorUnits: Math.round(rupees * 100),
        currency
    };
}
function toMajorUnits(value) {
    return value.minorUnits / 100;
}
function convertMoney(value, targetCurrency) {
    if (value.currency === targetCurrency) return value;
    const fromRate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DISPLAY_RATES"][value.currency] ?? 1;
    const toRate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DISPLAY_RATES"][targetCurrency] ?? 1;
    const baseMinorUnits = Math.round(value.minorUnits / fromRate);
    return {
        minorUnits: Math.round(baseMinorUnits * toRate),
        currency: targetCurrency
    };
}
function formatMoney(value) {
    const localeMap = {
        INR: "en-IN",
        USD: "en-US",
        CAD: "en-CA",
        GBP: "en-GB",
        AUD: "en-AU",
        EUR: "de-DE",
        JPY: "ja-JP",
        SGD: "en-SG"
    };
    return new Intl.NumberFormat(localeMap[value.currency] ?? "en-IN", {
        style: "currency",
        currency: value.currency,
        maximumFractionDigits: value.currency === "JPY" ? 0 : 2,
        minimumFractionDigits: value.currency === "JPY" ? 0 : 0
    }).format(toMajorUnits(value));
}
function addMoney(a, b) {
    if (a.currency !== b.currency) {
        throw new Error(`Cannot add ${a.currency} to ${b.currency}`);
    }
    return {
        minorUnits: a.minorUnits + b.minorUnits,
        currency: a.currency
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1r0m3uw._.js.map