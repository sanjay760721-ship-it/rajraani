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
"[project]/src/components/admin/TextFinder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextFinder",
    ()=>TextFinder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$6cd53c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:6cd53c [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
/**
 * "Change text" — find any words on the site and change them.
 *
 * Type a few words you can see on the website. Every place they appear is
 * listed, with where it is in plain words and a box to change it. Save changes
 * that one place and it is live straight away.
 */ const normalise = (text)=>text.toLowerCase().replace(/\s+/g, " ").trim();
function Highlight({ text, query }) {
    const q = normalise(query);
    if (!q) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/admin/TextFinder.tsx",
        lineNumber: 20,
        columnNumber: 18
    }, this);
    const at = text.toLowerCase().indexOf(q);
    if (at < 0) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/admin/TextFinder.tsx",
        lineNumber: 22,
        columnNumber: 22
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            text.slice(0, at),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("mark", {
                style: {
                    backgroundColor: "var(--a-accent-container)",
                    color: "inherit"
                },
                children: text.slice(at, at + q.length)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            text.slice(at + q.length)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/TextFinder.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_c = Highlight;
function EntryCard({ entry, query, compact = false, onSaved }) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(entry.value);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [savedAt, setSavedAt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const changed = value !== entry.value;
    const save = ()=>startTransition(async ()=>{
            setError(null);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$6cd53c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["changeTextAction"])(entry.ref, entry.value, value);
            if (!result.ok) return setError(result.error);
            onSaved(value);
            setSavedAt(true);
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "a-card p-5",
        style: {
            borderRadius: "var(--a-radius-md)"
        },
        children: [
            compact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-label",
                style: {
                    color: "var(--a-outline)"
                },
                children: (entry.trail.length > 1 ? entry.trail.slice(1) : entry.trail).join(" › ")
            }, void 0, false, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-body-sm",
                style: {
                    color: "var(--a-ink)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: entry.place
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    entry.trail.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: [
                            " › ",
                            entry.trail.join(" › ")
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 71,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            changed || !query ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-body-sm mt-2",
                style: {
                    color: "var(--a-ink-variant)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Highlight, {
                    text: entry.value.length > 240 ? `${entry.value.slice(0, 240)}…` : entry.value,
                    query: query
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/TextFinder.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this),
            entry.multiline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: "a-input mt-3 w-full",
                rows: Math.min(8, Math.max(2, Math.ceil(value.length / 80) + value.split("\n").length - 1)),
                value: value,
                onChange: (event)=>{
                    setValue(event.target.value);
                    setSavedAt(false);
                },
                "aria-label": `${entry.place} › ${entry.trail.join(" › ")}`
            }, void 0, false, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 83,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: "a-input mt-3 w-full",
                value: value,
                onChange: (event)=>{
                    setValue(event.target.value);
                    setSavedAt(false);
                },
                "aria-label": `${entry.place} › ${entry.trail.join(" › ")}`
            }, void 0, false, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "a-btn-primary",
                        disabled: !changed || pending,
                        onClick: save,
                        children: pending ? "Saving…" : "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this),
                    changed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "a-btn-secondary",
                        onClick: ()=>setValue(entry.value),
                        children: "Undo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this) : null,
                    savedAt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-body-sm",
                        style: {
                            color: "var(--a-status-done)"
                        },
                        children: "✓ Saved — live on the site now."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 115,
                        columnNumber: 11
                    }, this) : null,
                    compact ? null : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: entry.viewHref,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "a-label ml-auto underline",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: "See it on the site ↗"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "a-body-sm mt-2",
                style: {
                    color: "var(--a-negative)"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/TextFinder.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(EntryCard, "P4Fey3thjTUU0TyPSsbs5bTmEqQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c1 = EntryCard;
function TextFinder({ entries: initial, initialPlace, initialQuery = "" }) {
    _s1();
    const [entries, setEntries] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initial);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialQuery);
    const [place, setPlace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialPlace ?? null);
    /** After a save: the old wording, if it still appears elsewhere. */ const [echo, setEcho] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const places = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TextFinder.useMemo[places]": ()=>[
                ...new Set(initial.map({
                    "TextFinder.useMemo[places]": (entry)=>entry.place
                }["TextFinder.useMemo[places]"]))
            ]
    }["TextFinder.useMemo[places]"], [
        initial
    ]);
    const results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TextFinder.useMemo[results]": ()=>{
            const q = normalise(query);
            return entries.filter({
                "TextFinder.useMemo[results]": (entry)=>(!place || entry.place === place) && (!q || normalise(entry.value).includes(q) || normalise(`${entry.place} ${entry.trail.join(" ")}`).includes(q))
            }["TextFinder.useMemo[results]"]);
        }
    }["TextFinder.useMemo[results]"], [
        entries,
        query,
        place
    ]);
    const showing = results.slice(0, 80);
    /** Places grouped the way the site is: every page, the homepage, the rest. */ const placeGroups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TextFinder.useMemo[placeGroups]": ()=>{
            const groups = [
                {
                    title: "On every page",
                    places: []
                },
                {
                    title: "Homepage",
                    places: []
                },
                {
                    title: "Pages",
                    places: []
                }
            ];
            for (const name of places){
                const first = entries.find({
                    "TextFinder.useMemo[placeGroups].first": (entry)=>entry.place === name
                }["TextFinder.useMemo[placeGroups].first"]);
                const group = first.ref.kind === "site" ? 0 : first.ref.kind === "home" ? 1 : 2;
                groups[group].places.push({
                    name,
                    count: entries.filter({
                        "TextFinder.useMemo[placeGroups]": (entry)=>entry.place === name
                    }["TextFinder.useMemo[placeGroups]"]).length
                });
            }
            return groups.filter({
                "TextFinder.useMemo[placeGroups]": (group)=>group.places.length
            }["TextFinder.useMemo[placeGroups]"]);
        }
    }["TextFinder.useMemo[placeGroups]"], [
        places,
        entries
    ]);
    /** Within one place, the text grouped by block ("Block 3 · Photo with text"). */ const byBlock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TextFinder.useMemo[byBlock]": ()=>{
            const blocks = new Map();
            for (const entry of showing){
                const heading = entry.trail.length > 1 ? entry.trail[0] : "About this page";
                blocks.set(heading, [
                    ...blocks.get(heading) ?? [],
                    entry
                ]);
            }
            return [
                ...blocks.entries()
            ];
        }
    }["TextFinder.useMemo[byBlock]"], [
        showing
    ]);
    const onSaved = (entry)=>(value)=>{
            setEntries((current)=>current.map((other)=>other.id === entry.id ? {
                        ...other,
                        value
                    } : other));
            // A short fact (an email, a phone number, "₹25,000") is often repeated
            // inside other sentences. Say where it still lives.
            const old = entry.value.trim();
            if (old.length >= 5 && old.length <= 80) {
                const count = entries.filter((other)=>other.id !== entry.id && normalise(other.value).includes(normalise(old))).length;
                setEcho(count > 0 ? {
                    old,
                    count
                } : null);
            }
        };
    const grouped = !!place && !query;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "a-heading-lg",
                        children: "Change text"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-md mt-1 max-w-2xl",
                        style: {
                            color: "var(--a-ink-variant)"
                        },
                        children: [
                            "Type any words you can see on your website, or pick a place on the left. Change the words and press ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Save"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/TextFinder.tsx",
                                lineNumber: 209,
                                columnNumber: 21
                            }, this),
                            " — each one goes live on its own."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "a-card sticky top-0 z-10 p-4",
                style: {
                    borderRadius: "var(--a-radius-md)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "search",
                    autoFocus: true,
                    value: query,
                    onChange: (event)=>setQuery(event.target.value),
                    placeholder: "Find words on the site — e.g.  Free shipping   or   Visit our stores",
                    className: "a-input w-full",
                    style: {
                        fontSize: 18,
                        padding: "14px 16px"
                    },
                    "aria-label": "Words to find"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/TextFinder.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            echo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "status",
                className: "a-body-sm flex flex-wrap items-center gap-3 px-4 py-3",
                style: {
                    backgroundColor: "color-mix(in srgb, var(--a-status-waiting) 12%, transparent)",
                    borderRadius: "var(--a-radius)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: [
                                    "The old wording is still in ",
                                    echo.count,
                                    " other place",
                                    echo.count === 1 ? "" : "s"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/admin/TextFinder.tsx",
                                lineNumber: 233,
                                columnNumber: 13
                            }, this),
                            " ",
                            "— “",
                            echo.old,
                            "”. Change ",
                            echo.count === 1 ? "it" : "them",
                            " too, so the site says the same thing everywhere."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 232,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "a-btn-secondary",
                        onClick: ()=>{
                            setPlace(null);
                            setQuery(echo.old);
                            setEcho(null);
                        },
                        children: [
                            "Show ",
                            echo.count === 1 ? "it" : "them"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "a-label underline",
                        onClick: ()=>setEcho(null),
                        children: "Dismiss"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 247,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 227,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Places on the site",
                        className: "a-card p-3 lg:sticky lg:top-28",
                        style: {
                            borderRadius: "var(--a-radius-md)"
                        },
                        children: placeGroups.map((group)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-3 last:mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "a-label px-2 pb-1 pt-2",
                                        style: {
                                            color: "var(--a-outline)"
                                        },
                                        children: group.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-0.5",
                                        children: group.places.map(({ name, count })=>{
                                            const active = place === name;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    "aria-current": active ? "true" : undefined,
                                                    onClick: ()=>{
                                                        setPlace(active ? null : name);
                                                        setQuery("");
                                                    },
                                                    className: "flex w-full items-center gap-2 px-2 py-1.5 text-left",
                                                    style: {
                                                        borderRadius: "var(--a-radius)",
                                                        backgroundColor: active ? "var(--a-accent-container)" : undefined
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "a-body-sm min-w-0 flex-1 truncate",
                                                            children: name.replace(/ \(.*\)$/, "")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/TextFinder.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "a-label tabular-nums",
                                                            style: {
                                                                color: "var(--a-outline)"
                                                            },
                                                            children: count
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/admin/TextFinder.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/TextFinder.tsx",
                                                    lineNumber: 264,
                                                    columnNumber: 23
                                                }, this)
                                            }, name, false, {
                                                fileName: "[project]/src/components/admin/TextFinder.tsx",
                                                lineNumber: 263,
                                                columnNumber: 21
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                                        lineNumber: 259,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, group.title, true, {
                                fileName: "[project]/src/components/admin/TextFinder.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 255,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 space-y-4",
                        children: !query && !place ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "a-card px-6 py-12 text-center",
                            style: {
                                borderRadius: "var(--a-radius-md)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "a-heading-sm",
                                    children: "What would you like to change?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/TextFinder.tsx",
                                    lineNumber: 288,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "a-body-md mt-2",
                                    style: {
                                        color: "var(--a-ink-variant)"
                                    },
                                    children: "Type a few words from the site in the box above, or pick a place on the left to see all of its text."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/TextFinder.tsx",
                                    lineNumber: 289,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/TextFinder.tsx",
                            lineNumber: 287,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap items-baseline justify-between gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "a-heading-sm",
                                            children: [
                                                query ? `“${query}”` : place,
                                                grouped && showing[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: showing[0].viewHref,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "a-label ml-3 underline",
                                                    style: {
                                                        color: "var(--a-outline)"
                                                    },
                                                    children: "See it on the site ↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/TextFinder.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 21
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/TextFinder.tsx",
                                            lineNumber: 297,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "a-body-sm",
                                            style: {
                                                color: "var(--a-outline)"
                                            },
                                            children: results.length === 0 ? "Nothing found. Try fewer words, or check the spelling as it appears on the site." : results.length > showing.length ? `${results.length} places — showing the first ${showing.length}. Add more words to narrow it down.` : grouped ? `${results.length} piece${results.length === 1 ? "" : "s"} of text` : `${results.length} place${results.length === 1 ? "" : "s"}${query && place ? ` in ${place}` : ""}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/TextFinder.tsx",
                                            lineNumber: 305,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/TextFinder.tsx",
                                    lineNumber: 296,
                                    columnNumber: 15
                                }, this),
                                grouped ? byBlock.map(([heading, members])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "a-label pt-2",
                                                style: {
                                                    color: "var(--a-ink)"
                                                },
                                                children: heading
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/TextFinder.tsx",
                                                lineNumber: 319,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-3",
                                                role: "list",
                                                children: members.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntryCard, {
                                                        entry: entry,
                                                        query: query,
                                                        compact: true,
                                                        onSaved: onSaved(entry)
                                                    }, entry.id, false, {
                                                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                                                        lineNumber: 322,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/TextFinder.tsx",
                                                lineNumber: 320,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, heading, true, {
                                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                                        lineNumber: 318,
                                        columnNumber: 19
                                    }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3",
                                    role: "list",
                                    children: showing.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EntryCard, {
                                            entry: entry,
                                            query: query,
                                            onSaved: onSaved(entry)
                                        }, entry.id, false, {
                                            fileName: "[project]/src/components/admin/TextFinder.tsx",
                                            lineNumber: 330,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/TextFinder.tsx",
                                    lineNumber: 328,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/TextFinder.tsx",
                            lineNumber: 295,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/TextFinder.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/TextFinder.tsx",
                lineNumber: 253,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/TextFinder.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_s1(TextFinder, "uCj/+3hJkgM0GSaHtzo1Sckq7Cc=");
_c2 = TextFinder;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Highlight");
__turbopack_context__.k.register(_c1, "EntryCard");
__turbopack_context__.k.register(_c2, "TextFinder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin/data:6cd53c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changeTextAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"70260759ea2488b9b9dee6a9a3ac059989f75cd2bd":{"name":"changeTextAction"}},"src/lib/admin/text-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("70260759ea2488b9b9dee6a9a3ac059989f75cd2bd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "changeTextAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0qyja3u._.js.map