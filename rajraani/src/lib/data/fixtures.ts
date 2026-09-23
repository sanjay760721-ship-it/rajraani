/**
 * Seed catalogue.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ALL CONTENT HERE IS ORIGINAL TO THIS PROJECT.
 *
 * build.md §6 Originality applies to the repository, not only to the shipped
 * site: no competitor imagery, product copy, product names or campaign names
 * may appear in fixtures, seed data or test snapshots. The craft vocabulary
 * (kadhua, tanchoi, katan silk) is the domain's own technical language and is
 * not anyone's property — the poetic names, narratives and campaigns below are
 * written for this project and are placeholders for the editorial writer's work
 * (build.md §7.7), not finished copy.
 * ─────────────────────────────────────────────────────────────────────────────
 *
 * Twelve pieces, and five of them are sold out. That ratio is deliberate:
 * pre-build-gaps.md §2 measured 49% of the reference catalogue unavailable, the
 * arithmetic consequence of inventory-of-1 pieces that stay listed after
 * selling. Building against an all-available fixture set would hide the
 * template that half of all product views actually land on.
 */

import type {
  Campaign,
  Collection,
  Product,
  ProductImage,
  ShotType,
} from "../domain/types.ts";
import { money } from "../money.ts";

/** Master dimensions, fixed by photography-brief.md §2.1. */
const PORTRAIT = { width: 3000, height: 4500 } as const;
const SQUARE = { width: 3000, height: 3000 } as const;

const SHOT_DESCRIPTIONS: Record<ShotType, string> = {
  on_model_full: "Full-length view of the draped piece",
  on_model_drape: "Three-quarter view showing the fall of the drape",
  on_model_pallu: "The pallu carried over the shoulder",
  on_model_detail: "Close view of the border against the body",
  on_model_movement: "The piece in movement, mid-turn",
  detail_weave: "Macro detail of the weave",
  detail_border: "Macro detail of the border and selvedge",
  flat_lay: "The piece laid flat, folded to show body, border and pallu",
};

/**
 * The shot template, locked from SKU #1 (build.md §9.11).
 *
 * Five 2:3 on-model frames then one or two 1:1 detail frames — the sequence
 * measured in sweep-findings.md §1.3 and specified in photography-brief.md §3.
 * Both ratios are reserved in CSS, so a mixed sequence costs no layout shift.
 */
function shotTemplate(input: {
  handle: string;
  colour: string;
  weave: string;
  motif: string;
  garment: string;
  includeBorderFrame?: boolean;
}): ProductImage[] {
  const shots: ShotType[] = [
    "on_model_full",
    "on_model_drape",
    "on_model_pallu",
    "on_model_detail",
    "on_model_movement",
    "detail_weave",
  ];
  if (input.includeBorderFrame) shots.push("detail_border");

  return shots.map((shot, index) => {
    const square = shot.startsWith("detail_");
    return {
      id: `${input.handle}-${index + 1}`,
      ratio: square ? "square" : "portrait",
      shot,
      /**
       * Alt describes the FRAME — weave, motif, colour, shot type — never the
       * product title repeated (build.md §9.9). Composed from attributes here
       * because there is no photography yet; once frames exist, these are
       * written per frame by the same person writing the narrative, since only
       * they can say what is actually in the picture.
       */
      alt: `${SHOT_DESCRIPTIONS[shot]}: ${input.colour} ${input.garment} in ${input.weave} weave with ${input.motif} motifs`,
      ...(square ? SQUARE : PORTRAIT),
    };
  });
}

export const CAMPAIGNS: readonly Campaign[] = [
  {
    slug: "nadi",
    name: "Nadi",
    season: "Monsoon 2026",
    storyPageSlug: "nadi",
    collectionHandle: "nadi",
    standfirst:
      "A river does not repeat itself. Nine pieces that follow water through the season it belongs to — the colour of it before rain, during, and in the days after.",
  },
  {
    slug: "antaraal",
    name: "Antaraal",
    season: "Winter 2026",
    storyPageSlug: "antaraal",
    collectionHandle: "antaraal",
    standfirst:
      "The interval — the pause a loom takes between one motif and the next. A study in ground, in the space that makes the pattern legible.",
  },
];

/**
 * The shot template for stitched garments.
 *
 * A suit is not draped, so the saree sequence does not transfer: there is no
 * pallu to carry over a shoulder and no selvedge to shoot. What replaces them
 * is a flat lay — the only way to show a multi-piece set as a set, since the
 * churidar and dupatta never appear together on the model.
 *
 * Deliberately reuses the existing `ShotType` union rather than widening it.
 * `on_model_drape` reads as the dupatta here, and inventing `on_model_dupatta`
 * would put a term in the type that photography-brief.md §3 has never briefed.
 */
function stitchedShotTemplate(input: {
  handle: string;
  colour: string;
  cloth: string;
  motif: string;
  garment: string;
}): ProductImage[] {
  const shots: ShotType[] = [
    "on_model_full",
    "on_model_drape",
    "on_model_detail",
    "on_model_movement",
    "flat_lay",
    "detail_weave",
  ];

  return shots.map((shot, index) => {
    const square = shot.startsWith("detail_");
    return {
      id: `${input.handle}-${index + 1}`,
      ratio: square ? "square" : "portrait",
      shot,
      // Names the cloth rather than a weave, because a stitched garment has
      // none — see the `weave` field on Product.
      alt: `${SHOT_DESCRIPTIONS[shot]}: ${input.colour} ${input.garment} in ${input.cloth} with ${input.motif} motifs`,
      ...(square ? SQUARE : PORTRAIT),
    };
  });
}

