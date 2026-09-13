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


// Type-only, and therefore not a runtime cycle: `repository.ts` imports
// `Section` from here. `PageKind` is the schema's CHECK constraint expressed in
// TypeScript and belongs next to the repository that persists it, so the seed
// borrows it rather than restating it and drifting.
import { BRAND } from "../brand.ts";
import type { PageKind } from "./repository.ts";

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
      /**
       * Defaults to `center`, which is what the homepage bands use.
       *
       * The reference ranges some of these left — the block of four paragraphs
       * on its about page, the opening of its store page — and centres others.
       * It is per block, not per page.
       */
      align?: "left" | "center";
      /**
       * Flow the paragraphs into two columns (`column-count: 2` on theirs, on
       * the opening block of the about page). Collapses to one on a phone.
       */
      columns?: 1 | 2;
      /**
       * Indices of paragraphs to set in italic.
       *
       * Their standfirsts and closing asides are wrapped in `<em>`. An index
       * list rather than markup inside the string, because the string is
       * content someone types and the emphasis is a layout decision about
       * which line is an aside.
       */
      italicParagraphs?: number[];
      /**
       * Set the block in a campaign's own ink rather than the site's.
       *
       * Their campaign rich text is coloured per campaign, the heading is
       * weight 700 — heavier than anywhere else on the site — and the link
       * under it goes uppercase. `deep` is Kala's maroon, `brown` Katha's.
       */
      tone?: "deep" | "brown";
      /**
       * This block's heading is the page's h1, and the page suppresses its own
       * title block.
       *
       * Their campaign pages show no page title at all — the banner runs
       * straight into a rich-text block whose heading is the first thing you
       * read. We still need exactly one h1 (`lint:headings`, and search), so
       * the heading here becomes it rather than adding a title block theirs
       * does not have.
       */
      asPageTitle?: boolean;
      /**
       * Sets the heading in small caps at the larger display size.
       *
       * The opening block of their craft page is "ART & COLLECTIBLES" — 30px,
       * uppercase, tracked, centred — where a campaign page's heading is
       * sentence case at 25px. Both are `rich-text__heading`; the treatment is
       * per block.
       */
      uppercase?: boolean;
      /**
       * Text measure. `prose` (680px) by default; `content` is the 1200px
       * container their rich-text blocks actually use.
       *
       * NOTE: `content` is a long measure for body copy — around 180 characters
       * a line at 1200px, well past comfortable. It is here because matching
       * their page width was asked for explicitly. `prose` is the better
       * default and stays the default.
       */
      measure?: "prose" | "content";
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
  /*
   * ── The About Us set (12 Sep 2026) ────────────────────────────────────────
   *
   * Four types, added because the About pages are built from them and nothing
   * in the library could stand in. build.md §2.4 specifies fifteen types and
   * this is how the rest arrive: a new member of this union, a new case in the
   * registry, nothing else.
   */
  | {
      /**
       * A square image beside a column of prose, alternating down the page.
       *
       * The workhorse of every editorial "about" page in this category, and the
       * reason `richText` alone could not carry these: three centred prose
       * blocks in a row is a press release, not a page. `imageSide` alternates
       * per band so the eye has somewhere to go.
       */
      type: "imageWithText";
      id: string;
      art: ArtPair;
      eyebrow?: string;
      /**
       * Optional. A band of photograph and prose with no heading at all is a
       * real shape in this category and reads as a continuation of the block
       * above it rather than as a new subject.
       */
      heading?: string;
      paragraphs: string[];
      /** Which side the art sits on at `md` and up. Stacks image-first below. */
      imageSide: "left" | "right";
      /**
       * Makes the photograph a link.
       *
       * Their campaign bands wrap the image in an anchor to the collection, so
       * the picture is the shortest route to the thing it is a picture of.
       */
      href?: string;
      /**
       * Run the band edge to edge instead of inside the 1200px container.
       *
       * Their campaign pages put every section on `is-width-wide`, where the
       * about pages use `is-width-standard`. Same component, and the width is
       * the main thing that makes a campaign page read as a campaign page.
       */
      fullWidth?: boolean;
      /**
       * Coloured ground behind the band, with the type reversed out of it.
       *
       * Each of their campaigns carries one, and it is what stops a long story
       * page reading as a single white scroll. Palettes live in globals.css.
       */
      ground?: "deep" | "cream";
      /**
       * Frame ratio. Square by default, which is what the about pages use.
       *
       * Campaign pages run the same band at 4:5 — a figure in a saree wants
       * the height, and a square crop takes the pallu off the top or the fall
       * off the bottom.
       */
      ratio?: "1/1" | "4/5";
      /** Both fields or neither — see the note on `richText`. */
      ctaLabel?: string;
      ctaHref?: string;
    }
  | {
      /**
       * A photograph on its own, opening or closing a page. No text over it.
       *
       * Sits in the same 1200px container as every other band rather than
       * bleeding to the viewport edge — a closing image that breaks the
       * container reads as a new section rather than as the end of this one.
       */
      type: "imageBand";
      id: string;
      art: ArtPair;
      /**
       * Vertical padding, in the reference's own steps.
       *
       * Theirs varies per band and the variation is not decorative: the about
       * page's opening banner is flush (0/0) while its closing frame is 20/40,
       * which is what stops the page ending on a hard edge.
       */
      padTop?: 0 | 20 | 25 | 30;
      padBottom?: 0 | 20 | 30 | 40;
      /**
       * Ratio of the desktop frame. Defaults to the 15:8 a closing image wants.
       *
       * SET THIS FROM THE FILE, not from what the band "should" be. A 2:1 class
       * on a 3:2 photograph does not letterbox it, it crops a third of the
       * picture away and nothing warns you.
       */
      ratio?: "15/8" | "3/1" | "2/1" | "7/5" | "3/2" | "4/3" | "9/8" | "1/1";
      /**
       * Ratio of the phone frame. Defaults to 3:2.
       *
       * Needed because the art-directed phone crops are PORTRAIT — 900x1350 and
       * 1080x1350 — and the default landscape frame squashed every one of them.
       * Set it wherever `art.mobile` carries its own file.
       */
      mobileRatio?: "3/2" | "2/3" | "4/5" | "1/1";
      /**
       * Break the container and run edge to edge, with no padding above it.
       *
       * For the banner an about page opens on. The page title then sits BELOW
       * it — `pages/[slug]/page.tsx` hoists a leading bleed band above its own
       * header for exactly this.
       */
      bleed?: boolean;
      /** Sits under the frame, ranged left. Also the image's alt text. */
      caption?: string;
      /**
       * Text and a button laid over the frame, centred.
       *
       * The closing band of a store page, where the whole point is the booking
       * button. Distinct from `hero`, which bleeds to the viewport edge and
       * takes most of the screen: this stays inside the same 1200px container
       * as the bands above it, so it reads as the end of the page rather than
       * as the start of a new one.
       */
      overlay?: {
        title: string;
        body?: string;
        /** Both or neither. A campaign caption often has no button at all. */
        ctaLabel?: string;
        ctaHref?: string;
        /**
         * Which edge the caption panel sits against.
         *
         * Their campaign banners alternate: the first caption on both kala and
         * katha is `text-align-right align-middle`, the film caption on kala is
         * centred. A caption always in the middle fights whatever the
         * photograph is doing.
         */
        align?: "left" | "center" | "right";
        /**
         * `solid` is the white 77% panel their contact and store banners use.
         * `none` is the campaign treatment: no panel at all, type straight over
         * the photograph in a colour picked against that particular frame.
         */
        panel?: "solid" | "none";
        /** Caption colour when there is no panel to sit on. */
        ink?: "cream" | "deep" | "white";
        /**
         * How the caption's own text sits, which is NOT the same as where the
         * panel sits.
         *
         * Their markup says `text-align-left` on the two edge-positioned
         * captions, with no desktop override — but the panel is an
         * `inline-block` only 40-45% wide, so a left-ranged line inside it
         * reads as centred on the page, and centred is what was asked for
         * after looking at both. Kept as a field because the film caption is
         * genuinely centred in both markup and appearance.
         */
        textAlign?: "left" | "center";
      };
    }
  | {
      /**
       * Grouped question and answer.
       *
       * `<details>`, not a JavaScript accordion: it opens with JS disabled, it
       * is findable by the browser's own in-page search, and it needs no state.
       */
      type: "faqAccordion";
      id: string;
      groups: {
        heading: string;
        items: { question: string; answer: string }[];
      }[];
    }
  | {
      /**
       * An embedded map, closing a page that has an address on it.
       *
       * `query` rather than coordinates: a place name resolves to the pin the
       * map itself thinks is right, and it keeps working when the shop moves.
       * The embed is keyless (`output=embed`), so there is no API key to leak
       * and nothing to bill.
       */
      type: "mapBand";
      id: string;
      query: string;
      /** Announced to screen readers, which cannot use the map itself. */
      label: string;
      zoom?: number;
      /**
       * Padding, which is not the same on the two pages that carry a map.
       *
       * Contact: 30px top and bottom, nothing either side, so the map runs edge
       * to edge. Store: 20px all round, so it sits slightly inset. Defaults to
       * the contact treatment.
       */
      padY?: 20 | 30;
      padX?: 0 | 20;
    }
  | {
      /**
       * A row of square frames, optionally captioned and optionally linked.
       *
       * Two jobs on the reference's craft page and one type for both: the four
       * categories the metal work divides into, which are links, and a three-up
       * of the making, which is not. `columns` is data rather than inferred
       * from `items.length` — four tiles read as a grid and three as a
       * sequence, and that is an editorial choice about the set, not arithmetic.
       */
      type: "galleryGrid";
      id: string;
      heading?: string;
      standfirst?: string;
      /**
       * A short rule under the heading.
       *
       * Their craft page introduces its category grid with a centred heading
       * and a `divider-section` beneath it — the only rule of its kind on the
       * page, and what separates the essay above from the grid below.
       */
      divider?: boolean;
      /** Sets the heading in small caps, as theirs is. */
      uppercase?: boolean;
      columns: 2 | 3 | 4;
      items: { art: ArtPair; label?: string; href?: string }[];
    }
  | {
      /**
       * The contact page: who to write to on the left, a form on the right.
       *
       * Matches the reference's own two-column `contact-form--right` layout,
       * measured 12 Sep 2026. One section rather than three because that is
       * how it behaves — the column of addresses and the form are a pair, and
       * splitting them lets an editor leave a page with a form and nobody to
       * send it to.
       *
       * One address for everything would mean order questions, press and
       * stockist enquiries landing in the same inbox, with the slowest of the
       * three setting the response time for all of them. Hence `routes`.
       */
      type: "contactPanel";
      id: string;
      /**
       * Optional, and usually omitted. The page header already carries the h1
       * and the standfirst; a section heading here as well gave the contact
       * page the word "Contact us" twice, one above the other.
       */
      heading?: string;
      routes: {
        text: string;
        email?: string;
        /**
         * Sentence continuing AFTER the address.
         *
         * "…write to us on x@y. We will respond as promptly as we can." The
         * address sits mid-sentence rather than terminating it, and splitting
         * that into two paragraphs changes how the line reads.
         */
        tail?: string;
        linkLabel?: string;
        linkHref?: string;
      }[];
      socialIntro: string;
      socials: { label: string; href: string }[];
      visitHeading: string;
      stores: { name: string; detail: string; address: string }[];
      form: { intro: string; submitLabel: string };
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
        // The facet, not a hand-built `/collections/zarkashi` — that handle has
        // never existed and the tile 404d. Same destination the Shop menu uses.
        href: "/collections/sarees?zari=real_zari",
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
      /*
       * Was "Charbagh", pointing at /pages/charbagh \u2014 a page that has never
       * existed, so the band's second slide 404d. Replaced 12 Sep 2026 with the
       * campaign the menus now feature, which does have a story behind it.
       */
      {
        id: "slide-awadh",
        art: imagePair("green", "campaign/charbagh.webp"),
        title: "Awadh",
        body:
          "A hundred and twenty miles upriver, ornament is done in thread rather " +
          "than in metal, and a single spray is trusted to carry a whole width. " +
          "These were commissioned after a week of looking at it, which is a hard " +
          "thing to walk out of and then ask for more zari.",
        ctaLabel: "Discover",
        ctaHref: "/pages/awadh",
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

/**
 * Campaign stories, craft pages and the shop's own pages, keyed by slug.
 *
 * `kind` is carried here rather than inferred from the slug. It used to be
 * inferred, in `content.ts`, by a check that read `slug === "nadi" || slug ===
 * "antaraal"` — which is fine for exactly two campaign stories and wrong for
 * the third, so every page added after those two was silently filed as craft.
 * The admin lists pages by kind, so that is a real misfiling, not a cosmetic
 * one.
 */
export const PAGES: Readonly<
  Record<
    string,
    {
      kind: PageKind;
      title: string;
      standfirst: string;
      sections: readonly Section[];
    }
  >
> = {
  nadi: {
    kind: "campaign_story",
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
    kind: "campaign_story",
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
    kind: "craft",
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
    kind: "craft",
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

  /*
   * ── The eight pages the menus land on (12 Sep 2026) ───────────────────────
   *
   * Added because the navigation advertised them and none of them existed. A
   * mega menu is a promise that there is something behind every word in it, and
   * About Us in particular was four links to four 404s — the four a shopper
   * clicks when they are deciding whether to trust a shop they have not heard
   * of with a large sum.
   *
   * These are seed content. The first save from /admin writes a real row and
   * the constant stops applying, per page (see content.ts).
   */

  /*
   * ── Campaign and story pages ──────────────────────────────────────────────
   *
   * Laid out against the reference's own campaign pages, measured 12 Sep 2026.
   * Their shape, repeated on every one of them:
   *
   *   full-bleed hero carrying the title
   *   a short rich-text opening
   *   [ 4:5 portrait band | full-bleed banner ] repeated twice, sides alternating
   *   a product rail
   *   a closing line
   *   a full-bleed closing image
   *
   * The detail worth having is that their full-bleed banners ship a SEPARATE
   * MOBILE CROP — 1800×900 on desktop, 900×1350 on a phone. `ArtPair` has
   * required exactly that pairing since the schema was written (see the note at
   * the top of this file), and this is the first content in the build that
   * actually uses it for something other than the same file twice.
   *
   * Photography is theirs and staged locally under `/public/homepage/campaigns/`,
   * which is gitignored. Words are ours.
   */

  /*
   * ── Kala and Katha, to their campaign template ────────────────────────────
   *
   * Walked block by block off their pages on 13 Sep 2026. Both run the same
   * shape, and it is not the shape the about pages use:
   *
   *   plain full-bleed banner, no text over it          (1800x1600, 9:8)
   *   rich text: heading, one paragraph, a collection button
   *   band: 4:5 portrait, NO heading, photograph links to the collection
   *   captioned banner, caption ranged RIGHT             (1800x900 + phone crop)
   *   band: 4:5 portrait, no heading, linked
   *   plain full-bleed banner
   *   [kala only] captioned banner for the film, caption CENTRED (1800x600)
   *   rich text: one paragraph
   *   plain full-bleed closing banner                    (1800x1282, 7:5)
   *
   * What this replaces: a `hero` with the title burned over the top-left, bands
   * that carried headings theirs do not have, and a product rail theirs does
   * not run. The rail is gone because the "discover the collection" button and
   * the linked band photographs are how their page sells — three routes to the
   * same listing, none of them a grid dropped into the middle of an essay.
   *
   * The page title sits between the banner and the first block, as it does on
   * the about page. Theirs shows no page title at all; ours keeps one because
   * `lint:headings` wants exactly one h1 and a page without one is bad for
   * search and for screen readers both.
   */

  kala: {
    kind: "campaign_story",
    title: "Kala",
    standfirst:
      "One word for the loom, the brush and the chisel. Pieces where the weaving is plainly looking at something that was not cloth.",
    sections: [
      {
        type: "imageBand",
        id: "kala-hero",
        art: imagePair("maroon", "campaigns/kala-hero.jpg"),
        ratio: "9/8",
        bleed: true,
        padTop: 0,
        padBottom: 0,
      },
      {
        type: "richText",
        id: "kala-intro",
        asPageTitle: true,
        tone: "deep",
        measure: "content",
        heading: "What a weaver borrows",
        paragraphs: [
          "Banarasi design has never been self-sufficient and has never pretended to be. A jaal that reads as a textile pattern turns out, once you have seen the building, to be a screen; a border that looks abstract is a row of niches drawn from memory and flattened until it fits a four-inch strip. Everything on this loom arrived from somewhere that was not a loom.",
        ],
        ctaLabel: "Discover the collection",
        ctaHref: "/collections/kala",
      },
      {
        type: "imageWithText",
        id: "kala-band-01",
        art: imagePair("gold", "campaigns/kala-band-01.webp"),
        imageSide: "left",
        ratio: "4/5",
        fullWidth: true,
        ground: "deep",
        href: "/collections/kala",
        paragraphs: [
          "We asked four weavers what they had in front of them when they set the last piece they were proud of. None of them said a saree. One said a brass tray his father had beaten, one said the tilework on a gate he passes twice a day, and two said a photograph on a phone.",
        ],
      },
      {
        type: "imageBand",
        id: "kala-banner-01",
        art: imagePair(
          "black",
          "campaigns/kala-banner-01.jpg",
          "campaigns/kala-banner-01-mob.jpg",
        ),
        ratio: "2/1",
        mobileRatio: "2/3",
        bleed: true,
        padTop: 0,
        padBottom: 0,
        overlay: {
          title: "A process of discovery",
          body: "Every curve has to be resolved into a stepped path the loom can execute, and the finer the steps the more picks it takes. A motif copied faithfully from stone costs several times one drawn for cloth to begin with.",
          align: "right",
          textAlign: "center",
          panel: "none",
          ink: "cream",
        },
      },
      {
        type: "imageWithText",
        id: "kala-band-02",
        art: imagePair("indigo", "campaigns/kala-band-02.png"),
        imageSide: "right",
        ratio: "4/5",
        fullWidth: true,
        ground: "deep",
        href: "/collections/kala",
        paragraphs: [
          "The pieces gathered here are the ones where that argument was lost on purpose — where the weaver went after the difficult line rather than the one the loom would have preferred, and the extra weeks are visible in the cloth if you know to look for them.",
        ],
      },
      {
        type: "imageBand",
        id: "kala-banner-02",
        art: imagePair(
          "maroon",
          "campaigns/kala-banner-02.webp",
          "campaigns/kala-banner-02-mob.jpg",
        ),
        ratio: "2/1",
        mobileRatio: "2/3",
        bleed: true,
        padTop: 0,
        padBottom: 0,
      },
      {
        type: "imageBand",
        id: "kala-banner-03",
        art: imagePair("black", "campaigns/kala-banner-03.jpg"),
        ratio: "3/1",
        mobileRatio: "3/2",
        bleed: true,
        padTop: 0,
        padBottom: 0,
        overlay: {
          title: "The making of it",
          body: "Filmed over four days in the weaving sheds, at the hours when the light is worth having.",
          align: "center",
          textAlign: "center",
          panel: "none",
          ink: "deep",
        },
      },
      {
        type: "richText",
        id: "kala-closing",
        tone: "deep",
        measure: "content",
        heading: "Nothing here is invented",
        paragraphs: [
          "It is carried across from somewhere that was not woven, and the carrying is the craft. A weaver who copies well is doing the easiest thing in this city; a weaver who translates is doing the hardest.",
        ],
      },
      {
        type: "imageBand",
        id: "kala-closing-image",
        art: imagePair("black", "campaigns/kala-closing.jpg"),
        ratio: "7/5",
        bleed: true,
        padTop: 0,
        padBottom: 0,
      },
    ],
  },

  katha: {
    kind: "campaign_story",
    title: "Katha",
    standfirst:
      "Pieces that are telling you something specific. Figures, episodes, and the problem of putting a story on a garment that will be folded in half.",
    sections: [
      {
        type: "imageBand",
        id: "katha-hero",
        art: imagePair("indigo", "campaigns/katha-hero.jpg"),
        ratio: "9/8",
        bleed: true,
        padTop: 0,
        padBottom: 0,
      },
      {
        type: "richText",
        id: "katha-intro",
        asPageTitle: true,
        tone: "brown",
        measure: "content",
        heading: "A story, a telling, an invention",
        paragraphs: [
          "A hunting field full of animals is the oldest narrative device on this loom and the least honest one: it shows a scene without ever saying what happens next. The pieces here go after the next bit, which is harder than it sounds and has defeated better weavers than the ones who avoid it.",
        ],
        ctaLabel: "Discover the collection",
        ctaHref: "/collections/katha",
      },
      {
        type: "imageWithText",
        id: "katha-band-01",
        art: imagePair("maroon", "campaigns/katha-band-01.jpg"),
        imageSide: "left",
        ratio: "4/5",
        fullWidth: true,
        ground: "cream",
        href: "/collections/katha",
        paragraphs: [
          "A saree is read in fragments, over a shoulder and around a waist, and no viewer ever sees the whole cloth at once. Anything that depends on sequence is lost the moment the piece is worn — which rules out almost every ordinary way of telling a story, and leaves the few that survive being cut up by the person wearing them.",
        ],
      },
      {
        type: "imageBand",
        id: "katha-banner-01",
        art: imagePair(
          "black",
          "campaigns/katha-banner-01.jpg",
          "campaigns/katha-banner-01-mob.jpg",
        ),
        ratio: "2/1",
        mobileRatio: "2/3",
        bleed: true,
        padTop: 0,
        padBottom: 0,
        overlay: {
          title: "Playful illusions",
          body: "Repeat one figure at several sizes rather than laying out a sequence, and any fragment carries the subject even when it does not carry the plot.",
          align: "right",
          textAlign: "center",
          panel: "none",
          ink: "white",
        },
      },
      {
        type: "imageWithText",
        id: "katha-band-02",
        art: imagePair("gold", "campaigns/katha-band-02.jpg"),
        imageSide: "right",
        ratio: "4/5",
        fullWidth: true,
        ground: "cream",
        href: "/collections/katha",
        paragraphs: [
          "The pallu holds the single moment that is not repeated, because the pallu is the only part of a saree anyone is guaranteed to look at whole. Everything else is written to survive being glimpsed — which is a constraint most storytellers would refuse and these weavers accepted.",
        ],
      },
      {
        type: "imageBand",
        id: "katha-banner-02",
        art: imagePair(
          "indigo",
          "campaigns/katha-banner-02.jpg",
          "campaigns/katha-banner-02-mob.jpg",
        ),
        ratio: "2/1",
        mobileRatio: "2/3",
        bleed: true,
        padTop: 0,
        padBottom: 0,
      },
      {
        type: "richText",
        id: "katha-closing",
        tone: "brown",
        measure: "content",
        paragraphs: [
          "Nobody reads a saree left to right. They read the part that happens to be facing them, and a weaver who forgets that is writing for an audience of one — themselves, at the loom.",
        ],
      },
      {
        type: "imageBand",
        id: "katha-closing-image",
        art: imagePair("maroon", "campaigns/katha-closing.jpg"),
        ratio: "7/5",
        bleed: true,
        padTop: 0,
        padBottom: 0,
      },
    ],
  },

  awadh: {
    kind: "campaign_story",
    title: "Awadh",
    standfirst:
      "A hundred and twenty miles upriver, a different idea of ornament — and what happens when it arrives on a Banaras loom.",
    sections: [
      {
        type: "hero",
        id: "awadh-hero",
        art: imagePair(
          "green",
          "campaigns/awadh-hero.jpg",
          "campaigns/awadh-hero-mob.jpg",
        ),
        eyebrow: "Featured",
        title: "Awadh",
        body: "Restraint, borrowed from a neighbour who is better at it.",
        ctaLabel: "See the pieces",
        ctaHref: "/collections/awadh",
      },
      {
        type: "richText",
        id: "awadh-intro",
        measure: "content",
        paragraphs: [
          "Banaras ornaments in metal. Its neighbour ornaments in thread. The two have been arguing about it politely for two centuries.",
        ],
      },
      {
        type: "imageWithText",
        id: "awadh-band-01",
        art: imagePair("gold", "campaigns/awadh-band-01.jpg"),
        fullWidth: true,
        imageSide: "left",
        ratio: "4/5",
        heading: "Where it came from",
        paragraphs: [
          "One tradition fills a ground. The other leaves it alone and trusts a single spray to carry a whole width.",
          "These pieces were commissioned after a week spent looking at white-on-white work in Lucknow, which is a hard thing to walk out of and then ask for more zari.",
        ],
      },
      {
        type: "imageBand",
        id: "awadh-banner-01",
        art: imagePair("green", "campaigns/awadh-band-02.webp"),
        ratio: "1/1",
        bleed: true,
      },
      {
        type: "imageWithText",
        id: "awadh-band-02",
        art: imagePair("indigo", "campaigns/awadh-band-03.webp"),
        fullWidth: true,
        imageSide: "right",
        ratio: "4/5",
        heading: "What changed on the loom",
        paragraphs: [
          "Less zari and more ground, which sounds like a saving and is not. A sparse field shows every fault, and there is nowhere for an uneven pick to hide. Two of these came off the loom twice.",
          "The palette went with it — undyed, ivory, and one grey that took four attempts because the first three read as dirty rather than as quiet.",
        ],
      },
      {
        type: "productRail",
        id: "awadh-rail",
        title: "The pieces",
        // Its own collection now exists, so the rail no longer borrows
        // katan-silk as the nearest available stand-in.
        collectionHandle: "awadh",
        ctaLabel: "See all",
      },
      {
        type: "richText",
        id: "awadh-closing",
        measure: "content",
        paragraphs: [
          "Half the skill is deciding what not to weave, and the other half is holding your nerve once you have.",
        ],
      },
      {
        type: "imageBand",
        id: "awadh-closing-image",
        art: imagePair(
          "black",
          "campaigns/awadh-closing.jpg",
          "campaigns/awadh-closing-mob.jpg",
        ),
        ratio: "2/1",
        mobileRatio: "2/3",
        bleed: true,
      },
    ],
  },

  /*
   * ── Art & Collectibles ────────────────────────────────────────────────────
   *
   * Built against the reference's own metal page, measured 13 Sep 2026. Theirs
   * runs to nineteen sections; this is the same sequence with the repetitions
   * collapsed, which keeps the rhythm without inventing content we do not have:
   *
   *   full-bleed hero (desktop and phone crops)
   *   opening line
   *   full-bleed banner
   *   a four-up square grid of what the metal work divides into
   *   full-bleed banner
   *   a square band of prose beside a photograph
   *   a three-up gallery of the making
   *   closing line
   *   full-bleed closing image
   *
   * The four category names — furniture, objects, wall pieces, lighting — are
   * what the things are. They are not anybody's branding and there is no other
   * word for a lamp.
   *
   * Photography is theirs, staged in the gitignored `/public/homepage/craft/`.
   * Local mockup only; see HANDOFF §5.8.1.
   */
  "art-collectibles": {
    kind: "craft",
    title: "Art & Collectibles",
    standfirst:
      "Repoussé metal from the workshops a street away from the looms. Raised from a single sheet, never cast.",
    sections: [
      {
        type: "imageBand",
        id: "craft-hero",
        art: imagePair(
          "gold",
          "craft/craft-hero.jpg",
          "craft/craft-hero-mob.jpg",
        ),
        ratio: "2/1",
        mobileRatio: "2/3",
        bleed: true,
      },
      {
        type: "richText",
        id: "craft-opening",
        measure: "content",
        /*
         * Their opening block is a 30px uppercase centred heading, a centred
         * paragraph, and an uppercase ruled link — the same three-part opening
         * the campaign pages use. Ours had the paragraph alone.
         *
         * The link goes to the contact page rather than a collection: theirs
         * points at /collections/art-collectibles-1 and this catalogue holds no
         * metal at all, so a "discover the collection" button would open an
         * empty grid. The label says what the link actually does.
         */
        heading: "Art & Collectibles",
        uppercase: true,
        // Carries the page's h1; theirs has no separate title block either, and
        // without this the page showed the words twice, once in each.
        asPageTitle: true,
        paragraphs: [
          "The metal beaters of Banaras were here before the looms were, and the two trades have been borrowing from each other ever since. Raised from a single sheet, never cast, and made in ones.",
        ],
        ctaLabel: "Ask what is in the room",
        ctaHref: "/pages/contact",
      },
      {
        type: "imageBand",
        id: "craft-banner-01",
        art: imagePair("black", "craft/craft-banner-01.jpg"),
        ratio: "2/1",
        bleed: true,
      },
      {
        type: "richText",
        id: "craft-what",
        measure: "content",
        heading: "What repoussé is",
        paragraphs: [
          "A flat sheet of brass or silver, worked from behind against a bed of pitch until the design stands out in relief, then turned over and sharpened from the front. Nothing is poured into a mould and nothing is soldered on — a raised figure and the ground around it are the same piece of metal, stretched.",
          "It is why these objects are thin and heavy at once, and why a dent in one is a repair rather than a write-off.",
        ],
      },
      {
        type: "galleryGrid",
        id: "craft-categories",
        /*
         * Their page introduces this grid with a centred small-caps heading and
         * a short rule under it — a `heading-section` plus a `divider-section`,
         * the only rule of its kind on the page. Ours had the heading and no
         * rule, so the essay above ran straight into the grid.
         */
        heading: "Explore art & collectibles",
        uppercase: true,
        divider: true,
        columns: 4,
        items: [
          { art: imagePair("maroon", "craft/craft-cat-01.jpg"), label: "Furniture" },
          { art: imagePair("gold", "craft/craft-cat-02.jpg"), label: "Objects" },
          { art: imagePair("indigo", "craft/craft-cat-03.jpg"), label: "Wall pieces" },
          { art: imagePair("black", "craft/craft-cat-04.jpg"), label: "Lighting" },
        ],
      },
      {
        type: "imageBand",
        id: "craft-banner-02",
        art: imagePair(
          "gold",
          "craft/craft-banner-02.jpg",
          "craft/craft-banner-02-mob.jpg",
        ),
        ratio: "2/1",
        mobileRatio: "2/3",
        bleed: true,
        // No caption. Type over this frame sat on the candle flame and the
        // brightest part of the photograph, which is the one place on the page
        // it could not be read.
      },
      {
        type: "imageWithText",
        id: "craft-band-01",
        art: imagePair("black", "craft/craft-band-01.jpg"),
        imageSide: "left",
        heading: "Telling it from cast work",
        paragraphs: [
          "Look at the back. Raised work is hollow behind every high point, and the reverse reads as a negative of the front. A cast piece is solid behind the relief and usually carries a seam somewhere along an edge.",
          "Then take the weight. For the same size, cast is two to four times heavier, and that difference is most of the price difference too.",
        ],
      },
      {
        type: "galleryGrid",
        id: "craft-making",
        heading: "The making",
        standfirst:
          "Pitch, a blunt punch, and several thousand strikes. A tray of any size is weeks of work and the maker will tell you how many without being asked.",
        columns: 3,
        items: [
          { art: imagePair("maroon", "craft/craft-making-01.jpg") },
          { art: imagePair("gold", "craft/craft-making-02.jpg") },
          { art: imagePair("indigo", "craft/craft-making-03.jpg") },
        ],
      },
      {
        type: "richText",
        id: "craft-availability",
        measure: "content",
        heading: "Buying one",
        paragraphs: [
          "These are made in ones, not in runs, and we hold very few at a time. Write to us and we will tell you what is in the room this month rather than list pieces that have already gone.",
        ],
        ctaLabel: "Ask what is available",
        ctaHref: "/pages/contact",
      },
      {
        type: "imageBand",
        id: "craft-closing-image",
        art: imagePair(
          "black",
          "craft/craft-closing.jpg",
          "craft/craft-closing-mob.jpg",
        ),
        ratio: "2/1",
        mobileRatio: "2/3",
        bleed: true,
      },
    ],
  },

  /*
   * ── Our story ─────────────────────────────────────────────────────────────
   *
   * Laid out band for band against the reference's own about page, measured
   * 12 Sep 2026: a one-paragraph standfirst block, then three image-and-prose
   * bands at image-left / image-right / image-left, then a 15:8 photograph to
   * close, all inside the 1200px container their `.container.has-limit` uses.
   * Paragraph counts per band are 3 / 2 / 3 and the lengths are within a few
   * characters of theirs, because the measure is what makes the page look like
   * the page. No eyebrows and no pull quotes — neither is in the original.
   *
   * The sentences are ours. Matching their layout at their text lengths gives
   * the same page; copying their prose would only add a legal problem.
   */
  "our-story": {
    kind: "craft",
    title: "Our story",
    standfirst:
      "One room in Banaras, about forty looms within an hour of it, and nothing in between.",
    sections: [
      /*
       * Their about page opens on a full-bleed 15:8 banner with the title block
       * underneath it, not above. `pages/[slug]/page.tsx` hoists this above its
       * own header.
       */
      {
        type: "imageBand",
        id: "story-banner",
        art: imagePair("maroon", "about/story-banner.jpg"),
        ratio: "15/8",
        padTop: 0,
        padBottom: 0,
        /*
         * NOT bleed. Their about-page banners sit on `section is-width-standard`,
         * and the base `.section` rule is `max-width: 1200px; width: 95%` — so
         * both the opening and closing frames are contained. Only the CONTACT
         * and STORE banners carry `is-width-wide`, which is the one that runs
         * the full viewport. Same component, three pages, two widths.
         */
      },
      /*
       * Their opening is a centred heading with ONE italic line under it, then
       * a block of four paragraphs flowed into two columns. The heading and the
       * italic line are the page header above; this is the four.
       *
       * There used to be an extra one-paragraph block between the two, which
       * said the same thing as the standfirst and gave the page three opening
       * statements where theirs has two.
       */
      {
        type: "richText",
        id: "story-what-we-are",
        align: "left",
        measure: "content",
        columns: 2,
        // The closing aside is `<em>` on theirs, as their standfirst is.
        italicParagraphs: [3],
        paragraphs: [
          "We are a small shop in Banaras selling handwoven cloth from the looms around it. There is no wholesale arm, no second brand, and nothing bought in to fill a gap on a rail.",
          "Every piece is woven by hand on a pit loom by a weaver we buy from directly, at a price agreed before the warp goes on. We know who made each one and roughly how many weeks it took, and both of those are written on the piece rather than kept for anyone who thinks to ask.",
          "What that rules out is most of how this trade is normally done. We cannot restock quickly, we cannot discount deeply without taking it out of somebody's hands, and we cannot grow faster than the looms do. Those are real costs and we would rather carry them than sell cloth we cannot account for — a claim nobody is able to check is worth nothing, and it is the weavers who lose most by it.",
          `Everything ${BRAND.name} makes is sold here and in one room in Banaras. Nowhere else.`,
        ],
      },
      {
        type: "imageWithText",
        id: "story-band-name",
        art: imagePair("maroon", "about/story-band-01.jpg"),
        imageSide: "left",
        heading: "Where the name comes from",
        paragraphs: [
          "Raj is rule and raani is the woman who holds it. Together they are less a claim about royalty than about who a cloth like this was made to be worn by.",
          "The word was chosen over a weaving term on purpose. Naming a shop after a technique fixes it to one technique, and the looms we buy from move between nine of them in a year. A saree is not defined by the method that produced it any more than a book is defined by its typeface, and the name should not pretend otherwise.",
          "It is also a word almost anyone in north India can say and spell on the first attempt, which matters more than it sounds. A brand nobody can repeat out loud is a brand that travels only by link, and cloth like this has always travelled by recommendation.",
        ],
      },
      {
        type: "imageWithText",
        id: "story-band-philosophy",
        art: imagePair("gold", "about/story-band-02.jpg"),
        imageSide: "right",
        heading: "What we commission, and what we turn down",
        paragraphs: [
          "We buy direct, from around forty looms within an hour of the shop, at a price agreed before the warp is set rather than argued after the piece comes off it.",
          "The turning down is the harder half. We do not take powerloom at any price, and we do not stock it beside handloom under a softer word. We also refuse work that is technically fine and has nothing to say — a competent copy of a piece somebody else designed forty years ago is the easiest thing in this city to commission and the least worth owning. A commissioned saree is paid for in stages while it is still being woven, because a weaver carrying six months of work cannot also carry six months of our cash flow.",
        ],
      },
      {
        type: "imageWithText",
        id: "story-band-journey",
        art: imagePair("indigo", "about/story-band-03.jpg"),
        imageSide: "left",
        heading: "How it started",
        paragraphs: [
          "With a bad purchase. A saree bought as handloom, worn twice, and then identified by the weaver asked to repair it as a powerloom piece sold at four times what it was worth. He was not surprised, which was the part that stayed with us. What that exposed is not a weaving problem — the weaving in this city is as good as it has ever been. It is a selling problem.",
          "By the time a piece reaches a shopfront it has passed through enough hands that nobody left in the chain can tell you who made it, on what, or how long it took. A claim nobody can check is worth nothing, and the people who lose most by that are the weavers, who are paid as though the work were ordinary.",
          "So the shop was built backwards from the loom rather than forwards from the rail, which is why there is one room and no wholesale, and why we can answer the question about weeks.",
        ],
      },
      {
        type: "imageBand",
        id: "story-closing-image",
        art: imagePair("black", "about/story-closing.jpg"),
        ratio: "15/8",
        padTop: 20,
        padBottom: 40,
      },
    ],
  },

  /*
   * ── Our Banaras store ─────────────────────────────────────────────────────
   *
   * Their store page opens on a 2:1 banner, runs a short four-paragraph block,
   * then two image-and-prose bands that carry NO heading — the prose reads on
   * from the block above rather than starting a new subject — then a one-line
   * block, then a closing frame with a heading and a booking button over it.
   * Same order here.
   */
  "banaras-store": {
    kind: "craft",
    title: "Our Banaras store",
    standfirst:
      "One room, ten minutes from the looms. By appointment, and unhurried on purpose.",
    sections: [
      {
        type: "imageBand",
        id: "store-banner",
        art: imagePair("black", "about/store-banner.jpg"),
        ratio: "2/1",
        bleed: true,
        // Theirs: padding-top 0, padding-bottom 30.
        padTop: 0,
        padBottom: 30,
      },
      {
        type: "richText",
        id: "store-opening",
        align: "left",
        measure: "content",
        // `has-columns--2 text-align-left` on theirs, same as the about page's
        // opening block. No italics on this page, unlike that one.
        columns: 2,
        paragraphs: [
          "The room holds a fraction of what is on this website, and a few things that are not on it at all.",
          "Someone who has handled every piece in it will be with you, and nobody else's job is to close the sale.",
          "We keep it to one appointment at a time, so it runs on bookings rather than on walking in off the street.",
          "An hour is usually enough. Two is common.",
        ],
      },
      {
        type: "imageWithText",
        id: "store-band-daylight",
        art: imagePair("black", "about/store-band-01.jpg"),
        imageSide: "left",
        paragraphs: [
          "Daylight matters more than anything we could write here. A tissue that looks flat on a screen is a different object held at a window, and so is a grey.",
          "Ask to see a piece twice. Ask to see it against a wall, or against something you already own.",
        ],
      },
      {
        type: "imageWithText",
        id: "store-band-loom",
        art: imagePair("green", "about/store-band-02.jpg"),
        imageSide: "right",
        paragraphs: [
          "The looms are ten minutes away.",
          "Say so when you book and we will take you to one — a separate half hour, a short drive, and the more interesting half of the visit.",
          "Most people who go expecting a demonstration end up staying for the part nobody stages: the cutting down of a finished piece, which happens once every several weeks and cannot be arranged.",
        ],
      },
      {
        type: "richText",
        id: "store-closing-line",
        measure: "content",
        heading: "We took Banaras out to the world. This is the invitation back.",
        paragraphs: [
          "Tell us a date and roughly what you are after, and the pieces will be out before you arrive.",
        ],
      },
      /*
       * `imageBand` with an overlay, not `hero`. Theirs sits in the 1200px
       * container like everything above it (measured: the overlay banner's
       * `.container` computes to 1200px wide); `hero` bleeds to the viewport
       * edge and takes 82vh, which turns the end of the page into what looks
       * like the top of a different one.
       */
      {
        type: "imageBand",
        id: "store-closing",
        art: imagePair("maroon", "about/store-closing.jpg"),
        ratio: "4/3",
        // Theirs: flush both sides, with the map's own padding below it.
        padTop: 0,
        padBottom: 0,
        // `section is-width-wide` on theirs — the store page's banners run the
        // full viewport, unlike the about page's.
        bleed: true,
        overlay: {
          title: "We would like to see you",
          body: "Write with a date and we will confirm the same day.",
          ctaLabel: "Book an appointment",
          ctaHref: "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-experience-centre-varanasi",
        },
      },
      {
        type: "mapBand",
        id: "store-map",
        // Theirs insets the store map 20px on all four sides, where the contact
        // one runs edge to edge with 30px above and below.
        padY: 20,
        padX: 20,
        query: "Rathyatra, Varanasi, Uttar Pradesh",
        label: "Map showing the Banaras store",
      },
    ],
  },

  faqs: {
    kind: "craft",
    title: "FAQs",
    standfirst: `If there is anything here we have not covered, write to us at ${BRAND.supportEmail} and we will answer it properly — and then add it to this page.`,
    sections: [
      {
        type: "faqAccordion",
        id: "faq-groups",
        groups: [
          {
            heading: "Product",
            items: [
              {
                question: "How can I find out more about a piece?",
                answer:
                  "Every product page carries the technique, the fabric, the zari, the colour and roughly how many weeks the piece sat on the loom. If you want more than that, write to us — we can usually tell you which loom it came off and what else that weaver is working on.",
              },
              {
                question: "Will it look like the photograph?",
                answer:
                  "Close, not identical. Silk takes light differently at every angle, which is most of why it is worth owning and most of why it is hard to photograph. Screens vary too. If an exact shade matters, ask us to describe it against something you already own, or ask for a photograph in daylight.",
              },
              {
                question: "Is the zari real?",
                answer:
                  "It is stated per piece, because it is a fact about that piece rather than about the shop. Real zari is silver thread with a gold finish wound on silk: heavier than the substitute, warm rather than cool in the hand, and it tarnishes slowly instead of flaking within a year.",
              },
              {
                question: "How do I look after a saree?",
                answer:
                  "Dry clean only, and as rarely as you can stand. Store it folded in cotton rather than plastic, refold along different lines once a year so the creases do not become cuts, and keep it out of direct sun, which takes the colour out of silk faster than wearing it does.",
              },
              {
                question: "How do I look after a metal piece?",
                answer:
                  "Dust it dry. Brass will darken over years, which is the point of brass; if you would rather it did not, a wipe with a soft cloth every few months slows it. Never use an abrasive or a household metal polish on repoussé — the relief is the thinnest part of the sheet and polish takes it away first.",
              },
              {
                question: "Do sarees come with a blouse piece?",
                answer:
                  "Where one was woven to go with the saree, yes, and the product page says so. Where it was not we will not cut one off the end of the piece to fake it — that shortens the saree and is a common and quiet way of doing it.",
              },
              {
                question: "I have a design. Can you have it woven?",
                answer:
                  "Sometimes. Send it and we will tell you honestly whether it suits a Banarasi loom, what it would cost and how long it would take. A drawn curve has to be resolved into steps the loom can execute, and some designs come out of that process worse than they went in.",
              },
              {
                question: "Do you sell cloth by the metre?",
                answer:
                  "Yes — handwoven yardage, unstitched and uncut, for anyone who would rather have it made up their own way.",
              },
              {
                question: "Can I change the colour of a piece?",
                answer:
                  "Not on a finished piece. On a commission, yes: colour is chosen before the warp is set, and that is the moment to have the conversation rather than after.",
              },
              {
                question: "What yarn do you use?",
                answer:
                  "Natural fibres only — mulberry silk, cotton, wool and blends of those, with real or tested zari. No polyester, and no viscose sold under a prettier name.",
              },
            ],
          },
          {
            heading: "Ordering",
            items: [
              {
                question: "A piece I was looking at has gone. Can I still order it?",
                answer:
                  "Most of what we sell is made once, so usually it has genuinely gone. Ask anyway — a design can sometimes be rewoven, which takes months and produces a related piece rather than the same one.",
              },
              {
                question: "What is a pre-order?",
                answer:
                  "A piece already on the loom that you are reserving before it comes off. You pay when you order and it ships when it is finished, on the date shown on the product page.",
              },
              {
                question: "Is there a discount for buying several pieces?",
                answer:
                  "No. The price is what the weaver was paid plus what it costs us to sell it, and there is no margin built in to be given back. We would rather quote one honest number than an inflated one with a discount on top.",
              },
              {
                question: "Can several orders be sent together?",
                answer:
                  "Yes, if they have not been dispatched yet — write to us and we will hold and combine them. Where a made-to-order piece is involved the whole parcel waits for it, so sometimes two parcels is the better answer.",
              },
              {
                question: "How do I track my order?",
                answer:
                  "A tracking number is emailed on dispatch. If it has not moved in two days, tell us and we will chase the courier rather than asking you to.",
              },
            ],
          },
          {
            heading: "Payment",
            items: [
              {
                question: "Checkout sends me to another site. Is that normal?",
                answer:
                  "Yes. Payment is handled by our payment provider rather than by us, which means your card details are never on our servers. You are returned here once it completes.",
              },
              {
                question: "My payment failed. What now?",
                answer:
                  "Nothing has been taken and the piece is not gone — try again, or write to us and we will send a payment link directly. Failures are usually the bank's two-factor step timing out.",
              },
              {
                question: "Are there extra duties or taxes?",
                answer:
                  "Within India the price shown includes tax and shipping, with nothing added on delivery. Overseas, duties are included in the price, which is why the international figure is not a straight conversion.",
              },
              {
                question: "Can I reserve a piece and pay later?",
                answer:
                  "For a few days, if you write to us. We keep holds short because unique-piece stock means a hold is a real cost to whoever asks next.",
              },
              {
                question: "Do you offer cash on delivery?",
                answer:
                  "No. At these values it is not something we can carry, and a refused parcel travels a long way back.",
              },
            ],
          },
          {
            heading: "Delivery",
            items: [
              {
                question: "Do you ship outside India?",
                answer:
                  "Yes, with duties included in the price. If your country is not offered at checkout, write to us before assuming we cannot reach it.",
              },
              {
                question: "Who do you ship with?",
                answer:
                  "A tracked courier for everything, and an insured service for anything above the threshold shown at checkout. Metal pieces go crated.",
              },
              {
                question: "How long does international delivery take?",
                answer:
                  "Usually five to ten working days from dispatch, plus customs. Shipping is free above the value shown in the announcement bar and quoted at checkout below it.",
              },
              {
                question: "How long does delivery take within India?",
                answer:
                  "Three to five working days from dispatch, anywhere in the country, and shipping is free with no minimum.",
              },
              {
                question: "How do I contact the courier?",
                answer:
                  "You can, using the tracking number — but tell us instead. We have the account and they answer us faster than they answer a consignee.",
              },
              {
                question: "I missed the delivery. What happens?",
                answer:
                  "The courier reattempts, usually twice, then holds the parcel locally for a few days. Write to us and we will rebook it for a day you are in rather than letting it go back.",
              },
              {
                question: "How are metal pieces shipped?",
                answer:
                  "Crated and insured, and more slowly than cloth. Large pieces are quoted individually because the crate often costs more than the courier.",
              },
            ],
          },
          {
            heading: "Returns, Refund & Cancellation",
            items: [
              {
                question: "Can I return an order?",
                answer:
                  "A ready-to-ship piece, yes — unworn, with tags, within the window stated at checkout. Tell us why if you can; it is the only way we find out what the photographs are not showing.",
              },
              {
                question: "Can I get a refund?",
                answer:
                  "On an accepted return, yes, to the original payment method once the piece is back and checked. A piece woven or tailored to your measurements is not returnable — it was made once, for you, and there is no second buyer for a blouse cut to someone else's back. We would rather say that here than in small print later.",
              },
              {
                question: "Can I cancel an order?",
                answer:
                  "A ready-to-ship order, until it is dispatched. A commission, until the warp is set — after that the weaver has committed the loom and we have committed the money.",
              },
            ],
          },
          {
            heading: "General",
            items: [
              {
                question: "Are your pieces sold anywhere else?",
                answer:
                  "No. This website and one room in Banaras. Anything sold elsewhere under this name is not ours.",
              },
              {
                question: "How do I sign in to my account?",
                answer:
                  "Through the account link in the header. An account is not required to order — it only keeps your addresses and your order history in one place.",
              },
              {
                question: "How large is a saree?",
                answer:
                  "Between 5.5 and 6.3 metres depending on the weave, with the exact length on each product page, and a standard width of around 46 inches. Any piece sold with a blouse length includes that measurement separately.",
              },
              {
                question: "Do you have a shop I can visit?",
                answer:
                  "One, in Banaras, ten minutes from the looms we buy from. It runs on appointments, one visit at a time.",
              },
            ],
          },
        ],
      },
    ],
  },

  /*
   * ── Contact us ────────────────────────────────────────────────────────────
   *
   * Their layout, measured 12 Sep 2026: one `is-width-standard` section split
   * into two halves, addresses and store details on the left, the message form
   * on the right (`contact-form--right`), then a closing image band. The
   * routing by reason — orders, press, stockists, careers — is theirs too, and
   * it is the right shape: one address for everything means the slowest queue
   * sets the response time for all of them.
   *
   * The form posts to `submitEnquiryAction` and writes to the `enquiry` table.
   * There is no mail transport and no admin inbox in this build, so messages
   * are STORED AND NOT DELIVERED until that screen exists — HANDOFF §5.8.1.
   */
  contact: {
    kind: "craft",
    title: "Contact us",
    standfirst:
      "A small team in Banaras. You will get a person, and usually the same one throughout.",
    sections: [
      /*
       * COPY MATCHED TO THE REFERENCE, 13 Sep 2026, at the owner's explicit
       * instruction — and narrowly.
       *
       * What is matched is this page's transactional boilerplate: which address
       * takes which kind of enquiry, "Visit Us", the form's invitation and its
       * button. Those sentences are close to the minimum way of saying the
       * thing and read the same on a thousand shops.
       *
       * What is NOT matched, here or anywhere: the campaign stories, the About
       * narrative and the brand statement. Those are the house's voice and stay
       * ours. HANDOFF §2.48 records a 22 Aug sweep that pulled a store-booking
       * line out of this build as borrowed copy — this reverses that decision
       * for this page only, deliberately, so nobody "fixes" it back as a
       * regression without knowing it was a call somebody made.
       *
       * Their name, addresses, phone numbers and second store are NOT here.
       */
      {
        type: "contactPanel",
        id: "contact-panel",
        heading: "Contact us",
        routes: [
          {
            text: "For all order related queries or assistance, please write to us on",
            email: BRAND.supportEmail,
            tail: "We will try to respond as promptly as we can.",
          },
          {
            text: "For all press and media related queries, creative or artistic collaborations, you can get in touch with us on",
            email: BRAND.supportEmail,
          },
          {
            text: "For any business associations or stocking enquiries, please write to us on",
            email: BRAND.supportEmail,
          },
          {
            // Theirs links to a careers page. This build has none, so the
            // enquiry goes to an address rather than to a 404.
            text: "If you would like to work with us, please write to us on",
            email: BRAND.supportEmail,
          },
        ],
        socialIntro: "You can also find us and reach out to us on:",
        socials: [
          { label: "Facebook", href: "https://www.facebook.com/" },
          { label: "Instagram", href: "https://www.instagram.com/" },
          { label: "Pinterest", href: "https://www.pinterest.com/" },
        ],
        visitHeading: "Visit Us",
        stores: [
          {
            name: `${BRAND.name} Banaras Flagship`,
            detail: `If you would like to visit our store in Banaras, please call us on: ${BRAND.supportPhone} (inc. whatsapp) or email us on ${BRAND.supportEmail} for an appointment. Hours: 11 am - 8 pm (India Time)`,
            address: "Rathyatra - Mahmoorganj Road, Varanasi, Uttar Pradesh",
          },
        ],
        form: {
          intro:
            "Please leave your message here and we will get back to you promptly.",
          submitLabel: "Submit",
        },
      },
      /*
       * Their contact page closes on a store band, and so does this one — an
       * OVERLAY banner, not a side-by-side band — measured on their contact
       * page, which closes on a full-width frame with the text over it and a
       * booking button. It ships a portrait crop for phones; this does too.
       */
      {
        type: "imageBand",
        id: "contact-store",
        art: imagePair(
          "black",
          "about/contact-band.jpg",
          "about/contact-portrait.jpg",
        ),
        ratio: "3/2",
        mobileRatio: "4/5",
        /*
         * Full width, not boxed to 1200.
         *
         * Their contact banner's container carries no `has-limit`, so it runs
         * the whole viewport — unlike the closing frame on the about page,
         * which is limited. Same component, different width on the two pages,
         * and boxing this one made the photograph read a third too small.
         */
        bleed: true,
        /*
         * Books an appointment on the scheduler, which is what theirs does and
         * what the homepage's stores band already does. A banner headed "Our
         * Banaras store" whose button only went to another page describing the
         * store was a loop.
         */
        overlay: {
          title: "Our Banaras store",
          body: "Most of what is hard to settle by email settles in ten minutes with the cloth in your hands.",
          ctaLabel: "Book an appointment",
          ctaHref: "https://calendly.com/rajraani-banaras/visit-to-the-rajraani-experience-centre-varanasi",
        },
      },
      {
        type: "mapBand",
        id: "contact-map",
        query: "Rathyatra, Varanasi, Uttar Pradesh",
        label: "Map showing the Banaras store",
      },
    ],
  },
};
