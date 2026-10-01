module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/admin/(protected)/customers/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminCustomersRoute,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/format.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$order$2d$words$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/order-words.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$orders$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/orders-admin.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "Customers"
};
/**
 * Everyone who has ordered, built from the orders themselves.
 *
 * There is no separate customer account in this shop (guest checkout), so a
 * customer is an email address: their orders, what they have spent, and any
 * messages they sent through the contact form. Nothing here is typed in by
 * hand, so it cannot drift from the orders.
 */ const SOLD = new Set([
    "paid",
    "dispatched",
    "delivered"
]);
const day = (iso)=>new Date(iso).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
function AdminCustomersRoute() {
    const orders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$orders$2d$admin$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["listOrders"])();
    const messages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT LOWER(email) AS email, COUNT(*) AS n FROM enquiry GROUP BY LOWER(email)").all();
    const messageCount = new Map(messages.map((row)=>[
            row.email,
            row.n
        ]));
    const byEmail = new Map();
    for (const order of orders){
        const key = order.email.trim().toLowerCase();
        byEmail.set(key, [
            ...byEmail.get(key) ?? [],
            order
        ]);
    }
    const customers = [
        ...byEmail.entries()
    ].map(([email, theirs])=>{
        const sold = theirs.filter((order)=>SOLD.has(order.status));
        return {
            email,
            name: theirs[0].name,
            phone: theirs[0].phone,
            city: theirs[0].address.split("\n").at(-1) ?? "",
            orders: theirs,
            spentMinor: sold.reduce((sum, order)=>sum + order.totalMinor, 0),
            paidOrders: sold.length,
            last: theirs[0].createdAt,
            messages: messageCount.get(email) ?? 0
        };
    }).sort((a, b)=>b.last.localeCompare(a.last));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "a-heading-lg",
                        children: "Customers"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-md mt-1 max-w-2xl",
                        style: {
                            color: "var(--a-ink-variant)"
                        },
                        children: "Everyone who has placed an order, newest first — with what they bought and how to reach them. Built from the orders, so it is always up to date."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            customers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a-card px-6 py-12 text-center",
                style: {
                    borderRadius: "var(--a-radius-md)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-heading-sm",
                        children: "No customers yet"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-md mt-2",
                        style: {
                            color: "var(--a-ink-variant)"
                        },
                        children: "When someone places an order, they appear here."
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "a-card p-5",
                style: {
                    borderRadius: "var(--a-radius-md)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "a-heading-sm",
                        children: [
                            customers.length,
                            " customer",
                            customers.length === 1 ? "" : "s"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-2 divide-y",
                        role: "list",
                        children: customers.map((customer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                style: {
                                    borderColor: "var(--a-outline-variant)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            className: "flex cursor-pointer flex-wrap items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "min-w-[12rem] flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "a-body-md block",
                                                            children: customer.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "a-label block",
                                                            style: {
                                                                color: "var(--a-outline)"
                                                            },
                                                            children: [
                                                                customer.city,
                                                                " · last order ",
                                                                day(customer.last)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "a-body-sm",
                                                    children: [
                                                        customer.orders.length,
                                                        " order",
                                                        customer.orders.length === 1 ? "" : "s",
                                                        customer.messages ? ` · ${customer.messages} message${customer.messages === 1 ? "" : "s"}` : ""
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "a-body-md tabular-nums",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rupees"])(customer.spentMinor)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 grid gap-4 md:grid-cols-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "a-body-sm space-y-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                className: "underline",
                                                                href: `mailto:${customer.email}`,
                                                                children: customer.email
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 26
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                            lineNumber: 90,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                className: "underline",
                                                                href: `tel:${customer.phone}`,
                                                                children: customer.phone
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                                lineNumber: 91,
                                                                columnNumber: 26
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: "var(--a-ink-variant)"
                                                            },
                                                            children: [
                                                                "Spent ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rupees"])(customer.spentMinor),
                                                                " across ",
                                                                customer.paidOrders,
                                                                " paid order",
                                                                customer.paidOrders === 1 ? "" : "s",
                                                                "."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 23
                                                        }, this),
                                                        customer.messages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                            href: "/admin/messages",
                                                            className: "underline",
                                                            children: "See their messages →"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 44
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                    lineNumber: 89,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: customer.orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "a-body-sm",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: [
                                                                        "Order ",
                                                                        order.reference
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                                    lineNumber: 100,
                                                                    columnNumber: 27
                                                                }, this),
                                                                " · ",
                                                                day(order.createdAt),
                                                                " · ",
                                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$order$2d$words$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["STATUS_WORDS"][order.status].label,
                                                                " · ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$format$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["rupees"])(order.totalMinor),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "block",
                                                                    style: {
                                                                        color: "var(--a-ink-variant)"
                                                                    },
                                                                    children: order.items.map((item)=>item.poeticName).join(", ")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                                    lineNumber: 101,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, order.id, true, {
                                                            fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                            lineNumber: 88,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this)
                            }, customer.email, false, {
                                fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                                lineNumber: 73,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-body-sm",
                style: {
                    color: "var(--a-outline)"
                },
                children: [
                    "To send an order or add a tracking number, go to ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin/orders",
                        className: "underline",
                        children: "Orders"
                    }, void 0, false, {
                        fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                        lineNumber: 115,
                        columnNumber: 58
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/(protected)/customers/page.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/(protected)/customers/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/(protected)/customers/page.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/lib/admin/format.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Paise → "₹68,000", whole rupees, Indian digit grouping. Client-safe. */ __turbopack_context__.s([
    "rupees",
    ()=>rupees
]);
const rupees = (minor)=>`₹${Math.round(minor / 100).toLocaleString("en-IN")}`;
}),
"[project]/src/lib/admin/order-words.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Order states in plain words. Client-safe: shared by the Orders screen. */ __turbopack_context__.s([
    "PAYMENTS_LIVE",
    ()=>PAYMENTS_LIVE,
    "STATUS_WORDS",
    ()=>STATUS_WORDS
]);
const STATUS_WORDS = {
    pending: {
        label: "Not paid yet",
        hint: "The customer started paying but has not finished. Do not send.",
        tone: "wait"
    },
    paid: {
        label: "Paid — to send",
        hint: "Paid. Pack it and send it, then mark it as sent.",
        tone: "act"
    },
    dispatched: {
        label: "Sent",
        hint: "On its way to the customer.",
        tone: "done"
    },
    delivered: {
        label: "Delivered",
        hint: "The customer has it.",
        tone: "done"
    },
    failed: {
        label: "Payment failed",
        hint: "The payment did not go through. Nothing to send.",
        tone: "stop"
    },
    cancelled: {
        label: "Cancelled",
        hint: "Cancelled. Nothing to send.",
        tone: "stop"
    },
    refunded: {
        label: "Refunded",
        hint: "Money returned to the customer.",
        tone: "stop"
    }
};
const PAYMENTS_LIVE = false;
}),
"[project]/src/lib/admin/orders-admin.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "listOrders",
    ()=>listOrders,
    "markDelivered",
    ()=>markDelivered,
    "markDispatched",
    ()=>markDispatched,
    "saveOrderNote",
    ()=>saveOrderNote
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$discounts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/discounts.ts [app-rsc] (ecmascript)");
;
;
;
;
function listOrders() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$discounts$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureDiscountStorage"])();
    const orders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT id, reference, status, full_name, email, phone, address_line1, address_line2,
              city, state, postcode, total_minor, shipping_minor, created_at, paid_at,
              dispatched_at, tracking, notes, discount_code, discount_minor
         FROM customer_order ORDER BY created_at DESC LIMIT 500`).all();
    if (orders.length === 0) return [];
    const items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT order_id, title, poetic_name, handle, quantity, line_total_minor
         FROM order_item WHERE order_id IN (${orders.map(()=>"?").join(",")})`).all(...orders.map((order)=>order.id));
    return orders.map((row)=>({
            id: row.id,
            reference: row.reference,
            status: row.status,
            name: row.full_name,
            email: row.email,
            phone: row.phone,
            address: [
                row.address_line1,
                row.address_line2,
                `${row.city}, ${row.state} ${row.postcode}`
            ].filter(Boolean).join("\n"),
            totalMinor: row.total_minor,
            shippingMinor: row.shipping_minor,
            createdAt: row.created_at,
            paidAt: row.paid_at,
            dispatchedAt: row.dispatched_at,
            tracking: row.tracking,
            notes: row.notes,
            discountCode: row.discount_code,
            discountMinor: row.discount_minor ?? 0,
            items: items.filter((item)=>item.order_id === row.id).map((item)=>({
                    title: item.title,
                    poeticName: item.poetic_name,
                    handle: item.handle,
                    quantity: item.quantity,
                    lineTotalMinor: item.line_total_minor
                }))
        }));
}
function markDispatched(id, tracking) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE customer_order SET status = 'dispatched', dispatched_at = ?, tracking = ?
        WHERE id = ? AND status = 'paid'`).run(new Date().toISOString(), tracking.trim() || null, id);
    return Number(result.changes) === 1;
}
function markDelivered(id) {
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE customer_order SET status = 'delivered' WHERE id = ? AND status = 'dispatched'`).run(id);
    return Number(result.changes) === 1;
}
function saveOrderNote(id, notes) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`UPDATE customer_order SET notes = ? WHERE id = ?`).run(notes.trim() || null, id);
}
}),
"[project]/src/lib/discounts.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureDiscountStorage",
    ()=>ensureDiscountStorage,
    "evaluate",
    ()=>evaluate,
    "getDiscount",
    ()=>getDiscount,
    "listDiscounts",
    ()=>listDiscounts,
    "normaliseCode",
    ()=>normaliseCode,
    "recordUse",
    ()=>recordUse,
    "saveDiscount",
    ()=>saveDiscount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
