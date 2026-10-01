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
"[project]/src/components/admin/ProductForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductForm",
    ()=>ProductForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$cf8291__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:cf8291 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const EMPTY = {
    handle: "",
    title: "",
    poeticName: "",
    sku: "",
    priceRupees: 0,
    inventoryQuantity: 1,
    fulfilmentMode: "ready_to_ship",
    dispatchDaysMin: 10,
    dispatchDaysMax: 12,
    narrative: "",
    specColour: "",
    specTechnique: "",
    specFabric: "",
    specSpeciality: "",
    specCollectionNote: "",
    specNote: "",
    provenanceWorkshop: "",
    provenanceLoom: "",
    provenanceWeeks: 8,
    provenanceArtisans: 2,
    garmentType: "saree",
    weave: "",
    fabric: "",
    colourFamily: "",
    campaignSlug: "",
    motifs: [],
    zariTypes: [],
    published: false
};
function ProductForm({ product, vocabulary, campaigns }) {
    _s();
    const [state, formAction, pending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$cf8291__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveProductAction"], {
        errors: {}
    });
    const value = state.values ?? product ?? EMPTY;
    const errors = state.errors;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: formAction,
        className: "max-w-3xl space-y-12",
        children: [
            product ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "id",
                value: product.id
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 73,
                columnNumber: 18
            }, this) : null,
            errors.form ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "border px-4 py-3 a-label",
                style: {
                    borderColor: "var(--a-negative)",
                    color: "var(--a-negative)",
                    backgroundColor: "color-mix(in srgb, var(--a-negative) 6%, transparent)",
                    borderRadius: "var(--a-radius)"
                },
                children: errors.form
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 76,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "What it is",
                note: "The title describes the cloth. The name is what you call the piece.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Name",
                        name: "poeticName",
                        defaultValue: value.poeticName,
                        error: errors.poeticName,
                        hint: "Its proper name — Aparajita, not a description.",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Title",
                        name: "title",
                        defaultValue: value.title,
                        error: errors.title,
                        hint: "Colour, fabric, technique, garment. No mention of stock or dispatch.",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Web address",
                        name: "handle",
                        defaultValue: value.handle,
                        error: errors.handle,
                        hint: "Lower case, hyphens. Becomes /products/…",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "SKU",
                        name: "sku",
                        defaultValue: value.sku,
                        error: errors.sku,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Price and availability",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Price (₹)",
                            name: "priceRupees",
                            type: "number",
                            defaultValue: value.priceRupees || "",
                            error: errors.priceRupees,
                            hint: "Whole rupees.",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "How many",
                            name: "inventoryQuantity",
                            type: "number",
                            defaultValue: value.inventoryQuantity,
                            error: errors.inventoryQuantity,
                            hint: "Usually 1. Zero means sold out — the page still works.",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                            label: "Dispatch",
                            name: "fulfilmentMode",
                            options: vocabulary.fulfilment,
                            defaultValue: value.fulfilmentMode,
                            error: errors.fulfilmentMode,
                            hint: "Shows as a badge. Never put this in the title."
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "Dispatch from (days)",
                                    name: "dispatchDaysMin",
                                    type: "number",
                                    defaultValue: value.dispatchDaysMin,
                                    error: errors.dispatchDaysMin,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                    label: "to",
                                    name: "dispatchDaysMax",
                                    type: "number",
                                    defaultValue: value.dispatchDaysMax,
                                    error: errors.dispatchDaysMax,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "What it says",
                note: "The narrative is the moat. Around 90 words, specific to this piece.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextArea, {
                        label: "Narrative",
                        name: "narrative",
                        rows: 8,
                        defaultValue: value.narrative,
                        error: errors.narrative,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Colour",
                                name: "specColour",
                                defaultValue: value.specColour,
                                error: errors.specColour,
                                hint: "In words — 'Indigo blue'.",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Technique",
                                name: "specTechnique",
                                defaultValue: value.specTechnique,
                                error: errors.specTechnique,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Fabric",
                                name: "specFabric",
                                defaultValue: value.specFabric,
                                error: errors.specFabric,
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Speciality",
                                name: "specSpeciality",
                                defaultValue: value.specSpeciality,
                                hint: "Optional."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Collection note",
                                name: "specCollectionNote",
                                defaultValue: value.specCollectionNote,
                                hint: "Optional."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Note",
                                name: "specNote",
                                defaultValue: value.specNote,
                                hint: "Optional."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 167,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Where it came from",
                note: "This replaces reviews as the reason to trust the page.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Workshop",
                            name: "provenanceWorkshop",
                            defaultValue: value.provenanceWorkshop,
                            error: errors.provenanceWorkshop,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Loom",
                            name: "provenanceLoom",
                            defaultValue: value.provenanceLoom,
                            error: errors.provenanceLoom,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Weeks on the loom",
                            name: "provenanceWeeks",
                            type: "number",
                            defaultValue: value.provenanceWeeks,
                            error: errors.provenanceWeeks,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Weavers involved",
                            name: "provenanceArtisans",
                            type: "number",
                            defaultValue: value.provenanceArtisans,
                            error: errors.provenanceArtisans,
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/ProductForm.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "How it is classified",
                note: "These drive the filters. You can only choose from the agreed vocabulary — that is deliberate.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Garment",
                                name: "garmentType",
                                options: vocabulary.garment,
                                defaultValue: value.garmentType,
                                error: errors.garmentType
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Weave",
                                name: "weave",
                                options: vocabulary.weave,
                                defaultValue: value.weave,
                                error: errors.weave,
                                allowEmpty: true,
                                hint: "Leave blank for stitched garments — a suit is cut from cloth, not woven to shape."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Fabric",
                                name: "fabric",
                                options: vocabulary.fabric,
                                defaultValue: value.fabric,
                                error: errors.fabric
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Colour family",
                                name: "colourFamily",
                                options: vocabulary.colour,
                                defaultValue: value.colourFamily,
                                error: errors.colourFamily
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 217,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxGroup, {
                        label: "Motifs",
                        name: "motifs",
                        options: vocabulary.motif,
                        selected: value.motifs,
                        error: errors.motifs
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxGroup, {
                        label: "Zari",
                        name: "zariTypes",
                        options: vocabulary.zari,
                        selected: value.zariTypes,
                        error: errors.zariTypes
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                        label: "Campaign",
                        name: "campaignSlug",
                        options: campaigns.map((c)=>({
                                slug: c.slug,
                                name: c.name
                            })),
                        defaultValue: value.campaignSlug,
                        allowEmpty: true,
                        hint: "Optional."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 223,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Publishing",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-3 a-body-sm",
                        style: {
                            color: "var(--a-ink)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                name: "published",
                                defaultChecked: value.published,
                                className: "size-4 accent-ink"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            "Show this piece on the site"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-label",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: "Leave unticked to keep it as a draft while you finish the photographs."
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 border-t pt-6",
                style: {
                    borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: pending,
                        className: "a-btn-primary",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "a-label",
                            children: pending ? "Saving…" : "Save"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 254,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin",
                        className: "a-btn-ghost",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 248,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ProductForm.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(ProductForm, "OLMDlnbqeG9E7nZwNh9mRU8NtOU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = ProductForm;
/* ---------------------------------------------------------------- controls */ function Section({ title, note, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        className: "space-y-6 border-t pt-6",
        style: {
            borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: "sr-only",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "a-heading-sm",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-label mt-1",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: note
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 280,
                        columnNumber: 17
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ProductForm.tsx",
        lineNumber: 276,
        columnNumber: 5
    }, this);
}
_c1 = Section;
function Field({ label, name, error, hint, type = "text", ...rest }) {
    const describedBy = [
        hint ? `${name}-hint` : "",
        error ? `${name}-error` : ""
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "a-label block",
                style: {
                    color: "var(--a-outline)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: name,
                name: name,
                type: type,
                "aria-invalid": error ? true : undefined,
                "aria-describedby": describedBy || undefined,
                defaultValue: rest.defaultValue,
                className: `a-input w-full ${error ? "a-input-error" : ""}`,
                ...rest
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${name}-hint`,
                className: "a-label mt-1",
                style: {
                    color: "var(--a-outline)"
                },
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 325,
                columnNumber: 9
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${name}-error`,
                className: "a-label mt-1",
                style: {
                    color: "var(--a-negative)"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 330,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ProductForm.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
_c2 = Field;
function TextArea({ label, name, error, rows, defaultValue, required }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "a-label block",
                style: {
                    color: "var(--a-outline)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 355,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                id: name,
                name: name,
                rows: rows,
                defaultValue: defaultValue,
                required: required,
                "aria-invalid": error ? true : undefined,
                "aria-describedby": error ? `${name}-error` : undefined,
                className: `a-input w-full min-h-[120px] resize-y ${error ? "a-input-error" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                id: `${name}-error`,
                className: "a-label mt-1",
                style: {
                    color: "var(--a-negative)"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 371,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ProductForm.tsx",
        lineNumber: 354,
        columnNumber: 5
    }, this);
}
_c3 = TextArea;
function Select({ label, name, options, defaultValue, error, hint, allowEmpty = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: name,
                className: "a-label block",
                style: {
                    color: "var(--a-outline)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: name,
                name: name,
                defaultValue: defaultValue ?? "",
                "aria-invalid": error ? true : undefined,
                className: `a-select w-full ${error ? "a-input-error" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: allowEmpty ? "None" : "Choose…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this),
                    options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: option.slug,
                            children: option.name
                        }, option.slug, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 401,
                columnNumber: 7
            }, this),
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-label mt-1",
                style: {
                    color: "var(--a-outline)"
                },
                children: hint
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 415,
                columnNumber: 15
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-label mt-1",
                style: {
                    color: "var(--a-negative)"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 416,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ProductForm.tsx",
        lineNumber: 397,
        columnNumber: 5
    }, this);
}
_c4 = Select;
function CheckboxGroup({ label, name, options, selected, error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: "a-label",
                style: {
                    color: "var(--a-outline)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 436,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-x-6 gap-y-2",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 a-body-sm",
                        style: {
                            color: "var(--a-ink)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                name: name,
                                value: option.slug,
                                defaultChecked: selected.includes(option.slug),
                                className: "size-3.5 accent-ink"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 444,
                                columnNumber: 13
                            }, this),
                            option.name
                        ]
                    }, option.slug, true, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 437,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-label mt-1",
                style: {
                    color: "var(--a-negative)"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 455,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ProductForm.tsx",
        lineNumber: 435,
        columnNumber: 5
    }, this);
}
_c5 = CheckboxGroup;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ProductForm");
__turbopack_context__.k.register(_c1, "Section");
__turbopack_context__.k.register(_c2, "Field");
__turbopack_context__.k.register(_c3, "TextArea");
__turbopack_context__.k.register(_c4, "Select");
__turbopack_context__.k.register(_c5, "CheckboxGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/admin/data:cf8291 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveProductAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"604c8f943ec27aeea2ed355a39e376c1ba58a1c2dd":{"name":"saveProductAction"}},"src/lib/admin/product-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("604c8f943ec27aeea2ed355a39e376c1ba58a1c2dd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveProductAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1_c8_u8._.js.map