export const PRODUCTS: readonly Product[] = [
  {
    id: "1",
    handle: "aparajita-blue-katan-silk-kadhua-saree",
    title: "Blue Pure Katan Silk Kadhua Banarasi Handloom Saree",
    poeticName: "Aparajita",
    sku: "SRKKDBL10041",
    price: money(68_000),
    inventoryQuantity: 1,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 12],
    narrative:
      "Named for the flower that opens the same deep blue every morning and asks nothing of anyone. The ground is undyed katan taken to indigo in a single bath, and the kadhua booti sits detached across it — each one entered separately, no thread carried behind, so the reverse reads as cleanly as the face. Seventy days of a weaver's attention, and the restraint is the point.",
    spec: {
      colour: "Indigo blue",
      technique: "Kadhua, with detached booti across the field",
      fabric: "Pure Katan silk",
      speciality: "Real zari koniya at all four corners of the pallu",
      collectionNote: "From Nadi, the monsoon collection.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, four-shaft",
      weaveTimeWeeks: 10,
      artisanCount: 2,
    },
    garmentType: "saree",
    weave: "kadhua",
    fabric: "katan-silk",
    colourFamily: "blue",
    zariTypes: ["real_zari"],
    motifs: ["booti", "konia"],
    campaign: "nadi",
    images: shotTemplate({
      handle: "aparajita",
      colour: "indigo blue",
      weave: "kadhua",
      motif: "booti",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "2",
    handle: "nishith-black-katan-silk-meenakari-saree",
    title: "Black Pure Katan Silk Meenakari Banarasi Handloom Saree",
    poeticName: "Nishith",
    sku: "SRKMNBK10088",
    price: money(94_000),
    inventoryQuantity: 0,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [12, 14],
    narrative:
      "Black is difficult in this category and mostly avoided, which is the reason to attempt it. The ground is dense enough to hold light rather than reflect it, and the meenakari works against that — coloured resham laid inside a zari outline, so each motif carries its own small enamel. Read it at arm's length and the field is plain. Read it closer and it is not.",
    spec: {
      colour: "Black",
      technique: "Meenakari, resham within a zari outline",
      fabric: "Pure Katan silk",
      speciality: "Jaal across the pallu, drawn in gold and three resham colours",
      collectionNote: "From Antaraal.",
      note: "Woven to order. Please allow the full despatch window.",
    },
    provenance: {
      workshop: "Madanpura workshop",
      loom: "Pit loom, jacquard",
      weaveTimeWeeks: 14,
      artisanCount: 3,
    },
    garmentType: "saree",
    // Meenakari is a MOTIF in the vocabulary, not a weave � taxonomy/REVIEW.md
    // decision 4: it describes how a motif is coloured, not the loom
    // technique. The weave underneath it is cutwork.
    weave: "cutwork",
    fabric: "katan-silk",
    colourFamily: "black",
    zariTypes: ["gold", "resham"],
    motifs: ["meenakari", "jaal", "floral"],
    campaign: "antaraal",
    images: shotTemplate({
      handle: "nishith",
      colour: "black",
      weave: "cutwork",
      motif: "meenakari",
      garment: "saree",
    }),
  },
  {
    id: "3",
    handle: "chandrika-ivory-tissue-silk-jangla-saree",
    title: "Ivory Tissue Silk Jangla Banarasi Handloom Saree",
    poeticName: "Chandrika",
    sku: "SRTJGIV10102",
    price: money(112_000),
    inventoryQuantity: 1,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 12],
    narrative:
      "Tissue carries zari right through the weft, so the cloth is metallic before a single motif is placed on it. Over that, a jangla — a creeping vine with no resting ground, running edge to edge without a break. Two decisions that should compete and instead settle: the vine reads as shadow on a surface that is already light. Heaviest piece we have woven this year, and it does not feel it.",
    spec: {
      colour: "Ivory and silver",
      technique: "Jangla, continuous vine across the full field",
      fabric: "Tissue silk with zari weft",
      speciality: "Silver zari throughout, with a kadiyal border in pale gold",
      collectionNote: "From Antaraal.",
    },
    provenance: {
      workshop: "Sarai Mohana workshop",
      loom: "Pit loom, jacquard",
      weaveTimeWeeks: 16,
      artisanCount: 3,
    },
    garmentType: "saree",
    weave: "jangla",
    fabric: "tissue-silk",
    colourFamily: "off-white",
    zariTypes: ["silver", "real_zari"],
    motifs: ["bel", "jaal"],
    campaign: "antaraal",
    images: shotTemplate({
      handle: "chandrika",
      colour: "ivory",
      weave: "jangla",
      motif: "bel",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "4",
    handle: "kesari-orange-katan-silk-tanchoi-saree",
    title: "Saffron Pure Katan Silk Tanchoi Banarasi Handloom Saree",
    poeticName: "Kesari",
    sku: "SRKTNOR10117",
    price: money(46_500),
    inventoryQuantity: 0,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [12, 14],
    narrative:
      "Tanchoi keeps its extra wefts bound into the body rather than floating them behind, which is why the reverse is almost as finished as the face and why the cloth falls the way it does. Self-toned figuring on a satin ground: the pattern is the same saffron as the field and shows only where the light turns. A quiet piece that photographs badly and wears extremely well.",
    spec: {
      colour: "Saffron",
      technique: "Tanchoi, self-toned figuring on a satin ground",
      fabric: "Pure Katan silk",
      speciality: "No zari at all — the figuring is entirely in silk",
      collectionNote: "From Nadi.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, jacquard",
      weaveTimeWeeks: 8,
      artisanCount: 2,
    },
    garmentType: "saree",
    weave: "tanchoi",
    fabric: "katan-silk",
    colourFamily: "orange",
    zariTypes: ["resham"],
    motifs: ["booti", "bel"],
    campaign: "nadi",
    images: shotTemplate({
      handle: "kesari",
      colour: "saffron",
      weave: "tanchoi",
      motif: "booti",
      garment: "saree",
    }),
  },
  {
    id: "5",
    handle: "sharada-white-kora-organza-jamdani-saree",
    title: "White Kora Organza Jamdani Banarasi Handloom Saree",
    poeticName: "Sharada",
    sku: "SROJDWH10125",
    price: money(38_000),
    inventoryQuantity: 2,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 12],
    narrative:
      "Kora is silk left undegummed, so it holds its own shape instead of following the body — the reason this reads as architecture rather than drape. The jamdani is worked in by hand against the ground, motif by motif, with no jacquard deciding anything. Where the two meet you can see straight through the cloth to the motif sitting on it, which is the whole argument for organza.",
    spec: {
      colour: "White",
      technique: "Jamdani, discontinuous supplementary weft worked by hand",
      fabric: "Kora organza",
      speciality: "Scattered booti in resham, no metal anywhere in the piece",
      collectionNote: "From Nadi.",
    },
    provenance: {
      workshop: "Ramnagar workshop",
      loom: "Pit loom, hand-picked jamdani",
      weaveTimeWeeks: 7,
      artisanCount: 2,
    },
    garmentType: "saree",
    weave: "jamdani",
    fabric: "kora-organza",
    colourFamily: "off-white",
    zariTypes: ["resham"],
    motifs: ["booti"],
    campaign: "nadi",
    images: shotTemplate({
      handle: "sharada",
      colour: "white",
      weave: "jamdani",
      motif: "booti",
      garment: "saree",
    }),
  },
  {
    id: "6",
    handle: "ambar-blue-katan-silk-rangkat-saree",
    title: "Blue and Ivory Pure Katan Silk Rangkat Banarasi Handloom Saree",
    poeticName: "Ambar",
    sku: "SRKRKBL10133",
    price: money(86_000),
    inventoryQuantity: 0,
    fulfilmentMode: "pre_order",
    dispatchLeadDays: [14, 18],
    narrative:
      "Rangkat changes the ground colour in blocks along the length, each section joined on the loom rather than dyed or stitched afterwards. Here it moves from ivory at the top of the drape to deep blue at the foot, in four steps, and every join had to be planned before the first pick. Get one wrong and the entire warp is spoiled. It is the least forgiving thing a Banarasi loom does.",
    spec: {
      colour: "Blue moving to ivory",
      technique: "Rangkat, four colour blocks joined on the loom",
      fabric: "Pure Katan silk",
      speciality: "Real zari bel running the full length of both borders",
      collectionNote: "From Antaraal.",
      note: "Available to pre-order. Woven after the order is placed.",
    },
    provenance: {
      workshop: "Madanpura workshop",
      loom: "Pit loom, four-shaft",
      weaveTimeWeeks: 18,
      artisanCount: 4,
    },
    garmentType: "saree",
    weave: "rangkat",
    fabric: "katan-silk",
    colourFamily: "blue",
    zariTypes: ["real_zari"],
    motifs: ["bel", "konia"],
    campaign: "antaraal",
    images: shotTemplate({
      handle: "ambar",
      colour: "blue and ivory",
      weave: "rangkat",
      motif: "bel",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "7",
    handle: "vasanti-yellow-sooti-cotton-jamdani-saree",
    title: "Yellow Sooti Cotton Jamdani Banarasi Handloom Saree",
    poeticName: "Vasanti",
    sku: "SRCJDYW10140",
    price: money(21_500),
    inventoryQuantity: 3,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 12],
    narrative:
      "The everyday piece in the collection, and the hardest to price honestly — handspun cotton takes as long on the loom as silk and sells for a fifth as much. Jamdani in resham across a pale yellow ground, light enough to wear through a Banaras summer and plain enough to wear twice in a week without anyone counting.",
    spec: {
      colour: "Pale yellow",
      technique: "Jamdani, worked by hand in resham",
      fabric: "Handspun sooti cotton",
      speciality: "Phool patti scattered across the body, denser at the pallu",
      collectionNote: "From Nadi.",
    },
    provenance: {
      workshop: "Ramnagar workshop",
      loom: "Pit loom, hand-picked jamdani",
      weaveTimeWeeks: 5,
      artisanCount: 1,
    },
    garmentType: "saree",
    weave: "jamdani",
    fabric: "muslin-cotton",
    colourFamily: "yellow",
    zariTypes: ["resham"],
    motifs: ["floral", "booti"],
    campaign: "nadi",
    images: shotTemplate({
      handle: "vasanti",
      colour: "pale yellow",
      weave: "jamdani",
      motif: "phool patti",
      garment: "saree",
    }),
  },
  {
    id: "8",
    handle: "nilambari-blue-katan-silk-shikargah-saree",
    title: "Deep Blue Pure Katan Silk Shikargah Banarasi Handloom Saree",
    poeticName: "Nilambari",
    sku: "SRKSGBL10158",
    price: money(148_000),
    inventoryQuantity: 0,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [14, 18],
    narrative:
      "Shikargah is the hunting field — animals, riders and forest worked into one continuous composition, the most openly figurative thing the Banarasi vocabulary allows. Ours is read at dusk: the ground is deep enough that the figures surface slowly, and the deer at the pallu is turned away. Six months on the loom for a composition that took longer to draw than to weave.",
    spec: {
      colour: "Deep blue",
      technique: "Shikargah, continuous figurative field",
      fabric: "Pure Katan silk",
      speciality: "Real zari throughout, with meenakari at the pallu figures",
      collectionNote: "From Antaraal.",
      note: "Woven to order.",
    },
    provenance: {
      workshop: "Madanpura workshop",
      loom: "Pit loom, jacquard",
      weaveTimeWeeks: 26,
      artisanCount: 4,
    },
    garmentType: "saree",
    // Shikargah is a MOTIF in the vocabulary � the hunting-scene composition �
    // and the weave carrying it here is cutwork.
    weave: "cutwork",
    fabric: "katan-silk",
    colourFamily: "indigo",
    zariTypes: ["real_zari", "resham"],
    motifs: ["shikargah", "jaal", "konia", "bird-animal"],
    campaign: "antaraal",
    images: shotTemplate({
      handle: "nilambari",
      colour: "deep indigo",
      weave: "cutwork",
      motif: "shikargah",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "9",
    handle: "sindoor-red-katan-silk-kadiyal-saree",
    title: "Red Pure Katan Silk Kadiyal Banarasi Handloom Saree",
    poeticName: "Sindoor",
    sku: "SRKKDRD10166",
    price: money(78_000),
    inventoryQuantity: 1,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 12],
    narrative:
      "Kadiyal interlocks the wefts so body and border are genuinely different colours in one cloth, joined by structure rather than by a seam. Red body, ivory border, and the join is a hard line you can find with a fingernail. The bridal piece in the collection, and the only one we would call that — the rest are for the days either side.",
    spec: {
      colour: "Red with an ivory border",
      technique: "Kadiyal, interlocked weft at the border",
      fabric: "Pure Katan silk",
      speciality: "Real zari koniya, with a paisley bel along both borders",
      collectionNote: "From Nadi.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, four-shaft",
      weaveTimeWeeks: 12,
      artisanCount: 3,
    },
    garmentType: "saree",
    weave: "kadiyal",
    fabric: "katan-silk",
    colourFamily: "red",
    zariTypes: ["real_zari"],
    motifs: ["paisley", "konia", "bel"],
    campaign: "nadi",
    images: shotTemplate({
      handle: "sindoor",
      colour: "red",
      weave: "kadiyal",
      motif: "paisley",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "10",
    handle: "hemant-green-silk-wool-tanchoi-stole",
    title: "Green Silk Wool Tanchoi Banarasi Handloom Stole",
    poeticName: "Hemant",
    sku: "STWTNGR10174",
    price: money(18_500),
    inventoryQuantity: 4,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 12],
    narrative:
      "A silk warp against a fine wool weft — weight without stiffness, which is the only reason a Banarasi structure works at this scale. Tanchoi figuring in the same green as the ground, so it reads plain from across a room. Made for the six weeks in the year when Banaras is genuinely cold and nobody believes it.",
    spec: {
      colour: "Moss green",
      technique: "Tanchoi, self-toned",
      fabric: "Silk wool",
      speciality: "Hand-knotted fringe at both ends",
      collectionNote: "From Antaraal.",
    },
    provenance: {
      workshop: "Sarai Mohana workshop",
      loom: "Pit loom, jacquard",
      weaveTimeWeeks: 4,
      artisanCount: 1,
    },
    garmentType: "stole",
    weave: "tanchoi",
    fabric: "silk-wool",
    colourFamily: "green",
    zariTypes: ["resham"],
    motifs: ["booti"],
    campaign: "antaraal",
    images: shotTemplate({
      handle: "hemant",
      colour: "moss green",
      weave: "tanchoi",
      motif: "booti",
      garment: "stole",
    }),
  },
  {
    id: "11",
    handle: "saanjh-purple-handwoven-georgette-kadhua-dupatta",
    title: "Purple Handwoven Georgette Kadhua Banarasi Handloom Dupatta",
    poeticName: "Saanjh",
    sku: "DPGKDPR10182",
    price: money(24_000),
    inventoryQuantity: 0,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 12],
    narrative:
      "Georgette is twisted hard in both directions, which gives it the grain and the fall — it will not hold a fold and does not try to. Kadhua booti scattered across it in gold, each one detached, which on a cloth this fine means the reverse is nearly as clean as the face. Named for the half hour when the light goes purple over the ghats and everyone stops what they are doing.",
    spec: {
      colour: "Deep purple",
      technique: "Kadhua, detached booti",
      fabric: "Handwoven georgette",
      speciality: "Gold zari booti, scattered rather than set to a grid",
      collectionNote: "From Nadi.",
    },
    provenance: {
      workshop: "Ramnagar workshop",
      loom: "Pit loom, four-shaft",
      weaveTimeWeeks: 6,
      artisanCount: 2,
    },
    garmentType: "dupatta",
    weave: "kadhua",
    fabric: "khaddi-georgette",
    colourFamily: "purple",
    zariTypes: ["gold"],
    motifs: ["booti"],
    campaign: "nadi",
    images: shotTemplate({
      handle: "saanjh",
      colour: "deep purple",
      weave: "kadhua",
      motif: "booti",
      garment: "dupatta",
    }),
  },
  {
    id: "12",
    handle: "bela-white-handwoven-georgette-kadhua-saree",
    title: "Off-White Handwoven Georgette Kadhua Banarasi Handloom Saree",
    poeticName: "Bela",
    sku: "SRGKDWH10190",
    price: money(52_000),
    inventoryQuantity: 1,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 12],
    narrative:
      "Off-white on off-white: a georgette ground with kadhua worked in roopa sona, which is gilded silver and reads warmer than gold without ever announcing itself. The jasmine the piece is named for behaves the same way — you find it by smell before you find it by looking. The most-requested and least-photographed piece we make.",
    spec: {
      colour: "Off-white",
      technique: "Kadhua, detached booti and a bel border",
      fabric: "Handwoven georgette",
      speciality: "Roopa sona zari throughout",
      collectionNote: "From Nadi.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, four-shaft",
      weaveTimeWeeks: 9,
      artisanCount: 2,
    },
    garmentType: "saree",
    weave: "kadhua",
    fabric: "khaddi-georgette",
    colourFamily: "off-white",
    zariTypes: ["roopa_sona"],
    motifs: ["booti", "bel", "floral"],
    campaign: "nadi",
    images: shotTemplate({
      handle: "bela",
      colour: "off-white",
      weave: "kadhua",
      motif: "booti",
      garment: "saree",
    }),
  },
  /* ------------------------------------------------------------------------
   * Stitched garments.
   *
   * The first pieces in this catalogue that are cut and tailored rather than
   * woven to shape, which is why four of the five carry no `weave` (Ksheera is
   * the exception — its cloth is genuinely a jamdani). taxonomy/facets.json
   * `garment.suit` records what still needs a domain reviewer's confirmation.
   *
   * A suit is also the first product here assembled from several cloths, so
   * `fabric` names its principal piece and the dupatta and churidar are
   * described in `spec` rather than faceted. That is a known simplification.
   * ---------------------------------------------------------------------- */
  {
    id: "13",
    handle: "ksheera-off-white-muslin-cotton-jamdani-suit",
    title: "Off-White Muslin Cotton Jamdani Anarkali Suit",
    poeticName: "Ksheera",
    sku: "SUJMOW10131",
    price: money(42_000),
    inventoryQuantity: 1,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [14, 18],
    narrative:
      "Ksheera is milk, and the whole piece stays inside that one word. The cloth is a jamdani woven in undyed muslin, the booti raised in the same thread as the ground so the pattern is a change in texture rather than in colour — visible when the light moves and almost gone when it does not. It is cut as an anarkali with a gathered fall from a high waist, and left unlined, because a cloth this fine is worth seeing light through.",
    spec: {
      colour: "Undyed off-white",
      technique: "Jamdani, with tonal booti across the panel",
      fabric: "Muslin cotton, unlined",
      speciality: "Self-thread booti — no zari anywhere on the piece",
      note: "Anarkali with churidar and a matching muslin dupatta.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, jamdani",
      weaveTimeWeeks: 6,
      artisanCount: 2,
    },
    garmentType: "suit",
    weave: "jamdani",
    fabric: "muslin-cotton",
    colourFamily: "off-white",
    zariTypes: ["resham"],
    motifs: ["booti", "floral"],
    images: stitchedShotTemplate({
      handle: "ksheera",
      colour: "off-white",
      cloth: "muslin cotton jamdani",
      motif: "booti",
      garment: "anarkali suit",
    }),
  },
  {
    id: "14",
    handle: "shyamala-green-katan-silk-kurta-set",
    title: "Green Katan Silk Kurta Set",
    poeticName: "Shyamala",
    sku: "SUKTGR10141",
    price: money(36_000),
    inventoryQuantity: 1,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 12],
    narrative:
      "A green that sits closer to the leaf than to the emerald, which is the harder of the two to dye and the easier of the two to wear. There is no weave to name here — the cloth is plain katan, and everything the piece does it does through cut: a straight kurta that skims rather than fits, side slits taken high enough to walk in, and a churidar gathered short. Restraint standing in for ornament.",
    spec: {
      colour: "Leaf green",
      technique: "Plain-woven ground, tailored",
      fabric: "Pure Katan silk",
      note: "Straight kurta with churidar and a plain silk dupatta.",
    },
    provenance: {
      workshop: "Ramnagar atelier",
      loom: "Pit loom, plain ground",
      weaveTimeWeeks: 3,
      artisanCount: 3,
    },
    garmentType: "suit",
    fabric: "katan-silk",
    colourFamily: "green",
    zariTypes: [],
    motifs: [],
    images: stitchedShotTemplate({
      handle: "shyamala",
      colour: "leaf green",
      cloth: "plain katan silk",
      motif: "no",
      garment: "kurta set",
    }),
  },
  {
    id: "15",
    handle: "padmini-pink-moonga-silk-anarkali-suit",
    title: "Rose Pink Moonga Silk Anarkali Suit",
    poeticName: "Padmini",
    sku: "SUMGPK10151",
    price: money(58_000),
    inventoryQuantity: 1,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [16, 20],
    narrative:
      "Moonga takes dye unevenly, and that is the reason to use it: the rose here is deeper along the slubs and lighter between them, so the colour moves across the panel without anything having been done to make it. The anarkali is cut full from a high waist and carries its weight well. Over it sits an organza dupatta embroidered by hand — the only worked surface on the piece, and deliberately the lightest one.",
    spec: {
      colour: "Rose pink",
      technique: "Handwoven moonga ground, tailored; hand-embroidered dupatta",
      fabric: "Moonga silk",
      speciality: "Hand-embroidered organza dupatta",
      note: "Anarkali with churidar and an embroidered organza dupatta.",
    },
    provenance: {
      workshop: "Sarnath atelier",
      loom: "Pit loom, moonga ground",
      weaveTimeWeeks: 5,
      artisanCount: 4,
    },
    garmentType: "suit",
    fabric: "moonga-silk",
    colourFamily: "pink",
    zariTypes: ["resham"],
    motifs: ["floral", "bel"],
    images: stitchedShotTemplate({
      handle: "padmini",
      colour: "rose pink",
      cloth: "handwoven moonga silk",
      motif: "floral",
      garment: "anarkali suit",
    }),
  },
  {
    id: "16",
    handle: "ashoka-maroon-satin-silk-anarkali-suit",
    title: "Maroon Satin Silk Anarkali Suit",
    poeticName: "Ashoka",
    sku: "SUSTMR10161",
    price: money(52_000),
    inventoryQuantity: 0,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [16, 20],
    narrative:
      "Named for the tree that flowers red before it leafs. The ground is a light satin silk, chosen because an angrakha neckline has to cross and lie flat, and a heavier cloth will not do it without bulk. The tie sits off to one side where it belongs, the skirt is cut full, and the dupatta is organza worked with a running floral bel. Sold out, and it will be made again to measure rather than repeated exactly.",
    spec: {
      colour: "Deep maroon",
      technique: "Angrakha-style crossed neckline, tailored",
      fabric: "Light satin silk, in the Chanderi weight",
      speciality: "Embroidered organza dupatta with a running bel",
      note: "Anarkali with a silk churidar and an embroidered organza dupatta.",
    },
    provenance: {
      workshop: "Ramnagar atelier",
      loom: "Pit loom, satin ground",
      weaveTimeWeeks: 4,
      artisanCount: 3,
    },
    garmentType: "suit",
    fabric: "satin-silk",
    colourFamily: "maroon",
    zariTypes: ["resham"],
    motifs: ["floral", "bel"],
    images: stitchedShotTemplate({
      handle: "ashoka",
      colour: "deep maroon",
      cloth: "satin silk",
      motif: "bel",
      garment: "anarkali suit",
    }),
  },
  {
    id: "17",
    handle: "baluka-beige-tussar-silk-embroidered-suit",
    title: "Beige Tussar Silk Embroidered Kurta Set",
    poeticName: "Baluka",
    sku: "SUTSBG10171",
    price: money(64_000),
    inventoryQuantity: 1,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [18, 22],
    narrative:
      "Baluka is sand, and the piece is built in three layers of it. A plain inner kurta, a churidar in a lighter weight, and over both an embroidered overlay in raw tussar that carries the whole of the ornament. Keeping the worked surface on a layer that comes off is a practical decision as much as a designed one — it makes one set read as two, and it puts the hand-embroidery where it can be seen against the light rather than flat against the body.",
    spec: {
      colour: "Sand beige",
      technique: "Hand-embroidered overlay over a plain inner kurta",
      fabric: "Raw tussar silk overlay, lighter silk inner",
      speciality: "Three pieces — overlay, inner kurta and churidar",
      note: "The overlay is the worked layer; the inner kurta is deliberately plain.",
    },
    provenance: {
      workshop: "Sarnath atelier",
      loom: "Pit loom, tussar ground",
      weaveTimeWeeks: 7,
      artisanCount: 5,
    },
    garmentType: "suit",
    fabric: "tussar-silk",
    colourFamily: "off-white",
    zariTypes: ["resham"],
    motifs: ["floral", "jaal"],
    images: stitchedShotTemplate({
      handle: "baluka",
      colour: "sand beige",
      cloth: "hand-embroidered tussar silk",
      motif: "floral",
      garment: "kurta set",
    }),
  },
  /*
   * ── Eight more pieces, 13 September 2026 ──────────────────────────────────
   *
   * Added so the campaign collections stop sharing the same handful of stock.
   * With ten photographed pieces spread across Nadi, Antaraal, Awadh, Kala,
   * Katha, Bridal, Gifts, Fresh Off the Loom and Back in Stock, every listing
   * was showing the same sarees and no campaign made a distinct argument.
   *
   * Four sarees and four stitched garments, so each campaign can carry two of
   * each — which is the shape the campaign listings on this category use.
   *
   * NAMES AND COPY ARE OURS. The photographs are staged reference shots, in
   * `public/reference-only/products/<handle>/` under our own handles, and are
   * gitignored like the rest. Their product titles are not here and must not
   * be: build.md §6 names product copy explicitly and `check-originality`
   * enforces it on seed data.
   */
  {
    id: "18",
    handle: "rohini-rose-katan-silk-jangla-saree",
    title: "Rose Pink Pure Katan Silk Jangla Banarasi Handloom Saree",
    poeticName: "Rohini",
    sku: "SRKJGPK10181",
    price: money(96_000),
    inventoryQuantity: 1,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 12],
    narrative:
      "A jangla is a vine that refuses to stop, and this one runs the full width without once repeating where you expect it to. The ground is a rose that reads warm in daylight and almost brown by lamp, with meena in two greens worked into the flowering so the vine reads as a plant rather than as an outline of one. Sixteen weeks, and most of that was the meena.",
    spec: {
      colour: "Rose pink",
      technique: "Jangla, with meenakari in two greens",
      fabric: "Pure Katan silk",
      speciality: "Real zari throughout, with a meena vine across the field",
      collectionNote: "From Kala.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, six-shaft",
      weaveTimeWeeks: 16,
      artisanCount: 3,
    },
    garmentType: "saree",
    weave: "jangla",
    fabric: "katan-silk",
    colourFamily: "pink",
    zariTypes: ["real_zari"],
    motifs: ["jaal", "meenakari", "floral"],
    images: shotTemplate({
      handle: "rohini",
      colour: "rose pink",
      weave: "jangla",
      motif: "jaal",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "19",
    handle: "tarini-peach-kora-georgette-meenakari-saree",
    title: "Peach Kora Georgette Meenakari Banarasi Handloom Saree",
    poeticName: "Tarini",
    sku: "SRGMNPE10191",
    price: money(58_000),
    inventoryQuantity: 0,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [8, 10],
    narrative:
      "Kora by georgette is the lightest ground we buy, and it punishes a heavy hand — every extra pick shows as weight the cloth then has to carry. So this one is mostly empty. A paisley in gold zari with a meena centre repeats at a distance that looks careless and is not, and the pallu holds one larger version of the same figure to end on.",
    spec: {
      colour: "Peach",
      technique: "Meenakari paisley on a kora georgette ground",
      fabric: "Kora by georgette",
      speciality: "Gold zari with a coloured meena centre to each paisley",
      collectionNote: "From Awadh.",
    },
    provenance: {
      workshop: "Ramnagar workshop",
      loom: "Pit loom, four-shaft",
      weaveTimeWeeks: 9,
      artisanCount: 2,
    },
    garmentType: "saree",
    weave: "cutwork",
    fabric: "khaddi-georgette",
    colourFamily: "orange",
    zariTypes: ["gold"],
    motifs: ["paisley", "meenakari"],
    images: shotTemplate({
      handle: "tarini",
      colour: "peach",
      weave: "cutwork",
      motif: "paisley",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "20",
    handle: "mrinalini-rosewood-katan-silk-shikargah-saree",
    title: "Rosewood Pure Katan Silk Shikargah Banarasi Handloom Saree",
    poeticName: "Mrinalini",
    sku: "SRKSHRW10201",
    // 156, not 148: two pieces already sat at 148_000 and a tie at the maximum
    // makes `desc[0]` and `asc[last]` different products, which engine.test.ts
    // asserts are the same. A tie anywhere else is fine; a tie at an extreme
    // is not.
    price: money(156_000),
    inventoryQuantity: 1,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [20, 26],
    narrative:
      "A hunting field with the hunt taken out of it. The animals are all here and none of them is running: a tiger sits, the deer are unbothered, and the whole scene has the stillness of an afternoon rather than the drama the motif is usually asked for. Twenty-six weeks on the loom, and the restraint is what took the time.",
    spec: {
      colour: "Rosewood",
      technique: "Shikargah, figures entered separately in kadhua",
      fabric: "Pure Katan silk",
      speciality: "Real zari, with every figure a detached kadhua unit",
      collectionNote: "From Katha.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, jacquard head",
      weaveTimeWeeks: 26,
      artisanCount: 3,
    },
    garmentType: "saree",
    weave: "kadhua",
    fabric: "katan-silk",
    colourFamily: "maroon",
    zariTypes: ["real_zari"],
    motifs: ["shikargah", "bird-animal"],
    images: shotTemplate({
      handle: "mrinalini",
      colour: "rosewood",
      weave: "kadhua",
      motif: "shikargah",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "21",
    handle: "suvarna-gold-satin-organza-embroidered-saree",
    title: "Light Gold Satin Organza Hand-Embroidered Saree",
    poeticName: "Suvarna",
    sku: "SROEMGD10211",
    price: money(72_000),
    inventoryQuantity: 0,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [8, 10],
    narrative:
      "Not woven ornament — embroidered, on a satin organza that is almost a colour and almost not. The work is done after the cloth comes off the loom, by a different set of hands in a different room, which is the only reason a piece this light can carry this much surface. Hold it up and the ground disappears before the thread does.",
    spec: {
      colour: "Light gold",
      technique: "Hand embroidery on woven satin organza",
      fabric: "Satin organza",
      speciality: "Embroidered after weaving, by hand, over eleven weeks",
      collectionNote: "From Kala.",
    },
    provenance: {
      workshop: "Madanpura workshop",
      loom: "Pit loom, plain weave",
      weaveTimeWeeks: 11,
      artisanCount: 4,
    },
    garmentType: "saree",
    weave: "cutwork",
    fabric: "satin-silk",
    colourFamily: "gold",
    zariTypes: ["resham"],
    motifs: ["floral", "bel"],
    images: shotTemplate({
      handle: "suvarna",
      colour: "light gold",
      weave: "cutwork",
      motif: "floral",
      garment: "saree",
      includeBorderFrame: false,
    }),
  },
  {
    id: "26",
    handle: "nayanika-rosegold-organza-embroidered-saree",
    title: "Rose Gold Organza Hand-Embroidered Saree",
    poeticName: "Nayanika",
    sku: "SROEMRG10261",
    price: money(66_000),
    inventoryQuantity: 1,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [8, 10],
    narrative:
      "Rose gold is a colour that goes wrong easily — a shade too warm and it is orange, a shade too cool and it is nothing. This one was dyed three times before the third bath held. The embroidery is worked after weaving, in a thread only half a step off the ground, so the pattern arrives late and stays quiet.",
    spec: {
      colour: "Rose gold",
      technique: "Hand embroidery on handwoven organza",
      fabric: "Banaras organza",
      speciality: "Tonal thread, no zari anywhere on the piece",
      collectionNote: "From Awadh.",
    },
    provenance: {
      workshop: "Madanpura workshop",
      loom: "Pit loom, plain weave",
      weaveTimeWeeks: 10,
      artisanCount: 4,
    },
    garmentType: "saree",
    weave: "cutwork",
    fabric: "kora-organza",
    colourFamily: "pink",
    zariTypes: ["resham"],
    motifs: ["floral", "bel"],
    images: shotTemplate({
      handle: "nayanika",
      colour: "rose gold",
      weave: "cutwork",
      motif: "floral",
      garment: "saree",
      includeBorderFrame: false,
    }),
  },
  {
    id: "22",
    handle: "anupama-ivory-muslin-jamdani-anarkali-suit",
    title: "Ivory Muslin Jamdani Anarkali Suit",
    poeticName: "Anupama",
    sku: "SUJMIV10221",
    price: money(46_000),
    inventoryQuantity: 1,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [14, 18],
    narrative:
      "Jamdani cut as an anarkali, which is a harder thing than it sounds: the pattern has to survive being gathered, and most of it does not. This one was woven with the gather already planned, the booti spaced wider through the panels that would take the fullness, so the figure reads the same standing still as it does moving.",
    spec: {
      colour: "Ivory",
      technique: "Jamdani, spaced for the gather",
      fabric: "Muslin cotton",
      speciality: "Woven to the cut rather than cut from the cloth",
      note: "Anarkali with churidar and a matching muslin dupatta.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, jamdani",
      weaveTimeWeeks: 7,
      artisanCount: 3,
    },
    garmentType: "suit",
    weave: "jamdani",
    fabric: "muslin-cotton",
    colourFamily: "off-white",
    zariTypes: ["resham"],
    motifs: ["booti", "floral"],
    images: stitchedShotTemplate({
      handle: "anupama",
      colour: "ivory",
      cloth: "muslin jamdani",
      motif: "booti",
      garment: "anarkali suit",
    }),
  },
  {
    id: "23",
    handle: "sharvari-sage-chanderi-embroidered-suit",
    title: "Sage Green Chanderi Hand-Embroidered Suit Set",
    poeticName: "Sharvari",
    sku: "SUCHSG10231",
    price: money(38_000),
    inventoryQuantity: 2,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [12, 16],
    narrative:
      "Chanderi holds a crease the way paper does, which makes it wrong for almost everything and right for this. The embroidery is kept to the yoke and the hem so the body of the kurta stays flat, and the dupatta is handwoven kora rather than more chanderi — two cloths that behave differently, put together on purpose.",
    spec: {
      colour: "Sage green",
      technique: "Hand embroidery at yoke and hem",
      fabric: "Chanderi silk cotton",
      speciality: "Handwoven kora silk dupatta, not matched to the kurta",
      note: "Kurta, churidar and dupatta.",
    },
    provenance: {
      workshop: "Madanpura workshop",
      loom: "Pit loom, plain weave",
      weaveTimeWeeks: 5,
      artisanCount: 3,
    },
    garmentType: "suit",
    fabric: "muslin-cotton",
    colourFamily: "green",
    zariTypes: ["resham"],
    motifs: ["floral", "bel"],
    images: stitchedShotTemplate({
      handle: "sharvari",
      colour: "sage green",
      cloth: "chanderi silk cotton",
      motif: "floral",
      garment: "suit set",
    }),
  },
  {
    id: "24",
    handle: "madhavi-rose-moonga-silk-anarkali-suit",
    title: "Rose Pink Handwoven Moonga Silk Anarkali Suit",
    poeticName: "Madhavi",
    sku: "SUMGRP10241",
    price: money(64_000),
    inventoryQuantity: 1,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [16, 20],
    narrative:
      "Moonga is a wild silk and it will not take a dye evenly, which is the whole reason to use it: the rose here is three or four roses depending on where the light lands. Cut full, because a cloth with that much movement in the colour wants the length to show it, and finished with an embroidered organza dupatta that stays out of the argument.",
    spec: {
      colour: "Rose pink",
      technique: "Handwoven moonga, plain ground",
      fabric: "Moonga silk",
      speciality: "Hand-embroidered organza dupatta",
      note: "Anarkali with churidar and organza dupatta.",
    },
    provenance: {
      workshop: "Ramnagar workshop",
      loom: "Pit loom, plain weave",
      weaveTimeWeeks: 8,
      artisanCount: 3,
    },
    garmentType: "suit",
    fabric: "moonga-silk",
    colourFamily: "pink",
    zariTypes: ["resham"],
    motifs: ["floral"],
    images: stitchedShotTemplate({
      handle: "madhavi",
      colour: "rose pink",
      cloth: "moonga silk",
      motif: "floral",
      garment: "anarkali suit",
    }),
  },
  {
    id: "25",
    handle: "kaveri-maroon-brocade-kurta-set",
    title: "Maroon Katan Silk Brocade Kurta Set",
    poeticName: "Kaveri",
    sku: "SUKBMR10251",
    price: money(52_000),
    inventoryQuantity: 0,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [10, 14],
    narrative:
      "Brocade cut straight, with no gather anywhere, because the cloth is already doing enough. The stripe is woven rather than printed and runs the length of the panel, so the kurta reads taller than it is; the dupatta is the same cloth turned ninety degrees, which is the only trick in the piece and the one worth having.",
    spec: {
      colour: "Maroon",
      technique: "Striped brocade, woven to the panel",
      fabric: "Pure Katan silk",
      speciality: "Dupatta cut across the warp so the stripe turns",
      note: "Kurta, straight pant and dupatta.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, four-shaft",
      weaveTimeWeeks: 7,
      artisanCount: 2,
    },
    garmentType: "suit",
    weave: "bootidar",
    fabric: "katan-silk",
    colourFamily: "maroon",
    zariTypes: ["gold"],
    motifs: ["geometric", "booti"],
    images: stitchedShotTemplate({
      handle: "kaveri",
      colour: "maroon",
      cloth: "katan silk brocade",
      motif: "geometric",
      garment: "kurta set",
    }),
  },
  /*
   * ── Ten pieces for Bridal, Zarkashi and Gifting, 13 September 2026 ────────
   *
   * Those three listings were filled with whatever was already photographed,
   * so Bridal showed ordinary day sarees and Gifting showed the same pieces as
   * Kala. A listing whose photographs do not look like the thing it is named
   * after is worse than an empty one: it tells the shopper the shop does not
   * have what it says it has.
   *
   * Photography staged under our handles in the gitignored folder, as ever.
   * Names and copy are ours.
   */
  {
    id: "27",
    handle: "vaidehi-deep-red-satin-silk-kadhua-bridal-saree",
    title: "Deep Red Satin Silk Kadhua Banarasi Handloom Saree",
    poeticName: "Vaidehi",
    sku: "SRSKDRD10271",
    price: money(268_000),
    inventoryQuantity: 1,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [110, 140],
    narrative:
      "The red every bride's mother describes from memory and nobody can ever find. It is three dips rather than one, which is why it holds at dusk instead of going brown, and the jaal is kadhua throughout — every motif entered separately, nothing carried behind. Five months on the loom and two weavers on it for most of that.",
    spec: {
      colour: "Deep red",
      technique: "Kadhua jaal in silver and gold zari",
      fabric: "Pure satin silk",
      speciality: "Real zari in two metals across the whole field",
      collectionNote: "From the bridal edit.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, jacquard head",
      weaveTimeWeeks: 22,
      artisanCount: 2,
    },
    garmentType: "saree",
    weave: "kadhua",
    fabric: "satin-silk",
    colourFamily: "red",
    zariTypes: ["real_zari", "silver"],
    motifs: ["jaal", "floral"],
    images: shotTemplate({
      handle: "vaidehi",
      colour: "deep red",
      weave: "kadhua",
      motif: "jaal",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "28",
    handle: "urmila-sea-green-katan-silk-kadhua-saree",
    title: "Sea Green Pure Katan Silk Kadhua Banarasi Handloom Saree",
    poeticName: "Urmila",
    sku: "SRKKDGN10281",
    price: money(182_000),
    inventoryQuantity: 1,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [90, 120],
    narrative:
      "Green at a wedding is the quieter choice and the harder one to get right — too blue and it is cold, too yellow and it is a leaf. This sits where the sea does on an overcast day. Silver and gold zari together across a kadhua field, which doubles the loom time and is the only way to get two metals to read as one surface.",
    spec: {
      colour: "Sea green",
      technique: "Kadhua, silver and gold zari together",
      fabric: "Pure Katan silk",
      speciality: "Two metals in one field, entered motif by motif",
      collectionNote: "From the bridal edit.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, jacquard head",
      weaveTimeWeeks: 18,
      artisanCount: 2,
    },
    garmentType: "saree",
    weave: "kadhua",
    fabric: "katan-silk",
    colourFamily: "green",
    zariTypes: ["real_zari", "silver"],
    motifs: ["jaal", "booti"],
    images: shotTemplate({
      handle: "urmila",
      colour: "sea green",
      weave: "kadhua",
      motif: "jaal",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "29",
    handle: "ilaa-off-white-satin-silk-lehenga-set",
    title: "Off-White Satin Silk Real Zari Lehenga Set",
    poeticName: "Ilaa",
    sku: "LHSKOW10291",
    price: money(295_000),
    inventoryQuantity: 1,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [120, 160],
    narrative:
      "Undyed, which at a wedding is a decision rather than an absence. The skirt takes eleven metres from a single warp so the zari runs continuously around it — cut from separate lengths and the pattern breaks at every seam, which is the thing you cannot unsee once you know to look. Six months, and most of it on the skirt.",
    spec: {
      colour: "Off-white",
      technique: "Real zari on satin silk, woven to the panel",
      fabric: "Pure satin silk",
      speciality: "Skirt woven from one warp so the pattern does not break",
      note: "Lehenga, blouse and dupatta.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, jacquard head",
      weaveTimeWeeks: 26,
      artisanCount: 4,
    },
    garmentType: "lehenga",
    // A woven garment names its weave; only a stitched suit may omit one,
    // which catalogue.test.ts enforces per product.
    weave: "jangla",
    fabric: "satin-silk",
    colourFamily: "off-white",
    zariTypes: ["real_zari"],
    motifs: ["jaal", "bel"],
    images: stitchedShotTemplate({
      handle: "ilaa",
      colour: "off-white",
      cloth: "satin silk",
      motif: "jaal",
      garment: "lehenga set",
    }),
  },
  {
    id: "30",
    handle: "amrita-red-embroidered-bridal-odhani",
    title: "Red Hand-Embroidered Bridal Odhani",
    poeticName: "Amrita",
    sku: "DPEMRD10301",
    price: money(124_000),
    inventoryQuantity: 1,
    fulfilmentMode: "made_to_order",
    dispatchLeadDays: [70, 90],
    narrative:
      "The piece that goes over the head, which means it is the one photographed most and looked at least. Embroidered rather than woven, so the weight stays where a veil can carry it, and worked from the border inwards so the density falls where the fabric is doubled.",
    spec: {
      colour: "Red",
      technique: "Hand embroidery, worked border inwards",
      fabric: "Silk organza",
      speciality: "Weighted at the border so it falls rather than floats",
      note: "Sized to wear over the head, not across the shoulder.",
    },
    provenance: {
      workshop: "Madanpura workshop",
      loom: "Pit loom, plain weave",
      weaveTimeWeeks: 14,
      artisanCount: 5,
    },
    garmentType: "dupatta",
    // Embroidered after weaving, but the ground is still woven and the facet
    // describes the ground.
    weave: "cutwork",
    fabric: "kora-organza",
    colourFamily: "red",
    zariTypes: ["resham", "gold"],
    motifs: ["floral", "bel"],
    images: stitchedShotTemplate({
      handle: "amrita",
      colour: "red",
      cloth: "silk organza",
      motif: "floral",
      garment: "odhani",
    }),
  },
  {
    id: "31",
    handle: "damini-red-cotton-jamdani-real-zari-saree",
    title: "Red Pure Cotton Jamdani Real Zari Banarasi Handloom Saree",
    poeticName: "Damini",
    sku: "SRCJDRD10311",
    price: money(86_000),
    inventoryQuantity: 1,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [8, 10],
    narrative:
      "Real zari on cotton is an argument, not a compromise: the metal is heavy and the ground is not, so the weaver has to keep the density low or the cloth stops behaving like cotton. The meena border carries most of it and the field is left nearly bare, which is the correct answer and the harder one to hold your nerve on.",
    spec: {
      colour: "Red",
      technique: "Jamdani with a meenakari border",
      fabric: "Pure cotton",
      speciality: "Real silver-gilt zari on a cotton ground",
      collectionNote: "From Zarkashi.",
    },
    provenance: {
      workshop: "Ramnagar workshop",
      loom: "Pit loom, jamdani",
      weaveTimeWeeks: 11,
      artisanCount: 2,
    },
    garmentType: "saree",
    weave: "jamdani",
    fabric: "muslin-cotton",
    colourFamily: "red",
    zariTypes: ["real_zari"],
    motifs: ["meenakari", "bel"],
    images: shotTemplate({
      handle: "damini",
      colour: "red",
      weave: "jamdani",
      motif: "meenakari",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "32",
    handle: "haimavati-off-white-cotton-boota-real-zari-saree",
    title: "Off-White Pure Cotton Boota Real Zari Banarasi Handloom Saree",
    poeticName: "Haimavati",
    sku: "SRCTOW10321",
    price: money(74_000),
    inventoryQuantity: 1,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [8, 10],
    narrative:
      "Undyed cotton with a real-zari boota and nothing else happening anywhere. Every fault shows on a ground this plain, which is why it took fourteen weeks rather than eight, and why the weaver asked twice whether we were sure.",
    spec: {
      colour: "Off-white",
      technique: "Boota in real zari, plain ground",
      fabric: "Pure cotton",
      speciality: "Real zari, sparse, on an undyed ground",
      collectionNote: "From Zarkashi.",
    },
    provenance: {
      workshop: "Ramnagar workshop",
      loom: "Pit loom, four-shaft",
      weaveTimeWeeks: 14,
      artisanCount: 2,
    },
    garmentType: "saree",
    weave: "bootidar",
    fabric: "muslin-cotton",
    colourFamily: "off-white",
    zariTypes: ["real_zari"],
    motifs: ["boota"],
    images: shotTemplate({
      handle: "haimavati",
      colour: "off-white",
      weave: "bootidar",
      motif: "boota",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "33",
    handle: "nilaya-navy-cotton-jamdani-real-zari-saree",
    title: "Navy Blue Pure Cotton Jamdani Real Zari Banarasi Handloom Saree",
    poeticName: "Nilaya",
    sku: "SRCJDBL10331",
    price: money(92_000),
    inventoryQuantity: 0,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [8, 10],
    narrative:
      "Navy is the hardest ground to put silver on — too close in value and the zari disappears, too far and it glitters. This one runs silver and gold together so the border reads as two temperatures of the same metal, which is the whole trick and takes a weaver who has done it before.",
    spec: {
      colour: "Navy blue",
      technique: "Jamdani, silver and gold zari together",
      fabric: "Pure cotton",
      speciality: "Two metals in one border",
      collectionNote: "From Zarkashi.",
    },
    provenance: {
      workshop: "Ramnagar workshop",
      loom: "Pit loom, jamdani",
      weaveTimeWeeks: 13,
      artisanCount: 2,
    },
    garmentType: "saree",
    weave: "jamdani",
    fabric: "muslin-cotton",
    colourFamily: "blue",
    zariTypes: ["real_zari", "silver"],
    motifs: ["meenakari", "jaal"],
    images: shotTemplate({
      handle: "nilaya",
      colour: "navy blue",
      weave: "jamdani",
      motif: "jaal",
      garment: "saree",
      includeBorderFrame: true,
    }),
  },
  {
    id: "34",
    handle: "mridula-mint-katan-silk-stole",
    title: "Mint Blue Pure Katan Silk Banarasi Handloom Stole",
    poeticName: "Mridula",
    sku: "STKAPL10341",
    price: money(18_000),
    inventoryQuantity: 3,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [5, 7],
    narrative:
      "The smallest thing we make that still carries a full border, and the easiest to give: no size to get right, no occasion it is wrong for, and it will be worn more than most sarees. Mint is a colour almost nobody buys for themselves and almost everybody keeps.",
    spec: {
      colour: "Mint blue",
      technique: "Plain ground with a woven border",
      fabric: "Pure Katan silk",
      speciality: "Full border on a piece this size",
      collectionNote: "From the gifting edit.",
    },
    provenance: {
      workshop: "Lohta workshop",
      loom: "Pit loom, four-shaft",
      weaveTimeWeeks: 3,
      artisanCount: 1,
    },
    garmentType: "stole",
    weave: "bootidar",
    fabric: "katan-silk",
    colourFamily: "teal",
    zariTypes: ["resham"],
    motifs: ["booti"],
    images: shotTemplate({
      handle: "mridula",
      colour: "mint blue",
      weave: "bootidar",
      motif: "booti",
      garment: "stole",
      includeBorderFrame: false,
    }),
  },
  {
    id: "35",
    handle: "arunima-red-linen-handloom-saree",
    title: "Red Pure Linen Banarasi Handloom Saree",
    poeticName: "Arunima",
    sku: "SRLNRD10351",
    price: money(32_000),
    inventoryQuantity: 2,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [5, 7],
    narrative:
      "Linen is the one cloth here that improves with washing, which makes it the easiest thing to give to somebody who will actually wear it rather than keep it. It creases, and it is supposed to. Four months in and it will drape better than the day it arrived.",
    spec: {
      colour: "Red",
      technique: "Plain weave, handwoven linen",
      fabric: "Pure linen",
      speciality: "Washable, and better for it",
      collectionNote: "From the gifting edit.",
    },
    provenance: {
      workshop: "Ramnagar workshop",
      loom: "Pit loom, plain weave",
      weaveTimeWeeks: 4,
      artisanCount: 1,
    },
    garmentType: "saree",
    weave: "bootidar",
    fabric: "muslin-cotton",
    colourFamily: "red",
    zariTypes: ["resham"],
    motifs: ["geometric"],
    images: shotTemplate({
      handle: "arunima",
      colour: "red",
      weave: "bootidar",
      motif: "geometric",
      garment: "saree",
      includeBorderFrame: false,
    }),
  },
  {
    id: "36",
    handle: "shubhra-off-white-linen-handloom-saree",
    title: "Off-White Pure Linen Banarasi Handloom Saree",
    poeticName: "Shubhra",
    sku: "SRLNOW10361",
    price: money(31_000),
    inventoryQuantity: 2,
    fulfilmentMode: "ready_to_ship",
    dispatchLeadDays: [5, 7],
    narrative:
      "The undyed version of the same cloth, and the one we send most often when somebody says they do not know the person's colours. Off-white is not a compromise on linen — it is the ground the fibre arrives in, and the slub shows in it more honestly than under any dye.",
    spec: {
      colour: "Off-white",
      technique: "Plain weave, undyed linen",
      fabric: "Pure linen",
      speciality: "Undyed, so the slub in the yarn is visible",
      collectionNote: "From the gifting edit.",
    },
    provenance: {
      workshop: "Ramnagar workshop",
      loom: "Pit loom, plain weave",
      weaveTimeWeeks: 4,
      artisanCount: 1,
    },
    garmentType: "saree",
    weave: "bootidar",
    fabric: "muslin-cotton",
    colourFamily: "off-white",
    zariTypes: ["resham"],
    motifs: ["geometric"],
    images: shotTemplate({
      handle: "shubhra",
      colour: "off-white",
      weave: "bootidar",
      motif: "geometric",
      garment: "saree",
      includeBorderFrame: false,
    }),
  },
];

/**
 * Collections.
 *
 * Every one is either a facet result or an editorially-earned campaign
 * (build.md §9.5). Note what is absent: no price-band collections, and no
 * hand-made collection that merely duplicates a facet combination.
 */
export const COLLECTIONS: readonly Collection[] = [
  {
    /*
     * Everything, as a facet collection with no facets selected. It is where
     * "continue shopping" goes from an empty cart or wishlist, and where the
     * homepage's womenswear frame goes — every piece here is womenswear.
     */
    kind: "facet",
    handle: "all",
    title: "All pieces",
    seoIntro:
      "Every piece in the catalogue, sarees and stitched alike, handwoven in Banaras. Narrow it by fabric, weave, colour or zari on the left.",
    facets: {},
  },
  {
    kind: "facet",
    handle: "sarees",
    title: "Sarees",
    seoIntro:
      "Every saree here is woven by hand on a pit loom in Banaras, in silk, cotton or wool, by weavers we buy from directly. Each is a single piece — when it is gone, it is rewoven or it is not made again.",
    facets: { garment: ["saree"] },
  },
  {
    kind: "facet",
    handle: "suits",
    title: "Suits",
    seoIntro:
      "Anarkalis and kurta sets cut from the same handwoven cloth as the sarees, and tailored in Banaras. A stitched piece is made to measure more often than not, so most of these are made to order rather than held in stock.",
    facets: { garment: ["suit"] },
  },
  {
    kind: "facet",
    handle: "dupattas",
    title: "Dupattas",
    seoIntro:
      "Handwoven dupattas in georgette, organza and silk, in the same techniques and from the same looms as the sarees.",
    facets: { garment: ["dupatta"] },
  },
  /*
   * The remaining garment categories.
   *
   * Added 10 Sep 2026: the navigation linked to all four and none existed, so
   * every one of them 404'd. They are facet collections like the three above,
   * keyed on a `garment` value that already lives in taxonomy/facets.json, so
   * they fill themselves the moment a piece of that kind is catalogued and
   * need no maintenance in between.
   */
  {
    kind: "facet",
    handle: "lehengas",
    title: "Lehengas",
    seoIntro:
      "Lehengas cut from handwoven Banarasi cloth and tailored to measure. A skirt this size takes several metres from the same warp, so a piece is woven for it rather than cut from stock.",
    facets: { garment: ["lehenga"] },
  },
  {
    kind: "facet",
    handle: "stoles",
    title: "Stoles",
    seoIntro:
      "Stoles in silk, wool and blends of the two, woven on the same looms as the sarees. The smallest thing we make that still carries a full border.",
    facets: { garment: ["stole"] },
  },
  {
    kind: "facet",
    handle: "blouse-pieces",
    title: "Blouse Pieces",
    seoIntro:
      "Blouse lengths, woven to pair with a saree or to stand against one. Roughly a metre each, in the same fabrics and techniques as the pieces they are meant to sit with.",
    facets: { garment: ["blouse-piece"] },
  },
  {
    kind: "facet",
    handle: "yardage",
    title: "Yardage",
    seoIntro:
      "Handwoven cloth by the metre, unstitched and uncut, for anyone who would rather have it made up their own way.",
    facets: { garment: ["yardage"] },
  },
  {
    kind: "facet",
    handle: "kadhua",
    title: "Kadhua",
    seoIntro:
      "Kadhua enters each motif as a separate unit, with no thread carried behind the cloth. It is the slowest way to weave a Banarasi and the reason the reverse of these pieces reads almost as cleanly as the face.",
    facets: { weave: ["kadhua"] },
  },
  {
    kind: "facet",
    handle: "katan-silk",
    title: "Katan Silk",
    seoIntro:
      "Twisted-filament pure silk — the weight and the fall this category is built on, and the ground most of the older techniques were designed for.",
    facets: { fabric: ["katan-silk"] },
  },
  {
    kind: "campaign",
    handle: "nadi",
    title: "Nadi",
    seoIntro:
      "Nine pieces that follow water through the monsoon — the colour of it before rain, during, and in the days after.",
    campaignSlug: "nadi",
    productHandles: [
      "aparajita-blue-katan-silk-kadhua-saree",
      "kesari-orange-katan-silk-tanchoi-saree",
      "sharada-white-kora-organza-jamdani-saree",
      "vasanti-yellow-sooti-cotton-jamdani-saree",
      "sindoor-red-katan-silk-kadiyal-saree",
      "saanjh-purple-handwoven-georgette-kadhua-dupatta",
      // bela moved out to Katha, which is the only campaign making an argument
      // about narrative weaving; Nadi keeps the pieces about colour.
    ],
  },
  {
    kind: "campaign",
    handle: "antaraal",
    title: "Antaraal",
    seoIntro:
      "The interval — the pause a loom takes between one motif and the next. A study in ground, and in the space that makes a pattern legible.",
    campaignSlug: "antaraal",
    productHandles: [
      "nishith-black-katan-silk-meenakari-saree",
      "chandrika-ivory-tissue-silk-jangla-saree",
      "ambar-blue-katan-silk-rangkat-saree",
      "nilambari-blue-katan-silk-shikargah-saree",
      "hemant-green-silk-wool-tanchoi-stole",
    ],
  },

  /*
   * ── The four the menus advertised and nobody had written ──────────────────
   *
   * Added 12 Sep 2026. These were the last dead links in the navigation: the
   * Shop menu offered Fresh Off the Loom, Back in Stock, Gifts and Bridal, and
   * all four 404d. `navigation.test.ts` tracked them on `NOT_YET_AUTHORED`,
   * which is a backlog, not a fix.
   *
   * They are `edit`, not `facet` and not `campaign`. No facet produces them —
   * there is no occasion facet, and nothing on `Product` records arrival or
   * restock dates — and they have no campaign story behind them. Authored
   * lists, ordered editorially, and they are meant to be re-picked by hand as
   * stock moves rather than left to rot.
   *
   * A short list is honest at this catalogue size. Padding them out with
   * whatever was to hand is how a "Bridal" edit ends up holding a stole.
   */
  /*
   * The two story collections, added 13 Sep 2026.
   *
   * Their campaign pages carry a "discover the collection" button and link the
   * band photographs to the same place, so the page has somewhere to send a
   * reader who wants the pieces rather than the essay. `kala` and `katha` are
   * editorial groupings with no facet behind them — same shape as Bridal and
   * Gifts — so they are `edit`.
   *
   * Handles picked from the photographed set; see the trap in HANDOFF §5.8.2.
   */
  {
    kind: "edit",
    handle: "kala",
    title: "Kala",
    seoIntro:
      "The pieces the Kala story is about — two sarees and two stitched garments — where the weaving is plainly looking at something which was not cloth. Motifs carried across from metal, from tile, from a photograph on a phone.",
    /*
     * Two sarees and two suits, as the campaign listings on this category carry
     * both. Chosen for the argument the story makes rather than for stock: the
     * shikargah is a figure lifted off a hunting field, the jangla is
     * architectural, and the two stitched pieces are where another craft's hand
     * is most obvious.
     *
     * All four are in the photographed set — see the trap in HANDOFF §5.8.2,
     * where a handle outside it renders the collection empty while every test
     * still passes.
     */
    productHandles: [
      "rohini-rose-katan-silk-jangla-saree",
      "suvarna-gold-satin-organza-embroidered-saree",
      "sharvari-sage-chanderi-embroidered-suit",
      "anupama-ivory-muslin-jamdani-anarkali-suit",
    ],
  },
  {
    kind: "edit",
    handle: "awadh",
    title: "Awadh",
    seoIntro:
      "Restraint borrowed from upriver: less zari, more ground, and a palette that stops short of what a Banarasi loom is usually asked for. A sparse field shows every fault, which is the whole difficulty of it.",
    productHandles: [
      "tarini-peach-kora-georgette-meenakari-saree",
      // Was chandrika, which is Antaraal's. A piece in two campaigns weakens
      // both — the listing stops being an argument and becomes a shelf.
      "nayanika-rosegold-organza-embroidered-saree",
      "ksheera-off-white-muslin-cotton-jamdani-suit",
      "baluka-beige-tussar-silk-embroidered-suit",
    ],
  },
  {
    kind: "edit",
    handle: "katha",
    title: "Katha",
    seoIntro:
      "Narrative weaving, in two sarees and two stitched garments — figures, episodes, and the problem of telling a story on a cloth that will be read in fragments, over a shoulder and around a waist.",
    // Two sarees and two suits, none of them shared with Kala: a piece that
    // appears under both campaigns makes neither argument.
    productHandles: [
      "mrinalini-rosewood-katan-silk-shikargah-saree",
      "bela-white-handwoven-georgette-kadhua-saree",
      "madhavi-rose-moonga-silk-anarkali-suit",
      "kaveri-maroon-brocade-kurta-set",
    ],
  },
  {
    kind: "edit",
    handle: "fresh-off-the-loom",
    title: "Fresh Off the Loom",
    seoIntro:
      "The most recent pieces to come off the looms we buy from, cut down and photographed within the fortnight. This is the shortest-lived page on the site — a piece stays on it until the next batch arrives.",
    productHandles: [
      "bela-white-handwoven-georgette-kadhua-saree",
      "ksheera-off-white-muslin-cotton-jamdani-suit",
      "chandrika-ivory-tissue-silk-jangla-saree",
      "shyamala-green-katan-silk-kurta-set",
    ],
  },
  {
    kind: "edit",
    handle: "back-in-stock",
    title: "Back in Stock",
    seoIntro:
      "Pieces that sold, were asked after, and have been rewoven. Nothing here is a reprint in the ordinary sense — a second weaving of the same design is a second piece, with its own irregularities and its own weeks on the loom.",
    productHandles: [
      "sindoor-red-katan-silk-kadiyal-saree",
      "kesari-orange-katan-silk-tanchoi-saree",
      "baluka-beige-tussar-silk-embroidered-suit",
    ],
  },
  {
    kind: "edit",
    handle: "gifts",
    title: "Gifts",
    seoIntro:
      "Pieces that survive being chosen for somebody else: forgiving in size, uncomplicated in colour, and worth keeping whether or not the person already owns something like them. Everything here ships in a cotton sleeve with the weaver and the weeks on the loom written on the card.",
    productHandles: [
      "mridula-mint-katan-silk-stole",
      "arunima-red-linen-handloom-saree",
      "shubhra-off-white-linen-handloom-saree",
      // nayanika belongs to Awadh. Nothing sits in two edits: a piece in two
      // listings makes neither of them mean anything.
    ],
  },
  /*
   * Zarkashi was a facet link — /collections/sarees?zari=real_zari — which is
   * a fine way to reach real-zari pieces and a poor way to name an edit. It
   * now has a page of its own, and a page needs a collection to send people to.
   */
  {
    kind: "edit",
    handle: "zarkashi",
    title: "Zarkashi",
    seoIntro:
      "Real zari: silver thread taken to gold and wound on silk, which is heavier than the substitute, warms in the hand rather than staying cool, and tarnishes over years instead of flaking within one. These are the pieces where it does the most work.",
    productHandles: [
      "damini-red-cotton-jamdani-real-zari-saree",
      "haimavati-off-white-cotton-boota-real-zari-saree",
      "nilaya-navy-cotton-jamdani-real-zari-saree",
    ],
  },
  {
    kind: "edit",
    handle: "bridal",
    title: "Bridal",
    seoIntro:
      "The heavy end of the catalogue — real zari, dense grounds, and the weaving that takes months rather than weeks. Commission early: a bridal piece is between three and six months on the loom, and no amount of asking shortens it.",
    productHandles: [
      "vaidehi-deep-red-satin-silk-kadhua-bridal-saree",
      "urmila-sea-green-katan-silk-kadhua-saree",
      "ilaa-off-white-satin-silk-lehenga-set",
      "amrita-red-embroidered-bridal-odhani",
    ],
  },
];
