module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/sanity/lib/define.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * A local stand-in for Sanity's `defineType` / `defineField` helpers.
 *
 * Sanity schema types are **plain objects** — `defineType` is an identity
 * function that exists only to give TypeScript something to infer from. So the
 * schemas in this folder are already valid Sanity schemas; they simply do not
 * require the `sanity` package to be installed to typecheck.
 *
 * That matters because the Studio is a separate application (usually its own
 * workspace), and pulling several hundred megabytes of Studio dependencies into
 * the storefront to model content would be the wrong trade. When the Studio
 * exists, each schema file changes one import line:
 *
 *     -import { defineType, defineField } from "../../lib/define.ts";
 *     +import { defineType, defineField } from "sanity";
 *
 * The types below cover the subset of the schema language these schemas use.
 * They are deliberately narrower than Sanity's real types: a field this project
 * does not use is a field that cannot be typo'd into a schema.
 */ /** The chainable validation builder, as far as we use it. */ __turbopack_context__.s([
    "SLUG_PATTERN",
    ()=>SLUG_PATTERN,
    "defineArrayMember",
    ()=>defineArrayMember,
    "defineField",
    ()=>defineField,
    "defineType",
    ()=>defineType,
    "slugValidation",
    ()=>slugValidation
]);
function defineType(definition) {
    return definition;
}
function defineField(field) {
    return field;
}
function defineArrayMember(member) {
    return member;
}
const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const slugValidation = (rule)=>rule.required().regex(SLUG_PATTERN, {
        name: "kebab-case"
    }).error("Lower-case words separated by single hyphens, e.g. evening-raga");
}),
"[project]/sanity/schemas/objects/artPair.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "artPair",
    ()=>artPair,
    "ctaFields",
    ()=>ctaFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/define.ts [app-rsc] (ecmascript)");
;
/**
 * An art-directed image: desktop and mobile, both required.
 *
 * addendum A7 measured the category convention — every banner ships separate
 * desktop and mobile art (`*Banner_2000x.jpg` / `*Banner-Mob_2000x.jpg`), and
 * the mobile crop is a portrait recomposition, not a CSS resize. build.md §6
 * makes "every banner has independent desktop and mobile art" a ship criterion.
 *
 * So the pairing is baked into the type rather than left to authoring
 * discipline: **an author cannot save a banner with only one crop.** This is the
 * single most useful constraint in the whole content model, because the failure
 * is invisible on the desktop the author is working on.
 */ /** Alt text is required on every image, everywhere. */ const imageWithAlt = (name, title, description)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
        name,
        title,
        type: "image",
        description,
        options: {
            hotspot: true
        },
        fields: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                name: "alt",
                title: "Alt text",
                type: "string",
                description: "Describe the frame — what is in it, and what it shows. Not the page title repeated.",
                // Measured on the reference PDP: all 8 product images had empty alt
                // (pre-build-gaps.md §5). Requiring it here is the cheapest possible
                // fix, and it has to be required or it will not be written.
                validation: (rule)=>rule.required().min(10)
            })
        ],
        validation: (rule)=>rule.required()
    });
const artPair = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "artPair",
    title: "Art (desktop + mobile)",
    type: "object",
    description: "Both crops are required. The mobile frame is a recomposition, not a resize.",
    fields: [
        imageWithAlt("desktop", "Desktop", "Landscape or full-bleed. Shown at 768px and above."),
        imageWithAlt("mobile", "Mobile", "Portrait crop with the subject recomposed. Shown below 768px.")
    ],
    preview: {
        select: {
            media: "desktop",
            alt: "desktop.alt"
        },
        prepare: ({ alt })=>({
                title: typeof alt === "string" ? alt : "Art pair"
            })
    }
});
const ctaFields = ()=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "ctaLabel",
            title: "Link label",
            type: "string",
            description: "Sentence case here; the template applies the uppercase letterspacing.",
            validation: (rule)=>rule.required().max(40)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "ctaHref",
            title: "Link destination",
            type: "string",
            description: "A path on this site, e.g. /collections/nadi",
            validation: (rule)=>rule.required().regex(/^\//, {
                    name: "internal path"
                }).error("Must be a path beginning with /")
        })
    ];
}),
"[project]/sanity/schemas/objects/sections.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "brandStatementSection",
    ()=>brandStatementSection,
    "campaignSlideshowSection",
    ()=>campaignSlideshowSection,
    "categorySplitSection",
    ()=>categorySplitSection,
    "collectionTriptychSection",
    ()=>collectionTriptychSection,
    "contactPanelSection",
    ()=>contactPanelSection,
    "dualCampaignSection",
    ()=>dualCampaignSection,
    "editorialPairSection",
    ()=>editorialPairSection,
    "editorialSlideshowSection",
    ()=>editorialSlideshowSection,
    "faqAccordionSection",
    ()=>faqAccordionSection,
    "galleryGridSection",
    ()=>galleryGridSection,
    "hereToHelpSection",
    ()=>hereToHelpSection,
    "heroCarouselSection",
    ()=>heroCarouselSection,
    "heroSection",
    ()=>heroSection,
    "imageBandSection",
    ()=>imageBandSection,
    "imageWithTextSection",
    ()=>imageWithTextSection,
    "mapBandSection",
    ()=>mapBandSection,
    "poetryBandSection",
    ()=>poetryBandSection,
    "productRailSection",
    ()=>productRailSection,
    "pullQuoteSection",
    ()=>pullQuoteSection,
    "richTextLayoutFields",
    ()=>richTextLayoutFields,
    "richTextSection",
    ()=>richTextSection,
    "sectionArrayMembers",
    ()=>sectionArrayMembers,
    "sectionTypes",
    ()=>sectionTypes,
    "sizeChartSection",
    ()=>sizeChartSection,
    "storesBandSection",
    ()=>storesBandSection,
    "storesSlideshowSection",
    ()=>storesSlideshowSection,
    "tileRowSection",
    ()=>tileRowSection,
    "videoBandSection",
    ()=>videoBandSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/define.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/objects/artPair.ts [app-rsc] (ecmascript)");
