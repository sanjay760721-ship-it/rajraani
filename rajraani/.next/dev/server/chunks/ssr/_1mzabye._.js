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
                        children: "Stand-in photo — replace before launch"
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
"[project]/src/components/admin/ProductForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductForm",
    ()=>ProductForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$32f111__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:32f111 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
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
    const [state, formAction, pending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$32f111__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["saveProductAction"], {
        errors: {}
    });
    const value = state.values ?? product ?? EMPTY;
    const errors = state.errors;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: formAction,
        className: "max-w-3xl space-y-12",
        children: [
            product ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                name: "id",
                value: product.id
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 73,
                columnNumber: 18
            }, this) : null,
            errors.form ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Name",
                note: "A piece has a short name (Aparajita) and a longer description of the cloth.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Name",
                        name: "poeticName",
                        defaultValue: value.poeticName,
                        error: errors.poeticName,
                        hint: "The short name shoppers see first, e.g. Aparajita.",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Description of the cloth",
                        name: "title",
                        defaultValue: value.title,
                        error: errors.title,
                        hint: "Colour, fabric, weave and garment, e.g. Blue Katan Silk Kadhua Saree.",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Web address",
                        name: "handle",
                        defaultValue: value.handle,
                        error: errors.handle,
                        hint: "Filled in for you. Changing it breaks old links to this piece.",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                        label: "Product code",
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Price and stock",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "Price (₹)",
                            name: "priceRupees",
                            type: "number",
                            defaultValue: value.priceRupees || "",
                            error: errors.priceRupees,
                            hint: "In rupees, no commas, e.g. 68000.",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                            label: "How many in stock",
                            name: "inventoryQuantity",
                            type: "number",
                            defaultValue: value.inventoryQuantity,
                            error: errors.inventoryQuantity,
                            hint: "Usually 1. At 0 it shows as sold out.",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                            label: "Ready to send?",
                            name: "fulfilmentMode",
                            options: vocabulary.fulfilment,
                            defaultValue: value.fulfilmentMode,
                            error: errors.fulfilmentMode,
                            hint: "Whether it is ready to send, or woven after it is ordered."
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductForm.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "The story and details",
                note: "A short story about this piece (about 90 words) and its details.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TextArea, {
                        label: "Story",
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Colour",
                                name: "specColour",
                                defaultValue: value.specColour,
                                error: errors.specColour,
                                hint: "In words, e.g. Indigo blue.",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Speciality",
                                name: "specSpeciality",
                                defaultValue: value.specSpeciality,
                                hint: "Optional."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                label: "Collection note",
                                name: "specCollectionNote",
                                defaultValue: value.specCollectionNote,
                                hint: "Optional."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Where it was made",
                note: "Who wove it and how long it took. Shoppers trust this.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "Filters",
                note: "Shoppers use these to find the piece. They also decide which collections it appears in.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "What it is",
                                name: "garmentType",
                                options: vocabulary.garment,
                                defaultValue: value.garmentType,
                                error: errors.garmentType
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Weave",
                                name: "weave",
                                options: vocabulary.weave,
                                defaultValue: value.weave,
                                error: errors.weave,
                                allowEmpty: true,
                                hint: "Leave as None for suits."
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
                                label: "Main colour",
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxGroup, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckboxGroup, {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Select, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Section, {
                title: "On the shop",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-3 a-body-sm",
                        style: {
                            color: "var(--a-ink)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                name: "published",
                                defaultChecked: value.published,
                                className: "size-4 accent-ink"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductForm.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            "Show this piece on the shop"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-label",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: "Untick to hide it from shoppers — nothing is lost."
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 border-t pt-6",
                style: {
                    borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: pending,
                        className: "a-btn-primary",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/admin/products",
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
/* ---------------------------------------------------------------- controls */ function Section({ title, note, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        className: "space-y-6 border-t pt-6",
        style: {
            borderColor: "color-mix(in srgb, var(--a-outline-variant) 30%, transparent)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                className: "sr-only",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductForm.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "a-heading-sm",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    note ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function Field({ label, name, error, hint, type = "text", ...rest }) {
    const describedBy = [
        hint ? `${name}-hint` : "",
        error ? `${name}-error` : ""
    ].filter(Boolean).join(" ");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function TextArea({ label, name, error, rows, defaultValue, required }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
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
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function Select({ label, name, options, defaultValue, error, hint, allowEmpty = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: name,
                name: name,
                defaultValue: defaultValue ?? "",
                "aria-invalid": error ? true : undefined,
                className: `a-select w-full ${error ? "a-input-error" : ""}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: allowEmpty ? "None" : "Choose…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductForm.tsx",
                        lineNumber: 408,
                        columnNumber: 9
                    }, this),
                    options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function CheckboxGroup({ label, name, options, selected, error }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 flex flex-wrap gap-x-6 gap-y-2",
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 a-body-sm",
                        style: {
                            color: "var(--a-ink)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/components/admin/ProductPhotos.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductPhotos",
    ()=>ProductPhotos
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$a6afcc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:a6afcc [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$ea38ae__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:ea38ae [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$451889__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:451889 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$e4b0a3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:e4b0a3 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$f405b7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/lib/admin/data:f405b7 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$MediaPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/admin/MediaPicker.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Slot({ slot, index, last, only, run }) {
    const [picking, setPicking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [alt, setAlt] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(slot.alt);
    const shown = slot.url ?? slot.standIn;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "a-card overflow-hidden",
        style: {
            borderRadius: "var(--a-radius-md)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setPicking(true),
                className: "relative block aspect-[3/4] w-full",
                style: {
                    backgroundColor: "var(--a-surface-high)"
                },
                "aria-label": slot.url ? `Replace photo ${index + 1}` : `Add photo ${index + 1}`,
                children: [
                    shown ? // eslint-disable-next-line @next/next/no-img-element -- admin thumbnail
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: shown,
                        alt: "",
                        className: "h-full w-full object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-body-sm absolute inset-0 flex items-center justify-center p-3 text-center",
                        style: {
                            color: "var(--a-ink-variant)"
                        },
                        children: "+ Add photo"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-label absolute top-2 left-2 px-2 py-0.5",
                        style: {
                            backgroundColor: "var(--a-surface-lowest)",
                            borderRadius: "var(--a-radius)"
                        },
                        children: index === 0 ? "1 · Main photo" : index + 1
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    !slot.url && slot.standIn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "a-label absolute inset-x-0 bottom-0 px-2 py-1 text-left",
                        style: {
                            backgroundColor: "var(--a-status-waiting)",
                            color: "var(--a-surface-lowest)"
                        },
                        children: "Stand-in photo — replace before launch"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2 p-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "a-label",
                        style: {
                            color: "var(--a-outline)"
                        },
                        children: "What this photo should show"
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        className: "a-input w-full",
                        rows: 2,
                        value: alt,
                        onChange: (event)=>setAlt(event.target.value),
                        onBlur: ()=>{
                            if (alt !== slot.alt) run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$ea38ae__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["describeProductPhotoAction"])(slot.id, alt));
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "a-btn-secondary",
                                onClick: ()=>setPicking(true),
                                children: slot.url ? "Replace" : "Add photo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "a-btn-icon",
                                "aria-label": "Move earlier",
                                disabled: index === 0,
                                onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$451889__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["moveProductPhotoAction"])(slot.id, -1)),
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "a-btn-icon",
                                "aria-label": "Move later",
                                disabled: last,
                                onClick: ()=>run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$451889__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["moveProductPhotoAction"])(slot.id, 1)),
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "a-label ml-auto underline",
                                style: {
                                    color: "var(--a-negative)"
                                },
                                onClick: ()=>{
                                    const warning = only ? "This is the piece’s only photo. Without a photo it will not show on the shop until you add one. Remove it?" : "Remove this photo from the piece?";
                                    if (confirm(warning)) run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$e4b0a3__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["removeProductPhotoAction"])(slot.id));
                                },
                                children: "Remove"
                            }, void 0, false, {
                                fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$MediaPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaDialog"], {
                open: picking,
                title: `Photo ${index + 1}`,
                onClose: ()=>setPicking(false),
                onChoose: (item)=>{
                    setPicking(false);
                    run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$f405b7__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["replaceProductPhotoAction"])(slot.id, item.src));
                }
            }, void 0, false, {
                fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/admin/ProductPhotos.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function ProductPhotos({ productId, slots, media }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [adding, setAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const run = (action)=>startTransition(async ()=>{
            setError(null);
            const result = await action();
            if (!result.ok) setError(result.error);
            router.refresh();
        });
    const filled = slots.filter((slot)=>slot.url).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$MediaPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaLibraryProvider"], {
        initial: media,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "max-w-5xl space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-end justify-between gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "a-heading-sm",
                                    children: "Photos"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                                    lineNumber: 154,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "a-body-sm mt-1",
                                    style: {
                                        color: "var(--a-ink-variant)"
                                    },
                                    children: [
                                        filled === 0 ? "No real photos yet. Click a slot to upload one — the first is shown in listings." : `${filled} of ${slots.length} photos added. The first is shown in listings.`,
                                        " ",
                                        pending ? "Saving…" : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "a-btn-primary",
                            onClick: ()=>setAdding(true),
                            children: "+ Add a photo"
                        }, void 0, false, {
                            fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    role: "alert",
                    className: "a-body-sm",
                    style: {
                        color: "var(--a-negative)"
                    },
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                    lineNumber: 166,
                    columnNumber: 18
                }, this) : null,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "grid grid-cols-2 gap-4 md:grid-cols-4",
                    role: "list",
                    children: slots.map((slot, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Slot, {
                            slot: slot,
                            index: index,
                            last: index === slots.length - 1,
                            only: slots.length === 1,
                            run: run
                        }, slot.id, false, {
                            fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$admin$2f$MediaPicker$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MediaDialog"], {
                    open: adding,
                    title: "Add a photo to this piece",
                    onClose: ()=>setAdding(false),
                    onChoose: (item)=>{
                        setAdding(false);
                        run(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$data$3a$a6afcc__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addProductPhotoAction"])(productId, item.src));
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/admin/ProductPhotos.tsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/admin/ProductPhotos.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/admin/ProductPhotos.tsx",
        lineNumber: 150,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/admin/data:32f111 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "saveProductAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"604c8f943ec27aeea2ed355a39e376c1ba58a1c2dd":{"name":"saveProductAction"}},"src/lib/admin/product-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("604c8f943ec27aeea2ed355a39e376c1ba58a1c2dd", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "saveProductAction");
;
}),
"[project]/src/lib/admin/data:451889 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "moveProductPhotoAction",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60d8969ee84d54dee7a95655f7ef34c72d0e22fda6":{"name":"moveProductPhotoAction"}},"src/lib/admin/product-photo-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60d8969ee84d54dee7a95655f7ef34c72d0e22fda6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "moveProductPhotoAction");
;
}),
"[project]/src/lib/admin/data:a6afcc [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addProductPhotoAction",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60dec442001f65c15f5f3b00d8ef2391102abb4d84":{"name":"addProductPhotoAction"}},"src/lib/admin/product-photo-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60dec442001f65c15f5f3b00d8ef2391102abb4d84", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addProductPhotoAction");
;
}),
"[project]/src/lib/admin/data:e4b0a3 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "removeProductPhotoAction",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40a121fa1eff521c8b39302524ffb0697db47b5c0f":{"name":"removeProductPhotoAction"}},"src/lib/admin/product-photo-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40a121fa1eff521c8b39302524ffb0697db47b5c0f", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "removeProductPhotoAction");
;
}),
"[project]/src/lib/admin/data:ea38ae [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "describeProductPhotoAction",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"601e9b7cb823d849ce17f870baaa5e35e22e39fc2c":{"name":"describeProductPhotoAction"}},"src/lib/admin/product-photo-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("601e9b7cb823d849ce17f870baaa5e35e22e39fc2c", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "describeProductPhotoAction");
;
}),
"[project]/src/lib/admin/data:f405b7 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "replaceProductPhotoAction",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60446c01f32de71750c5b50c9a5acfeb469bd8fb47":{"name":"replaceProductPhotoAction"}},"src/lib/admin/product-photo-actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60446c01f32de71750c5b50c9a5acfeb469bd8fb47", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "replaceProductPhotoAction");
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

//# sourceMappingURL=_1mzabye._.js.map