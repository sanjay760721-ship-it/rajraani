module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/(home)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$Cinematic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cinematic/Cinematic.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$scenes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cinematic/scenes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$footer$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/cinematic/footer-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/menu.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/footer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/site-text.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const revalidate = 60;
async function HomePage() {
    const [sections, menu, footer, siteText] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].getHomepageSections(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getMenu"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFooter"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteText"])()
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$Cinematic$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Cinematic"], {
        scenes: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$scenes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toScenes"])(sections, siteText),
        menu: menu,
        footer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$footer$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toFooterData"])(footer, siteText)
    }, void 0, false, {
        fileName: "[project]/src/app/(home)/page.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/(home)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(home)/page.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/components/cinematic/Cinematic.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cinematic",
    ()=>Cinematic
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Cinematic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Cinematic() from the server but Cinematic is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/cinematic/Cinematic.tsx", "Cinematic");
}),
"[project]/src/components/cinematic/Cinematic.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Cinematic",
    ()=>Cinematic
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Cinematic = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Cinematic() from the server but Cinematic is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/cinematic/Cinematic.tsx <module evaluation>", "Cinematic");
}),
"[project]/src/components/cinematic/Cinematic.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$Cinematic$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/cinematic/Cinematic.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$Cinematic$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/cinematic/Cinematic.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$cinematic$2f$Cinematic$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/cinematic/footer-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toFooterData",
    ()=>toFooterData
]);
function toFooterData(footer, text) {
    return {
        newsletterHeading: footer.newsletterHeading,
        newsletterText: footer.newsletterText,
        newsletterButton: footer.newsletterButton,
        email: text["contact.email"],
        phone: text["contact.phone"],
        talkHeading: footer.talkHeading,
        whatsappLabel: footer.whatsappLabel,
        hoursLabel: footer.hoursLabel,
        columns: footer.columns,
        socials: footer.socials,
        hours: text["contact.hours"].split("\n").map((line)=>line.trim()).filter(Boolean),
        legalName: footer.copyrightName
    };
}
}),
"[project]/src/components/cinematic/scenes.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toScenes",
    ()=>toScenes
]);
function toScenes(sections, text) {
    const scenes = [];
    const shop = [];
    let statement;
    let closing;
    let edits;
    for (const section of sections){
        switch(section.type){
            case "heroCarousel":
                scenes.push({
                    kind: "slides",
                    id: section.id,
                    transition: "fade",
                    isPageTitle: true,
                    slides: section.slides.map((slide)=>({
                            id: slide.id,
                            kicker: slide.eyebrow,
                            title: slide.title,
                            body: slide.body,
                            cta: {
                                label: slide.ctaLabel,
                                href: slide.ctaHref
                            },
                            image: slide.art.desktop.src,
                            mobileImage: slide.art.mobile.src,
                            align: slide.align === "right" ? "right" : "left"
                        }))
                });
                break;
            case "brandStatement":
                statement = {
                    quote: section.quote,
                    body: section.body
                };
                break;
            case "collectionTriptych":
                scenes.push({
                    kind: "story",
                    id: section.id,
                    statement,
                    photos: section.art.map((art, i)=>({
                            image: art.desktop.src,
                            href: section.artHrefs?.[i] ?? section.ctaHref
                        })),
                    title: section.title,
                    body: section.body,
                    cta: {
                        label: section.ctaLabel,
                        href: section.ctaHref
                    },
                    secondary: {
                        label: text["home.shopThePieces"],
                        href: section.ctaHref
                    },
                    kicker: text["home.storyKicker"]
                });
                break;
            case "tileRow":
                edits = {
                    kind: "edits",
                    id: section.id,
                    kicker: text["home.editsKicker"],
                    title: text["home.editsTitle"],
                    note: text["home.editsNote"],
                    items: section.items.map((item)=>({
                            label: item.label.charAt(0) + item.label.slice(1).toLowerCase(),
                            href: item.href,
                            image: item.art.desktop.src
                        }))
                };
                break;
            case "richText":
                if (section.heading && section.paragraphs.length > 0) {
                    closing = {
                        kind: "words",
                        id: section.id,
                        title: section.heading,
                        body: section.paragraphs.join(" ")
                    };
                }
                break;
            case "videoBand":
                scenes.push({
                    kind: "film",
                    id: section.id,
                    kicker: text["home.filmKicker"],
                    title: section.title,
                    body: section.body,
                    cta: {
                        label: section.ctaLabel,
                        href: section.ctaHref
                    },
                    image: section.art.desktop.src,
                    video: section.videoSrc,
                    facts: [
                        1,
                        2,
                        3
                    ].map((n)=>({
                            figure: text[`home.fact${n}.figure`],
                            label: text[`home.fact${n}.label`]
                        })).filter((fact)=>fact.figure.trim())
                });
                break;
            case "categorySplit":
                for (const item of section.items){
                    const name = item.label.charAt(0) + item.label.slice(1).toLowerCase();
                    shop.push({
                        id: item.label,
                        title: name,
                        kicker: text["home.shopKicker"],
                        href: item.href,
                        image: item.art.desktop.src
                    });
                }
                break;
            case "editorialSlideshow":
                for (const slide of section.slides){
                    shop.push({
                        id: slide.id,
                        title: slide.title,
                        kicker: slide.eyebrow && slide.eyebrow !== slide.title ? slide.eyebrow : text["home.shopKicker"],
                        body: slide.body,
                        href: slide.ctaHref,
                        image: slide.art.desktop.src,
                        // Wide banner photographs with the sitter on the left third: a
                        // narrow strip centred on them would show only the wall.
                        focus: "27% 45%"
                    });
                }
                break;
            case "campaignSlideshow":
                scenes.push({
                    kind: "slides",
                    id: section.id,
                    transition: "wipe",
                    slides: section.slides.map((slide)=>({
                            id: slide.id,
                            kicker: text["home.campaignKicker"],
                            title: slide.title,
                            body: slide.body,
                            cta: {
                                label: slide.ctaLabel,
                                href: slide.ctaHref
                            },
                            secondary: {
                                label: text["home.shopThePieces"],
                                href: "/collections/all"
                            },
                            image: slide.art.desktop.src,
                            align: "left"
                        }))
                });
                break;
            case "storesSlideshow":
                scenes.push({
                    kind: "slides",
                    id: section.id,
                    transition: "fade",
                    slides: section.slides.map((slide)=>({
                            id: slide.id,
                            kicker: sentenceCase(slide.title),
                            title: slide.ctaLabel.replace(/\s*Store$/i, ""),
                            body: slide.body,
                            cta: {
                                label: text["home.visitButton"],
                                href: slide.ctaHref
                            },
                            image: slide.art.desktop.src,
                            align: "left"
                        }))
                });
                break;
            default:
                break;
        }
    }
    // The four curated edits follow the shop strips (placed below, once the
    // strips are in), so both shopping scenes sit together.
    // The closing words sit just before the visit scene.
    if (closing) {
        const visit = scenes.findIndex((scene)=>scene.kind === "slides" && scene.id.startsWith("stores"));
        scenes.splice(visit >= 0 ? visit : scenes.length, 0, closing);
    }
    // The shop strips sit straight after the loom film (or after the hero if there is no film).
    if (shop.length > 0) {
        const film = scenes.findIndex((scene)=>scene.kind === "film");
        scenes.splice(film >= 0 ? film + 1 : 1, 0, {
            kind: "shop",
            id: "shop",
            items: shop
        });
    }
    if (edits) {
        const shopAt = scenes.findIndex((scene)=>scene.kind === "shop");
        scenes.splice(shopAt >= 0 ? shopAt + 1 : scenes.length, 0, edits);
    }
    return scenes;
}
/** "VISIT OUR STORES" → "Visit our stores" (the kicker sets its own capitals). */ function sentenceCase(text) {
    const lower = text.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06o2nv8._.js.map