;
;
const richTextLayoutFields = ()=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "align",
            type: "string",
            description: "Defaults to centre.",
            options: {
                list: [
                    "left",
                    "center"
                ]
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "measure",
            type: "string",
            description: "Text measure. 'prose' (680px) by default; 'content' is 1200px, which is a long line for body copy.",
            options: {
                list: [
                    "prose",
                    "content"
                ]
            }
        })
    ];
const campaignSlideshowSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "campaignSlideshow",
    title: "Campaign Slideshow",
    type: "object",
    description: "Full-width campaign slides, each pairing one square frame with a title, a paragraph and a link into the campaign's story page.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slides",
            title: "Slides",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "campaignSlide",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required().max(400)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "ctaLabel",
                            type: "string",
                            validation: (rule)=>rule.required().max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "ctaHref",
                            type: "string",
                            validation: (rule)=>rule.required()
                        })
                    ]
                })
            ],
            validation: (rule)=>rule.required().min(2)
        })
    ]
});
const editorialSlideshowSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "editorialSlideshow",
    title: "Editorial Slideshow (2-Slide)",
    type: "object",
    description: "Two full-width slides (Womenswear/Menswear) with slide transition, arrows, secondary Explore buttons.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slides",
            title: "Slides (exactly 2)",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "editorialSlide",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "eyebrow",
                            type: "string",
                            validation: (rule)=>rule.max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required().max(240)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "ctaLabel",
                            type: "string",
                            validation: (rule)=>rule.required().max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "ctaHref",
                            type: "string",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "buttonVariant",
                            type: "string",
                            options: {
                                list: [
                                    "primary",
                                    "secondary"
                                ]
                            },
                            initialValue: "secondary",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "textAlign",
                            type: "string",
                            options: {
                                list: [
                                    "left",
                                    "right",
                                    "center"
                                ]
                            },
                            initialValue: "center",
                            validation: (rule)=>rule.required()
                        })
                    ],
                    preview: {
                        select: {
                            title: "title",
                            media: "art.desktop"
                        }
                    }
                })
            ],
            validation: (rule)=>rule.required().length(2)
        })
    ],
    preview: {
        select: {
            first: "slides.0.title",
            second: "slides.1.title"
        },
        prepare: ({ first, second })=>({
                title: [
                    first,
                    second
                ].filter(Boolean).join(" · ") || "Editorial Slideshow"
            })
    }
});
const storesSlideshowSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "storesSlideshow",
    title: "Stores Slideshow (2-Slide Fade)",
    type: "object",
    description: "Two slides (Banaras/Mumbai) with fade transition, overlaid VISIT OUR STORES heading, Calendly links.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slides",
            title: "Slides (exactly 2: Banaras, Mumbai)",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "storeSlide",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required().max(240)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "ctaLabel",
                            type: "string",
                            validation: (rule)=>rule.required().max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "ctaHref",
                            type: "string",
                            validation: (rule)=>rule.required()
                        })
                    ],
                    preview: {
                        select: {
                            title: "title",
                            media: "art.desktop"
                        }
                    }
                })
            ],
            validation: (rule)=>rule.required().length(2)
        })
    ],
    preview: {
        select: {
            first: "slides.0.title",
            second: "slides.1.title"
        },
        prepare: ({ first, second })=>({
                title: [
                    first,
                    second
                ].filter(Boolean).join(" · ") || "Stores Slideshow"
            })
    }
});
const heroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "hero",
    title: "Hero",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            type: "artPair",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "eyebrow",
            type: "string",
            description: "Small label above the title, e.g. a season. Optional.",
            validation: (rule)=>rule.max(40)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required().max(60)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "text",
            rows: 3,
            description: "One or two sentences. Price never appears in a hero.",
            validation: (rule)=>rule.required().max(240)
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ctaFields"])()
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "eyebrow",
            media: "art.desktop"
        }
    }
});
const heroCarouselSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "heroCarousel",
    title: "Hero Carousel",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slides",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "heroSlide",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "eyebrow",
                            type: "string",
                            validation: (rule)=>rule.max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required().max(240)
                        }),
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ctaFields"])()
                    ]
                })
            ],
            validation: (rule)=>rule.required().min(1)
        })
    ],
    preview: {
        select: {
            title: "slides.0.title"
        },
        prepare: ({ title })=>({
                title: `Carousel: ${title || "Hero Carousel"}`
            })
    }
});
const brandStatementSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "brandStatement",
    title: "Brand statement",
    type: "object",
    description: "Centred, mostly whitespace. No image, no CTA.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "quote",
            type: "string",
            description: "A single line, set large in the display face.",
            validation: (rule)=>rule.required().max(120)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "text",
            rows: 3,
            validation: (rule)=>rule.required().max(300)
        })
    ],
    preview: {
        select: {
            title: "quote",
            subtitle: "body"
        }
    }
});
const collectionTriptychSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "collectionTriptych",
    title: "Collection triptych",
    type: "object",
    description: "Three square frames above a centred title, body and link.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            title: "Three frames",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "artPair"
                })
            ],
            validation: (rule)=>rule.required().length(3)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required().max(60)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "text",
            rows: 3,
            validation: (rule)=>rule.required().max(400)
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ctaFields"])()
    ],
    preview: {
        select: {
            title: "title",
            media: "art.0.desktop"
        }
    }
});
const videoBandSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "videoBand",
    title: "Video Band",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            type: "artPair",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required().max(60)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "text",
            rows: 3,
            validation: (rule)=>rule.required().max(300)
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ctaFields"])()
    ],
    preview: {
        select: {
            title: "title"
        }
    }
});
const categorySplitSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "categorySplit",
    title: "Category Split (2-Up)",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "items",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "categoryItem",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "href",
                            type: "string",
                            validation: (rule)=>rule.required()
                        })
                    ]
                })
            ],
            validation: (rule)=>rule.required().length(2)
        })
    ],
    preview: {
        select: {
            title: "items.0.label"
        }
    }
});
const tileRowSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "tileRow",
    title: "Quick-Link Tile Row (4-Up)",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "items",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "tileItem",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "href",
                            type: "string",
                            validation: (rule)=>rule.required()
                        })
                    ]
                })
            ],
            validation: (rule)=>rule.required().min(1)
        })
    ],
    preview: {
        select: {
            title: "items.0.label"
        }
    }
});
const dualCampaignSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "dualCampaign",
    title: "Dual Campaign Feature",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "items",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "campaignItem",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required()
                        }),
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ctaFields"])()
                    ]
                })
            ],
            validation: (rule)=>rule.required().length(2)
        })
    ],
    preview: {
        select: {
            title: "items.0.title"
        }
    }
});
const storesBandSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "storesBand",
    title: "Boutique Stores Band",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            type: "artPair",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "text",
            rows: 3,
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "stores",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "storeLocation",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "name",
                            type: "string",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "href",
                            type: "string",
                            validation: (rule)=>rule.required()
                        })
                    ]
                })
            ],
            validation: (rule)=>rule.required().min(1)
        })
    ],
    preview: {
        select: {
            title: "title"
        }
    }
});
const hereToHelpSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "hereToHelp",
    title: "Talk To Us Block",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "email",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "phone",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "whatsapp",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "hours",
            type: "string",
            validation: (rule)=>rule.required()
        })
    ],
    preview: {
        select: {
            title: "title"
        }
    }
});
const productRailSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "productRail",
    title: "Product rail",
    type: "object",
    description: "Four pieces from a collection. Availability decides the order, not the author.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required().max(60)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "collectionHandle",
            title: "Collection",
            type: "string",
            description: "The collection handle to draw from, e.g. sarees. Products are not picked by hand — sold-out pieces sort back automatically.",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "ctaLabel",
            title: "Link label",
            type: "string",
            validation: (rule)=>rule.required().max(40)
        })
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "collectionHandle"
        }
    }
});
const editorialPairSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "editorialPair",
    title: "Editorial pair",
    type: "object",
    description: "Two teasers side by side, each linking to a story.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "items",
            title: "The two teasers",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "teaser",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required().max(400)
                        }),
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ctaFields"])()
                    ],
                    preview: {
                        select: {
                            title: "title",
                            media: "art.desktop"
                        }
                    }
                })
            ],
            validation: (rule)=>rule.required().length(2)
        })
    ],
    preview: {
        select: {
            first: "items.0.title",
            second: "items.1.title"
        },
        prepare: ({ first, second })=>({
                title: [
                    first,
                    second
                ].filter(Boolean).join(" · ") || "Editorial pair"
            })
    }
});
const poetryBandSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "poetryBand",
    title: "Poetry band",
    type: "object",
    description: "A heading and two lines on the warm ground. No CTA, by design.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "heading",
            type: "string",
            validation: (rule)=>rule.required().max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "text",
            rows: 3,
            validation: (rule)=>rule.required().max(300)
        })
    ],
    preview: {
        select: {
            title: "heading",
            subtitle: "body"
        }
    }
});
const richTextSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "richText",
    title: "Text",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "heading",
            type: "string",
            description: "Optional. Renders as an h2.",
            validation: (rule)=>rule.max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "blockContent",
            validation: (rule)=>rule.required()
        }),
        ...richTextLayoutFields()
    ],
    preview: {
        select: {
            title: "heading"
        }
    }
});
const pullQuoteSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "pullQuote",
    title: "Pull quote",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "quote",
            type: "text",
            rows: 3,
            validation: (rule)=>rule.required().max(240)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "attribution",
            type: "string",
            description: "Optional.",
            validation: (rule)=>rule.max(80)
        })
    ],
    preview: {
        select: {
            title: "quote",
            subtitle: "attribution"
        }
    }
});
const imageWithTextSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "imageWithText",
    title: "Image with text",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            type: "artPair",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "eyebrow",
            type: "string",
            description: "Optional. Small caps above the heading.",
            validation: (rule)=>rule.max(40)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "heading",
            type: "string",
            description: "Optional. A band can run as photograph and prose alone.",
            validation: (rule)=>rule.max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "paragraphs",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "text"
                })
            ],
            validation: (rule)=>rule.required().min(1)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "ratio",
            type: "string",
            description: "Frame ratio. Square by default; campaign bands use 4:5.",
            options: {
                list: [
                    "1/1",
                    "4/5"
                ]
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "imageSide",
            type: "string",
            description: "Which side the photograph takes on desktop. Alternate it down a page.",
            options: {
                list: [
                    "left",
                    "right"
                ]
            },
            validation: (rule)=>rule.required()
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ctaFields"])()
    ],
    preview: {
        select: {
            title: "heading",
            subtitle: "eyebrow"
        }
    }
});
const imageBandSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "imageBand",
    title: "Image band",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            type: "artPair",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "ratio",
            type: "string",
            description: "Desktop frame ratio. Set it from the FILE — a 2:1 class on a 3:2 photograph crops a third of it away silently.",
            options: {
                list: [
                    "15/8",
                    "2/1",
                    "7/5",
                    "3/2",
                    "4/3",
                    "1/1"
                ]
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "mobileRatio",
            type: "string",
            description: "Phone frame ratio, defaulting to 3:2. Set it wherever the art pair carries a separate portrait phone crop.",
            options: {
                list: [
                    "3/2",
                    "2/3",
                    "4/5",
                    "1/1"
                ]
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "caption",
            type: "string",
            description: "Optional. Sits under the frame and doubles as the alt text, so write it even when the design hides it.",
            validation: (rule)=>rule.max(120)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "overlay",
            type: "object",
            description: "Optional. Text and a button laid over the frame, for a closing band.",
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "title",
                    type: "string",
                    validation: (rule)=>rule.required().max(80)
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "body",
                    type: "text",
                    rows: 2
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "ctaLabel",
                    type: "string",
                    validation: (rule)=>rule.required().max(40)
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "ctaHref",
                    type: "string",
                    validation: (rule)=>rule.required()
                })
            ]
        })
    ],
    preview: {
        select: {
            title: "caption"
        }
    }
});
const faqAccordionSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "faqAccordion",
    title: "FAQ accordion",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "groups",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "faqGroup",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "heading",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "items",
                            type: "array",
                            of: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                                    type: "object",
                                    name: "faqItem",
                                    fields: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                                            name: "question",
                                            type: "string",
                                            validation: (rule)=>rule.required().max(160)
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                                            name: "answer",
                                            type: "text",
                                            rows: 4,
                                            validation: (rule)=>rule.required()
                                        })
                                    ],
                                    preview: {
                                        select: {
                                            title: "question"
                                        }
                                    }
                                })
                            ],
                            validation: (rule)=>rule.required().min(1)
                        })
                    ],
                    preview: {
                        select: {
                            title: "heading"
                        }
                    }
                })
            ],
            validation: (rule)=>rule.required().min(1)
        })
    ]
});
const mapBandSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "mapBand",
    title: "Map",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "query",
            type: "string",
            description: "What to search for — a place name, not coordinates.",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "label",
            type: "string",
            description: "Announced to screen readers, which cannot use the map.",
            validation: (rule)=>rule.required().max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "zoom",
            type: "number",
            description: "Defaults to 16."
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "padY",
            type: "number",
            description: "Vertical padding, 20 or 30. Defaults to 30.",
            options: {
                list: [
                    20,
                    30
                ]
            }
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "padX",
            type: "number",
            description: "Horizontal inset, 0 or 20. Defaults to 0 (edge to edge).",
            options: {
                list: [
                    0,
                    20
                ]
            }
        })
    ],
    preview: {
        select: {
            title: "label",
            subtitle: "query"
        }
    }
});
const galleryGridSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "galleryGrid",
    title: "Gallery grid",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "heading",
            type: "string",
            validation: (rule)=>rule.max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "standfirst",
            type: "text",
            rows: 2
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "columns",
            type: "number",
            description: "2, 3 or 4. Four reads as a grid, three as a sequence.",
            options: {
                list: [
                    2,
                    3,
                    4
                ]
            },
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "items",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "galleryTile",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string",
                            description: "Optional. Also the tile's alt text.",
                            validation: (rule)=>rule.max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "href",
                            type: "string",
                            description: "Optional. A tile with no href is not a link."
                        })
                    ],
                    preview: {
                        select: {
                            title: "label"
                        }
                    }
                })
            ],
            validation: (rule)=>rule.required().min(2)
        })
    ],
    preview: {
        select: {
            title: "heading"
        }
    }
});
const contactPanelSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "contactPanel",
    title: "Contact panel",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "heading",
            type: "string",
            description: "Optional. The page header already carries the title — set this only if the section needs its own.",
            validation: (rule)=>rule.max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "routes",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "contactRoute",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "text",
                            type: "text",
                            rows: 2,
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "email",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "tail",
                            type: "string",
                            description: "Optional. Sentence continuing after the address, which sits mid-sentence."
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "linkLabel",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "linkHref",
                            type: "string"
                        })
                    ],
                    preview: {
                        select: {
                            title: "text",
                            subtitle: "email"
                        }
                    }
                })
            ],
            validation: (rule)=>rule.required().min(1)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "socialIntro",
            type: "string",
            validation: (rule)=>rule.required().max(120)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "socials",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "socialLink",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string",
                            validation: (rule)=>rule.required().max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "href",
                            type: "string",
                            validation: (rule)=>rule.required()
                        })
                    ],
                    preview: {
                        select: {
                            title: "label"
                        }
                    }
                })
            ],
            validation: (rule)=>rule.required().min(1)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "visitHeading",
            type: "string",
            validation: (rule)=>rule.required().max(60)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "stores",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "contactStore",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "name",
                            type: "string",
                            validation: (rule)=>rule.required().max(80)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "detail",
                            type: "text",
                            rows: 2,
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "address",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required()
                        })
                    ],
                    preview: {
                        select: {
                            title: "name"
                        }
                    }
                })
            ],
            validation: (rule)=>rule.required().min(1)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "form",
            type: "object",
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "intro",
                    type: "text",
                    rows: 2,
                    validation: (rule)=>rule.required()
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "submitLabel",
                    type: "string",
                    validation: (rule)=>rule.required().max(30)
                })
            ],
            validation: (rule)=>rule.required()
        })
    ],
    preview: {
        select: {
            title: "heading"
        }
    }
});
const sizeChartSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineType"])({
    name: "sizeChart",
    title: "Size chart",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "figure",
            type: "string",
            options: {
                list: [
                    "women",
                    "men"
                ]
            },
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "measures",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "point",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "note",
                            type: "string"
                        })
                    ]
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "sizes",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "string"
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
            name: "rows",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "inches",
                            type: "array",
                            of: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                                    type: "number"
                                })
                            ]
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "cm",
                            type: "array",
                            of: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                                    type: "number"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    ],
    preview: {
        select: {
            title: "title"
        }
    }
});
const sectionTypes = [
    heroSection,
    heroCarouselSection,
    brandStatementSection,
    collectionTriptychSection,
    videoBandSection,
    categorySplitSection,
    tileRowSection,
    dualCampaignSection,
    storesBandSection,
    hereToHelpSection,
    productRailSection,
    editorialPairSection,
    editorialSlideshowSection,
    campaignSlideshowSection,
    storesSlideshowSection,
    poetryBandSection,
    richTextSection,
    pullQuoteSection,
    imageWithTextSection,
    imageBandSection,
    faqAccordionSection,
    mapBandSection,
    galleryGridSection,
    contactPanelSection,
    sizeChartSection
];
const sectionArrayMembers = sectionTypes.map((section)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["defineArrayMember"])({
        type: section.name
    }));
}),
"[project]/src/app/admin/(protected)/text/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminTextRoute,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$TextFinder$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/TextFinder.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$text$2d$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/text-index.ts [app-rsc] (ecmascript)");
;
;
;
const metadata = {
    title: "Change text"
};
async function AdminTextRoute(props) {
    const { place, q } = await props.searchParams;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$TextFinder$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TextFinder"], {
        entries: await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$text$2d$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["textIndex"])(),
        initialPlace: typeof place === "string" ? place : undefined,
        initialQuery: typeof q === "string" ? q : ""
    }, void 0, false, {
        fileName: "[project]/src/app/admin/(protected)/text/page.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/admin/(protected)/text/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/admin/(protected)/text/page.tsx [app-rsc] (ecmascript)"));
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
"[project]/src/components/admin/TextFinder.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextFinder",
    ()=>TextFinder
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TextFinder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextFinder() from the server but TextFinder is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/admin/TextFinder.tsx", "TextFinder");
}),
"[project]/src/components/admin/TextFinder.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextFinder",
    ()=>TextFinder
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const TextFinder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call TextFinder() from the server but TextFinder is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/admin/TextFinder.tsx <module evaluation>", "TextFinder");
}),
"[project]/src/components/admin/TextFinder.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$TextFinder$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/admin/TextFinder.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$TextFinder$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/admin/TextFinder.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$TextFinder$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/admin/section-fields.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * What the section editor needs to know about each field, in plain words.
 *
 * ── Where this comes from ───────────────────────────────────────────────────
 * The editor walks the section's actual data, so no field that exists on a
 * live page can ever be hidden from the owner. This module only *describes*
 * what it finds: a friendly name, the allowed choices, a length limit, whether
 * it is a link. Choices and limits are read from the content model in
 * `sanity/schemas/objects/sections.ts` — the same declarations `schema.test.ts`
 * holds to the storefront — and topped up here where the model is thinner than
 * the data (per-slide caption colour, overlay placement and so on).
 *
 * Field names are never shown to the owner. "ctaHref" is "Button goes to".
 * ─────────────────────────────────────────────────────────────────────────────
 */ __turbopack_context__.s([
    "ADVANCED",
    ()=>ADVANCED,
    "HIDDEN",
    ()=>HIDDEN,
    "SECTION_LABELS",
    ()=>SECTION_LABELS,
    "choiceLabel",
    ()=>choiceLabel,
    "countReferencePhotos",
    ()=>countReferencePhotos,
    "fieldInfo",
    ()=>fieldInfo,
    "humanise",
    ()=>humanise,
    "isArtPair",
    ()=>isArtPair,
    "isReferenceSrc",
    ()=>isReferenceSrc,
    "optionalFields",
    ()=>optionalFields,
    "sectionSummary",
    ()=>sectionSummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$sections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/objects/sections.ts [app-rsc] (ecmascript)");
;
const SECTION_LABELS = {
    hero: {
        name: "Large banner",
        hint: "One big photo with a headline and a button."
    },
    heroCarousel: {
        name: "Slideshow at the top",
        hint: "Big photos that change on their own, each with its own words and button."
    },
    brandStatement: {
        name: "Brand statement",
        hint: "One large line of words and a short paragraph. No photo."
    },
    collectionTriptych: {
        name: "Three photos + text",
        hint: "Three photos in a row with a title and a button."
    },
    videoBand: {
        name: "Film",
        hint: "A video with a title and a button."
    },
    categorySplit: {
        name: "Two categories side by side",
        hint: "Two large photos, each linking somewhere."
    },
    tileRow: {
        name: "Row of tiles",
        hint: "A row of photos with short labels."
    },
    editorialPair: {
        name: "Two stories side by side",
        hint: "Two photos, each with a title, text and a button."
    },
    editorialSlideshow: {
        name: "Story slideshow",
        hint: "Full-width slides, each with words and a button."
    },
    storesSlideshow: {
        name: "Our stores slideshow",
        hint: "One slide per store."
    },
    poetryBand: {
        name: "Short poem or quote",
        hint: "A heading and a few lines."
    },
    richText: {
        name: "Text",
        hint: "A heading and paragraphs."
    },
    sizeChart: {
        name: "Size chart",
        hint: "Measurements table beside a figure."
    },
    pullQuote: {
        name: "Quote",
        hint: "A single large quotation."
    },
    productRail: {
        name: "Row of products",
        hint: "Products from one collection."
    },
    hereToHelp: {
        name: "Contact details",
        hint: "Email, phone, WhatsApp and hours."
    },
    imageWithText: {
        name: "Photo with text",
        hint: "A photo beside a heading and paragraphs."
    },
    imageBand: {
        name: "Photo",
        hint: "One photo on its own, optionally with words over it."
    },
    faqAccordion: {
        name: "Questions & answers",
        hint: "Grouped questions that open when clicked."
    },
    mapBand: {
        name: "Map",
        hint: "A map pin for an address."
    },
    galleryGrid: {
        name: "Photo grid",
        hint: "A grid of photos, optionally captioned and linked."
    },
    contactPanel: {
        name: "Contact details + form",
        hint: "Who to write to, the stores, and the contact form."
    },
    storesBand: {
        name: "Our stores",
        hint: "A photo with a list of stores."
    },
    dualCampaign: {
        name: "Two campaigns side by side",
        hint: "Two photos, each with a title, text and a button."
    },
    campaignSlideshow: {
        name: "Campaign slideshow",
        hint: "One slide per campaign."
    }
};
/** Friendly names for field keys. Anything missing is humanised. */ const LABELS = {
    eyebrow: "Small line above the headline",
    title: "Headline",
    heading: "Heading",
    body: "Text",
    quote: "Quote",
    standfirst: "Introduction",
    ctaLabel: "Button text",
    ctaHref: "Button goes to",
    href: "Photo links to",
    artHrefs: "Where each photo links to",
    art: "Photo",
    slides: "Slides",
    items: "Items",
    label: "Label",
    paragraphs: "Paragraphs",
    align: "Text position",
    textAlign: "Text alignment",
    verticalAlign: "Text position (up / down)",
    imageSide: "Photo on which side",
    ink: "Text colour",
    buttonVariant: "Button style",
    caption: "Caption under the photo",
    overlay: "Words over the photo",
    panel: "Background behind the words",
    mobileAlign: "Words position on phones",
    attribution: "Who said it",
    collectionHandle: "Collection",
    videoSrc: "Video file",
    stores: "Stores",
    name: "Name",
    detail: "Detail",
    address: "Address",
    email: "Email",
    phone: "Phone",
    whatsapp: "WhatsApp",
    hours: "Opening hours",
    query: "Place to show on the map",
    groups: "Groups",
    question: "Question",
    answer: "Answer",
    routes: "Ways to reach us",
    text: "Text",
    tail: "Text after the email address",
    linkLabel: "Link text",
    linkHref: "Link goes to",
    socialIntro: "Line above the social links",
    socials: "Social links",
    visitHeading: "Heading above the stores",
    form: "Contact form",
    intro: "Introduction",
    submitLabel: "Send button text",
    ground: "Background colour",
    ratio: "Photo shape (desktop)",
    mobileRatio: "Photo shape (phone)",
    imageRatio: "Photo shape",
    fullWidth: "Run edge to edge",
    bleed: "Run edge to edge",
    inset: "Margin around the photo",
    columns: "Columns",
    divider: "Line under the heading",
    uppercase: "Heading in capitals",
    measure: "Text width",
    tone: "Text colour",
    asPageTitle: "This heading is the page title",
    italicParagraphs: "Paragraphs in italics (numbers, from 0)",
    padTop: "Space above (px)",
    padBottom: "Space below (px)",
    padX: "Space at the sides (px)",
    padY: "Space above and below (px)",
    zoom: "Map zoom",
    figure: "Figure",
    measures: "How to measure",
    point: "Measuring point",
    note: "Note",
    sizes: "Sizes",
    rows: "Rows",
    inches: "Inches",
    cm: "Centimetres"
};
const ADVANCED = new Set([
    "padTop",
    "padBottom",
    "padX",
    "padY",
    "measure",
    "ratio",
    "mobileRatio",
    "bleed",
    "fullWidth",
    "inset",
    "uppercase",
    "asPageTitle",
    "italicParagraphs",
    "tone",
    "zoom",
    "columns",
    "divider",
    "ground",
    "videoSrc"
]);
const HIDDEN = new Set([
    "id",
    "type"
]);
/** Choice labels, so the owner reads "Dark text" rather than "dark". */ const CHOICE_LABELS = {
    left: "Left",
    center: "Centre",
    right: "Right",
    top: "Top",
    middle: "Middle",
    bottom: "Bottom",
    primary: "Dark button",
    secondary: "Light button",
    dark: "Dark text (for light photos)",
    solid: "White panel",
    none: "No panel",
    cream: "Cream",
    deep: "Deep maroon",
    white: "White",
    brown: "Brown",
    prose: "Comfortable (680px)",
    content: "Wide (1200px)",
    women: "Women",
    men: "Men"
};
function choiceLabel(value) {
    return CHOICE_LABELS[String(value)] ?? String(value);
}
/**
 * Choices the content model does not declare, keyed by path then by field.
 * Paths ignore list positions: `heroCarousel.slides` is every hero slide.
 */ const EXTRA_CHOICES = {
    "heroCarousel.slides": {
        align: [
            "left",
            "center",
            "right"
        ],
        ink: [
            "dark"
        ]
    },
    "editorialSlideshow.slides": {
        verticalAlign: [
            "bottom",
            "center"
        ],
        ink: [
            "dark"
        ]
    },
    "imageBand.overlay": {
        align: [
            "left",
            "center",
            "right"
        ],
        panel: [
            "solid",
            "none"
        ],
        ink: [
            "cream",
            "deep",
            "white"
        ],
        mobileAlign: [
            "top",
            "middle"
        ],
        textAlign: [
            "left",
            "center"
        ]
    },
    imageBand: {
        padTop: [
            0,
            20,
            25,
            30,
            40,
            60,
            100
        ],
        padBottom: [
            0,
            20,
            30,
            40,
            60
        ],
        ratio: [
            "15/8",
            "3/1",
            "2/1",
            "7/5",
            "3/2",
            "4/3",
            "9/8",
            "1/1"
        ],
        mobileRatio: [
            "3/2",
            "2/3",
            "4/5",
            "1/1"
        ]
    },
    imageWithText: {
        imageSide: [
            "left",
            "right"
        ],
        ground: [
            "deep",
            "cream"
        ],
        ratio: [
            "1/1",
            "4/5"
        ]
    },
    richText: {
        align: [
            "left",
            "center"
        ],
        measure: [
            "prose",
            "content"
        ],
        tone: [
            "deep",
            "brown"
        ],
        columns: [
            1,
            2
        ]
    },
    galleryGrid: {
        columns: [
            2,
            3,
            4
        ]
    },
    mapBand: {
        padY: [
            20,
            30
        ],
        padX: [
            0,
            20
        ]
    },
    sizeChart: {
        figure: [
            "women",
            "men"
        ]
    }
};
/**
 * Optional fields a band can have but may not have been given yet, so the
 * owner can add, say, a small line above a slide's headline without asking.
 */ const EXTRA_OPTIONAL = {
    "heroCarousel.slides": {
        eyebrow: "",
        align: "center"
    },
    "editorialSlideshow.slides": {
        eyebrow: ""
    },
    imageBand: {
        href: "",
        caption: ""
    },
    imageWithText: {
        eyebrow: "",
        heading: "",
        href: ""
    },
    richText: {
        heading: ""
    },
    galleryGrid: {
        heading: "",
        standfirst: ""
    },
    pullQuote: {
        attribution: ""
    }
};
/** Run a declared validation against a recorder to learn its limits. */ function readRule(validation) {
    const info = {};
    if (!validation) return info;
    const rule = {
        required: ()=>(info.required = true, rule),
        min: ()=>rule,
        max: (n)=>(info.max = n, rule),
        length: ()=>rule,
        regex: ()=>rule,
        uri: ()=>rule,
        custom: ()=>rule,
        error: ()=>rule,
        warning: ()=>rule
    };
    try {
        validation(rule);
    } catch  {
    /* a validation we cannot read just means no limits shown */ }
    return info;
}
const BY_TYPE = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$sections$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sectionTypes"].map((type)=>[
        type.name,
        type
    ]));
