module.exports = [
"[project]/src/components/FacetSidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActiveFilterChips",
    ()=>ActiveFilterChips,
    "FacetSidebar",
    ()=>FacetSidebar,
    "SortSelect",
    ()=>SortSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/taxonomy.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/facets/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/facets/url.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
/**
 * Faceting UI.
 *
 * Everything the reference site's filter does not do (build.md §9.1):
 * multi-select within a group, a live count on every option, state pushed to
 * the URL so a filtered view is shareable and the back button works, and no
 * full page reload — `router.push` performs a client-side navigation and the
 * server re-renders only what changed.
 *
 * The counts come from the server and exclude their own group, so an option
 * never reads zero while it is selected.
 */ function useFacetNavigation(sort) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((selection)=>{
        // Changing a facet always returns to page 1 — page 4 of the old result
        // set is meaningless against the new one.
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFacetHref"])(pathname, {
            selection,
            sort,
            page: 1
        }), {
            scroll: false
        });
    }, [
        router,
        pathname,
        sort
    ]);
}
function FacetSidebar({ selection, counts, sort, collection }) {
    const navigate = useFacetNavigation(sort);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        "aria-label": "Filter",
        className: "border-t border-rule",
        children: [
            collection ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                open: true,
                className: "border-b border-rule py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "eyebrow flex cursor-pointer items-center justify-between text-ink",
                        children: [
                            "Collection",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: collection.clearHref,
                                className: "text-caption text-ink-muted normal-case italic underline",
                                children: "clear"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FacetSidebar.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FacetSidebar.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-3 space-y-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-caption flex items-center gap-3 text-ink",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        checked: true,
                                        readOnly: true,
                                        disabled: true,
                                        className: "size-3.5 accent-ink"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FacetSidebar.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex-1 font-semibold",
                                        children: collection.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FacetSidebar.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FacetSidebar.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/FacetSidebar.tsx",
                            lineNumber: 92,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FacetSidebar.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FacetSidebar.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this) : null,
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUPS"].map((group)=>{
                const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["termsForGroup"])(group).filter((term)=>(counts[group][term.slug] ?? 0) > 0 || isSelected(selection, group, term.slug));
                if (options.length === 0) return null;
                const selectedInGroup = selection[group] ?? [];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                    open: true,
                    className: "border-b border-rule py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                            className: "eyebrow flex cursor-pointer items-center justify-between text-ink",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUP_LABELS"][group],
                                selectedInGroup.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "text-caption text-ink-muted normal-case italic underline",
                                    onClick: (event)=>{
                                        event.preventDefault();
                                        navigate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearGroup"])(selection, group));
                                    },
                                    children: "clear"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FacetSidebar.tsx",
                                    lineNumber: 127,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FacetSidebar.tsx",
                            lineNumber: 124,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-3 space-y-2",
                            children: options.map((term)=>{
                                const count = counts[group][term.slug] ?? 0;
                                const checked = isSelected(selection, group, term.slug);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: `flex cursor-pointer items-center gap-3 text-caption text-ink-body ${count === 0 ? "opacity-40" : ""}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: checked,
                                                // Multi-select is the whole point — checkboxes, never
                                                // radios. The reference site cannot express Red AND
                                                // Maroon.
                                                onChange: ()=>navigate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleFacet"])(selection, group, term.slug)),
                                                className: "size-3.5 accent-ink"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FacetSidebar.tsx",
                                                lineNumber: 151,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex-1",
                                                children: term.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FacetSidebar.tsx",
                                                lineNumber: 160,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-eyebrow tabular-nums text-ink-muted",
                                                children: count
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FacetSidebar.tsx",
                                                lineNumber: 161,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FacetSidebar.tsx",
                                        lineNumber: 146,
                                        columnNumber: 21
                                    }, this)
                                }, term.slug, false, {
                                    fileName: "[project]/src/components/FacetSidebar.tsx",
                                    lineNumber: 145,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/FacetSidebar.tsx",
                            lineNumber: 140,
                            columnNumber: 13
                        }, this)
                    ]
                }, group, true, {
                    fileName: "[project]/src/components/FacetSidebar.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FacetSidebar.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
function isSelected(selection, group, slug) {
    return (selection[group] ?? []).includes(slug);
}
function ActiveFilterChips({ selection, sort, resultCount }) {
    const navigate = useFacetNavigation(sort);
    const chips = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activeFacetChips"])(selection);
    if (chips.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-5 flex flex-wrap items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sr-only",
                "aria-live": "polite",
                children: [
                    resultCount,
                    " results"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FacetSidebar.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            chips.map(({ group, value })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "eyebrow flex items-center gap-2 border border-rule-input px-3 py-1.5 text-ink",
                    onClick: ()=>navigate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleFacet"])(selection, group, value)),
                    children: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findTerm"])(group, value)?.name ?? value,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            children: "×"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FacetSidebar.tsx",
                            lineNumber: 210,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: "Remove filter"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FacetSidebar.tsx",
                            lineNumber: 211,
                            columnNumber: 11
                        }, this)
                    ]
                }, `${group}:${value}`, true, {
                    fileName: "[project]/src/components/FacetSidebar.tsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "eyebrow border border-rule-strong px-3 py-1.5 text-ink",
                onClick: ()=>navigate({}),
                children: "Clear all"
            }, void 0, false, {
                fileName: "[project]/src/components/FacetSidebar.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FacetSidebar.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
function SortSelect({ selection, sort }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "sort",
                className: "eyebrow text-ink-muted",
                children: "Sort"
            }, void 0, false, {
                fileName: "[project]/src/components/FacetSidebar.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: "sort",
                value: sort,
                onChange: (event)=>router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFacetHref"])(pathname, {
                        selection,
                        sort: event.target.value,
                        page: 1
                    }), {
                        scroll: false
                    }),
                className: "eyebrow cursor-pointer border-b border-rule-input bg-transparent py-1 text-ink",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_OPTIONS"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: option.value,
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/src/components/FacetSidebar.tsx",
                        lineNumber: 256,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/FacetSidebar.tsx",
                lineNumber: 240,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FacetSidebar.tsx",
        lineNumber: 236,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/FilterButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterButton",
    ()=>FilterButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FilterDrawer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function FilterButton({ selection, counts, sort, resultCount, className }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: `eyebrow flex items-center gap-2 px-4 py-2 border border-rule text-ink hover:bg-bg-alt transition-colors ${className ?? ""}`,
                onClick: ()=>setIsOpen(true),
                "aria-label": "Open filters",
                "aria-expanded": isOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 1.5,
                            d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/FilterButton.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterButton.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    "Filter",
                    Object.values(selection).some((arr)=>arr.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-ink text-bg text-[10px] font-semibold px-1.5 py-0.5 rounded-none",
                        children: Object.values(selection).reduce((sum, arr)=>sum + arr.length, 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/FilterButton.tsx",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterButton.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FilterDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FilterDrawer"], {
                isOpen: isOpen,
                onClose: ()=>setIsOpen(false),
                selection: selection,
                counts: counts,
                sort: sort,
                resultCount: resultCount,
                onSelectionChange: ()=>{},
                onSortChange: ()=>{}
            }, void 0, false, {
                fileName: "[project]/src/components/FilterButton.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FilterButton.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/FilterDrawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FilterDrawer",
    ()=>FilterDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/taxonomy.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/facets/engine.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/facets/url.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function FilterDrawer({ isOpen, onClose, selection, counts, sort, resultCount, onSelectionChange, onSortChange }) {
    const drawerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const navigate = (newSelection, newSort)=>{
        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$url$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["buildFacetHref"])(pathname, {
            selection: newSelection,
            sort: newSort ?? sort,
            page: 1
        }), {
            scroll: false
        });
        onSelectionChange(newSelection);
        if (newSort !== undefined) onSortChange(newSort);
    };
    // Focus management
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        previousFocusRef.current = document.activeElement;
        document.body.style.overflow = "hidden";
        // Focus first focusable element after render
        setTimeout(()=>{
            const firstFocusable = drawerRef.current?.querySelector('button, [href], input, select, [tabindex]:not([tabindex="-1"])');
            firstFocusable?.focus();
        }, 0);
        return ()=>{
            document.body.style.overflow = "";
            previousFocusRef.current?.focus();
        };
    }, [
        isOpen
    ]);
    // Escape closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const onKeyDown = (event)=>{
            if (event.key === "Escape") {
                onClose();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return ()=>document.removeEventListener("keydown", onKeyDown);
    }, [
        isOpen,
        onClose
    ]);
    // Focus trap
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleTab = (event)=>{
            if (event.key !== "Tab") return;
            const focusable = drawerRef.current?.querySelectorAll('a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])');
            if (!focusable || focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener("keydown", handleTab);
        return ()=>document.removeEventListener("keydown", handleTab);
    }, [
        isOpen
    ]);
    // Outside click closes (but not clicks inside drawer)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const onPointerDown = (event)=>{
            if (drawerRef.current?.contains(event.target)) return;
            onClose();
        };
        document.addEventListener("pointerdown", onPointerDown);
        return ()=>document.removeEventListener("pointerdown", onPointerDown);
    }, [
        isOpen,
        onClose
    ]);
    if (!isOpen) return null;
    const hasActiveFilters = Object.values(selection).some((arr)=>arr.length > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-100 lg:hidden",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Filter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Close filter",
                className: "absolute inset-0 bg-scrim/60",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/src/components/FilterDrawer.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: drawerRef,
                className: "absolute inset-y-0 left-0 w-full max-w-[320px] bg-bg border-r border-rule shadow-2xl flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 border-b border-rule",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-h4 text-ink",
                                children: "Filter"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "eyebrow text-ink-muted hover:text-ink p-2",
                                onClick: onClose,
                                "aria-label": "Close filter",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterDrawer.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-b border-rule",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow text-ink-muted",
                                        children: "Active filters:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                        lineNumber: 170,
                                        columnNumber: 15
                                    }, this),
                                    Object.entries(selection).flatMap(([group, values])=>values.map((value)=>{
                                            const term = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findTerm"])(group, value);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: "eyebrow flex items-center gap-1.5 border border-rule-input px-2.5 py-1 text-ink",
                                                onClick: ()=>navigate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearGroup"])(selection, group)),
                                                children: [
                                                    term?.name ?? value,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "aria-hidden": true,
                                                        children: "×"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                        lineNumber: 182,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, `${group}:${value}`, true, {
                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                lineNumber: 175,
                                                columnNumber: 21
                                            }, this);
                                        }))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                lineNumber: 169,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "eyebrow border border-rule-strong px-3 py-1.5 text-ink w-full",
                                onClick: ()=>navigate({}),
                                children: "Clear all"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                lineNumber: 188,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterDrawer.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-y-auto p-4",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUPS"].map((group)=>{
                                const options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["termsForGroup"])(group).filter((term)=>(counts[group][term.slug] ?? 0) > 0 || isSelected(selection, group, term.slug));
                                if (options.length === 0) return null;
                                const selectedInGroup = selection[group] ?? [];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    open: true,
                                    className: "border-b border-rule py-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "eyebrow flex cursor-pointer items-center justify-between text-ink",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUP_LABELS"][group],
                                                selectedInGroup.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "text-caption text-ink-muted normal-case italic underline",
                                                    onClick: (event)=>{
                                                        event.preventDefault();
                                                        navigate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearGroup"])(selection, group));
                                                    },
                                                    children: "clear"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "mt-3 space-y-2",
                                            children: options.map((term)=>{
                                                const count = counts[group][term.slug] ?? 0;
                                                const checked = isSelected(selection, group, term.slug);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: `flex cursor-pointer items-center gap-3 text-caption text-ink-body ${count === 0 ? "opacity-40" : ""}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "checkbox",
                                                                checked: checked,
                                                                onChange: ()=>navigate((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleFacet"])(selection, group, term.slug)),
                                                                className: "size-3.5 accent-ink"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                lineNumber: 237,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "flex-1",
                                                                children: term.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-eyebrow tabular-nums text-ink-muted",
                                                                children: count
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                                lineNumber: 244,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 25
                                                    }, this)
                                                }, term.slug, false, {
                                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FilterDrawer.tsx",
                                            lineNumber: 226,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, group, true, {
                                    fileName: "[project]/src/components/FilterDrawer.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this);
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "border-t border-rule pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        className: "eyebrow cursor-pointer text-ink",
                                        children: "Sort"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                        lineNumber: 258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: sort,
                                        onChange: (event)=>navigate(selection, event.target.value),
                                        className: "mt-3 w-full eyebrow cursor-pointer border-b border-rule-input bg-transparent py-2 text-ink",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SORT_OPTIONS"].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: option.value,
                                                children: option.label
                                            }, option.value, false, {
                                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                                lineNumber: 265,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                        lineNumber: 259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                lineNumber: 257,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterDrawer.tsx",
                        lineNumber: 199,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 border-t border-rule bg-bg/95 backdrop-blur sticky bottom-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow text-ink-muted",
                                        children: [
                                            resultCount,
                                            " ",
                                            resultCount === 1 ? "piece" : "pieces",
                                            " found"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    hasActiveFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "eyebrow border border-rule-strong px-3 py-1.5 text-ink",
                                        onClick: ()=>navigate({}),
                                        children: "Clear all"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FilterDrawer.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "w-full bg-ink px-6 py-3 text-bg font-semibold",
                                onClick: onClose,
                                children: "Apply filters"
                            }, void 0, false, {
                                fileName: "[project]/src/components/FilterDrawer.tsx",
                                lineNumber: 289,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/FilterDrawer.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FilterDrawer.tsx",
                lineNumber: 149,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FilterDrawer.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
function isSelected(selection, group, slug) {
    return (selection[group] ?? []).includes(slug);
}
}),
"[project]/src/lib/facets/engine.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/taxonomy.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-ssr] (ecmascript)");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRICE_BANDS"].find((band)=>amount >= band.min && (band.max === undefined || amount < band.max))?.slug;
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
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAvailable"])(product) ? [
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUPS"].every((group)=>{
        if (group === ignoreGroup) return true;
        return matchesGroup(product, group, selection[group] ?? []);
    });
}
function filterProducts(products, selection) {
    return products.filter((product)=>matchesSelection(product, selection));
}
function computeFacetCounts(products, selection) {
    const counts = Object.fromEntries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUPS"].map((group)=>[
            group,
            {}
        ]));
    for (const group of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUPS"]){
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
                const availability = Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAvailable"])(b)) - Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAvailable"])(a));
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUPS"].reduce((total, group)=>total + (selection[group]?.length ?? 0), 0);
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
"[project]/src/lib/facets/url.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/taxonomy.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/facets/engine.ts [app-ssr] (ecmascript)");
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
    for (const group of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUPS"]){
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
    const sort = rawSort && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSortOrder"])(rawSort) ? rawSort : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SORT"];
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
    for (const group of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUPS"]){
        const values = state.selection?.[group];
        if (!values || values.length === 0) continue;
        params.set(group, [
            ...values
        ].sort().join(VALUE_SEPARATOR));
    }
    if (state.sort && state.sort !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$facets$2f$engine$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SORT"]) {
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUPS"].flatMap((group)=>(selection[group] ?? []).map((value)=>({
                group,
                value
            })));
}
}),
];

//# sourceMappingURL=src_1658dcz._.js.map