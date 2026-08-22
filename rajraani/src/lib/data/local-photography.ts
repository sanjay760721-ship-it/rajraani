import { existsSync, readdirSync } from "node:fs";
import path from "node:path";

import type { Product, ProductImage } from "../domain/types.ts";

/**
 * The local photography overlay.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * Why this exists rather than `src` in the fixtures.
 *
 * build.md §6 forbids competitor imagery anywhere in the repository, fixtures
 * included, and `catalogue.test.ts` enforces it by asserting that every fixture
 * frame carries no `src` — "no competitor asset can reach the build if no
 * fixture points off-site". Putting real reference photography into the
 * fixtures breaks that guard by design, and the guard is worth more than the
 * convenience.
 *
 * So the overlay is applied at the repository seam instead. The committed
 * catalogue stays clean and provably so; what a developer sees locally is the
 * catalogue plus whatever happens to be staged on their disk. Nothing here
 * reads a path that is committed, and with the staging directory absent — which
 * is the state of every fresh clone and every CI run — this module returns an
 * empty map and the site renders exactly the placeholder frames it did before.
 *
 * Staged by `scripts/import-local-photos.mjs`. See HANDOFF §2.45 decision 1.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const STAGE_DIR = path.join(process.cwd(), "public", "reference-only", "products");
const PUBLIC_PREFIX = "/reference-only/products";
const IMAGE_EXT = new Set([".webp", ".jpg", ".jpeg", ".png", ".avif"]);

const collator = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

/**
 * Read once per process. The staging directory does not change while the server
 * runs, and doing this per request would stat the disk on every product view.
 * Restart the dev server after re-running the import script.
 */
function readStagedPhotography(): ReadonlyMap<string, readonly string[]> {
  const staged = new Map<string, readonly string[]>();
  if (!existsSync(STAGE_DIR)) return staged;

  for (const entry of readdirSync(STAGE_DIR, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const files = readdirSync(path.join(STAGE_DIR, entry.name))
      .filter((name) => IMAGE_EXT.has(path.extname(name).toLowerCase()))
      .sort(collator.compare)
      .map((name) => `${PUBLIC_PREFIX}/${entry.name}/${name}`);

    if (files.length > 0) staged.set(entry.name, files);
  }

  return staged;
}

const STAGED = readStagedPhotography();

/** True when anything is staged — drives the local-preview notice. */
export const HAS_LOCAL_PHOTOGRAPHY = STAGED.size > 0;

/**
 * Attach staged photography to one product.
 *
 * The frame COUNT follows the photographs, not the fixture. A fixture declares
 * six or seven frames against a shot template that has not been shot yet; a
 * folder holds however many exist. Padding to the fixture count would leave
 * real photographs sitting beside blank colour fields in the same gallery,
 * which reads as broken rather than as pending — so surplus frames are dropped
 * and surplus photographs appended.
 *
 * Alt text is reused positionally from the fixture, and appended frames fall
 * back to the last fixture frame's description. Both are approximations: the
 * alt describes the frame the template *intended* at that position, and a real
 * photograph may not be that frame. Acceptable for a local mockup, and exactly
 * the reason fixtures.ts says these strings must be rewritten per frame by the
 * person who can see the picture.
 */
function withStagedImages(product: Product): Product {
  const files = STAGED.get(product.handle);
  if (!files || product.images.length === 0) return product;

  const template = product.images;
  const last = template[template.length - 1] as ProductImage;

  const images: ProductImage[] = files.map((src, index) => {
    const frame = template[index] ?? last;
    return {
      ...frame,
      id: `${product.handle}-${index + 1}`,
      src,
    };
  });

  return { ...product, images };
}

/** Applies the overlay across a list, leaving unstaged products untouched. */
export function withLocalPhotography<T extends Product>(
  products: readonly T[],
): readonly Product[] {
  if (!HAS_LOCAL_PHOTOGRAPHY) return products;
  return products.map(withStagedImages);
}

/** Applies the overlay to a single product, or passes `undefined` through. */
export function withLocalPhotographyOne(
  product: Product | undefined,
): Product | undefined {
  if (!product || !HAS_LOCAL_PHOTOGRAPHY) return product;
  return withStagedImages(product);
}
