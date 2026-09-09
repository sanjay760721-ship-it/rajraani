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
      "bela-white-handwoven-georgette-kadhua-saree",
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
];
