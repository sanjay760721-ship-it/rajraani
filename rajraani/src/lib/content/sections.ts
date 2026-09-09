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
  /**
   * Where the caption sits over the art. Defaults to `center`.
   *
   * Per-slide because it has to be: the subject of the photograph decides it.
   * A frame with the figure on the left wants its caption right, and the
   * reverse. A single global alignment guarantees that half the slides put
   * text over the thing you are meant to be looking at.
   *
   * Vertically the caption is always centred; only the horizontal edge moves.
   */
  align?: "left" | "center" | "right";
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
      /**
       * Where each tile goes, in the same order as `art`.
       *
       * A shopper who clicks a photograph expects the piece in it, not a
       * listing that happens to contain it. Optional, and falls back to
       * `ctaHref` per tile, so a band that really is three views of one
       * collection does not have to repeat itself three times.
       */
      artHrefs?: [string, string, string];
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
      type: "editorialPair";
      id: string;
      items: [EditorialTeaser, EditorialTeaser];
    }
  | {
      type: "editorialSlideshow";
      id: string;
      slides: {
        id: string;
        art: ArtPair;
        eyebrow?: string;
        title: string;
        body: string;
        ctaLabel: string;
        ctaHref: string;
        buttonVariant: "primary" | "secondary";
        textAlign: "left" | "right" | "center";
        /**
         * Where the caption sits vertically. Defaults to `bottom`.
         *
         * Per-slide, and defaulting to the existing behaviour, so adding it to
         * one slide cannot quietly move the others.
         */
        verticalAlign?: "bottom" | "center";
      }[];
    }
  | {
      type: "storesSlideshow";
      id: string;
      slides: {
        id: string;
        art: ArtPair;
        title: string;
        body: string;
        ctaLabel: string;
        ctaHref: string;
      }[];
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
      /*
       * The call to action is DATA, not a property of having two paragraphs.
       *
       * It used to be neither: the renderer emitted a hard-coded link whenever
       * `paragraphs.length > 1`, pointing at a competitor campaign slug that has
       * no route in this build. Six sections rendered it, on the homepage and on
       * every editorial page, and it 404d from all of them.
       *
       * Both fields or neither — a label with nowhere to go is the bug again.
       */
      ctaLabel?: string;
      ctaHref?: string;
    }
  | {
      type: "pullQuote";
      id: string;
      quote: string;
      attribution?: string;
    }
  | {
      type: "productRail";
      id: string;
      title: string;
      collectionHandle: string;
      ctaLabel: string;
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
      type: "storesBand";
      id: string;
      art: ArtPair;
      title: string;
      body: string;
      stores: { name: string; href: string }[];
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
      type: "campaignSlideshow";
      id: string;
      slides: {
        id: string;
        art: ArtPair;
        title: string;
        body: string;
        ctaLabel: string;
        ctaHref: string;
      }[];
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
  desktop: { tone, src: `/homepage/${desktopSrc}` },
  mobile: { tone: mobileTone, src: `/homepage/${mobileSrc}` },
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
        id: "slide-antaraal",
        align: "right",
        art: imagePair("indigo", "hero/slide-01-antaraal.webp"),
        eyebrow: "Roman Frescoes",
        title: "Antaraal",
        body: "Gheecha silk worked against a katan ground, so the surface takes light unevenly and never twice the same way.",
        ctaLabel: "Discover",
        ctaHref: "/collections/antaraal",
      },
      {
        id: "slide-nadi",
        align: "right",
        art: imagePair("maroon", "hero/slide-02-nadi.webp"),
        eyebrow: "Handloom Day",
        title: "Nadi",
        body: "Nine pieces built outward from one motif at the centre of the pallu, and read from there.",
        ctaLabel: "Discover",
        ctaHref: "/pages/nadi",
      },
      {
        id: "slide-kadhua",
        art: imagePair("gold", "hero/slide-03-kadhua.webp"),
        eyebrow: "Seasonal Edit",
        title: "Kadhua",
        body: "Undyed grounds and real zari, in the lighter weights a long afternoon asks for.",
        ctaLabel: "Discover",
        ctaHref: "/collections/kadhua",
      },
      {
        id: "slide-gifting",
        align: "right",
        art: imagePair("pink", "hero/slide-04-gifting.webp"),
        eyebrow: "Curated Edits",
        title: "The Art of Gifting",
        body: "Thoughtfully handwoven pieces for timeless celebrations.",
        ctaLabel: "Explore Gifts",
        ctaHref: "/collections/gifts",
      },
      {
        id: "slide-art-collectibles",
        art: imagePair("black", "hero/slide-05-art-collectibles.webp"),
        eyebrow: "Metalwork",
        title: "Art & Collectibles",
        body: "Heirloom metal repoussé and master artisan collectibles.",
        ctaLabel: "Discover",
        ctaHref: "/pages/art-collectibles",
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
    id: "triptych-antaraal",
    art: [
      imagePair("maroon", "gallery/tile-01.webp"),
      imagePair("gold", "gallery/tile-02.webp"),
      imagePair("green", "gallery/tile-03.webp"),
    ],
    // Each tile to the piece photographed in it.
    artHrefs: [
      "/products/sindoor-red-katan-silk-kadiyal-saree",
      "/products/chandrika-ivory-tissue-silk-jangla-saree",
      "/products/padmini-pink-moonga-silk-anarkali-suit",
    ],
    title: "Antaraal",
    body: "Gheecha is spun from the short, uneven fibres left after the reel, which is why it will not lie flat and why the light never settles on it. Woven into a katan ground it gives a surface with grain in it.",
    ctaLabel: "Discover",
    ctaHref: "/collections/antaraal",
  },
  {
    type: "videoBand",
    id: "loom-video",
    art: imagePair("black", "video/loom-poster.webp"),
    title: "The Motion of the Loom",
    body: "Between six and twenty-six weeks on a pit loom in Varanasi. Every thread guided by human hand.",
    ctaLabel: "Watch Our Process",
    ctaHref: "/pages/handloom",
    videoSrc: "/homepage/video/loom.mp4",
  },
  {
    type: "categorySplit",
    id: "cat-split",
    items: [
      {
        art: imagePair("maroon", "category/sarees.webp"),
        label: "SAREES",
        href: "/collections/sarees",
      },
      {
        art: imagePair("gold", "category/suits-b.webp"),
        label: "SUITS",
        href: "/collections/suits",
      },
    ],
  },
  {
    type: "editorialSlideshow",
    id: "editorial-womenswear-menswear",
    slides: [
      {
        id: "slide-womenswear",
        art: imagePair("purple", "womens-mens/womenswear.webp"),
        eyebrow: "Womenswear",
        title: "Womenswear",
        body: "Sarees, dupattas and stitched pieces, all off the same looms.",
        ctaLabel: "Explore",
        ctaHref: "/collections/womenswear",
        buttonVariant: "secondary",
        textAlign: "right",
      },
      {
        id: "slide-menswear",
        art: imagePair("black", "womens-mens/menswear.webp"),
        eyebrow: "Menswear",
        title: "Menswear",
        body: "Kurtas, stoles and cloth by the metre, cut from handloom.",
        ctaLabel: "Explore",
        ctaHref: "/collections/menswear",
        buttonVariant: "secondary",
        textAlign: "right",
        verticalAlign: "center",
      },
    ],
  },
  {
    type: "tileRow",
    id: "quick-links",
    items: [
      {
        art: imagePair("pink", "four-tiles/tile-01-bridal.webp"),
        label: "BRIDAL",
        href: "/collections/bridal",
      },
      {
        art: imagePair("gold", "four-tiles/tile-02-gifting.webp"),
        label: "GIFTING",
        href: "/collections/gifts",
      },
      {
        art: imagePair("purple", "four-tiles/tile-03-zarkashi.webp"),
        label: "ZARKASHI",
        href: "/collections/zarkashi",
      },
      {
        art: imagePair("black", "four-tiles/tile-04-art-collectibles.webp"),
        label: "REPOUSSÉ",
        href: "/pages/art-collectibles",
      },
    ],
  },
  {
    type: "campaignSlideshow",
    id: "campaign-slideshow",
    slides: [
      {
        id: "slide-kala",
        art: imagePair("maroon", "campaign/kala.webp"),
        title: "Kala",
        body:
          "Kala is craft with nothing ranked above anything else \u2014 the loom, the " +
          "brush and the chisel under one word. These are the pieces where the " +
          "weaving leans hardest on the other three, and where a weaver has " +
          "clearly been looking at something that was not cloth.",
        ctaLabel: "Discover",
        ctaHref: "/pages/kala",
      },
      {
        id: "slide-charbagh",
        art: imagePair("green", "campaign/charbagh.webp"),
        title: "Charbagh",
        body:
          "A charbagh is a garden quartered by water. The plan turns up in " +
          "Banarasi jaal constantly once you have seen it \u2014 fourfold, symmetrical, " +
          "and drawn to be read from above rather than from where anyone stands. " +
          "These are the pieces that admit it.",
        ctaLabel: "Discover",
        ctaHref: "/pages/charbagh",
      },
    ],
  },
  {
    type: "richText",
    id: "closing-thought",
    heading: "Cloth that keeps time",
    paragraphs: [
      "A saree outlives the season it was bought for, and often the person who chose it. That is the argument for weaving slowly and for buying once — a cupboard in this country is a form of archive, and what goes into it should still be worth taking out in twenty years."
    ],
  },
  {
    type: "storesSlideshow",
    id: "stores-banaras-lucknow",
    slides: [
      {
        id: "slide-varanasi",
        art: imagePair("black", "stores/varanasi.webp"),
        title: "VISIT OUR STORES",
        body:
          "The Banaras room is ten minutes from the looms we buy from. Come and " +
          "see cloth in daylight, over a shoulder, before deciding anything.",
        ctaLabel: "Banaras Store",
        ctaHref: "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-experience-centre-varanasi",
      },
      {
        id: "slide-lucknow",
        art: imagePair("black", "stores/lucknow.webp"),
        title: "VISIT OUR STORES",
        body:
          "An appointment, an afternoon, and as many pieces off the shelf as you " +
          "care to see. Nothing here is sold in a hurry.",
        ctaLabel: "Lucknow Store",
        ctaHref: "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-store-lucknow",
      },
    ],
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
