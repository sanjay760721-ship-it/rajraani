module.exports = [
"[project]/.next-internal/server/app/admin/(protected)/menu/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/admin/menu-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0097ce86dad8aae1c05d70f65885cbfc1a7ae7900b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["$$RSC_SERVER_ACTION_0"],
    "403fa11c36df2dd8ba30241d302b3b005b835f41fd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$menu$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveMenuAction"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f$admin$2f28$protected$292f$menu$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$lib$2f$admin$2f$menu$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/admin/(protected)/menu/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/lib/admin/menu-actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$menu$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/menu-actions.ts [app-rsc] (ecmascript)");
}),
"[project]/.next-internal/server/app/admin/(protected)/menu/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/lib/admin/menu-actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$admin$2f28$protected$292f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/admin/(protected)/layout.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$admin$2f$menu$2d$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/admin/menu-actions.ts [app-rsc] (ecmascript)");
;
;
}),
"[project]/src/lib/admin/menu-actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"403fa11c36df2dd8ba30241d302b3b005b835f41fd":{"name":"saveMenuAction"}},"src/lib/admin/menu-actions.ts",""] */ __turbopack_context__.s([
    "saveMenuAction",
    ()=>saveMenuAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content/menu.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
async function saveMenuAction(panels) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["requireAdmin"])();
    const problems = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["menuProblems"])(panels);
    if (problems.length) return {
        ok: false,
        problems
    };
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2f$menu$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["saveMenu"])(panels);
    // The menu is on every page.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
    return {
        ok: true
    };
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    saveMenuAction
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(saveMenuAction, "403fa11c36df2dd8ba30241d302b3b005b835f41fd", null);
}),
"[project]/src/lib/content/menu.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MENU_LIMITS",
    ()=>MENU_LIMITS,
    "getMenu",
    ()=>getMenu,
    "menuProblems",
    ()=>menuProblems,
    "saveMenu",
    ()=>saveMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/db/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data/navigation.ts [app-rsc] (ecmascript)");
;
;
;
/**
 * The site menu, editable from the admin.
 *
 * Until 27 Sep 2026 the menu was only the `NAVIGATION` constant, so adding a
 * campaign or a story to a dropdown needed a developer. It is now one `setting`
 * row; `NAVIGATION` remains the default a fresh database shows, and the shape
 * the code's tests hold to.
 *
 * The limits below are the design's, not arbitrary: six top items because the
 * header splits them three and three around the centred wordmark, and a
 * dropdown holds at most four columns and three photo tiles in its 1200px box.
 */ const KEY = "site.menu";
