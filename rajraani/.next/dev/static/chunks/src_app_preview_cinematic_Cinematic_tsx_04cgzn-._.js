(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/preview/cinematic/Cinematic.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cinematic",
    ()=>Cinematic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const NAV = [
    {
        label: "Sarees",
        href: "/collections/sarees"
    },
    {
        label: "Suits",
        href: "/collections/suits"
    },
    {
        label: "Bridal",
        href: "/collections/bridal"
    },
    {
        label: "Campaigns",
        href: "/pages/kala"
    },
    {
        label: "Visit",
        href: "/pages/banaras-store"
    }
];
const SLIDE_MS = 7000;
/** Headline scale follows the title's length so short names land big. */ const titleSize = (title)=>title.length <= 8 ? "xl" : title.length <= 16 ? "lg" : "md";
/** True while the element is mostly on screen; drives entrances and autoplay. */ function useInView(threshold = 0.45) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const io = new IntersectionObserver({
                "useInView.useEffect": ([entry])=>setInView(Boolean(entry?.isIntersecting))
            }["useInView.useEffect"], {
                threshold
            });
            io.observe(el);
            return ({
                "useInView.useEffect": ()=>io.disconnect()
            })["useInView.useEffect"];
        }
    }["useInView.useEffect"], [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
_s(useInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
function Cinematic({ scenes }) {
    _s1();
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Cinematic.useEffect": ()=>{
            const root = rootRef.current;
            if (!root) return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
            const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]({
                duration: 1.25,
                easing: {
                    "Cinematic.useEffect": (t)=>1 - Math.pow(1 - t, 4)
                }["Cinematic.useEffect"]
            });
            const raf = {
                "Cinematic.useEffect.raf": (time)=>lenis.raf(time * 1000)
            }["Cinematic.useEffect.raf"];
            lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
            lenis.on("scroll", {
                "Cinematic.useEffect": ({ direction, scroll })=>{
                    headerRef.current?.toggleAttribute("data-hidden", direction === 1 && scroll > 140);
                    headerRef.current?.toggleAttribute("data-solid", scroll > window.innerHeight * 0.85);
                }
            }["Cinematic.useEffect"]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add(raf);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
            const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context({
                "Cinematic.useEffect.ctx": ()=>{
                    root.querySelectorAll("[data-scene]").forEach({
                        "Cinematic.useEffect.ctx": (scene)=>{
                            const media = scene.querySelector("[data-drift]");
                            if (!media) return;
                            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(media, {
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
                        }
                    }["Cinematic.useEffect.ctx"]);
                }
            }["Cinematic.useEffect.ctx"], root);
            return ({
                "Cinematic.useEffect": ()=>{
                    ctx.revert();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(raf);
                    lenis.destroy();
                }
            })["Cinematic.useEffect"];
        }
    }["Cinematic.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "cine bg-black text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: CSS
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                ref: headerRef,
                className: "cine-header",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cine-header__row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/preview/cinematic",
                            className: "cine-logo",
                            "aria-label": "Rajraani home",
                            children: "RAJRAANI"
                        }, void 0, false, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Main",
                            className: "cine-header__nav",
                            children: NAV.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: item.href,
                                    className: "cine-nav",
                                    children: item.label
                                }, item.href, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cine-header__end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/wishlist",
                                    className: "cine-nav cine-hide-sm",
                                    children: "Wishlist"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cart",
                                    className: "cine-nav",
                                    children: "Bag"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "cine-burger",
                                    "aria-label": "Open menu",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 118,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: scenes.map((scene)=>scene.kind === "slides" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SlidesScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 143,
                        columnNumber: 13
                    }, this) : scene.kind === "film" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 145,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShopScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 140,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "cine-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-footer__name",
                        children: "RAJRAANI"
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Footer",
                        className: "cine-footer__links",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/our-story",
                                children: "Our story"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/shipping",
                                children: "Shipping"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/returns",
                                children: "Returns"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/size-guide",
                                children: "Size guide"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/privacy",
                                children: "Privacy"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/pages/contact",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-footer__legal",
                        children: "© 2026 Rajraani Handloom Private Limited"
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s1(Cinematic, "BtB+CJu/ZPny4zxpzIcdWVuimlg=");
_c = Cinematic;
/* ── Words that rise ─────────────────────────────────────────────────────── */ function Headline({ text, as: Tag = "h2", live }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: `cine-title cine-title--${titleSize(text)} ${live ? "is-live" : ""}`,
        "aria-label": text,
        children: text.split(" ").map((word, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "cine-word",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        "--i": i
                    },
                    children: word
                }, void 0, false, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 175,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 174,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, this);
}
_c1 = Headline;
function Kicker({ text }) {
    if (!text) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "cine-kicker",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "cine-kicker__rule"
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            text
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_c2 = Kicker;
function Actions({ cta, secondary }) {
    const external = /^https?:\/\//.test(cta.href);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cine-actions",
        children: [
            external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: cta.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "cine-button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: cta.label
                }, void 0, false, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 198,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 197,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: cta.href,
                className: "cine-button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: cta.label
                }, void 0, false, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 202,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this),
            secondary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: secondary.href,
                className: "cine-link",
                children: secondary.label
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_c3 = Actions;
function Photo({ src, mobileSrc, priority, className = "", focus = "left" }) {
    if (!src) return null;
    const split = mobileSrc && mobileSrc !== src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: src,
                alt: "",
                fill: true,
                sizes: "100vw",
                priority: priority,
                className: `object-cover ${focus === "right" ? "object-[72%_50%]" : "object-[28%_50%]"} md:object-center ${split ? "hidden md:block" : ""} ${className}`
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            split ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: mobileSrc,
                alt: "",
                fill: true,
                sizes: "100vw",
                priority: priority,
                className: `object-cover md:hidden ${className}`
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 220,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_c4 = Photo;
/* ── A scene of slides that change in place ──────────────────────────────── */ function SlidesScene({ scene }) {
    _s2();
    const [ref, inView] = useInView(0.4);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [previous, setPrevious] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const count = scene.slides.length;
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SlidesScene.useCallback[go]": (to)=>{
            setActive({
                "SlidesScene.useCallback[go]": (current)=>{
                    const next = (to % count + count) % count;
                    if (next !== current) setPrevious(current);
                    return next;
                }
            }["SlidesScene.useCallback[go]"]);
        }
    }["SlidesScene.useCallback[go]"], [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SlidesScene.useEffect": ()=>{
            if (!inView || paused || count < 2) return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
            const timer = setTimeout({
                "SlidesScene.useEffect.timer": ()=>go(active + 1)
            }["SlidesScene.useEffect.timer"], SLIDE_MS);
            return ({
                "SlidesScene.useEffect": ()=>clearTimeout(timer)
            })["SlidesScene.useEffect"];
        }
    }["SlidesScene.useEffect"], [
        inView,
        paused,
        active,
        count,
        go
    ]);
    const slide = scene.slides[active];
    const right = slide.align === "right";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        "data-scene": true,
        className: `cine-scene cine-scene--${scene.transition}`,
        "aria-roledescription": "carousel",
        "aria-label": scene.slides.map((s)=>s.title).join(", "),
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-drift": true,
                className: "cine-media",
                children: scene.slides.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cine-layer",
                        "data-state": i === active ? "active" : i === previous ? "previous" : "idle",
                        "aria-hidden": i !== active,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `cine-layer__img ${i === active && inView ? "is-zooming" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                src: s.image,
                                mobileSrc: s.mobileImage,
                                priority: scene.isPageTitle && i === 0,
                                focus: s.align === "right" ? "left" : "right"
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this)
                    }, s.id, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 267,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: `cine-scrim ${right ? "cine-scrim--right" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `cine-copy ${right ? "cine-copy--right" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                        text: slide.kicker
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Headline, {
                        text: slide.title,
                        as: scene.isPageTitle ? "h1" : "h2",
                        live: inView
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    slide.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-body",
                        children: slide.body
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 284,
                        columnNumber: 23
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                        cta: slide.cta,
                        secondary: slide.secondary
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, slide.id, true, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            count > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `cine-chapters ${right ? "cine-chapters--left" : ""}`,
                children: [
                    scene.transition === "wipe" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cine-arrows",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>go(active - 1),
                                "aria-label": "Previous",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "10",
                                    height: "16",
                                    viewBox: "0 0 10 16",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.6",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M8.5 1 1.5 8l7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                        lineNumber: 293,
                                        columnNumber: 136
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 293,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 292,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>go(active + 1),
                                "aria-label": "Next",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "10",
                                    height: "16",
                                    viewBox: "0 0 10 16",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.6",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "m1.5 1 7 7-7 7"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                        lineNumber: 296,
                                        columnNumber: 136
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 291,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                        children: scene.slides.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>go(i),
                                    "aria-current": i === active ? "true" : undefined,
                                    "aria-label": `Show ${s.title}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "cine-chapter__bar",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: i === active ? inView && !paused ? "is-running" : "is-full" : i < active ? "is-full is-dim" : "",
                                                style: {
                                                    "--ms": `${SLIDE_MS}ms`
                                                }
                                            }, i === active ? `run-${active}-${paused}` : "rest", false, {
                                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                                lineNumber: 305,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                            lineNumber: 304,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "cine-chapter__name",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                            lineNumber: 311,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 303,
                                    columnNumber: 17
                                }, this)
                            }, s.id, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 302,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 300,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 256,
        columnNumber: 5
    }, this);
}
_s2(SlidesScene, "A/rweAw/yxKAn/D0+25PlQPtgOY=", false, function() {
    return [
        useInView
    ];
});
_c5 = SlidesScene;
/* ── The loom film, with its facts ───────────────────────────────────────── */ function FilmScene({ scene }) {
    _s3();
    const [ref, inView] = useInView(0.4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        "data-scene": true,
        className: "cine-scene",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-drift": true,
                className: "cine-media",
                children: scene.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    className: "h-full w-full object-cover",
                    src: scene.video,
                    autoPlay: true,
                    muted: true,
                    loop: true,
                    playsInline: true,
                    preload: "metadata"
                }, void 0, false, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 330,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                    src: scene.image
                }, void 0, false, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 332,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 328,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "cine-scrim cine-scrim--even"
            }, void 0, false, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cine-copy cine-copy--center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                        text: scene.kicker
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 337,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Headline, {
                        text: scene.title,
                        live: inView
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-body",
                        children: scene.body
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 339,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: `cine-facts ${inView ? "is-live" : ""}`,
                        children: scene.facts.map((fact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: fact.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                        lineNumber: 343,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: fact.figure
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, fact.label, true, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 342,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                        cta: scene.cta
                    }, void 0, false, {
                        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                        lineNumber: 348,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                lineNumber: 336,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
_s3(FilmScene, "GpcLnEGLCRT/LcXgsVwPMCbjDPg=", false, function() {
    return [
        useInView
    ];
});
_c6 = FilmScene;
/* ── Shop: tall strips that widen under the pointer ──────────────────────── */ function ShopScene({ scene }) {
    _s4();
    const [ref, inView] = useInView(0.35);
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        "data-scene": true,
        className: "cine-scene cine-shop",
        "aria-label": "Shop",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cine-shop__row",
            onMouseLeave: ()=>setHover(0),
            children: scene.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: `cine-strip ${hover === i ? "is-open" : ""}`,
                    onMouseEnter: ()=>setHover(i),
                    onFocus: ()=>setHover(i),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cine-strip__img",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                src: item.image
                            }, void 0, false, {
                                fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                lineNumber: 371,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 370,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "cine-scrim"
                        }, void 0, false, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 373,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cine-strip__copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                                    text: item.kicker
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 375,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Headline, {
                                    text: item.title,
                                    live: inView
                                }, void 0, false, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 376,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cine-strip__cta",
                                    children: [
                                        "Shop ",
                                        item.title.toLowerCase()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                            lineNumber: 374,
                            columnNumber: 13
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
                    lineNumber: 363,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
            lineNumber: 361,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/preview/cinematic/Cinematic.tsx",
        lineNumber: 360,
        columnNumber: 5
    }, this);
}
_s4(ShopScene, "aVyNgfLq46AOhZYC8M3dWxgLgJE=", false, function() {
    return [
        useInView
    ];
});
_c7 = ShopScene;
/* Scoped to this preview; nothing here touches the site's own styles. */ const CSS = `
.cine { font-family: var(--font-cine-text), system-ui, sans-serif; --ease: cubic-bezier(0.22, 1, 0.36, 1); --pad: max(24px, 4vw); }

/* Header */
.cine-header { position: fixed; inset: 0 0 auto; z-index: 50; transition: transform 600ms var(--ease), background-color 400ms ease; background: linear-gradient(to bottom, rgb(0 0 0 / 0.55), transparent); }
.cine-header[data-solid] { background: rgb(0 0 0 / 0.82); backdrop-filter: blur(10px); }
.cine-header[data-hidden] { transform: translateY(-100%); }
.cine-header__row { height: 88px; padding: 0 var(--pad); display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; }
.cine-header__nav { display: none; gap: 36px; }
.cine-header__end { display: flex; justify-content: flex-end; align-items: center; gap: 28px; }
@media (min-width: 1024px) { .cine-header__nav { display: flex; } }
@media (max-width: 1023px) { .cine-header__row { display: flex; justify-content: space-between; } }
@media (max-width: 767px) { .cine-header__row { height: 72px; } .cine-logo { font-size: 19px; letter-spacing: 0.3em; margin-right: 0; } .cine-header__end { gap: 20px; } }
.cine-logo { font-family: var(--font-cine-display); font-weight: 600; font-size: 24px; letter-spacing: 0.42em; margin-right: -0.42em; color: #fff; justify-self: start; }
.cine-nav { font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; opacity: 0.82; transition: opacity 200ms ease; }
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
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Cinematic");
__turbopack_context__.k.register(_c1, "Headline");
__turbopack_context__.k.register(_c2, "Kicker");
__turbopack_context__.k.register(_c3, "Actions");
__turbopack_context__.k.register(_c4, "Photo");
__turbopack_context__.k.register(_c5, "SlidesScene");
__turbopack_context__.k.register(_c6, "FilmScene");
__turbopack_context__.k.register(_c7, "ShopScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_preview_cinematic_Cinematic_tsx_04cgzn-._.js.map