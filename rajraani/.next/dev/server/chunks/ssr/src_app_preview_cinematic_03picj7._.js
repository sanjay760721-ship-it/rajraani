module.exports = [
"[project]/src/app/preview/cinematic/CineMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CINE_MENU_CSS",
    ()=>CINE_MENU_CSS,
    "CineMenu",
    ()=>CineMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const HOVER_INTENT_MS = 120;
function CineMenu({ panels, onOpenChange, children }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Where the phone menu renders: the preview root, outside the header, whose
    // blur would otherwise trap a fixed overlay inside the header strip.
    const [portalTarget, setPortalTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const openTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onOpenChange?.(open !== null || mobile);
    }, [
        open,
        mobile,
        onOpenChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            clearTimeout(openTimer.current);
            clearTimeout(closeTimer.current);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open && !mobile) return;
        const onKey = (event)=>{
            if (event.key !== "Escape") return;
            if (open) document.getElementById(`${id}-t-${open}`)?.focus();
            setOpen(null);
            setMobile(false);
        };
        const onDown = (event)=>{
            if (open && !wrapRef.current?.contains(event.target)) setOpen(null);
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("pointerdown", onDown);
        return ()=>{
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("pointerdown", onDown);
        };
    }, [
        open,
        mobile,
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mobile) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = previous;
        };
    }, [
        mobile
    ]);
    const scheduleOpen = (panelId)=>{
        clearTimeout(closeTimer.current);
        openTimer.current = setTimeout(()=>setOpen(panelId), HOVER_INTENT_MS);
    };
    const scheduleClose = ()=>{
        clearTimeout(openTimer.current);
        closeTimer.current = setTimeout(()=>setOpen(null), HOVER_INTENT_MS);
    };
    const cancelClose = ()=>clearTimeout(closeTimer.current);
    const current = panels.find((panel)=>panel.id === open);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: wrapRef,
                className: "cine-menu",
                onMouseLeave: scheduleClose,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Main",
                        className: "cine-menu__row",
                        children: panels.map((panel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                id: `${id}-t-${panel.id}`,
                                type: "button",
                                className: "cine-menu__trigger",
                                "aria-expanded": open === panel.id,
                                "aria-controls": `${id}-p-${panel.id}`,
                                onClick: ()=>setOpen((curr)=>curr === panel.id ? null : panel.id),
                                onMouseEnter: ()=>scheduleOpen(panel.id),
                                onMouseLeave: scheduleClose,
                                onFocus: ()=>setOpen(panel.id),
                                children: panel.label
                            }, panel.id, false, {
                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: `${id}-p-${current.id}`,
                        "aria-label": current.label,
                        className: "cine-drop",
                        onMouseEnter: cancelClose,
                        "data-lenis-prevent": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cine-drop__inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cine-drop__cols",
                                    children: columnsOf(current).map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "cine-drop__heading",
                                                    children: column.heading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: column.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: link.href,
                                                                onClick: ()=>setOpen(null),
                                                                className: `cine-drop__link ${link.emphasis ? "is-strong" : ""}`,
                                                                children: link.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                                                lineNumber: 120,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, link.href + link.label, false, {
                                                            fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, column.heading, true, {
                                            fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                    lineNumber: 113,
                                    columnNumber: 15
                                }, this),
                                current.tiles && current.tiles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cine-drop__tiles",
                                    children: current.tiles.slice(0, 3).map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: tile.href,
                                            onClick: ()=>setOpen(null),
                                            className: "cine-tile",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "cine-tile__img",
                                                    children: tile.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: tile.src,
                                                        alt: "",
                                                        fill: true,
                                                        sizes: "240px",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 37
                                                    }, this) : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "cine-tile__label",
                                                    children: tile.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, tile.href + tile.label, true, {
                                            fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                            lineNumber: 132,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                    lineNumber: 130,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                        lineNumber: 105,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cine-header__end",
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "cine-burger",
                        "aria-label": mobile ? "Close menu" : "Open menu",
                        "aria-expanded": mobile,
                        "aria-controls": `${id}-mobile`,
                        onClick: ()=>{
                            setPortalTarget(wrapRef.current?.closest(".cine") ?? document.body);
                            setMobile((value)=>!value);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            mobile && portalTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: `${id}-mobile`,
                className: "cine-mobile",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Menu",
                "data-lenis-prevent": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cine-mobile__top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cine-logo",
                                children: "RAJRAANI"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "cine-mobile__close",
                                "aria-label": "Close menu",
                                onClick: ()=>setMobile(false),
                                autoFocus: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.6",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 5l14 14M19 5L5 19"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                        lineNumber: 169,
                                        columnNumber: 134
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Mobile",
                        children: panels.map((panel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "cine-mobile__group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        children: panel.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: panel.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    onClick: ()=>setMobile(false),
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                                    lineNumber: 179,
                                                    columnNumber: 23
                                                }, this)
                                            }, link.href + link.label, false, {
                                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                                lineNumber: 178,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, panel.id, true, {
                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cine-mobile__actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/search",
                                onClick: ()=>setMobile(false),
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                lineNumber: 189,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/account",
                                onClick: ()=>setMobile(false),
                                children: "Account"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                lineNumber: 190,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/wishlist",
                                onClick: ()=>setMobile(false),
                                children: "Wishlist"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                lineNumber: 191,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cart",
                                onClick: ()=>setMobile(false),
                                children: "Bag"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                        lineNumber: 188,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
                lineNumber: 165,
                columnNumber: 9
            }, this), portalTarget) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/CineMenu.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function columnsOf(panel) {
    return panel.columns && panel.columns.length > 0 ? panel.columns : [
        {
            heading: panel.label,
            links: panel.links
        }
    ];
}
const CINE_MENU_CSS = `
.cine-menu { display: none; justify-self: center; }
@media (min-width: 1024px) { .cine-menu { display: block; } .cine-burger { display: none; } }
.cine-menu__row { display: flex; gap: 6px; }
.cine-menu__trigger { position: relative; background: none; border: 0; cursor: pointer; padding: 12px 16px; font-family: var(--font-cine-display); font-weight: 500; font-size: 16.5px; letter-spacing: 0.17em; text-transform: uppercase; color: #fff; opacity: 0.86; transition: opacity 200ms ease; }
.cine-menu__trigger:hover, .cine-menu__trigger[aria-expanded="true"] { opacity: 1; }
.cine-menu__trigger::after { content: ""; position: absolute; left: 16px; right: calc(16px + 0.17em); bottom: 4px; height: 2px; background: #fff; transform: scaleX(0); transform-origin: left; transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-menu__trigger[aria-expanded="true"]::after { transform: scaleX(1); }

.cine-drop { position: absolute; left: 50%; top: calc(100% - 8px); width: min(1200px, calc(100vw - 2 * var(--pad))); translate: -50% 0; background: rgb(8 8 8 / 0.94); backdrop-filter: blur(14px); border: 1px solid rgb(255 255 255 / 0.12); animation: cineDrop 380ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes cineDrop { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
.cine-drop__inner { display: flex; justify-content: space-between; gap: 48px; padding: 40px 44px 44px; }
.cine-drop__cols { display: flex; gap: 56px; }
.cine-drop__heading { margin: 0 0 18px; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.55); }
.cine-drop ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 4px; }
.cine-drop__link { display: inline-block; padding: 5px 0; font-family: var(--font-cine-text); font-size: 18px; color: rgb(255 255 255 / 0.86); transition: color 200ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-drop__link:hover { color: #fff; transform: translateX(4px); }
.cine-drop__link.is-strong { color: #fff; font-weight: 500; }
.cine-drop__tiles { display: flex; gap: 20px; }
.cine-tile { display: block; width: 220px; color: #fff; }
.cine-tile__img { position: relative; display: block; aspect-ratio: 3 / 4; overflow: hidden; background: rgb(255 255 255 / 0.06); }
.cine-tile__img img { transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-tile:hover .cine-tile__img img { transform: scale(1.05); }
.cine-tile__label { display: block; margin-top: 12px; font-family: var(--font-cine-display); font-weight: 500; font-size: 15px; letter-spacing: 0.18em; text-transform: uppercase; }

.cine-mobile { position: fixed; inset: 0; z-index: 70; overflow-y: auto; background: #000; padding: 0 var(--pad) 48px; animation: cineDrop 300ms ease both; }
.cine-mobile__top { height: 72px; display: flex; align-items: center; justify-content: space-between; }
.cine-mobile__close { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; background: none; border: 0; color: #fff; cursor: pointer; }
.cine-mobile__group { border-bottom: 1px solid rgb(255 255 255 / 0.14); }
.cine-mobile__group summary { list-style: none; cursor: pointer; padding: 20px 0; font-family: var(--font-cine-display); font-weight: 600; font-size: 30px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }
.cine-mobile__group summary::-webkit-details-marker { display: none; }
.cine-mobile__group ul { list-style: none; margin: 0; padding: 0 0 18px; display: grid; gap: 2px; }
.cine-mobile__group a { display: block; padding: 8px 0; font-size: 18px; color: rgb(255 255 255 / 0.8); }
.cine-mobile__actions { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 32px; }
.cine-mobile__actions a { display: flex; align-items: center; justify-content: center; height: 52px; border: 1px solid rgb(255 255 255 / 0.4); font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; }
`;
}),
"[project]/src/app/preview/cinematic/Cinematic.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cinematic",
    ()=>Cinematic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$preview$2f$cinematic$2f$CineMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/preview/cinematic/CineMenu.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
