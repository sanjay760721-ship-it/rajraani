module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/admin/(protected)/orders/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>OrdersAdminPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const metadata = {
    title: "Order Vault"
};
const orders = [
    {
        id: "RR-2026-1089",
        customerName: "Eleanor Vance",
        email: "eleanor.v@example.com",
        pieceName: "Kadhua Jangla Neelam Saree",
        sku: "KDH-JNG-001",
        amountRupees: 1250000,
        paymentMode: "Razorpay (UPI)",
        fulfilmentMode: "ready_to_ship",
        status: "Pending Dispatch",
        date: "24 Oct 2026",
        itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3IcpJZTd7qPAANsEs82UNGYB1F2NeuGeRc--roh59B4ZzvDpjqE062aniBqu5OsqATogypY3hIh-SP6357qSSA4GPPhtSK5VL1LUkLBxUr9qLdEgyEpldC74GUc01kKEfKvkkgvLsMuokdQCWtzKNlKsBJ8FyuqQGXE2X4zD__E1TVEHMvqo1xSLpxv26f2iq_geVNBv3Vw7BCcBu2DO7WEG7AV1tBzzneqw3cNGsutwBZc79jSfiTw",
        collection: "Nizam Heritage Line"
    },
    {
        id: "RR-2026-1088",
        customerName: "Alistair Sterling",
        email: "alistair.s@example.com",
        pieceName: "Aparajita Tanchoi Brocade",
        sku: "TNC-APR-004",
        amountRupees: 850000,
        paymentMode: "Razorpay (Card)",
        fulfilmentMode: "made_to_order",
        status: "In Weaving",
        date: "23 Oct 2026",
        itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtEQYp1zN0R7tiTjPOL6iQCYq4GlUCmqs2gmOKSnOgsOyfyxXjGfUvkrXgEjYnrSJg4R_C5D8i2KvLMGQ_dPSywXXfDogxTITTtOMgQ7rnh57CfHI7wIIaC_4mDaN5o3K2HSiFB8dtUdFbfaMjURAzeNVPHc8cxuD1DqoT2kqHbGAmmPzUZ321s_2QndKzKs1N1ctsEButh8AkEHJys2S94OJODhuMZhTGpOoVvTecRvdyiZhnES9DqA",
        collection: "Rajputana Collection"
    },
    {
        id: "RR-2026-1087",
        customerName: "Isabella Rossi",
        email: "isabella.r@example.com",
        pieceName: "Polki Diamond Choker",
        sku: "PDC-001",
        amountRupees: 3400000,
        paymentMode: "Wire Transfer",
        fulfilmentMode: "ready_to_ship",
        status: "Dispatched",
        date: "20 Oct 2026",
        itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjvaS2zCbx0A5E0dWjGEu6kHcERD0JepJEhxsqU2oufkQg0TJftFdJmg1K-9ERphGzjqlPSIzlqEf58RiysbuPFmAELpZJnuOdmndxTH9r1c83o_khoEQ6yEMzmReg5QKquoAvwZ7jGR1xwysqcVETzBwWFNx2FJSi-TMj6j6tXMOaK3EXwGBy-LscMXBgLid3aOlLEvCx-gASTNF2SK-GTkh1t0gsMCY0N7TGz1XD1pw_cU_Lh5udDQ",
        collection: "Bespoke Commission"
    },
    {
        id: "RR-2026-1086",
        customerName: "Margot Windsor",
        email: "margot.w@example.com",
        pieceName: "Heritage Kundan Necklace",
        sku: "HKN-045",
        amountRupees: 2400000,
        paymentMode: "Razorpay (Card)",
        fulfilmentMode: "ready_to_ship",
        status: "Delivered",
        date: "19 Oct 2026",
        itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt_lK7_KpNo5VjcqLEsor_vC8e9z8Bu5S4nnU7Yf2MoJv6d1bCrG0YxkfFjzAN850CrqizM0Mr1F7sDoiZB_1G6GbJYrSQbLQkrKDOeA3IdFpvYeEaH9a9lQtDzyIG-Q5tvbK74KuTzZsvK7vUjqoU14LVvBnnpOWT46XKYiRsSLKsCr3VMPL8HbrT1zmXKc6jlceiV0s5DYxvNB6D43vbRiF0YzSOwOie3OJZqbaycv864HaK_zg-zw",
        collection: "Maharani Pearls"
    },
    {
        id: "RR-2026-1085",
        customerName: "Victoria Dubois",
        email: "victoria.d@example.com",
        pieceName: "Temple Gold Bangles",
        sku: "TGB-012",
        amountRupees: 1450000,
        paymentMode: "Razorpay (UPI)",
        fulfilmentMode: "ready_to_ship",
        status: "Delivered",
        date: "18 Oct 2026",
        itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3W7meIccf1Vy0QD2-4NXNUHR-NOkFEyeH3QI29SR950DO1VHwYb2s9tLDTEhApUsQTLiFF_Y26iSwKA4cE6t0E0E0WPPQZgo0LgFc4M5cZr1ckV1nenzlmRQt7mEVwtF5bBxBGn5JOQWvAAayxdpJD-4jdKkfgVYHN7ejh0RLRhHMm6wDyqpAmUQJ1F22dvzjqpmCAUJ_0X-EOAZIqny5algZWS1jKeAhRI90HJ6hZxD87-Qe40RjqQ",
        collection: "Temple Gold"
    },
    {
        id: "RR-2026-1084",
        customerName: "Harrison Beck",
        email: "harrison.b@example.com",
        pieceName: "Contemporary Polki Earrings",
        sku: "CPE-007",
        amountRupees: 560000,
        paymentMode: "Razorpay (Card)",
        fulfilmentMode: "made_to_order",
        status: "Cancelled",
        date: "18 Oct 2026",
        itemImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPKvCjl8eiDIvoEBBncpBSiPQPlMOPX7XcGNzPXE6hHSNE9hnrHvZT3bPQQBHchQrquK-Sq__oY87hkkNjVSg0D5ktdl26eJRCh3w07eg2cR0qtMBWol46NkF_2pn2kID4wY10m0JqVPYqAijupqOCnY6NPy7BLsDiUmbrXKCrIdY73TrSc2wHxVJKtM6rbg0KyNkI4jwl-MA8WbrAsv0_i15tiRMTv8kY6P7ml8p-0vV9QbqkG7Z8ug",
        collection: "Contemporary Polki"
    }
];
const METRICS = [
    {
        label: "Total Volume",
        value: "₹24.5M",
        detail: "+12.4% vs last quarter",
        icon: "account_balance_wallet",
        tone: "positive"
    },
    {
        label: "Pending Fulfillment",
        value: "42",
        detail: "8 require immediate action",
        icon: "hourglass_top",
        tone: "warning"
    },
    {
        label: "Avg. Order Value",
        value: "₹850K",
        detail: "+5.2% vs last quarter",
        icon: "diamond",
        tone: "positive"
    },
    {
        label: "Return Rate",
        value: "1.2%",
        detail: "Maintained below threshold",
        icon: "trending_down",
        tone: "positive"
    }
];
function KPICard({ label, value, detail, icon, tone = "neutral" }) {
    const detailColor = tone === "positive" ? "var(--a-positive)" : tone === "warning" ? "var(--a-negative)" : "var(--a-outline)";
    const bgColor = tone === "positive" ? "var(--a-accent-container)" : "var(--a-surface-lowest)";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `a-card a-card-interactive p-8 flex flex-col justify-between h-48 relative overflow-hidden group ${tone === "positive" ? "bg-accent-container/20" : ""}`,
        style: {
            backgroundColor: bgColor
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-label mb-2",
                        style: {
                            color: "var(--a-ink-variant)"
                        },
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-figure text-3xl",
                        style: {
                            color: "var(--a-ink)"
                        },
                        children: value
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 bottom-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 translate-x-4 translate-y-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "material-symbols-outlined",
                    style: {
                        fontSize: "120px",
                        color: "var(--a-ink)"
                    },
                    children: icon
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                lineNumber: 141,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex items-center gap-2",
                style: {
                    color: detailColor
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "material-symbols-outlined text-[16px]",
                        children: tone === "positive" ? "trending_up" : tone === "warning" ? "schedule" : "trending_up"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-label",
                        children: detail
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
function StatusBadge({ status }) {
    const configs = {
        "Pending Dispatch": {
            bg: "var(--a-surface-high)",
            color: "var(--a-ink-variant)",
            dot: "var(--a-status-waiting)",
            label: "PENDING DISPATCH"
        },
        "In Weaving": {
            bg: "var(--a-accent-container)",
            color: "var(--a-on-accent-container)",
            dot: "var(--a-status-progress)",
            label: "IN WEAVING"
        },
        "Dispatched": {
            bg: "var(--a-surface-high)",
            color: "var(--a-ink-variant)",
            dot: "var(--a-status-done)",
            label: "DISPATCHED"
        },
        "Delivered": {
            bg: "var(--a-surface-high)",
            color: "var(--a-ink-variant)",
            dot: "var(--a-status-done)",
            label: "DELIVERED"
        },
        "Cancelled": {
            bg: "var(--a-negative-container)",
            color: "var(--a-negative)",
            dot: "var(--a-status-stopped)",
            label: "CANCELLED"
        }
    };
    const config = configs[status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full a-label",
        style: {
            backgroundColor: config.bg,
            color: config.color,
            border: status === "Delivered" || status === "Dispatched" ? "1px solid color-mix(in srgb, var(--a-outline-variant) 40%, transparent)" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-1.5 h-1.5 rounded-full",
                style: {
                    backgroundColor: config.dot
                }
            }, void 0, false, {
                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            config.label
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
        lineNumber: 193,
        columnNumber: 5
    }, this);
}
function FulfilmentBadge({ mode }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full a-label",
        style: {
            backgroundColor: mode === "made_to_order" ? "var(--a-accent-container)" : "var(--a-surface-high)",
            color: mode === "made_to_order" ? "var(--a-on-accent-container)" : "var(--a-ink-variant)",
            border: mode === "ready_to_ship" ? "1px solid color-mix(in srgb, var(--a-outline-variant) 40%, transparent)" : "none"
        },
        children: mode === "made_to_order" ? "MADE TO ORDER" : "READY TO SHIP"
    }, void 0, false, {
        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
}
function OrdersAdminPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "px-2 space-y-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b a-divider-strong pb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "a-display-md",
                                style: {
                                    color: "var(--a-ink)"
                                },
                                children: "Order Vault"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a-body-md mt-2 max-w-xl",
                                style: {
                                    color: "var(--a-ink-variant)"
                                },
                                children: "A curated archive of all client acquisitions. Review statuses, manage fulfillment, and ensure impeccable service delivery."
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "a-btn-secondary flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[18px]",
                                        children: "download"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 241,
                                        columnNumber: 13
                                    }, this),
                                    "EXPORT LEDGER"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "a-btn-primary flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined text-[18px]",
                                        children: "add"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    "NEW ORDER"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 239,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid grid-cols-1 md:grid-cols-4 gap-6",
                children: METRICS.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(KPICard, {
                        ...m
                    }, m.label, false, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b a-divider",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 w-full md:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full md:w-96 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "material-symbols-outlined absolute left-0 top-1/2 -translate-y-1/2",
                                        style: {
                                            color: "var(--a-outline)"
                                        },
                                        children: "search"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 262,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "a-input w-full pl-8 pr-4",
                                        placeholder: "Search by Order ID, Client, or Provenance...",
                                        type: "text"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                lineNumber: 261,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "a-btn-icon",
                                "aria-label": "Filter orders",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "material-symbols-outlined",
                                    children: "filter_list"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-8 overflow-x-auto w-full md:w-auto",
                        style: {
                            scrollbarWidth: "none"
                        },
                        children: [
                            "All Orders",
                            "Processing",
                            "Shipped",
                            "Delivered",
                            "Exceptions"
                        ].map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `a-label px-4 py-2 border-b-2 transition-colors whitespace-nowrap ${i === 0 ? "border-ink text-ink" : "border-transparent text-ink-variant hover:text-ink hover:border-outline-variant/50"}`,
                                children: tab
                            }, tab, false, {
                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                lineNumber: 277,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 275,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "a-card overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-x-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "a-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "w-24",
                                                children: "Order ID"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Client & Line"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                lineNumber: 299,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                children: "Status"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "text-right",
                                                children: "Value"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: "text-center w-16"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                lineNumber: 302,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "group hover:bg-surface-low/50 transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "a-label text-primary font-mono",
                                                    children: order.id
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-12 h-12 rounded-full overflow-hidden bg-surface-high",
                                                                children: order.itemImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: order.itemImage,
                                                                    alt: "",
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                                    lineNumber: 315,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                                lineNumber: 313,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "a-heading-sm text-[18px] leading-tight",
                                                                        style: {
                                                                            color: "var(--a-ink)"
                                                                        },
                                                                        children: order.customerName
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                                        lineNumber: 323,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs a-label",
                                                                        style: {
                                                                            color: "var(--a-outline)",
                                                                            textTransform: "uppercase"
                                                                        },
                                                                        children: order.collection
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                                        lineNumber: 326,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                                lineNumber: 322,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                        lineNumber: 312,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                    lineNumber: 311,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        color: "var(--a-ink-variant)"
                                                    },
                                                    children: order.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                    lineNumber: 332,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusBadge, {
                                                        status: order.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                        lineNumber: 336,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                    lineNumber: 335,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-right a-figure text-[20px]",
                                                    children: [
                                                        "₹",
                                                        order.amountRupees.toLocaleString("en-IN")
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "text-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "a-btn-icon opacity-0 group-hover:opacity-100 transition-opacity",
                                                        "aria-label": "More actions",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "material-symbols-outlined",
                                                            children: "more_vert"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, order.id, true, {
                                            fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                            lineNumber: 307,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-6 border-t flex justify-between items-center",
                        style: {
                            borderColor: "color-mix(in srgb, var(--a-outline-variant) 20%, transparent)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "a-label",
                                style: {
                                    color: "var(--a-ink-variant)"
                                },
                                children: "SHOWING 1-6 OF 1,248"
                            }, void 0, false, {
                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                lineNumber: 356,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "a-btn-icon disabled:opacity-30",
                                        disabled: true,
                                        "aria-label": "Previous page",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            children: "chevron_left"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                            lineNumber: 361,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-10 h-10 rounded-full flex items-center justify-center a-figure",
                                        style: {
                                            backgroundColor: "var(--a-ink)",
                                            color: "var(--a-surface-lowest)"
                                        },
                                        children: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-high transition-colors",
                                        style: {
                                            color: "var(--a-ink-variant)"
                                        },
                                        children: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 366,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-10 h-10 rounded-full flex items-center justify-center hover:bg-surface-high transition-colors",
                                        style: {
                                            color: "var(--a-ink-variant)"
                                        },
                                        children: "3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 369,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-10 h-10 flex items-center justify-center",
                                        style: {
                                            color: "var(--a-outline-variant)"
                                        },
                                        children: "…"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 372,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "a-btn-icon",
                                        "aria-label": "Next page",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "material-symbols-outlined",
                                            children: "chevron_right"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                            lineNumber: 376,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                        lineNumber: 355,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
                lineNumber: 292,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/(protected)/orders/page.tsx",
        lineNumber: 227,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/(protected)/orders/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/(protected)/orders/page.tsx [app-rsc] (ecmascript)"));
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__18u6a22._.js.map