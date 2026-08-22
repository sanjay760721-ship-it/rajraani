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
        eyebrow: "Woven Motif By Motif",
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
        eyebrow: "Lighter For The Season",
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
    /*
     * Section 4 of 11 — the prose beat.
     *
     * The rhythm this page inherits alternates: a band you look at, then a band
     * you read. Without this one the page runs image → image → video with no
     * pause, which is what it did until 22 Aug 2026 — the section type existed
     * and was simply never placed.
     *
     * It earns its slot by covering something no other band does. The triptych
     * above is kadhua; this is the open weaves, which are half of what sells
     * between March and September and were unmentioned on the homepage.
     */
    type: "richText",
    id: "open-weaves",
    heading: "The lighter weaves, and why they are harder",
    paragraphs: [
      "Kora organza and sooti cotton do a different job from katan. They are woven open, so the cloth carries air rather than weight, and a motif on them reads as an outline rather than as mass \u2014 the ground shows through the pattern instead of sitting behind it.",
      "It is the less forgiving discipline. A loose weave hides nothing: an uneven beat stays in the cloth as a ripple that no finishing will take out, and the tension has to be held steady across six yards by hand and by eye. The pieces that come off the loom right are worth the ones that do not.",
    ],
    ctaLabel: "See the open weaves",
    ctaHref: "/collections/sarees?fabric=kora-organza",
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
    type: "editorialSlideshow",
    id: "editorial-womenswear-menswear",
    slides: [
      {
        id: "slide-womenswear",
        // `editorial-2` is the womenswear banner from the reference set. There
        // is no menswear frame in it at all, so the slide below borrows an
        // unrelated square. Both go when the commissioned shoot lands.
        art: imagePair("purple", "editorial-2.webp"),
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
        art: imagePair("black", "editorial-1.webp"),
        eyebrow: "Menswear",
        title: "Menswear",
        body: "Kurtas, stoles and cloth by the metre, cut from handloom.",
        ctaLabel: "Explore",
        ctaHref: "/collections/menswear",
        buttonVariant: "secondary",
        textAlign: "left",
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
    /*
     * Section 9 of 11 — the campaign pair.
     *
     * `dualCampaign` has had a renderer since the section registry was written
     * and had never been placed on any page, which is why the homepage carried
     * nine sections under a comment promising eleven.
     *
     * The pairing is the point (build.md §2.2): a campaign is one entity
     * holding a story page and a collection, so each half links to the story
     * and the collection follows from it — not two collections dressed up.
     */
    type: "dualCampaign",
    id: "campaign-pair",
    items: [
      {
        art: imagePair("indigo", "hero-1.webp"),
        title: "Nadi",
        body: "The monsoon collection. On every piece in it the ground was dyed before the motif was chosen, which is the reverse of the usual order and the reason the colours sit as deep as they do.",
        ctaLabel: "Enter Nadi",
        ctaHref: "/pages/nadi",
      },
      {
        art: imagePair("black", "hero-4.webp"),
        title: "Antaraal",
        body: "A study in empty ground \u2014 how much of it a pattern needs before it stops reading as a pattern, and what a weaver does with the space between one motif and the next.",
        ctaLabel: "Enter Antaraal",
        ctaHref: "/pages/antaraal",
      },
    ],
  },
  {
    type: "poetryBand",
    id: "poetry",
    heading: "Cloth that keeps time",
    body:
      "A saree outlives the season it was bought for, and often the person who " +
      "chose it. That is the argument for weaving slowly and for buying once \u2014 " +
      "a cupboard in this country is a form of archive, and what goes into it " +
      "should still be worth taking out in twenty years.",
  },
  {
    type: "storesSlideshow",
    id: "stores-varanasi-mumbai",
    slides: [
      {
        id: "slide-varanasi",
        // `stores.webp` is the Mumbai frame — the reference set has no Banaras
        // one, so this slide is showing the wrong city until ours is shot.
        art: imagePair("black", "stores.webp"),
        title: "VISIT OUR STORES",
        body:
          "The Banaras room is ten minutes from the looms we buy from. Come and " +
          "see cloth in daylight, over a shoulder, before deciding anything.",
        ctaLabel: "Banaras Store",
        ctaHref: "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-experience-centre-varanasi",
      },
      {
        id: "slide-mumbai",
        art: imagePair("black", "stores.webp"),
        title: "VISIT OUR STORES",
        body:
          "An appointment, an afternoon, and as many pieces off the shelf as you " +
          "care to see. Nothing here is sold in a hurry.",
        ctaLabel: "Mumbai Store",
        ctaHref: "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-flagship-store-mumbai",
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