;
;
let ready = false;
function ensureDiscountStorage() {
    if (ready) return;
    const d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])();
    d.exec(`CREATE TABLE IF NOT EXISTS discount_code (
    code            TEXT PRIMARY KEY,
    kind            TEXT NOT NULL CHECK (kind IN ('percent', 'amount')),
    value           INTEGER NOT NULL CHECK (value > 0),
    min_order_minor INTEGER NOT NULL DEFAULT 0 CHECK (min_order_minor >= 0),
    starts_at       TEXT,
    ends_at         TEXT,
    max_uses        INTEGER CHECK (max_uses IS NULL OR max_uses > 0),
    used_count      INTEGER NOT NULL DEFAULT 0,
    active          INTEGER NOT NULL DEFAULT 1,
    note            TEXT NOT NULL DEFAULT '',
    created_at      TEXT NOT NULL,
    CHECK (kind <> 'percent' OR value <= 90)
  )`);
    const columns = d.prepare("PRAGMA table_info(customer_order)").all().map((column)=>column.name);
    if (!columns.includes("discount_code")) d.exec("ALTER TABLE customer_order ADD COLUMN discount_code TEXT");
    if (!columns.includes("discount_minor")) {
        d.exec("ALTER TABLE customer_order ADD COLUMN discount_minor INTEGER NOT NULL DEFAULT 0 CHECK (discount_minor >= 0)");
    }
    ready = true;
}
const toCode = (row)=>({
        code: row.code,
        kind: row.kind,
        value: row.value,
        minOrderMinor: row.min_order_minor,
        startsAt: row.starts_at,
        endsAt: row.ends_at,
        maxUses: row.max_uses,
        usedCount: row.used_count,
        active: row.active === 1,
        note: row.note,
        createdAt: row.created_at
    });
