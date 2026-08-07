/**
 * The section library.
 *
 * build.md §2.4 specifies a polymorphic `sections[]` — every page on the site
 * is assembled from an ordered list of typed sections, so an editor can build a
 * campaign story with no engineering help (§6). Fifteen section types are
 * specified; six are implemented here, which is enough to prove the
 * architecture and to render the homepage, a campaign story and a craft page.
 * The remaining nine are Sprint 4 work and are additive — a new type is a new
 * member of this union and a new entry in the registry, nothing else.
 *
 * NOTE ON IMAGES: every image field in the spec is a desktop/mobile PAIR,
 * because the category art-directs both on every banner (addendum A7) and an
 * author must not be able to forget the mobile crop. That is baked into the
 * type as `art: { desktop, mobile }`. Today both carry a placeholder tone
 * rather than an asset, so the pairing is visible in the schema before any
 * photography exists to fill it.
 */

import { BRAND } from "@/lib/brand";

export type ArtPair = {
  desktop: { tone: string; src?: string };
  mobile: { tone: string; src?: string };
};

export type HeroSlide = {
  id: string;
  art: ArtPair;
  eyebrow?: string;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

export type Section =
  | {
      type: "hero";
      id: string;
      art: ArtPair;
      eyebrow?: string;
      title: string;
      body: string;
      ctaLabel: string;
      ctaHref: string;
    }
  | {
      type: "heroCarousel";
      id: string;
      slides: HeroSlide[];
    }
  | {
      type: "brandStatement";
      id: string;
      quote: string;
      body: string;
    }
  | {
      type: "collectionTriptych";
      id: string;
      art: [ArtPair, ArtPair, ArtPair];
      title: string;
      body: string;
      ctaLabel: string;
      ctaHref: string;
    }
  | {
      type: "videoBand";
      id: string;
      art: ArtPair;
      title: string;
      body: string;
      ctaLabel: string;
      ctaHref: string;
      videoSrc?: string;
    }
  | {
      type: "categorySplit";
      id: string;
      items: [
        { art: ArtPair; label: string; href: string },
        { art: ArtPair; label: string; href: string },
      ];
    }
  | {
      type: "tileRow";
      id: string;
      items: { art: ArtPair; label: string; href: string }[];
    }
  | {
      type: "dualCampaign";
      id: string;
      items: [
        { art: ArtPair; title: string; body: string; ctaLabel: string; ctaHref: string },
        { art: ArtPair; title: string; body: string; ctaLabel: string; ctaHref: string },
      ];
    }
  | {
      type: "storesBand";
      id: string;
      art: ArtPair;
      title: string;
      body: string;
      stores: { name: string; href: string }[];
    }
  | {
      type: "hereToHelp";
      id: string;
      title: string;
      email: string;
      phone: string;
      whatsapp: string;
      hours: string;
    }
  | {
      type: "productRail";
      id: string;
      title: string;
      collectionHandle: string;
      ctaLabel: string;
    }
  | {
      type: "editorialPair";
      id: string;
      items: [EditorialTeaser, EditorialTeaser];
    }
  | {
      type: "poetryBand";
      id: string;
      heading: string;
      body: string;
    }
  | {
      type: "richText";
      id: string;
      heading?: string;
      paragraphs: string[];
    }
  | {
      type: "pullQuote";
      id: string;
      quote: string;
      attribution?: string;
    };

export type EditorialTeaser = {
  art: ArtPair;
  title: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
};

const pair = (desktop: string, mobile = desktop): ArtPair => ({
  desktop: { tone: desktop },
  mobile: { tone: mobile },
});

/**
 * A pair backed by a real image file.
 */
const imagePair = (
  tone: string,
  desktopSrc: string,
  mobileSrc = desktopSrc,
  mobileTone = tone,
): ArtPair => ({
  desktop: { tone, src: `/reference-only/${desktopSrc}` },
  mobile: { tone: mobileTone, src: `/reference-only/${mobileSrc}` },
});

/**
 * Homepage.
 *
 * Eleven sections, in the order the category runs them (design-addendum.md A7).
 * The SEQUENCE is inherited deliberately — it is a solved merchandising problem
 * and build.md's scope note is explicit that structure is what we copy. The
 * names, copy and imagery in it are ours.
 */
export const HOMEPAGE_SECTIONS: readonly Section[] = [
  {
    type: "heroCarousel",
    id: "homepage-hero-carousel",
    slides: [
      {
        id: "slide-nadi",
        art: imagePair("indigo", "hero-1.webp"),
        eyebrow: "Monsoon 2026",
        title: "Nadi",
        body: "A river does not repeat itself. Nine pieces that follow water through the season it belongs to.",
        ctaLabel: "Discover",
        ctaHref: "/collections/sarees",
      },
      {
        id: "slide-mrigaya",
        art: imagePair("maroon", "hero-2.webp"),
        eyebrow: "Kadhua Collectibles",
        title: "Mrigaya",
        body: "A celebration of flora and fauna woven into pure silk.",
        ctaLabel: "Discover",
        ctaHref: "/collections/kadhua",
      },
      {
        id: "slide-icons",
        art: imagePair("gold", "hero-3.webp"),
        eyebrow: "Heritage Classics",
        title: "Signatures",
        body: "Timeless Banarasi masterpieces crafted with traditional precision.",
        ctaLabel: "Explore Icons",
        ctaHref: "/collections/sarees",
      },
      {
        id: "slide-gifting",
        art: imagePair("pink", "hero-4.webp"),
        eyebrow: "Curated Edits",
        title: "The Gifting Edit",
        body: "Handwoven treasures packaged for timeless celebrations.",
        ctaLabel: "Explore Gifts",
        ctaHref: "/collections/sarees",
      },
      {
        id: "slide-linen",
        art: imagePair("green", "hero-5.webp"),
        eyebrow: "Seasonal Selections",
        title: "Linen & Kora",
        body: "Lightweight weaves for modern elegance.",
        ctaLabel: "Discover",
        ctaHref: "/collections/sarees",
      },
      {
        id: "slide-collectibles",
        art: imagePair("black", "hero-6.webp"),
        eyebrow: "Repoussé & Metalwork",
        title: "Repoussé",
        body: "Heirloom metal repoussé and master artisan collectibles.",
        ctaLabel: "Discover",
        ctaHref: "/pages/antaraal",
      },
    ],
  },
  {
    type: "brandStatement",
    id: "statement",
    quote: "Every piece is one piece.",
    body: "We buy directly from weavers in and around Varanasi, and we make one of a thing. When it sells, it is rewoven or it is not made again.",
  },
  {
    type: "collectionTriptych",
    id: "triptych-kadhua",
    art: [
      imagePair("maroon", "triptych-1.webp"),
      imagePair("gold", "triptych-2.webp"),
      imagePair("green", "triptych-3.webp"),
    ],
    title: "Kadhua",
    body: "Each motif entered as a separate unit, with no thread carried behind the cloth. The slowest way to weave a Banarasi, and the reason the reverse reads almost as cleanly as the face.",
    ctaLabel: "Discover Kadhua",
    ctaHref: "/collections/kadhua",
  },
  {
    type: "videoBand",
    id: "loom-video",
    art: imagePair("black", "editorial-1.webp"),
    title: "The Motion of the Loom",
    body: "Between six and twenty-six weeks on a pit loom in Varanasi. Every thread guided by human hand.",
    ctaLabel: "Watch Our Process",
    ctaHref: "/pages/handloom",
    videoSrc: "/reference-only/loom.mp4",
  },
  {
    type: "categorySplit",
    id: "cat-split",
    items: [
      {
        art: imagePair("maroon", "category-sarees.webp"),
        label: "SAREES",
        href: "/collections/sarees",
      },
      {
        art: imagePair("gold", "category-dupattas.webp"),
        label: "DUPATTAS",
        href: "/collections/dupattas",
      },
    ],
  },
  {
    type: "editorialPair",
    id: "stories",
    items: [
      {
        art: imagePair("purple", "editorial-2.webp"),
        title: "Antaraal",
        body: "The interval — the pause a loom takes between one motif and the next. A study in ground, and in the space that makes a pattern legible.",
        ctaLabel: "Read Story",
        ctaHref: "/pages/antaraal",
      },
      {
        art: imagePair("black", "editorial-1.webp"),
        title: "Handloom, or not",
        body: "Four tests you can run in a shop, in under a minute, without any special knowledge. Two of them work on a photograph.",
        ctaLabel: "Read Guide",
        ctaHref: "/pages/handloom",
      },
    ],
  },
  {
    type: "tileRow",
    id: "quick-links",
    items: [
      {
        art: imagePair("pink", "tile-bridal.webp"),
        label: "BRIDAL",
        href: "/collections/sarees",
      },
      {
        art: imagePair("gold", "tile-gifting.webp"),
        label: "GIFTING",
        href: "/collections/sarees",
      },
      {
        art: imagePair("purple", "tile-zarkashi.webp"),
        label: "ZARKASHI",
        href: "/collections/sarees",
      },
      {
        art: imagePair("black", "tile-repousse.webp"),
        label: "REPOUSSÉ",
        href: "/pages/antaraal",
      },
    ],
  },
  {
    type: "dualCampaign",
    id: "campaigns-dual",
    items: [
      {
        art: imagePair("maroon", "hero-2.webp"),
        title: "Mrigaya",
        body: "Depicting forest motifs and intricate animal allegories in hand-spun silk.",
        ctaLabel: "Discover",
        ctaHref: "/collections/sarees",
      },
      {
        art: imagePair("green", "hero-5.webp"),
        title: "Linen & Kora",
        body: "Breathable textures woven for quiet afternoon gatherings.",
        ctaLabel: "Discover",
        ctaHref: "/collections/sarees",
      },
    ],
  },
  {
    type: "poetryBand",
    id: "poetry",
    heading: "Slow is the only speed it comes at",
    body: "Between six and twenty-six weeks on a pit loom, depending on what is being asked of it. There is no faster version of this that is still this.",
  },
  {
    type: "storesBand",
    id: "boutiques",
    art: imagePair("black", "stores.webp"),
    title: "Visit Our Boutiques",
    body: "Experience the drape, texture, and brilliance of handloom silk in person. Private consultations hosted daily.",
    stores: [
      { name: "Varanasi Flagship", href: "/pages/antaraal" },
      { name: "Mumbai Gallery", href: "/pages/antaraal" },
    ],
  },
  {
    type: "hereToHelp",
    id: "help-strip",
    title: "Here to Help",
    email: BRAND.supportEmail,
    phone: BRAND.supportPhone,
    whatsapp: "Consult on WhatsApp",
    hours: BRAND.supportHours,
  },
];

/** Campaign stories and craft pages, keyed by slug. */
export const PAGES: Readonly<
  Record<string, { title: string; standfirst: string; sections: readonly Section[] }>
> = {
  nadi: {
    title: "Nadi",
    standfirst:
      "A river does not repeat itself. Nine pieces that follow water through the season it belongs to — the colour of it before rain, during, and in the days after.",
    sections: [
      {
        type: "hero",
        id: "nadi-hero",
        art: pair("indigo", "blue"),
        eyebrow: "Monsoon 2026",
        title: "Nadi",
        body: "Woven between March and July, when the light in Banaras changes twice.",
        ctaLabel: "Shop the collection",
        ctaHref: "/collections/nadi",
      },
      {
        type: "richText",
        id: "nadi-intro",
        paragraphs: [
          "The collection began with a complaint. A weaver we have bought from for years said that everything we commissioned was the colour of a wedding, and that he had not woven a grey in four years.",
          "So we asked for water instead. Not blue — water, which in this city is mostly brown, sometimes silver, and only occasionally the colour anyone paints it.",
        ],
      },
      {
        type: "pullQuote",
        id: "nadi-quote",
        quote:
          "You cannot weave a river. You can weave the half second where it turns over.",
      },
      {
        type: "productRail",
        id: "nadi-rail",
        title: "The pieces",
        collectionHandle: "nadi",
        ctaLabel: "See all",
      },
      {
        type: "poetryBand",
        id: "nadi-close",
        heading: "Before rain, during, after",
        body: "Three greys, two blues, and one yellow that should not work and does.",
      },
    ],
  },
  antaraal: {
    title: "Antaraal",
    standfirst:
      "The interval — the pause a loom takes between one motif and the next. A study in ground, and in the space that makes a pattern legible.",
    sections: [
      {
        type: "hero",
        id: "antaraal-hero",
        art: pair("purple"),
        eyebrow: "Winter 2026",
        title: "Antaraal",
        body: "Five pieces about the parts of a cloth where nothing happens.",
        ctaLabel: "Shop the collection",
        ctaHref: "/collections/antaraal",
      },
      {
        type: "richText",
        id: "antaraal-intro",
        paragraphs: [
          "A dense field is easy to admire and hard to wear. The pieces here go the other way: the ground is given more room than the motif, and the motif is better for it.",
          "Two of them are the plainest things we have commissioned. One took twenty-six weeks.",
        ],
      },
      {
        type: "productRail",
        id: "antaraal-rail",
        title: "The pieces",
        collectionHandle: "antaraal",
        ctaLabel: "See all",
      },
    ],
  },
  kadhua: {
    title: "On kadhua",
    standfirst:
      "The slowest technique on a Banarasi loom, and the one that shows most clearly from the wrong side.",
    sections: [
      {
        type: "richText",
        id: "kadhua-what",
        heading: "What it is",
        paragraphs: [
          "In most figured weaving, the thread that makes a motif runs continuously across the width of the cloth and is cut away behind the parts where it is not wanted. Those cut ends are floats, and they are why the reverse of most brocade looks like a mess.",
          "Kadhua does not do this. Each motif is woven as its own detached unit, with its own small shuttle, and nothing is carried behind. A saree with two hundred booti has been entered two hundred separate times.",
        ],
      },
      {
        type: "pullQuote",
        id: "kadhua-quote",
        quote: "Turn it over. That is the whole test, and it takes two seconds.",
      },
      {
        type: "richText",
        id: "kadhua-cost",
        heading: "What it costs",
        paragraphs: [
          "Between three and six times the loom time of the equivalent cutwork piece. That is the entire price difference, and it is why a kadhua saree and a fekuwa saree that look similar in a photograph are not close in price.",
        ],
      },
      {
        type: "productRail",
        id: "kadhua-rail",
        title: "Kadhua pieces",
        collectionHandle: "kadhua",
        ctaLabel: "See all",
      },
    ],
  },
  handloom: {
    title: "Handloom, or not",
    standfirst:
      "Four tests you can run in a shop, in under a minute, without any special knowledge.",
    sections: [
      {
        type: "richText",
        id: "handloom-tests",
        heading: "The tests",
        paragraphs: [
          "Look at the reverse first. A handloom piece has small irregularities in the float lengths that a powerloom cannot produce, because a powerloom is more consistent than a person.",
          "Then look for the pinhole. Handloom weavers pin the selvedge to keep the width even, and the pin leaves a line of small holes down both edges. A powerloom uses a temple and leaves nothing.",
          "Third, hold it to the light and look at the ground rather than the motif. Handspun yarn varies in thickness along its length, so the ground has a faint unevenness that reads as depth.",
          "Fourth, ask the price and then ask how long it took. Anyone who knows the piece can answer the second question in weeks. If the answer is a shrug, the first answer is unreliable too.",
        ],
      },
      {
        type: "pullQuote",
        id: "handloom-quote",
        quote:
          "A powerloom is not a fake. It is a different thing, priced as if it were not.",
      },
    ],
  },
};