/** Find the model's declaration for a field at `path` (keys only). */ function declaration(path) {
    const [typeName, ...keys] = path;
    let fields = BY_TYPE.get(typeName ?? "")?.fields;
    let found;
    for (const key of keys){
        found = fields?.find((field)=>field.name === key);
        if (!found) return undefined;
        fields = found.type === "array" ? found.of?.[0]?.fields : found.fields;
    }
    return found;
}
function fieldInfo(path, key, value) {
    const decl = declaration([
        ...path,
        key
    ]);
    const pathKey = path.join(".");
    const extra = EXTRA_CHOICES[pathKey]?.[key];
    const declared = decl?.options?.list;
    const { max } = readRule(decl?.validation);
    const link = /href$/i.test(key) || key === "href" || key === "artHrefs" || path.at(-1) === "artHrefs";
    return {
        label: LABELS[key] ?? humanise(key),
        choices: extra ?? declared,
        max,
        link,
        multiline: decl?.type === "text" || [
            "body",
            "answer",
            "standfirst",
            "note",
            "intro",
            "text",
            "tail"
        ].includes(key) || path.at(-1) === "paragraphs" || typeof value === "string" && value.length > 90,
        advanced: ADVANCED.has(key)
    };
}
function optionalFields(path) {
    return EXTRA_OPTIONAL[path.join(".")] ?? {};
}
function humanise(key) {
    const words = key.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();
    return words.charAt(0).toUpperCase() + words.slice(1);
}
function sectionSummary(section) {
    const candidates = [
        section.title,
        section.heading,
        section.quote
    ];
    for (const value of candidates)if (typeof value === "string" && value.trim()) return value;
    const slides = section.slides;
    if (slides?.[0]?.title) return slides.map((slide)=>slide.title).join(" · ");
    const items = section.items;
    if (items?.length) {
        const names = items.map((item)=>item.label ?? item.title).filter(Boolean);
        if (names.length) return names.join(" · ");
    }
    const paragraphs = section.paragraphs;
    if (paragraphs?.[0]) return paragraphs[0].slice(0, 80) + (paragraphs[0].length > 80 ? "…" : "");
    const overlay = section.overlay;
    if (overlay?.title) return overlay.title;
    if (typeof section.caption === "string" && section.caption) return section.caption;
    return "";
}
function isArtPair(value) {
    if (!value || typeof value !== "object") return false;
    const v = value;
    return typeof v.desktop === "object" && v.desktop !== null && typeof v.mobile === "object" && v.mobile !== null && "tone" in v.desktop;
}
function isReferenceSrc(src) {
    return !!src && (src.startsWith("/homepage/") || src.startsWith("/reference-only/"));
}
function countReferencePhotos(value) {
    if (isArtPair(value)) {
        return Number(isReferenceSrc(value.desktop.src)) + Number(isReferenceSrc(value.mobile.src) && value.mobile.src !== value.desktop.src);
    }
    if (Array.isArray(value)) return value.reduce((sum, item)=>sum + countReferencePhotos(item), 0);
    if (value && typeof value === "object") {
        return Object.values(value).reduce((sum, item)=>sum + countReferencePhotos(item), 0);
    }
    return 0;
}
}),
"[project]/src/lib/admin/text-index.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forPage",
    ()=>forPage,
    "photoIndex",
    ()=>photoIndex,
    "textIndex",
    ()=>textIndex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/content.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2d$defs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/site-text-defs.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/site-text.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/section-fields.ts [app-rsc] (ecmascript)");