const normaliseCode = (code)=>code.trim().toUpperCase().replace(/\s+/g, "");
function listDiscounts() {
    ensureDiscountStorage();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT * FROM discount_code ORDER BY active DESC, created_at DESC").all().map(toCode);
}
function getDiscount(code) {
    ensureDiscountStorage();
    const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT * FROM discount_code WHERE code = ?").get(normaliseCode(code));
    return row ? toCode(row) : undefined;
}
function saveDiscount(value) {
    ensureDiscountStorage();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO discount_code (code, kind, value, min_order_minor, starts_at, ends_at, max_uses, active, note, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
       ON CONFLICT(code) DO UPDATE SET kind = excluded.kind, value = excluded.value,
         min_order_minor = excluded.min_order_minor, starts_at = excluded.starts_at, ends_at = excluded.ends_at,
         max_uses = excluded.max_uses, active = excluded.active, note = excluded.note`).run(value.code, value.kind, value.value, value.minOrderMinor, value.startsAt, value.endsAt, value.maxUses, value.active ? 1 : 0, value.note, new Date().toISOString());
}
function evaluate(code, subtotalMinor, now = new Date()) {
    const found = getDiscount(code);
    const sorry = "That code is not valid.";
    if (!found || !found.active) return {
        ok: false,
        error: sorry
    };
    if (found.startsAt && now < new Date(found.startsAt)) return {
        ok: false,
        error: sorry
    };
    if (found.endsAt && now > new Date(found.endsAt)) return {
        ok: false,
        error: "That code has expired."
    };
    if (found.maxUses !== null && found.usedCount >= found.maxUses) return {
        ok: false,
        error: "That code has been used up."
    };
    if (subtotalMinor < found.minOrderMinor) {
        return {
            ok: false,
            error: `That code needs an order of at least ₹${(found.minOrderMinor / 100).toLocaleString("en-IN")}.`
        };
    }
    const raw = found.kind === "percent" ? Math.round(subtotalMinor * found.value / 100) : found.value;
    // Never to zero: an order must still cost something (the orders table
    // requires a positive total), and a ₹0 payment cannot go through Razorpay.
    const discountMinor = Math.max(0, Math.min(raw, subtotalMinor - 100));
    return {
        ok: true,
        code: found.code,
        discountMinor,
        label: found.kind === "percent" ? `${found.value}% off` : `₹${(found.value / 100).toLocaleString("en-IN")} off`
    };
}
function recordUse(code) {
    if (!code) return;
    ensureDiscountStorage();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("UPDATE discount_code SET used_count = used_count + 1 WHERE code = ?").run(code);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05akeby._.js.map