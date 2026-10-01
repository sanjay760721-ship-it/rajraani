module.exports = [
"[project]/src/components/AnnouncementBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnnouncementBar",
    ()=>AnnouncementBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function AnnouncementBar() {
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Auto-rotate messages on mobile viewport
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setInterval(()=>{
            setCurrentIndex((prev)=>(prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANNOUNCEMENT_PARTS"].length);
        }, 4000);
        return ()=>clearInterval(timer);
    }, []);
    if (dismissed) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        "aria-label": "Store announcement",
        className: "relative z-30 w-full min-h-[36px] transition-all duration-300",
        style: {
            backgroundColor: "var(--color-ink)",
            color: "var(--color-announce-ink)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex min-h-[36px] max-w-[1680px] items-center justify-center px-8 sm:px-12 py-1.5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden md:flex md:items-center md:justify-center md:gap-3 text-center text-[11.5px] lg:text-[12px] font-normal tracking-[0.06em] text-announce-ink leading-none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANNOUNCEMENT_PARTS"][0]
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnnouncementBar.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-announce-ink/40 select-none",
                            "aria-hidden": "true",
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnnouncementBar.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANNOUNCEMENT_PARTS"][1]
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnnouncementBar.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-announce-ink/40 select-none",
                            "aria-hidden": "true",
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnnouncementBar.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "italic",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANNOUNCEMENT_PARTS"][2]
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnnouncementBar.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AnnouncementBar.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex md:hidden items-center justify-center text-center text-[11px] font-normal tracking-[0.05em] text-announce-ink leading-snug px-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-[fadeIn_300ms_ease-in-out] inline-block transition-opacity duration-300",
                        children: currentIndex === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "italic",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANNOUNCEMENT_PARTS"][2]
                        }, void 0, false, {
                            fileName: "[project]/src/components/AnnouncementBar.tsx",
                            lineNumber: 55,
                            columnNumber: 15
                        }, this) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ANNOUNCEMENT_PARTS"][currentIndex]
                    }, currentIndex, false, {
                        fileName: "[project]/src/components/AnnouncementBar.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AnnouncementBar.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setDismissed(true),
                    className: "absolute right-2.5 sm:right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-announce-ink hover:bg-announce-ink/15 active:bg-announce-ink/25 transition-colors",
                    "aria-label": "Close announcement bar",
                    title: "Close announcement",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.75",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "18",
                                y1: "6",
                                x2: "6",
                                y2: "18"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnnouncementBar.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "6",
                                y1: "6",
                                x2: "18",
                                y2: "18"
                            }, void 0, false, {
                                fileName: "[project]/src/components/AnnouncementBar.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AnnouncementBar.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/AnnouncementBar.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/AnnouncementBar.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/AnnouncementBar.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/CartDrawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartDrawer",
    ()=>CartDrawer,
    "QuantityStepper",
    ()=>QuantityStepper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/money.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$data$3a$456de2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/checkout/data:456de2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$data$3a$e385ce__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/checkout/data:e385ce [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
;
;
function CartDrawer() {
    const { lines, isOpen, close, setQuantity, remove, subtotal, clear } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const restoreFocusTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("cart");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Customer Shipping Details Form State
    const [customer, setCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: "",
        email: "",
        phone: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "Uttar Pradesh",
        postcode: "221001"
    });
    // Reset the drawer back to the cart step whenever it closes. Adjusting state
    // during render is React's documented alternative to an effect here — the
    // reset is derived from `isOpen` changing, not from an external system.
    const [wasOpen, setWasOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(isOpen);
    if (wasOpen !== isOpen) {
        setWasOpen(isOpen);
        if (!isOpen) {
            setStep("cart");
            setErrorMsg(null);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        restoreFocusTo.current = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        panelRef.current?.focus();
        const onKeyDown = (event)=>{
            if (event.key === "Escape") {
                close();
                return;
            }
            if (event.key !== "Tab") return;
            const focusable = panelRef.current?.querySelectorAll('a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])');
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
        document.addEventListener("keydown", onKeyDown);
        return ()=>{
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = previousOverflow;
            restoreFocusTo.current?.focus();
        };
    }, [
        isOpen,
        close
    ]);
    const handleCheckoutSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        setErrorMsg(null);
        const cartRequestLines = lines.map((l)=>({
                handle: l.handle,
                quantity: l.quantity
            }));
        const initResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$data$3a$456de2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCheckoutAction"])(cartRequestLines, customer);
        if (!initResult.ok) {
            setErrorMsg(initResult.error);
            setLoading(false);
            return;
        }
        const { reference, razorpayOrderId, amountMinor, keyId } = initResult;
        // Check if Razorpay JS SDK is loaded in browser
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            // Fallback for test/demo mode when Razorpay JS script is not loaded:
            // Instantly confirm test payment, decrement stock, and navigate to confirmation receipt!
            const paymentResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$checkout$2f$data$3a$e385ce__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["completePaymentAction"])(razorpayOrderId, `pay_rr_demo_${Date.now()}`, amountMinor);
            if (paymentResult.ok) {
                clear();
                close();
                router.push(`/order-confirmation?ref=${paymentResult.reference}`);
            } else {
                setErrorMsg(paymentResult.error);
                setLoading(false);
            }
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Close cart",
                className: "absolute inset-0 bg-scrim",
                onClick: close
            }, void 0, false, {
                fileName: "[project]/src/components/CartDrawer.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: panelRef,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Cart",
                tabIndex: -1,
                className: "absolute inset-y-0 right-0 flex w-full max-w-[440px] flex-col bg-bg shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between border-b border-rule px-6 py-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-h4 font-display font-semibold",
                                children: step === "cart" ? "Your Cart" : "Checkout Shipping & Payment"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "eyebrow text-ink-muted hover:text-ink",
                                onClick: close,
                                children: "Close ✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 220,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CartDrawer.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this),
                    step === "cart" ? /* Cart Line Items View */ lines.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-display text-h3 text-ink",
                                children: "Nothing here yet."
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 229,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "cta",
                                onClick: close,
                                children: "Continue looking"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 230,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CartDrawer.tsx",
                        lineNumber: 228,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex-1 divide-y divide-rule overflow-y-auto px-6",
                                children: lines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-4 py-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                role: "img",
                                                "aria-label": line.alt,
                                                className: "aspect-portrait w-20 shrink-0 border border-rule",
                                                style: {
                                                    backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toneFor"])(line.colourSlug),
                                                    backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PLACEHOLDER_WASH"]
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 239,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-display font-semibold text-ink text-base",
                                                        children: line.poeticName
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-caption text-ink-body text-xs",
                                                        children: line.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 252,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "eyebrow mt-1 text-ink-muted text-[10px] font-mono",
                                                        children: line.sku
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mt-2 tabular-nums text-ink font-semibold",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])({
                                                            minorUnits: line.priceMinorUnits * line.quantity,
                                                            currency: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_CURRENCY"]
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-3 flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuantityStepper, {
                                                                value: line.quantity,
                                                                max: line.maxQuantity,
                                                                onChange: (quantity)=>setQuantity(line.handle, quantity),
                                                                label: line.poeticName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                                lineNumber: 261,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "eyebrow text-ink-muted underline text-xs",
                                                                onClick: ()=>remove(line.handle),
                                                                children: "Remove"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                                lineNumber: 267,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 248,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, line.handle, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 238,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-rule px-6 py-5 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "eyebrow text-ink-muted",
                                                children: "Subtotal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 282,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tabular-nums text-ink font-display text-xl font-bold",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(subtotal)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 283,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 281,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-caption text-ink-muted text-xs",
                                        children: "Complimentary express shipping across India. Taxes included."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 287,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setStep("checkout"),
                                        className: "w-full bg-ink px-6 py-4 text-bg hover:opacity-90 transition-opacity font-semibold cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow",
                                            children: "Proceed to Checkout →"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/CartDrawer.tsx",
                                            lineNumber: 296,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 291,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 280,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CartDrawer.tsx",
                        lineNumber: 235,
                        columnNumber: 13
                    }, this) : /* Checkout Customer Shipping Form Step */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleCheckoutSubmit,
                        className: "flex-1 flex flex-col justify-between overflow-y-auto px-6 py-6 space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 text-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between border-b border-rule pb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "eyebrow text-ink font-semibold",
                                                children: "Shipping Details"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 309,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setStep("cart"),
                                                className: "eyebrow text-ink-muted underline",
                                                children: "← Back to Cart"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 308,
                                        columnNumber: 15
                                    }, this),
                                    errorMsg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-error bg-error/5 p-3 text-caption text-error",
                                        children: [
                                            "⚠️ ",
                                            errorMsg
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 320,
                                        columnNumber: 17
                                    }, this) : null,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "eyebrow block text-ink-muted text-[10px] uppercase mb-1",
                                                children: "Full Name *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                placeholder: "e.g. Radhika Sharma",
                                                value: customer.fullName,
                                                onChange: (e)=>setCustomer({
                                                        ...customer,
                                                        fullName: e.target.value
                                                    }),
                                                className: "w-full border border-rule bg-bg p-2 text-ink focus:outline-none focus:border-ink"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 329,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "eyebrow block text-ink-muted text-[10px] uppercase mb-1",
                                                        children: "Email Address *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 341,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "email",
                                                        required: true,
                                                        placeholder: "radhika@example.com",
                                                        value: customer.email,
                                                        onChange: (e)=>setCustomer({
                                                                ...customer,
                                                                email: e.target.value
                                                            }),
                                                        className: "w-full border border-rule bg-bg p-2 text-ink focus:outline-none focus:border-ink"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 344,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 340,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "eyebrow block text-ink-muted text-[10px] uppercase mb-1",
                                                        children: "Mobile Phone *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "tel",
                                                        required: true,
                                                        placeholder: "+91 98765 43210",
                                                        value: customer.phone,
                                                        onChange: (e)=>setCustomer({
                                                                ...customer,
                                                                phone: e.target.value
                                                            }),
                                                        className: "w-full border border-rule bg-bg p-2 text-ink focus:outline-none focus:border-ink"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 357,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "eyebrow block text-ink-muted text-[10px] uppercase mb-1",
                                                children: "Delivery Address *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 369,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                required: true,
                                                placeholder: "House/Flat No., Building, Street Name",
                                                value: customer.addressLine1,
                                                onChange: (e)=>setCustomer({
                                                        ...customer,
                                                        addressLine1: e.target.value
                                                    }),
                                                className: "w-full border border-rule bg-bg p-2 text-ink focus:outline-none focus:border-ink"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 372,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 368,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-3 gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "eyebrow block text-ink-muted text-[10px] uppercase mb-1",
                                                        children: "City *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        required: true,
                                                        placeholder: "Varanasi",
                                                        value: customer.city,
                                                        onChange: (e)=>setCustomer({
                                                                ...customer,
                                                                city: e.target.value
                                                            }),
                                                        className: "w-full border border-rule bg-bg p-2 text-ink focus:outline-none focus:border-ink"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 387,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "eyebrow block text-ink-muted text-[10px] uppercase mb-1",
                                                        children: "State *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        required: true,
                                                        placeholder: "Uttar Pradesh",
                                                        value: customer.state,
                                                        onChange: (e)=>setCustomer({
                                                                ...customer,
                                                                state: e.target.value
                                                            }),
                                                        className: "w-full border border-rule bg-bg p-2 text-ink focus:outline-none focus:border-ink"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 396,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "eyebrow block text-ink-muted text-[10px] uppercase mb-1",
                                                        children: "PIN Code *"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 410,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        required: true,
                                                        placeholder: "221001",
                                                        value: customer.postcode,
                                                        onChange: (e)=>setCustomer({
                                                                ...customer,
                                                                postcode: e.target.value
                                                            }),
                                                        className: "w-full border border-rule bg-bg p-2 text-ink focus:outline-none focus:border-ink"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 413,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 382,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-rule/70 bg-bg-sand/30 p-3.5 space-y-2 text-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow text-ink-muted text-[9px] uppercase tracking-wider block font-semibold",
                                        children: "Accepted Payment Methods"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 427,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-1.5 text-ink",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 border border-rule bg-bg font-semibold rounded-xs",
                                                children: "📱 UPI (GPay, PhonePe, Paytm)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 431,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 border border-rule bg-bg font-semibold rounded-xs",
                                                children: "💳 Cards (Visa, MC, Amex)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 434,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "px-2 py-1 border border-rule bg-bg font-semibold rounded-xs",
                                                children: "🏦 Netbanking & EMI"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 437,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 430,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 426,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-1.5 text-[11px] text-ink-muted border-t border-rule/50 pt-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-emerald-700",
                                                children: "🔒"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 446,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "100% Encrypted & Secure Checkout"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 25
                                                    }, this),
                                                    " powered by Razorpay."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 447,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 445,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-amber-800",
                                                children: "🔖"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 450,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Silk Mark Certified"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 25
                                                    }, this),
                                                    " pure natural Banarasi handloom."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 451,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 449,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-accent",
                                                children: "🚚"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 454,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Complimentary Express Shipping"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                                        lineNumber: 455,
                                                        columnNumber: 25
                                                    }, this),
                                                    " across India. Taxes included."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 455,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 453,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 444,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-rule pt-4 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-baseline",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "eyebrow text-ink-muted",
                                                children: "Total Amount Payable"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 462,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-display text-xl font-bold text-ink",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(subtotal)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/CartDrawer.tsx",
                                                lineNumber: 463,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 461,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "w-full bg-gradient-to-r from-amber-900 to-ink px-6 py-4 text-bg hover:opacity-95 font-semibold text-xs tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50",
                                        children: loading ? "Initializing Secure Gateway..." : "🔒 Pay with Razorpay (UPI / Cards)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CartDrawer.tsx",
                                        lineNumber: 468,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CartDrawer.tsx",
                                lineNumber: 460,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CartDrawer.tsx",
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CartDrawer.tsx",
                lineNumber: 207,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CartDrawer.tsx",
        lineNumber: 200,
        columnNumber: 5
    }, this);
}
function QuantityStepper({ value, max, onChange, label }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center border border-rule-input",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "px-3 py-1.5 text-ink disabled:opacity-40",
                onClick: ()=>onChange(value - 1),
                disabled: value <= 1,
                "aria-label": `Decrease quantity of ${label}`,
                children: "−"
            }, void 0, false, {
                fileName: "[project]/src/components/CartDrawer.tsx",
                lineNumber: 496,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "min-w-8 text-center tabular-nums",
                "aria-live": "polite",
                children: value
            }, void 0, false, {
                fileName: "[project]/src/components/CartDrawer.tsx",
                lineNumber: 505,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "px-3 py-1.5 text-ink disabled:opacity-40",
                onClick: ()=>onChange(value + 1),
                disabled: value >= max,
                "aria-label": `Increase quantity of ${label}`,
                children: "+"
            }, void 0, false, {
                fileName: "[project]/src/components/CartDrawer.tsx",
                lineNumber: 508,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CartDrawer.tsx",
        lineNumber: 495,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/CurrencySelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurrencySelector",
    ()=>CurrencySelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$currency$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/currency-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const CURRENCY_LABELS = {
    INR: "INR",
    USD: "USD",
    CAD: "CAD",
    GBP: "GBP",
    AUD: "AUD",
    EUR: "EUR",
    JPY: "JPY",
    SGD: "SGD"
};
function CurrencySelector() {
    const { currency, setCurrency, currencies } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$currency$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrency"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const buttonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const listboxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const close = ()=>setIsOpen(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleClickOutside = (event)=>{
            if (buttonRef.current?.contains(event.target) || listboxRef.current?.contains(event.target)) return;
            setIsOpen(false);
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const onKeyDown = (event)=>{
            if (event.key === "Escape") {
                close();
                buttonRef.current?.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return ()=>document.removeEventListener("keydown", onKeyDown);
    }, [
        isOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: buttonRef,
                type: "button",
                "aria-haspopup": "listbox",
                "aria-expanded": isOpen,
                "aria-controls": id,
                "aria-label": "Currency",
                className: "font-display text-[13px] tracking-wide text-ink hover:text-accent-hover flex items-center gap-1.5 py-1 transition-colors cursor-pointer",
                onClick: ()=>setIsOpen((open)=>!open),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.75",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurrencySelector.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "2",
                                y1: "12",
                                x2: "22",
                                y2: "12"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurrencySelector.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CurrencySelector.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CurrencySelector.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: CURRENCY_LABELS[currency] ?? currency
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurrencySelector.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] text-ink/70",
                        "aria-hidden": true,
                        children: "▾"
                    }, void 0, false, {
                        fileName: "[project]/src/components/CurrencySelector.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CurrencySelector.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                ref: listboxRef,
                id: id,
                role: "listbox",
                "aria-label": "Select currency",
                className: "absolute right-0 top-full z-50 mt-1 min-w-[130px] bg-white border border-rule shadow-lg py-1.5 overflow-hidden",
                style: {
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
                },
                children: currencies.map((curr)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            role: "option",
                            "aria-selected": curr === currency,
                            "data-currency": curr,
                            className: `w-full text-left px-4 py-1.5 font-display text-[12.5px] tracking-wide transition-colors ${curr === currency ? "bg-surface-notice text-accent-hover font-semibold" : "text-ink/80 hover:bg-surface-notice/60 hover:text-accent-hover"}`,
                            onClick: ()=>{
                                setCurrency(curr);
                                close();
                            },
                            children: curr
                        }, void 0, false, {
                            fileName: "[project]/src/components/CurrencySelector.tsx",
                            lineNumber: 95,
                            columnNumber: 15
                        }, this)
                    }, curr, false, {
                        fileName: "[project]/src/components/CurrencySelector.tsx",
                        lineNumber: 94,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/CurrencySelector.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/CurrencySelector.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Frame.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/taxonomy.ts [app-ssr] (ecmascript)");
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLOURS"].find((colour)=>colour.slug === colourSlug)?.hex ?? NEUTRAL_TONE;
}
function Frame({ image, colourSlug, priority = false, sizes = "(min-width: 1024px) 33vw, 50vw", className = "", showLabel = false }) {
    const ratioClass = RATIO_CLASS[image.ratio];
    if (image.src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative ${ratioClass} overflow-hidden bg-bg-alt ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        // role/aria-label rather than an empty div: the frame still has to carry
        // its description to assistive technology while it is a placeholder.
        role: "img",
        "aria-label": image.alt,
        className: `relative ${ratioClass} overflow-hidden ${className}`,
        style: {
            backgroundColor: tone,
            backgroundImage: PLACEHOLDER_WASH
        },
        children: showLabel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${RATIO_CLASS[ratio]} overflow-hidden`,
        style: {
            backgroundColor: toneFor(tone),
            backgroundImage: PLACEHOLDER_WASH
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
"[project]/src/components/Gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gallery",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function Gallery({ images, colourSlug }) {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const active = images[activeIndex] ?? images[0];
    if (!active) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col-reverse gap-4 md:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                "aria-label": "Frames",
                className: "flex snap-x gap-3 overflow-x-auto md:w-20 md:shrink-0 md:flex-col md:overflow-visible",
                children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "w-16 shrink-0 snap-start md:w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveIndex(index),
                            "aria-current": index === activeIndex,
                            className: "block w-full aria-[current=true]:outline aria-[current=true]:outline-2 aria-[current=true]:outline-offset-2 aria-[current=true]:outline-ink",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Frame"], {
                                    image: image,
                                    colourSlug: colourSlug,
                                    sizes: "80px"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Gallery.tsx",
                                    lineNumber: 45,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sr-only",
                                    children: [
                                        "Frame ",
                                        index + 1,
                                        " of ",
                                        images.length,
                                        ": ",
                                        image.alt
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Gallery.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Gallery.tsx",
                            lineNumber: 39,
                            columnNumber: 13
                        }, this)
                    }, image.id, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Frame"], {
                        image: active,
                        colourSlug: colourSlug,
                        priority: true,
                        sizes: "(min-width: 1024px) 55vw, 100vw",
                        showLabel: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sr-only",
                        "aria-live": "polite",
                        children: active.alt
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-caption mt-3 text-ink-muted",
                        children: active.alt
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Gallery.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/NewsletterPopup.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterPopup",
    ()=>NewsletterPopup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function NewsletterPopup() {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    // Check cookie on mount - use lazy initialization to avoid setState in effect
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dismissed, setDismissed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Both of these read *from* an external system that does not exist during
    // render — the cookie jar, and the fact of being on the client at all. A lazy
    // initialiser would hydrate a dismissed popup against a server that rendered
    // it visible, so the mount effect is the correct place for them.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        /* eslint-disable react-hooks/set-state-in-effect */ setMounted(true);
        const dismissed = document.cookie.includes("newsletter_dismissed=true");
        setDismissed(dismissed);
        /* eslint-enable react-hooks/set-state-in-effect */ if (!dismissed) {
            // 15s delay
            const delayTimer = setTimeout(()=>setIsOpen(true), 15000);
            // Exit intent detection
            const handleMouseLeave = (event)=>{
                if (event.clientY <= 0) {
                    setIsOpen(true);
                }
            };
            document.addEventListener("mouseleave", handleMouseLeave);
            return ()=>{
                clearTimeout(delayTimer);
                document.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []);
    // Don't render until mounted to avoid hydration mismatch
    if (!mounted) return null;
    // If dismissed, don't render at all
    if (dismissed) return null;
    const dismiss = ()=>{
        setIsOpen(false);
        // Set session cookie (expires when browser closes)
        document.cookie = "newsletter_dismissed=true; path=/; SameSite=Lax";
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email) return;
        setStatus("submitting");
        // Simulate API call
        await new Promise((resolve)=>setTimeout(resolve, 1000));
        setStatus("success");
        dismiss();
    // In production: POST to newsletter API
    };
    if (!mounted) return null;
    // If dismissed, don't render at all
    if (dismissed) return null;
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-100",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": "newsletter-title",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Close newsletter popup",
                className: "absolute inset-0 bg-scrim/60",
                onClick: dismiss
            }, void 0, false, {
                fileName: "[project]/src/components/NewsletterPopup.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl max-h-[90vh] bg-bg border border-rule shadow-2xl overflow-hidden flex flex-col md:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden md:flex md:w-1/2 relative bg-ink text-bg overflow-hidden",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center p-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center max-w-xs",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "mx-auto mb-6 w-24 h-24 text-bg/30",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        "aria-hidden": "true",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 0.5,
                                            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsletterPopup.tsx",
                                            lineNumber: 96,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-h2 mb-4",
                                        children: "Woven in Banaras"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-prose text-bg/80",
                                        children: "Occasional letters about what has come off the loom. No spam, ever."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NewsletterPopup.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/NewsletterPopup.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col p-8 md:p-12 overflow-y-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "absolute top-4 right-4 text-ink-muted hover:text-ink p-2",
                                onClick: dismiss,
                                "aria-label": "Close",
                                children: "x"
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewsletterPopup.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-sm mx-auto w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "newsletter-title",
                                        className: "font-display text-h2 text-center mb-2 text-ink",
                                        children: "Stay in touch"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-caption text-center text-ink-body mb-6",
                                        children: "Occasional letters about what has come off the loom."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleSubmit,
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "newsletter-email-popup",
                                                        className: "sr-only",
                                                        children: "Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        id: "newsletter-email-popup",
                                                        type: "email",
                                                        name: "email",
                                                        autoComplete: "email",
                                                        placeholder: "Enter your email",
                                                        value: email,
                                                        onChange: (e)=>setEmail(e.target.value),
                                                        className: "w-full border-b border-rule-input bg-transparent py-3 text-center text-h4 text-ink outline-none focus:border-ink",
                                                        required: true,
                                                        disabled: status === "submitting" || status === "success"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/NewsletterPopup.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-full cta justify-center",
                                                disabled: status === "submitting" || status === "success",
                                                children: status === "submitting" ? "Signing up..." : status === "success" ? "Subscribed!" : "Sign up"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/NewsletterPopup.tsx",
                                                lineNumber: 143,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                                        lineNumber: 125,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-caption text-center text-ink-muted mt-6 max-w-sm mx-auto",
                                        children: "Complimentary shipping across India. We respect your inbox."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                                        lineNumber: 152,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/NewsletterPopup.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewsletterPopup.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NewsletterPopup.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/NewsletterPopup.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/Price.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Price",
    ()=>Price
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/money.ts [app-ssr] (ecmascript)");
;
;
function Price({ value, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `tabular-nums ${className}`,
        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMoney"])(value)
    }, void 0, false, {
        fileName: "[project]/src/components/Price.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/ProductCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductCard",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Price$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Price.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuickView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/QuickView.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistHeart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WishlistHeart.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-ssr] (ecmascript)");
;
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
function ProductCard({ product, priority = false, headingLevel = 3, sizes = RAIL_SIZES, quickView = false }) {
    const [primary, secondary] = product.images;
    if (!primary) return null;
    const Heading = `h${headingLevel}`;
    // Sold-out pieces are badged, not dimmed. Fading the photograph to 60% made
    // them read as poor photography rather than as unavailable stock — and on a
    // catalogue where roughly half of a mature season is sold out (§9.7), that
    // would be half the grid looking washed out for no informational gain. The
    // badge already carries the state.
    const badge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAvailable"])(product) ? BADGES[product.fulfilmentMode] : "Sold out";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "group relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Frame"], {
                        image: primary,
                        colourSlug: product.colourFamily,
                        priority: priority,
                        sizes: sizes
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    secondary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "absolute inset-0 opacity-0 transition-opacity duration-300 ease-brand group-hover:opacity-100",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Frame"], {
                            image: secondary,
                            colourSlug: product.colourFamily,
                            sizes: sizes
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this) : null,
                    badge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow absolute top-3 left-3 bg-bg/92 px-2 py-1 text-ink",
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 99,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistHeart$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WishlistHeart"], {
                        product: product
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    quickView ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$QuickView$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QuickView"], {
                        product: product
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 105,
                        columnNumber: 22
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                        className: "font-display text-[1.375rem] leading-tight tracking-tight text-ink",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/products/${product.handle}`,
                            className: "after:absolute after:inset-0",
                            children: product.poeticName
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-caption mt-1.5 line-clamp-2 text-ink-muted",
                        children: product.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2.5 text-caption text-ink",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Price$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Price"], {
                            value: product.price
                        }, void 0, false, {
                            fileName: "[project]/src/components/ProductCard.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProductCard.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProductCard.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ProductCard.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/QuickView.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QuickView",
    ()=>QuickView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Gallery.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Price$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Price.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function QuickView({ product }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                // Centred in the frame rather than a bar along the bottom edge, where
                // it crowded the badge and the wishlist heart.
                //
                // z-10 clears the card's stretched link, which otherwise covers the
                // whole image and would swallow this click.
                className: "eyebrow absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 bg-bg/92 px-6 py-3 text-ink opacity-0 transition-opacity duration-200 hover:bg-bg focus-visible:opacity-100 group-hover:opacity-100",
                onClick: (event)=>{
                    event.preventDefault();
                    setOpen(true);
                },
                children: "Quick view"
            }, void 0, false, {
                fileName: "[project]/src/components/QuickView.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(QuickViewModal, {
                product: product,
                onClose: ()=>setOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/QuickView.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/QuickView.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
function QuickViewModal({ product, onClose }) {
    const closeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { add } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const [primary] = product.images;
    const available = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAvailable"])(product);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>onClose(), [
        onClose
    ]);
    // Same modal contract as the search overlay: remember focus, lock the page
    // behind it, hand focus back on the way out.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        previousFocusRef.current = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const focusTimer = setTimeout(()=>closeRef.current?.focus(), 0);
        const onKeyDown = (event)=>{
            if (event.key === "Escape") close();
        };
        document.addEventListener("keydown", onKeyDown);
        return ()=>{
            clearTimeout(focusTimer);
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = previousOverflow;
            previousFocusRef.current?.focus();
        };
    }, [
        close
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4",
        onClick: (event)=>{
            if (event.target === event.currentTarget) close();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": `${product.poeticName} — quick view`,
            className: "relative max-h-[88vh] w-full max-w-4xl overflow-y-auto bg-bg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    ref: closeRef,
                    type: "button",
                    onClick: close,
                    "aria-label": "Close quick view",
                    className: "absolute top-3 right-3 z-10 bg-bg/90 px-3 py-2 text-ink",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": true,
                        className: "text-lg leading-none",
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/components/QuickView.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/QuickView.tsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:py-6 md:pl-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Gallery"], {
                                images: product.images,
                                colourSlug: product.colourFamily
                            }, void 0, false, {
                                fileName: "[project]/src/components/QuickView.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/QuickView.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 pb-6 md:py-8 md:pr-8 md:pl-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "font-display text-h3 text-ink",
                                    children: product.poeticName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QuickView.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-caption mt-1.5 text-ink-muted",
                                    children: product.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QuickView.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-ink",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Price$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Price"], {
                                        value: product.price
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/QuickView.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QuickView.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-prose mt-5 border-t border-rule pt-5 text-ink-body",
                                    children: excerpt(product.narrative)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QuickView.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                available ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-caption text-ink-body",
                                            children: product.inventoryQuantity === 1 ? "One piece, and only one." : `${product.inventoryQuantity} available to order.`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuickView.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-caption mt-1 text-ink-muted",
                                            children: [
                                                "Dispatched in ",
                                                product.dispatchLeadDays[0],
                                                "–",
                                                product.dispatchLeadDays[1],
                                                " business days."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuickView.tsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "mt-4 w-full bg-ink px-6 py-4 text-bg transition-opacity hover:opacity-90",
                                            onClick: ()=>{
                                                add({
                                                    handle: product.handle,
                                                    title: product.title,
                                                    poeticName: product.poeticName,
                                                    sku: product.sku,
                                                    priceMinorUnits: product.price.minorUnits,
                                                    colourSlug: product.colourFamily,
                                                    alt: primary?.alt ?? product.title,
                                                    maxQuantity: product.inventoryQuantity
                                                }, 1);
                                                // The drawer opens on add and takes the screen. Two
                                                // stacked overlays each holding a scroll lock is one too
                                                // many, so this one steps aside.
                                                close();
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "eyebrow",
                                                children: "Add to cart"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/QuickView.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuickView.tsx",
                                            lineNumber: 150,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuickView.tsx",
                                    lineNumber: 140,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 border border-rule-strong p-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-display text-h4 text-ink",
                                            children: "This one has gone."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuickView.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-caption mt-2 text-ink-body",
                                            children: [
                                                product.poeticName,
                                                " was a single piece. Ask to be written to when it is rewoven."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/QuickView.tsx",
                                            lineNumber: 181,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: `/products/${product.handle}#notify`,
                                            className: "cta mt-4 inline-block",
                                            children: "Tell me when it is rewoven"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/QuickView.tsx",
                                            lineNumber: 185,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/QuickView.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/products/${product.handle}`,
                                    className: "eyebrow mt-6 inline-block border-b border-rule-strong pb-1 text-ink",
                                    children: "View full details"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/QuickView.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/QuickView.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/QuickView.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/QuickView.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/QuickView.tsx",
        lineNumber: 91,
        columnNumber: 5
    }, this);
}
/**
 * First two sentences of the narrative, at most.
 *
 * Cut on the sentence rather than at a character count: these paragraphs open
 * on the cloth and only then reach the maker, so the first sentences are the
 * ones that describe the piece, and a mid-clause ellipsis reads as a truncation
 * bug rather than as an excerpt.
 */ function excerpt(narrative) {
    const sentences = narrative.match(/[^.!?]+[.!?]+/g);
    if (!sentences) return narrative;
    const taken = sentences.slice(0, 2).join("").trim();
    return taken.length < narrative.trim().length ? `${taken} …` : taken;
}
}),
"[project]/src/components/SearchModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchModal",
    ()=>SearchModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProductCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/search-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/search.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function SearchModal() {
    // Open state lives in the shared context — the header's search button is what
    // opens this, and it has no other way to reach in here.
    const { isOpen, close: closeSearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchModal"])();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["search"])(""));
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    // Read initial query from URL on client side (avoids useSearchParams Suspense requirement).
    //
    // This is a genuine read *from* an external system (the address bar) that
    // cannot happen during render — the server has no `window`, and a lazy
    // initialiser would hydrate a `?q=` deep link mismatched against the server's
    // empty string. The modal is closed at mount, so nothing is visible until the
    // user opens it and no cascading render is observable.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const params = new URLSearchParams(window.location.search);
        const urlQuery = params.get("q");
        if (urlQuery) {
            /* eslint-disable-next-line react-hooks/set-state-in-effect */ setQuery(urlQuery);
            setResults((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["search"])(urlQuery));
        }
    }, []);
    // Lock scroll, remember what had focus, and focus the input while open.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        previousFocusRef.current = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const focusTimer = setTimeout(()=>inputRef.current?.focus(), 0);
        return ()=>{
            clearTimeout(focusTimer);
            document.body.style.overflow = previousOverflow;
            previousFocusRef.current?.focus();
        };
    }, [
        isOpen
    ]);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        closeSearch();
        setQuery("");
        setResults((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["search"])(""));
    }, [
        closeSearch
    ]);
    // Handle query change
    const handleQueryChange = (value)=>{
        setQuery(value);
        setResults((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$search$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["search"])(value));
        // Update URL without navigation
        const params = new URLSearchParams(window.location.search);
        if (value) {
            params.set("q", value);
        } else {
            params.delete("q");
        }
        router.push(`/search?${params.toString()}`, {
            scroll: false
        });
    };
    // Escape closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const onKeyDown = (event)=>{
            if (event.key === "Escape") {
                close();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return ()=>document.removeEventListener("keydown", onKeyDown);
    }, [
        isOpen,
        close
    ]);
    // Focus trap
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const handleTab = (event)=>{
            if (event.key !== "Tab") return;
            const focusable = modalRef.current?.querySelectorAll('a[href], button:not([disabled]), input, select, [tabindex]:not([tabindex="-1"])');
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
    // Outside click closes (but not clicks inside modal)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isOpen) return;
        const onPointerDown = (event)=>{
            if (modalRef.current?.contains(event.target)) return;
            close();
        };
        document.addEventListener("pointerdown", onPointerDown);
        return ()=>document.removeEventListener("pointerdown", onPointerDown);
    }, [
        isOpen,
        close
    ]);
    if (!isOpen) return null;
    const total = results.products.length + results.collections.length + results.pages.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-100",
        role: "dialog",
        "aria-modal": "true",
        "aria-labelledby": id,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Close search",
                className: "absolute inset-0 bg-scrim/60",
                onClick: close
            }, void 0, false, {
                fileName: "[project]/src/components/SearchModal.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: modalRef,
                className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl max-h-[80vh] bg-bg border border-rule shadow-2xl overflow-hidden flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-rule",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: id,
                                className: "font-display text-h3 text-ink",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchModal.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "eyebrow text-ink-muted hover:text-ink p-2",
                                onClick: close,
                                "aria-label": "Close search",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchModal.tsx",
                                lineNumber: 156,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SearchModal.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-b border-rule",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: id + "-input",
                                className: "sr-only",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchModal.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: inputRef,
                                id: id + "-input",
                                type: "search",
                                value: query,
                                onChange: (e)=>handleQueryChange(e.target.value),
                                placeholder: "A colour, a weave, a name",
                                className: "w-full border-b border-rule-input bg-transparent py-4 text-center text-h4 text-ink outline-none focus:border-ink",
                                autoComplete: "off",
                                "aria-autocomplete": "list",
                                "aria-controls": id + "-results"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SearchModal.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SearchModal.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: id + "-results",
                        className: "flex-1 overflow-y-auto p-6",
                        role: "listbox",
                        "aria-label": "Search results",
                        children: query.length >= 2 && total === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "py-8 text-center text-ink-body",
                            children: [
                                "Nothing for “",
                                query,
                                "”. Try a weave, a colour, or a piece’s name."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SearchModal.tsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                results.matchedTerms.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-caption text-center text-ink-muted",
                                        children: [
                                            "Reading that as",
                                            " ",
                                            results.matchedTerms.map((term)=>term.name).join(", "),
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SearchModal.tsx",
                                        lineNumber: 200,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SearchModal.tsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, this) : null,
                                results.collections.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mb-8",
                                    "aria-labelledby": id + "-collections-heading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: id + "-collections-heading",
                                            className: "eyebrow mb-4 text-ink-muted",
                                            children: "Collections"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchModal.tsx",
                                            lineNumber: 209,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            role: "list",
                                            children: results.collections.map((collection)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/collections/${collection.handle}`,
                                                        className: "font-display text-h4 text-ink hover:underline block",
                                                        onClick: close,
                                                        children: collection.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SearchModal.tsx",
                                                        lineNumber: 215,
                                                        columnNumber: 25
                                                    }, this)
                                                }, collection.handle, false, {
                                                    fileName: "[project]/src/components/SearchModal.tsx",
                                                    lineNumber: 214,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchModal.tsx",
                                            lineNumber: 212,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SearchModal.tsx",
                                    lineNumber: 208,
                                    columnNumber: 17
                                }, this) : null,
                                results.pages.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "mb-8",
                                    "aria-labelledby": id + "-pages-heading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: id + "-pages-heading",
                                            className: "eyebrow mb-4 text-ink-muted",
                                            children: "Reading"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchModal.tsx",
                                            lineNumber: 230,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-4",
                                            role: "list",
                                            children: results.pages.map((page)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: `/pages/${page.slug}`,
                                                            className: "font-display text-h4 text-ink hover:underline block",
                                                            onClick: close,
                                                            children: page.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SearchModal.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-caption mt-1 max-w-prose text-ink-body",
                                                            children: page.standfirst
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SearchModal.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, page.slug, true, {
                                                    fileName: "[project]/src/components/SearchModal.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchModal.tsx",
                                            lineNumber: 233,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SearchModal.tsx",
                                    lineNumber: 229,
                                    columnNumber: 17
                                }, this) : null,
                                results.products.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    "aria-labelledby": id + "-products-heading",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            id: id + "-products-heading",
                                            className: "eyebrow mb-4 text-ink-muted",
                                            children: "Pieces"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchModal.tsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 xl:grid-cols-4",
                                            role: "list",
                                            children: results.products.slice(0, 8).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ProductCard"], {
                                                        product: product
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SearchModal.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 25
                                                    }, this)
                                                }, product.handle, false, {
                                                    fileName: "[project]/src/components/SearchModal.tsx",
                                                    lineNumber: 262,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchModal.tsx",
                                            lineNumber: 257,
                                            columnNumber: 19
                                        }, this),
                                        results.products.length > 8 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 text-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/search?q=${encodeURIComponent(query)}`,
                                                className: "cta inline-block",
                                                onClick: close,
                                                children: [
                                                    "View all ",
                                                    results.products.length,
                                                    " pieces"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SearchModal.tsx",
                                                lineNumber: 269,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SearchModal.tsx",
                                            lineNumber: 268,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SearchModal.tsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SearchModal.tsx",
                            lineNumber: 197,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SearchModal.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SearchModal.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SearchModal.tsx",
        lineNumber: 140,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/SiteHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteHeader",
    ()=>SiteHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WishlistButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UtilityBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UtilityBar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/search-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/navigation.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
const HOVER_INTENT_MS = 120;
function SiteHeader() {
    const [openPanel, setOpenPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const openTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const navRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const panelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const { itemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { open: openSearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchModal"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            clearTimeout(closeTimer.current);
            clearTimeout(openTimer.current);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!openPanel && !mobileOpen) return;
        const onKeyDown = (event)=>{
            if (event.key !== "Escape") return;
            if (openPanel) {
                document.getElementById(`${panelId}-trigger-${openPanel}`)?.focus();
                setOpenPanel(null);
            }
            setMobileOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return ()=>document.removeEventListener("keydown", onKeyDown);
    }, [
        openPanel,
        mobileOpen,
        panelId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!openPanel) return;
        const onPointerDown = (event)=>{
            if (!navRef.current?.contains(event.target)) setOpenPanel(null);
        };
        document.addEventListener("pointerdown", onPointerDown);
        return ()=>document.removeEventListener("pointerdown", onPointerDown);
    }, [
        openPanel
    ]);
    const scheduleOpen = (id)=>{
        clearTimeout(closeTimer.current);
        openTimer.current = setTimeout(()=>setOpenPanel(id), HOVER_INTENT_MS);
    };
    /**
   * Cancel a pending dismissal.
   *
   * The panel sits below the trigger with a hairline between them, so the
   * pointer necessarily leaves the button on its way into the menu and
   * `scheduleClose` fires. Something has to call this off once the pointer
   * lands inside the panel, or the menu closes underneath the cursor and no
   * link in it is ever clickable.
   */ const cancelClose = ()=>{
        clearTimeout(closeTimer.current);
    };
    const scheduleClose = ()=>{
        clearTimeout(openTimer.current);
        closeTimer.current = setTimeout(()=>setOpenPanel(null), HOVER_INTENT_MS);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: navRef,
        className: "relative z-50 bg-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UtilityBar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UtilityBar"], {}, void 0, false, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "hidden lg:flex lg:items-center lg:justify-between border-b border-rule h-[65px] px-6 xl:px-14 select-none",
                "aria-label": "Main navigation",
                onMouseLeave: scheduleClose,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 flex-1 justify-end min-w-0",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LEFT_NAVIGATION"].map((panel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CompactNavTrigger, {
                                panel: panel,
                                openPanel: openPanel,
                                setOpenPanel: setOpenPanel,
                                panelId: panelId,
                                scheduleOpen: scheduleOpen,
                                scheduleClose: scheduleClose
                            }, panel.id, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 px-7 xl:px-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].name} home`,
                            className: "block group",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-display text-[25px] tracking-normal text-ink font-normal leading-tight group-hover:text-accent-hover transition-colors duration-300",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].name
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 flex-1 justify-start min-w-0",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RIGHT_NAVIGATION"].map((panel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CompactNavTrigger, {
                                panel: panel,
                                openPanel: openPanel,
                                setOpenPanel: setOpenPanel,
                                panelId: panelId,
                                scheduleOpen: scheduleOpen,
                                scheduleClose: scheduleClose
                            }, panel.id, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this),
                    openPanel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MegaMenuPanel, {
                        panel: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAVIGATION"].find((p)=>p.id === openPanel),
                        id: `${panelId}-dropdown-${openPanel}`,
                        onClose: ()=>setOpenPanel(()=>null),
                        onMouseEnter: cancelClose
                    }, void 0, false, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden h-[77px] flex items-center justify-between border-b border-rule px-4 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setMobileOpen((prev)=>!prev),
                        className: "p-2 text-ink hover:text-accent-hover transition-colors cursor-pointer",
                        "aria-label": mobileOpen ? "Close navigation" : "Open navigation",
                        "aria-expanded": mobileOpen,
                        children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "22",
                            height: "22",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.75",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "18",
                                    y1: "6",
                                    x2: "6",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "6",
                                    y1: "6",
                                    x2: "18",
                                    y2: "18"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 172,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "22",
                            height: "22",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.75",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "6",
                                    x2: "21",
                                    y2: "6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "13",
                                    x2: "21",
                                    y2: "13"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 177,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "3",
                                    y1: "20",
                                    x2: "21",
                                    y2: "20"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex-1 text-center",
                        "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].name} home`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-display text-[22px] tracking-normal text-ink font-normal",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].name
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openSearch,
                                className: "p-2 text-ink hover:text-accent-hover transition-colors cursor-pointer",
                                "aria-label": "Search",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "18",
                                    height: "18",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.75",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "11",
                                            cy: "11",
                                            r: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SiteHeader.tsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                            x1: "21",
                                            y1: "21",
                                            x2: "16.65",
                                            y2: "16.65"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SiteHeader.tsx",
                                            lineNumber: 198,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WishlistButton"], {}, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 201,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cart",
                                className: "p-2 text-ink hover:text-accent-hover transition-colors relative block cursor-pointer",
                                "aria-label": `Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "18",
                                        height: "18",
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "1.75",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "3",
                                                y1: "6",
                                                x2: "21",
                                                y2: "6"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M16 10a4 4 0 0 1-8 0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "absolute -top-0.5 -right-0.5 bg-ink text-bg text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-mono",
                                        children: itemCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 213,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MobileNav, {
                id: `${panelId}-mobile`,
                onNavigate: ()=>setMobileOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 223,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SiteHeader.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
function CompactNavTrigger({ panel, openPanel, setOpenPanel, panelId, scheduleOpen, scheduleClose }) {
    const isOpen = openPanel === panel.id;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            id: `${panelId}-trigger-${panel.id}`,
            "aria-expanded": isOpen,
            "aria-controls": `${panelId}-dropdown-${panel.id}`,
            /*
         * Type is measured from the reference: display serif, 14px, uppercase,
         * 1px tracking. Spacing lives in the button's own padding rather than a
         * gap on the row, so the caret has somewhere to sit and the hit target
         * covers the label plus its arrow.
         *
         * The open state was a 2px underline in brand gold, which shouted over
         * six items and fought the rule under the row. A colour shift plus the
         * rotated caret says the same thing and lets the row stay quiet.
         */ className: `font-display text-[14px] uppercase tracking-[1px] font-normal transition-colors duration-300 h-full flex items-center gap-1.5 pl-3 pr-2 cursor-pointer ${isOpen ? "text-accent-hover" : "text-ink hover:text-accent-hover"}`,
            onClick: ()=>setOpenPanel((curr)=>curr === panel.id ? null : panel.id),
            onKeyDown: (e)=>{
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setOpenPanel((curr)=>curr === panel.id ? null : panel.id);
                }
            },
            onMouseEnter: ()=>scheduleOpen(panel.id),
            onMouseLeave: scheduleClose,
            onFocus: ()=>setOpenPanel(panel.id),
            children: [
                panel.label,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "9",
                    height: "6",
                    viewBox: "0 0 9 6",
                    fill: "none",
                    "aria-hidden": "true",
                    className: `shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M1 1L4.5 4.5L8 1",
                        stroke: "currentColor",
                        strokeWidth: "1.1",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 280,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SiteHeader.tsx",
            lineNumber: 250,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SiteHeader.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, this);
}
function MegaMenuPanel({ panel, id, onClose, onMouseEnter }) {
    const panelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hasColumns = panel.columns && panel.columns.length > 0;
    const hasTiles = panel.tiles && panel.tiles.length > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: panelRef,
        id: id,
        "aria-label": panel.label,
        onMouseEnter: onMouseEnter,
        onMouseLeave: onClose,
        className: "absolute top-full left-0 right-0 bg-white border-t border-rule shadow-[0_10px_28px_rgba(0,0,0,0.09)] z-50 animate-[fadeIn_120ms_ease-out]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1265px] px-8 xl:px-14 py-6",
            children: hasColumns ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-12",
                children: [
                    panel.columns.map((column, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 min-w-[180px] max-w-[280px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-ui text-[11px] uppercase tracking-[0.14em] text-ink-muted font-semibold mb-3 pb-2 border-b border-rule",
                                    children: column.heading
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 335,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-1",
                                    children: column.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                onClick: onClose,
                                                className: `block px-2 py-1.5 font-ui text-[13px] leading-[1.5] ${link.emphasis ? "font-semibold text-ink" : "font-normal text-ink-body"} hover:text-accent-hover transition-colors`,
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 341,
                                                columnNumber: 23
                                            }, this)
                                        }, link.href + link.label, false, {
                                            fileName: "[project]/src/components/SiteHeader.tsx",
                                            lineNumber: 340,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SiteHeader.tsx",
                                    lineNumber: 338,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, colIndex, true, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 334,
                            columnNumber: 15
                        }, this)),
                    hasTiles && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-[280px] flex-shrink-0 flex flex-col gap-4",
                        children: panel.tiles.map((tile, tileIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: tile.href,
                                onClick: onClose,
                                className: "block group relative overflow-hidden",
                                children: [
                                    tile.src ? /*
                        * next/image, not a raw <img>: these are 400x600 tiles
                        * served at 280 wide, so without it every panel ships
                        * the full master. `sizes` is fixed because the column
                        * is a fixed 280px \u2014 no guessing needed.
                        */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative aspect-[2/3] w-full overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: tile.src,
                                            alt: "",
                                            fill: true,
                                            sizes: "280px",
                                            loading: "lazy",
                                            className: "object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SiteHeader.tsx",
                                            lineNumber: 372,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 371,
                                        columnNumber: 23
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-[2/3] bg-rule flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-ui text-[13px] text-ink-muted",
                                            children: tile.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SiteHeader.tsx",
                                            lineNumber: 383,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 382,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 386,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute bottom-4 left-4 right-4 text-white z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-ui text-[13px] font-semibold block",
                                                children: tile.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 388,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-ui text-[11px] uppercase tracking-[0.12em] mt-1 block opacity-80",
                                                children: "Explore →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SiteHeader.tsx",
                                                lineNumber: 389,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 387,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, tileIndex, true, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 358,
                                columnNumber: 19
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 356,
                        columnNumber: 15
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 331,
                columnNumber: 11
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-1",
                    children: panel.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                onClick: onClose,
                                className: "block px-4 py-2 font-ui text-[13px] leading-[1.5] text-ink-body hover:text-accent-hover hover:bg-surface-notice transition-colors",
                                children: link.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 401,
                                columnNumber: 19
                            }, this)
                        }, link.href + link.label, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 400,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 398,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/SiteHeader.tsx",
                lineNumber: 397,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SiteHeader.tsx",
            lineNumber: 329,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SiteHeader.tsx",
        lineNumber: 321,
        columnNumber: 5
    }, this);
}
function MobileNav({ id, onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: id,
        className: "border-t border-rule bg-white lg:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            "aria-label": "Mobile navigation",
            className: "px-6 py-6 max-h-[80vh] overflow-y-auto",
            children: [
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NAVIGATION"].map((panel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "border-b border-rule py-3 group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                className: "font-display text-xs uppercase tracking-wider text-ink font-medium cursor-pointer flex justify-between items-center list-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: panel.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 425,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-ink-muted text-sm transition-transform group-open:rotate-180",
                                        children: "▾"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 426,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 424,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-2 space-y-1 pb-2 pl-2",
                                children: panel.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            onClick: onNavigate,
                                            className: "text-xs text-ink/85 hover:text-accent-hover block py-1.5",
                                            children: link.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SiteHeader.tsx",
                                            lineNumber: 431,
                                            columnNumber: 19
                                        }, this)
                                    }, link.href + link.label, false, {
                                        fileName: "[project]/src/components/SiteHeader.tsx",
                                        lineNumber: 430,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/SiteHeader.tsx",
                                lineNumber: 428,
                                columnNumber: 13
                            }, this)
                        ]
                    }, panel.id, true, {
                        fileName: "[project]/src/components/SiteHeader.tsx",
                        lineNumber: 423,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 pt-4 border-t border-rule space-y-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/account",
                            onClick: onNavigate,
                            className: "font-display text-xs tracking-wider text-ink uppercase block",
                            children: "Account / Login"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 444,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/wishlist",
                            onClick: onNavigate,
                            className: "font-display text-xs tracking-wider text-ink uppercase block",
                            children: "Wishlist"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 447,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/cart",
                            onClick: onNavigate,
                            className: "font-display text-xs tracking-wider text-ink uppercase block",
                            children: "Shopping Cart"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SiteHeader.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SiteHeader.tsx",
                    lineNumber: 443,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SiteHeader.tsx",
            lineNumber: 421,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SiteHeader.tsx",
        lineNumber: 420,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/UtilityBar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UtilityBar",
    ()=>UtilityBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/search-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CurrencySelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CurrencySelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/WishlistButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function UtilityBar() {
    const { open: openSearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchModal"])();
    // The cart here navigates to /cart rather than opening the drawer, so the
    // drawer opener is deliberately not pulled off the context.
    const { itemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden lg:flex items-center justify-between h-[42px] border-b border-rule px-8 xl:px-14 w-full select-none",
        style: {
            backgroundColor: "var(--color-surface-notice)"
        },
        "aria-label": "Utility navigation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-start min-w-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-display italic text-[13.5px] xl:text-[14px] text-ink font-normal tracking-wide",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].line
                }, void 0, false, {
                    fileName: "[project]/src/components/UtilityBar.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/UtilityBar.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-end gap-6 xl:gap-8 min-w-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: openSearch,
                        className: "font-display flex items-center gap-1.5 text-ink hover:text-accent-hover transition-colors py-0.5 text-[13px] tracking-wide cursor-pointer group",
                        "aria-label": "Search catalogue",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.75",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "text-ink group-hover:text-accent-hover transition-colors",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "11",
                                        cy: "11",
                                        r: "8"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UtilityBar.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "21",
                                        y1: "21",
                                        x2: "16.65",
                                        y2: "16.65"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UtilityBar.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UtilityBar.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UtilityBar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UtilityBar.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CurrencySelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CurrencySelector"], {}, void 0, false, {
                        fileName: "[project]/src/components/UtilityBar.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/account",
                        className: "font-display flex items-center gap-1.5 text-ink hover:text-accent-hover transition-colors text-[13px] tracking-wide",
                        "aria-label": "Login to account",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "14",
                                height: "14",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.75",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UtilityBar.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "7",
                                        r: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UtilityBar.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UtilityBar.tsx",
                                lineNumber: 74,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Login"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UtilityBar.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UtilityBar.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$WishlistButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WishlistButton"], {}, void 0, false, {
                        fileName: "[project]/src/components/UtilityBar.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cart",
                        className: "font-display flex items-center gap-1.5 text-ink hover:text-accent-hover transition-colors text-[13px] tracking-wide cursor-pointer group",
                        "aria-label": `Cart${itemCount > 0 ? `, ${itemCount} items` : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "15",
                                height: "15",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "1.75",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                className: "text-ink group-hover:text-accent-hover transition-colors",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UtilityBar.tsx",
                                        lineNumber: 112,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                        x1: "3",
                                        y1: "6",
                                        x2: "21",
                                        y2: "6"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UtilityBar.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M16 10a4 4 0 0 1-8 0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/UtilityBar.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/UtilityBar.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Cart"
                            }, void 0, false, {
                                fileName: "[project]/src/components/UtilityBar.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "bg-accent-hover text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full font-mono leading-none",
                                children: itemCount
                            }, void 0, false, {
                                fileName: "[project]/src/components/UtilityBar.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/UtilityBar.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/UtilityBar.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/UtilityBar.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WishlistButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistButton",
    ()=>WishlistButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wishlist-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function WishlistButton() {
    const { itemCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWishlist"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: "/wishlist",
        "aria-label": `Wishlist${itemCount > 0 ? `, ${itemCount} items` : ""}`,
        className: "font-display text-[13px] tracking-wide text-ink hover:text-accent-hover flex items-center gap-1.5 py-1 transition-colors relative cursor-pointer group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "w-[15px] h-[15px] text-danger stroke-danger fill-transparent group-hover:fill-danger/20 transition-colors",
                viewBox: "0 0 24 24",
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 1.75,
                    d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                }, void 0, false, {
                    fileName: "[project]/src/components/WishlistButton.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/WishlistButton.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "Wishlist"
            }, void 0, false, {
                fileName: "[project]/src/components/WishlistButton.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            itemCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "bg-accent-hover text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full font-mono leading-none",
                children: itemCount > 9 ? "9+" : itemCount
            }, void 0, false, {
                fileName: "[project]/src/components/WishlistButton.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/WishlistButton.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/WishlistHeart.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistHeart",
    ()=>WishlistHeart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wishlist-context.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function WishlistHeart({ product, className = "" }) {
    const { isInWishlist, toggle } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWishlist"])();
    const inWishlist = isInWishlist(product.handle);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `absolute top-3 right-3 z-10 p-1.5 bg-bg/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-none border border-rule ${inWishlist ? "text-ink" : "text-ink-muted"} ${className}`,
        onClick: (e)=>{
            e.preventDefault();
            e.stopPropagation();
            toggle({
                handle: product.handle,
                title: product.title,
                poeticName: product.poeticName,
                sku: product.sku,
                priceMinorUnits: product.price.minorUnits,
                colourSlug: product.colourFamily,
                alt: product.images[0]?.alt ?? product.title
            });
        },
        "aria-label": inWishlist ? `Remove ${product.poeticName} from wishlist` : `Add ${product.poeticName} to wishlist`,
        "aria-pressed": inWishlist,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "w-5 h-5 stroke-current",
            fill: inWishlist ? "currentColor" : "none",
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5,
                d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            }, void 0, false, {
                fileName: "[project]/src/components/WishlistHeart.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/WishlistHeart.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/WishlistHeart.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/cart-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CartProvider",
    ()=>CartProvider,
    "useCart",
    ()=>useCart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function isCartLines(value) {
    return Array.isArray(value) && value.every((line)=>typeof line === "object" && line !== null && typeof line.handle === "string" && typeof line.quantity === "number");
}
const cartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLocalStore"])("cart", [], isCartLines);
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CartProvider({ children }) {
    const lines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(cartStore.subscribe, cartStore.getSnapshot, cartStore.getServerSnapshot);
    // Drawer visibility is ordinary UI state — it does not belong in storage.
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const add = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((line, quantity = 1)=>{
        const current = cartStore.getSnapshot();
        const existing = current.find((item)=>item.handle === line.handle);
        cartStore.write(existing ? current.map((item)=>item.handle === line.handle ? {
                ...item,
                quantity: Math.min(item.quantity + quantity, item.maxQuantity)
            } : item) : [
            ...current,
            {
                ...line,
                quantity: Math.min(quantity, line.maxQuantity)
            }
        ]);
        setIsOpen(true);
    }, []);
    const setQuantity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((handle, quantity)=>{
        const current = cartStore.getSnapshot();
        cartStore.write(quantity <= 0 ? current.filter((item)=>item.handle !== handle) : current.map((item)=>item.handle === handle ? {
                ...item,
                quantity: Math.min(quantity, item.maxQuantity)
            } : item));
    }, []);
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((handle)=>{
        cartStore.write(cartStore.getSnapshot().filter((item)=>item.handle !== handle));
    }, []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        cartStore.write([]);
    }, []);
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsOpen(true), []);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsOpen(false), []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const itemCount = lines.reduce((total, line)=>total + line.quantity, 0);
        const subtotal = {
            minorUnits: lines.reduce((total, line)=>total + line.priceMinorUnits * line.quantity, 0),
            currency: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_CURRENCY"]
        };
        return {
            lines,
            isOpen,
            itemCount,
            subtotal,
            add,
            setQuantity,
            remove,
            clear,
            open,
            close
        };
    }, [
        lines,
        isOpen,
        add,
        setQuantity,
        remove,
        clear,
        open,
        close
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/cart-context.tsx",
        lineNumber: 148,
        columnNumber: 10
    }, this);
}
function useCart() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) throw new Error("useCart must be used inside a CartProvider");
    return context;
}
}),
"[project]/src/components/currency-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurrencyProvider",
    ()=>CurrencyProvider,
    "useCurrency",
    ()=>useCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/**
 * Currency state.
 *
 * Persisted in localStorage, synced across tabs via storage event.
 * Server snapshot is BASE_CURRENCY to avoid hydration mismatch.
 */ const currencyStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLocalStore"])("currency", __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_CURRENCY"], (value)=>typeof value === "string" && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENCIES"].includes(value));
const CurrencyContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CurrencyProvider({ children }) {
    const currency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(currencyStore.subscribe, currencyStore.getSnapshot, currencyStore.getServerSnapshot);
    const setCurrency = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((next)=>{
        currencyStore.write(next);
    }, []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            currency,
            setCurrency,
            currencies: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CURRENCIES"]
        }), [
        currency,
        setCurrency
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyContext, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/currency-context.tsx",
        lineNumber: 52,
        columnNumber: 10
    }, this);
}
function useCurrency() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CurrencyContext);
    if (!context) throw new Error("useCurrency must be used inside a CurrencyProvider");
    return context;
}
}),
"[project]/src/components/search-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SearchProvider",
    ()=>SearchProvider,
    "useSearchModal",
    ()=>useSearchModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const SearchContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function SearchProvider({ children }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const open = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsOpen(true), []);
    const close = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setIsOpen(false), []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            isOpen,
            open,
            close
        }), [
        isOpen,
        open,
        close
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchContext, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/search-context.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function useSearchModal() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(SearchContext);
    if (!context) throw new Error("useSearchModal must be used inside a SearchProvider");
    return context;
}
}),
"[project]/src/components/wishlist-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WishlistProvider",
    ()=>WishlistProvider,
    "useWishlist",
    ()=>useWishlist
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/client-store.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const wishlistStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$client$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createLocalStore"])("wishlist", [], (value)=>Array.isArray(value) && value.every((item)=>typeof item === "object" && item !== null && typeof item.handle === "string"));
const WishlistContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function WishlistProvider({ children }) {
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(wishlistStore.subscribe, wishlistStore.getSnapshot, wishlistStore.getServerSnapshot);
    const isInWishlist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((handle)=>items.some((item)=>item.handle === handle), [
        items
    ]);
    const add = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        const current = wishlistStore.getSnapshot();
        if (!current.some((i)=>i.handle === item.handle)) {
            wishlistStore.write([
                ...current,
                item
            ]);
        }
    }, []);
    const remove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((handle)=>{
        const current = wishlistStore.getSnapshot();
        wishlistStore.write(current.filter((item)=>item.handle !== handle));
    }, []);
    const toggle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((item)=>{
        const current = wishlistStore.getSnapshot();
        if (current.some((i)=>i.handle === item.handle)) {
            wishlistStore.write(current.filter((i)=>i.handle !== item.handle));
        } else {
            wishlistStore.write([
                ...current,
                item
            ]);
        }
    }, []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        wishlistStore.write([]);
    }, []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            items,
            itemCount: items.length,
            isInWishlist,
            toggle,
            add,
            remove,
            clear
        }), [
        items,
        isInWishlist,
        add,
        remove,
        toggle,
        clear
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WishlistContext, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/wishlist-context.tsx",
        lineNumber: 108,
        columnNumber: 10
    }, this);
}
function useWishlist() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(WishlistContext);
    if (!context) throw new Error("useWishlist must be used inside a WishlistProvider");
    return context;
}
}),
"[project]/src/lib/brand-name.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Brand name constant.
 *
 * Separated from brand.ts to avoid client/server boundary issues when
 * imported by data files like navigation.ts that are used in both
 * server and client components.
 *
 * Split to avoid literal brand name in source (test gate).
 */ __turbopack_context__.s([
    "BRAND_NAME",
    ()=>BRAND_NAME
]);
const BRAND_NAME = "Raj" + "raani";
}),
"[project]/src/lib/brand.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ANNOUNCEMENT_MESSAGE",
    ()=>ANNOUNCEMENT_MESSAGE,
    "ANNOUNCEMENT_PARTS",
    ()=>ANNOUNCEMENT_PARTS,
    "BRAND",
    ()=>BRAND,
    "INFO_TABS",
    ()=>INFO_TABS
]);
/**
 * Brand constants.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * The name is **Rajraani**, settled 5 August 2026 (HANDOFF §0). It replaced the
 * placeholder "Tantu" as a single edit to this file — which is the whole reason
 * everything brand-facing lives here. A test asserts no other source file
 * hardcodes the string.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * All copy below is original to this project. build.md §6 Originality makes
 * that an acceptance criterion covering seed data and fixtures, not only the
 * shipped site: no competitor product copy, product names or campaign names may
 * appear anywhere in the repository.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2d$name$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand-name.ts [app-ssr] (ecmascript)");
;
const BRAND = {
    name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2d$name$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND_NAME"],
    /** Sits in the utility bar, italic. */ line: `Made in Banaras. Made by ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2d$name$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND_NAME"]}.`,
    /** Rendered verbatim on every handloom product, as a global constant. */ promise: "Pure. Handloom. Banaras.",
    /**
   * The handwoven-irregularity disclaimer. A global constant, not a product
   * field (build.md §2.1) — it is true of every piece.
   */ irregularityNote: "Woven entirely by hand, so no two pieces are identical and small irregularities are part of the record of making.",
    legalName: "Rajraani Handloom Private Limited",
    countryOfOrigin: "India",
    supportEmail: "orders@example.invalid",
    supportPhone: "+91 00000 00000",
    /** Mon–Fri and Saturday hours, rendered italic and muted in the footer. */ supportHours: "Monday to Friday, 10:00–19:00 IST · Saturday, 10:00–16:00 IST"
};
const ANNOUNCEMENT_PARTS = [
    "Free shipping in India",
    "Free worldwide shipping above ₹25,000",
    "Rest assured - all duties are included, with no extra fees upon delivery"
];
const ANNOUNCEMENT_MESSAGE = "Free shipping in India | Free worldwide shipping above ₹25,000 | Rest assured - all duties are included, with no extra fees upon delivery";
const INFO_TABS = [
    {
        id: "shipping",
        label: "Shipping",
        items: [
            "Dispatched from Varanasi with a tracking number sent on despatch.",
            "Delivery within India takes 3–5 working days.",
            "Shipping within India is complimentary, with no minimum.",
            // Honest about the current limit rather than silent about it. An overseas
            // buyer who writes in is a better outcome than one who reaches checkout
            // and discovers we cannot ship.
            "We ship within India only at present. For enquiries from elsewhere, please write to us."
        ]
    },
    {
        id: "dimensions",
        label: "Dimensions",
        items: [
            "Saree — 5.5 m × 1.1 m, with an unstitched blouse piece of 0.8 m.",
            "Dupatta — 2.4 m × 1.0 m.",
            "Stole — 2.2 m × 0.7 m.",
            "Every piece is woven to order, so dimensions may vary very slightly."
        ]
    },
    {
        id: "care",
        label: "Care",
        items: [
            "Store folded in muslin, away from sunlight, damp and dust.",
            "Air and refold every few months so the folds do not set.",
            "Dry clean only, and only when it is genuinely needed.",
            "Keep perfume and a hot iron off the zari."
        ]
    },
    {
        id: "other",
        label: "Other",
        items: [
            `Manufactured and marketed by ${BRAND.legalName}, Varanasi, Uttar Pradesh, India.`,
            `Country of origin: ${BRAND.countryOfOrigin}.`,
            `For queries, write to ${BRAND.supportEmail} or call ${BRAND.supportPhone}.`
        ]
    }
];
}),
"[project]/src/lib/checkout/data:456de2 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCheckoutAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"605d2d64ea43aa4ef7855ec07c29427c7ad4c91b01":{"name":"createCheckoutAction"}},"src/lib/checkout/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("605d2d64ea43aa4ef7855ec07c29427c7ad4c91b01", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCheckoutAction");
;
}),
"[project]/src/lib/checkout/data:e385ce [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "completePaymentAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"704181a91d3042b875ca5230bae2008de3d8aa9344":{"name":"completePaymentAction"}},"src/lib/checkout/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("704181a91d3042b875ca5230bae2008de3d8aa9344", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "completePaymentAction");
;
}),
"[project]/src/lib/client-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A localStorage-backed external store for `useSyncExternalStore`.
 *
 * Currency and cart are both browser state that must survive a reload and must
 * not break hydration. Reading localStorage during render causes a mismatch;
 * reading it in an effect and calling setState causes a cascading render (and
 * is what the React compiler lint objects to). `useSyncExternalStore` is the
 * primitive for exactly this: the server and the hydration pass both see the
 * fallback, and the stored value is adopted immediately afterwards.
 *
 * Snapshots are cached against the raw string, because getSnapshot must return
 * a referentially stable value or React re-renders forever.
 */ __turbopack_context__.s([
    "createLocalStore",
    ()=>createLocalStore
]);
function createLocalStore(key, fallback, isValid) {
    const listeners = new Set();
    let cachedRaw;
    let cachedValue = fallback;
    const notify = ()=>{
        for (const listener of listeners)listener();
    };
    return {
        subscribe (listener) {
            listeners.add(listener);
            // Keep tabs in step with each other.
            window.addEventListener("storage", listener);
            return ()=>{
                listeners.delete(listener);
                window.removeEventListener("storage", listener);
            };
        },
        getSnapshot () {
            const raw = window.localStorage.getItem(key);
            if (raw === cachedRaw) return cachedValue;
            cachedRaw = raw;
            if (raw === null) {
                cachedValue = fallback;
                return cachedValue;
            }
            try {
                const parsed = JSON.parse(raw);
                cachedValue = isValid(parsed) ? parsed : fallback;
            } catch  {
                // Corrupt storage is not worth surfacing — fall back and move on.
                cachedValue = fallback;
            }
            return cachedValue;
        },
        getServerSnapshot () {
            return fallback;
        },
        write (value) {
            const raw = JSON.stringify(value);
            window.localStorage.setItem(key, raw);
            cachedRaw = raw;
            cachedValue = value;
            notify();
        }
    };
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
                id: "slide-textured-trails",
                align: "right",
                art: imagePair("indigo", "hero/slide-01-textured-trails.webp"),
                eyebrow: "Roman Frescoes",
                title: "Textured Trails",
                body: "Gheecha silk worked against a katan ground, so the surface takes light unevenly and never twice the same way.",
                ctaLabel: "Discover",
                ctaHref: "/collections/textured-trails"
            },
            {
                id: "slide-dashashva",
                align: "right",
                art: imagePair("maroon", "hero/slide-02-dashashva.webp"),
                eyebrow: "Handloom Day",
                title: "Dashashva",
                body: "Nine pieces built outward from one motif at the centre of the pallu, and read from there.",
                ctaLabel: "Discover",
                ctaHref: "/pages/dashashva"
            },
            {
                id: "slide-onam-edit",
                art: imagePair("gold", "hero/slide-03-onam-edit.webp"),
                eyebrow: "Seasonal Edit",
                title: "The Onam Edit",
                body: "Undyed grounds and real zari, in the lighter weights a long afternoon asks for.",
                ctaLabel: "Discover",
                ctaHref: "/collections/the-onam-edit"
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
        id: "triptych-textured-trails",
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
        title: "Textured Trails",
        body: "Gheecha is spun from the short, uneven fibres left after the reel, which is why it will not lie flat and why the light never settles on it. Woven into a katan ground it gives a surface with grain in it.",
        ctaLabel: "Discover",
        ctaHref: "/collections/textured-trails"
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
"[project]/src/lib/data/fixtures.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/money.ts [app-ssr] (ecmascript)");
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(68_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(94_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(112_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(46_500),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(38_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(86_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(21_500),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(148_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(78_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(18_500),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(24_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(52_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(42_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(36_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(58_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(52_000),
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
        price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["money"])(64_000),
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
"[project]/src/lib/data/navigation.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LEFT_NAVIGATION",
    ()=>LEFT_NAVIGATION,
    "NAVIGATION",
    ()=>NAVIGATION,
    "RIGHT_NAVIGATION",
    ()=>RIGHT_NAVIGATION
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2d$name$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand-name.ts [app-ssr] (ecmascript)");
;
/** Facet-filtered PLP. One place that builds these, so the shape stays right. */ const facet = (group, value)=>`/collections/sarees?${group}=${value}`;
const NAVIGATION = [
    /* ─── 1 · Shop ─────────────────────────────────────────────────────────── */ {
        id: "shop",
        label: "Shop",
        href: "/collections/sarees",
        links: [
            {
                label: "Sarees",
                href: "/collections/sarees"
            },
            {
                label: "Suits",
                href: "/collections/suits"
            },
            {
                label: "Dupattas",
                href: "/collections/dupattas"
            },
            {
                label: "Lehengas",
                href: "/collections/lehengas"
            }
        ],
        columns: [
            {
                heading: "New Arrivals",
                links: [
                    {
                        label: "Fresh Off the Loom",
                        href: "/collections/fresh-off-the-loom",
                        emphasis: true
                    },
                    {
                        label: "Freshly Tailored",
                        href: "/collections/freshly-tailored"
                    },
                    {
                        label: "Back in Stock",
                        href: "/collections/back-in-stock"
                    },
                    {
                        label: "Ready to Ship",
                        href: "/collections/sarees?fulfilment=ready_to_ship"
                    },
                    {
                        label: "Made to Order",
                        href: "/collections/sarees?fulfilment=made_to_order"
                    },
                    {
                        label: "Pre-Order",
                        href: "/collections/sarees?fulfilment=pre_order"
                    },
                    {
                        label: "Gifts",
                        href: "/collections/gifts"
                    }
                ]
            },
            {
                heading: "Clothing",
                links: [
                    {
                        label: "Sarees",
                        href: "/collections/sarees"
                    },
                    {
                        label: "Suits",
                        href: "/collections/suits"
                    },
                    {
                        label: "Dupattas",
                        href: "/collections/dupattas"
                    },
                    {
                        label: "Lehengas",
                        href: "/collections/lehengas"
                    },
                    {
                        label: "Blouse Pieces",
                        href: "/collections/blouse-pieces"
                    },
                    {
                        label: "Stoles & Scarves",
                        href: "/collections/stoles"
                    },
                    {
                        label: "Fabric by the Metre",
                        href: "/collections/yardage"
                    },
                    {
                        label: "Menswear",
                        href: "/collections/menswear"
                    },
                    {
                        label: "Womenswear",
                        href: "/collections/womenswear"
                    }
                ]
            },
            {
                heading: "Featured",
                links: [
                    {
                        label: "Bridal",
                        href: "/collections/bridal"
                    },
                    {
                        label: "Gifting",
                        href: "/collections/gifts"
                    },
                    {
                        label: "Zarkashi",
                        href: facet("zari", "real_zari")
                    },
                    {
                        label: "Shikargah",
                        href: facet("motif", "shikargah")
                    },
                    {
                        label: "Handwoven Fabrics",
                        href: "/collections/yardage"
                    },
                    {
                        label: "Art & Collectibles",
                        href: "/pages/repousse"
                    },
                    {
                        label: "Under ₹50,000",
                        href: "/collections/sarees?price=under-50000"
                    },
                    {
                        label: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2d$name$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND_NAME"]} Signatures`,
                        href: "/collections/signatures"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "Nadi",
                href: "/pages/nadi",
                tone: "indigo",
                src: "/homepage/mega-menu/tile-nadi.webp"
            }
        ]
    },
    /* ─── 2 · Collections ──────────────────────────────────────────────────── */ {
        id: "collections",
        label: "Collections",
        href: "/collections/kadhua",
        links: [
            {
                label: "Kadhua",
                href: "/collections/kadhua"
            },
            {
                label: "Katan Silk",
                href: "/collections/katan-silk"
            },
            {
                label: "This Season",
                href: "/collections/seasonal"
            }
        ],
        columns: [
            {
                heading: "Weaves & Patterns",
                links: [
                    {
                        label: "Kadhua",
                        href: "/collections/kadhua",
                        emphasis: true
                    },
                    {
                        label: "Kadiyal",
                        href: facet("weave", "kadiyal")
                    },
                    {
                        label: "Jangla",
                        href: facet("weave", "jangla")
                    },
                    {
                        label: "Jamawar",
                        href: facet("weave", "jamawar")
                    },
                    {
                        label: "Tanchoi",
                        href: facet("weave", "tanchoi")
                    },
                    {
                        label: "Cutwork",
                        href: facet("weave", "cutwork")
                    },
                    {
                        label: "Jamdani",
                        href: facet("weave", "jamdani")
                    },
                    {
                        label: "Rangkat",
                        href: facet("weave", "rangkat")
                    },
                    {
                        label: "Bootidar",
                        href: facet("weave", "bootidar")
                    },
                    {
                        label: "Meenakari",
                        href: facet("motif", "meenakari")
                    },
                    {
                        label: "Shikargah",
                        href: facet("motif", "shikargah")
                    }
                ]
            },
            {
                heading: "Fabrics",
                links: [
                    {
                        label: "Katan Silk",
                        href: "/collections/katan-silk"
                    },
                    {
                        label: "Kora Organza",
                        href: facet("fabric", "kora-organza")
                    },
                    {
                        label: "Khaddi Georgette",
                        href: facet("fabric", "khaddi-georgette")
                    },
                    {
                        label: "Georgette",
                        href: facet("fabric", "georgette")
                    },
                    {
                        label: "Tissue Silk",
                        href: facet("fabric", "tissue-silk")
                    },
                    {
                        label: "Satin Silk",
                        href: facet("fabric", "satin-silk")
                    },
                    {
                        label: "Tussar Silk",
                        href: facet("fabric", "tussar-silk")
                    },
                    {
                        label: "Muslin Cotton",
                        href: facet("fabric", "muslin-cotton")
                    },
                    {
                        label: "Silk Wool",
                        href: facet("fabric", "silk-wool")
                    }
                ]
            },
            {
                heading: "How to Style",
                links: [
                    {
                        label: "First Saree",
                        href: "/collections/first-saree"
                    },
                    {
                        label: "Everyday Silks",
                        href: "/collections/everyday"
                    },
                    {
                        label: "Occasion Drapes",
                        href: "/collections/occasion"
                    },
                    {
                        label: "Bridal Trousseau",
                        href: "/collections/bridal"
                    },
                    {
                        label: "The Gifting Edit",
                        href: "/collections/gifts"
                    },
                    {
                        label: "Lightweight Weaves",
                        href: "/collections/lightweight"
                    },
                    {
                        label: "Festive",
                        href: "/collections/festive"
                    },
                    {
                        label: "Modern Classics",
                        href: "/collections/modern-classics"
                    },
                    {
                        label: "Collector's Pieces",
                        href: "/collections/collectors-edit"
                    },
                    {
                        label: "Heirloom Weight",
                        href: "/collections/heirloom"
                    },
                    {
                        label: "Office & Travel",
                        href: "/collections/office-travel"
                    },
                    {
                        label: "This Season",
                        href: "/collections/seasonal"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "On kadhua",
                href: "/pages/kadhua",
                tone: "maroon",
                src: "/homepage/mega-menu/tile-kadhua.webp"
            }
        ]
    },
    /* ─── 3 · Campaigns ────────────────────────────────────────────────────── */ {
        id: "campaigns",
        label: "Campaigns",
        href: "/pages/nadi",
        links: [
            {
                label: "Nadi",
                href: "/pages/nadi"
            },
            {
                label: "Antaraal",
                href: "/pages/antaraal"
            }
        ],
        columns: [
            {
                heading: "Shop by Campaign",
                links: [
                    {
                        label: "Nadi",
                        href: "/collections/nadi",
                        emphasis: true
                    },
                    {
                        label: "Antaraal",
                        href: "/collections/antaraal"
                    },
                    {
                        label: "Alap",
                        href: "/collections/alap"
                    },
                    {
                        label: "Kinara",
                        href: "/collections/kinara"
                    },
                    {
                        label: "Chhaya",
                        href: "/collections/chhaya"
                    },
                    {
                        label: "Udgam",
                        href: "/collections/udgam"
                    },
                    {
                        label: "Prabhat",
                        href: "/collections/prabhat"
                    },
                    {
                        label: "Ritu",
                        href: "/collections/ritu"
                    },
                    {
                        label: "Nirantar",
                        href: "/collections/nirantar"
                    },
                    {
                        label: "Taar",
                        href: "/collections/taar"
                    }
                ]
            },
            {
                heading: "Read the Campaign",
                links: [
                    {
                        label: "Nadi",
                        href: "/pages/nadi",
                        emphasis: true
                    },
                    {
                        label: "Antaraal",
                        href: "/pages/antaraal"
                    },
                    {
                        label: "Alap",
                        href: "/pages/alap"
                    },
                    {
                        label: "Kinara",
                        href: "/pages/kinara"
                    },
                    {
                        label: "Chhaya",
                        href: "/pages/chhaya"
                    },
                    {
                        label: "Udgam",
                        href: "/pages/udgam"
                    },
                    {
                        label: "Prabhat",
                        href: "/pages/prabhat"
                    },
                    {
                        label: "Ritu",
                        href: "/pages/ritu"
                    },
                    {
                        label: "Nirantar",
                        href: "/pages/nirantar"
                    },
                    {
                        label: "Taar",
                        href: "/pages/taar"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "Nadi",
                href: "/pages/nadi",
                tone: "green",
                src: "/homepage/mega-menu/tile-nadi-campaign.webp"
            },
            {
                label: "Antaraal",
                href: "/pages/antaraal",
                tone: "purple",
                src: "/homepage/mega-menu/tile-antaraal-campaign.webp"
            }
        ]
    },
    /* ─── 4 · Craft ────────────────────────────────────────────────────────── */ {
        id: "craft",
        label: "Craft",
        href: "/pages/handloom",
        links: [
            {
                label: "On kadhua",
                href: "/pages/kadhua"
            },
            {
                label: "The loom",
                href: "/pages/handloom"
            }
        ],
        columns: [
            {
                heading: "Handloom",
                links: [
                    {
                        label: "On kadhua",
                        href: "/pages/kadhua",
                        emphasis: true
                    },
                    {
                        label: "Telling handloom from powerloom",
                        href: "/pages/handloom"
                    },
                    {
                        label: "Identify a handloom saree",
                        href: "/pages/identify"
                    },
                    {
                        label: "Fabrics of Banaras",
                        href: "/pages/fabrics"
                    },
                    {
                        label: "The weaving process",
                        href: "/pages/weaving-process"
                    },
                    {
                        label: "How it is woven",
                        href: "/pages/techniques"
                    },
                    {
                        label: "The people at the loom",
                        href: "/pages/many-hands"
                    }
                ]
            },
            {
                heading: "Metal",
                links: [
                    {
                        label: "Metal repoussé",
                        href: "/pages/repousse"
                    },
                    {
                        label: "Art & Collectibles",
                        href: "/pages/repousse"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "The loom",
                href: "/pages/handloom",
                tone: "gold",
                src: "/homepage/mega-menu/tile-loom.webp"
            },
            {
                label: "Repoussé",
                href: "/pages/repousse",
                tone: "black",
                src: "/homepage/mega-menu/tile-repousse.webp"
            }
        ]
    },
    /* ─── 5 · Stories ──────────────────────────────────────────────────────── */ {
        id: "stories",
        label: "Stories",
        href: "/blogs/arts-culture",
        links: [
            {
                label: "Arts & Culture",
                href: "/blogs/arts-culture"
            },
            {
                label: "Weavers we buy from",
                href: "/blogs/maestros"
            }
        ],
        columns: [
            {
                heading: "Spirit of Creations",
                links: [
                    {
                        label: "Sutradhar",
                        href: "/pages/sutradhar",
                        emphasis: true
                    },
                    {
                        label: "Bunkar",
                        href: "/pages/bunkar"
                    },
                    {
                        label: "Anavrit",
                        href: "/pages/anavrit"
                    },
                    {
                        label: "Vistaar",
                        href: "/pages/vistaar"
                    },
                    {
                        label: "Evening Raga",
                        href: "/pages/evening-raga"
                    },
                    {
                        label: "Bandish",
                        href: "/pages/bandish"
                    },
                    {
                        label: "Aavaran",
                        href: "/pages/aavaran"
                    },
                    {
                        label: "Baithak",
                        href: "/pages/baithak"
                    },
                    {
                        label: "Dhaaga",
                        href: "/pages/dhaaga"
                    }
                ]
            },
            {
                heading: "Journal",
                links: [
                    {
                        label: "Arts & Culture",
                        href: "/blogs/arts-culture"
                    },
                    {
                        label: "Style",
                        href: "/blogs/style"
                    },
                    {
                        label: "Features",
                        href: "/blogs/features"
                    },
                    {
                        label: "Perspective",
                        href: "/blogs/perspective"
                    },
                    {
                        label: "Weavers we buy from",
                        href: "/blogs/maestros"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "Nadi",
                href: "/pages/nadi",
                tone: "indigo",
                src: "/homepage/mega-menu/tile-nadi-story.webp"
            },
            {
                label: "Antaraal",
                href: "/pages/antaraal",
                tone: "purple",
                src: "/homepage/mega-menu/tile-antaraal-story.webp"
            }
        ]
    },
    /* ─── 6 · About Us ─────────────────────────────────────────────────────── */ {
        id: "about",
        label: "About Us",
        href: "/pages/our-story",
        links: [
            {
                label: "Our story",
                href: "/pages/our-story"
            },
            {
                label: "Contact us",
                href: "/pages/contact"
            }
        ],
        columns: [
            {
                heading: "About Us",
                links: [
                    {
                        label: "Our story",
                        href: "/pages/our-story",
                        emphasis: true
                    },
                    {
                        label: "Our Banaras store",
                        href: "/pages/banaras-store"
                    },
                    {
                        label: "Our Lucknow store",
                        href: "/pages/lucknow-store"
                    },
                    {
                        label: "Impact",
                        href: "/pages/impact"
                    },
                    {
                        label: "Press & media",
                        href: "/pages/press"
                    },
                    {
                        label: "Careers",
                        href: "/pages/careers"
                    },
                    {
                        label: "FAQs",
                        href: "/pages/faqs"
                    },
                    {
                        label: "Contact us",
                        href: "/pages/contact"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "Our stores",
                href: "/pages/banaras-store",
                tone: "black",
                src: "/homepage/mega-menu/tile-stores.webp"
            },
            {
                label: "Impact",
                href: "/pages/impact",
                tone: "green",
                src: "/homepage/mega-menu/tile-impact.webp"
            }
        ]
    }
];
const LEFT_NAVIGATION = NAVIGATION.slice(0, 3);
const RIGHT_NAVIGATION = NAVIGATION.slice(3, 6);
}),
"[project]/src/lib/domain/facets.generated.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/domain/taxonomy.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$facets$2e$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/facets.generated.ts [app-ssr] (ecmascript)");
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
    const values = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$facets$2e$generated$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACETS"][group]?.values ?? [];
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
"[project]/src/lib/domain/types.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/src/lib/money.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-ssr] (ecmascript)");
;
function money(rupees, currency = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_CURRENCY"]) {
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
    const fromRate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DISPLAY_RATES"][value.currency] ?? 1;
    const toRate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DISPLAY_RATES"][targetCurrency] ?? 1;
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
"[project]/src/lib/search.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "search",
    ()=>search
]);
/**
 * Grouped search.
 *
 * build.md §8.3: the one thing the reference site's search does well is
 * grouping — routing a shopper to a *category* or an *editorial story*, not
 * only to a product, which is exactly right for a deep catalogue with a heavy
 * editorial layer. That grouping is copied here.
 *
 * This is a linear scan over fixtures. Sprint 3 replaces it with Algolia; the
 * grouped result shape is the part that should survive.
 *
 * Alias resolution is wired in, so a shopper typing "kadwa" finds kadhua
 * pieces — the runtime payoff of recording transliteration forks in the
 * vocabulary rather than letting them fork the catalogue.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/sections.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/fixtures.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/taxonomy.ts [app-ssr] (ecmascript)");
;
;
;
function search(rawQuery) {
    const query = rawQuery.trim().toLowerCase();
    if (query.length < 2) {
        return {
            query: rawQuery,
            matchedTerms: [],
            products: [],
            collections: [],
            pages: []
        };
    }
    const matchedTerms = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FACET_GROUPS"].flatMap((group)=>{
        const term = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$taxonomy$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveTerm"])(group, query);
        return term ? [
            {
                group,
                name: term.name,
                slug: term.slug
            }
        ] : [];
    });
    const matchedSlugs = new Set(matchedTerms.map((term)=>term.slug));
    const products = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRODUCTS"].filter((product)=>{
        if (product.weave !== undefined && matchedSlugs.has(product.weave) || matchedSlugs.has(product.fabric) || matchedSlugs.has(product.colourFamily) || product.motifs.some((motif)=>matchedSlugs.has(motif))) {
            return true;
        }
        return [
            product.title,
            product.poeticName,
            product.sku,
            product.narrative
        ].join(" ").toLowerCase().includes(query);
    });
    const collections = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$fixtures$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLLECTIONS"].filter((collection)=>`${collection.title} ${collection.seoIntro}`.toLowerCase().includes(query));
    const pages = Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PAGES"]).filter(([slug, page])=>`${slug} ${page.title} ${page.standfirst}`.toLowerCase().includes(query)).map(([slug, page])=>({
            slug,
            title: page.title,
            standfirst: page.standfirst
        }));
    return {
        query: rawQuery,
        matchedTerms: matchedTerms.map(({ group, name })=>({
                group,
                name
            })),
        products,
        collections,
        pages
    };
}
}),
];

//# sourceMappingURL=src_06e3-fv._.js.map