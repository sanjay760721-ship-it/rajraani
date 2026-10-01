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
"[project]/src/components/admin/DiscountsManager.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DiscountsManager",
    ()=>DiscountsManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$99dc36__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:99dc36 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
/**
 * Discount codes, laid out like the Menu screen: a header with "+ New code",
 * then one card per code with its state in plain words and an Edit button.
 */ const rupees = (minor)=>`₹${Math.round(minor / 100).toLocaleString("en-IN")}`;
const day = (iso)=>iso ? iso.slice(0, 10) : "";
function state(code, now) {
    if (!code.active) return {
        label: "Switched off",
        tone: "var(--a-outline)"
    };
    if (code.startsAt && now < new Date(code.startsAt)) return {
        label: `Starts ${day(code.startsAt)}`,
        tone: "var(--a-status-progress)"
    };
    if (code.endsAt && now > new Date(code.endsAt)) return {
        label: "Expired",
        tone: "var(--a-outline)"
    };
    if (code.maxUses !== null && code.usedCount >= code.maxUses) return {
        label: "Used up",
        tone: "var(--a-outline)"
    };
    return {
        label: "Working now",
        tone: "var(--a-status-done)"
    };
}
function toInput(code) {
    return code ? {
        code: code.code,
        kind: code.kind,
        amount: code.kind === "percent" ? code.value : code.value / 100,
        minOrderRupees: code.minOrderMinor / 100,
        startsOn: day(code.startsAt),
        endsOn: day(code.endsAt),
        maxUses: code.maxUses === null ? "" : String(code.maxUses),
        note: code.note,
        active: code.active
    } : {
        code: "",
        kind: "percent",
        amount: 10,
        minOrderRupees: 0,
        startsOn: "",
        endsOn: "",
        maxUses: "",
        note: "",
        active: true
    };
}
function CodeForm({ initial, isNew, onDone }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const set = (key, next)=>setValue((current)=>({
                ...current,
                [key]: next
            }));
    const save = ()=>startTransition(async ()=>{
            setError(null);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$99dc36__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveDiscountAction"])(value, isNew);
            if (!result.ok) return setError(result.error);
            onDone();
            router.refresh();
        });
    const field = (label, input, hint)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "a-label block",
                    style: {
                        color: "var(--a-outline)"
                    },
                    children: label
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                    lineNumber: 59,
                    columnNumber: 7
                }, this),
                input,
                hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "a-label mt-1 block",
                    style: {
                        color: "var(--a-outline)"
                    },
                    children: hint
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                    lineNumber: 61,
                    columnNumber: 15
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/DiscountsManager.tsx",
            lineNumber: 58,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: [
                    field("Code shoppers type", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "a-input mt-1 w-full uppercase",
                        value: value.code,
                        disabled: !isNew,
                        onChange: (event)=>set("code", event.target.value.toUpperCase()),
                        placeholder: "FESTIVE10"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this), isNew ? "Letters and numbers, 3 to 20." : "The code itself cannot be changed."),
                    field("Kind", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        className: "a-select mt-1 w-full",
                        value: value.kind,
                        onChange: (event)=>set("kind", event.target.value),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "percent",
                                children: "A percentage off"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: "amount",
                                children: "An amount off (₹)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this)),
                    field(value.kind === "percent" ? "How much off (%)" : "How much off (₹)", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "a-input mt-1 w-full",
                        inputMode: "numeric",
                        value: String(value.amount),
                        onChange: (event)=>set("amount", Number(event.target.value.replace(/[^\d]/g, "")) || 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this), value.kind === "percent" ? "1 to 90." : "Whole rupees, e.g. 2000."),
                    field("Minimum order (₹)", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "a-input mt-1 w-full",
                        inputMode: "numeric",
                        value: value.minOrderRupees ? String(value.minOrderRupees) : "",
                        placeholder: "None",
                        onChange: (event)=>set("minOrderRupees", Number(event.target.value.replace(/[^\d]/g, "")) || 0)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this), "Leave empty for any order."),
                    field("Starts on", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        className: "a-input mt-1 w-full",
                        value: value.startsOn,
                        onChange: (event)=>set("startsOn", event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 90,
                        columnNumber: 29
                    }, this), "Leave empty to start now."),
                    field("Ends on", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        className: "a-input mt-1 w-full",
                        value: value.endsOn,
                        onChange: (event)=>set("endsOn", event.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 91,
                        columnNumber: 27
                    }, this), "Leave empty to never end."),
                    field("Limit on uses", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "a-input mt-1 w-full",
                        inputMode: "numeric",
                        value: value.maxUses,
                        placeholder: "No limit",
                        onChange: (event)=>set("maxUses", event.target.value.replace(/[^\d]/g, ""))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 92,
                        columnNumber: 33
                    }, this), "Counted when an order is paid."),
                    field("Note (only you see this)", /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "a-input mt-1 w-full",
                        value: value.note,
                        onChange: (event)=>set("note", event.target.value),
                        placeholder: "e.g. Diwali newsletter"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 93,
                        columnNumber: 44
                    }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 self-end pb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: value.active,
                                onChange: (event)=>set("active", event.target.checked)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "a-body-sm",
                                children: "Switched on"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "a-body-sm",
                style: {
                    color: "var(--a-negative)"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                lineNumber: 99,
                columnNumber: 16
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "a-btn-primary",
                        disabled: pending,
                        onClick: save,
                        children: pending ? "Saving…" : isNew ? "Create the code" : "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "a-btn-secondary",
                        onClick: onDone,
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(CodeForm, "LL0H5lvfUDh3ab1qrFDxznlDf7Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = CodeForm;
function DiscountsManager({ codes, paymentsLive }) {
    _s1();
    const [creating, setCreating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editing, setEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [now] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "DiscountsManager.useState": ()=>new Date()
    }["DiscountsManager.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex flex-wrap items-end justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "a-heading-lg",
                                children: "Discount codes"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a-body-md mt-1 max-w-2xl",
                                style: {
                                    color: "var(--a-ink-variant)"
                                },
                                children: "Codes shoppers type at checkout for money off. The shop checks each code itself when the order is placed, so a code cannot be faked."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 118,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "a-btn-primary",
                        disabled: creating,
                        onClick: ()=>setCreating(true),
                        children: "+ New code"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            !paymentsLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-body-sm px-4 py-3",
                style: {
                    backgroundColor: "color-mix(in srgb, var(--a-status-waiting) 12%, transparent)",
                    borderRadius: "var(--a-radius)"
                },
                children: "Codes already work in the cart, but online payment is not switched on yet — so no real order can use one until it is."
            }, void 0, false, {
                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                lineNumber: 131,
                columnNumber: 9
            }, this) : null,
            creating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "a-card space-y-4 p-5",
                style: {
                    borderRadius: "var(--a-radius-md)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "a-heading-sm",
                        children: "New code"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeForm, {
                        initial: toInput(),
                        isNew: true,
                        onDone: ()=>setCreating(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this) : null,
            codes.length === 0 && !creating ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a-card px-6 py-12 text-center",
                style: {
                    borderRadius: "var(--a-radius-md)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-heading-sm",
                        children: "No codes yet"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-md mt-2",
                        style: {
                            color: "var(--a-ink-variant)"
                        },
                        children: "Press + New code to make your first, e.g. FESTIVE10 for 10% off."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 147,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                role: "list",
                children: codes.map((code)=>{
                    const status = state(code, now);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "a-card p-5",
                        style: {
                            borderRadius: "var(--a-radius-md)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-w-[12rem] flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "a-body-lg tracking-wider",
                                                children: code.code
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                                lineNumber: 157,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "a-body-sm",
                                                style: {
                                                    color: "var(--a-ink-variant)"
                                                },
                                                children: [
                                                    code.kind === "percent" ? `${code.value}% off` : `${rupees(code.value)} off`,
                                                    code.minOrderMinor ? ` orders over ${rupees(code.minOrderMinor)}` : "",
                                                    code.endsAt ? ` · until ${day(code.endsAt)}` : "",
                                                    ` · used ${code.usedCount}${code.maxUses !== null ? ` of ${code.maxUses}` : ""} time${code.usedCount === 1 && code.maxUses === null ? "" : "s"}`,
                                                    code.note ? ` · ${code.note}` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                                lineNumber: 158,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                        lineNumber: 156,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "a-label px-2 py-1",
                                        style: {
                                            color: status.tone,
                                            border: `1px solid ${status.tone}`,
                                            borderRadius: "var(--a-radius-pill)"
                                        },
                                        children: status.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                        lineNumber: 166,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        className: "a-btn-secondary",
                                        onClick: ()=>setEditing(editing === code.code ? null : code.code),
                                        children: editing === code.code ? "Close" : "Edit"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                        lineNumber: 169,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                lineNumber: 155,
                                columnNumber: 17
                            }, this),
                            editing === code.code ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 border-t pt-4",
                                style: {
                                    borderColor: "var(--a-outline-variant)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CodeForm, {
                                    initial: toInput(code),
                                    isNew: false,
                                    onDone: ()=>setEditing(null)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                    lineNumber: 175,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                                lineNumber: 174,
                                columnNumber: 19
                            }, this) : null
                        ]
                    }, code.code, true, {
                        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                        lineNumber: 154,
                        columnNumber: 15
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/admin/DiscountsManager.tsx",
                lineNumber: 150,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/DiscountsManager.tsx",
        lineNumber: 116,
        columnNumber: 5
    }, this);
}
_s1(DiscountsManager, "9t62SvOeHQb/PbVmHGi9WYbIDNI=");
_c1 = DiscountsManager;
var _c, _c1;
__turbopack_context__.k.register(_c, "CodeForm");
__turbopack_context__.k.register(_c1, "DiscountsManager");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin/data:99dc36 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveDiscountAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6033f6ffeae0969565fc23c2a47cb5150a01ea2621":{"name":"saveDiscountAction"}},"src/lib/admin/discount-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6033f6ffeae0969565fc23c2a47cb5150a01ea2621", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveDiscountAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0w21q_z._.js.map