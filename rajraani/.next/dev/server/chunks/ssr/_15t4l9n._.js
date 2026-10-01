module.exports = [
"[project]/sanity/lib/define.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/sanity/schemas/objects/artPair.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "artPair",
    ()=>artPair,
    "ctaFields",
    ()=>ctaFields
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/define.ts [app-ssr] (ecmascript)");
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
 */ /** Alt text is required on every image, everywhere. */ const imageWithAlt = (name, title, description)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
        name,
        title,
        type: "image",
        description,
        options: {
            hotspot: true
        },
        fields: [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const artPair = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "ctaLabel",
            title: "Link label",
            type: "string",
            description: "Sentence case here; the template applies the uppercase letterspacing.",
            validation: (rule)=>rule.required().max(40)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
"[project]/sanity/schemas/objects/sections.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/define.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/objects/artPair.ts [app-ssr] (ecmascript)");
;
;
const richTextLayoutFields = ()=>[
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const campaignSlideshowSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "campaignSlideshow",
    title: "Campaign Slideshow",
    type: "object",
    description: "Full-width campaign slides, each pairing one square frame with a title, a paragraph and a link into the campaign's story page.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slides",
            title: "Slides",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "campaignSlide",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required().max(400)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "ctaLabel",
                            type: "string",
                            validation: (rule)=>rule.required().max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const editorialSlideshowSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "editorialSlideshow",
    title: "Editorial Slideshow (2-Slide)",
    type: "object",
    description: "Two full-width slides (Womenswear/Menswear) with slide transition, arrows, secondary Explore buttons.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slides",
            title: "Slides (exactly 2)",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "editorialSlide",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "eyebrow",
                            type: "string",
                            validation: (rule)=>rule.max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required().max(240)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "ctaLabel",
                            type: "string",
                            validation: (rule)=>rule.required().max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "ctaHref",
                            type: "string",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const storesSlideshowSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "storesSlideshow",
    title: "Stores Slideshow (2-Slide Fade)",
    type: "object",
    description: "Two slides (Banaras/Mumbai) with fade transition, overlaid VISIT OUR STORES heading, Calendly links.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slides",
            title: "Slides (exactly 2: Banaras, Mumbai)",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "storeSlide",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required().max(240)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "ctaLabel",
                            type: "string",
                            validation: (rule)=>rule.required().max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const heroSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "hero",
    title: "Hero",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            type: "artPair",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "eyebrow",
            type: "string",
            description: "Small label above the title, e.g. a season. Optional.",
            validation: (rule)=>rule.max(40)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required().max(60)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "text",
            rows: 3,
            description: "One or two sentences. Price never appears in a hero.",
            validation: (rule)=>rule.required().max(240)
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ctaFields"])()
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "eyebrow",
            media: "art.desktop"
        }
    }
});
const heroCarouselSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "heroCarousel",
    title: "Hero Carousel",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "slides",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "heroSlide",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "eyebrow",
                            type: "string",
                            validation: (rule)=>rule.max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required().max(240)
                        }),
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ctaFields"])()
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
const brandStatementSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "brandStatement",
    title: "Brand statement",
    type: "object",
    description: "Centred, mostly whitespace. No image, no CTA.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "quote",
            type: "string",
            description: "A single line, set large in the display face.",
            validation: (rule)=>rule.required().max(120)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const collectionTriptychSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "collectionTriptych",
    title: "Collection triptych",
    type: "object",
    description: "Three square frames above a centred title, body and link.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            title: "Three frames",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "artPair"
                })
            ],
            validation: (rule)=>rule.required().length(3)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required().max(60)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "text",
            rows: 3,
            validation: (rule)=>rule.required().max(400)
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ctaFields"])()
    ],
    preview: {
        select: {
            title: "title",
            media: "art.0.desktop"
        }
    }
});
const videoBandSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "videoBand",
    title: "Video Band",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            type: "artPair",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required().max(60)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "text",
            rows: 3,
            validation: (rule)=>rule.required().max(300)
        }),
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ctaFields"])()
    ],
    preview: {
        select: {
            title: "title"
        }
    }
});
const categorySplitSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "categorySplit",
    title: "Category Split (2-Up)",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "items",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "categoryItem",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const tileRowSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "tileRow",
    title: "Quick-Link Tile Row (4-Up)",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "items",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "tileItem",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const dualCampaignSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "dualCampaign",
    title: "Dual Campaign Feature",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "items",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "campaignItem",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required()
                        }),
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ctaFields"])()
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
const storesBandSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "storesBand",
    title: "Boutique Stores Band",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            type: "artPair",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "body",
            type: "text",
            rows: 3,
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "stores",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "storeLocation",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "name",
                            type: "string",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const hereToHelpSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "hereToHelp",
    title: "Talk To Us Block",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "email",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "phone",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "whatsapp",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const productRailSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "productRail",
    title: "Product rail",
    type: "object",
    description: "Four pieces from a collection. Availability decides the order, not the author.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required().max(60)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "collectionHandle",
            title: "Collection",
            type: "string",
            description: "The collection handle to draw from, e.g. sarees. Products are not picked by hand — sold-out pieces sort back automatically.",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const editorialPairSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "editorialPair",
    title: "Editorial pair",
    type: "object",
    description: "Two teasers side by side, each linking to a story.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "items",
            title: "The two teasers",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "teaser",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "title",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "body",
                            type: "text",
                            rows: 3,
                            validation: (rule)=>rule.required().max(400)
                        }),
                        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ctaFields"])()
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
const poetryBandSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "poetryBand",
    title: "Poetry band",
    type: "object",
    description: "A heading and two lines on the warm ground. No CTA, by design.",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "heading",
            type: "string",
            validation: (rule)=>rule.required().max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const richTextSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "richText",
    title: "Text",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "heading",
            type: "string",
            description: "Optional. Renders as an h2.",
            validation: (rule)=>rule.max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const pullQuoteSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "pullQuote",
    title: "Pull quote",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "quote",
            type: "text",
            rows: 3,
            validation: (rule)=>rule.required().max(240)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const imageWithTextSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "imageWithText",
    title: "Image with text",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            type: "artPair",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "eyebrow",
            type: "string",
            description: "Optional. Small caps above the heading.",
            validation: (rule)=>rule.max(40)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "heading",
            type: "string",
            description: "Optional. A band can run as photograph and prose alone.",
            validation: (rule)=>rule.max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "paragraphs",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "text"
                })
            ],
            validation: (rule)=>rule.required().min(1)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$artPair$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ctaFields"])()
    ],
    preview: {
        select: {
            title: "heading",
            subtitle: "eyebrow"
        }
    }
});
const imageBandSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "imageBand",
    title: "Image band",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "art",
            type: "artPair",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "caption",
            type: "string",
            description: "Optional. Sits under the frame and doubles as the alt text, so write it even when the design hides it.",
            validation: (rule)=>rule.max(120)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "overlay",
            type: "object",
            description: "Optional. Text and a button laid over the frame, for a closing band.",
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "title",
                    type: "string",
                    validation: (rule)=>rule.required().max(80)
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "body",
                    type: "text",
                    rows: 2
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "ctaLabel",
                    type: "string",
                    validation: (rule)=>rule.required().max(40)
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const faqAccordionSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "faqAccordion",
    title: "FAQ accordion",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "groups",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "faqGroup",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "heading",
                            type: "string",
                            validation: (rule)=>rule.required().max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "items",
                            type: "array",
                            of: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                                    type: "object",
                                    name: "faqItem",
                                    fields: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                                            name: "question",
                                            type: "string",
                                            validation: (rule)=>rule.required().max(160)
                                        }),
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const mapBandSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "mapBand",
    title: "Map",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "query",
            type: "string",
            description: "What to search for — a place name, not coordinates.",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "label",
            type: "string",
            description: "Announced to screen readers, which cannot use the map.",
            validation: (rule)=>rule.required().max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "zoom",
            type: "number",
            description: "Defaults to 16."
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const galleryGridSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "galleryGrid",
    title: "Gallery grid",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "heading",
            type: "string",
            validation: (rule)=>rule.max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "standfirst",
            type: "text",
            rows: 2
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "items",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "galleryTile",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "art",
                            type: "artPair",
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string",
                            description: "Optional. Also the tile's alt text.",
                            validation: (rule)=>rule.max(60)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const contactPanelSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "contactPanel",
    title: "Contact panel",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "heading",
            type: "string",
            description: "Optional. The page header already carries the title — set this only if the section needs its own.",
            validation: (rule)=>rule.max(80)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "routes",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "contactRoute",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "text",
                            type: "text",
                            rows: 2,
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "email",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "tail",
                            type: "string",
                            description: "Optional. Sentence continuing after the address, which sits mid-sentence."
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "linkLabel",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "socialIntro",
            type: "string",
            validation: (rule)=>rule.required().max(120)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "socials",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "socialLink",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string",
                            validation: (rule)=>rule.required().max(40)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "visitHeading",
            type: "string",
            validation: (rule)=>rule.required().max(60)
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "stores",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    name: "contactStore",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "name",
                            type: "string",
                            validation: (rule)=>rule.required().max(80)
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "detail",
                            type: "text",
                            rows: 2,
                            validation: (rule)=>rule.required()
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "form",
            type: "object",
            fields: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                    name: "intro",
                    type: "text",
                    rows: 2,
                    validation: (rule)=>rule.required()
                }),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
const sizeChartSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineType"])({
    name: "sizeChart",
    title: "Size chart",
    type: "object",
    fields: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "title",
            type: "string",
            validation: (rule)=>rule.required()
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
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
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "measures",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "point",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "note",
                            type: "string"
                        })
                    ]
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "sizes",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "string"
                })
            ]
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
            name: "rows",
            type: "array",
            of: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                    type: "object",
                    fields: [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "label",
                            type: "string"
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "inches",
                            type: "array",
                            of: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
                                    type: "number"
                                })
                            ]
                        }),
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineField"])({
                            name: "cm",
                            type: "array",
                            of: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
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
const sectionArrayMembers = sectionTypes.map((section)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$define$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defineArrayMember"])({
        type: section.name
    }));
}),
"[project]/src/components/admin/HomepageEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HomepageEditor",
    ()=>HomepageEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$ea1a1e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:ea1a1e [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$SectionListEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/SectionListEditor.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function HomepageEditor({ initialSections, templates, media, links, isSeed }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$SectionListEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionListEditor"], {
        initialSections: initialSections,
        templates: templates,
        media: media,
        links: links,
        previewPath: "/",
        save: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$ea1a1e__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveHomepageAction"],
        header: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "border-b pb-5",
            style: {
                borderColor: "var(--a-outline-variant)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "a-heading-lg",
                    children: "Homepage"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                    lineNumber: 46,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "a-body-md mt-1",
                    style: {
                        color: "var(--a-ink-variant)"
                    },
                    children: [
                        "Click a band to change its words, photos and links. Use the arrows to reorder. Nothing goes live until you press ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Save & publish"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                            lineNumber: 49,
                            columnNumber: 56
                        }, this),
                        "."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this),
                isSeed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "a-body-sm mt-2",
                    style: {
                        color: "var(--a-outline)"
                    },
                    children: "This is still the built-in starting layout. Your first save replaces it."
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/HomepageEditor.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/HomepageEditor.tsx",
            lineNumber: 45,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/HomepageEditor.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/admin/MediaPicker.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArtPairField",
    ()=>ArtPairField,
    "MediaDialog",
    ()=>MediaDialog,
    "MediaLibraryProvider",
    ()=>MediaLibraryProvider,
    "UploadButton",
    ()=>UploadButton,
    "uploadPhotos",
    ()=>uploadPhotos,
    "useMediaLibrary",
    ()=>useMediaLibrary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/section-fields.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const MediaContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    items: [],
    add: ()=>{}
});
function MediaLibraryProvider({ initial, children }) {
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initial);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaContext.Provider, {
        value: {
            items,
            add: (added)=>setItems((current)=>[
                        ...added,
                        ...current
                    ])
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/admin/MediaPicker.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
const useMediaLibrary = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(MediaContext);
async function uploadPhotos(files) {
    const body = new FormData();
    for (const file of Array.from(files))body.append("file", file);
    const response = await fetch("/admin/api/media", {
        method: "POST",
        body
    });
    const result = await response.json().catch(()=>({}));
    if (!response.ok) {
        const error = new Error(result.error ?? "The upload failed.");
        error.saved = result.saved;
        throw error;
    }
    return result.saved ?? [];
}
function UploadButton({ onUploaded, label = "Upload photos", multiple = true }) {
    const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { add } = useMediaLibrary();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const upload = async (files)=>{
        if (!files?.length) return;
        setBusy(true);
        setError(null);
        try {
            const saved = await uploadPhotos(files);
            add(saved);
            onUploaded(saved);
        } catch (caught) {
            const failure = caught;
            if (failure.saved?.length) add(failure.saved);
            setError(failure.message);
        } finally{
            setBusy(false);
            if (input.current) input.current.value = "";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: input,
                type: "file",
                accept: "image/jpeg,image/png,image/webp,image/avif,image/heic",
                multiple: multiple,
                className: "sr-only",
                onChange: (event)=>upload(event.target.files),
                "aria-label": label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "a-btn-primary",
                disabled: busy,
                onClick: ()=>input.current?.click(),
                children: busy ? "Uploading…" : label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                role: "alert",
                className: "a-body-sm mt-2",
                style: {
                    color: "var(--a-negative)"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/MediaPicker.tsx",
        lineNumber: 89,
        columnNumber: 5
    }, this);
}
function MediaDialog({ open, onClose, onChoose, title }) {
    const { items } = useMediaLibrary();
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "dialog",
        "aria-modal": "true",
        "aria-label": title,
        className: "fixed inset-0 z-50 flex items-center justify-center p-6",
        style: {
            backgroundColor: "rgb(27 28 28 / 0.45)"
        },
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "a-card-elevated flex max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden",
            style: {
                backgroundColor: "var(--a-surface-lowest)",
                borderRadius: "var(--a-radius-lg)"
            },
            onClick: (event)=>event.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between gap-4 border-b p-5",
                    style: {
                        borderColor: "var(--a-outline-variant)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "a-heading-sm",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/MediaPicker.tsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(UploadButton, {
                                    label: "Upload new",
                                    multiple: false,
                                    onUploaded: (saved)=>{
                                        if (saved[0]) onChoose(saved[0]);
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "a-btn-secondary",
                                    onClick: onClose,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/MediaPicker.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/MediaPicker.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto p-5",
                    children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-body-md py-12 text-center",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: [
                            "No photos uploaded yet. Use ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Upload new"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                lineNumber: 166,
                                columnNumber: 43
                            }, this),
                            " to add one."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/MediaPicker.tsx",
                        lineNumber: 165,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid grid-cols-3 gap-4 md:grid-cols-4",
                        role: "list",
                        children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onChoose(item),
                                    className: "a-card-interactive block w-full overflow-hidden text-left",
                                    style: {
                                        borderRadius: "var(--a-radius-md)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.src,
                                            alt: item.alt || item.originalName,
                                            className: "aspect-square w-full object-cover",
                                            style: {
                                                backgroundColor: "var(--a-surface-high)"
                                            },
                                            loading: "lazy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                            lineNumber: 179,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "a-label block truncate p-2",
                                            style: {
                                                color: "var(--a-ink-variant)"
                                            },
                                            children: [
                                                item.originalName,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "block",
                                                    style: {
                                                        color: "var(--a-outline)"
                                                    },
                                                    children: [
                                                        item.width,
                                                        "×",
                                                        item.height
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                                    lineNumber: 188,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                            lineNumber: 186,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                    lineNumber: 172,
                                    columnNumber: 19
                                }, this)
                            }, item.id, false, {
                                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                lineNumber: 171,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/MediaPicker.tsx",
                        lineNumber: 169,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/MediaPicker.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/MediaPicker.tsx",
            lineNumber: 140,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/MediaPicker.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
/** One slot: a thumbnail with Change / Remove. */ function Slot({ label, side, onChange }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const reference = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isReferenceSrc"])(side.src);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-w-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "a-label block pb-1",
                style: {
                    color: "var(--a-outline)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen(true),
                className: "relative block aspect-[4/3] w-full overflow-hidden",
                style: {
                    borderRadius: "var(--a-radius-md)",
                    backgroundColor: side.tone.startsWith("#") ? side.tone : "var(--a-surface-high)",
                    outline: reference ? "2px solid var(--a-status-waiting)" : undefined
                },
                "aria-label": `Change ${label.toLowerCase()} photo`,
                children: [
                    side.src ? // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: side.src,
                        alt: "",
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/MediaPicker.tsx",
                        lineNumber: 237,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-label absolute inset-0 flex items-center justify-center",
                        style: {
                            color: "var(--a-ink-variant)"
                        },
                        children: "No photo — click to add"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/MediaPicker.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this),
                    reference ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-label absolute inset-x-0 bottom-0 px-2 py-1 text-left",
                        style: {
                            backgroundColor: "var(--a-status-waiting)",
                            color: "#fff"
                        },
                        children: "Reference photo — replace before launch"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/MediaPicker.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "a-label underline",
                        onClick: ()=>setOpen(true),
                        children: side.src ? "Change" : "Choose"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/MediaPicker.tsx",
                        lineNumber: 253,
                        columnNumber: 9
                    }, this),
                    side.src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "a-label underline",
                        style: {
                            color: "var(--a-negative)"
                        },
                        onClick: ()=>onChange({
                                tone: side.tone
                            }),
                        children: "Remove"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/MediaPicker.tsx",
                        lineNumber: 257,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MediaDialog, {
                open: open,
                title: `Choose the ${label.toLowerCase()} photo`,
                onClose: ()=>setOpen(false),
                onChoose: (item)=>{
                    onChange({
                        ...side,
                        src: item.src
                    });
                    setOpen(false);
                }
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/MediaPicker.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
function ArtPairField({ label, value, onChange }) {
    const same = value.mobile.src === value.desktop.src;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        className: "space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: "a-label pb-2",
                style: {
                    color: "var(--a-ink)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                lineNumber: 294,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid max-w-xl grid-cols-2 gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Slot, {
                        label: "Computer",
                        side: value.desktop,
                        onChange: (desktop)=>onChange(same ? {
                                desktop,
                                mobile: {
                                    ...value.mobile,
                                    src: desktop.src
                                }
                            } : {
                                ...value,
                                desktop
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/MediaPicker.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this),
                    same ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "a-label block pb-1",
                                style: {
                                    color: "var(--a-outline)"
                                },
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                lineNumber: 307,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "a-body-sm",
                                style: {
                                    color: "var(--a-ink-variant)"
                                },
                                children: "Uses the same photo, cropped to fit."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                lineNumber: 310,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "a-label mt-2 underline",
                                onClick: ()=>onChange({
                                        ...value,
                                        mobile: {
                                            ...value.mobile,
                                            src: undefined
                                        }
                                    }),
                                children: "Use a different photo on phones"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/MediaPicker.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Slot, {
                                label: "Phone",
                                side: value.mobile,
                                onChange: (mobile)=>onChange({
                                        ...value,
                                        mobile
                                    })
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "a-label mt-1 underline",
                                onClick: ()=>onChange({
                                        ...value,
                                        mobile: {
                                            ...value.mobile,
                                            src: value.desktop.src
                                        }
                                    }),
                                children: "Use the computer photo on phones too"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                                lineNumber: 328,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/MediaPicker.tsx",
                        lineNumber: 322,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/MediaPicker.tsx",
                lineNumber: 297,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/MediaPicker.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/admin/SectionEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LINKS_DATALIST",
    ()=>LINKS_DATALIST,
    "ObjectFields",
    ()=>ObjectFields,
    "SectionFields",
    ()=>SectionFields,
    "SiteLinksDatalist",
    ()=>SiteLinksDatalist,
    "SiteLinksProvider",
    ()=>SiteLinksProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/section-fields.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$MediaPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/MediaPicker.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
/** Lists whose length the design fixes. Paths ignore list positions. */ const FIXED_LENGTH = new Set([
    "collectionTriptych.art",
    "collectionTriptych.artHrefs",
    "categorySplit.items",
    "editorialPair.items",
    "dualCampaign.items"
]);
const LinksContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])([]);
const SiteLinksProvider = LinksContext.Provider;
const LINKS_DATALIST = "admin-site-links";
function SiteLinksDatalist() {
    const links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LinksContext);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("datalist", {
        id: LINKS_DATALIST,
        children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: link.href,
                children: `${link.label} — ${link.group}`
            }, link.href, false, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 58,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/admin/SectionEditor.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function LinkHint({ href }) {
    const links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LinksContext);
    if (!href) return null;
    const match = links.find((link)=>link.href === href);
    if (match) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "a-label mt-1",
            style: {
                color: "var(--a-status-done)"
            },
            children: [
                "✓ ",
                match.label,
                " (",
                match.group.toLowerCase(),
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 72,
            columnNumber: 7
        }, this);
    }
    if (/^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "a-label mt-1",
            style: {
                color: "var(--a-outline)"
            },
            children: "Outside link — opens another website."
        }, void 0, false, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this);
    }
    // Query strings and anchors on a known page are fine (filtered search etc.).
    const base = href.split(/[?#]/)[0];
    if (base && links.some((link)=>link.href === base)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "a-label mt-1",
            style: {
                color: "var(--a-status-done)"
            },
            children: [
                "✓ A view of ",
                links.find((link)=>link.href === base).label
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "a-label mt-1",
        style: {
            color: "var(--a-status-waiting)"
        },
        children: "⚠ No page on the site has this address. Pick one from the list."
    }, void 0, false, {
        fileName: "[project]/src/components/admin/SectionEditor.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
/** Give every `id` inside a copied value a fresh one, so copies never collide. */ function freshIds(value) {
    if (Array.isArray(value)) return value.map(freshIds);
    if (value && typeof value === "object") {
        const out = {};
        for (const [key, inner] of Object.entries(value)){
            out[key] = key === "id" && typeof inner === "string" ? `${inner.replace(/-copy-[a-z0-9]+$/, "")}-copy-${Math.random().toString(36).slice(2, 7)}` : freshIds(inner);
        }
        return out;
    }
    return value;
}
function TextField({ label, value, onChange, multiline, max, link }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    const over = max !== undefined && value.length > max;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "a-label flex justify-between gap-4",
                style: {
                    color: "var(--a-outline)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    max !== undefined ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: over ? "var(--a-negative)" : "var(--a-outline)"
                        },
                        children: [
                            value.length,
                            "/",
                            max
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            multiline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                id: id,
                rows: Math.min(8, Math.max(3, Math.ceil(value.length / 90))),
                value: value,
                onChange: (event)=>onChange(event.target.value),
                className: `a-input mt-1 w-full ${over ? "a-input-error" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 145,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                id: id,
                type: "text",
                value: value,
                list: link ? LINKS_DATALIST : undefined,
                placeholder: link ? "Start typing a page, collection or product…" : undefined,
                onChange: (event)=>onChange(event.target.value),
                className: `a-input mt-1 w-full ${over ? "a-input-error" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            over ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "a-label mt-1",
                style: {
                    color: "var(--a-negative)"
                },
                children: [
                    "Longer than this space is designed for — it may wrap awkwardly. Shorten by ",
                    value.length - max,
                    " characters."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this) : null,
            link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LinkHint, {
                href: value
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 168,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/SectionEditor.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
function ChoiceField({ label, value, choices, optional, onChange }) {
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "a-label block",
                style: {
                    color: "var(--a-outline)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: id,
                className: "a-select mt-1 w-full",
                value: value === undefined ? "" : String(value),
                onChange: (event)=>{
                    const raw = event.target.value;
                    if (raw === "") return onChange(undefined);
                    const numeric = choices.find((choice)=>String(choice) === raw);
                    onChange(numeric);
                },
                children: [
                    optional ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "Default"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                        lineNumber: 203,
                        columnNumber: 21
                    }, this) : null,
                    choices.map((choice)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: String(choice),
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["choiceLabel"])(choice)
                        }, String(choice), false, {
                            fileName: "[project]/src/components/admin/SectionEditor.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/SectionEditor.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
/** Edits one value of any shape. */ function ValueField({ path, fieldKey, value, onChange, optional = false }) {
    const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldInfo"])(path, fieldKey, value);
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArtPair"])(value)) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$MediaPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArtPairField"], {
            label: info.label,
            value: value,
            onChange: (next)=>onChange(next)
        }, void 0, false, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 232,
            columnNumber: 12
        }, this);
    }
    if (info.choices && (value === undefined || typeof value === "string" || typeof value === "number")) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ChoiceField, {
            label: info.label,
            value: value,
            choices: info.choices,
            optional: optional || value === undefined,
            onChange: (next)=>onChange(next)
        }, void 0, false, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 237,
            columnNumber: 7
        }, this);
    }
    if (typeof value === "string") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextField, {
            label: info.label,
            value: value,
            onChange: onChange,
            multiline: info.multiline,
            max: info.max,
            link: info.link
        }, void 0, false, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 249,
            columnNumber: 7
        }, this);
    }
    if (typeof value === "number") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "a-label block",
                    style: {
                        color: "var(--a-outline)"
                    },
                    children: info.label
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                    lineNumber: 263,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "number",
                    className: "a-input mt-1 w-40",
                    value: Number.isFinite(value) ? value : "",
                    onChange: (event)=>onChange(event.target.value === "" ? 0 : Number(event.target.value))
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 262,
            columnNumber: 7
        }, this);
    }
    if (typeof value === "boolean") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "flex items-center gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "checkbox",
                    checked: value,
                    onChange: (event)=>onChange(event.target.checked)
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "a-body-sm",
                    children: info.label
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                    lineNumber: 278,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 276,
            columnNumber: 7
        }, this);
    }
    if (Array.isArray(value)) {
        // A list of numbers (size-chart rows): one comma-separated line.
        if (value.every((item)=>typeof item === "number")) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-label block",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: [
                            info.label,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: "var(--a-outline)"
                                },
                                children: "(separate with commas)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                                lineNumber: 289,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                        lineNumber: 288,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        className: "a-input mt-1 w-full",
                        defaultValue: value.join(", "),
                        onBlur: (event)=>onChange(event.target.value.split(",").map((part)=>part.trim()).filter(Boolean).map(Number).filter((number)=>Number.isFinite(number)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                        lineNumber: 291,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 287,
                columnNumber: 9
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ListField, {
            path: [
                ...path,
                fieldKey
            ],
            label: info.label,
            items: value,
            onChange: onChange
        }, void 0, false, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 310,
            columnNumber: 7
        }, this);
    }
    if (value && typeof value === "object") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
            className: "space-y-4 border-l-2 pl-4",
            style: {
                borderColor: "var(--a-outline-variant)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                    className: "a-label pb-2",
                    style: {
                        color: "var(--a-ink)"
                    },
                    children: info.label
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                    lineNumber: 322,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ObjectFields, {
                    path: [
                        ...path,
                        fieldKey
                    ],
                    value: value,
                    onChange: onChange
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                    lineNumber: 323,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 321,
            columnNumber: 7
        }, this);
    }
    return null;
}
function ObjectFields({ path, value, onChange }) {
    const set = (key, next)=>{
        const copy = {
            ...value
        };
        if (next === undefined) delete copy[key];
        else copy[key] = next;
        onChange(copy);
    };
    const keys = Object.keys(value).filter((key)=>!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HIDDEN"].has(key));
    // Photos first: they are what people come to change most.
    keys.sort((a, b)=>Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArtPair"])(value[b])) - Number((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArtPair"])(value[a])));
    const ordinary = keys.filter((key)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldInfo"])(path, key, value[key]).advanced);
    const advanced = keys.filter((key)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldInfo"])(path, key, value[key]).advanced);
    const missing = Object.entries((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optionalFields"])(path)).filter(([key])=>!(key in value));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-5",
        children: [
            ordinary.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueField, {
                    path: path,
                    fieldKey: key,
                    value: value[key],
                    onChange: (next)=>set(key, next)
                }, key, false, {
                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                    lineNumber: 358,
                    columnNumber: 9
                }, this)),
            missing.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: missing.map(([key, initial])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "a-btn-ghost",
                        onClick: ()=>set(key, initial),
                        children: [
                            "+ ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fieldInfo"])(path, key, initial).label
                        ]
                    }, key, true, {
                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                        lineNumber: 364,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 362,
                columnNumber: 9
            }, this) : null,
            advanced.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                        className: "a-label cursor-pointer",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: "More settings (layout and spacing)"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                        lineNumber: 378,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid gap-5 md:grid-cols-2",
                        children: advanced.map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueField, {
                                path: path,
                                fieldKey: key,
                                value: value[key],
                                optional: true,
                                onChange: (next)=>set(key, next)
                            }, key, false, {
                                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                                lineNumber: 383,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                        lineNumber: 381,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 377,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/SectionEditor.tsx",
        lineNumber: 356,
        columnNumber: 5
    }, this);
}
function itemTitle(item, index, label) {
    if (typeof item === "string") return item.slice(0, 70) || `${label} ${index + 1}`;
    if (item && typeof item === "object" && !Array.isArray(item)) {
        const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sectionSummary"])(item) || item.name || item.question || item.label;
        if (summary) return `${index + 1}. ${summary}`;
    }
    return `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["humanise"])(label.replace(/s$/, ""))} ${index + 1}`;
}
function ListField({ path, label, items, onChange }) {
    const fixed = FIXED_LENGTH.has(path.join("."));
    const strings = items.every((item)=>typeof item === "string");
    const move = (index, delta)=>{
        const target = index + delta;
        if (target < 0 || target >= items.length) return;
        const next = [
            ...items
        ];
        [next[index], next[target]] = [
            next[target],
            next[index]
        ];
        onChange(next);
    };
    const replace = (index, value)=>onChange(items.map((item, i)=>i === index ? value : item));
    const remove = (index)=>onChange(items.filter((_, i)=>i !== index));
    const duplicate = (index)=>{
        const next = [
            ...items
        ];
        next.splice(index + 1, 0, freshIds(structuredClone(items[index])));
        onChange(next);
    };
    const controls = (index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "flex shrink-0 items-center gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "a-btn-icon",
                    "aria-label": "Move up",
                    disabled: index === 0,
                    onClick: ()=>move(index, -1),
                    children: "↑"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                    lineNumber: 437,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "a-btn-icon",
                    "aria-label": "Move down",
                    disabled: index === items.length - 1,
                    onClick: ()=>move(index, 1),
                    children: "↓"
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                    lineNumber: 438,
                    columnNumber: 7
                }, this),
                !fixed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "a-label px-2 underline",
                            onClick: ()=>duplicate(index),
                            children: "Duplicate"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/SectionEditor.tsx",
                            lineNumber: 441,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "a-label px-2 underline",
                            style: {
                                color: "var(--a-negative)"
                            },
                            disabled: items.length <= 1,
                            title: items.length <= 1 ? "Keep at least one — remove the whole band instead" : undefined,
                            onClick: ()=>remove(index),
                            children: "Remove"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/SectionEditor.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                    lineNumber: 440,
                    columnNumber: 9
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/SectionEditor.tsx",
            lineNumber: 436,
            columnNumber: 5
        }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "a-label block pb-2",
                style: {
                    color: "var(--a-ink)"
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                className: "space-y-3",
                children: items.map((item, index)=>strings ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueField, {
                                    path: path,
                                    fieldKey: path.at(-1),
                                    value: item,
                                    onChange: (next)=>replace(index, next)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                                    lineNumber: 465,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                                lineNumber: 464,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-6",
                                children: controls(index)
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                                lineNumber: 472,
                                columnNumber: 15
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                        lineNumber: 463,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "a-card",
                        style: {
                            borderRadius: "var(--a-radius-md)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                            open: items.length <= 2,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                    className: "flex cursor-pointer items-center gap-3 px-4 py-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "a-body-sm min-w-0 flex-1 truncate",
                                            children: itemTitle(item, index, label)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/SectionEditor.tsx",
                                            lineNumber: 478,
                                            columnNumber: 19
                                        }, this),
                                        controls(index)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                                    lineNumber: 477,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t px-4 py-4",
                                    style: {
                                        borderColor: "var(--a-outline-variant)"
                                    },
                                    children: item && typeof item === "object" && !Array.isArray(item) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isArtPair"])(item) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ObjectFields, {
                                        path: path,
                                        value: item,
                                        onChange: (next)=>replace(index, next)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                                        lineNumber: 483,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ValueField, {
                                        path: path,
                                        fieldKey: path.at(-1),
                                        value: item,
                                        onChange: (next)=>replace(index, next)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                                        lineNumber: 485,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/SectionEditor.tsx",
                                    lineNumber: 481,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/SectionEditor.tsx",
                            lineNumber: 476,
                            columnNumber: 15
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/components/admin/SectionEditor.tsx",
                        lineNumber: 475,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this),
            !fixed && items.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "a-btn-ghost mt-3",
                onClick: ()=>duplicate(items.length - 1),
                children: "+ Add another (copies the last one)"
            }, void 0, false, {
                fileName: "[project]/src/components/admin/SectionEditor.tsx",
                lineNumber: 494,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/SectionEditor.tsx",
        lineNumber: 458,
        columnNumber: 5
    }, this);
}
function SectionFields({ section, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ObjectFields, {
        path: [
            section.type
        ],
        value: section,
        onChange: (next)=>onChange(next)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/SectionEditor.tsx",
        lineNumber: 511,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/admin/SectionListEditor.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionListEditor",
    ()=>SectionListEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/section-fields.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$MediaPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/MediaPicker.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$SectionEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/SectionEditor.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
/** A fresh band id. Module scope: it is only ever called from a click. */ function newSectionId(type) {
    return `${type}-${Date.now().toString(36)}`;
}
function sectionName(section) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTION_LABELS"][section.type]?.name ?? section.type;
}
function SectionListEditor({ initialSections, templates, media, links, previewPath, save, header, extraDirty = false, onSaved }) {
    const [sections, setSections] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialSections);
    const [openId, setOpenId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adding, setAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dirty, setDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [width, setWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("computer");
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const preview = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const unsaved = dirty || extraDirty;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!unsaved) return;
        const warn = (event)=>event.preventDefault();
        window.addEventListener("beforeunload", warn);
        return ()=>window.removeEventListener("beforeunload", warn);
    }, [
        unsaved
    ]);
    const change = (next)=>{
        setSections(next);
        setDirty(true);
        setMessage(null);
    };
    const move = (index, delta)=>{
        const target = index + delta;
        if (target < 0 || target >= sections.length) return;
        const next = [
            ...sections
        ];
        [next[index], next[target]] = [
            next[target],
            next[index]
        ];
        change(next);
    };
    const add = (template)=>{
        const copy = structuredClone(template);
        copy.id = newSectionId(template.type);
        change([
            ...sections,
            copy
        ]);
        setOpenId(copy.id);
        setAdding(false);
    };
    const referenceCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countReferencePhotos"])(sections), [
        sections
    ]);
    const doSave = ()=>{
        setError(null);
        startTransition(async ()=>{
            const result = await save(sections);
            if (!result.ok) {
                setError(result.error);
                return;
            }
            setDirty(false);
            setMessage("Saved — the live site is showing this now.");
            onSaved?.();
            if (preview.current) preview.current.src = `${previewPath}?saved=${Date.now()}`;
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$MediaPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaLibraryProvider"], {
        initial: media,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$SectionEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteLinksProvider"], {
            value: links,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$SectionEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SiteLinksDatalist"], {}, void 0, false, {
                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                    lineNumber: 120,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        header,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-20 -mx-2 flex flex-wrap items-center justify-between gap-3 px-2 py-3",
                            style: {
                                backgroundColor: "var(--a-surface)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "a-body-sm",
                                    style: {
                                        color: "var(--a-ink-variant)"
                                    },
                                    children: [
                                        sections.length,
                                        " bands",
                                        referenceCount > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-3",
                                            style: {
                                                color: "var(--a-status-waiting)"
                                            },
                                            children: [
                                                "· ",
                                                referenceCount,
                                                " reference photo",
                                                referenceCount === 1 ? "" : "s",
                                                " to replace before launch"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        unsaved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "a-label",
                                            style: {
                                                color: "var(--a-status-waiting)"
                                            },
                                            children: "Unsaved changes"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: previewPath,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "a-btn-secondary",
                                            children: "Open page ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: doSave,
                                            disabled: pending || !unsaved,
                                            className: "a-btn-primary",
                                            children: pending ? "Saving…" : "Save & publish"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                            lineNumber: 145,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "alert",
                            className: "a-body-sm px-4 py-3",
                            style: {
                                color: "var(--a-negative)",
                                backgroundColor: "var(--a-negative-container)",
                                borderRadius: "var(--a-radius)"
                            },
                            children: error
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this) : null,
                        message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "status",
                            className: "a-body-sm",
                            style: {
                                color: "var(--a-status-done)"
                            },
                            children: message
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                            lineNumber: 157,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-8 2xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                            className: "space-y-3",
                                            children: sections.map((section, index)=>{
                                                const open = openId === section.id;
                                                const refs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countReferencePhotos"])(section);
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "a-card",
                                                    style: {
                                                        borderRadius: "var(--a-radius-md)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3 px-4 py-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "a-label w-6 shrink-0 tabular-nums",
                                                                    style: {
                                                                        color: "var(--a-outline)"
                                                                    },
                                                                    children: index + 1
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                    lineNumber: 171,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "min-w-0 flex-1 text-left",
                                                                    onClick: ()=>setOpenId(open ? null : section.id),
                                                                    "aria-expanded": open,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "a-body-md block truncate",
                                                                            style: {
                                                                                color: "var(--a-ink)"
                                                                            },
                                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sectionSummary"])(section) || sectionName(section)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                            lineNumber: 180,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "a-label block",
                                                                            style: {
                                                                                color: "var(--a-outline)"
                                                                            },
                                                                            children: [
                                                                                sectionName(section),
                                                                                refs > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    style: {
                                                                                        color: "var(--a-status-waiting)"
                                                                                    },
                                                                                    children: [
                                                                                        " · ",
                                                                                        refs,
                                                                                        " reference photo",
                                                                                        refs === 1 ? "" : "s"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                                    lineNumber: 186,
                                                                                    columnNumber: 31
                                                                                }, this) : null
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                            lineNumber: 183,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                    lineNumber: 174,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "a-btn-icon",
                                                                    "aria-label": "Move up",
                                                                    disabled: index === 0,
                                                                    onClick: ()=>move(index, -1),
                                                                    children: "↑"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                    lineNumber: 190,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "a-btn-icon",
                                                                    "aria-label": "Move down",
                                                                    disabled: index === sections.length - 1,
                                                                    onClick: ()=>move(index, 1),
                                                                    children: "↓"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                    lineNumber: 191,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "a-btn-secondary",
                                                                    onClick: ()=>setOpenId(open ? null : section.id),
                                                                    children: open ? "Close" : "Edit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    type: "button",
                                                                    className: "a-label px-1 underline",
                                                                    style: {
                                                                        color: "var(--a-negative)"
                                                                    },
                                                                    onClick: ()=>{
                                                                        if (confirm(`Remove "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sectionSummary"])(section) || sectionName(section)}" from this page? You can add it back until you save.`)) {
                                                                            change(sections.filter((other)=>other.id !== section.id));
                                                                        }
                                                                    },
                                                                    children: "Remove"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                    lineNumber: 195,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 23
                                                        }, this),
                                                        open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "border-t px-5 py-5",
                                                            style: {
                                                                borderColor: "var(--a-outline-variant)"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "a-body-sm mb-5",
                                                                    style: {
                                                                        color: "var(--a-outline)"
                                                                    },
                                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTION_LABELS"][section.type]?.hint
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$SectionEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SectionFields"], {
                                                                    section: section,
                                                                    onChange: (next)=>change(sections.map((other)=>other.id === section.id ? next : other))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                    lineNumber: 213,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                            lineNumber: 209,
                                                            columnNumber: 25
                                                        }, this) : null
                                                    ]
                                                }, section.id, true, {
                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                    lineNumber: 169,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                            lineNumber: 164,
                                            columnNumber: 15
                                        }, this),
                                        sections.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "a-body-md py-8 text-center",
                                            style: {
                                                color: "var(--a-outline)"
                                            },
                                            children: "This page has no bands yet. Add one below."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "a-btn-accent",
                                                    onClick: ()=>setAdding(!adding),
                                                    "aria-expanded": adding,
                                                    children: adding ? "Close" : "+ Add a band"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                    lineNumber: 233,
                                                    columnNumber: 17
                                                }, this),
                                                adding ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "mt-4 grid gap-3 md:grid-cols-2",
                                                    role: "list",
                                                    children: templates.map((template)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: ()=>add(template),
                                                                className: "a-card-interactive block h-full w-full p-4 text-left",
                                                                style: {
                                                                    borderRadius: "var(--a-radius-md)"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "a-body-md block",
                                                                        style: {
                                                                            color: "var(--a-ink)"
                                                                        },
                                                                        children: sectionName(template)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "a-body-sm mt-1 block",
                                                                        style: {
                                                                            color: "var(--a-outline)"
                                                                        },
                                                                        children: [
                                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$section$2d$fields$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SECTION_LABELS"][template.type]?.hint,
                                                                            " Starts as a copy of an existing one for you to change."
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                        lineNumber: 249,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, template.type, false, {
                                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                            lineNumber: 239,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 19
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hidden 2xl:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sticky top-16",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-2 flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "a-label",
                                                        style: {
                                                            color: "var(--a-outline)"
                                                        },
                                                        children: "The live page — refreshes when you save"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1",
                                                        role: "group",
                                                        "aria-label": "Preview width",
                                                        children: [
                                                            "computer",
                                                            "phone"
                                                        ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                "aria-pressed": width === option,
                                                                className: width === option ? "a-btn-primary" : "a-btn-secondary",
                                                                onClick: ()=>setWidth(option),
                                                                children: option === "computer" ? "Computer" : "Phone"
                                                            }, option, false, {
                                                                fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                                lineNumber: 268,
                                                                columnNumber: 23
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                lineNumber: 262,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto overflow-hidden border",
                                                style: {
                                                    width: width === "phone" ? 390 : "100%",
                                                    borderColor: "var(--a-outline-variant)",
                                                    borderRadius: "var(--a-radius-md)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                                    ref: preview,
                                                    src: previewPath,
                                                    title: "Page preview",
                                                    className: "h-[78vh] w-full bg-white"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                                lineNumber: 280,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                        lineNumber: 261,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/SectionListEditor.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/SectionListEditor.tsx",
            lineNumber: 119,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/SectionListEditor.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/admin/data:ea1a1e [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveHomepageAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"406adf37bfb42548227200b0c9ec90d84314c553ac":{"name":"saveHomepageAction"}},"src/lib/admin/content-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("406adf37bfb42548227200b0c9ec90d84314c553ac", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveHomepageAction");
;
}),
"[project]/src/lib/admin/section-fields.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemas/objects/sections.ts [app-ssr] (ecmascript)");
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
        name: "Short poem / quote band",
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
        name: "Contact details band",
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
        name: "Stores band",
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
const BY_TYPE = new Map(__TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemas$2f$objects$2f$sections$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sectionTypes"].map((type)=>[
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
];

//# sourceMappingURL=_15t4l9n._.js.map