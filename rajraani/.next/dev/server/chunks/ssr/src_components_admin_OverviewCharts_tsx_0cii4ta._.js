module.exports = [
"[project]/src/components/admin/OverviewCharts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BarList",
    ()=>BarList,
    "Meter",
    ()=>Meter,
    "WeeklySales",
    ()=>WeeklySales,
    "rupees",
    ()=>rupees
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const rupees = (minor)=>`₹${Math.round(minor / 100).toLocaleString("en-IN")}`;
/** ₹68,000 → "₹68K"; ₹12,40,000 → "₹12.4L" — Indian short form for axis ticks. */ function compact(minor) {
    const r = minor / 100;
    if (r >= 1_00_00_000) return `₹${+(r / 1_00_00_000).toFixed(1)}Cr`;
    if (r >= 1_00_000) return `₹${+(r / 1_00_000).toFixed(1)}L`;
    if (r >= 1_000) return `₹${+(r / 1_000).toFixed(1)}K`;
    return `₹${r}`;
}
/** A clean top for the y-axis: 1, 2 or 5 × a power of ten. */ function niceMax(value) {
    if (value <= 0) return 1;
    const power = 10 ** Math.floor(Math.log10(value));
    const step = [
        1,
        2,
        5,
        10
    ].find((n)=>n * power >= value);
    return step * power;
}
function WeeklySales({ weeks }) {
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const top = niceMax(Math.max(...weeks.map((week)=>week.minor)));
    const empty = weeks.every((week)=>week.minor === 0);
    const ticks = [
        top,
        top / 2,
        0
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
        className: "m-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex h-56 gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "a-label flex w-14 shrink-0 flex-col justify-between text-right tabular-nums",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: ticks.map((tick)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: empty ? "" : compact(tick)
                            }, tick, false, {
                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1",
                        children: [
                            ticks.map((tick)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": "true",
                                    className: "absolute inset-x-0",
                                    style: {
                                        top: `${100 - tick / top * 100}%`,
                                        borderTop: "1px solid var(--a-surface-high)"
                                    }
                                }, tick, false, {
                                    fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-end",
                                children: weeks.map((week, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex h-full flex-1 cursor-default items-end justify-center",
                                        onMouseEnter: ()=>setHover(index),
                                        onMouseLeave: ()=>setHover(null),
                                        onFocus: ()=>setHover(index),
                                        onBlur: ()=>setHover(null),
                                        tabIndex: 0,
                                        "aria-label": `Week of ${week.label}: ${rupees(week.minor)}, ${week.orders} order${week.orders === 1 ? "" : "s"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: "min(24px, 60%)",
                                                    height: `${week.minor / top * 100}%`,
                                                    background: "var(--a-chart)",
                                                    borderRadius: "4px 4px 0 0",
                                                    opacity: hover === null || hover === index ? 1 : 0.55
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                                lineNumber: 73,
                                                columnNumber: 17
                                            }, this),
                                            hover === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                role: "tooltip",
                                                className: "a-body-sm pointer-events-none absolute bottom-full z-10 mb-2 whitespace-nowrap px-3 py-2",
                                                style: {
                                                    background: "var(--a-ink)",
                                                    color: "var(--a-surface-lowest)",
                                                    borderRadius: "var(--a-radius)"
                                                },
                                                children: [
                                                    "Week of ",
                                                    week.label,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: rupees(week.minor)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 21
                                                    }, this),
                                                    " · ",
                                                    week.orders,
                                                    " order",
                                                    week.orders === 1 ? "" : "s"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, week.label, true, {
                                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            empty ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a-body-sm absolute inset-0 flex items-center justify-center text-center",
                                style: {
                                    color: "var(--a-outline)"
                                },
                                children: "No sales yet. Each paid order will appear here in its week."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-[4.25rem] flex border-t pt-2",
                style: {
                    borderColor: "var(--a-outline-variant)"
                },
                children: weeks.map((week, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-label flex-1 text-center",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: index % 2 === 1 ? week.label : ""
                    }, week.label, false, {
                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                className: "mt-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "a-label cursor-pointer",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: "Show as a table"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "a-table mt-2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-left",
                                            children: "Week of"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-right",
                                            children: "Sales"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "text-right",
                                            children: "Orders"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                className: "tabular-nums",
                                children: weeks.map((week)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                children: week.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-right",
                                                children: rupees(week.minor)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                                lineNumber: 130,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "text-right",
                                                children: week.orders
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, week.label, true, {
                                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
function BarList({ rows, unit }) {
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const top = Math.max(1, ...rows.map((row)=>row.count));
    if (rows.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "a-body-sm",
            style: {
                color: "var(--a-outline)"
            },
            children: "Nothing on the shop yet."
        }, void 0, false, {
            fileName: "[project]/src/components/admin/OverviewCharts.tsx",
            lineNumber: 147,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "space-y-3",
        role: "list",
        children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "relative grid grid-cols-[8rem_1fr] items-center gap-3",
                onMouseEnter: ()=>setHover(row.name),
                onMouseLeave: ()=>setHover(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-body-sm truncate",
                        children: row.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    width: `${row.count / top * 85}%`,
                                    minWidth: 4,
                                    height: 20,
                                    background: "var(--a-chart)",
                                    borderRadius: "0 4px 4px 0",
                                    opacity: hover === null || hover === row.name ? 1 : 0.55
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "a-body-sm tabular-nums",
                                children: row.count
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    hover === row.name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        role: "tooltip",
                        className: "a-body-sm pointer-events-none absolute right-0 bottom-full z-10 whitespace-nowrap px-3 py-2",
                        style: {
                            background: "var(--a-ink)",
                            color: "var(--a-surface-lowest)",
                            borderRadius: "var(--a-radius)"
                        },
                        children: [
                            row.name,
                            ": ",
                            row.count,
                            " ",
                            row.count === 1 ? unit[0] : unit[1],
                            " on the shop"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                        lineNumber: 174,
                        columnNumber: 13
                    }, this) : null
                ]
            }, row.name, true, {
                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
function Meter({ value, total, label }) {
    const share = total ? value / total : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "meter",
                "aria-valuenow": value,
                "aria-valuemin": 0,
                "aria-valuemax": total,
                "aria-label": label,
                className: "h-3 w-full overflow-hidden",
                style: {
                    background: "var(--a-chart-track)",
                    borderRadius: "var(--a-radius-pill)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: `${share * 100}%`,
                        height: "100%",
                        background: "var(--a-chart)",
                        borderRadius: "var(--a-radius-pill)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-body-sm mt-2",
                style: {
                    color: "var(--a-ink-variant)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/OverviewCharts.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/OverviewCharts.tsx",
        lineNumber: 192,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_components_admin_OverviewCharts_tsx_0cii4ta._.js.map