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
;
;
;
function listOrders() {
    const orders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`SELECT id, reference, status, full_name, email, phone, address_line1, address_line2,
              city, state, postcode, total_minor, shipping_minor, created_at, paid_at,
              dispatched_at, tracking, notes
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1q1hry8._.js.map