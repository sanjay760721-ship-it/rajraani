module.exports = [
"[project]/src/components/ContactForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactForm",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$data$3a$d3a2a3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/contact/data:d3a2a3 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
/**
 * Name, email, message — the right-hand column of the contact page.
 *
 * `useActionState` rather than an onSubmit handler, so the form posts and
 * validates with JavaScript disabled too. A contact form is the last thing on a
 * site that should require a working bundle: someone whose script failed is
 * exactly the person who needs to tell us something.
 */ const INITIAL = {
    status: "idle"
};
function ContactForm({ submitLabel }) {
    const [state, action, pending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$contact$2f$data$3a$d3a2a3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["submitEnquiryAction"], INITIAL);
    if (state.status === "sent") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "border border-rule p-6",
            role: "status",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-body text-ink",
                    children: "Thank you — we have your message."
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactForm.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-body mt-2 text-ink-muted",
                    children: "Someone reads every one of these, usually the same day."
                }, void 0, false, {
                    fileName: "[project]/src/components/ContactForm.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ContactForm.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: action,
        className: "space-y-5",
        children: [
            state.status === "error" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "text-body border border-error px-4 py-3 text-error",
                children: state.message
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                name: "name",
                label: "Name",
                type: "text",
                autoComplete: "name"
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                name: "email",
                label: "Email",
                type: "email",
                autoComplete: "email"
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "enquiry-message",
                        className: "text-body block text-ink-body",
                        children: [
                            "Message ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                                fileName: "[project]/src/components/ContactForm.tsx",
                                lineNumber: 47,
                                columnNumber: 19
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        id: "enquiry-message",
                        name: "message",
                        rows: 7,
                        required: true,
                        maxLength: 5000,
                        className: "text-body mt-2 w-full border border-rule-input bg-bg px-3 py-2 text-ink focus:border-ink focus:outline-none"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "submit",
                disabled: pending,
                className: "cta-primary w-full disabled:opacity-60",
                children: pending ? "Sending…" : submitLabel
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactForm.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
function Required() {
    // The asterisk is decoration; `required` on the input is what a screen reader
    // announces, so the glyph is hidden from it rather than read as "star".
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "aria-hidden": true,
        children: "*"
    }, void 0, false, {
        fileName: "[project]/src/components/ContactForm.tsx",
        lineNumber: 79,
        columnNumber: 10
    }, this);
}
function Field({ name, label, type, autoComplete }) {
    const id = `enquiry-${name}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "text-body block text-ink-body",
                children: [
                    label,
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Required, {}, void 0, false, {
                        fileName: "[project]/src/components/ContactForm.tsx",
                        lineNumber: 102,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                name: name,
                type: type,
                required: true,
                autoComplete: autoComplete,
                className: "text-body mt-2 w-full border border-rule-input bg-bg px-3 py-2 text-ink focus:border-ink focus:outline-none"
            }, void 0, false, {
                fileName: "[project]/src/components/ContactForm.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ContactForm.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ImageLink.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageLink",
    ()=>ImageLink
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function ImageLink({ href, label, duplicate = false, className, style, children }) {
    if (!href) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: className,
            style: style,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ImageLink.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this);
    }
    const a11y = duplicate ? {
        tabIndex: -1,
        "aria-hidden": true
    } : {
        "aria-label": label
    };
    if (/^https?:\/\//.test(href)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: href,
            target: "_blank",
            rel: "noopener noreferrer",
            className: className,
            style: style,
            ...a11y,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ImageLink.tsx",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: className,
        style: style,
        ...a11y,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ImageLink.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ScrollReveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollReveal",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
function ScrollReveal({ children, className = "", delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        className: className,
        initial: {
            opacity: 0,
            y: 16
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8,
            ease: [
                0.16,
                1,
                0.3,
                1
            ],
            delay: delay / 1000
        },
        whileInView: {
            opacity: 1,
            y: 0
        },
        viewport: {
            once: true,
            margin: "-50px 0px -15% 0px"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ScrollReveal.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/CampaignSlideshow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CampaignSlideshow",
    ()=>CampaignSlideshow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$StoryCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/StoryCarousel.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function CampaignSlideshow({ slides }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$StoryCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StoryCarousel"], {
        slides: slides.map((slide)=>({
                ...slide,
                eyebrow: "Campaign"
            })),
        label: "Campaigns",
        ground: "night",
        frame: "full",
        imageSide: "left"
    }, void 0, false, {
        fileName: "[project]/src/components/sections/CampaignSlideshow.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/EditorialSlideshow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorialSlideshow",
    ()=>EditorialSlideshow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$StoryCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/StoryCarousel.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function EditorialSlideshow({ slides }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$StoryCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StoryCarousel"], {
        slides: slides,
        label: "Editorial collections",
        ground: "ivory",
        frame: "arch",
        imageSide: "right"
    }, void 0, false, {
        fileName: "[project]/src/components/sections/EditorialSlideshow.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/components/sections/HeroCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroCarousel",
    ()=>HeroCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImageLink.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const INTERVAL_MS = 6500;
function HeroCarousel({ slides, isPageTitle = true }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userPaused, setUserPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const count = slides.length;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        const sync = ()=>setReduced(query.matches);
        sync();
        query.addEventListener("change", sync);
        return ()=>query.removeEventListener("change", sync);
    }, []);
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>setActive((index % count + count) % count), [
        count
    ]);
    const running = !paused && !userPaused && !reduced && count > 1;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!running) return;
        const timer = setTimeout(()=>go(active + 1), INTERVAL_MS);
        return ()=>clearTimeout(timer);
    }, [
        running,
        active,
        go
    ]);
    if (count === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: rootRef,
        className: "relative h-[calc(100svh-100px)] max-h-[960px] min-h-[560px] w-full overflow-hidden bg-night",
        "aria-label": "Featured collections",
        "aria-roledescription": "carousel",
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        onFocus: ()=>setPaused(true),
        onBlur: (event)=>{
            if (!rootRef.current?.contains(event.relatedTarget)) setPaused(false);
        },
        onKeyDown: (event)=>{
            if (event.key === "ArrowRight") go(active + 1);
            if (event.key === "ArrowLeft") go(active - 1);
        },
        children: [
            isPageTitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "sr-only",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].name,
                    ": handwoven Banarasi textiles"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                lineNumber: 80,
                columnNumber: 22
            }, this) : null,
            slides.map((slide, index)=>{
                const isActive = index === active;
                const dark = slide.ink === "dark";
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    role: "group",
                    "aria-roledescription": "slide",
                    "aria-label": `${index + 1} of ${count}: ${slide.title}`,
                    "aria-hidden": !isActive,
                    className: `absolute inset-0 transition-opacity duration-[1400ms] ease-[var(--ease-out)] ${isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0",
                            style: {
                                backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toneFor"])(slide.art.desktop.tone)
                            },
                            children: slide.art.desktop.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: slide.art.desktop.src,
                                alt: slide.title,
                                fill: true,
                                sizes: "100vw",
                                loading: index === 0 ? "eager" : "lazy",
                                fetchPriority: index === 0 ? "high" : "auto",
                                className: `object-cover object-center transition-transform ease-linear ${isActive && !reduced ? "scale-[1.07] duration-[9000ms]" : "scale-100 duration-[1400ms]"}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                lineNumber: 98,
                                columnNumber: 17
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageLink"], {
                            href: slide.ctaHref,
                            duplicate: true,
                            className: "absolute inset-0"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                            lineNumber: 112,
                            columnNumber: 13
                        }, this),
                        !dark && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgb(23_19_31/0.78),rgb(23_19_31/0.18)_45%,transparent_70%),linear-gradient(to_right,rgb(23_19_31/0.35),transparent_55%)]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                            lineNumber: 115,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `pointer-events-none absolute inset-0 flex items-end pb-36 md:pb-40 ${dark ? "caption-dark" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wrap-wide",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-[560px]",
                                    children: [
                                        slide.eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `flex items-center gap-3 font-ui text-[11px] font-medium uppercase tracking-[0.28em] ${dark ? "text-accent" : "text-gold-soft"} ${isActive ? "animate-[riseIn_900ms_var(--ease-out)_both]" : ""}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "h-px w-8 bg-current",
                                                    "aria-hidden": "true"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 23
                                                }, this),
                                                slide.eyebrow
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                            lineNumber: 125,
                                            columnNumber: 21
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: `mt-5 font-display text-[clamp(2.75rem,1.6rem+4.4vw,5.5rem)] leading-[0.98] tracking-[0.01em] ${dark ? "text-ink" : "text-paper"} ${isActive ? "animate-[riseIn_1000ms_var(--ease-out)_120ms_both]" : ""}`,
                                            children: slide.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                            lineNumber: 134,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: `mt-5 max-w-[42ch] font-serif text-[18px] leading-[1.55] md:text-[20px] ${dark ? "text-ink-body" : "text-paper/90"} ${isActive ? "animate-[riseIn_1000ms_var(--ease-out)_220ms_both]" : ""}`,
                                            children: slide.body
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: slide.ctaHref,
                                            tabIndex: isActive ? 0 : -1,
                                            className: `cta-secondary pointer-events-auto mt-8 ${isActive ? "animate-[riseIn_1000ms_var(--ease-out)_320ms_both]" : ""}`,
                                            children: slide.ctaLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                            lineNumber: 148,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                    lineNumber: 123,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                lineNumber: 122,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                            lineNumber: 121,
                            columnNumber: 13
                        }, this)
                    ]
                }, slide.id, true, {
                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this);
            }),
            count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap-wide flex items-end gap-3 pb-7 md:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                            className: "grid flex-1 grid-cols-[repeat(auto-fit,minmax(0,1fr))] gap-3 md:gap-6",
                            children: slides.map((slide, index)=>{
                                const isActive = index === active;
                                const done = index < active;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>go(index),
                                        "aria-label": `Show slide ${index + 1}: ${slide.title}`,
                                        "aria-current": isActive ? "true" : undefined,
                                        className: `group block w-full cursor-pointer pt-3 text-left ${slide.ink === "dark" && isActive ? "text-ink" : "text-paper"}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative block h-px w-full overflow-hidden bg-current/30",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "absolute inset-0 origin-left bg-gold-soft",
                                                    style: isActive ? running ? {
                                                        animation: `drawLine ${INTERVAL_MS}ms linear both`
                                                    } : {
                                                        transform: "scaleX(1)"
                                                    } : {
                                                        transform: done ? "scaleX(1)" : "scaleX(0)",
                                                        opacity: done ? 0.5 : 1
                                                    }
                                                }, isActive ? `run-${active}` : "idle", false, {
                                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                lineNumber: 179,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-3 hidden items-baseline gap-2 font-ui text-[12px] tracking-[0.06em] opacity-70 transition-opacity group-hover:opacity-100 md:flex",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tabular-nums text-gold-soft",
                                                        children: String(index + 1).padStart(2, "0")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `truncate ${isActive ? "opacity-100" : ""}`,
                                                        children: slide.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                                lineNumber: 192,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                        lineNumber: 172,
                                        columnNumber: 21
                                    }, this)
                                }, slide.id, false, {
                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                    lineNumber: 171,
                                    columnNumber: 19
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setUserPaused((value)=>!value),
                            className: "inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-paper/40 text-paper backdrop-blur-sm transition-colors hover:border-paper hover:bg-paper/10",
                            "aria-label": userPaused ? "Play slideshow" : "Pause slideshow",
                            children: userPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "10",
                                height: "12",
                                viewBox: "0 0 10 12",
                                fill: "currentColor",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0 0l10 6-10 6z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                    lineNumber: 209,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                lineNumber: 208,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "10",
                                height: "12",
                                viewBox: "0 0 10 12",
                                fill: "currentColor",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "3",
                                        height: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                        lineNumber: 213,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "7",
                                        width: "3",
                                        height: "12"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                        lineNumber: 214,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                                lineNumber: 212,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                            lineNumber: 201,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/HeroCarousel.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/HeroCarousel.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/StoresSlideshow.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoresSlideshow",
    ()=>StoresSlideshow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$StoryCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/StoryCarousel.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function StoresSlideshow({ slides }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$StoryCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StoryCarousel"], {
        slides: slides.map((slide)=>({
                ...slide,
                eyebrow: "By appointment"
            })),
        label: "Our rooms",
        ground: "sand",
        frame: "full",
        imageSide: "right"
    }, void 0, false, {
        fileName: "[project]/src/components/sections/StoresSlideshow.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/StoryCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StoryCarousel",
    ()=>StoryCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Frame.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ImageLink.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const GROUND = {
    ivory: "bg-bg-alt text-ink",
    night: "booti-ground bg-night text-on-night",
    sand: "bg-bg-sand text-ink"
};
function StoryCarousel({ slides, label, ground, frame, imageSide }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reduced, setReduced] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const count = slides.length;
    const night = ground === "night";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReduced(query.matches);
    }, []);
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>setActive((index % count + count) % count), [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (paused || reduced || count < 2) return;
        const timer = setTimeout(()=>go(active + 1), 8000);
        return ()=>clearTimeout(timer);
    }, [
        paused,
        reduced,
        count,
        active,
        go
    ]);
    if (count === 0) return null;
    const imageFirst = imageSide === "left";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: rootRef,
        "aria-label": label,
        "aria-roledescription": "carousel",
        className: `relative ${GROUND[ground]}`,
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        onFocus: ()=>setPaused(true),
        onBlur: (event)=>{
            if (!rootRef.current?.contains(event.relatedTarget)) setPaused(false);
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `grid min-h-[min(88vh,860px)] ${imageFirst ? "md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]" : "md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `relative min-h-[70vh] md:min-h-0 ${imageFirst ? "md:order-1" : "md:order-2"} ${frame === "arch" ? "flex items-center justify-center px-6 py-12 md:px-12 md:py-16" : ""}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: frame === "arch" ? "frame-arch relative aspect-[3/4] h-auto w-full max-w-[520px] md:h-[min(74vh,720px)] md:w-auto" : "absolute inset-0 overflow-hidden",
                        children: [
                            slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": index !== active,
                                    className: `absolute inset-0 transition-opacity duration-[1200ms] ease-[var(--ease-out)] ${index === active ? "z-10 opacity-100" : "z-0 opacity-0"}`,
                                    style: {
                                        backgroundColor: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Frame$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toneFor"])(slide.art.desktop.tone)
                                    },
                                    children: [
                                        slide.art.desktop.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: slide.art.desktop.src,
                                            alt: slide.title,
                                            fill: true,
                                            sizes: frame === "arch" ? "(min-width: 768px) 540px, 100vw" : "(min-width: 768px) 55vw, 100vw",
                                            loading: "lazy",
                                            className: `object-cover object-center transition-transform duration-[2400ms] ease-[var(--ease-out)] ${index === active ? "scale-100" : "scale-[1.06]"}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                            lineNumber: 119,
                                            columnNumber: 19
                                        }, this) : null,
                                        index === active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ImageLink$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageLink"], {
                                            href: slide.ctaHref,
                                            duplicate: true,
                                            className: "absolute inset-0"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                            lineNumber: 130,
                                            columnNumber: 38
                                        }, this)
                                    ]
                                }, slide.id, true, {
                                    fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                    lineNumber: 110,
                                    columnNumber: 15
                                }, this)),
                            frame === "arch" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "pointer-events-none absolute inset-2.5 z-20 rounded-[inherit] border border-paper/60"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                        lineNumber: 102,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center ${imageFirst ? "md:order-2" : "md:order-1"}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full px-6 py-16 md:px-[clamp(32px,6vw,112px)] md:py-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative min-h-[340px]",
                                children: slides.map((slide, index)=>{
                                    const isActive = index === active;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        role: "group",
                                        "aria-roledescription": "slide",
                                        "aria-label": `${index + 1} of ${count}`,
                                        "aria-hidden": !isActive,
                                        className: `transition-opacity duration-700 ${isActive ? "relative opacity-100" : "pointer-events-none absolute inset-x-0 top-0 opacity-0"}`,
                                        children: [
                                            slide.eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `eyebrow ${night ? "text-gold-soft" : ""} ${isActive ? "animate-[riseIn_800ms_var(--ease-out)_both]" : ""}`,
                                                children: slide.eyebrow
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                                lineNumber: 157,
                                                columnNumber: 23
                                            }, this) : null,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: `mt-4 font-display text-[clamp(2.25rem,1.5rem+2.8vw,4rem)] leading-[1.02] ${night ? "text-on-night" : "text-ink"} ${isActive ? "animate-[riseIn_900ms_var(--ease-out)_80ms_both]" : ""}`,
                                                children: slide.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                                lineNumber: 161,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `mt-6 h-px w-16 ${night ? "bg-gold-soft/60" : "bg-gold"}`,
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                                lineNumber: 168,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `mt-6 max-w-[46ch] font-serif text-[18px] leading-[1.65] md:text-[19px] ${night ? "text-on-night-muted" : "text-ink-body"} ${isActive ? "animate-[riseIn_900ms_var(--ease-out)_160ms_both]" : ""}`,
                                                children: slide.body
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                                lineNumber: 169,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: slide.ctaHref,
                                                tabIndex: isActive ? 0 : -1,
                                                className: `${night ? "cta-secondary" : "cta-primary"} mt-9 ${isActive ? "animate-[riseIn_900ms_var(--ease-out)_240ms_both]" : ""}`,
                                                children: slide.ctaLabel
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, slide.id, true, {
                                        fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                        lineNumber: 146,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                lineNumber: 142,
                                columnNumber: 13
                            }, this),
                            count > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 flex items-center gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `font-ui text-[13px] tabular-nums tracking-[0.12em] ${night ? "text-gold-soft" : "text-accent"}`,
                                        "aria-live": "polite",
                                        children: [
                                            String(active + 1).padStart(2, "0"),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mx-2 inline-block h-px w-8 translate-y-[-4px] bg-current opacity-50",
                                                "aria-hidden": "true"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                                lineNumber: 192,
                                                columnNumber: 19
                                            }, this),
                                            String(count).padStart(2, "0")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                        lineNumber: 190,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto flex gap-2",
                                        children: [
                                            {
                                                label: "Previous",
                                                step: -1,
                                                d: "M9 1 2 7.5 9 14"
                                            },
                                            {
                                                label: "Next",
                                                step: 1,
                                                d: "M2 1l7 6.5L2 14"
                                            }
                                        ].map((arrow)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>go(active + arrow.step),
                                                "aria-label": `${arrow.label} slide`,
                                                className: `inline-flex size-12 cursor-pointer items-center justify-center rounded-full border transition-colors ${night ? "border-on-night/25 text-on-night hover:border-gold-soft hover:text-gold-soft" : "border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-bg"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    width: "11",
                                                    height: "15",
                                                    viewBox: "0 0 11 15",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.3",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: arrow.d
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                                    lineNumber: 211,
                                                    columnNumber: 23
                                                }, this)
                                            }, arrow.label, false, {
                                                fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                                lineNumber: 200,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                        lineNumber: 195,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/StoryCarousel.tsx",
                    lineNumber: 140,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/sections/StoryCarousel.tsx",
            lineNumber: 91,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/sections/StoryCarousel.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/sections/VideoPlayer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VideoPlayer",
    ()=>VideoPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function VideoPlayer({ src, poster, className }) {
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    /** Set when the viewer presses pause. Stops the observer resuming playback. */ const pausedByUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMuted, setIsMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isFullscreen, setIsFullscreen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const play = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const video = videoRef.current;
        if (!video) return;
        // Muted playback is the only kind browsers will start unprompted.
        video.muted = video.muted || !video.dataset.unmuted;
        void video.play().catch(()=>{
        /* Autoplay refused. The controls still work; nothing to recover here. */ });
    }, []);
    /* --- Autoplay, gated on visibility ------------------------------------ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        const shell = shellRef.current;
        if (!video || !shell) return;
        video.defaultMuted = true;
        video.muted = true;
        video.playsInline = true;
        const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const observer = new IntersectionObserver(([entry])=>{
            if (!entry) return;
            if (entry.isIntersecting) {
                if (!pausedByUser.current && !reduced) play();
            } else if (!video.paused) {
                // Not a user pause: the flag stays clear so it resumes on return.
                video.pause();
            }
        }, // A quarter visible is enough to be worth playing, and the same figure
        // going the other way stops it flickering on and off at the boundary.
        {
            threshold: 0.25
        });
        observer.observe(shell);
        return ()=>observer.disconnect();
    }, [
        play
    ]);
    /* --- Keep React in step with the element ------------------------------ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const video = videoRef.current;
        if (!video) return;
        const onPlay = ()=>setIsPlaying(true);
        const onPause = ()=>setIsPlaying(false);
        const onVolume = ()=>setIsMuted(video.muted);
        video.addEventListener("play", onPlay);
        video.addEventListener("pause", onPause);
        video.addEventListener("volumechange", onVolume);
        return ()=>{
            video.removeEventListener("play", onPlay);
            video.removeEventListener("pause", onPause);
            video.removeEventListener("volumechange", onVolume);
        };
    }, []);
    /* --- Fullscreen ------------------------------------------------------- */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const onChange = ()=>setIsFullscreen(Boolean(document.fullscreenElement));
        document.addEventListener("fullscreenchange", onChange);
        return ()=>document.removeEventListener("fullscreenchange", onChange);
    }, []);
    const togglePlay = (event)=>{
        event?.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            pausedByUser.current = false;
            play();
        } else {
            pausedByUser.current = true;
            video.pause();
        }
    };
    const toggleMute = (event)=>{
        event.stopPropagation();
        const video = videoRef.current;
        if (!video) return;
        const next = !video.muted;
        video.muted = next;
        // Remembered so `play()` does not silently re-mute a video the viewer
        // deliberately turned up.
        if (next) delete video.dataset.unmuted;
        else video.dataset.unmuted = "true";
        setIsMuted(next);
    };
    const toggleFullscreen = (event)=>{
        event.stopPropagation();
        const shell = shellRef.current;
        if (!shell) return;
        if (document.fullscreenElement) {
            void document.exitFullscreen().catch(()=>{});
        } else {
            // The shell rather than the <video>, so the controls come with it.
            void shell.requestFullscreen().catch(()=>{});
        }
    };
    const button = "flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3.5 py-2 " + "text-xs text-white backdrop-blur-md transition-all hover:bg-black/80 " + "focus:outline-none focus:ring-1 focus:ring-white/50";
    const label = "hidden sm:inline text-[10px] uppercase tracking-wider";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: shellRef,
        className: "group relative h-full w-full bg-black",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                src: src,
                loop: true,
                muted: true,
                playsInline: true,
                preload: "metadata",
                poster: poster,
                onClick: togglePlay,
                className: `${className ?? ""} cursor-pointer`
            }, void 0, false, {
                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                lineNumber: 161,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-6 bottom-6 z-20 flex items-center gap-2 select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: togglePlay,
                        "aria-label": isPlaying ? "Pause video" : "Play video",
                        className: button,
                        children: [
                            isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-3.5 w-3.5",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                "aria-hidden": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "6",
                                        y: "4",
                                        width: "4",
                                        height: "16",
                                        rx: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "14",
                                        y: "4",
                                        width: "4",
                                        height: "16",
                                        rx: "1"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                        lineNumber: 183,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-3.5 w-3.5 translate-x-0.5",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                "aria-hidden": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8 5v14l11-7z"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                lineNumber: 186,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: label,
                                children: isPlaying ? "Pause" : "Play"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                lineNumber: 190,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: toggleMute,
                        "aria-label": isMuted ? "Unmute video" : "Mute video",
                        className: button,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-3.5 w-3.5",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": true,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M11 5L6 9H2v6h4l5 4V5z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    isMuted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "23",
                                                y1: "9",
                                                x2: "17",
                                                y2: "15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                                lineNumber: 212,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                x1: "17",
                                                y1: "9",
                                                x2: "23",
                                                y2: "15"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                                lineNumber: 213,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                        lineNumber: 211,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: label,
                                children: isMuted ? "Unmute" : "Mute"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: toggleFullscreen,
                        "aria-label": isFullscreen ? "Exit full screen" : "Full screen",
                        className: button,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "h-3.5 w-3.5",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                "aria-hidden": true,
                                children: isFullscreen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M9 3v6H3M15 3v6h6M9 21v-6H3M15 21v-6h6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                    lineNumber: 239,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M3 9V3h6M21 9V3h-6M3 15v6h6M21 15v6h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: label,
                                children: isFullscreen ? "Exit" : "Full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/sections/VideoPlayer.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/VideoPlayer.tsx",
        lineNumber: 160,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/contact/data:d3a2a3 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitEnquiryAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60b1c593ac73299b0f4fcb01cbcfcbbed957ba4661":{"name":"submitEnquiryAction"}},"src/lib/contact/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60b1c593ac73299b0f4fcb01cbcfcbbed957ba4661", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "submitEnquiryAction");
;
}),
];

//# sourceMappingURL=src_0v18oxz._.js.map