module.exports = [
"[project]/src/components/cinematic/CineFooter.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CINE_FOOTER_CSS",
    ()=>CINE_FOOTER_CSS,
    "CineFooter",
    ()=>CineFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$text$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site-text-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2d$defs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/site-text-defs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$9b11a8__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/data:9b11a8 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
;
function CineFooter({ data }) {
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const inputId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const siteText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$text$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSiteText"])();
    const promises = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2d$defs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["announcementParts"])(siteText);
    const phoneDigits = data.phone.replace(/[^0-9]/g, "");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "cine-footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cine-footer__sign",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-footer__name",
                        "aria-hidden": "true",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].name.toUpperCase()
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    siteText.tagline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-footer__tagline",
                        children: siteText.tagline
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                        lineNumber: 47,
                        columnNumber: 29
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            promises.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "cine-promises",
                "aria-label": "Our promises",
                children: promises.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: line
                    }, line, false, {
                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                lineNumber: 54,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "cine-letters",
                "aria-labelledby": `${inputId}-h`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: `${inputId}-h`,
                                className: "cine-letters__title",
                                children: data.newsletterHeading
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "cine-letters__text",
                                children: data.newsletterText
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "cine-letters__form",
                        onSubmit: (event)=>{
                            event.preventDefault();
                            startTransition(async ()=>{
                                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$3a$9b11a8__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["subscribeAction"])(email, "footer");
                                setState(result.ok ? {
                                    ok: true,
                                    text: "Thank you. You are on the list."
                                } : {
                                    ok: false,
                                    text: result.error
                                });
                                if (result.ok) setEmail("");
                            });
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: inputId,
                                className: "cine-letters__label",
                                children: "Your email"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cine-letters__row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: inputId,
                                        type: "email",
                                        required: true,
                                        autoComplete: "email",
                                        placeholder: "name@example.com",
                                        value: email,
                                        onChange: (event)=>setEmail(event.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: pending,
                                        className: "cine-button cine-button--solid",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: pending ? "Sending" : data.newsletterButton
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            state ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                role: state.ok ? "status" : "alert",
                                className: "cine-letters__note",
                                children: state.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cine-foot-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        "aria-labelledby": `${inputId}-talk`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: `${inputId}-talk`,
                                className: "cine-foot-grid__h",
                                children: data.talkHeading
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "cine-foot-grid__list",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${data.email}`,
                                            children: data.email
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            "Call us: ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `tel:${data.phone.replace(/\s/g, "")}`,
                                                children: data.phone
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                                lineNumber: 105,
                                                columnNumber: 26
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://wa.me/${phoneDigits}`,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: data.whatsappLabel
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "cine-foot-grid__hours",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: data.hoursLabel
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    data.hours.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: line
                                        }, line, false, {
                                            fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    data.columns.map((column, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": column.heading,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "cine-foot-grid__h",
                                    children: column.heading
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "cine-foot-grid__list",
                                    children: column.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: link.href,
                                                children: link.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                                lineNumber: 121,
                                                columnNumber: 19
                                            }, this)
                                        }, link.href + link.label, false, {
                                            fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                            lineNumber: 120,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                i === data.columns.length - 1 && data.socials.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "cine-foot-grid__social",
                                    "aria-label": "Social links",
                                    children: data.socials.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: social.href,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                children: social.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                                lineNumber: 129,
                                                columnNumber: 21
                                            }, this)
                                        }, social.label, false, {
                                            fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this) : null
                            ]
                        }, column.heading + i, true, {
                            fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "cine-footer__legal",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: data.legalName
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                        lineNumber: 137,
                        columnNumber: 70
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/CineFooter.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cinematic/CineFooter.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
const CINE_FOOTER_CSS = `
.cine-footer { position: relative; isolation: isolate; }
.cine-footer::before { content: ""; position: absolute; inset: 0 0 auto; height: min(560px, 70%); z-index: -1; pointer-events: none; background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'60'%20height%3D'60'%3E%3Cpath%20d%3D'M30%200C36%2010%2050%2016%2060%2030%2050%2044%2036%2050%2030%2060%2024%2050%2010%2044%200%2030%2010%2016%2024%2010%2030%200Z'%20fill%3D'none'%20stroke%3D'rgb(201%2C169%2C110)'%20stroke-width%3D'.8'%2F%3E%3Cpath%20d%3D'M30%2021C24.5%2025.5%2023.5%2033%2027.5%2038%2029.5%2040.2%2033%2039.4%2034%2036.2%2035%2032.4%2032%2031%2031%2028.8%2030.2%2026.8%2030.8%2024%2030%2021Z'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'0'%20cy%3D'0'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'60'%20cy%3D'0'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'0'%20cy%3D'60'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'60'%20cy%3D'60'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3C%2Fsvg%3E") repeat 50% 0 / 60px 60px; opacity: 0.16; -webkit-mask-image: radial-gradient(ellipse 70% 85% at 50% 0%, black 30%, transparent 75%); mask-image: radial-gradient(ellipse 70% 85% at 50% 0%, black 30%, transparent 75%); }
.cine-footer__sign { display: flex; flex-direction: column; align-items: center; }
.cine-footer__tagline { margin: 4px 0 0; font-size: 17px; letter-spacing: 0.02em; color: rgb(255 255 255 / 0.62); }
.cine-promises { list-style: none; margin: 0 0 56px; padding: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 0; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.22em; text-transform: uppercase; color: rgb(255 255 255 / 0.62); }
.cine-promises li { padding: 0 22px; }
.cine-promises li + li { border-left: 1px solid rgb(255 255 255 / 0.22); }
@media (max-width: 767px) { .cine-promises { flex-direction: column; align-items: center; gap: 14px; text-align: center; } .cine-promises li + li { border-left: 0; } }
.cine-letters { width: min(1100px, 100%); display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 48px; align-items: end; padding: 40px 0 44px; border-top: 1px solid rgb(255 255 255 / 0.14); border-bottom: 1px solid rgb(255 255 255 / 0.14); text-align: left; }
.cine-letters__title { margin: 0; font-family: var(--font-cine-display); font-weight: 600; font-size: clamp(2rem, 1.4rem + 1.8vw, 3rem); line-height: 1; text-transform: uppercase; color: #fff; }
.cine-letters__text { margin: 12px 0 0; max-width: 40ch; font-size: 17px; line-height: 1.5; color: rgb(255 255 255 / 0.7); }
.cine-letters__label { display: block; margin-bottom: 10px; font-family: var(--font-cine-display); font-weight: 500; font-size: 13px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.7); }
.cine-letters__row { display: flex; gap: 12px; }
.cine-letters__row input { flex: 1; min-width: 0; height: 56px; padding: 0 18px; background: transparent; border: 1px solid rgb(255 255 255 / 0.45); color: #fff; font-size: 17px; outline: none; transition: border-color 200ms ease; }
.cine-letters__row input::placeholder { color: rgb(255 255 255 / 0.45); }
.cine-letters__row input:focus { border-color: #fff; }
.cine-button--solid { background: var(--zari); border-color: var(--zari); color: var(--kohl); padding: 0 34px; height: 56px; cursor: pointer; }
.cine-button--solid::before { background: rgb(255 255 255); }
.cine-button--solid:hover { color: var(--kohl); }
.cine-button--solid:disabled { opacity: 0.6; cursor: default; }
.cine-letters__note { margin: 10px 0 0; font-size: 15px; color: #fff; }
.cine-foot-grid { width: min(1100px, 100%); display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 48px; padding: 8px 0 24px; text-align: left; }
.cine-foot-grid__h { margin: 0 0 18px; font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; }
.cine-foot-grid__list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; font-size: 16px; color: rgb(255 255 255 / 0.62); }
.cine-foot-grid__list a { color: rgb(255 255 255 / 0.82); transition: color 200ms ease; }
.cine-foot-grid__list a:hover, .cine-foot-grid__social a:hover { color: #fff; }
.cine-foot-grid__hours { margin: 18px 0 0; display: grid; gap: 4px; font-size: 15px; color: rgb(255 255 255 / 0.55); }
.cine-foot-grid__social { list-style: none; margin: 24px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px 22px; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; }
.cine-foot-grid__social a { color: rgb(255 255 255 / 0.75); }
.cine-footer__legal a { color: inherit; }
@media (max-width: 767px) { .cine-foot-grid { grid-template-columns: 1fr; gap: 36px; } }
.cine-contact { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.cine-contact__ways { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 36px; font-size: 17px; }
.cine-contact__ways a { color: rgb(255 255 255 / 0.86); transition: color 200ms ease; }
.cine-contact__ways a:hover { color: #fff; }
.cine-contact__wa { font-family: var(--font-cine-display); font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #fff !important; padding-bottom: 3px; border-bottom: 2px solid #fff; }
.cine-contact__hours { margin: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 4px 28px; font-size: 15px; color: rgb(255 255 255 / 0.55); }
.cine-contact__hours span { white-space: nowrap; }
html:has(.cine), body:has(.cine) { background: rgb(16 11 18); }
@media (max-width: 767px) {
  .cine-letters { grid-template-columns: 1fr; gap: 24px; }
  .cine-letters__row { flex-direction: column; }
  .cine-letters__row input { flex: none; width: 100%; }
  .cine-button--solid { justify-content: center; }
}
`;
}),
"[project]/src/components/cinematic/CineHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CineHeader",
    ()=>CineHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cart-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$currency$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/currency-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/search-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/wishlist-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$CineMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cinematic/CineMenu.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function CineHeader({ menu, mode }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let last = window.scrollY;
        let frame = 0;
        const update = ()=>{
            frame = 0;
            const y = window.scrollY;
            const header = ref.current;
            if (!header) return;
            if (Math.abs(y - last) > 4) {
                header.toggleAttribute("data-hidden", y > last && y > 140 && !header.hasAttribute("data-menu"));
                last = y;
            }
            if (mode === "overlay") header.toggleAttribute("data-solid", y > window.innerHeight * 0.85);
        };
        const onScroll = ()=>{
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, {
            passive: true
        });
        return ()=>{
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(frame);
        };
    }, [
        mode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        ref: ref,
        className: "cine-header",
        "data-solid": mode === "solid" ? "" : undefined,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cine-header__row",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "cine-logo",
                    "aria-label": `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].name} home`,
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].name.toUpperCase()
                }, void 0, false, {
                    fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$CineMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CineMenu"], {
                    panels: menu,
                    onOpenChange: (isOpen)=>ref.current?.toggleAttribute("data-menu", isOpen),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CineActions, {}, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cinematic/CineHeader.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/cinematic/CineHeader.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
/*
 * Wired to the same providers as the rest of the shop: Search opens the live
 * search, Bag opens the cart drawer, and the counts are the real ones.
 */ function CineActions() {
    const { open: openSearch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$search$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchModal"])();
    const { itemCount, open: openCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cart$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCart"])();
    const { itemCount: saved } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$wishlist$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWishlist"])();
    const { currency, setCurrency, currencies } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$currency$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrency"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: openSearch,
                className: "cine-nav cine-hide-sm cine-action",
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "cine-hide-sm cine-currency",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "sr-only",
                        children: "Currency"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        value: currency,
                        onChange: (event)=>setCurrency(event.target.value),
                        className: "cine-nav",
                        children: currencies.map((code)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: code,
                                children: code
                            }, code, false, {
                                fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/account",
                className: "cine-nav cine-hide-lg",
                children: "Account"
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: "/wishlist",
                className: "cine-nav cine-hide-sm",
                "aria-label": `Wishlist${saved > 0 ? `, ${saved} saved` : ""}`,
                children: [
                    "Wishlist",
                    saved > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cine-count",
                        children: saved
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                        lineNumber: 93,
                        columnNumber: 30
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: openCart,
                className: "cine-nav cine-action",
                "aria-label": `Bag${itemCount > 0 ? `, ${itemCount} items` : ""}`,
                children: [
                    "Bag",
                    itemCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cine-count",
                        children: itemCount
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                        lineNumber: 96,
                        columnNumber: 29
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/CineHeader.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cinematic/CineHeader.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/cinematic/CineMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CINE_MENU_CSS",
    ()=>CINE_MENU_CSS,
    "CineMenu",
    ()=>CineMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/brand.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$currency$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/currency-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const HOVER_INTENT_MS = 120;
/** Forgiving on the way out: time to travel from a word down into its dropdown. */ const CLOSE_DELAY_MS = 360;
/** Moving from one open dropdown to another word takes a deliberate pause. */ const SWITCH_DELAY_MS = 300;
function CineMenu({ panels, onOpenChange, children }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { currency, setCurrency, currencies } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$currency$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCurrency"])();
    // Where the phone menu renders: the preview root, outside the header, whose
    // blur would otherwise trap a fixed overlay inside the header strip.
    const [portalTarget, setPortalTarget] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const openTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const closeTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        onOpenChange?.(open !== null || mobile);
    }, [
        open,
        mobile,
        onOpenChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            clearTimeout(openTimer.current);
            clearTimeout(closeTimer.current);
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open && !mobile) return;
        const onKey = (event)=>{
            if (event.key !== "Escape") return;
            if (open) document.getElementById(`${id}-t-${open}`)?.focus();
            setOpen(null);
            setMobile(false);
        };
        const onDown = (event)=>{
            if (open && !wrapRef.current?.contains(event.target)) setOpen(null);
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("pointerdown", onDown);
        return ()=>{
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("pointerdown", onDown);
        };
    }, [
        open,
        mobile,
        id
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!mobile) return;
        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return ()=>{
            document.body.style.overflow = previous;
        };
    }, [
        mobile
    ]);
    const scheduleOpen = (panelId)=>{
        clearTimeout(closeTimer.current);
        clearTimeout(openTimer.current);
        // With a dropdown already open, passing over a neighbouring word on the
        // way down into it must not swap the panel: only a deliberate pause does.
        openTimer.current = setTimeout(()=>setOpen(panelId), open ? SWITCH_DELAY_MS : HOVER_INTENT_MS);
    };
    const scheduleClose = ()=>{
        clearTimeout(openTimer.current);
        closeTimer.current = setTimeout(()=>setOpen(null), CLOSE_DELAY_MS);
    };
    const cancelClose = ()=>clearTimeout(closeTimer.current);
    const current = panels.find((panel)=>panel.id === open);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: wrapRef,
                className: "cine-menu",
                onMouseLeave: scheduleClose,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Main",
                        className: "cine-menu__row",
                        children: panels.map((panel)=>/* The word is a link to its own page (Shop → all sarees), as on
               the old site; hovering or tabbing to it opens the dropdown. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                id: `${id}-t-${panel.id}`,
                                href: panel.href,
                                className: "cine-menu__trigger",
                                "aria-expanded": open === panel.id,
                                "aria-controls": `${id}-p-${panel.id}`,
                                onClick: ()=>setOpen(null),
                                onMouseEnter: ()=>scheduleOpen(panel.id),
                                onMouseLeave: scheduleClose,
                                onFocus: ()=>setOpen(panel.id),
                                children: panel.label
                            }, panel.id, false, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 99,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: `${id}-p-${current.id}`,
                        "aria-label": current.label,
                        className: "cine-drop",
                        onMouseEnter: cancelClose,
                        onMouseLeave: scheduleClose,
                        "data-lenis-prevent": true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cine-drop__inner",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cine-drop__cols",
                                    children: columnsOf(current).map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "cine-drop__heading",
                                                    children: column.heading
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                                    lineNumber: 129,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    children: column.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                href: link.href,
                                                                onClick: ()=>setOpen(null),
                                                                className: `cine-drop__link ${link.emphasis ? "is-strong" : ""}`,
                                                                children: link.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                                                lineNumber: 133,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, link.href + link.label, false, {
                                                            fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, column.heading, true, {
                                            fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                            lineNumber: 128,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this),
                                current.tiles && current.tiles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cine-drop__tiles",
                                    children: current.tiles.slice(0, 3).map((tile)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: tile.href,
                                            onClick: ()=>setOpen(null),
                                            className: "cine-tile",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "cine-tile__img",
                                                    children: tile.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        src: tile.src,
                                                        alt: "",
                                                        fill: true,
                                                        sizes: "240px",
                                                        className: "object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 37
                                                    }, this) : null
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "cine-tile__label",
                                                    children: tile.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, tile.href + tile.label, true, {
                                            fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                            lineNumber: 145,
                                            columnNumber: 21
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                            lineNumber: 125,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cine-header__end",
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "cine-burger",
                        "aria-label": mobile ? "Close menu" : "Open menu",
                        "aria-expanded": mobile,
                        "aria-controls": `${id}-mobile`,
                        onClick: ()=>{
                            setPortalTarget(wrapRef.current?.closest(".cine") ?? document.body);
                            setMobile((value)=>!value);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            mobile && portalTarget ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: `${id}-mobile`,
                className: "cine-mobile",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Menu",
                "data-lenis-prevent": true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cine-mobile__top",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cine-logo",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$brand$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BRAND"].name.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "cine-mobile__close",
                                "aria-label": "Close menu",
                                onClick: ()=>setMobile(false),
                                autoFocus: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "1.6",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 5l14 14M19 5L5 19"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                        lineNumber: 182,
                                        columnNumber: 134
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                    lineNumber: 182,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 181,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Mobile",
                        children: panels.map((panel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                className: "cine-mobile__group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                        children: panel.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                        lineNumber: 188,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        children: panel.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: link.href,
                                                    onClick: ()=>setMobile(false),
                                                    children: link.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 23
                                                }, this)
                                            }, link.href + link.label, false, {
                                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                                lineNumber: 191,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                        lineNumber: 189,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, panel.id, true, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cine-mobile__actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/search",
                                onClick: ()=>setMobile(false),
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 202,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/account",
                                onClick: ()=>setMobile(false),
                                children: "Account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 203,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/wishlist",
                                onClick: ()=>setMobile(false),
                                children: "Wishlist"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/cart",
                                onClick: ()=>setMobile(false),
                                children: "Bag"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 205,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "cine-mobile__currency",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Currency"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                        lineNumber: 207,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        value: currency,
                                        onChange: (event)=>setCurrency(event.target.value),
                                        children: currencies.map((code)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: code,
                                                children: code
                                            }, code, false, {
                                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                                lineNumber: 206,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/CineMenu.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this), portalTarget) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cinematic/CineMenu.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function columnsOf(panel) {
    return panel.columns && panel.columns.length > 0 ? panel.columns : [
        {
            heading: panel.label,
            links: panel.links
        }
    ];
}
const CINE_MENU_CSS = `
.cine-menu { display: none; justify-self: center; }
@media (min-width: 1360px) { .cine-menu { display: block; } .cine-burger { display: none; } }
.cine-menu__row { display: flex; gap: 6px; }
.cine-menu__trigger { position: relative; background: none; border: 0; cursor: pointer; padding: 12px clamp(9px, 0.95vw, 16px); font-family: var(--font-cine-display); font-weight: 500; font-size: 16.5px; letter-spacing: 0.17em; text-transform: uppercase; white-space: nowrap; color: #fff; opacity: 0.86; transition: opacity 200ms ease; }
.cine-menu__trigger:hover, .cine-menu__trigger[aria-expanded="true"] { opacity: 1; }
.cine-menu__trigger::after { content: ""; position: absolute; left: clamp(9px, 0.95vw, 16px); right: calc(clamp(9px, 0.95vw, 16px) + 0.17em); bottom: 4px; height: 2px; background: #fff; transform: scaleX(0); transform-origin: left; transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-menu__trigger[aria-expanded="true"]::after { transform: scaleX(1); }

/* An invisible bridge over the gap between the words and the dropdown, so the
   pointer never leaves the menu on its way down. */
.cine-drop::before { content: ""; position: absolute; left: 0; right: 0; bottom: 100%; height: 24px; }
/* The words always sit above the dropdown and its bridge, so another word can
   be hovered or clicked while a dropdown is open. */
.cine-menu__row { position: relative; z-index: 2; }
.cine-drop { position: absolute; left: 50%; top: calc(100% - 8px); width: min(1200px, calc(100vw - 2 * var(--pad))); translate: -50% 0; background: var(--kohl); border: 1px solid rgb(255 255 255 / 0.12); animation: cineDrop 380ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes cineDrop { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
.cine-drop__inner { display: flex; justify-content: space-between; gap: 48px; padding: 40px 44px 44px; }
.cine-drop__cols { display: flex; gap: 56px; }
.cine-drop__heading { margin: 0 0 18px; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.55); }
.cine-drop ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 4px; }
.cine-drop__link { display: inline-block; padding: 5px 0; font-family: var(--font-cine-text); font-size: 18px; color: rgb(255 255 255 / 0.86); transition: color 200ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-drop__link:hover { color: #fff; transform: translateX(4px); }
.cine-drop__link.is-strong { color: #fff; font-weight: 500; }
.cine-drop__tiles { display: flex; gap: 20px; }
.cine-tile { display: block; width: 220px; color: #fff; }
.cine-tile__img { position: relative; display: block; aspect-ratio: 3 / 4; overflow: hidden; background: rgb(255 255 255 / 0.06); }
.cine-tile__img img { transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-tile:hover .cine-tile__img img { transform: scale(1.05); }
.cine-tile__label { display: block; margin-top: 12px; font-family: var(--font-cine-display); font-weight: 500; font-size: 15px; letter-spacing: 0.18em; text-transform: uppercase; }

.cine-mobile { position: fixed; inset: 0; z-index: 70; overflow-y: auto; background: var(--kohl); padding: 0 var(--pad) 48px; animation: cineDrop 300ms ease both; }
.cine-mobile__top { height: 72px; display: flex; align-items: center; justify-content: space-between; }
.cine-mobile__close { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; background: none; border: 0; color: #fff; cursor: pointer; }
.cine-mobile__group { border-bottom: 1px solid rgb(255 255 255 / 0.14); }
.cine-mobile__group summary { list-style: none; cursor: pointer; padding: 20px 0; font-family: var(--font-cine-display); font-weight: 600; font-size: 30px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }
.cine-mobile__group summary::-webkit-details-marker { display: none; }
.cine-mobile__group ul { list-style: none; margin: 0; padding: 0 0 18px; display: grid; gap: 2px; }
.cine-mobile__group a { display: block; padding: 8px 0; font-size: 18px; color: rgb(255 255 255 / 0.8); }
.cine-mobile__actions { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 32px; }
.cine-mobile__currency { grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; height: 52px; padding: 0 18px; border: 1px solid rgb(255 255 255 / 0.4); font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; }
.cine-mobile__currency select { background: transparent; border: 0; color: #fff; font: inherit; letter-spacing: 0.1em; }
.cine-mobile__currency option { color: #000; }
.cine-mobile__actions a { display: flex; align-items: center; justify-content: center; height: 52px; border: 1px solid rgb(255 255 255 / 0.4); font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; }
`;
}),
"[project]/src/components/cinematic/Cinematic.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cinematic",
    ()=>Cinematic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lenis/dist/lenis.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$CineMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cinematic/CineMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$CineHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cinematic/CineHeader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$frame$2d$css$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cinematic/frame-css.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$CineFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cinematic/CineFooter.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$VideoPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/VideoPlayer.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
const SLIDE_MS = 7000;
/** Headline scale follows the title's length so short names land big. */ const titleSize = (title)=>title.length <= 8 ? "xl" : title.length <= 16 ? "lg" : "md";
/** True while the element is mostly on screen; drives entrances and autoplay. */ function useInView(threshold = 0.45) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(([entry])=>setInView(Boolean(entry?.isIntersecting)), {
            threshold
        });
        io.observe(el);
        return ()=>io.disconnect();
    }, [
        threshold
    ]);
    return [
        ref,
        inView
    ];
}
function Cinematic({ scenes, menu, footer }) {
    const rootRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const root = rootRef.current;
        if (!root) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].config({
            ignoreMobileResize: true
        });
        // Interpolated rather than timed: every wheel tick eases into the next, so
        // the scroll glides instead of stepping.
        const lenis = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]({
            lerp: 0.085,
            smoothWheel: true,
            wheelMultiplier: 0.9
        });
        const raf = (time)=>lenis.raf(time * 1000);
        lenis.on("scroll", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].update);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.add(raf);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.lagSmoothing(0);
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].context(()=>{
            // Paragraphs rise into view once, whole. (The zoom scene's promise is
            // part of its own pinned sequence on computers.)
            root.querySelectorAll("[data-reveal]").forEach((block)=>{
                if (block.closest("[data-zoom]") && window.matchMedia("(min-width: 768px)").matches) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(block, {
                    autoAlpha: 0,
                    y: 48
                }, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: block,
                        start: "top 86%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
            // Photographs that travel at their own speed, for depth.
            root.querySelectorAll("[data-speed]").forEach((el)=>{
                const speed = Number(el.dataset.speed ?? 0);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(el, {
                    yPercent: speed * 10
                }, {
                    yPercent: speed * -10,
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.6
                    }
                });
            });
            // Computers only: the pinned scenes. Phones keep plain swipe rows.
            const mm = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].matchMedia();
            mm.add("(min-width: 768px)", ()=>{
                // zoomOut: one photograph full screen pulls back, two more glide in.
                root.querySelectorAll("[data-zoom]").forEach((section)=>{
                    const stage = section.querySelector(".cine-zoom__stage");
                    const center = section.querySelector('[data-zoom-card="center"]');
                    const left = section.querySelector('[data-zoom-card="left"]');
                    const right = section.querySelector('[data-zoom-card="right"]');
                    const promise = section.querySelector("[data-zoom-promise]");
                    const copy = section.querySelector("[data-zoom-copy]");
                    if (!stage || !center) return;
                    // The centre card's resting frame, read from its CSS; it starts as the whole stage.
                    const rest = ()=>({
                            left: center.offsetLeft,
                            top: center.offsetTop,
                            width: center.offsetWidth,
                            height: center.offsetHeight
                        });
                    let frame = rest();
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(copy, {
                        autoAlpha: 0,
                        y: 30
                    });
                    const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                        defaults: {
                            ease: "none"
                        },
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: "+=170%",
                            pin: true,
                            anticipatePin: 1,
                            scrub: 1,
                            invalidateOnRefresh: true,
                            onRefreshInit: ()=>{
                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(center, {
                                    clearProps: "left,top,width,height"
                                });
                                frame = rest();
                            }
                        }
                    });
                    // One continuous movement: the promise lifts away while the photograph
                    // pulls back, the other two glide in as it settles, then the words.
                    tl.to(promise, {
                        autoAlpha: 0,
                        yPercent: -18,
                        duration: 0.7,
                        ease: "power1.in"
                    }, 0.15).fromTo(center, {
                        left: 0,
                        top: 0,
                        width: ()=>stage.clientWidth,
                        height: ()=>stage.clientHeight
                    }, {
                        left: ()=>frame.left,
                        top: ()=>frame.top,
                        width: ()=>frame.width,
                        height: ()=>frame.height,
                        duration: 1.4,
                        ease: "power1.inOut",
                        immediateRender: true
                    }, 0.3).fromTo(left, {
                        xPercent: -140,
                        autoAlpha: 0
                    }, {
                        xPercent: 0,
                        autoAlpha: 1,
                        duration: 0.9,
                        ease: "power2.out"
                    }, 1.1).fromTo(right, {
                        xPercent: 140,
                        autoAlpha: 0
                    }, {
                        xPercent: 0,
                        autoAlpha: 1,
                        duration: 0.9,
                        ease: "power2.out"
                    }, 1.1).to(copy, {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out"
                    }, 1.75).to({}, {
                        duration: 0.35
                    });
                });
                // panGallery: the edits slide sideways; each photograph drifts in its frame.
                root.querySelectorAll("[data-pan]").forEach((section)=>{
                    const track = section.querySelector("[data-pan-track]");
                    if (!track) return;
                    const distance = ()=>track.scrollWidth - window.innerWidth;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(track, {
                        x: ()=>-distance(),
                        ease: "none",
                        scrollTrigger: {
                            trigger: section,
                            start: "top top",
                            end: ()=>`+=${distance()}`,
                            pin: true,
                            scrub: 1.2,
                            invalidateOnRefresh: true
                        }
                    });
                });
            });
            root.querySelectorAll("[data-scene]").forEach((scene)=>{
                const media = scene.querySelector("[data-drift]");
                if (!media) return;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(media, {
                    yPercent: -5
                }, {
                    yPercent: 5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: scene,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 0.6
                    }
                });
            });
        }, root);
        return ()=>{
            ctx.revert();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].ticker.remove(raf);
            lenis.destroy();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: rootRef,
        className: "cine cine--home text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$frame$2d$css$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CINE_FRAME_CSS"] + CSS + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$CineMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CINE_MENU_CSS"] + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$CineFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CINE_FOOTER_CSS"]
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$CineHeader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CineHeader"], {
                menu: menu,
                mode: "overlay"
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                id: "main",
                children: scenes.map((scene)=>scene.kind === "slides" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SlidesScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this) : scene.kind === "film" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FilmScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 215,
                        columnNumber: 13
                    }, this) : scene.kind === "story" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StoryScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 217,
                        columnNumber: 13
                    }, this) : scene.kind === "words" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(WordsScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 219,
                        columnNumber: 13
                    }, this) : scene.kind === "edits" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(EditsScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 221,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ShopScene, {
                        scene: scene
                    }, scene.id, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 223,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$CineFooter$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CineFooter"], {
                data: footer
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 205,
        columnNumber: 5
    }, this);
}
/* ── Words that rise ─────────────────────────────────────────────────────── */ function Headline({ text, as: Tag = "h2", live }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: `cine-title cine-title--${titleSize(text)} ${live ? "is-live" : ""}`,
        "aria-label": text,
        children: text.split(" ").map((word, i, words)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "cine-word",
                        "aria-hidden": "true",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                "--i": i
                            },
                            children: word
                        }, void 0, false, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 241,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 240,
                        columnNumber: 11
                    }, this),
                    i < words.length - 1 ? " " : null
                ]
            }, i, true, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 239,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 237,
        columnNumber: 5
    }, this);
}
function Kicker({ text }) {
    if (!text) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "cine-kicker",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": "true",
                className: "cine-kicker__rule"
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 254,
                columnNumber: 7
            }, this),
            text
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 253,
        columnNumber: 5
    }, this);
}
function Actions({ cta, secondary }) {
    const external = /^https?:\/\//.test(cta.href);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "cine-actions",
        children: [
            external ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: cta.href,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "cine-button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: cta.label
                }, void 0, false, {
                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                    lineNumber: 266,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 265,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: cta.href,
                className: "cine-button",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: cta.label
                }, void 0, false, {
                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                    lineNumber: 270,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 269,
                columnNumber: 9
            }, this),
            secondary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: secondary.href,
                className: "cine-link",
                children: secondary.label
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 274,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 263,
        columnNumber: 5
    }, this);
}
function Photo({ src, mobileSrc, priority, className = "", focus = "left" }) {
    if (!src) return null;
    const split = mobileSrc && mobileSrc !== src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: src,
                alt: "",
                fill: true,
                sizes: "100vw",
                priority: priority,
                className: `object-cover ${focus === "right" ? "object-[72%_50%]" : "object-[28%_50%]"} md:object-center ${split ? "hidden md:block" : ""} ${className}`
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            split ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: mobileSrc,
                alt: "",
                fill: true,
                sizes: "100vw",
                priority: priority,
                className: `object-cover md:hidden ${className}`
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 288,
                columnNumber: 16
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 286,
        columnNumber: 5
    }, this);
}
/* ── A scene of slides that change in place ──────────────────────────────── */ function SlidesScene({ scene }) {
    const [ref, inView] = useInView(0.4);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [previous, setPrevious] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const count = scene.slides.length;
    const go = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((to)=>{
        setActive((current)=>{
            const next = (to % count + count) % count;
            if (next !== current) setPrevious(current);
            return next;
        });
    }, [
        count
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!inView || paused || count < 2) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const timer = setTimeout(()=>go(active + 1), SLIDE_MS);
        return ()=>clearTimeout(timer);
    }, [
        inView,
        paused,
        active,
        count,
        go
    ]);
    const slide = scene.slides[active];
    const right = slide.align === "right";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        "data-scene": true,
        className: `cine-scene cine-scene--${scene.transition}`,
        "aria-roledescription": "carousel",
        "aria-label": scene.slides.map((s)=>s.title).join(", "),
        onMouseEnter: ()=>setPaused(true),
        onMouseLeave: ()=>setPaused(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-drift": true,
                className: "cine-media",
                children: scene.slides.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cine-layer",
                        "data-state": i === active ? "active" : i === previous ? "previous" : "idle",
                        "aria-hidden": i !== active,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `cine-layer__img ${i === active ? "is-zooming" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                                src: s.image,
                                mobileSrc: s.mobileImage,
                                priority: scene.isPageTitle && i === 0,
                                focus: s.align === "right" ? "left" : "right"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                lineNumber: 342,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 341,
                            columnNumber: 13
                        }, this)
                    }, s.id, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 333,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: `cine-scrim ${right ? "cine-scrim--right" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 347,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `cine-copy ${right ? "cine-copy--right" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                        text: slide.kicker
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Headline, {
                        text: slide.title,
                        as: scene.isPageTitle ? "h1" : "h2",
                        live: inView
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    slide.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-body",
                        children: slide.body
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 352,
                        columnNumber: 23
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                        cta: slide.cta,
                        secondary: slide.secondary
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 353,
                        columnNumber: 9
                    }, this)
                ]
            }, slide.id, true, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 349,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 324,
        columnNumber: 5
    }, this);
}
/* ── Words that light up as you scroll ───────────────────────────────────── */ /** A paragraph that rises into view, fully lit: never left half-bright. */ function ScrubText({ text, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        "data-reveal": true,
        className: className,
        children: text
    }, void 0, false, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 365,
        columnNumber: 5
    }, this);
}
/* ── The house: one photograph full screen, pulling back to three ────────── */ /*
 * On computers the scene pins and scrolling drives it (GSAP, `zoomOut` in the
 * effect above): the middle photograph opens full screen under the promise,
 * whose words light as you scroll; the promise fades, the photograph pulls
 * back into its frame, and the other two glide in from the edges to make
 * three. Then the collection's words arrive. On phones and for reduced motion
 * it is a plain stack: the promise, a swipeable row, the words.
 */ function StoryScene({ scene }) {
    // Middle photograph first in the DOM so it paints under the other two.
    const order = [
        1,
        0,
        2
    ].filter((i)=>i < scene.photos.length);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-zoom": true,
        className: "cine-zoom",
        "aria-label": scene.title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cine-zoom__stage",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cine-zoom__cards",
                    children: order.map((i)=>{
                        const photo = scene.photos[i];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: photo.href,
                            "data-zoom-card": i === 1 ? "center" : i === 0 ? "left" : "right",
                            className: `cine-zoom__card cine-zoom__card--${i === 1 ? "center" : i === 0 ? "left" : "right"}`,
                            "aria-label": `${scene.title}, piece ${i + 1}`,
                            children: photo.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: photo.image,
                                alt: "",
                                fill: true,
                                sizes: "100vw",
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                lineNumber: 399,
                                columnNumber: 30
                            }, this) : null
                        }, i, false, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 392,
                            columnNumber: 13
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                    lineNumber: 388,
                    columnNumber: 9
                }, this),
                scene.statement ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-zoom-promise": true,
                    className: "cine-zoom__promise",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": "true",
                            className: "cine-zoom__veil"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 407,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrubText, {
                            text: scene.statement.quote,
                            className: "cine-story__quote"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 408,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrubText, {
                            text: scene.statement.body,
                            className: "cine-story__lead"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 409,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                    lineNumber: 406,
                    columnNumber: 11
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-zoom-copy": true,
                    className: "cine-zoom__copy",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "cine-kicker",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "aria-hidden": "true",
                                            className: "cine-kicker__rule"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                            lineNumber: 415,
                                            columnNumber: 40
                                        }, this),
                                        scene.kicker
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                    lineNumber: 415,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "cine-title cine-zoom__title",
                                    children: scene.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                    lineNumber: 416,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 414,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "cine-story__body",
                                    children: scene.body
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                    lineNumber: 419,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                                    cta: scene.cta,
                                    secondary: scene.secondary
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                    lineNumber: 420,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
            lineNumber: 386,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 385,
        columnNumber: 5
    }, this);
}
/* ── Curated edits: a gallery wall that slides past as you scroll ─────────── */ /*
 * On computers the scene pins and scrolling moves the track sideways (GSAP,
 * `panGallery` in the effect above); inside each frame the photograph shifts a
 * little against it, like looking through a window. The stand-in photographs
 * carry their own lettering along the bottom; the frame crops that band off
 * and the name is set beneath in the page's own type. On phones it is a
 * swipeable row.
 */ function EditsScene({ scene }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-pan": true,
        className: "cine-pan",
        "aria-label": scene.title,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-pan-track": true,
            className: "cine-pan__track",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cine-pan__intro",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "cine-kicker",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": "true",
                                    className: "cine-kicker__rule"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                    lineNumber: 443,
                                    columnNumber: 38
                                }, this),
                                scene.kicker
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "cine-title cine-title--lg",
                            children: scene.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 444,
                            columnNumber: 11
                        }, this),
                        scene.note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "cine-pan__note",
                            children: scene.note
                        }, void 0, false, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 445,
                            columnNumber: 25
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                    lineNumber: 442,
                    columnNumber: 9
                }, this),
                scene.items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: item.href,
                        "data-pan-card": true,
                        className: "cine-pan__card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cine-pan__frame",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-pan-img": true,
                                    className: "cine-pan__img",
                                    children: item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: item.image,
                                        alt: "",
                                        fill: true,
                                        sizes: "(min-width: 768px) 36vw, 74vw",
                                        className: "object-cover object-top"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                        lineNumber: 451,
                                        columnNumber: 31
                                    }, this) : null
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                    lineNumber: 450,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                lineNumber: 449,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "cine-pan__caption",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "cine-pan__name",
                                        children: item.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                        lineNumber: 455,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": "true",
                                        className: "cine-pan__go",
                                        children: "Explore"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                        lineNumber: 456,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                lineNumber: 454,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.href + item.label, true, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 448,
                        columnNumber: 11
                    }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
            lineNumber: 441,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 440,
        columnNumber: 5
    }, this);
}
/* ── A pause: one paragraph, read as you scroll ──────────────────────────── */ function WordsScene({ scene }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "cine-words",
        "aria-label": scene.title,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "cine-kicker cine-kicker--center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: "cine-kicker__rule"
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 470,
                        columnNumber: 54
                    }, this),
                    scene.title
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrubText, {
                text: scene.body,
                className: "cine-words__text"
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 471,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 469,
        columnNumber: 5
    }, this);
}
/* ── The loom film, with its facts ───────────────────────────────────────── */ /**
 * The film carries its own subtitles, so the scene's words only introduce it:
 * they show for a few seconds when the scene arrives, then fade away with the
 * dark overlay, leaving the film and its subtitles clear. A small link stays
 * in the corner. Scrolling away and back introduces it again.
 */ const FILM_INTRO_MS = 6000;
