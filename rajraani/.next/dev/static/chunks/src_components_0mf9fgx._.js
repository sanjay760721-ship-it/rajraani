(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function ScrollReveal({ children, className = "", delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y: 16
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8,
            ease: [
                0.16,
                1,
                0.3,
                1
            ],
            delay: delay / 1000
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-50px 0px -15% 0px"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollReveal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/CampaignSlideshow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CampaignSlideshow",
    ()=>CampaignSlideshow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CampaignSlideshow({ slides }) {
    _s();
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CampaignSlideshow.useEffect": ()=>{
            const element = carouselRef.current;
            if (!element) return;
            let flkty = null;
            let cancelled = false;
            void ({
                "CampaignSlideshow.useEffect": async ()=>{
                    const { default: FlickityCtor } = await __turbopack_context__.A("[project]/node_modules/flickity/js/index.js [app-client] (ecmascript, async loader)");
                    if (cancelled) return;
                    flkty = new FlickityCtor(element, {
                        cellAlign: "left",
                        wrapAround: true,
                        percentPosition: false,
                        autoPlay: 4000,
                        pauseAutoPlayOnHover: true,
                        draggable: true,
                        prevNextButtons: false,
                        pageDots: true,
                        resize: true,
                        selectedAttraction: 0.025,
                        friction: 0.25,
                        initialIndex: 0,
                        cellSelector: ".carousel-cell"
                    });
                    requestAnimationFrame({
                        "CampaignSlideshow.useEffect": ()=>{
                            if (!cancelled) flkty?.resize();
                        }
                    }["CampaignSlideshow.useEffect"]);
                }
            })["CampaignSlideshow.useEffect"]();
            return ({
                "CampaignSlideshow.useEffect": ()=>{
                    cancelled = true;
                    flkty?.destroy();
                }
            })["CampaignSlideshow.useEffect"];
        }
    }["CampaignSlideshow.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: carouselRef,
        className: "relative w-full min-h-[520px] overflow-hidden bg-bg",
        "aria-label": "Campaigns",
        "aria-roledescription": "carousel",
        children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `carousel-cell relative h-[82vh] max-h-[900px] min-h-[520px] w-full ${index === 0 ? "is-selected" : ""}`,
                "aria-hidden": index !== 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-full w-full",
                        style: {
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toneFor"])(slide.art.desktop.tone)
                        },
                        children: slide.art.desktop.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: slide.art.desktop.src,
                            alt: slide.title,
                            className: "h-full w-full object-cover object-center",
                            fill: true,
                            loading: index === 0 ? "eager" : "lazy",
                            fetchPriority: index === 0 ? "high" : "auto",
                            sizes: "100vw"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                            lineNumber: 98,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "h-full w-full",
                            style: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toneFor"])(slide.art.desktop.tone),
                                backgroundImage: "linear-gradient(160deg, rgb(255 255 255 / 0.22), rgb(0 0 0 / 0.18))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                            lineNumber: 108,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                        lineNumber: 93,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                        lineNumber: 121,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wrap-wide pb-16 md:pb-24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[46ch] mx-auto text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-display text-bg drop-shadow-sm",
                                        children: slide.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-prose mt-4 max-w-[38ch] text-bg/90 mx-auto",
                                        children: slide.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                                        lineNumber: 133,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: slide.ctaHref,
                                        className: "cta-secondary mt-8 inline-block",
                                        children: slide.ctaLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                                lineNumber: 129,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                            lineNumber: 128,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this)
                ]
            }, slide.id, true, {
                fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(CampaignSlideshow, "tqI5RslTGVDAuq9aDlmVCnZoZD8=");
_c = CampaignSlideshow;
var _c;
__turbopack_context__.k.register(_c, "CampaignSlideshow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/EditorialSlideshow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorialSlideshow",
    ()=>EditorialSlideshow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function EditorialSlideshow({ slides }) {
    _s();
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EditorialSlideshow.useEffect": ()=>{
            const element = carouselRef.current;
            if (!element) return;
            // See HeroCarousel for why this is a dynamic import, why `percentPosition`
            // is off, and why the geometry needs a re-measure after the first paint.
            let flkty = null;
            let cancelled = false;
            void ({
                "EditorialSlideshow.useEffect": async ()=>{
                    const { default: FlickityCtor } = await __turbopack_context__.A("[project]/node_modules/flickity/js/index.js [app-client] (ecmascript, async loader)");
                    if (cancelled) return;
                    flkty = new FlickityCtor(element, {
                        cellAlign: "left",
                        wrapAround: true,
                        percentPosition: false,
                        autoPlay: 4000,
                        pauseAutoPlayOnHover: true,
                        draggable: true,
                        prevNextButtons: true,
                        pageDots: false,
                        resize: true,
                        selectedAttraction: 0.025,
                        friction: 0.25,
                        initialIndex: 0,
                        cellSelector: ".carousel-cell"
                    });
                    requestAnimationFrame({
                        "EditorialSlideshow.useEffect": ()=>{
                            if (!cancelled) flkty?.resize();
                        }
                    }["EditorialSlideshow.useEffect"]);
                }
            })["EditorialSlideshow.useEffect"]();
            return ({
                "EditorialSlideshow.useEffect": ()=>{
                    cancelled = true;
                    flkty?.destroy();
                }
            })["EditorialSlideshow.useEffect"];
        }
    }["EditorialSlideshow.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: carouselRef,
        className: "relative w-full min-h-[520px] overflow-hidden bg-bg",
        "aria-label": "Editorial collections",
        "aria-roledescription": "carousel",
        children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `carousel-cell relative h-[82vh] max-h-[900px] min-h-[520px] w-full ${index === 0 ? "is-selected" : ""}`,
                "aria-hidden": index !== 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-full w-full",
                        style: {
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toneFor"])(slide.art.desktop.tone)
                        },
                        children: slide.art.desktop.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: slide.art.desktop.src,
                            alt: slide.title,
                            className: "h-full w-full object-cover object-center",
                            fill: true,
                            loading: index === 0 ? "eager" : "lazy",
                            fetchPriority: index === 0 ? "high" : "auto",
                            sizes: "100vw"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                            lineNumber: 104,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "h-full w-full",
                            style: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toneFor"])(slide.art.desktop.tone),
                                backgroundImage: "linear-gradient(160deg, rgb(255 255 255 / 0.22), rgb(0 0 0 / 0.18))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                            lineNumber: 114,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                        lineNumber: 99,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                        lineNumber: 127,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "wrap-wide pb-16 md:pb-24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `max-w-[46ch] ${slide.textAlign === "left" ? "" : slide.textAlign === "right" ? "ml-auto" : "mx-auto"}`,
                                children: [
                                    slide.eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "eyebrow text-bg/80 mb-2",
                                        children: slide.eyebrow
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                                        lineNumber: 145,
                                        columnNumber: 21
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-display text-bg drop-shadow-sm",
                                        children: slide.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                                        lineNumber: 147,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-prose mt-4 max-w-[38ch] text-bg/90",
                                        children: slide.body
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                                        lineNumber: 150,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: slide.ctaHref,
                                        className: `mt-8 inline-block ${slide.buttonVariant === "primary" ? "cta-primary" : "cta-secondary"}`,
                                        children: slide.ctaLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                                        lineNumber: 153,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                                lineNumber: 135,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                            lineNumber: 134,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, this)
                ]
            }, slide.id, true, {
                fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(EditorialSlideshow, "tqI5RslTGVDAuq9aDlmVCnZoZD8=");
_c = EditorialSlideshow;
var _c;
__turbopack_context__.k.register(_c, "EditorialSlideshow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/HeroCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroCarousel",
    ()=>HeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/**
 * Hero Carousel — Flickity-based, matching reference exactly.
 *
 * - 6 slides, slide transition (not fade)
 * - 4000ms interval, pause on hover/focus
 * - Dots only (no prev/next arrows on desktop)
 * - 2:1 aspect ratio (1800/900)
 * - Full viewport width, max-height 900px, min-height 520px
 * - sr-only h1 for accessibility
 */ function SlideArt({ art, alt = "", priority = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-full w-full",
        style: {
            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toneFor"])(art.desktop.tone)
        },
        children: art.desktop.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: art.desktop.src,
            alt: alt,
            className: "h-full w-full object-cover object-center",
            fill: true,
            loading: priority ? "eager" : "lazy",
            fetchPriority: priority ? "high" : "auto",
            sizes: "100vw"
        }, void 0, false, {
            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
            lineNumber: 38,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "aria-hidden": true,
            className: "h-full w-full",
            style: {
                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toneFor"])(art.desktop.tone),
                backgroundImage: "linear-gradient(160deg, rgb(255 255 255 / 0.22), rgb(0 0 0 / 0.18))"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
            lineNumber: 48,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/HeroCarousel.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = SlideArt;
function HeroCarousel({ slides, isPageTitle = true }) {
    _s();
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flickityRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroCarousel.useEffect": ()=>{
            const element = carouselRef.current;
            if (!element) return;
            // Flickity is loaded here rather than at module scope for two reasons: it
            // touches `window` on import so it cannot be evaluated during SSR, and a
            // static import would put the whole library in the entry bundle for a
            // component that only matters below the fold on some pages.
            let flkty = null;
            let cancelled = false;
            let handleFocus;
            let handleBlur;
            void ({
                "HeroCarousel.useEffect": async ()=>{
                    const { default: FlickityCtor } = await __turbopack_context__.A("[project]/node_modules/flickity/js/index.js [app-client] (ecmascript, async loader)");
                    if (cancelled) return;
                    flkty = new FlickityCtor(element, {
                        cellAlign: "left",
                        // `contain` is ignored when `wrapAround` is on, and `percentPosition`
                        // made Flickity measure each full-width cell as a fraction of the
                        // track — every slide landed ~63px from the origin and selecting a dot
                        // moved almost nothing. Pixel positioning is correct for cells that are
                        // exactly one viewport wide.
                        wrapAround: true,
                        percentPosition: false,
                        autoPlay: 4000,
                        pauseAutoPlayOnHover: true,
                        draggable: true,
                        prevNextButtons: true,
                        pageDots: false,
                        resize: true,
                        selectedAttraction: 0.025,
                        friction: 0.25,
                        initialIndex: 0,
                        cellSelector: ".carousel-cell"
                    });
                    flickityRef.current = flkty;
                    /*
       * Flickity measures cell geometry during its constructor. At that point
       * this carousel has not been through a layout pass with its final cell
       * height, so it computed scroll targets ~31px apart instead of one
       * viewport each — every dot selected the right index and the track
       * barely moved. Re-measuring after a paint, and again once the first
       * (eager) slide image has decoded, fixes the targets.
       *
       * `window.resize` is not enough: Flickity's own handler short-circuits
       * when the viewport width is unchanged, which it is here.
       */ requestAnimationFrame({
                        "HeroCarousel.useEffect": ()=>{
                            if (!cancelled) flkty?.resize();
                        }
                    }["HeroCarousel.useEffect"]);
                    const firstImage = element.querySelector("img");
                    if (firstImage && !firstImage.complete) {
                        firstImage.addEventListener("load", {
                            "HeroCarousel.useEffect": ()=>{
                                if (!cancelled) flkty?.resize();
                            }
                        }["HeroCarousel.useEffect"], {
                            once: true
                        });
                    }
                    // Pause on focus (accessibility)
                    handleFocus = ({
                        "HeroCarousel.useEffect": ()=>flkty?.pausePlayer?.()
                    })["HeroCarousel.useEffect"];
                    handleBlur = ({
                        "HeroCarousel.useEffect": ()=>flkty?.unpausePlayer?.()
                    })["HeroCarousel.useEffect"];
                    element.addEventListener("focusin", handleFocus);
                    element.addEventListener("focusout", handleBlur);
                }
            })["HeroCarousel.useEffect"]();
            return ({
                "HeroCarousel.useEffect": ()=>{
                    cancelled = true;
                    if (handleFocus) element.removeEventListener("focusin", handleFocus);
                    if (handleBlur) element.removeEventListener("focusout", handleBlur);
                    flkty?.destroy();
                    flickityRef.current = null;
                }
            })["HeroCarousel.useEffect"];
        }
    }["HeroCarousel.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: carouselRef,
        /*
       * `flickity-enabled` is Flickity's own class and must not be hardcoded —
       * it styles the cells for a viewport element that only exists once the
       * library has initialised. The `min-h` is the safety net: cells are
       * `h-full`, so without a height on an ancestor they resolve to 0 and the
       * whole hero collapses behind `overflow-hidden`.
       */ className: "relative w-full min-h-[520px] overflow-hidden bg-bg text-bg",
        "aria-label": "Featured collections",
        "aria-roledescription": "carousel",
        children: [
            isPageTitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "sr-only",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BRAND"].name,
                    " — handwoven Banarasi textiles"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this) : null,
            slides.map((slide, index)=>{
                const align = slide.align;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `carousel-cell relative h-[82vh] max-h-[900px] min-h-[520px] w-full ${index === 0 ? "is-selected" : ""}`,
                    "aria-hidden": index !== 0,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlideArt, {
                            art: slide.art,
                            alt: slide.title,
                            priority: index === 0
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                            lineNumber: 196,
                            columnNumber: 13
                        }, this),
                        align ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": true,
                                    className: `absolute inset-0 ${align === "right" ? "bg-gradient-to-l from-black/60 via-black/20 to-transparent" : align === "left" ? "bg-gradient-to-r from-black/60 via-black/20 to-transparent" : "bg-gradient-to-t from-black/60 via-black/25 to-transparent"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                    lineNumber: 213,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "wrap-wide w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `w-full max-w-[360px] text-center ${align === "right" ? "ml-auto" : align === "left" ? "mr-auto" : "mx-auto"}`,
                                            children: [
                                                slide.eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-ui text-[11px] uppercase tracking-[0.16em] text-bg/85",
                                                    children: slide.eyebrow
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                    lineNumber: 236,
                                                    columnNumber: 25
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "font-display text-[28px] md:text-[35px] leading-[1.125] mt-3 text-bg font-normal",
                                                    children: slide.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-ui text-[14px] leading-[1.6] mt-4 text-bg/90",
                                                    children: slide.body
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                    lineNumber: 244,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: slide.ctaHref,
                                                    className: "font-display text-[16px] tracking-[1px] mt-7 inline-block border border-black/15 bg-white/80 px-4 py-[5px] text-black transition-colors duration-300 hover:bg-white",
                                                    children: slide.ctaLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                            lineNumber: 226,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                        lineNumber: 225,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                    lineNumber: 224,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                            lineNumber: 212,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": true,
                                    className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                    lineNumber: 264,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "wrap-wide pb-16 md:pb-24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "max-w-[46ch]",
                                            children: [
                                                slide.eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "eyebrow text-bg/80",
                                                    children: slide.eyebrow
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 25
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "text-display mt-3 text-bg drop-shadow-sm",
                                                    children: slide.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-prose mt-4 max-w-[38ch] text-bg/90",
                                                    children: slide.body
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: slide.ctaHref,
                                                    className: "cta-primary mt-8 inline-block",
                                                    children: slide.ctaLabel
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                            lineNumber: 272,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                        lineNumber: 271,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                    lineNumber: 270,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                            lineNumber: 262,
                            columnNumber: 15
                        }, this)
                    ]
                }, slide.id, true, {
                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this);
            })
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/HeroCarousel.tsx",
        lineNumber: 155,
        columnNumber: 5
    }, this);
}
_s(HeroCarousel, "x0L8mLOoJCgX4G8oZE3obSMk8Vo=");
_c1 = HeroCarousel;
var _c, _c1;
__turbopack_context__.k.register(_c, "SlideArt");
__turbopack_context__.k.register(_c1, "HeroCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sections/StoresSlideshow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoresSlideshow",
    ()=>StoresSlideshow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function StoresSlideshow({ slides }) {
    _s();
    const carouselRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StoresSlideshow.useEffect": ()=>{
            const element = carouselRef.current;
            if (!element) return;
            // See HeroCarousel for why this is a dynamic import, why `percentPosition`
            // is off, and why the geometry needs a re-measure after the first paint.
            let flkty = null;
            let cancelled = false;
            void ({
                "StoresSlideshow.useEffect": async ()=>{
                    const { default: FlickityCtor } = await __turbopack_context__.A("[project]/node_modules/flickity/js/index.js [app-client] (ecmascript, async loader)");
                    if (cancelled) return;
                    flkty = new FlickityCtor(element, {
                        cellAlign: "left",
                        wrapAround: true,
                        percentPosition: false,
                        autoPlay: 4000,
                        pauseAutoPlayOnHover: true,
                        draggable: false,
                        prevNextButtons: false,
                        pageDots: false,
                        resize: true,
                        selectedAttraction: 0.025,
                        friction: 0.25,
                        initialIndex: 0,
                        cellSelector: ".carousel-cell"
                    });
                    requestAnimationFrame({
                        "StoresSlideshow.useEffect": ()=>{
                            if (!cancelled) flkty?.resize();
                        }
                    }["StoresSlideshow.useEffect"]);
                }
            })["StoresSlideshow.useEffect"]();
            return ({
                "StoresSlideshow.useEffect": ()=>{
                    cancelled = true;
                    flkty?.destroy();
                }
            })["StoresSlideshow.useEffect"];
        }
    }["StoresSlideshow.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: carouselRef,
        className: "relative w-full min-h-[520px] overflow-hidden bg-bg",
        "aria-label": "Our stores",
        "aria-roledescription": "carousel",
        children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `carousel-cell relative h-[82vh] max-h-[900px] min-h-[520px] w-full ${index === 0 ? "is-selected" : ""}`,
                "aria-hidden": index !== 0,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-full w-full",
                        style: {
                            backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toneFor"])(slide.art.desktop.tone)
                        },
                        children: slide.art.desktop.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: slide.art.desktop.src,
                            alt: slide.title,
                            className: "h-full w-full object-cover object-center",
                            fill: true,
                            loading: index === 0 ? "eager" : "lazy",
                            fetchPriority: index === 0 ? "high" : "auto",
                            sizes: "100vw"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                            lineNumber: 102,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "h-full w-full",
                            style: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toneFor"])(slide.art.desktop.tone),
                                backgroundImage: "linear-gradient(160deg, rgb(255 255 255 / 0.22), rgb(0 0 0 / 0.18))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                            lineNumber: 112,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                        lineNumber: 97,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                        lineNumber: 125,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center px-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-[46ch] text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "eyebrow text-bg/80 block mb-3",
                                    children: slide.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-prose mt-4 max-w-[38ch] text-bg/90 mx-auto",
                                    children: slide.body
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex flex-col sm:flex-row gap-4 justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: slide.ctaHref,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "cta-secondary",
                                        children: slide.ctaLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                                        lineNumber: 140,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                            lineNumber: 132,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                        lineNumber: 131,
                        columnNumber: 13
                    }, this)
                ]
            }, slide.id, true, {
                fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(StoresSlideshow, "tqI5RslTGVDAuq9aDlmVCnZoZD8=");
_c = StoresSlideshow;
var _c;
__turbopack_context__.k.register(_c, "StoresSlideshow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_0mf9fgx._.js.map