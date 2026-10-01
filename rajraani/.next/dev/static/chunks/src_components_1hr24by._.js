(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/BuyBlock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BuyBlock",
    ()=>BuyBlock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CartDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Price.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function BuyBlock({ product }) {
    _s();
    const buyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showSticky, setShowSticky] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BuyBlock.useEffect": ()=>{
            const element = buyRef.current;
            if (!element) return;
            const observer = new IntersectionObserver({
                "BuyBlock.useEffect": ([entry])=>setShowSticky(entry ? !entry.isIntersecting : false)
            }["BuyBlock.useEffect"], {
                rootMargin: "0px 0px -80px 0px"
            });
            observer.observe(element);
            return ({
                "BuyBlock.useEffect": ()=>observer.disconnect()
            })["BuyBlock.useEffect"];
        }
    }["BuyBlock.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: buyRef,
                id: "buy",
                className: "scroll-mt-32",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAvailable"])(product) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddToCart, {
                    product: product
                }, void 0, false, {
                    fileName: "[project]/src/components/BuyBlock.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotifyWhenRewoven, {
                    product: product
                }, void 0, false, {
                    fileName: "[project]/src/components/BuyBlock.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            showSticky ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StickyBuyBar, {
                product: product
            }, void 0, false, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 51,
                columnNumber: 21
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BuyBlock.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(BuyBlock, "co6/N0YvHK5KEV2w7TiE6DLTY/U=");
_c = BuyBlock;
function AddToCart({ product }) {
    _s1();
    const { add } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [consented, setConsented] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const primary = product.images[0];
    const isPreOrder = product.fulfilmentMode === "pre_order";
    // The button says what the action is. Measured §A5.2 item 13: the reference
    // labels a pre-order button "Pre-Order", not "Add to cart".
    const label = isPreOrder ? "Pre-order" : "Add to cart";
    const blocked = isPreOrder && !consented;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-caption text-ink-body",
                children: product.inventoryQuantity === 1 ? "One piece, and only one." : `${product.inventoryQuantity} available to order.`
            }, void 0, false, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            isPreOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 border border-rule p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-caption text-ink-body",
                        children: [
                            "Pre-order — despatch in ",
                            product.dispatchLeadDays[0],
                            "–",
                            product.dispatchLeadDays[1],
                            " business days."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BuyBlock.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-caption mt-3 flex items-start gap-2 text-ink-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: consented,
                                onChange: (event)=>setConsented(event.target.checked),
                                className: "mt-0.5 shrink-0"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BuyBlock.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "I understand this is a pre-order and have read the despatch timeline."
                            }, void 0, false, {
                                fileName: "[project]/src/components/BuyBlock.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/BuyBlock.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this) : null,
            product.inventoryQuantity > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QuantityStepper"], {
                    value: quantity,
                    max: product.inventoryQuantity,
                    onChange: setQuantity,
                    label: product.poeticName
                }, void 0, false, {
                    fileName: "[project]/src/components/BuyBlock.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                disabled: blocked,
                "aria-describedby": blocked ? "preorder-consent" : undefined,
                className: "mt-4 bg-ink px-10 py-3.5 text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40",
                onClick: ()=>add({
                        handle: product.handle,
                        title: product.title,
                        poeticName: product.poeticName,
                        sku: product.sku,
                        priceMinorUnits: product.price.minorUnits,
                        colourSlug: product.colourFamily,
                        alt: primary?.alt ?? product.title,
                        maxQuantity: product.inventoryQuantity
                    }, quantity),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "eyebrow",
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/BuyBlock.tsx",
                    lineNumber: 139,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            blocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: "preorder-consent",
                className: "text-caption mt-2 text-ink-muted",
                children: "Tick the box above to continue."
            }, void 0, false, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 142,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BuyBlock.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s1(AddToCart, "iCA2MuNUPpzoaDHtuNWXWUSm0Zo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c1 = AddToCart;
/**
 * The sold-out template's primary surface.
 *
 * Note the verb: **rewoven**, not restocked. These are made to order, and the
 * copy should say so — it is the difference between "we ran out" and "we will
 * make another".
 */ function NotifyWhenRewoven({ product }) {
    _s2();
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "notify",
        className: "border border-rule-strong p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-display text-h4 text-ink",
                children: "This one has gone."
            }, void 0, false, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-caption mt-2 text-ink-body",
                children: [
                    product.poeticName,
                    " was a single piece. Leave an address and we will write when it is rewoven — usually ",
                    product.dispatchLeadDays[1],
                    " weeks, sometimes longer."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 164,
                columnNumber: 7
            }, this),
            submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-5 text-caption text-success",
                role: "status",
                children: "Noted. We will write when it is back on the loom."
            }, void 0, false, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 171,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "mt-5",
                onSubmit: (event)=>{
                    event.preventDefault();
                    // Wired to the ESP in Sprint 2; the surface is what matters here.
                    setSubmitted(true);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: id,
                        className: "eyebrow block text-ink-muted",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuyBlock.tsx",
                        lineNumber: 183,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: id,
                        type: "email",
                        name: "email",
                        required: true,
                        autoComplete: "email",
                        className: "w-full border-b border-rule-input bg-transparent py-2 text-ink outline-none focus:border-ink"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuyBlock.tsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "mt-4 w-full bg-ink px-6 py-4 text-bg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: "Notify me"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuyBlock.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuyBlock.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/BuyBlock.tsx",
                lineNumber: 175,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/BuyBlock.tsx",
        lineNumber: 162,
        columnNumber: 5
    }, this);
}
_s2(NotifyWhenRewoven, "fJbe2Iamu2fUVfc+r02+gyUYgTk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c2 = NotifyWhenRewoven;
function StickyBuyBar({ product }) {
    _s3();
    const { add } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const available = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAvailable"])(product);
    const primary = product.images[0];
    // A pre-order cannot be bought from here: the consent checkbox lives in the
    // buy block, and a shortcut that skips it would be a shortcut past the one
    // thing the checkbox exists to record. The bar sends you to it instead.
    const isPreOrder = product.fulfilmentMode === "pre_order";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-bg/97 backdrop-blur",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "wrap flex items-center justify-between gap-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "truncate font-display text-ink",
                            children: product.poeticName
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuyBlock.tsx",
                            lineNumber: 216,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-caption text-ink",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Price$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Price"], {
                                value: product.price
                            }, void 0, false, {
                                fileName: "[project]/src/components/BuyBlock.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuyBlock.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BuyBlock.tsx",
                    lineNumber: 215,
                    columnNumber: 9
                }, this),
                available && isPreOrder ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#buy",
                    className: "shrink-0 bg-ink px-6 py-3 text-bg",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "Pre-order"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuyBlock.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BuyBlock.tsx",
                    lineNumber: 222,
                    columnNumber: 11
                }, this) : available ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "shrink-0 bg-ink px-6 py-3 text-bg",
                    onClick: ()=>add({
                            handle: product.handle,
                            title: product.title,
                            poeticName: product.poeticName,
                            sku: product.sku,
                            priceMinorUnits: product.price.minorUnits,
                            colourSlug: product.colourFamily,
                            alt: primary?.alt ?? product.title,
                            maxQuantity: product.inventoryQuantity
                        }),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "Add to cart"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuyBlock.tsx",
                        lineNumber: 242,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BuyBlock.tsx",
                    lineNumber: 226,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#notify",
                    className: "shrink-0 border border-ink px-6 py-3 text-ink",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "eyebrow",
                        children: "Notify me"
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuyBlock.tsx",
                        lineNumber: 246,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BuyBlock.tsx",
                    lineNumber: 245,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BuyBlock.tsx",
            lineNumber: 214,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BuyBlock.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, this);
}
_s3(StickyBuyBar, "zseiLtI3OU0nEhA9SAlTDJpO1nY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c3 = StickyBuyBar;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "BuyBlock");
__turbopack_context__.k.register(_c1, "AddToCart");
__turbopack_context__.k.register(_c2, "NotifyWhenRewoven");
__turbopack_context__.k.register(_c3, "StickyBuyBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gallery",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ZoomFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ZoomFrame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
function Gallery({ images, colourSlug }) {
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [zoomed, setZoomed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const active = images[activeIndex] ?? images[0];
    if (!active) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ZoomFrame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ZoomFrame"], {
                        image: active,
                        colourSlug: colourSlug,
                        onOpen: ()=>setZoomed(true)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    images.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FrameArrow, {
                                direction: "previous",
                                onClick: ()=>setActiveIndex((current)=>current === 0 ? images.length - 1 : current - 1)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Gallery.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FrameArrow, {
                                direction: "next",
                                onClick: ()=>setActiveIndex((current)=>(current + 1) % images.length)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Gallery.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 56,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "sr-only",
                        "aria-live": "polite",
                        children: active.alt
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-caption mt-3 text-ink-muted",
                        children: active.alt
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                "aria-label": "Frames",
                className: "grid grid-cols-5 gap-3",
                children: images.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setActiveIndex(index),
                            "aria-current": index === activeIndex,
                            className: "block w-full aria-[current=true]:outline aria-[current=true]:outline-2 aria-[current=true]:outline-offset-2 aria-[current=true]:outline-ink",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frame"], {
                                    image: image,
                                    colourSlug: colourSlug,
                                    sizes: "100px"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Gallery.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Gallery.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    }, image.id, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            zoomed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Lightbox, {
                images: images,
                colourSlug: colourSlug,
                index: activeIndex,
                onIndexChange: setActiveIndex,
                onClose: ()=>setZoomed(false)
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 103,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Gallery.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Gallery, "w7oweIVGXoCX+QY3rv1XgaQJzhQ=");
_c = Gallery;
/**
 * Fullscreen frame viewer.
 *
 * Arrow keys move through the sequence and Esc closes, so the whole gallery is
 * reachable from here without going back to the thumb rail. Closing returns the
 * page to whichever frame was last looked at, which is why the index is lifted
 * rather than kept locally.
 */ /** One of the two circular step arrows overlaid on the main frame. */ function FrameArrow({ direction, onClick }) {
    const isPrevious = direction === "previous";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        "aria-label": `${isPrevious ? "Previous" : "Next"} frame`,
        className: `absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-bg/80 text-ink transition-colors hover:bg-bg ${isPrevious ? "left-4" : "right-4"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": true,
            children: isPrevious ? "←" : "→"
        }, void 0, false, {
            fileName: "[project]/src/components/Gallery.tsx",
            lineNumber: 141,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Gallery.tsx",
        lineNumber: 133,
        columnNumber: 5
    }, this);
}
_c1 = FrameArrow;
function Lightbox({ images, colourSlug, index, onIndexChange, onClose }) {
    _s1();
    const closeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousFocusRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const active = images[index];
    const step = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Lightbox.useCallback[step]": (delta)=>{
            const next = (index + delta + images.length) % images.length;
            onIndexChange(next);
        }
    }["Lightbox.useCallback[step]"], [
        index,
        images.length,
        onIndexChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Lightbox.useEffect": ()=>{
            previousFocusRef.current = document.activeElement;
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            const focusTimer = setTimeout({
                "Lightbox.useEffect.focusTimer": ()=>closeRef.current?.focus()
            }["Lightbox.useEffect.focusTimer"], 0);
            const onKeyDown = {
                "Lightbox.useEffect.onKeyDown": (event)=>{
                    if (event.key === "Escape") onClose();
                    if (event.key === "ArrowRight") step(1);
                    if (event.key === "ArrowLeft") step(-1);
                }
            }["Lightbox.useEffect.onKeyDown"];
            document.addEventListener("keydown", onKeyDown);
            return ({
                "Lightbox.useEffect": ()=>{
                    clearTimeout(focusTimer);
                    document.removeEventListener("keydown", onKeyDown);
                    document.body.style.overflow = previousOverflow;
                    previousFocusRef.current?.focus();
                }
            })["Lightbox.useEffect"];
        }
    }["Lightbox.useEffect"], [
        onClose,
        step
    ]);
    if (!active) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Frame viewer",
        className: "fixed inset-0 z-50 flex flex-col bg-ink/92 p-4 md:p-8",
        onClick: (event)=>{
            if (event.target === event.currentTarget) onClose();
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex shrink-0 items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow text-bg",
                        children: [
                            index + 1,
                            " / ",
                            images.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: closeRef,
                        type: "button",
                        onClick: onClose,
                        "aria-label": "Close frame viewer",
                        className: "eyebrow px-3 py-2 text-bg",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 208,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex min-h-0 flex-1 items-center justify-center gap-4 py-4",
                children: [
                    images.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>step(-1),
                        "aria-label": "Previous frame",
                        className: "eyebrow shrink-0 px-3 py-6 text-bg",
                        children: "←"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-full min-w-0 items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full",
                            style: {
                                aspectRatio: active.ratio === "square" ? "1 / 1" : "2 / 3"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Frame"], {
                                image: active,
                                colourSlug: colourSlug,
                                sizes: "90vh"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Gallery.tsx",
                                lineNumber: 235,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Gallery.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    images.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>step(1),
                        "aria-label": "Next frame",
                        className: "eyebrow shrink-0 px-3 py-6 text-bg",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-caption shrink-0 text-center text-bg/80",
                children: active.alt
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 251,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Gallery.tsx",
        lineNumber: 195,
        columnNumber: 5
    }, this);
}
_s1(Lightbox, "YFJf5l6pYGQjRKEr8tMnLFAARSQ=");
_c2 = Lightbox;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Gallery");
__turbopack_context__.k.register(_c1, "FrameArrow");
__turbopack_context__.k.register(_c2, "Lightbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/InfoPanels.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfoPanels",
    ()=>InfoPanels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function InfoPanels() {
    _s();
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFO_TABS"][0]?.id);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    const activeTab = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFO_TABS"].find((tab)=>tab.id === active) ?? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFO_TABS"][0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-label": "Product information",
        className: "mt-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden md:block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "tablist",
                        className: "flex gap-8 border-b border-rule",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFO_TABS"].map((tab)=>{
                            const selected = tab.id === activeTab?.id;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "tab",
                                id: `${id}-tab-${tab.id}`,
                                "aria-selected": selected,
                                "aria-controls": `${id}-panel-${tab.id}`,
                                onClick: ()=>setActive(tab.id),
                                className: `eyebrow -mb-px border-b pb-3 transition-colors ${selected ? "border-rule-strong text-ink" : "border-transparent text-ink-muted hover:text-ink"}`,
                                children: tab.label
                            }, tab.id, false, {
                                fileName: "[project]/src/components/InfoPanels.tsx",
                                lineNumber: 38,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoPanels.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    activeTab ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "tabpanel",
                        id: `${id}-panel-${activeTab.id}`,
                        "aria-labelledby": `${id}-tab-${activeTab.id}`,
                        className: "max-w-prose pt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "space-y-2 text-caption text-ink-body",
                            children: activeTab.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/src/components/InfoPanels.tsx",
                                    lineNumber: 67,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/InfoPanels.tsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoPanels.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InfoPanels.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["INFO_TABS"].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                        className: "border-b border-rule py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                className: "eyebrow cursor-pointer text-ink",
                                children: tab.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/InfoPanels.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-4 space-y-2 text-caption text-ink-body",
                                children: tab.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: item
                                    }, item, false, {
                                        fileName: "[project]/src/components/InfoPanels.tsx",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/InfoPanels.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        ]
                    }, tab.id, true, {
                        fileName: "[project]/src/components/InfoPanels.tsx",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/InfoPanels.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InfoPanels.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(InfoPanels, "jlZ3Bpm867nJLfmpijmmBTvv3mM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = InfoPanels;
var _c;
__turbopack_context__.k.register(_c, "InfoPanels");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ZoomFrame.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZoomFrame",
    ()=>ZoomFrame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/**
 * The PDP main frame, with hover magnification.
 *
 * Measured on the reference 10 Sep 2026 (design-addendum §A5.2a): a
 * `.zoom-container` at the frame's own size with `overflow: hidden`, holding a
 * larger copy of the same photograph — 800×1200 inside a 580×870 box, so
 * **1.4×** — panned so that the point under the cursor stays under the cursor.
 *
 * That is a pan-zoom, not a `scale()` on hover. The difference matters: a
 * scale grows the image about a fixed origin, so the detail you were pointing
 * at slides away from the pointer. Here it does not move, which is the whole
 * point when someone is trying to look at a specific motif.
 *
 * Pointer-driven and therefore mouse-only by nature. It is strictly additive:
 * the frame is still a button that opens the fullscreen viewer, which is what
 * touch and keyboard use, so nothing is behind the hover.
 */ const ZOOM = 1.4;
function ZoomFrame({ image, colourSlug, onOpen }) {
    _s();
    const boxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [origin, setOrigin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const ratioClass = image.ratio === "square" ? "aspect-square" : "aspect-portrait";
    // No photograph yet: the schematic colour field, and nothing to magnify.
    if (!image.src) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onOpen,
            "aria-label": `View larger: ${image.alt}`,
            className: `relative block w-full cursor-zoom-in overflow-hidden ${ratioClass}`,
            style: {
                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toneFor"])(colourSlug),
                backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLACEHOLDER_WASH"]
            }
        }, void 0, false, {
            fileName: "[project]/src/components/ZoomFrame.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: boxRef,
        type: "button",
        onClick: onOpen,
        "aria-label": `View larger: ${image.alt}`,
        className: `relative block w-full cursor-zoom-in overflow-hidden bg-bg-alt ${ratioClass}`,
        onMouseMove: (event)=>{
            const box = boxRef.current?.getBoundingClientRect();
            if (!box) return;
            setOrigin({
                x: (event.clientX - box.left) / box.width * 100,
                y: (event.clientY - box.top) / box.height * 100
            });
        },
        onMouseLeave: ()=>setOrigin(null),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: image.src,
            alt: image.alt,
            fill: true,
            sizes: "(min-width: 1024px) 580px, 100vw",
            priority: true,
            quality: 100,
            unoptimized: true,
            className: "object-cover transition-transform duration-200 ease-out",
            style: origin ? {
                transform: `scale(${ZOOM})`,
                // Anchoring the origin to the cursor is what keeps the point
                // under the pointer still while everything else grows past it.
                transformOrigin: `${origin.x}% ${origin.y}%`
            } : undefined
        }, void 0, false, {
            fileName: "[project]/src/components/ZoomFrame.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ZoomFrame.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(ZoomFrame, "8ZCW5qtILv/TuKsLNhYm5YeOYg0=");
_c = ZoomFrame;
var _c;
__turbopack_context__.k.register(_c, "ZoomFrame");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_1hr24by._.js.map