;
;
;
;
;
/** Keys that hold text but are not words a visitor reads. */ const NOT_WORDS = new Set([
    "src",
    "tone",
    "videoSrc",
    "collectionHandle",
    "query"
]);
function walkSection(section) {
    const out = [];
    const visit = (value, path, keys, trail)=>{
        if (typeof value === "string") {
            const key = keys.at(-1);
            const parentKeys = [
                section.type,
                ...keys.slice(0, -1)
            ];
            const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldInfo"])(parentKeys, key, value);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HIDDEN"].has(key) || NOT_WORDS.has(key) || info.link || info.choices || info.advanced) return;
            if (!value.trim()) return;
            out.push({
                path,
                trail,
                value,
                multiline: info.multiline
            });
            return;
        }
        if (Array.isArray(value)) {
            const key = keys.at(-1) ?? "";
            value.forEach((item, index)=>{
                const noun = key === "slides" ? "Slide" : key === "paragraphs" ? "Paragraph" : key === "items" ? "Item" : key === "groups" ? "Group" : key === "stores" ? "Store" : key === "routes" ? "Contact line" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["humanise"])(key).replace(/s$/, "");
                const itemName = item && typeof item === "object" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sectionSummary"])(item) : "";
                const label = `${noun} ${index + 1}${itemName && typeof item === "object" ? ` (${itemName.slice(0, 40)})` : ""}`;
                visit(item, [
                    ...path,
                    index
                ], keys, [
                    ...trail,
                    label
                ]);
            });
            return;
        }
        if (value && typeof value === "object") {
            for (const [key, inner] of Object.entries(value)){
                if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HIDDEN"].has(key)) continue;
                const label = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldInfo"])([
                    section.type,
                    ...keys
                ], key, inner).label;
                // A list names its own items ("Slide 2", "Paragraph 3"), so it adds
                // nothing to the trail itself; any other field adds its name.
                const nextTrail = Array.isArray(inner) ? trail : [
                    ...trail,
                    label
                ];
                visit(inner, [
                    ...path,
                    key
                ], [
                    ...keys,
                    key
                ], nextTrail);
            }
        }
    };
    visit(section, [], [], []);
    return out;
}
function blockLabel(section, index) {
    const kind = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SECTION_LABELS"][section.type]?.name ?? section.type;
    return `Block ${index + 1} · ${kind}`;
}
async function textIndex() {
    const [siteText, homepage, pages] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSiteText"])(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].getHomepageSections(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].listPages()
    ]);
    const entries = [];
    for (const field of __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$site$2d$text$2d$defs$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_TEXT_FIELDS"]){
        const value = siteText[field.key];
        entries.push({
            id: `site:${field.key}`,
            place: field.group,
            trail: [
                field.label
            ],
            value,
            multiline: !!field.lines || value.length > 90,
            viewHref: field.key.startsWith("product.") ? "/search" : "/",
            ref: {
                kind: "site",
                key: field.key
            }
        });
    }
    homepage.forEach((section, index)=>{
        for (const hit of walkSection(section)){
            entries.push({
                id: `home:${index}:${hit.path.join(".")}`,
                place: "Homepage",
                trail: [
                    blockLabel(section, index),
                    ...hit.trail
                ],
                value: hit.value,
                multiline: hit.multiline,
                viewHref: "/",
                ref: {
                    kind: "home",
                    path: [
                        index,
                        ...hit.path
                    ]
                }
            });
        }
    });
    for (const page of pages){
        const viewHref = `/pages/${page.slug}`;
        entries.push({
            id: `meta:${page.slug}:title`,
            place: page.title,
            trail: [
                "Page name"
            ],
            value: page.title,
            multiline: false,
            viewHref,
            ref: {
                kind: "pageMeta",
                slug: page.slug,
                field: "title"
            }
        }, {
            id: `meta:${page.slug}:standfirst`,
            place: page.title,
            trail: [
                "Introduction"
            ],
            value: page.standfirst,
            multiline: true,
            viewHref,
            ref: {
                kind: "pageMeta",
                slug: page.slug,
                field: "standfirst"
            }
        });
        page.sections.forEach((section, index)=>{
            for (const hit of walkSection(section)){
                entries.push({
                    id: `page:${page.slug}:${index}:${hit.path.join(".")}`,
                    place: page.title,
                    trail: [
                        blockLabel(section, index),
                        ...hit.trail
                    ],
                    value: hit.value,
                    multiline: hit.multiline,
                    viewHref,
                    ref: {
                        kind: "page",
                        slug: page.slug,
                        path: [
                            index,
                            ...hit.path
                        ]
                    }
                });
            }
        });
    }
    return entries.filter((entry)=>entry.value.trim() || entry.ref.kind === "site");
}
function walkPhotos(section) {
    const out = [];
    const visit = (value, path, keys, trail)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArtPair"])(value)) {
            out.push({
                path,
                trail,
                desktop: value.desktop.src,
                mobile: value.mobile.src
            });
            return;
        }
        if (Array.isArray(value)) {
            const key = keys.at(-1) ?? "";
            const noun = key === "slides" ? "Slide" : key === "art" ? "Photo" : "Item";
            value.forEach((item, index)=>{
                const name = item && typeof item === "object" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sectionSummary"])(item) : "";
                visit(item, [
                    ...path,
                    index
                ], keys, [
                    ...trail,
                    `${noun} ${index + 1}${name ? ` (${name.slice(0, 40)})` : ""}`
                ]);
            });
            return;
        }
        if (value && typeof value === "object") {
            for (const [key, inner] of Object.entries(value)){
                if (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HIDDEN"].has(key)) continue;
                visit(inner, [
                    ...path,
                    key
                ], [
                    ...keys,
                    key
                ], Array.isArray(inner) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArtPair"])(inner) ? trail : [
                    ...trail,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fieldInfo"])([
                        section.type,
                        ...keys
                    ], key, inner).label
                ]);
            }
        }
    };
    visit(section, [], [], []);
    return out;
}
async function photoIndex() {
    const [homepage, pages] = await Promise.all([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].getHomepageSections(),
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["content"].listPages()
    ]);
    const entries = [];
    homepage.forEach((section, index)=>{
        for (const hit of walkPhotos(section)){
            entries.push({
                id: `home:${index}:${hit.path.join(".")}`,
                place: "Homepage",
                trail: [
                    blockLabel(section, index),
                    ...hit.trail
                ],
                desktopSrc: hit.desktop,
                mobileSrc: hit.mobile,
                ref: {
                    kind: "home",
                    path: [
                        index,
                        ...hit.path
                    ]
                }
            });
        }
    });
    for (const page of pages){
        page.sections.forEach((section, index)=>{
            for (const hit of walkPhotos(section)){
                entries.push({
                    id: `page:${page.slug}:${index}:${hit.path.join(".")}`,
                    place: page.title,
                    trail: [
                        blockLabel(section, index),
                        ...hit.trail
                    ],
                    desktopSrc: hit.desktop,
                    mobileSrc: hit.mobile,
                    ref: {
                        kind: "page",
                        slug: page.slug,
                        path: [
                            index,
                            ...hit.path
                        ]
                    }
                });
            }
        });
    }
    return entries;
}
function forPage(entries, pathname) {
    const slug = pathname.startsWith("/pages/") ? pathname.slice("/pages/".length).split("/")[0] : undefined;
    return entries.filter((entry)=>{
        const ref = entry.ref;
        if (ref.kind === "site") return true;
        if (ref.kind === "home") return pathname === "/";
        return ref.slug === slug;
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1xv_t07._.js.map