const SLIDE_MS = 7000;
/** Headline scale follows the title's length so short names land big. */ const titleSize = (title)=>title.length <= 8 ? "xl" : title.length <= 16 ? "lg" : "md";
/** True while the element is mostly on screen; drives entrances and autoplay. */ function useInView(threshold = 0.45) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([entry])=>setInView(Boolean(entry?.isIntersecting)), {
            threshold
        });
        io.observe(el);
        return ()=>io.disconnect();
    }, [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
function Cinematic({ scenes, menu }) {
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            duration: 1.25,
            easing: (t)=>1 - Math.pow(1 - t, 4)
        });
        const raf = (time)=>lenis.raf(time * 1000);
        lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
        lenis.on("scroll", ({ direction, scroll })=>{
            headerRef.current?.toggleAttribute("data-hidden", direction === 1 && scroll > 140);
            headerRef.current?.toggleAttribute("data-solid", scroll > window.innerHeight * 0.85);
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add(raf);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            root.querySelectorAll("[data-scene]").forEach((scene)=>{
                const media = scene.querySelector("[data-drift]");
                if (!media) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(media, {
                    yPercent: -5
                }, {
                    yPercent: 5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: scene,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }, root);
        return ()=>{
            ctx.revert();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(raf);
            lenis.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "cine bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: CSS + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$preview$2f$cinematic$2f$CineMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CINE_MENU_CSS"]
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                ref: headerRef,
                className: "cine-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cine-header__row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/preview/cinematic",
                            className: "cine-logo",
                            "aria-label": "Rajraani home",
                            children: "RAJRAANI"
                        }, void 0, false, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 114,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$preview$2f$cinematic$2f$CineMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CineMenu"], {
                            panels: menu,
                            onOpenChange: (isOpen)=>headerRef.current?.toggleAttribute("data-menu", isOpen),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/search",
                                    className: "cine-nav cine-hide-sm",
                                    children: "Search"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/wishlist",
                                    className: "cine-nav cine-hide-sm",
                                    children: "Wishlist"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cart",
                                    className: "cine-nav",
                                    children: "Bag"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: scenes.map((scene)=>scene.kind === "slides" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SlidesScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 128,
                        columnNumber: 13
                    }, this) : scene.kind === "film" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 130,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShopScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "cine-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-footer__name",
                        children: "RAJRAANI"
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Footer",
                        className: "cine-footer__links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/our-story",
                                children: "Our story"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/shipping",
                                children: "Shipping"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 141,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/returns",
                                children: "Returns"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/size-guide",
                                children: "Size guide"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/privacy",
                                children: "Privacy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/contact",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-footer__legal",
                        children: "© 2026 Rajraani Handloom Private Limited"
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
/* ── Words that rise ─────────────────────────────────────────────────────── */ function Headline({ text, as: Tag = "h2", live }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: `cine-title cine-title--${titleSize(text)} ${live ? "is-live" : ""}`,
        "aria-label": text,
        children: text.split(" ").map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cine-word",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        "--i": i
                    },
                    children: word
                }, void 0, false, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 159,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 157,
        columnNumber: 5
    }, this);
}
function Kicker({ text }) {
    if (!text) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "cine-kicker",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "cine-kicker__rule"
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            text
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 170,
        columnNumber: 5
    }, this);
}
function Actions({ cta, secondary }) {
    const external = /^https?:\/\//.test(cta.href);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cine-actions",
        children: [
            external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: cta.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "cine-button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: cta.label
                }, void 0, false, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 182,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: cta.href,
                className: "cine-button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: cta.label
                }, void 0, false, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            secondary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: secondary.href,
                className: "cine-link",
                children: secondary.label
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 191,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 180,
        columnNumber: 5
    }, this);
}
function Photo({ src, mobileSrc, priority, className = "", focus = "left" }) {
    if (!src) return null;
    const split = mobileSrc && mobileSrc !== src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: src,
                alt: "",
                fill: true,
                sizes: "100vw",
                priority: priority,
                className: `object-cover ${focus === "right" ? "object-[72%_50%]" : "object-[28%_50%]"} md:object-center ${split ? "hidden md:block" : ""} ${className}`
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            split ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: mobileSrc,
                alt: "",
                fill: true,
                sizes: "100vw",
                priority: priority,
                className: `object-cover md:hidden ${className}`
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 205,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
/* ── A scene of slides that change in place ──────────────────────────────── */ function SlidesScene({ scene }) {
    const [ref, inView] = useInView(0.4);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [previous, setPrevious] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const count = scene.slides.length;
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((to)=>{
        setActive((current)=>{
            const next = (to % count + count) % count;
            if (next !== current) setPrevious(current);
            return next;
        });
    }, [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView || paused || count < 2) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const timer = setTimeout(()=>go(active + 1), SLIDE_MS);
        return ()=>clearTimeout(timer);
    }, [
        inView,
        paused,
        active,
        count,
        go
    ]);
    const slide = scene.slides[active];
    const right = slide.align === "right";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        "data-scene": true,
        className: `cine-scene cine-scene--${scene.transition}`,
        "aria-roledescription": "carousel",
        "aria-label": scene.slides.map((s)=>s.title).join(", "),
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-drift": true,
                className: "cine-media",
                children: scene.slides.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cine-layer",
                        "data-state": i === active ? "active" : i === previous ? "previous" : "idle",
                        "aria-hidden": i !== active,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `cine-layer__img ${i === active && inView ? "is-zooming" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                src: s.image,
                                mobileSrc: s.mobileImage,
                                priority: scene.isPageTitle && i === 0,
                                focus: s.align === "right" ? "left" : "right"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 259,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 258,
                            columnNumber: 13
                        }, this)
                    }, s.id, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 252,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: `cine-scrim ${right ? "cine-scrim--right" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `cine-copy ${right ? "cine-copy--right" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                        text: slide.kicker
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 267,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Headline, {
                        text: slide.title,
                        as: scene.isPageTitle ? "h1" : "h2",
                        live: inView
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    slide.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-body",
                        children: slide.body
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 269,
                        columnNumber: 23
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                        cta: slide.cta,
                        secondary: slide.secondary
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, this)
                ]
            }, slide.id, true, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 266,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 241,
        columnNumber: 5
    }, this);
}
/* ── The loom film, with its facts ───────────────────────────────────────── */ function FilmScene({ scene }) {
    const [ref, inView] = useInView(0.4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        "data-scene": true,
        className: "cine-scene",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-drift": true,
                className: "cine-media",
                children: scene.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    className: "h-full w-full object-cover",
                    src: scene.video,
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                    preload: "metadata"
                }, void 0, false, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 285,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                    src: scene.image
                }, void 0, false, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 287,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "cine-scrim cine-scrim--even"
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cine-copy cine-copy--center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                        text: scene.kicker
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Headline, {
                        text: scene.title,
                        live: inView
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-body",
                        children: scene.body
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: `cine-facts ${inView ? "is-live" : ""}`,
                        children: scene.facts.map((fact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: fact.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                        lineNumber: 298,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: fact.figure
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, fact.label, true, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 297,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                        cta: scene.cta
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, this);
}
/* ── Shop: tall strips that widen under the pointer ──────────────────────── */ function ShopScene({ scene }) {
    const [ref, inView] = useInView(0.35);
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        "data-scene": true,
        className: "cine-scene cine-shop",
        "aria-label": "Shop",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cine-shop__row",
            onMouseLeave: ()=>setHover(0),
            children: scene.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: `cine-strip ${hover === i ? "is-open" : ""}`,
                    onMouseEnter: ()=>setHover(i),
                    onFocus: ()=>setHover(i),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cine-strip__img",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                src: item.image
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 326,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 325,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "cine-scrim"
                        }, void 0, false, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 328,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cine-strip__copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                                    text: item.kicker
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 330,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Headline, {
                                    text: item.title,
                                    live: inView
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 331,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cine-strip__cta",
                                    children: [
                                        "Shop ",
                                        item.title.toLowerCase()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 329,
                            columnNumber: 13
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 318,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
            lineNumber: 316,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 315,
        columnNumber: 5
    }, this);
}
/* Scoped to this preview; nothing here touches the site's own styles. */ const CSS = `
.cine { font-family: var(--font-cine-text), system-ui, sans-serif; --ease: cubic-bezier(0.22, 1, 0.36, 1); --pad: max(24px, 4vw); }

/* Header */
.cine-header { position: fixed; inset: 0 0 auto; z-index: 50; transition: transform 600ms var(--ease), background-color 400ms ease; background: linear-gradient(to bottom, rgb(0 0 0 / 0.55), transparent); }
.cine-header[data-solid], .cine-header[data-menu] { background: rgb(0 0 0 / 0.86); backdrop-filter: blur(10px); }
.cine-header[data-hidden] { transform: translateY(-100%); }
.cine-header__row { height: 92px; padding: 0 var(--pad); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; }
.cine-header__end { display: flex; justify-content: flex-end; align-items: center; gap: 28px; }
@media (max-width: 1023px) { .cine-header__row { display: flex; justify-content: space-between; } }
@media (max-width: 767px) { .cine-header__row { height: 72px; } .cine-logo { font-size: 19px; letter-spacing: 0.3em; margin-right: 0; } .cine-header__end { gap: 20px; } }
.cine-logo { font-family: var(--font-cine-display); font-weight: 600; font-size: 24px; letter-spacing: 0.42em; margin-right: -0.42em; color: #fff; justify-self: start; }
.cine-nav { font-family: var(--font-cine-display); font-weight: 500; font-size: 16px; letter-spacing: 0.17em; text-transform: uppercase; color: #fff; opacity: 0.82; transition: opacity 200ms ease; }
.cine-nav:hover { opacity: 1; }
.cine-hide-sm { display: none; }
@media (min-width: 768px) { .cine-hide-sm { display: inline; } }
.cine-burger { display: inline-flex; flex-direction: column; gap: 7px; width: 30px; padding: 8px 0; cursor: pointer; background: none; border: 0; }
.cine-burger span { display: block; height: 2px; background: #fff; }

/* Scenes */
.cine-scene { position: relative; height: 100svh; min-height: 640px; overflow: hidden; }
.cine-media { position: absolute; inset: -6% 0; will-change: transform; }
.cine-layer { position: absolute; inset: 0; }
.cine-layer__img { position: absolute; inset: 0; }
.cine-layer__img.is-zooming { animation: cineZoom 9s linear both; }
.cine-scene--fade .cine-layer { opacity: 0; transition: opacity 1400ms var(--ease); }
.cine-scene--fade .cine-layer[data-state="active"] { opacity: 1; z-index: 2; }
.cine-scene--wipe .cine-layer { clip-path: inset(0 0 0 100%); }
.cine-scene--wipe .cine-layer[data-state="previous"] { clip-path: inset(0 0 0 0); z-index: 1; }
.cine-scene--wipe .cine-layer[data-state="active"] { clip-path: inset(0 0 0 0); z-index: 2; transition: clip-path 1300ms cubic-bezier(0.77, 0, 0.175, 1); }
@keyframes cineZoom { from { transform: scale(1.12); } to { transform: scale(1); } }

.cine-scrim { position: absolute; inset: 0; z-index: 3; pointer-events: none; background: linear-gradient(to top, rgb(0 0 0 / 0.78) 0%, rgb(0 0 0 / 0.28) 40%, transparent 65%), linear-gradient(to right, rgb(0 0 0 / 0.45), transparent 58%); }
.cine-scrim--right { background: linear-gradient(to top, rgb(0 0 0 / 0.78) 0%, rgb(0 0 0 / 0.28) 40%, transparent 65%), linear-gradient(to left, rgb(0 0 0 / 0.45), transparent 58%); }
.cine-scrim--even { background: rgb(0 0 0 / 0.5); }

/* Copy */
.cine-copy { position: absolute; z-index: 4; left: var(--pad); bottom: 13vh; width: min(640px, calc(100% - 2 * var(--pad))); }
.cine-copy--right { left: auto; right: var(--pad); text-align: right; }
.cine-copy--right .cine-kicker, .cine-copy--right .cine-actions { justify-content: flex-end; }
.cine-copy--right .cine-body { margin-left: auto; }
.cine-copy--center { left: 50%; bottom: auto; top: 50%; transform: translate(-50%, -50%); text-align: center; width: min(920px, calc(100% - 2 * var(--pad))); }
.cine-copy--center .cine-kicker, .cine-copy--center .cine-actions { justify-content: center; }
.cine-copy--center .cine-body { margin-left: auto; margin-right: auto; }

.cine-kicker { display: flex; align-items: center; gap: 14px; margin: 0 0 18px; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.28em; text-transform: uppercase; color: rgb(255 255 255 / 0.85); animation: cineFade 900ms var(--ease) both; }
.cine-kicker__rule { width: 36px; height: 1px; background: currentColor; }
.cine-title { margin: 0; font-family: var(--font-cine-display); font-weight: 600; text-transform: uppercase; line-height: 0.9; letter-spacing: 0.005em; color: #fff; }
.cine-title--xl { font-size: clamp(3.4rem, 1.6rem + 7.4vw, 9.5rem); }
.cine-title--lg { font-size: clamp(3rem, 1.6rem + 5vw, 6.75rem); }
.cine-title--md { font-size: clamp(2.5rem, 1.5rem + 3.5vw, 4.75rem); line-height: 0.95; }
.cine-word { display: inline-block; overflow: hidden; vertical-align: top; padding-bottom: 0.07em; margin-right: 0.2em; }
.cine-word:last-child { margin-right: 0; }
.cine-word > span { display: inline-block; transform: translateY(115%); }
.cine-title.is-live .cine-word > span { animation: cineRise 1100ms var(--ease) both; animation-delay: calc(var(--i) * 70ms + 120ms); }
@keyframes cineRise { from { transform: translateY(115%); } to { transform: translateY(0); } }
@keyframes cineFade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }

.cine-body { margin: 24px 0 0; max-width: 40ch; font-size: 18px; line-height: 1.55; color: rgb(255 255 255 / 0.86); animation: cineFade 1000ms var(--ease) 350ms both; }
.cine-actions { display: flex; align-items: center; gap: 30px; flex-wrap: wrap; margin-top: 34px; animation: cineFade 1000ms var(--ease) 480ms both; }
.cine-button { position: relative; display: inline-flex; align-items: center; padding: 17px 42px; border: 2px solid #fff; font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; overflow: hidden; isolation: isolate; transition: color 400ms var(--ease), transform 160ms var(--ease); }
.cine-button::before { content: ""; position: absolute; inset: 0; background: #fff; transform: scaleY(0); transform-origin: bottom; transition: transform 400ms var(--ease); z-index: -1; }
.cine-button:hover { color: #000; }
.cine-button:hover::before { transform: scaleY(1); }
.cine-button:active { transform: scale(0.97); }
.cine-link { font-family: var(--font-cine-display); font-weight: 500; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; padding-bottom: 4px; background: linear-gradient(currentColor, currentColor) 0 100% / 100% 1px no-repeat; transition: background-size 400ms var(--ease); }
.cine-link:hover { background-size: 0 1px; background-position: 100% 100%; }

/* Facts row */
.cine-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin: 40px auto 0; max-width: 760px; }
.cine-facts > div { display: flex; flex-direction: column-reverse; gap: 8px; padding: 0 20px; border-left: 1px solid rgb(255 255 255 / 0.3); opacity: 0; transform: translateY(16px); }
.cine-facts > div:first-child { border-left: 0; }
.cine-facts.is-live > div { animation: cineFade 900ms var(--ease) both; }
.cine-facts.is-live > div:nth-child(2) { animation-delay: 120ms; }
.cine-facts.is-live > div:nth-child(3) { animation-delay: 240ms; }
.cine-facts dd { margin: 0; font-family: var(--font-cine-display); font-weight: 600; font-size: clamp(1.75rem, 1.2rem + 1.8vw, 3rem); line-height: 1; text-transform: uppercase; }
.cine-facts dt { font-family: var(--font-cine-display); font-size: 13px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.72); }

/* Chapters */
.cine-chapters { position: absolute; z-index: 5; right: var(--pad); bottom: 13vh; display: flex; flex-direction: column; align-items: flex-end; gap: 22px; }
.cine-chapters--left { right: auto; left: var(--pad); align-items: flex-start; }
.cine-chapters ol { list-style: none; margin: 0; padding: 0; display: flex; gap: 18px; }
.cine-chapters button { display: block; background: none; border: 0; padding: 8px 0; color: #fff; cursor: pointer; text-align: left; }
.cine-chapter__bar { position: relative; display: block; width: 72px; height: 2px; background: rgb(255 255 255 / 0.28); overflow: hidden; }
.cine-chapter__bar > span { position: absolute; inset: 0; background: #fff; transform: scaleX(0); transform-origin: left; }
.cine-chapter__bar > .is-running { animation: cineBar var(--ms) linear both; }
.cine-chapter__bar > .is-full { transform: scaleX(1); }
.cine-chapter__bar > .is-dim { opacity: 0.5; }
@keyframes cineBar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.cine-chapter__name { display: block; margin-top: 10px; font-family: var(--font-cine-display); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.6; transition: opacity 300ms ease; white-space: nowrap; }
.cine-chapters button[aria-current] .cine-chapter__name, .cine-chapters button:hover .cine-chapter__name { opacity: 1; }
.cine-arrows { display: flex; gap: 10px; }
.cine-arrows button { width: 52px; height: 52px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgb(255 255 255 / 0.5); transition: background-color 300ms ease, color 300ms ease, border-color 300ms ease; }
.cine-arrows button:hover { background: #fff; color: #000; border-color: #fff; }

/* Shop strips */
.cine-shop__row { position: absolute; inset: 0; display: flex; }
.cine-strip { position: relative; flex: 1 1 0; overflow: hidden; border-left: 1px solid rgb(0 0 0); transition: flex-grow 900ms var(--ease); color: #fff; }
.cine-strip:first-child { border-left: 0; }
.cine-strip.is-open { flex-grow: 2.4; }
.cine-strip__img { position: absolute; inset: 0; transition: transform 1200ms var(--ease); }
.cine-strip.is-open .cine-strip__img { transform: scale(1.04); }
.cine-strip__copy { position: absolute; z-index: 4; left: 32px; right: 24px; bottom: 13vh; }
.cine-strip .cine-title { font-size: clamp(2.2rem, 1.2rem + 2.6vw, 4.5rem); }
.cine-strip .cine-kicker, .cine-strip__cta { opacity: 0; transform: translateY(10px); transition: opacity 500ms var(--ease), transform 500ms var(--ease); animation: none; }
.cine-strip.is-open .cine-kicker, .cine-strip.is-open .cine-strip__cta { opacity: 1; transform: none; }
.cine-strip__cta { display: inline-block; margin-top: 20px; font-family: var(--font-cine-display); font-weight: 600; font-size: 14px; letter-spacing: 0.22em; text-transform: uppercase; padding-bottom: 4px; border-bottom: 2px solid #fff; }
@media (max-width: 767px) {
  .cine-shop__row { overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; }
  .cine-strip { flex: 0 0 82vw; scroll-snap-align: start; }
  .cine-strip .cine-kicker, .cine-strip__cta { opacity: 1; transform: none; }
}

/* Footer */
.cine-footer { display: flex; flex-direction: column; align-items: center; gap: 26px; padding: 88px var(--pad) 64px; text-align: center; }
.cine-footer__name { margin: 0; font-family: var(--font-cine-display); font-weight: 600; font-size: clamp(3rem, 2rem + 6vw, 8rem); letter-spacing: 0.32em; margin-right: -0.32em; line-height: 1; color: rgb(255 255 255 / 0.12); }
.cine-footer__links { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px 36px; }
.cine-footer__links a, .cine-footer__legal { font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; color: rgb(255 255 255 / 0.7); }
.cine-footer__links a:hover { color: #fff; }
.cine-footer__legal { margin: 0; font-size: 12px; color: rgb(255 255 255 / 0.45); }

.cine :focus-visible { outline: 2px solid #fff; outline-offset: 3px; }

@media (max-width: 767px) {
  .cine-copy, .cine-copy--right { left: var(--pad); right: auto; text-align: left; bottom: 22vh; }
  .cine-copy--right .cine-kicker, .cine-copy--right .cine-actions { justify-content: flex-start; }
  .cine-copy--right .cine-body { margin-left: 0; }
  .cine-chapters, .cine-chapters--left { left: var(--pad); right: var(--pad); bottom: 6vh; align-items: flex-start; }
  .cine-chapter__bar { width: 44px; }
  .cine-chapter__name { display: none; }
  .cine-body { font-size: 16px; }
  .cine-facts dd { font-size: 1.5rem; }
  .cine-facts > div { padding: 0 10px; }
}

@media (prefers-reduced-motion: reduce) {
  .cine-word > span, .cine-facts > div { transform: none !important; opacity: 1 !important; animation: none !important; }
  .cine-layer__img.is-zooming, .cine-kicker, .cine-body, .cine-actions { animation: none !important; }
  .cine-scene--wipe .cine-layer[data-state="active"] { transition: none; }
}
`;
}),
];

//# sourceMappingURL=src_app_preview_cinematic_03picj7._.js.map