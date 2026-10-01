module.exports = [
"[project]/src/components/admin/HomepageEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomepageEditor",
    ()=>HomepageEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/sections.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const SECTION_DESCRIPTIONS = {
    hero: "Single full-bleed banner with title, paragraph, and CTA",
    heroCarousel: "6-slide auto-playing interactive hero carousel with desktop/mobile crops",
    brandStatement: "High-whitespace brand philosophy text band with centered quote",
    collectionTriptych: "3-frame square image feature highlighting weave craftsmanship",
    videoBand: "Full-bleed or 16:9 framed ambient pit loom video section",
    categorySplit: "2-column square category grid with 1.03x hover zoom scaling",
    editorialSlideshow: "2-slide slideshow (Womenswear/Menswear) with secondary Explore buttons",
    tileRow: "4-column quick-link square tile grid (Bridal, Gifting, Zarkashi, Collectibles)",
    poetryBand: "Warm sand background (var(--color-bg-alt)) lyrical text section",
    storesSlideshow: "2-slide fade slideshow (Banaras/Lucknow) with Calendly booking links",
    richText: "Rich text narrative prose block",
    pullQuote: "Centered serif pull quote section"
};
function HomepageEditor() {
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HOMEPAGE_SECTIONS"]
    ]);
    const [hiddenIds, setHiddenIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const moveUp = (index)=>{
        if (index === 0) return;
        const updated = [
            ...sections
        ];
        const temp = updated[index - 1];
        updated[index - 1] = updated[index];
        updated[index] = temp;
        setSections(updated);
    };
    const moveDown = (index)=>{
        if (index === sections.length - 1) return;
        const updated = [
            ...sections
        ];
        const temp = updated[index + 1];
        updated[index + 1] = updated[index];
        updated[index] = temp;
        setSections(updated);
    };
    const toggleHide = (id)=>{
        setHiddenIds((prev)=>({
                ...prev,
                [id]: !prev[id]
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-h2",
                                children: "Homepage Layout & Section Manager"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-caption mt-1 text-ink-muted",
                                children: "Visually arrange what appears on the homepage, edit copy, assign photography, and reorder sections."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                target: "_blank",
                                className: "btn-secondary border border-rule px-4 py-2 text-xs tracking-wider uppercase text-ink hover:bg-bg-sand",
                                children: "Preview Shop ↗"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                disabled: true,
                                title: "Saving the homepage layout is not built yet — see HANDOFF §2.3",
                                className: "bg-ink px-6 py-2.5 text-xs tracking-widest uppercase text-bg opacity-40 cursor-not-allowed",
                                children: "Save Homepage Layout"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "note",
                className: "border border-amber-700/40 bg-amber-50 px-4 py-3 text-caption text-xs text-amber-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Preview only."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    " Changes here are not saved yet — the homepage is still edited in code (",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: "src/lib/content/sections.ts"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 106,
                        columnNumber: 25
                    }, this),
                    "). Use this to plan a layout, then hand the order to a developer."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: sections.map((section, index)=>{
                    const isHidden = !!hiddenIds[section.id];
                    const isEditing = editingId === section.id;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `border transition-colors ${isHidden ? "border-rule/60 bg-bg-sand/40 opacity-60" : "border-rule bg-bg"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-4 p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex h-8 w-8 items-center justify-center bg-bg-sand font-display text-sm font-semibold text-ink",
                                                children: index + 1
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 126,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "font-display text-lg text-ink",
                                                                children: section.type.toUpperCase()
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                                lineNumber: 131,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "eyebrow bg-bg-sand px-2 py-0.5 text-[10px] text-ink-muted",
                                                                children: [
                                                                    "ID: ",
                                                                    section.id
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                                lineNumber: 134,
                                                                columnNumber: 23
                                                            }, this),
                                                            isHidden ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "eyebrow text-error text-[10px]",
                                                                children: "HIDDEN"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                                lineNumber: 138,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "eyebrow text-success text-[10px]",
                                                                children: "ACTIVE"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-caption mt-1 text-ink-muted",
                                                        children: SECTION_DESCRIPTIONS[section.type] ?? "Homepage Section Component"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                        lineNumber: 125,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: index === 0,
                                                onClick: ()=>moveUp(index),
                                                className: "border border-rule px-3 py-1 text-xs text-ink disabled:opacity-30 hover:bg-bg-sand",
                                                title: "Move section up",
                                                children: "↑ Up"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 151,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                disabled: index === sections.length - 1,
                                                onClick: ()=>moveDown(index),
                                                className: "border border-rule px-3 py-1 text-xs text-ink disabled:opacity-30 hover:bg-bg-sand",
                                                title: "Move section down",
                                                children: "↓ Down"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>toggleHide(section.id),
                                                className: "border border-rule px-3 py-1 text-xs text-ink hover:bg-bg-sand",
                                                children: isHidden ? "Show" : "Hide"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 169,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setEditingId(isEditing ? null : section.id),
                                                className: "bg-ink px-4 py-1 text-xs text-bg hover:opacity-90",
                                                children: isEditing ? "Close" : "Edit Content"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this),
                            isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-rule bg-bg-alt p-6 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "eyebrow text-ink font-semibold",
                                        children: "Edit Section Content"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                        lineNumber: 189,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionEditorForm, {
                                        section: section
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                        lineNumber: 190,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 188,
                                columnNumber: 17
                            }, this) : null
                        ]
                    }, section.id, true, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 117,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
function SectionEditorForm({ section }) {
    switch(section.type){
        case "heroCarousel":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-caption text-ink-muted",
                        children: "Managing 6 Slides in Hero Carousel. Each slide art-directs a desktop and mobile image."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 206,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: section.slides.map((slide, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-rule bg-bg p-4 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow text-ink font-semibold",
                                        children: [
                                            "Slide ",
                                            i + 1,
                                            ": ",
                                            slide.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "eyebrow block text-ink-muted text-[10px]",
                                                children: "Eyebrow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 214,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                defaultValue: slide.eyebrow,
                                                className: "w-full border-b border-rule py-1 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                        lineNumber: 213,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "eyebrow block text-ink-muted text-[10px]",
                                                children: "Title"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 222,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                defaultValue: slide.title,
                                                className: "w-full border-b border-rule py-1 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "eyebrow block text-ink-muted text-[10px]",
                                                children: "Body Copy"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 230,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                defaultValue: slide.body,
                                                rows: 2,
                                                className: "w-full border-b border-rule py-1 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 231,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                        lineNumber: 229,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "eyebrow block text-ink-muted text-[10px]",
                                                        children: "CTA Label"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                        lineNumber: 239,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        defaultValue: slide.ctaLabel,
                                                        className: "w-full border-b border-rule py-1 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 238,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "eyebrow block text-ink-muted text-[10px]",
                                                        children: "CTA Link"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                        lineNumber: 247,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        defaultValue: slide.ctaHref,
                                                        className: "w-full border-b border-rule py-1 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                        lineNumber: 248,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                        lineNumber: 237,
                                        columnNumber: 17
                                    }, this),
                                    slide.art.desktop.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative h-12 w-20 bg-bg-sand overflow-hidden border border-rule",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    src: slide.art.desktop.src,
                                                    alt: slide.title,
                                                    fill: true,
                                                    unoptimized: true,
                                                    className: "object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 257,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-caption text-ink-muted truncate max-w-[200px]",
                                                children: slide.art.desktop.src
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                                lineNumber: 266,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                        lineNumber: 256,
                                        columnNumber: 19
                                    }, this) : null
                                ]
                            }, slide.id, true, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 211,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                lineNumber: 205,
                columnNumber: 9
            }, this);
        case "brandStatement":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 max-w-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "eyebrow block text-ink-muted text-[10px]",
                                children: "Main Quote"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                defaultValue: section.quote,
                                className: "w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 282,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "eyebrow block text-ink-muted text-[10px]",
                                children: "Body Philosophy"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 289,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                defaultValue: section.body,
                                rows: 3,
                                className: "w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 290,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                lineNumber: 279,
                columnNumber: 9
            }, this);
        case "videoBand":
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4 max-w-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "eyebrow block text-ink-muted text-[10px]",
                                children: "Video File (.mp4)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 303,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                defaultValue: section.videoSrc,
                                className: "w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "eyebrow block text-ink-muted text-[10px]",
                                children: "Section Heading"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 311,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                defaultValue: section.title,
                                className: "w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 310,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "eyebrow block text-ink-muted text-[10px]",
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 319,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                defaultValue: section.body,
                                rows: 2,
                                className: "w-full border-b border-rule py-2 text-caption text-ink bg-transparent focus:outline-none focus:border-ink"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                                lineNumber: 320,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                lineNumber: 301,
                columnNumber: 9
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-caption text-ink-muted",
                children: "Content fields available for editing. Modify text parameters or re-assign image assets."
            }, void 0, false, {
                fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                lineNumber: 331,
                columnNumber: 9
            }, this);
    }
}
}),
"[project]/src/lib/content/sections.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

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
 */ __turbopack_context__.s([
    "HOMEPAGE_SECTIONS",
    ()=>HOMEPAGE_SECTIONS,
    "PAGES",
    ()=>PAGES
]);
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
                art: imagePair("gold", "hero/slide-03-kadhua.webp"),
                eyebrow: "Seasonal Edit",
                title: "Kadhua",
                body: "Undyed grounds and real zari, in the lighter weights a long afternoon asks for.",
                ctaLabel: "Discover",
                ctaHref: "/collections/kadhua"
            },
            {
                id: "slide-gifting",
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
                art: imagePair("purple", "womens-mens/womenswear.webp"),
                eyebrow: "Womenswear",
                title: "Womenswear",
                body: "Sarees, dupattas and stitched pieces, all off the same looms.",
                ctaLabel: "Explore",
                ctaHref: "/collections/womenswear",
                buttonVariant: "secondary",
                textAlign: "right"
            },
            {
                id: "slide-menswear",
                art: imagePair("black", "womens-mens/menswear.webp"),
                eyebrow: "Menswear",
                title: "Menswear",
                body: "Kurtas, stoles and cloth by the metre, cut from handloom.",
                ctaLabel: "Explore",
                ctaHref: "/collections/menswear",
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
                href: "/collections/zarkashi"
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
            {
                id: "slide-charbagh",
                art: imagePair("green", "campaign/charbagh.webp"),
                title: "Charbagh",
                body: "A charbagh is a garden quartered by water. The plan turns up in " + "Banarasi jaal constantly once you have seen it \u2014 fourfold, symmetrical, " + "and drawn to be read from above rather than from where anyone stands. " + "These are the pieces that admit it.",
                ctaLabel: "Discover",
                ctaHref: "/pages/charbagh"
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
const PAGES = {
    nadi: {
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
    }
};
}),
];

//# sourceMappingURL=src_1p0sxtm._.js.map