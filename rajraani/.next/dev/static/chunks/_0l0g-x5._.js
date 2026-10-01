(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)");
}),
"[project]/src/components/admin/OrdersBoard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrdersBoard",
    ()=>OrdersBoard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$aec91a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:aec91a [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$e4efab__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:e4efab [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$242ab0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:242ab0 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$order$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/order-words.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
/**
 * Orders, for someone who packs parcels.
 *
 * Tabs by what needs doing ("To send" first), not by database state. Each
 * order opens to show who, where, what, and one obvious next step.
 */ const rupees = (minor)=>`₹${(minor / 100).toLocaleString("en-IN")}`;
const when = (iso)=>new Date(iso).toLocaleString("en-IN", {
        day: "numeric",
        month: "short",
        hour: "numeric",
        minute: "2-digit"
    });
const TABS = [
    {
        id: "send",
        label: "To send",
        statuses: [
            "paid"
        ]
    },
    {
        id: "sent",
        label: "Sent",
        statuses: [
            "dispatched"
        ]
    },
    {
        id: "done",
        label: "Delivered",
        statuses: [
            "delivered"
        ]
    },
    {
        id: "unpaid",
        label: "Not paid",
        statuses: [
            "pending",
            "failed"
        ]
    },
    {
        id: "other",
        label: "Cancelled / refunded",
        statuses: [
            "cancelled",
            "refunded"
        ]
    },
    {
        id: "all",
        label: "All",
        statuses: [
            "pending",
            "paid",
            "failed",
            "cancelled",
            "dispatched",
            "delivered",
            "refunded"
        ]
    }
];
const TONE = {
    wait: "var(--a-status-waiting)",
    act: "var(--a-status-progress)",
    done: "var(--a-status-done)",
    stop: "var(--a-status-stopped)"
};
function StatusPill({ status }) {
    const words = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$order$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_WORDS"][status];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "a-label inline-block px-2 py-1",
        style: {
            color: TONE[words.tone],
            border: `1px solid ${TONE[words.tone]}`,
            borderRadius: "var(--a-radius-pill)"
        },
        children: words.label
    }, void 0, false, {
        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_c = StatusPill;
function OrderDetail({ order }) {
    _s();
    const [tracking, setTracking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(order.tracking ?? "");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(order.notes ?? "");
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const run = (action)=>startTransition(async ()=>{
            setError(null);
            const result = await action();
            if (!result.ok) setError(result.error ?? "That did not work.");
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-6 border-t px-5 py-5 md:grid-cols-3",
        style: {
            borderColor: "var(--a-outline-variant)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-label",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: "Customer"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-md mt-1",
                        children: order.name
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "underline",
                            href: `tel:${order.phone}`,
                            children: order.phone
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                            lineNumber: 66,
                            columnNumber: 34
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            className: "underline",
                            href: `mailto:${order.email}`,
                            children: order.email
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                            lineNumber: 67,
                            columnNumber: 34
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-label mt-4",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: "Send to"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-sm mt-1 whitespace-pre-line",
                        children: order.address
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-label",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: "What they bought"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "mt-1 space-y-1",
                        children: order.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "a-body-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `/products/${item.handle}`,
                                        target: "_blank",
                                        rel: "noreferrer",
                                        className: "underline",
                                        children: item.poeticName
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    item.quantity > 1 ? `× ${item.quantity} ` : "",
                                    "— ",
                                    rupees(item.lineTotalMinor)
                                ]
                            }, item.handle, true, {
                                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    order.discountMinor ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-sm mt-2",
                        children: [
                            "Discount (",
                            order.discountCode,
                            "): −",
                            rupees(order.discountMinor)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-sm mt-2",
                        children: [
                            "Delivery: ",
                            order.shippingMinor ? rupees(order.shippingMinor) : "free"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-md mt-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: [
                                "Total: ",
                                rupees(order.totalMinor)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                            lineNumber: 88,
                            columnNumber: 39
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-sm",
                        style: {
                            color: "var(--a-ink-variant)"
                        },
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$order$2d$words$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STATUS_WORDS"][order.status].hint
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    order.status === "paid" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "a-label block",
                                style: {
                                    color: "var(--a-outline)"
                                },
                                children: [
                                    "Courier tracking number (optional)",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        className: "a-input mt-1 w-full",
                                        value: tracking,
                                        onChange: (event)=>setTracking(event.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "a-btn-primary mt-3",
                                disabled: pending,
                                onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$e4efab__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markSentAction"])(order.id, tracking)),
                                children: pending ? "Saving…" : "Mark as sent"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this) : null,
                    order.status === "dispatched" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            order.tracking ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a-body-sm",
                                children: [
                                    "Tracking: ",
                                    order.tracking
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                lineNumber: 108,
                                columnNumber: 31
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "a-btn-primary mt-3",
                                disabled: pending,
                                onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$aec91a__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["markDeliveredAction"])(order.id)),
                                children: pending ? "Saving…" : "Mark as delivered"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "a-label block",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: [
                            "Your notes (only you see these)",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                className: "a-input mt-1 w-full",
                                rows: 2,
                                value: notes,
                                onChange: (event)=>setNotes(event.target.value),
                                onBlur: ()=>{
                                    if (notes !== (order.notes ?? "")) run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$242ab0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveOrderNoteAction"])(order.id, notes));
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "alert",
                        className: "a-body-sm",
                        style: {
                            color: "var(--a-negative)"
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 128,
                        columnNumber: 18
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(OrderDetail, "RwEBX9g9PJsnCwgOnynJbbL9JU4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c1 = OrderDetail;
function OrdersBoard({ orders, paymentsLive }) {
    _s1();
    const toSend = orders.filter((order)=>order.status === "paid").length;
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(toSend > 0 || orders.length === 0 ? "send" : "all");
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const statuses = TABS.find((entry)=>entry.id === tab).statuses;
    const q = query.trim().toLowerCase();
    const shown = orders.filter((order)=>statuses.includes(order.status) && (!q || `${order.reference} ${order.name} ${order.phone} ${order.email}`.toLowerCase().includes(q)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "a-heading-lg",
                        children: "Orders"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-md mt-1",
                        style: {
                            color: "var(--a-ink-variant)"
                        },
                        children: toSend > 0 ? `${toSend} order${toSend === 1 ? "" : "s"} paid and waiting to be sent.` : "Nothing waiting to be sent."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            !paymentsLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-body-sm px-4 py-3",
                style: {
                    backgroundColor: "color-mix(in srgb, var(--a-status-waiting) 12%, transparent)",
                    borderRadius: "var(--a-radius)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Online payment is not switched on yet."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    " Until it is, any order here is a test and no money was taken. Do not send anything for these."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                lineNumber: 160,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-2",
                children: [
                    TABS.map((entry)=>{
                        const count = orders.filter((order)=>entry.statuses.includes(order.status)).length;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            "aria-pressed": tab === entry.id,
                            className: tab === entry.id ? "a-btn-primary" : "a-btn-secondary",
                            onClick: ()=>setTab(entry.id),
                            children: [
                                entry.label,
                                " (",
                                count,
                                ")"
                            ]
                        }, entry.id, true, {
                            fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "search",
                        className: "a-input ml-auto w-64",
                        placeholder: "Find by name, phone or order no.",
                        value: query,
                        onChange: (event)=>setQuery(event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            orders.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a-card px-6 py-16 text-center",
                style: {
                    borderRadius: "var(--a-radius-lg)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-heading-sm",
                        children: "No orders yet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-md mt-2",
                        style: {
                            color: "var(--a-ink-variant)"
                        },
                        children: "When someone buys from the shop, their order appears here."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 196,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, this) : shown.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-body-md py-8 text-center",
                style: {
                    color: "var(--a-outline)"
                },
                children: "Nothing here."
            }, void 0, false, {
                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                lineNumber: 201,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                role: "list",
                children: shown.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "a-card overflow-hidden",
                        style: {
                            borderRadius: "var(--a-radius-md)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "flex w-full flex-wrap items-center gap-4 px-5 py-4 text-left",
                                "aria-expanded": openId === order.id,
                                onClick: ()=>setOpenId(openId === order.id ? null : order.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "min-w-0 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "a-body-md block",
                                                children: order.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "a-label block",
                                                style: {
                                                    color: "var(--a-outline)"
                                                },
                                                children: [
                                                    "Order ",
                                                    order.reference,
                                                    " · ",
                                                    when(order.createdAt),
                                                    " ·",
                                                    " ",
                                                    order.items.map((item)=>item.poeticName).join(", ")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                                lineNumber: 216,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                        lineNumber: 214,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "a-body-md",
                                        children: rupees(order.totalMinor)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusPill, {
                                        status: order.status
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                lineNumber: 208,
                                columnNumber: 15
                            }, this),
                            openId === order.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(OrderDetail, {
                                order: order
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                                lineNumber: 224,
                                columnNumber: 38
                            }, this) : null
                        ]
                    }, order.id, true, {
                        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                        lineNumber: 207,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/OrdersBoard.tsx",
                lineNumber: 205,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/OrdersBoard.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_s1(OrdersBoard, "7Pjv9Bz6v+epPpfMPR4KlhiciOw=");
_c2 = OrdersBoard;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "StatusPill");
__turbopack_context__.k.register(_c1, "OrderDetail");
__turbopack_context__.k.register(_c2, "OrdersBoard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin/data:242ab0 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveOrderNoteAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60fa5eebd74219b3e586d03e8ee9302f6522848f2a":{"name":"saveOrderNoteAction"}},"src/lib/admin/order-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60fa5eebd74219b3e586d03e8ee9302f6522848f2a", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveOrderNoteAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin/data:aec91a [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markDeliveredAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"406d4e18ea733793f0879a7406032d2bffa1d445dd":{"name":"markDeliveredAction"}},"src/lib/admin/order-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("406d4e18ea733793f0879a7406032d2bffa1d445dd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markDeliveredAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin/data:e4efab [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "markSentAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60a08e044fc2a9df392579d72919e10e375236e1c9":{"name":"markSentAction"}},"src/lib/admin/order-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60a08e044fc2a9df392579d72919e10e375236e1c9", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "markSentAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin/order-words.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0l0g-x5._.js.map