(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/admin/ExecutiveOverview.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExecutiveOverview",
    ()=>ExecutiveOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$AdminIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/AdminIcon.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$42a4ea__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:42a4ea [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$7d6f07__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:7d6f07 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/money.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const TABS = [
    {
        id: "all",
        label: "All"
    },
    {
        id: "live",
        label: "Live"
    },
    {
        id: "draft",
        label: "Draft"
    },
    {
        id: "soldout",
        label: "Sold out"
    },
    {
        id: "incomplete",
        label: "Short of frames"
    }
];
function matchesTab(p, tab) {
    if (tab === "live") return p.published === 1;
    if (tab === "draft") return p.published === 0;
    if (tab === "soldout") return p.published === 1 && p.inventory_quantity === 0;
    if (tab === "incomplete") return p.image_count < 6;
    return true;
}
function Tile({ label, value, detail, icon, tone = "neutral" }) {
    const detailColor = tone === "positive" ? "var(--a-positive)" : tone === "warning" ? "var(--a-negative)" : "var(--a-outline)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "a-card a-card-interactive flex flex-col gap-6 p-7",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-label",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$AdminIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminIcon"], {
                        name: icon,
                        className: "h-[18px] w-[18px] shrink-0"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-1.5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-figure text-[34px]",
                        style: {
                            color: "var(--a-ink)"
                        },
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[13px] leading-5",
                        style: {
                            color: detailColor
                        },
                        children: detail
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Tile;
function ExecutiveOverview({ products: initialProducts, metrics }) {
    _s();
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialProducts);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set());
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("table");
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const adjustStock = (productId, delta)=>{
        const before = products.find((p)=>p.id === productId)?.inventory_quantity;
        if (before === undefined) return;
        const setQuantity = (quantity)=>setProducts((prev)=>prev.map((p)=>p.id === productId ? {
                        ...p,
                        inventory_quantity: quantity
                    } : p));
        setQuantity(Math.max(0, before + delta));
        setPending((prev)=>new Set(prev).add(productId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$42a4ea__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["adjustStockAction"])(productId, delta);
            if (result.ok) {
                setQuantity(result.quantity);
                setError(null);
            } else {
                setQuantity(before);
                setError(result.error);
            }
            setPending((prev)=>{
                const next = new Set(prev);
                next.delete(productId);
                return next;
            });
        });
    };
    const readyCount = products.filter((p)=>p.published === 1 && p.image_count >= 6 && p.inventory_quantity > 0).length;
    const readiness = Math.round(readyCount / Math.max(1, products.length) * 100);
    const needle = query.trim().toLowerCase();
    const visible = products.filter((p)=>{
        if (!matchesTab(p, tab)) return false;
        if (!needle) return true;
        return [
            p.poetic_name,
            p.title,
            p.sku
        ].some((f)=>f.toLowerCase().includes(needle));
    });
    const countFor = (id)=>products.filter((p)=>matchesTab(p, id)).length;
    const recent = [
        ...products
    ].sort((a, b)=>b.updated_at.localeCompare(a.updated_at)).slice(0, 5);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-12",
        children: [
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "border px-4 py-3 text-[13px] font-semibold",
                style: {
                    borderRadius: "var(--a-radius)",
                    borderColor: "var(--a-negative)",
                    color: "var(--a-negative)",
                    backgroundColor: "color-mix(in srgb, var(--a-negative) 6%, transparent)"
                },
                children: [
                    error,
                    " Stock was left unchanged."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                lineNumber: 136,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col justify-between gap-6 md:flex-row md:items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "a-display-md",
                                style: {
                                    color: "var(--a-ink)"
                                },
                                children: "Executive Overview"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "max-w-2xl a-body-lg",
                                style: {
                                    color: "var(--a-ink-variant)"
                                },
                                children: "The state of the catalogue — what is live, what is short of stock, and what is not yet ready to publish."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin/products/new",
                        className: "a-btn-primary inline-flex shrink-0 items-center gap-2",
                        children: "Add a piece"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tile, {
                        label: "Catalogue value",
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])({
                            minorUnits: metrics.totalInventoryValueMinor,
                            currency: "INR"
                        }),
                        detail: `Across ${metrics.totalProducts} pieces in stock`,
                        icon: "catalog"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tile, {
                        label: "Live",
                        value: String(metrics.liveProducts),
                        detail: `${metrics.draftProducts} still in draft`,
                        icon: "dashboard",
                        tone: metrics.liveProducts > 0 ? "positive" : "neutral"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tile, {
                        label: "Sold out",
                        value: String(metrics.soldOutProducts),
                        detail: `${metrics.lowStockProducts} more at two or fewer`,
                        icon: "orders",
                        tone: metrics.soldOutProducts > 0 ? "warning" : "neutral"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tile, {
                        label: "Short of photographs",
                        value: String(metrics.incompletePhotoProducts),
                        detail: "Fewer than the six frames a piece needs",
                        icon: "media",
                        tone: metrics.incompletePhotoProducts > 0 ? "warning" : "positive"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "a-card flex flex-col gap-7 p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "a-heading-sm",
                                        style: {
                                            color: "var(--a-ink)"
                                        },
                                        children: "Launch readiness"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "a-figure text-[26px]",
                                        style: {
                                            color: "var(--a-accent)"
                                        },
                                        children: [
                                            readiness,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-2 w-full overflow-hidden",
                                        style: {
                                            backgroundColor: "var(--a-surface-high)"
                                        },
                                        role: "img",
                                        "aria-label": `${readyCount} of ${products.length} pieces fully prepared`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: `${readyCount / Math.max(1, products.length) * 100}%`,
                                                backgroundColor: "var(--a-accent)"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-[13px]",
                                        style: {
                                            color: "var(--a-outline)"
                                        },
                                        children: [
                                            readyCount,
                                            " of ",
                                            products.length,
                                            " pieces are published, in stock, and carry all six frames."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 229,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 215,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "grid grid-cols-3 gap-6 border-t pt-6",
                                style: {
                                    borderColor: "color-mix(in srgb, var(--a-outline-variant) 45%, transparent)"
                                },
                                children: [
                                    {
                                        k: "Collections",
                                        v: metrics.totalCollections
                                    },
                                    {
                                        k: "Campaigns",
                                        v: metrics.totalCampaigns
                                    },
                                    {
                                        k: "Drafts",
                                        v: metrics.draftProducts
                                    }
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "a-label",
                                                style: {
                                                    color: "var(--a-outline)"
                                                },
                                                children: s.k
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 244,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "a-figure text-[22px]",
                                                style: {
                                                    color: "var(--a-ink)"
                                                },
                                                children: s.v
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, s.k, true, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "a-card flex flex-col gap-6 p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "a-heading-sm",
                                style: {
                                    color: "var(--a-ink)"
                                },
                                children: "Recently edited"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 256,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                className: "flex flex-col",
                                children: recent.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex flex-col gap-1 py-4",
                                        style: {
                                            borderTop: i === 0 ? "none" : "1px solid color-mix(in srgb, var(--a-outline-variant) 45%, transparent)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "a-label",
                                                style: {
                                                    color: "var(--a-outline)"
                                                },
                                                children: new Date(p.updated_at).toLocaleDateString("en-IN", {
                                                    day: "numeric",
                                                    month: "short"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 271,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/admin/products/${p.id}`,
                                                className: "text-sm font-semibold hover:underline",
                                                style: {
                                                    color: "var(--a-ink)"
                                                },
                                                children: p.poetic_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 277,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px]",
                                                style: {
                                                    color: "var(--a-ink-variant)"
                                                },
                                                children: [
                                                    p.published === 1 ? "Live" : "Draft",
                                                    " · ",
                                                    p.inventory_quantity,
                                                    " in stock"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 284,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 259,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col gap-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "a-heading-sm",
                                style: {
                                    color: "var(--a-ink)"
                                },
                                children: "The catalogue"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 295,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "flex items-center gap-2 px-4 py-2",
                                style: {
                                    borderRadius: "var(--a-radius-pill)",
                                    backgroundColor: "var(--a-surface-low)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$AdminIcon$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdminIcon"], {
                                        name: "search",
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 304,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Search the catalogue"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        placeholder: "Search by name or SKU",
                                        className: "w-56 bg-transparent text-sm outline-none",
                                        style: {
                                            color: "var(--a-ink)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 306,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 298,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                role: "tablist",
                                "aria-label": "Filter the catalogue",
                                children: TABS.map((t)=>{
                                    const isActive = tab === t.id;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        role: "tab",
                                        "aria-selected": isActive,
                                        onClick: ()=>setTab(t.id),
                                        className: "a-label px-3.5 py-2 transition-colors",
                                        style: {
                                            borderRadius: "var(--a-radius)",
                                            backgroundColor: isActive ? "var(--a-accent-container)" : "transparent",
                                            color: isActive ? "var(--a-on-accent-container)" : "var(--a-ink-variant)",
                                            border: `1px solid ${isActive ? "transparent" : "color-mix(in srgb, var(--a-outline-variant) 55%, transparent)"}`
                                        },
                                        children: [
                                            t.label,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 tabular-nums",
                                                style: {
                                                    opacity: 0.65
                                                },
                                                children: countFor(t.id)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 322,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                role: "group",
                                "aria-label": "View mode",
                                children: [
                                    "table",
                                    "grid"
                                ].map((mode)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setView(mode),
                                        "aria-pressed": view === mode,
                                        className: "a-label px-3 py-2 transition-colors",
                                        style: {
                                            borderRadius: "var(--a-radius)",
                                            backgroundColor: view === mode ? "var(--a-surface-high)" : "transparent",
                                            color: view === mode ? "var(--a-ink)" : "var(--a-outline)"
                                        },
                                        children: mode === "table" ? "Table" : "Grid"
                                    }, mode, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 349,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    view === "grid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3",
                        children: visible.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "a-card a-card-interactive flex flex-col gap-4 p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/admin/products/${p.id}`,
                                                className: "a-heading-sm hover:underline",
                                                style: {
                                                    color: "var(--a-ink)"
                                                },
                                                children: p.poetic_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 374,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `a-label shrink-0 px-2.5 py-1 ${p.published === 1 ? "a-badge-live" : "a-badge-draft"}`,
                                                children: p.published === 1 ? "Live" : "Draft"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 381,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 373,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: "var(--a-outline)"
                                        },
                                        children: p.sku
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 390,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-baseline justify-between gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "a-figure text-[22px]",
                                                style: {
                                                    color: "var(--a-ink)"
                                                },
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])({
                                                    minorUnits: p.price_minor,
                                                    currency: "INR"
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 395,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[13px] tabular-nums",
                                                style: {
                                                    color: p.image_count < 6 ? "var(--a-negative)" : "var(--a-outline)"
                                                },
                                                children: [
                                                    p.image_count,
                                                    " of 6 frames"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 398,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 394,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>adjustStock(p.id, -1),
                                                disabled: pending.has(p.id) || p.inventory_quantity === 0,
                                                "aria-label": `Decrease stock of ${p.poetic_name}`,
                                                className: "h-6 w-6 border text-xs disabled:opacity-35",
                                                style: {
                                                    borderRadius: "var(--a-radius)",
                                                    borderColor: "var(--a-outline-variant)",
                                                    color: "var(--a-ink)"
                                                },
                                                children: "−"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 409,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "aria-live": "polite",
                                                className: "min-w-[26px] text-center font-semibold tabular-nums",
                                                style: {
                                                    color: p.inventory_quantity === 0 ? "var(--a-negative)" : "var(--a-ink)",
                                                    opacity: pending.has(p.id) ? 0.5 : 1
                                                },
                                                children: p.inventory_quantity
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 423,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>adjustStock(p.id, 1),
                                                disabled: pending.has(p.id),
                                                "aria-label": `Increase stock of ${p.poetic_name}`,
                                                className: "h-6 w-6 border text-xs disabled:opacity-35",
                                                style: {
                                                    borderRadius: "var(--a-radius)",
                                                    borderColor: "var(--a-outline-variant)",
                                                    color: "var(--a-ink)"
                                                },
                                                children: "+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 434,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>setPreview(p),
                                                className: "a-label ml-auto px-2.5 py-1.5",
                                                style: {
                                                    borderRadius: "var(--a-radius)",
                                                    border: "1px solid color-mix(in srgb, var(--a-outline-variant) 55%, transparent)",
                                                    color: "var(--a-ink-variant)"
                                                },
                                                children: "Inspect"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 449,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 408,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, p.id, true, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 372,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "a-card overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "a-table",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                "Piece",
                                                "Price",
                                                "Stock",
                                                "Frames",
                                                "State",
                                                ""
                                            ].map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "col",
                                                    className: "a-label px-6 py-4 text-left",
                                                    style: {
                                                        color: "var(--a-outline)"
                                                    },
                                                    children: h
                                                }, h, false, {
                                                    fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                    lineNumber: 473,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                            lineNumber: 471,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 470,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: visible.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                style: {
                                                    borderBottom: "1px solid color-mix(in srgb, var(--a-outline-variant) 35%, transparent)"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                href: `/admin/products/${p.id}`,
                                                                className: "font-semibold hover:underline",
                                                                style: {
                                                                    color: "var(--a-ink)"
                                                                },
                                                                children: p.poetic_name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                                lineNumber: 494,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mt-0.5 block text-xs",
                                                                style: {
                                                                    color: "var(--a-outline)"
                                                                },
                                                                children: p.sku
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                                lineNumber: 501,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 tabular-nums",
                                                        style: {
                                                            color: "var(--a-ink)"
                                                        },
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])({
                                                            minorUnits: p.price_minor,
                                                            currency: "INR"
                                                        })
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>adjustStock(p.id, -1),
                                                                    disabled: pending.has(p.id) || p.inventory_quantity === 0,
                                                                    "aria-label": `Decrease stock of ${p.poetic_name}`,
                                                                    className: "h-6 w-6 border text-xs transition-colors disabled:opacity-35",
                                                                    style: {
                                                                        borderRadius: "var(--a-radius)",
                                                                        borderColor: "var(--a-outline-variant)",
                                                                        color: "var(--a-ink)"
                                                                    },
                                                                    children: "−"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                                    lineNumber: 516,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    "aria-live": "polite",
                                                                    className: "min-w-[26px] text-center font-semibold tabular-nums",
                                                                    style: {
                                                                        color: p.inventory_quantity === 0 ? "var(--a-negative)" : "var(--a-ink)",
                                                                        opacity: pending.has(p.id) ? 0.5 : 1
                                                                    },
                                                                    children: p.inventory_quantity
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                                    lineNumber: 530,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>adjustStock(p.id, 1),
                                                                    disabled: pending.has(p.id),
                                                                    "aria-label": `Increase stock of ${p.poetic_name}`,
                                                                    className: "h-6 w-6 border text-xs transition-colors disabled:opacity-35",
                                                                    style: {
                                                                        borderRadius: "var(--a-radius)",
                                                                        borderColor: "var(--a-outline-variant)",
                                                                        color: "var(--a-ink)"
                                                                    },
                                                                    children: "+"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                                    lineNumber: 543,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                            lineNumber: 515,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                        lineNumber: 514,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4 tabular-nums",
                                                        style: {
                                                            color: p.image_count < 6 ? "var(--a-negative)" : "var(--a-ink-variant)"
                                                        },
                                                        children: [
                                                            p.image_count,
                                                            " of 6"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                        lineNumber: 559,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `a-label inline-block px-2.5 py-1 ${p.published === 1 ? "a-badge-live" : "a-badge-draft"}`,
                                                            children: p.published === 1 ? "Live" : "Draft"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                            lineNumber: 569,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                        lineNumber: 568,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-6 py-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-end gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    onClick: ()=>setPreview(p),
                                                                    className: "a-label px-2.5 py-1.5 transition-colors",
                                                                    style: {
                                                                        borderRadius: "var(--a-radius)",
                                                                        border: "1px solid color-mix(in srgb, var(--a-outline-variant) 55%, transparent)",
                                                                        color: "var(--a-ink-variant)"
                                                                    },
                                                                    children: "Inspect"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                                    lineNumber: 579,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                                    action: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$7d6f07__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["togglePublishedAction"],
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "hidden",
                                                                            name: "id",
                                                                            value: p.id
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                                            lineNumber: 599,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "hidden",
                                                                            name: "publish",
                                                                            value: p.published === 1 ? "0" : "1"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                                            lineNumber: 600,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            type: "submit",
                                                                            className: "a-label px-2.5 py-1.5 transition-colors",
                                                                            style: {
                                                                                borderRadius: "var(--a-radius)",
                                                                                border: "1px solid color-mix(in srgb, var(--a-outline-variant) 55%, transparent)",
                                                                                color: "var(--a-ink-variant)"
                                                                            },
                                                                            children: p.published === 1 ? "Unpublish" : "Publish"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                                            lineNumber: 605,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                                    lineNumber: 598,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                            lineNumber: 578,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                        lineNumber: 577,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, p.id, true, {
                                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                                lineNumber: 486,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 484,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 469,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this),
                    visible.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-card px-6 py-10 text-center text-sm",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: query ? `Nothing matches “${query}”.` : "No pieces in this view."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 630,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                lineNumber: 293,
                columnNumber: 7
            }, this),
            preview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PreviewDialog, {
                product: preview,
                onClose: ()=>setPreview(null)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                lineNumber: 642,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
        lineNumber: 134,
        columnNumber: 5
    }, this);
}
_s(ExecutiveOverview, "aYE3IkO0o/wtI+KHvu2PM/hIr7g=");
_c1 = ExecutiveOverview;
/**
 * Inspect panel — the quick read on a piece without leaving the dashboard.
 *
 * Closes on Escape and on a click outside, and returns focus to the page. The
 * backdrop is a button rather than a div with onClick so it is reachable by
 * keyboard and announced as a control.
 */ function PreviewDialog({ product, onClose }) {
    _s1();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PreviewDialog.useEffect": ()=>{
            const onKeyDown = {
                "PreviewDialog.useEffect.onKeyDown": (event)=>{
                    if (event.key === "Escape") onClose();
                }
            }["PreviewDialog.useEffect.onKeyDown"];
            document.addEventListener("keydown", onKeyDown);
            const previousOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "PreviewDialog.useEffect": ()=>{
                    document.removeEventListener("keydown", onKeyDown);
                    document.body.style.overflow = previousOverflow;
                }
            })["PreviewDialog.useEffect"];
        }
    }["PreviewDialog.useEffect"], [
        onClose
    ]);
    const rows = [
        [
            "SKU",
            product.sku
        ],
        [
            "Title",
            product.title
        ],
        [
            "Price",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$money$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMoney"])({
                minorUnits: product.price_minor,
                currency: "INR"
            })
        ],
        [
            "In stock",
            String(product.inventory_quantity)
        ],
        [
            "Frames",
            `${product.image_count} of 6`
        ],
        [
            "Fulfilment",
            product.fulfilment_mode.replace(/_/g, " ")
        ],
        [
            "State",
            product.published === 1 ? "Live" : "Draft"
        ],
        [
            "Last edited",
            new Date(product.updated_at).toLocaleString("en-IN")
        ]
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                "aria-label": "Close",
                onClick: onClose,
                className: "absolute inset-0",
                style: {
                    backgroundColor: "rgb(27 28 28 / 0.35)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                lineNumber: 688,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-modal": "true",
                "aria-label": `${product.poetic_name} details`,
                className: "a-card relative w-full max-w-lg p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "a-heading-sm",
                        style: {
                            color: "var(--a-ink)"
                        },
                        children: product.poetic_name
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 701,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "mt-6 flex flex-col",
                        children: rows.map(([k, v], i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline justify-between gap-6 py-3",
                                style: {
                                    borderTop: i === 0 ? "none" : "1px solid color-mix(in srgb, var(--a-outline-variant) 40%, transparent)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "a-label",
                                        style: {
                                            color: "var(--a-outline)"
                                        },
                                        children: k
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 717,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "text-sm capitalize",
                                        style: {
                                            color: "var(--a-ink)"
                                        },
                                        children: v
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                        lineNumber: 720,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, k, true, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 707,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 705,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-7 flex justify-end gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onClose,
                                className: "a-btn-secondary",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 728,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/admin/products/${product.id}`,
                                className: "a-btn-primary",
                                children: "Edit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                                lineNumber: 731,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                        lineNumber: 727,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
                lineNumber: 695,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ExecutiveOverview.tsx",
        lineNumber: 687,
        columnNumber: 5
    }, this);
}
_s1(PreviewDialog, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c2 = PreviewDialog;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Tile");
__turbopack_context__.k.register(_c1, "ExecutiveOverview");
__turbopack_context__.k.register(_c2, "PreviewDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin/data:42a4ea [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "adjustStockAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"603f58fa4ca8220b5957bcbeac373bbaed959d3537":{"name":"adjustStockAction"}},"src/lib/admin/product-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("603f58fa4ca8220b5957bcbeac373bbaed959d3537", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "adjustStockAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin/data:7d6f07 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "togglePublishedAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4015cb5d413ca44e5f2fa5f32b877ce6e51abf16ba":{"name":"togglePublishedAction"}},"src/lib/admin/product-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4015cb5d413ca44e5f2fa5f32b877ce6e51abf16ba", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "togglePublishedAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/domain/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/money.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/domain/types.ts [app-client] (ecmascript)");
;
function money(rupees, currency = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_CURRENCY"]) {
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
    const fromRate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DISPLAY_RATES"][value.currency] ?? 1;
    const toRate = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$domain$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DISPLAY_RATES"][targetCurrency] ?? 1;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_113_knj._.js.map