const MENU_LIMITS = {
    panels: 6,
    columns: 4,
    linksPerColumn: 14,
    tiles: 3,
    topLabel: 20,
    label: 40
};
async function getMenu() {
    try {
        const row = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare("SELECT value_json FROM setting WHERE key = ?").get(KEY);
        if (!row) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NAVIGATION"];
        const value = JSON.parse(row.value_json);
        return Array.isArray(value) && value.length === MENU_LIMITS.panels ? value : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NAVIGATION"];
    } catch  {
        // A bad row must never take the header off every page.
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2f$navigation$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NAVIGATION"];
    }
}
const HREF = /^(\/[^\s]*|https:\/\/[^\s]+|mailto:[^\s]+)$/;
function menuProblems(panels) {
    const problems = [];
    if (!Array.isArray(panels) || panels.length !== MENU_LIMITS.panels) {
        return [
            "The menu must have exactly six top items."
        ];
    }
    panels.forEach((panel, index)=>{
        const name = panel.label?.trim() || `Top item ${index + 1}`;
        if (!panel.label?.trim()) problems.push(`Top item ${index + 1} needs a name.`);
        if ((panel.label ?? "").length > MENU_LIMITS.topLabel) problems.push(`“${name}” is too long for the menu bar — keep it under ${MENU_LIMITS.topLabel} letters.`);
        if (!HREF.test(panel.href ?? "")) problems.push(`Choose where “${name}” goes when clicked.`);
        if ((panel.columns ?? []).length > MENU_LIMITS.columns) problems.push(`“${name}” has more than ${MENU_LIMITS.columns} columns.`);
        if ((panel.tiles ?? []).length > MENU_LIMITS.tiles) problems.push(`“${name}” has more than ${MENU_LIMITS.tiles} photo tiles.`);
        for (const column of panel.columns ?? []){
            if (!column.heading?.trim()) problems.push(`A column in “${name}” needs a heading.`);
            if (column.links.length > MENU_LIMITS.linksPerColumn) problems.push(`“${column.heading}” in “${name}” has more than ${MENU_LIMITS.linksPerColumn} links.`);
            for (const link of column.links){
                if (!link.label?.trim()) problems.push(`A link in “${column.heading}” (${name}) has no text.`);
                if ((link.label ?? "").length > MENU_LIMITS.label) problems.push(`“${link.label}” is too long.`);
                if (!HREF.test(link.href ?? "")) problems.push(`Choose where “${link.label || "a link"}” in “${column.heading}” goes.`);
            }
        }
        for (const tile of panel.tiles ?? []){
            if (!tile.label?.trim()) problems.push(`A photo tile in “${name}” needs a caption.`);
            if (!HREF.test(tile.href ?? "")) problems.push(`Choose where the “${tile.label || "photo"}” tile in “${name}” goes.`);
        }
    });
    return problems;
}
async function saveMenu(panels) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$db$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"])().prepare(`INSERT INTO setting (key, value_json, updated_at) VALUES (?, ?, datetime('now'))
       ON CONFLICT(key) DO UPDATE SET value_json = excluded.value_json, updated_at = excluded.updated_at`).run(KEY, JSON.stringify(panels));
}
}),
"[project]/src/lib/data/navigation.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Relative, like every sibling in this directory: the `@/` alias is a bundler
// concern and `node --test` does not resolve it, so an aliased import here is
// what kept this module untestable.
/**
 * Site navigation.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ARCHITECTURE inherited from the category, CONTENT ours.
 *
 * Six panels, split three either side of the centred wordmark, each panel a set
 * of link columns plus image tiles. That shape is a solved merchandising
 * problem for a catalogue this deep and build.md's scope note is explicit that
 * structure is what we copy.
 *
 * What is NOT inherited: collection and campaign names. Those are a house's
 * identity, and the reference site's were sitting in this file until 22 Aug
 * 2026 — see HANDOFF §2.49. The names below are ours.
 *
 * WEAVE AND FABRIC NAMES ARE NEITHER. `kadhua`, `katan silk`, `tanchoi` and the
 * rest are the craft's own technical vocabulary, documented in
 * taxonomy/facets.json, and they belong to Banaras rather than to any shop in
 * it. They are used here as facet values, which is why those links carry query
 * strings: they resolve to a real filtered PLP rather than to a hand-built
 * landing page that has to be maintained separately.
 *
 * ── Two destinations, and only two (12 Sep 2026) ────────────────────────────
 *
 * Every entry in this tree lands on one of exactly two kinds of page:
 *
 *   /collections/<handle>   shoppable — a facet result or an authored edit
 *   /pages/<slug>           editorial — a campaign story or a craft piece
 *
 * A campaign has one of each, cross-linked, and they are deliberately not
 * merged (build.md §3). Nothing in the menus points anywhere else: there is no
 * `/blogs` route in this build, so the Journal column that used to sit under
 * Stories advertised five pages that did not exist. `navigation.test.ts` now
 * holds both halves of that rule — collection handles must exist, and page
 * slugs must exist.
 *
 * The tree was cut back to this shape on 12 Sep 2026. It had been a map of a
 * catalogue several times the size of ours: ten campaigns where we have run
 * four, twelve styling edits with nothing to put in them, four garment
 * categories we do not make. A menu that advertises more than the shop holds
 * reads as a shop that has sold out.
 * ─────────────────────────────────────────────────────────────────────────────
 */ __turbopack_context__.s([
    "LEFT_NAVIGATION",
    ()=>LEFT_NAVIGATION,
    "NAVIGATION",
    ()=>NAVIGATION,
    "RIGHT_NAVIGATION",
    ()=>RIGHT_NAVIGATION
]);
/** Facet-filtered PLP. One place that builds these, so the shape stays right. */ const facet = (group, value)=>`/collections/sarees?${group}=${value}`;
const NAVIGATION = [
    /* ─── 1 · Shop ─────────────────────────────────────────────────────────── */ {
        id: "shop",
        label: "Shop",
        href: "/collections/sarees",
        links: [
            {
                label: "Sarees",
                href: "/collections/sarees"
            },
            {
                label: "Suits",
                href: "/collections/suits"
            },
            {
                label: "Fresh Off the Loom",
                href: "/collections/fresh-off-the-loom"
            },
            {
                label: "Ready to Ship",
                href: "/collections/sarees?fulfilment=ready_to_ship"
            },
            {
                label: "Gifts",
                href: "/collections/gifts"
            }
        ],
        columns: [
            {
                heading: "New Arrivals",
                links: [
                    {
                        label: "Fresh Off the Loom",
                        href: "/collections/fresh-off-the-loom"
                    },
                    {
                        label: "Back in Stock",
                        href: "/collections/back-in-stock"
                    },
                    {
                        label: "Ready to Ship",
                        href: "/collections/sarees?fulfilment=ready_to_ship"
                    },
                    {
                        label: "Made to Order",
                        href: "/collections/sarees?fulfilment=made_to_order"
                    },
                    {
                        label: "Pre-Order",
                        href: "/collections/sarees?fulfilment=pre_order"
                    },
                    {
                        label: "Gifts",
                        href: "/collections/gifts"
                    }
                ]
            },
            {
                /*
         * Two entries, and that is the whole catalogue.
         *
         * We weave sarees and we tailor suits. The column listed nine garment
         * types until 12 Sep 2026 — dupattas, lehengas, stoles, blouse pieces,
         * yardage, menswear, womenswear — and seven of them had nothing
         * catalogued behind them.
         */ heading: "Clothing",
                links: [
                    {
                        label: "Sarees",
                        href: "/collections/sarees"
                    },
                    {
                        label: "Suits",
                        href: "/collections/suits"
                    }
                ]
            },
            {
                /*
         * Each of these now opens on a page of its own rather than dropping
         * straight into a grid, which is how the reference treats them. The
         * page carries the argument and a button through to the listing.
         *
         * Handwoven Fabrics removed 13 Sep 2026: it pointed at
         * /collections/yardage, and there is no yardage in the catalogue.
         */ heading: "Featured",
                links: [
                    {
                        label: "Bridal",
                        href: "/pages/bridal"
                    },
                    {
                        label: "Gifting",
                        href: "/pages/gifts"
                    },
                    {
                        label: "Zarkashi",
                        href: "/pages/zarkashi"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "Bridal",
                href: "/collections/bridal",
                tone: "pink",
                src: "/homepage/featured/bridal-amrita-hero-mob.jpg"
            },
            {
                label: "Gifting",
                href: "/collections/gifts",
                tone: "gold",
                src: "/homepage/featured/gifts-hero-mob.jpg"
            }
        ]
    },
    /* ─── 2 · Collections ──────────────────────────────────────────────────── */ {
        id: "collections",
        label: "Collections",
        href: "/collections/kadhua",
        links: [
            {
                label: "Kadhua",
                href: "/collections/kadhua"
            },
            {
                label: "Katan Silk",
                href: "/collections/katan-silk"
            }
        ],
        columns: [
            {
                heading: "Weaves & Patterns",
                links: [
                    {
                        label: "Kadhua",
                        href: "/collections/kadhua"
                    },
                    {
                        label: "Kadiyal",
                        href: facet("weave", "kadiyal")
                    },
                    {
                        label: "Jangla",
                        href: facet("weave", "jangla")
                    },
                    {
                        label: "Jamawar",
                        href: facet("weave", "jamawar")
                    },
                    {
                        label: "Tanchoi",
                        href: facet("weave", "tanchoi")
                    },
                    {
                        label: "Cutwork",
                        href: facet("weave", "cutwork")
                    },
                    {
                        label: "Jamdani",
                        href: facet("weave", "jamdani")
                    },
                    {
                        label: "Rangkat",
                        href: facet("weave", "rangkat")
                    },
                    {
                        label: "Bootidar",
                        href: facet("weave", "bootidar")
                    },
                    {
                        label: "Meenakari",
                        href: facet("motif", "meenakari")
                    },
                    {
                        label: "Shikargah",
                        href: facet("motif", "shikargah")
                    }
                ]
            },
            {
                heading: "Fabrics",
                links: [
                    {
                        label: "Katan Silk",
                        href: "/collections/katan-silk"
                    },
                    {
                        label: "Kora Organza",
                        href: facet("fabric", "kora-organza")
                    },
                    {
                        label: "Khaddi Georgette",
                        href: facet("fabric", "khaddi-georgette")
                    },
                    {
                        label: "Georgette",
                        href: facet("fabric", "georgette")
                    },
                    {
                        label: "Tissue Silk",
                        href: facet("fabric", "tissue-silk")
                    },
                    {
                        label: "Satin Silk",
                        href: facet("fabric", "satin-silk")
                    },
                    {
                        label: "Tussar Silk",
                        href: facet("fabric", "tussar-silk")
                    },
                    {
                        label: "Muslin Cotton",
                        href: facet("fabric", "muslin-cotton")
                    },
                    {
                        label: "Silk Wool",
                        href: facet("fabric", "silk-wool")
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "On kadhua",
                href: "/pages/kadhua",
                tone: "gold",
                src: "/homepage/mega-menu/kadhua.jpg"
            },
            {
                label: "Katan Silk",
                href: "/collections/katan-silk",
                tone: "maroon",
                src: "/homepage/mega-menu/katan-silk.jpg"
            }
        ]
    },
    /* ─── 3 · Campaigns ────────────────────────────────────────────────────── */ {
        id: "campaigns",
        label: "Campaigns",
        href: "/collections/nadi",
        links: [
            {
                label: "Nadi",
                href: "/collections/nadi"
            },
            {
                label: "Antaraal",
                href: "/collections/antaraal"
            },
            {
                label: "Awadh",
                href: "/collections/awadh"
            },
            {
                label: "Kala",
                href: "/pages/kala"
            },
            {
                label: "Katha",
                href: "/pages/katha"
            }
        ],
        columns: [
            {
                /*
         * Three campaigns, each with a collection behind it. The column listed
         * ten until 12 Sep 2026 and eight of them had neither a collection nor
         * a story — the rule since is that nothing goes in here until both
         * halves exist.
         */ heading: "Shop by Campaign",
                links: [
                    {
                        label: "Nadi",
                        href: "/collections/nadi"
                    },
                    {
                        label: "Antaraal",
                        href: "/collections/antaraal"
                    },
                    {
                        label: "Awadh",
                        href: "/collections/awadh"
                    }
                ]
            },
            {
                /*
         * The two story pages. These resolve to `/pages` — the essay is the
         * point — and each one carries its own button through to the pieces, so
         * a reader who wants the listing rather than the writing is one click
         * away rather than stuck.
         */ heading: "Featured Campaign",
                links: [
                    {
                        label: "Kala",
                        href: "/pages/kala"
                    },
                    {
                        label: "Katha",
                        href: "/pages/katha"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "Nadi",
                href: "/pages/nadi",
                tone: "black",
                src: "/homepage/mega-menu/nadi.jpg"
            },
            {
                label: "Antaraal",
                href: "/pages/antaraal",
                tone: "purple",
                src: "/homepage/mega-menu/antaraal.jpg"
            }
        ]
    },
    /* ─── 4 · Crafts ───────────────────────────────────────────────────────── */ {
        id: "craft",
        label: "Crafts",
        href: "/pages/art-collectibles",
        links: [
            {
                label: "Art & Collectibles",
                href: "/pages/art-collectibles"
            }
        ],
        columns: [
            {
                heading: "Metal",
                links: [
                    {
                        label: "Art & Collectibles",
                        href: "/pages/art-collectibles"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "Art & Collectibles",
                href: "/pages/art-collectibles",
                tone: "gold",
                src: "/homepage/craft/craft-hero-mob.jpg"
            }
        ]
    },
    /* ─── 5 · Stories ──────────────────────────────────────────────────────── */ {
        id: "stories",
        label: "Stories",
        href: "/pages/kala",
        links: [
            {
                label: "Kala",
                href: "/pages/kala"
            },
            {
                label: "Katha",
                href: "/pages/katha"
            }
        ],
        columns: [
            {
                heading: "Spirit of Creation",
                links: [
                    {
                        label: "Kala",
                        href: "/pages/kala"
                    },
                    {
                        label: "Katha",
                        href: "/pages/katha"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "Kala",
                href: "/pages/kala",
                tone: "maroon",
                src: "/homepage/campaign/kala.webp"
            },
            {
                label: "Katha",
                href: "/pages/katha",
                tone: "green",
                src: "/homepage/campaigns/katha-band-01.jpg"
            }
        ]
    },
    /* ─── 6 · About Us ─────────────────────────────────────────────────────── */ {
        id: "about",
        label: "About Us",
        href: "/pages/our-story",
        links: [
            {
                label: "Our story",
                href: "/pages/our-story"
            },
            {
                label: "Our Banaras store",
                href: "/pages/banaras-store"
            },
            {
                label: "FAQs",
                href: "/pages/faqs"
            },
            {
                label: "Contact us",
                href: "/pages/contact"
            }
        ],
        columns: [
            {
                heading: "About Us",
                links: [
                    {
                        label: "Our story",
                        href: "/pages/our-story"
                    },
                    {
                        label: "Our Banaras store",
                        href: "/pages/banaras-store"
                    },
                    {
                        label: "FAQs",
                        href: "/pages/faqs"
                    },
                    {
                        label: "Contact us",
                        href: "/pages/contact"
                    }
                ]
            }
        ],
        tiles: [
            {
                label: "Our Banaras store",
                href: "/pages/banaras-store",
                tone: "black",
                src: "/homepage/stores/varanasi.webp"
            },
            {
                label: "Our story",
                href: "/pages/our-story",
                tone: "maroon",
                src: "/homepage/about/story-band-02.jpg"
            }
        ]
    }
];
const LEFT_NAVIGATION = NAVIGATION.slice(0, 3);
const RIGHT_NAVIGATION = NAVIGATION.slice(3, 6);
}),
];

//# sourceMappingURL=_02ac229._.js.map