function FilmScene({ scene }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [quiet, setQuiet] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        let timer;
        const io = new IntersectionObserver(([entry])=>{
            const visible = Boolean(entry?.isIntersecting);
            setInView(visible);
            setQuiet(false);
            clearTimeout(timer);
            if (visible) timer = setTimeout(()=>setQuiet(true), FILM_INTRO_MS);
        }, {
            threshold: 0.4
        });
        io.observe(el);
        return ()=>{
            clearTimeout(timer);
            io.disconnect();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        "data-scene": true,
        className: `cine-scene cine-film ${quiet ? "is-quiet" : ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cine-film__media",
                children: scene.video ? /* The site's own player: plays only while on screen, keeps a pause
             the viewer chose, remembers sound, full screen with exit, and no
             autoplay for reduced motion. Only its frame is new: the whole
             film shows, uncropped, so its own titles stay readable. */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$VideoPlayer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoPlayer"], {
                    src: scene.video,
                    className: "h-full w-full object-contain"
                }, void 0, false, {
                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                    lineNumber: 520,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Photo, {
                    src: scene.image
                }, void 0, false, {
                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                    lineNumber: 522,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 514,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "aria-hidden": true,
                className: "cine-scrim cine-scrim--film"
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cine-copy cine-copy--center cine-film__intro",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                        text: scene.kicker
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 527,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Headline, {
                        text: scene.title,
                        live: inView
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 528,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "cine-body",
                        children: scene.body
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 529,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: `cine-facts ${inView ? "is-live" : ""}`,
                        children: scene.facts.map((fact)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: fact.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                        lineNumber: 533,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        children: fact.figure
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                        lineNumber: 534,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, fact.label, true, {
                                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                lineNumber: 532,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 530,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Actions, {
                        cta: scene.cta
                    }, void 0, false, {
                        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                        lineNumber: 538,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 526,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                href: scene.cta.href,
                className: "cine-film__corner",
                tabIndex: quiet ? 0 : -1,
                "aria-hidden": !quiet,
                children: scene.cta.label
            }, void 0, false, {
                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                lineNumber: 540,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 513,
        columnNumber: 5
    }, this);
}
/* ── Shop: tall strips that widen under the pointer ──────────────────────── */ function ShopScene({ scene }) {
    const [ref, inView] = useInView(0.35);
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        "data-scene": true,
        className: "cine-scene cine-shop",
        "aria-label": "Shop",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "cine-shop__row",
            onMouseLeave: ()=>setHover(0),
            children: scene.items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: item.href,
                    className: `cine-strip ${hover === i ? "is-open" : ""}`,
                    onMouseEnter: ()=>setHover(i),
                    onFocus: ()=>setHover(i),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cine-strip__img",
                            children: item.image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: item.image,
                                alt: "",
                                fill: true,
                                sizes: "(min-width: 768px) 40vw, 82vw",
                                className: "object-cover",
                                style: {
                                    objectPosition: item.focus ?? "50% 40%"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                lineNumber: 564,
                                columnNumber: 29
                            }, this) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 563,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "aria-hidden": true,
                            className: "cine-scrim"
                        }, void 0, false, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 566,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cine-strip__copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Kicker, {
                                    text: item.kicker
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                    lineNumber: 568,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Headline, {
                                    text: item.title,
                                    live: inView
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                    lineNumber: 569,
                                    columnNumber: 15
                                }, this),
                                item.body ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "cine-strip__body",
                                    children: item.body
                                }, void 0, false, {
                                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                    lineNumber: 570,
                                    columnNumber: 28
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "cine-strip__cta",
                                    children: [
                                        "Shop ",
                                        item.title.toLowerCase()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                                    lineNumber: 571,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                            lineNumber: 567,
                            columnNumber: 13
                        }, this)
                    ]
                }, item.id, true, {
                    fileName: "[project]/src/components/cinematic/Cinematic.tsx",
                    lineNumber: 556,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/cinematic/Cinematic.tsx",
            lineNumber: 554,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/cinematic/Cinematic.tsx",
        lineNumber: 553,
        columnNumber: 5
    }, this);
}
/* Scoped to this preview; nothing here touches the site's own styles. */ const CSS = `
/* Scenes flow into one another: a soft fade from black at each join. */
.cine--home #main > section:not(:first-child)::before { content: ""; position: absolute; inset: 0 0 auto; height: 16vh; z-index: 3; pointer-events: none; background: linear-gradient(to bottom, var(--kohl), transparent); }
.cine--home #main > section { position: relative; }

/* Scenes */
.cine-scene { position: relative; height: 100svh; min-height: 640px; overflow: hidden; }
.cine-media { position: absolute; inset: -6% 0; will-change: transform; }
.cine-layer { position: absolute; inset: 0; }
.cine-layer__img { position: absolute; inset: 0; }
/* A slow settle that never restarts with a jump: the resting scale returns
   only after the slide has faded out. */
.cine-layer__img { transform: scale(1.05); transition: transform 1.2s linear 1.5s; }
.cine-layer__img.is-zooming { transform: scale(1); transition: transform 9s cubic-bezier(0.25, 0.1, 0.25, 1); }
.cine-scene--fade .cine-layer { opacity: 0; transition: opacity 1400ms var(--ease); }
.cine-scene--fade .cine-layer[data-state="active"] { opacity: 1; z-index: 2; }
.cine-scene--wipe .cine-layer { clip-path: inset(0 0 0 100%); }
.cine-scene--wipe .cine-layer[data-state="previous"] { clip-path: inset(0 0 0 0); z-index: 1; }
.cine-scene--wipe .cine-layer[data-state="active"] { clip-path: inset(0 0 0 0); z-index: 2; transition: clip-path 1300ms cubic-bezier(0.77, 0, 0.175, 1); }
@keyframes cineZoom { from { transform: scale(1.12); } to { transform: scale(1); } }

.cine-scrim { position: absolute; inset: 0; z-index: 3; pointer-events: none; background: linear-gradient(to top, rgb(16 11 18 / 0.78) 0%, rgb(16 11 18 / 0.28) 40%, transparent 65%), linear-gradient(to right, rgb(16 11 18 / 0.45), transparent 58%); }
.cine-scrim--right { background: linear-gradient(to top, rgb(16 11 18 / 0.78) 0%, rgb(16 11 18 / 0.28) 40%, transparent 65%), linear-gradient(to left, rgb(16 11 18 / 0.45), transparent 58%); }
.cine-scrim--even { background: rgb(16 11 18 / 0.5); }
.cine-scrim--film { background: radial-gradient(ellipse 60% 55% at 50% 50%, rgb(16 11 18 / 0.72), rgb(16 11 18 / 0.5) 70%, rgb(16 11 18 / 0.42)); transition: opacity 1200ms var(--ease); }
.cine-film__intro { transition: opacity 900ms var(--ease), visibility 0s linear 0s; text-shadow: 0 2px 18px rgb(16 11 18 / 0.55); }
.cine-film.is-quiet .cine-film__intro { opacity: 0; visibility: hidden; transition: opacity 900ms var(--ease), visibility 0s linear 900ms; }
.cine-film.is-quiet .cine-scrim--film { opacity: 0; }
.cine-film__corner { position: absolute; z-index: 5; left: var(--pad); top: 120px; font-family: var(--font-cine-display); font-weight: 600; font-size: 14px; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; padding: 12px 20px; border: 1px solid rgb(255 255 255 / 0.6); background: rgb(16 11 18 / 0.35); backdrop-filter: blur(6px); opacity: 0; pointer-events: none; transition: opacity 700ms var(--ease) 600ms, background-color 300ms ease; }
.cine-film.is-quiet .cine-film__corner { opacity: 1; pointer-events: auto; }
.cine-film { background: var(--kohl); height: auto !important; min-height: 0 !important; aspect-ratio: 16 / 9; }
.cine-film__media { position: absolute; inset: 0; }
.cine-film__media video { object-fit: cover !important; }
.cine-film__corner:hover { background: #fff; color: #000; }
@media (max-width: 1099px) {
  .cine-film { aspect-ratio: auto; display: flex; flex-direction: column; }
  .cine-film__media { position: relative; inset: auto; aspect-ratio: 16 / 9; order: 2; }
  .cine-film .cine-film__intro { position: relative; order: 1; left: auto; top: auto; transform: none; width: auto; padding: 120px var(--pad) 56px; opacity: 1 !important; visibility: visible !important; text-shadow: none; }
  .cine-film .cine-scrim--film, .cine-film__corner { display: none; }
  .cine-film .cine-film__intro, .cine-film .cine-film__intro .cine-body { text-align: left; margin-left: 0; }
  .cine-film .cine-film__intro .cine-kicker, .cine-film .cine-film__intro .cine-actions { justify-content: flex-start; }
}

/* Copy */
.cine-copy { position: absolute; z-index: 4; left: var(--pad); bottom: 13vh; width: min(640px, calc(100% - 2 * var(--pad))); }
.cine-copy--right { left: auto; right: var(--pad); text-align: right; }
.cine-copy--right .cine-kicker, .cine-copy--right .cine-actions { justify-content: flex-end; }
.cine-copy--right .cine-body { margin-left: auto; }
.cine-copy--center { left: 50%; bottom: auto; top: 50%; transform: translate(-50%, -50%); text-align: center; width: min(920px, calc(100% - 2 * var(--pad))); }
.cine-copy--center .cine-kicker, .cine-copy--center .cine-actions { justify-content: center; }
.cine-copy--center .cine-body { margin-left: auto; margin-right: auto; }


/* Facts row */
.cine-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin: 40px auto 0; max-width: 760px; }
.cine-facts > div { display: flex; flex-direction: column-reverse; gap: 8px; padding: 0 20px; border-left: 1px solid rgb(255 255 255 / 0.3); opacity: 0; transform: translateY(16px); }
.cine-facts > div:first-child { border-left: 0; }
.cine-facts.is-live > div { animation: cineFade 900ms var(--ease) both; }
.cine-facts.is-live > div:nth-child(2) { animation-delay: 120ms; }
.cine-facts.is-live > div:nth-child(3) { animation-delay: 240ms; }
.cine-facts dd { margin: 0; font-family: var(--font-cine-display); font-weight: 600; font-size: clamp(1.75rem, 1.2rem + 1.8vw, 3rem); line-height: 1; text-transform: uppercase; }
.cine-facts dt { font-family: var(--font-cine-display); font-size: 13px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.72); }

/* Chapters */
.cine-chapters { position: absolute; z-index: 5; right: var(--pad); bottom: 13vh; display: flex; flex-direction: column; align-items: flex-end; gap: 22px; }
.cine-chapters--left { right: auto; left: var(--pad); align-items: flex-start; }
.cine-chapters ol { list-style: none; margin: 0; padding: 0; display: flex; gap: 18px; }
.cine-chapters button { display: block; background: none; border: 0; padding: 8px 0; color: #fff; cursor: pointer; text-align: left; }
.cine-chapter__bar { position: relative; display: block; width: 72px; height: 2px; background: rgb(255 255 255 / 0.28); overflow: hidden; }
.cine-chapter__bar > span { position: absolute; inset: 0; background: #fff; transform: scaleX(0); transform-origin: left; }
.cine-chapter__bar > .is-running { animation: cineBar var(--ms) linear both; }
.cine-chapter__bar > .is-full { transform: scaleX(1); }
.cine-chapter__bar > .is-dim { opacity: 0.5; }
@keyframes cineBar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.cine-chapter__name { display: block; margin-top: 10px; font-family: var(--font-cine-display); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.6; transition: opacity 300ms ease; white-space: nowrap; }
.cine-chapters button[aria-current] .cine-chapter__name, .cine-chapters button:hover .cine-chapter__name { opacity: 1; }
.cine-arrows { display: flex; gap: 10px; }
.cine-arrows button { width: 52px; height: 52px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgb(255 255 255 / 0.5); transition: background-color 300ms ease, color 300ms ease, border-color 300ms ease; }
.cine-arrows button:hover { background: #fff; color: #000; border-color: #fff; }

/* Shop strips */
.cine-shop__row { position: absolute; inset: 0; display: flex; }
.cine-strip { position: relative; flex: 1 1 0; overflow: hidden; border-left: 1px solid var(--kohl); transition: flex-grow 900ms var(--ease); color: #fff; }
.cine-strip:first-child { border-left: 0; }
.cine-strip.is-open { flex-grow: 2.4; }
.cine-strip__img { position: absolute; inset: 0; transition: transform 1200ms var(--ease); }
.cine-strip.is-open .cine-strip__img { transform: scale(1.04); }
.cine-strip__copy { position: absolute; z-index: 4; left: 32px; right: 24px; bottom: 13vh; }
.cine-strip .cine-title { font-size: clamp(2rem, 0.8rem + 2.1vw, 3.75rem); white-space: nowrap; }
.cine-strip__body { margin: 0; max-width: 34ch; max-height: 0; overflow: hidden; font-size: 16px; line-height: 1.5; color: rgb(255 255 255 / 0.85); transition: opacity 500ms var(--ease), max-height 700ms var(--ease); }
.cine-strip.is-open .cine-strip__body { max-height: 7.5em; margin-top: 14px; }
@media (max-width: 767px) { .cine-strip__body { max-height: none; margin-top: 14px; } }
.cine-strip .cine-kicker, .cine-strip__body, .cine-strip__cta { opacity: 0; transform: translateY(10px); transition: opacity 500ms var(--ease), transform 500ms var(--ease); animation: none; }
.cine-strip.is-open .cine-kicker, .cine-strip.is-open .cine-strip__body, .cine-strip.is-open .cine-strip__cta { opacity: 1; transform: none; }
.cine-strip__cta { display: inline-block; margin-top: 20px; font-family: var(--font-cine-display); font-weight: 600; font-size: 14px; letter-spacing: 0.22em; text-transform: uppercase; padding-bottom: 4px; border-bottom: 1px solid var(--zari); }
@media (max-width: 767px) {
  .cine-shop__row { overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; }
  .cine-strip { flex: 0 0 82vw; scroll-snap-align: start; }
  .cine-strip .cine-kicker, .cine-strip__body, .cine-strip__cta { opacity: 1; transform: none; }
}

/* The house: one photograph pulling back to three */
.cine-zoom { position: relative; background: var(--kohl); --zw: min(25vw, 360px); --zh: calc(var(--zw) * 4 / 3); --zgap: clamp(18px, 2.4vw, 40px); }
.cine-zoom__stage { position: relative; height: 100svh; min-height: 680px; overflow: hidden; }
.cine-zoom__card { position: absolute; top: 11vh; width: var(--zw); height: var(--zh); overflow: hidden; display: block; }
.cine-zoom__card--center { left: calc(50% - var(--zw) / 2); }
.cine-zoom__card--left { left: calc(50% - var(--zw) * 1.5 - var(--zgap)); }
.cine-zoom__card--right { left: calc(50% + var(--zw) / 2 + var(--zgap)); }
.cine-zoom__cards { display: contents; }
/* scale crops the corner mark printed along each stand-in photograph's bottom edge. */
.cine-zoom__card img { scale: 1.12; transform-origin: 50% 0; transition: transform 1000ms var(--ease); }
.cine-zoom__card:hover img { transform: scale(1.04); }
.cine-zoom__promise { position: absolute; inset: 0; z-index: 3; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0 var(--pad); text-align: center; pointer-events: none; }
.cine-zoom__veil { position: absolute; inset: 0; z-index: -1; background: radial-gradient(ellipse 70% 60% at 50% 50%, rgb(16 11 18 / 0.62), rgb(16 11 18 / 0.38)); }
.cine-story__quote { margin: 0; max-width: 14ch; font-family: var(--font-cine-display); font-weight: 600; text-transform: uppercase; font-size: clamp(3rem, 1.6rem + 6vw, 8.5rem); line-height: 0.92; color: #fff; }
.cine-story__lead { margin: 32px auto 0; max-width: 34ch; font-size: clamp(1.2rem, 1rem + 0.8vw, 1.75rem); line-height: 1.4; color: #fff; }
.cine-zoom__copy { position: absolute; z-index: 4; left: var(--pad); right: var(--pad); bottom: 5vh; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 40px; align-items: end; }
.cine-zoom__title { font-size: clamp(3rem, 1.6rem + 4.6vw, 6.5rem); }
.cine-story__body { margin: 0; max-width: 46ch; font-size: 17px; line-height: 1.6; color: rgb(255 255 255 / 0.82); }
.cine-zoom .cine-actions, .cine-zoom .cine-kicker { animation: none; }
.cine-zoom .cine-actions { margin-top: 24px; }

@media (max-width: 767px) {
  .cine-zoom__stage { height: auto; min-height: 0; overflow: visible; padding: 110px 0 90px; display: flex; flex-direction: column; }
  .cine-zoom__promise { position: static; order: -1; pointer-events: auto; }
  .cine-zoom__veil { display: none; }
  .cine-zoom__cards { display: flex; gap: 14px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--pad); scrollbar-width: none; padding: 0 var(--pad); margin-top: 56px; }
  .cine-zoom__card { position: relative; top: auto; left: auto !important; width: 76vw; height: auto; aspect-ratio: 3 / 4; flex: none; scroll-snap-align: start; }
  .cine-zoom__card--left { order: 0; } .cine-zoom__card--center { order: 1; } .cine-zoom__card--right { order: 2; }
  .cine-zoom__copy { position: static; grid-template-columns: 1fr; gap: 20px; padding: 40px var(--pad) 0; }
}

@media (prefers-reduced-motion: reduce) {
  .cine-zoom__stage { height: auto; min-height: 0; overflow: visible; padding: 140px var(--pad) 100px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
  .cine-zoom__promise { position: static; grid-column: 1 / -1; order: -1; margin-bottom: 64px; }
  .cine-zoom__veil { display: none; }
  .cine-zoom__cards { display: contents; }
  .cine-zoom__card { position: relative; top: auto; left: auto !important; width: auto; height: auto; aspect-ratio: 3 / 4; }
  .cine-zoom__card--left { order: 0; } .cine-zoom__card--center { order: 1; } .cine-zoom__card--right { order: 2; }
  .cine-zoom__copy { position: static; grid-column: 1 / -1; order: 3; padding-top: 48px; }
}

/* Curated edits: a gallery wall that slides past */
.cine-pan { position: relative; background: var(--kohl); overflow: hidden; }
.cine-pan__track { display: flex; align-items: center; gap: clamp(20px, 2.6vw, 44px); height: 100svh; min-height: 640px; padding: 0 var(--pad); width: max-content; }
.cine-pan__intro { flex: 0 0 min(34vw, 460px); padding-right: 2vw; }
.cine-pan__intro .cine-kicker { animation: none; }
.cine-pan__note { margin: 22px 0 0; max-width: 30ch; font-size: 18px; line-height: 1.55; color: rgb(255 255 255 / 0.75); }
.cine-pan__card { position: relative; flex: 0 0 auto; width: calc(min(64vh, 620px) * 518 / 560); display: flex; flex-direction: column; color: #fff; text-decoration: none; transition: transform 600ms var(--ease); }
.cine-pan__frame { position: relative; display: block; aspect-ratio: 518 / 560; overflow: hidden; }
.cine-pan__caption { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding: 20px 0 0; border-top: 1px solid transparent; }
.cine-pan__name { font-family: var(--font-cine-display); font-weight: 500; font-size: clamp(20px, 1.7vw, 26px); letter-spacing: 0.12em; text-transform: uppercase; line-height: 1.1; }
.cine-pan__go { font-family: var(--font-cine-display); font-weight: 500; font-size: 13px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.6); transition: color 300ms var(--ease); }
.cine-pan__card:hover .cine-pan__go, .cine-pan__card:focus-visible .cine-pan__go { color: #fff; }
.cine-pan__card:hover { transform: translateY(-10px); }
/* Taller than its frame and pinned to the top, so the lettering printed along
   each stand-in photograph's bottom edge falls outside the frame. */
.cine-pan__img { position: absolute; left: 0; right: 0; top: -1.5%; height: calc(684 / 560 * 100%); display: block; }

@media (max-width: 767px) {
  .cine-fan__stage { height: auto; min-height: 0; overflow: visible; padding: 110px 0 90px; }
  .cine-fan__promise { position: static; padding: 0 var(--pad); }
  .cine-fan__deck { position: static; translate: none; width: auto; aspect-ratio: auto; display: flex; gap: 14px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--pad); scrollbar-width: none; padding: 0 var(--pad); margin-top: 64px; }
  .cine-fan__card { position: relative; inset: auto; flex: 0 0 76vw; aspect-ratio: 3 / 4; scroll-snap-align: start; }
  .cine-fan__copy { position: static; grid-template-columns: 1fr; gap: 20px; padding: 48px var(--pad) 0; }
  .cine-pan__track { width: auto; height: auto; min-height: 0; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--pad); scrollbar-width: none; padding: 100px var(--pad); align-items: center; }
  .cine-pan__intro { flex: 0 0 78vw; scroll-snap-align: start; }
  .cine-pan__card { width: auto; flex: 0 0 72vw; scroll-snap-align: start; }
}

@media (prefers-reduced-motion: reduce) {
  .cine-fan__stage { height: auto; min-height: 0; overflow: visible; padding: 140px 0 100px; }
  .cine-fan__promise { position: static; }
  .cine-fan__deck { position: static; translate: none; width: auto; aspect-ratio: auto; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; max-width: 1200px; margin: 80px auto 0; padding: 0 var(--pad); }
  .cine-fan__card { position: relative; inset: auto; aspect-ratio: 3 / 4; }
  .cine-fan__copy { position: static; padding: 56px var(--pad) 0; }
  .cine-pan__track { width: auto; overflow-x: auto; }
}

/* Words */
.cine-words { padding: 160px var(--pad); background: var(--kohl); text-align: center; }
.cine-kicker--center { justify-content: center; animation: none; }
.cine-words__text { margin: 28px auto 0; max-width: 34ch; font-family: var(--font-cine-text); font-weight: 400; font-size: clamp(1.375rem, 0.9rem + 1.4vw, 2.25rem); line-height: 1.45; color: rgb(255 255 255 / 0.9); text-wrap: pretty; }

@media (max-width: 767px) {
  .cine-story { padding: 110px var(--pad) 96px; }
  .cine-story__promise { margin-bottom: 72px; }
  .cine-story__photos { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--pad); scrollbar-width: none; margin: 0 calc(-1 * var(--pad)); padding: 0 var(--pad); }
  .cine-story__photo { flex: 0 0 76vw; scroll-snap-align: start; margin-top: 0 !important; }
  .cine-story__copy { grid-template-columns: 1fr; gap: 24px; margin-top: 56px; }
  .cine-words { padding: 120px var(--pad); }
}


@media (max-width: 767px) {
  .cine-copy, .cine-copy--right { left: var(--pad); right: auto; text-align: left; bottom: 22vh; }
  .cine-copy--right .cine-kicker, .cine-copy--right .cine-actions { justify-content: flex-start; }
  .cine-copy--right .cine-body { margin-left: 0; }
  .cine-chapters, .cine-chapters--left { left: var(--pad); right: var(--pad); bottom: 6vh; align-items: flex-start; }
  .cine-chapter__bar { width: 44px; }
  .cine-chapter__name { display: none; }
  .cine-body { font-size: 16px; }
  .cine-facts dd { font-size: 1.5rem; }
  .cine-facts > div { padding: 0 10px; }
}

@media (prefers-reduced-motion: reduce) {
  .cine-word > span, .cine-facts > div { transform: none !important; opacity: 1 !important; animation: none !important; }
  .cine-layer__img, .cine-layer__img.is-zooming { transform: none !important; transition: none !important; }
  .cine-kicker, .cine-body, .cine-actions { animation: none !important; }
  .cine-scene--wipe .cine-layer[data-state="active"] { transition: none; }
}
`;
}),
"[project]/src/components/cinematic/frame-css.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
 * The frame every storefront page shares: the kohl ground and zari gold, the
 * header, the type and buttons, and the footer. The homepage adds its scenes
 * on top (Cinematic.tsx); every other page adds the shop rules (CineFrame).
 */ __turbopack_context__.s([
    "CINE_FRAME_CSS",
    ()=>CINE_FRAME_CSS
]);
const CINE_FRAME_CSS = `
/* Banaras, in three quiet touches: a kohl ground instead of black, zari gold
   on the fine details, and a jaal behind the footer like the pallu at a
   saree's end. */
.cine { font-family: var(--font-cine-text), system-ui, sans-serif; --ease: cubic-bezier(0.22, 1, 0.36, 1); --pad: max(24px, 4vw); --kohl: rgb(16 11 18); --zari: rgb(201 169 110); background: var(--kohl); }

/* Header */
.cine-header { position: fixed; inset: 0 0 auto; z-index: 50; transition: transform 600ms var(--ease), background-color 400ms ease; background: linear-gradient(to bottom, rgb(16 11 18 / 0.55), transparent); }
.cine-header[data-solid], .cine-header[data-menu] { background: var(--kohl); }
.cine-header[data-hidden] { transform: translateY(-100%); }
.cine-header__row { height: 92px; padding: 0 var(--pad); display: grid; grid-template-columns: auto 1fr auto; column-gap: 32px; align-items: center; }
.cine-header__end { display: flex; justify-content: flex-end; align-items: center; gap: clamp(18px, 1.8vw, 28px); }
@media (max-width: 1359px) { .cine-header__row { display: flex; justify-content: space-between; } }
@media (max-width: 767px) { .cine-header__row { height: 72px; } .cine-logo { font-size: 19px; letter-spacing: 0.3em; margin-right: 0; } .cine-header__end { gap: 20px; } }
.cine-logo { font-family: var(--font-cine-display); font-weight: 600; font-size: 24px; letter-spacing: 0.42em; margin-right: -0.42em; color: #fff; justify-self: start; }
.cine-nav { font-family: var(--font-cine-display); font-weight: 500; font-size: 16px; letter-spacing: 0.17em; text-transform: uppercase; color: #fff; opacity: 0.82; transition: opacity 200ms ease; }
.cine-nav:hover { opacity: 1; }
.cine-hide-sm { display: none; }
.cine-hide-lg { display: none; }
@media (min-width: 1360px) { .cine-hide-lg { display: inline; } }
.cine-action { background: none; border: 0; cursor: pointer; padding: 0; }
.cine-count { display: inline-block; min-width: 18px; margin-left: 6px; padding: 0 5px; font-size: 11px; line-height: 18px; letter-spacing: 0; text-align: center; color: #000; background: #fff; }
.cine-currency select { appearance: none; background: transparent; border: 0; cursor: pointer; padding: 0 14px 0 0; background-image: linear-gradient(45deg, transparent 50%, #fff 50%), linear-gradient(135deg, #fff 50%, transparent 50%); background-position: right 5px center, right 0 center; background-size: 5px 5px; background-repeat: no-repeat; }
.cine-currency option { color: #000; }
@media (min-width: 768px) { .cine-hide-sm { display: inline; } }
.cine-burger { display: inline-flex; flex-direction: column; gap: 7px; width: 30px; padding: 8px 0; cursor: pointer; background: none; border: 0; }
.cine-burger span { display: block; height: 2px; background: #fff; }

/* Type and actions, shared by every page */
.cine-kicker { display: flex; align-items: center; gap: 14px; margin: 0 0 18px; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.28em; text-transform: uppercase; color: rgb(255 255 255 / 0.85); animation: cineFade 900ms var(--ease) both; }
.cine-kicker__rule { width: 36px; height: 1px; background: var(--zari); }
.cine-title { margin: 0; font-family: var(--font-cine-display); font-weight: 600; text-transform: uppercase; line-height: 0.9; letter-spacing: 0.005em; color: #fff; }
.cine-title--xl { font-size: clamp(3.4rem, 1.6rem + 7.4vw, 9.5rem); }
.cine-title--lg { font-size: clamp(3rem, 1.6rem + 5vw, 6.75rem); }
.cine-title--md { font-size: clamp(2.5rem, 1.5rem + 3.5vw, 4.75rem); line-height: 0.95; }
.cine-word { display: inline-block; overflow: hidden; vertical-align: top; padding-bottom: 0.07em; }
.cine-word > span { display: inline-block; transform: translateY(115%); }
.cine-title.is-live .cine-word > span { animation: cineRise 1100ms var(--ease) both; animation-delay: calc(var(--i) * 70ms + 120ms); }
@keyframes cineRise { from { transform: translateY(115%); } to { transform: translateY(0); } }
@keyframes cineFade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }

.cine-body { margin: 24px 0 0; max-width: 40ch; font-size: 18px; line-height: 1.55; color: rgb(255 255 255 / 0.86); animation: cineFade 1000ms var(--ease) 350ms both; }
.cine-actions { display: flex; align-items: center; gap: 30px; flex-wrap: wrap; margin-top: 34px; animation: cineFade 1000ms var(--ease) 480ms both; }
.cine-button { position: relative; display: inline-flex; align-items: center; padding: 17px 42px; border: 1px solid var(--zari); font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; overflow: hidden; isolation: isolate; transition: color 400ms var(--ease), transform 160ms var(--ease); }
.cine-button::before { content: ""; position: absolute; inset: 0; background: var(--zari); transform: scaleY(0); transform-origin: bottom; transition: transform 400ms var(--ease); z-index: -1; }
.cine-button:hover { color: var(--kohl); }
.cine-button:hover::before { transform: scaleY(1); }
.cine-button:active { transform: scale(0.97); }
.cine-link { font-family: var(--font-cine-display); font-weight: 500; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; padding-bottom: 4px; background: linear-gradient(var(--zari), var(--zari)) 0 100% / 100% 1px no-repeat; transition: background-size 400ms var(--ease); }
.cine-link:hover { background-size: 0 1px; background-position: 100% 100%; }

/* Footer */
.cine-footer { display: flex; flex-direction: column; align-items: center; gap: 40px; padding: 96px var(--pad) 56px; text-align: center; }
.cine-footer__name { margin: 0; font-family: var(--font-cine-display); font-weight: 600; font-size: clamp(3rem, 2rem + 6vw, 8rem); letter-spacing: 0.32em; margin-right: -0.32em; line-height: 1; color: rgb(255 255 255 / 0.12); }
.cine-footer__links { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px 36px; }
.cine-footer__links a, .cine-footer__legal { font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; color: rgb(255 255 255 / 0.7); }
.cine-footer__links a:hover { color: #fff; }
.cine-footer__legal { margin: 0; font-size: 12px; color: rgb(255 255 255 / 0.45); }

.cine :focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
`;
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
];

//# sourceMappingURL=src_components_0-zw6op._.js.map