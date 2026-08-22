// GENERATED FILE — DO NOT EDIT.
// Source: taxonomy/facets.json
// Regenerate: npm run taxonomy
//
// The JSON is the source of truth and the reviewable artefact; this module
// exists so the vocabulary can be bundled into client components. See
// taxonomy/REVIEW.md for the 11 decisions still open.

export type RawFacetValue = {
  canonical: string;
  label: string;
  hex?: string | null;
  aliases?: string[];
  definition?: string;
  review?: boolean;
  decision?: string;
  source?: string;
};

export type RawFacetGroup = {
  label?: string;
  note?: string;
  metaobject?: string;
  metafield?: string;
  derived?: boolean;
  computed?: boolean;
  multiSelect?: boolean;
  values?: RawFacetValue[];
};

export const FACETS: Record<string, RawFacetGroup> = {
  "garment": {
    "label": "Garment",
    "metaobject": "garment",
    "values": [
      {
        "canonical": "saree",
        "label": "Saree",
        "aliases": [
          "sari",
          "sarees",
          "saris",
          "seere"
        ]
      },
      {
        "canonical": "dupatta",
        "label": "Dupatta",
        "aliases": [
          "dupattas",
          "odhni",
          "chunni"
        ]
      },
      {
        "canonical": "lehenga",
        "label": "Lehenga",
        "aliases": [
          "lehengas",
          "lehanga",
          "ghagra"
        ]
      },
      {
        "canonical": "suit",
        "label": "Suit",
        "aliases": [
          "suits",
          "anarkali",
          "anarkalis",
          "kurta-set",
          "kurta-sets",
          "salwar-suit",
          "salwar-kameez",
          "churidar-set",
          "sharara-set"
        ],
        "definition": "A stitched multi-piece ensemble — kurta or anarkali with churidar, salwar or palazzo, usually with a dupatta. Tailored from cloth rather than woven to shape, which is why it is the first garment in this vocabulary that may carry no `weave`.",
        "review": true,
        "decision": "ADDED 22 Aug 2026 to admit the first stitched garments to the catalogue. Two things need a domain reviewer. (1) Is `suit` the right umbrella, or should `anarkali`, `kurta-set` and `sharara-set` be siblings rather than aliases? Aliasing them is reversible now and becomes a URL later — the same argument that made `kadhua` worth confirming. (2) A suit is the only garment here assembled from several cloths, so `fabric` and `weave` describe its principal piece and silently drop the dupatta and churidar. If that matters commercially it wants a component model, not a facet."
      },
      {
        "canonical": "stole",
        "label": "Stole",
        "aliases": [
          "stoles",
          "scarf",
          "scarves"
        ]
      },
      {
        "canonical": "blouse-piece",
        "label": "Blouse piece",
        "aliases": [
          "blouse",
          "blouses",
          "blouse-fabric",
          "choli-piece"
        ]
      },
      {
        "canonical": "yardage",
        "label": "Fabric by the metre",
        "aliases": [
          "fabric",
          "running-fabric",
          "by-the-metre",
          "fabric-length"
        ]
      }
    ]
  },
  "weave": {
    "label": "Weave",
    "metaobject": "weave",
    "note": "Loom technique only. Dyeing and surface treatments (bandhani, batik) are deliberately excluded — they are not weaves, and mixing them here is how a taxonomy starts to rot.",
    "values": [
      {
        "canonical": "kadhua",
        "label": "Kadhua",
        "aliases": [
          "kadwa",
          "kadua",
          "kadhwa",
          "kadhuwa",
          "kadva"
        ],
        "definition": "Discontinuous supplementary weft. Each motif is woven separately with its own small shuttle, so nothing floats behind the ground and the reverse is clean.",
        "review": true,
        "decision": "MEASURED 50/50 — `kadhua*` 16 tag variants, `kadwa*` 16 on the reference catalogue. No frequency signal exists to break the tie. Recommending `kadhua` because it transliterates the aspirated Devanagari form more faithfully and is the spelling used in most published Banarasi literature. THIS IS THE SINGLE JUDGEMENT MOST WORTH A WEAVER'S CONFIRMATION — it is cheap to flip now and expensive after launch, because it becomes a URL."
      },
      {
        "canonical": "kadiyal",
        "label": "Kadiyal",
        "aliases": [
          "kadial",
          "kadhiyal",
          "kadiyal-border",
          "koradi"
        ],
        "definition": "Interlocked warp and weft so the border and body are woven in genuinely different colours, not printed or attached.",
        "review": true,
        "decision": "`koradi` listed as an alias tentatively — confirm it refers to the same construction and is not a separate regional technique."
      },
      {
        "canonical": "jangla",
        "label": "Jangla",
        "aliases": [
          "jangala",
          "jungla"
        ],
        "definition": "Dense all-over creeper and vine patterning covering the full ground.",
        "review": true,
        "decision": "COLLISION: `jangla` reads as both a weave-density style and a motif family. Modelled here as a weave and deliberately NOT repeated under motif — a value that lives in two facets makes counts double and shoppers distrust them."
      },
      {
        "canonical": "jamawar",
        "label": "Jamawar",
        "aliases": [
          "jamavar",
          "jamewar"
        ],
        "definition": "Shawl-derived all-over ornamentation, densely patterned across the field."
      },
      {
        "canonical": "tanchoi",
        "label": "Tanchoi",
        "aliases": [
          "tanchui",
          "tanchoi-silk"
        ],
        "definition": "Extra-weft satin weave with no floats on the reverse; pattern comes from weft colour, not added zari."
      },
      {
        "canonical": "cutwork",
        "label": "Cutwork",
        "aliases": [
          "fekuwa",
          "phekuwa",
          "fekua",
          "cut-work",
          "cutwork-jamdani"
        ],
        "definition": "Continuous supplementary weft carried across the width, with the floats cut away after weaving."
      },
      {
        "canonical": "jamdani",
        "label": "Jamdani",
        "aliases": [
          "jamdhani",
          "jamadani"
        ],
        "definition": "Discontinuous supplementary weft on a fine ground, motif built by hand at the loom."
      },
      {
        "canonical": "rangkat",
        "label": "Rangkat",
        "aliases": [
          "rangkaat",
          "rang-kat"
        ],
        "definition": "Ground pieced from blocks of different colours joined within the weave itself."
      },
      {
        "canonical": "bootidar",
        "label": "Bootidar",
        "aliases": [
          "butidar",
          "bootidaar",
          "butidaar"
        ],
        "definition": "Ground scattered with regularly repeating small motifs.",
        "review": true,
        "decision": "Borderline — arguably a motif layout rather than a weave. Kept here because merchandisers describe pieces this way. Flag if it belongs under motif instead."
      }
    ]
  },
  "fabric": {
    "label": "Fabric",
    "metaobject": "fabric",
    "values": [
      {
        "canonical": "katan-silk",
        "label": "Katan silk",
        "aliases": [
          "katan",
          "pure-katan",
          "katan-pure-silk"
        ],
        "definition": "Twisted filament pure silk. The default Banarasi ground."
      },
      {
        "canonical": "kora-organza",
        "label": "Kora (organza) silk",
        "aliases": [
          "kora",
          "organza",
          "kora-silk",
          "organza-silk",
          "kora-by-cotton"
        ]
      },
      {
        "canonical": "khaddi-georgette",
        "label": "Khaddi georgette",
        "aliases": [
          "khaddi",
          "khadi-georgette",
          "handwoven-georgette",
          "khaddi-chiffon"
        ],
        "review": true,
        "decision": "`khaddi` here means handwoven-on-pit-loom georgette, NOT khadi hand-spun cotton. Same transliteration, different material. Confirm the label reads unambiguously to a shopper — if not, rename the label (free) rather than the canonical (a migration)."
      },
      {
        "canonical": "georgette",
        "label": "Georgette",
        "aliases": [
          "georgett",
          "gerogette",
          "pure-georgette"
        ]
      },
      {
        "canonical": "tissue-silk",
        "label": "Tissue silk",
        "aliases": [
          "tissue",
          "tissue-by-cotton"
        ],
        "review": true,
        "decision": "COLLISION: `tissue` also names a weave effect (metallic zari in the weft). Held as a fabric only. Confirm merchandisers agree."
      },
      {
        "canonical": "satin-silk",
        "label": "Satin silk",
        "aliases": [
          "satin",
          "satin-tanchoi"
        ]
      },
      {
        "canonical": "tussar-silk",
        "label": "Tussar silk",
        "aliases": [
          "tussar",
          "tussah",
          "tasar",
          "kosa",
          "kosa-silk"
        ]
      },
      {
        "canonical": "muslin-cotton",
        "label": "Muslin cotton",
        "aliases": [
          "muslin",
          "cotton",
          "pure-cotton",
          "malmal"
        ]
      },
      {
        "canonical": "silk-wool",
        "label": "Silk wool",
        "aliases": [
          "silk-and-wool",
          "wool-silk"
        ]
      },
      {
        "canonical": "moonga-silk",
        "label": "Moonga silk",
        "aliases": [
          "moonga",
          "muga",
          "munga"
        ]
      }
    ]
  },
  "zari": {
    "label": "Zari",
    "note": "Fixed by build.md §2.1 as list.single_line_text — a product may carry more than one. Not a metaobject; the set is small, closed, and stable.",
    "multiSelect": true,
    "values": [
      {
        "canonical": "real_zari",
        "label": "Real zari",
        "aliases": [
          "real-zari",
          "pure-zari",
          "asli-zari",
          "gold-zari-real"
        ],
        "definition": "Silver thread gilded with gold, tested and certified."
      },
      {
        "canonical": "roopa_sona",
        "label": "Roopa sona",
        "aliases": [
          "roopa-sona",
          "rupa-sona",
          "roopasona"
        ],
        "definition": "Silver-and-gold zari, the traditional half-fine quality."
      },
      {
        "canonical": "gold",
        "label": "Gold zari",
        "aliases": [
          "gold-zari",
          "golden-zari",
          "sona"
        ]
      },
      {
        "canonical": "silver",
        "label": "Silver zari",
        "aliases": [
          "silver-zari",
          "chandi",
          "silver-tested"
        ]
      },
      {
        "canonical": "resham",
        "label": "Resham",
        "aliases": [
          "reshm",
          "silk-thread",
          "resham-work"
        ],
        "definition": "Silk thread rather than metallic — no zari content."
      }
    ]
  },
  "motif": {
    "label": "Motif",
    "metaobject": "motif",
    "multiSelect": true,
    "values": [
      {
        "canonical": "booti",
        "label": "Booti",
        "aliases": [
          "buti",
          "bootis",
          "butis",
          "booty",
          "kadwa-booti",
          "kadhua-booti"
        ],
        "definition": "Small scattered motif, repeated across the ground.",
        "review": true,
        "decision": "`booti` and `boota` are DIFFERENT SIZES OF THE SAME IDEA, not spelling variants. They are kept as separate concepts on purpose. A naive normalisation script would merge them and destroy a distinction merchandisers rely on — this is exactly the reconciliation pre-build-gaps §1 says a regex cannot do."
      },
      {
        "canonical": "boota",
        "label": "Boota",
        "aliases": [
          "buta",
          "butta",
          "bootas",
          "butas"
        ],
        "definition": "Larger standalone motif, typically placed with space around it.",
        "review": true,
        "decision": "MEASURED `boota*` 26 variants vs `buta*` 2. Frequency is decisive here, unlike kadhua/kadwa — recommending `boota`."
      },
      {
        "canonical": "jaal",
        "label": "Jaal",
        "aliases": [
          "jal",
          "jaal-work",
          "net"
        ],
        "definition": "All-over lattice or net of connected motifs.",
        "review": true,
        "decision": "`jaali` deliberately NOT aliased — it more often names pierced/openwork rather than the lattice layout. Confirm."
      },
      {
        "canonical": "konia",
        "label": "Konia",
        "aliases": [
          "koniya",
          "kaniya",
          "corner-motif",
          "konia-work"
        ],
        "definition": "Corner motif, placed at the pallu or across the fall."
      },
      {
        "canonical": "paisley",
        "label": "Paisley (ambi)",
        "aliases": [
          "ambi",
          "aam",
          "keri",
          "mango",
          "paisely",
          "kalka"
        ],
        "review": true,
        "decision": "`paisely` is a misspelling present in the reference data — kept as an import alias only. Deciding whether the shopper-facing label is \"Paisley\" or \"Ambi\" is a brand-voice call, not a data call."
      },
      {
        "canonical": "meenakari",
        "label": "Meenakari",
        "aliases": [
          "meena",
          "mina",
          "minakari",
          "meenakaari",
          "meena-work"
        ],
        "definition": "Coloured resham worked inside or alongside zari motifs, giving an enamelled effect.",
        "review": true,
        "decision": "MEASURED `meena*` 38 vs `mina*` 1 — frequency decisive. Also a TECHNIQUE/MOTIF collision: it describes how a motif is coloured, not the motif's shape. Held under motif because that is where shoppers look for it. Flag if you disagree."
      },
      {
        "canonical": "shikargah",
        "label": "Shikargah",
        "aliases": [
          "shikaargah",
          "shikargarh",
          "hunting-scene"
        ],
        "definition": "Hunting-scene narrative field with animals, birds and foliage."
      },
      {
        "canonical": "bel",
        "label": "Bel",
        "aliases": [
          "bail",
          "belwork",
          "creeper",
          "vine"
        ],
        "definition": "Running creeper, most often along a border."
      },
      {
        "canonical": "floral",
        "label": "Floral",
        "aliases": [
          "phool",
          "phul",
          "flower",
          "flowers",
          "gulab"
        ]
      },
      {
        "canonical": "geometric",
        "label": "Geometric",
        "aliases": [
          "geometry",
          "geometrical",
          "chevron",
          "stripe",
          "checks"
        ]
      },
      {
        "canonical": "bird-animal",
        "label": "Bird & animal",
        "aliases": [
          "bird",
          "birds",
          "peacock",
          "mor",
          "parrot",
          "tota",
          "elephant",
          "haathi",
          "animal"
        ]
      }
    ]
  },
  "colour": {
    "label": "Colour",
    "metaobject": "colour",
    "note": "pre-build-gaps §1 measured 207 colour-ish tags on the reference catalogue. This collapses to 17 families. The precise shade belongs in the `spec_color` metafield as prose — it is copy, not a facet. Shoppers filter by family and read for shade.",
    "values": [
      {
        "canonical": "red",
        "label": "Red",
        "hex": "#B02020",
        "aliases": [
          "scarlet",
          "crimson",
          "sindoori",
          "lal",
          "cherry"
        ]
      },
      {
        "canonical": "maroon",
        "label": "Maroon",
        "hex": "#6E1B24",
        "aliases": [
          "wine",
          "burgundy",
          "oxblood",
          "deep-red"
        ]
      },
      {
        "canonical": "pink",
        "label": "Pink",
        "hex": "#D46A8B",
        "aliases": [
          "rose",
          "blush",
          "rani-pink",
          "gulabi",
          "fuchsia",
          "magenta"
        ]
      },
      {
        "canonical": "orange",
        "label": "Orange",
        "hex": "#D2691E",
        "aliases": [
          "rust",
          "terracotta",
          "peach",
          "coral",
          "narangi"
        ]
      },
      {
        "canonical": "yellow",
        "label": "Yellow",
        "hex": "#D9A404",
        "aliases": [
          "mustard",
          "haldi",
          "lemon",
          "ochre",
          "peela"
        ]
      },
      {
        "canonical": "gold",
        "label": "Gold",
        "hex": "#B08D3F",
        "aliases": [
          "golden",
          "antique-gold",
          "sona",
          "champagne"
        ]
      },
      {
        "canonical": "green",
        "label": "Green",
        "hex": "#2E6B45",
        "aliases": [
          "emerald",
          "olive",
          "mehendi",
          "hara",
          "bottle-green",
          "sage"
        ]
      },
      {
        "canonical": "teal",
        "label": "Teal",
        "hex": "#1F6B6B",
        "aliases": [
          "turquoise",
          "aqua",
          "sea-green",
          "firozi"
        ]
      },
      {
        "canonical": "blue",
        "label": "Blue",
        "hex": "#2A5599",
        "aliases": [
          "sky",
          "cobalt",
          "peacock-blue",
          "neela",
          "powder-blue"
        ]
      },
      {
        "canonical": "indigo",
        "label": "Indigo",
        "hex": "#2A3A6B",
        "aliases": [
          "navy",
          "midnight",
          "neel",
          "ink-blue"
        ]
      },
      {
        "canonical": "purple",
        "label": "Purple",
        "hex": "#5B3A78",
        "aliases": [
          "violet",
          "lilac",
          "lavender",
          "mauve",
          "baingani",
          "plum"
        ]
      },
      {
        "canonical": "black",
        "label": "Black",
        "hex": "#1A1614",
        "aliases": [
          "kala",
          "jet-black",
          "charcoal"
        ]
      },
      {
        "canonical": "white",
        "label": "White",
        "hex": "#FFFFFF",
        "aliases": [
          "pure-white",
          "safed"
        ]
      },
      {
        "canonical": "off-white",
        "label": "Off-white",
        "hex": "#EFE7DA",
        "aliases": [
          "offwhite",
          "ivory",
          "cream",
          "ecru",
          "champagne-white",
          "chalk"
        ]
      },
      {
        "canonical": "grey",
        "label": "Grey",
        "hex": "#7A736C",
        "aliases": [
          "gray",
          "silver-grey",
          "slate",
          "steel"
        ]
      },
      {
        "canonical": "brown",
        "label": "Brown",
        "hex": "#6B4A2F",
        "aliases": [
          "coffee",
          "chocolate",
          "tan",
          "bronze",
          "beige",
          "sand",
          "khaki",
          "camel"
        ]
      },
      {
        "canonical": "multicolour",
        "label": "Multicolour",
        "hex": null,
        "aliases": [
          "multi",
          "multicolor",
          "rainbow",
          "rangkat-multi",
          "assorted"
        ]
      }
    ]
  },
  "availability": {
    "label": "Availability",
    "note": "pre-build-gaps §2: 49% of the reference catalogue is sold out. This is not an edge case — it is half the catalogue, and the arithmetic consequence of unique-piece inventory. It must be a first-class facet with honest counts, or shoppers filter into empty grids.",
    "derived": true,
    "values": [
      {
        "canonical": "available",
        "label": "Available",
        "source": "Shopify variant availableForSale"
      },
      {
        "canonical": "sold-out",
        "label": "Sold out",
        "source": "Shopify variant availableForSale"
      }
    ]
  },
  "fulfilment": {
    "label": "Dispatch",
    "note": "pre-build-gaps §3: the reference site encoded 'Pre-Order:' into 463 product TITLES, so it leaked into breadcrumbs, og:title, cart lines and JSON-LD. Acceptance criterion: no fulfilment state may ever appear in a product title. Badging is presentation and belongs to the template.",
    "metafield": "fulfilment_mode",
    "values": [
      {
        "canonical": "ready_to_ship",
        "label": "Ready to ship"
      },
      {
        "canonical": "made_to_order",
        "label": "Made to order"
      },
      {
        "canonical": "pre_order",
        "label": "Pre-order"
      }
    ]
  },
  "price": {
    "label": "Price",
    "computed": true,
    "note": "No stored values, by design. Bands are computed at query time from Algolia numeric faceting, per currency. build.md §2.1: storing `over-40000` as a tag breaks the moment a price changes or a shopper switches to one of the other 7 markets."
  }
};
