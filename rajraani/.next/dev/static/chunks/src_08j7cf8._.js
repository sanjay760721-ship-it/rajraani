(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/site-editor/SiteEditorPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteEditorPanel",
    ()=>SiteEditorPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$2591c9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:2591c9 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$258095__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:258095 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
const MODE_KEY = "rj-edit-mode";
const GOLD = "var(--color-accent)";
const INK = "var(--color-ink)";
const MUTED = "var(--color-ink-muted)";
const FONT = "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif";
const normalise = (text)=>text.toLowerCase().replace(/[“”"‘’']/g, "").replace(/\s+/g, " ").trim();
function readMode() {
    try {
        return sessionStorage.getItem(MODE_KEY) === "on";
    } catch  {
        return false;
    }
}
function writeMode(on) {
    try {
        if (on) sessionStorage.setItem(MODE_KEY, "on");
        else sessionStorage.removeItem(MODE_KEY);
    } catch  {
    /* private window: edit mode just will not survive a reload */ }
}
/** The photo file behind an <img>, unwrapping Next's optimiser URL. */ function imageSrc(img) {
    const raw = img.getAttribute("src") ?? "";
    if (raw.startsWith("/_next/image")) {
        return new URL(raw, location.origin).searchParams.get("url") ?? raw;
    }
    try {
        return new URL(raw, location.origin).pathname;
    } catch  {
        return raw;
    }
}
function findText(start, texts) {
    let element = start;
    for(let depth = 0; element && depth < 5; depth++, element = element.parentElement){
        // A container holding a photo is a photo, not a sentence.
        if (element.querySelector("img, video")) break;
        const text = normalise(element.textContent ?? "");
        if (!text) continue;
        const exact = texts.filter((entry)=>normalise(entry.value) === text);
        if (exact.length) return {
            element,
            entries: exact
        };
        // The design sometimes adds to the words (quote marks) or splits them
        // (one line per row); match either way round.
        // Only near-whole matches: a short word ("Shipping") found somewhere inside
        // a big block of text is not what was clicked.
        const inside = texts.filter((entry)=>{
            const value = normalise(entry.value);
            const wraps = value.length >= 4 && text.includes(value) && text.length <= value.length + 6;
            const part = text.length >= 12 && value.includes(text);
            return wraps || part;
        }).sort((a, b)=>b.value.length - a.value.length);
        if (inside.length) return {
            element,
            entries: [
                inside[0]
            ]
        };
    }
    return null;
}
function findPhoto(x, y, photos) {
    const img = document.elementsFromPoint(x, y).find((node)=>node instanceof HTMLImageElement && !node.closest("[data-site-editor]"));
    if (!img) return null;
    const src = imageSrc(img);
    const entries = photos.filter((photo)=>photo.desktopSrc === src || photo.mobileSrc === src);
    return entries.length ? {
        element: img,
        entries
    } : null;
}
// ── Shared bits of UI ───────────────────────────────────────────────────────
function Button({ children, onClick, primary, disabled }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: onClick,
        disabled: disabled,
        style: {
            font: `600 14px ${FONT}`,
            padding: "10px 18px",
            borderRadius: 8,
            border: primary ? "none" : "1px solid var(--color-rule-strong)",
            background: primary ? INK : "var(--color-bg)",
            color: primary ? "var(--color-bg)" : INK,
            cursor: disabled ? "default" : "pointer",
            opacity: disabled ? 0.45 : 1
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c = Button;
function Where({ place, trail }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        style: {
            font: `13px/1.5 ${FONT}`,
            color: MUTED,
            margin: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                style: {
                    color: INK
                },
                children: place
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            trail.length ? ` › ${trail.join(" › ")}` : ""
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c1 = Where;
// ── The panels ──────────────────────────────────────────────────────────────
function TextPanel({ entry, onDone }) {
    _s();
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(entry.value);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const changed = value !== entry.value;
    const save = ()=>startTransition(async ()=>{
            setError(null);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$258095__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["changeTextAction"])(entry.ref, entry.value, value);
            if (!result.ok) return setError(result.error);
            onDone(true);
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    font: `600 18px ${FONT}`,
                    margin: "0 0 6px"
                },
                children: "Change these words"
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Where, {
                place: entry.place,
                trail: entry.trail
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                autoFocus: true,
                value: value,
                onChange: (event)=>setValue(event.target.value),
                rows: Math.min(12, Math.max(3, Math.ceil(value.length / 38) + value.split("\n").length - 1)),
                style: {
                    display: "block",
                    width: "100%",
                    marginTop: 16,
                    padding: 12,
                    font: `16px/1.5 ${FONT}`,
                    color: INK,
                    border: `2px solid ${GOLD}`,
                    borderRadius: 8,
                    resize: "vertical",
                    boxSizing: "border-box"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 181,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                style: {
                    color: "var(--color-error)",
                    font: `14px ${FONT}`
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 199,
                columnNumber: 16
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    marginTop: 16
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        primary: true,
                        onClick: save,
                        disabled: !changed || pending,
                        children: pending ? "Saving…" : "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        onClick: ()=>onDone(false),
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    font: `13px ${FONT}`,
                    color: MUTED,
                    marginTop: 14
                },
                children: "Saving changes the live website straight away."
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_s(TextPanel, "MCn7ce8EU8Pmg15D31yzSxwgfus=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c2 = TextPanel;
function PhotoPanel({ entry, media: initialMedia, onDone }) {
    _s1();
    const [media, setMedia] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMedia);
    const [chosen, setChosen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const upload = async (files)=>{
        if (!files?.length) return;
        setUploading(true);
        setError(null);
        const body = new FormData();
        body.append("file", files[0]);
        try {
            const response = await fetch("/admin/api/media", {
                method: "POST",
                body
            });
            const result = await response.json();
            if (!response.ok || !result.saved?.[0]) throw new Error(result.error ?? "The upload failed.");
            setMedia((current)=>[
                    result.saved[0],
                    ...current
                ]);
            setChosen(result.saved[0]);
        } catch (caught) {
            setError(caught.message);
        } finally{
            setUploading(false);
            if (input.current) input.current.value = "";
        }
    };
    const save = ()=>startTransition(async ()=>{
            if (!chosen) return;
            setError(null);
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$2591c9__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["changePhotoAction"])(entry.ref, entry.desktopSrc, chosen.src);
            if (!result.ok) return setError(result.error);
            onDone(true);
        });
    const current = chosen?.src ?? entry.desktopSrc;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    font: `600 18px ${FONT}`,
                    margin: "0 0 6px"
                },
                children: "Change this photo"
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Where, {
                place: entry.place,
                trail: entry.trail
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16,
                    borderRadius: 8,
                    overflow: "hidden",
                    background: "var(--color-bg-alt)",
                    aspectRatio: "4 / 3"
                },
                children: current ? // eslint-disable-next-line @next/next/no-img-element -- editor preview
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: current,
                    alt: "",
                    style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                    lineNumber: 268,
                    columnNumber: 11
                }, this) : null
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    font: `13px ${FONT}`,
                    color: MUTED,
                    margin: "6px 0 0"
                },
                children: chosen ? "New photo — press Save to use it." : "The photo on the website now."
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 271,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: input,
                type: "file",
                accept: "image/jpeg,image/png,image/webp,image/avif,image/heic",
                style: {
                    display: "none"
                },
                onChange: (event)=>upload(event.target.files)
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: ()=>input.current?.click(),
                    disabled: uploading,
                    children: uploading ? "Uploading…" : "📷 Upload a new photo"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                    lineNumber: 283,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this),
            media.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            font: `600 13px ${FONT}`,
                            color: INK,
                            margin: "18px 0 8px"
                        },
                        children: "Or pick one you uploaded before"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 290,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: 8
                        },
                        children: media.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setChosen(item),
                                "aria-label": `Use ${item.originalName}`,
                                style: {
                                    padding: 0,
                                    border: chosen?.id === item.id ? `3px solid ${GOLD}` : "1px solid var(--color-rule)",
                                    borderRadius: 6,
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    aspectRatio: "1",
                                    background: "var(--color-bg-alt)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.src,
                                    alt: "",
                                    loading: "lazy",
                                    style: {
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        display: "block"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                                    lineNumber: 309,
                                    columnNumber: 17
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                                lineNumber: 293,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 291,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 289,
                columnNumber: 9
            }, this) : null,
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                style: {
                    color: "var(--color-error)",
                    font: `14px ${FONT}`
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 316,
                columnNumber: 16
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    gap: 10,
                    marginTop: 18
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        primary: true,
                        onClick: save,
                        disabled: !chosen || pending,
                        children: pending ? "Saving…" : "Save"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                        onClick: ()=>onDone(false),
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 317,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    font: `13px ${FONT}`,
                    color: MUTED,
                    marginTop: 14
                },
                children: "The phone version of the page uses the same photo, cropped to fit."
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
_s1(PhotoPanel, "7G+ZDMuspg/l2KjqZXNARui+sjo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c3 = PhotoPanel;
function ChoosePanel({ entries, describe, onPick, onCancel }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    font: `600 18px ${FONT}`,
                    margin: "0 0 6px"
                },
                children: "This appears in more than one place"
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 343,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    font: `14px ${FONT}`,
                    color: MUTED
                },
                children: "Which one do you want to change?"
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 344,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "grid",
                    gap: 10,
                    marginTop: 12
                },
                children: entries.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onPick(entry),
                        style: {
                            textAlign: "left",
                            padding: 12,
                            border: "1px solid var(--color-rule)",
                            borderRadius: 8,
                            background: "var(--color-bg)",
                            cursor: "pointer"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Where, {
                                place: entry.place,
                                trail: entry.trail
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    font: `14px ${FONT}`,
                                    color: INK
                                },
                                children: describe(entry)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        ]
                    }, entry.id, true, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 347,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 345,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: onCancel,
                    children: "Cancel"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                    lineNumber: 359,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 358,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
        lineNumber: 342,
        columnNumber: 5
    }, this);
}
_c4 = ChoosePanel;
function NotHerePanel({ productEditHref, inMenu, onClose }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    font: `600 18px ${FONT}`,
                    margin: "0 0 6px"
                },
                children: inMenu ? "This is the menu" : "This can’t be changed from here yet"
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 376,
                columnNumber: 7
            }, this),
            inMenu ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    font: `15px/1.5 ${FONT}`,
                    color: INK
                },
                children: [
                    "The menu and everything in its dropdowns — campaigns, stories, photo tiles — is changed on the Menu screen.",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/admin/menu",
                        style: {
                            color: GOLD,
                            fontWeight: 600
                        },
                        children: "Edit the menu →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 381,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 378,
                columnNumber: 9
            }, this) : productEditHref ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    font: `15px/1.5 ${FONT}`,
                    color: INK
                },
                children: [
                    "Product names, prices, stories and photos are changed on the product itself.",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: productEditHref,
                        style: {
                            color: GOLD,
                            fontWeight: 600
                        },
                        children: "Edit this product →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 388,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 386,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    font: `15px/1.5 ${FONT}`,
                    color: INK
                },
                children: [
                    "Some parts — the footer links and the product listings — are managed elsewhere. If you need this changed, use",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/admin/text",
                        style: {
                            color: GOLD,
                            fontWeight: 600
                        },
                        children: "Change text"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 396,
                        columnNumber: 11
                    }, this),
                    " ",
                    "or ask your developer."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 393,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: 16
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Button, {
                    onClick: onClose,
                    children: "OK"
                }, void 0, false, {
                    fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                    lineNumber: 403,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 402,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
        lineNumber: 375,
        columnNumber: 5
    }, this);
}
_c5 = NotHerePanel;
function SiteEditorPanel({ context }) {
    _s2();
    // Restores edit mode after the reload that follows a save. Safe to read
    // here: this component is only ever rendered in the browser (ssr: false).
    const [on, setOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(readMode);
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const hovered = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resolve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SiteEditorPanel.useCallback[resolve]": (target, x, y)=>{
            if (target.closest("[data-site-editor]")) return null;
            // In the header only the site-wide lines (the top-bar tagline) are edited
            // in place. A menu link reading "Kala" is the menu, not the homepage
            // slide that happens to share its name — those go to the Menu screen.
            const inHeader = !!target.closest("header");
            const texts = inHeader ? context.texts.filter({
                "SiteEditorPanel.useCallback[resolve]": (entry)=>entry.ref.kind === "site"
            }["SiteEditorPanel.useCallback[resolve]"]) : context.texts;
            const text = findText(target, texts);
            if (text) return {
                kind: "text",
                ...text
            };
            const photo = inHeader ? null : findPhoto(x, y, context.photos);
            if (photo) return {
                kind: "photo",
                ...photo
            };
            if (target.closest("main, header, footer, aside")) return {
                kind: "none",
                element: target
            };
            return null;
        }
    }["SiteEditorPanel.useCallback[resolve]"], [
        context
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteEditorPanel.useEffect": ()=>{
            if (!on || open) return;
            const clearHover = {
                "SiteEditorPanel.useEffect.clearHover": ()=>{
                    if (hovered.current) {
                        hovered.current.style.outline = hovered.current.dataset.editorOutline ?? "";
                        hovered.current.style.cursor = "";
                        hovered.current = null;
                    }
                }
            }["SiteEditorPanel.useEffect.clearHover"];
            const over = {
                "SiteEditorPanel.useEffect.over": (event)=>{
                    const found = resolve(event.target, event.clientX, event.clientY);
                    const element = found && found.kind !== "none" ? found.element : null;
                    if (element === hovered.current) return;
                    clearHover();
                    if (element) {
                        element.dataset.editorOutline = element.style.outline;
                        element.style.outline = `2px dashed ${GOLD}`;
                        element.style.cursor = "pointer";
                        hovered.current = element;
                    }
                }
            }["SiteEditorPanel.useEffect.over"];
            const click = {
                "SiteEditorPanel.useEffect.click": (event)=>{
                    const found = resolve(event.target, event.clientX, event.clientY);
                    if (!found) return;
                    // Nothing editable here: let ordinary buttons work (closing a pop-up,
                    // opening the cart), but do not follow a link away from the page being
                    // edited — say why instead.
                    if (found.kind === "none" && !event.target.closest("a[href]")) return;
                    event.preventDefault();
                    event.stopPropagation();
                    clearHover();
                    if (found.kind === "text") {
                        setOpen(found.entries.length === 1 ? {
                            kind: "text",
                            entry: found.entries[0]
                        } : {
                            kind: "chooseText",
                            entries: found.entries
                        });
                    } else if (found.kind === "photo") {
                        setOpen(found.entries.length === 1 ? {
                            kind: "photo",
                            entry: found.entries[0]
                        } : {
                            kind: "choosePhoto",
                            entries: found.entries
                        });
                    } else {
                        // The header's menu links are edited on the Menu screen.
                        setOpen({
                            kind: "none",
                            inMenu: !!event.target.closest("header")
                        });
                    }
                }
            }["SiteEditorPanel.useEffect.click"];
            document.addEventListener("mouseover", over, true);
            document.addEventListener("click", click, true);
            return ({
                "SiteEditorPanel.useEffect": ()=>{
                    document.removeEventListener("mouseover", over, true);
                    document.removeEventListener("click", click, true);
                    clearHover();
                }
            })["SiteEditorPanel.useEffect"];
        }
    }["SiteEditorPanel.useEffect"], [
        on,
        open,
        resolve
    ]);
    const toggle = (next)=>{
        setOn(next);
        writeMode(next);
        if (!next) setOpen(null);
    };
    const done = (saved)=>{
        setOpen(null);
        // Reload to show the saved change exactly as visitors will see it.
        if (saved) location.reload();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-site-editor": true,
        style: {
            font: `14px ${FONT}`,
            color: INK
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: "fixed",
                    left: "50%",
                    bottom: 20,
                    transform: "translateX(-50%)",
                    zIndex: 2147483000,
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                    padding: "10px 12px 10px 18px",
                    background: INK,
                    color: "var(--color-bg)",
                    borderRadius: 999,
                    boxShadow: "0 8px 30px rgb(0 0 0 / 0.3)",
                    maxWidth: "calc(100vw - 24px)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            font: `14px ${FONT}`
                        },
                        children: on ? "✏️ Click any words or photo to change them" : "You’re signed in as the shop admin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 529,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>toggle(!on),
                        style: {
                            font: `600 14px ${FONT}`,
                            padding: "8px 16px",
                            borderRadius: 999,
                            border: "none",
                            background: on ? "var(--color-bg)" : GOLD,
                            color: on ? INK : "var(--color-bg)",
                            cursor: "pointer",
                            whiteSpace: "nowrap"
                        },
                        children: on ? "Done editing" : "✏️ Edit this page"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/admin",
                        style: {
                            color: "var(--color-bg)",
                            font: `13px ${FONT}`,
                            opacity: 0.8,
                            whiteSpace: "nowrap"
                        },
                        children: "Admin"
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 511,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "dialog",
                "aria-modal": "true",
                style: {
                    position: "fixed",
                    inset: 0,
                    zIndex: 2147483001,
                    background: "rgb(0 0 0 / 0.25)"
                },
                onClick: ()=>setOpen(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: (event)=>event.stopPropagation(),
                    style: {
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        width: "min(420px, 100vw)",
                        background: "var(--color-bg)",
                        padding: 24,
                        overflowY: "auto",
                        boxShadow: "-8px 0 30px rgb(0 0 0 / 0.15)",
                        boxSizing: "border-box"
                    },
                    children: [
                        open.kind === "text" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TextPanel, {
                            entry: open.entry,
                            onDone: done
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                            lineNumber: 576,
                            columnNumber: 37
                        }, this) : null,
                        open.kind === "photo" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PhotoPanel, {
                            entry: open.entry,
                            media: context.media,
                            onDone: done
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                            lineNumber: 577,
                            columnNumber: 38
                        }, this) : null,
                        open.kind === "chooseText" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoosePanel, {
                            entries: open.entries,
                            describe: (entry)=>entry.value.slice(0, 80),
                            onPick: (entry)=>setOpen({
                                    kind: "text",
                                    entry
                                }),
                            onCancel: ()=>setOpen(null)
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                            lineNumber: 579,
                            columnNumber: 15
                        }, this) : null,
                        open.kind === "choosePhoto" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoosePanel, {
                            entries: open.entries,
                            describe: ()=>"",
                            onPick: (entry)=>setOpen({
                                    kind: "photo",
                                    entry
                                }),
                            onCancel: ()=>setOpen(null)
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                            lineNumber: 587,
                            columnNumber: 15
                        }, this) : null,
                        open.kind === "none" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotHerePanel, {
                            productEditHref: context.productEditHref,
                            inMenu: open.inMenu,
                            onClose: ()=>setOpen(null)
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                            lineNumber: 595,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                    lineNumber: 561,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
                lineNumber: 555,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-editor/SiteEditorPanel.tsx",
        lineNumber: 509,
        columnNumber: 5
    }, this);
}
_s2(SiteEditorPanel, "vDteixIpFz4ze9nAq+IHDX+vHe0=");
_c6 = SiteEditorPanel;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "Where");
__turbopack_context__.k.register(_c2, "TextPanel");
__turbopack_context__.k.register(_c3, "PhotoPanel");
__turbopack_context__.k.register(_c4, "ChoosePanel");
__turbopack_context__.k.register(_c5, "NotHerePanel");
__turbopack_context__.k.register(_c6, "SiteEditorPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site-editor/SiteEditorPanel.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/site-editor/SiteEditorPanel.tsx [app-client] (ecmascript)"));
}),
"[project]/src/lib/admin/data:258095 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
"[project]/src/lib/admin/data:2591c9 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "changePhotoAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"70fcf7a8bb7dc28486e7320a7ef57cb4e092aaa02d":{"name":"changePhotoAction"}},"src/lib/admin/text-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("70fcf7a8bb7dc28486e7320a7ef57cb4e092aaa02d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "changePhotoAction");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_08j7cf8._.js.map