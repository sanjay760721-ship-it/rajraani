"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "../auth/session.ts";
import {
  deleteProduct,
  handleTaken,
  saveProduct,
  setPublished,
  skuTaken,
  type ProductInput,
} from "../data/admin-queries.ts";
import { termsForGroup } from "../domain/taxonomy.ts";

/**
 * Server actions for the product form.
 *
 * Every one calls `requireAdmin()` first. The layout guard is not enough — a
 * server action is a POST endpoint, reachable without ever rendering the page
 * that contains its form.
 *
 * Validation lives here rather than only in the browser for the same reason.
 * `required` on an input is a courtesy to the person typing, not a control.
 */

export type FormState = {
  errors: Record<string, string>;
  values?: ProductInput;
};

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function text(form: FormData, key: string): string {
  return String(form.get(key) ?? "").trim();
}

function integer(form: FormData, key: string): number {
  const value = Number(text(form, key));
  return Number.isFinite(value) ? Math.trunc(value) : Number.NaN;
}

function parse(form: FormData): ProductInput {
  return {
    handle: text(form, "handle"),
    title: text(form, "title"),
    poeticName: text(form, "poeticName"),
    sku: text(form, "sku"),
    priceRupees: Number(text(form, "priceRupees")),
    inventoryQuantity: integer(form, "inventoryQuantity"),
    fulfilmentMode: text(form, "fulfilmentMode"),
    dispatchDaysMin: integer(form, "dispatchDaysMin"),
    dispatchDaysMax: integer(form, "dispatchDaysMax"),
    narrative: text(form, "narrative"),
    specColour: text(form, "specColour"),
    specTechnique: text(form, "specTechnique"),
    specFabric: text(form, "specFabric"),
    specSpeciality: text(form, "specSpeciality"),
    specCollectionNote: text(form, "specCollectionNote"),
    specNote: text(form, "specNote"),
    provenanceWorkshop: text(form, "provenanceWorkshop"),
    provenanceLoom: text(form, "provenanceLoom"),
    provenanceWeeks: integer(form, "provenanceWeeks"),
    provenanceArtisans: integer(form, "provenanceArtisans"),
    garmentType: text(form, "garmentType"),
    weave: text(form, "weave"),
    fabric: text(form, "fabric"),
    colourFamily: text(form, "colourFamily"),
    campaignSlug: text(form, "campaignSlug"),
    motifs: form.getAll("motifs").map(String),
    zariTypes: form.getAll("zariTypes").map(String),
    published: form.get("published") === "on",
  };
}

/** Fulfilment wording that must never reach a title. The database also refuses. */
const FULFILMENT_IN_TITLE =
  /pre[-\s]?order|ready to ship|made to order|sold out|coming soon/i;

function validate(input: ProductInput, id?: number): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!input.handle) errors.handle = "Required.";
  else if (!SLUG.test(input.handle)) {
    errors.handle = "Lower-case words separated by single hyphens.";
  } else if (handleTaken(input.handle, id)) {
    errors.handle = "Another piece already uses this web address.";
  }

  if (!input.title) errors.title = "Required.";
  else if (FULFILMENT_IN_TITLE.test(input.title)) {
    // Worth explaining, because it looks arbitrary and is not.
    errors.title =
      "Titles cannot mention stock or dispatch state. That lives in the Dispatch field and shows as a badge — in a title it ends up in Google results and cart lines, where it cannot be corrected without changing the title.";
  }

  if (!input.poeticName) errors.poeticName = "Required — the piece's proper name.";

  if (!input.sku) errors.sku = "Required.";
  else if (skuTaken(input.sku, id)) errors.sku = "Another piece already uses this SKU.";

  if (!Number.isFinite(input.priceRupees) || input.priceRupees <= 0) {
    errors.priceRupees = "A price in rupees, greater than zero.";
  }
  if (!Number.isFinite(input.inventoryQuantity) || input.inventoryQuantity < 0) {
    errors.inventoryQuantity = "Zero or more.";
  }
  if (!Number.isFinite(input.dispatchDaysMin) || input.dispatchDaysMin < 1) {
    errors.dispatchDaysMin = "At least one day.";
  }
  if (input.dispatchDaysMax < input.dispatchDaysMin) {
    errors.dispatchDaysMax = "Cannot be sooner than the minimum.";
  }
  if (input.narrative.length < 80) {
    errors.narrative = "Too short. Around 90 words is the house length.";
  }

  for (const field of [
    "specColour",
    "specTechnique",
    "specFabric",
    "provenanceWorkshop",
    "provenanceLoom",
  ] as const) {
    if (!input[field]) errors[field] = "Required.";
  }

  if (!Number.isFinite(input.provenanceWeeks) || input.provenanceWeeks < 1) {
    errors.provenanceWeeks = "At least one week.";
  }
  if (!Number.isFinite(input.provenanceArtisans) || input.provenanceArtisans < 1) {
    errors.provenanceArtisans = "At least one weaver.";
  }

  // Vocabulary. The database triggers enforce this too; catching it here turns
  // an aborted transaction into a message beside the right field.
  const single = [
    ["garmentType", "garment"],
    ["weave", "weave"],
    ["fabric", "fabric"],
    ["colourFamily", "colour"],
    ["fulfilmentMode", "fulfilment"],
  ] as const;

  for (const [field, group] of single) {
    const value = input[field];
    if (!value) {
      errors[field] = "Required.";
      continue;
    }
    if (!termsForGroup(group).some((term) => term.slug === value)) {
      errors[field] = `"${value}" is not in the vocabulary.`;
    }
  }

  for (const [field, group] of [
    ["motifs", "motif"],
    ["zariTypes", "zari"],
  ] as const) {
    for (const value of input[field]) {
      if (!termsForGroup(group).some((term) => term.slug === value)) {
        errors[field] = `"${value}" is not in the vocabulary.`;
      }
    }
  }

  return errors;
}

export async function saveProductAction(
  _previous: FormState,
  form: FormData,
): Promise<FormState> {
  await requireAdmin();

  const rawId = String(form.get("id") ?? "");
  const id = rawId ? Number(rawId) : undefined;
  const input = parse(form);
  const errors = validate(input, id);

  if (Object.keys(errors).length > 0) {
    // Hand the values back, so a mistake in one field does not empty the form.
    return { errors, values: input };
  }

  let savedId: number;
  try {
    savedId = saveProduct(input, id);
  } catch (error) {
    // The database holds constraints the form does not duplicate. Surface the
    // message rather than a 500 — they are written to be read.
    return {
      errors: { form: error instanceof Error ? error.message : "Could not save." },
      values: input,
    };
  }

  // The storefront prerenders these, so without this the edit would not appear
  // until the cache expired.
  revalidatePath("/", "layout");

  redirect(`/admin/products/${savedId}?saved=1`);
}

export async function deleteProductAction(form: FormData): Promise<void> {
  await requireAdmin();
  const id = Number(form.get("id"));
  if (!Number.isFinite(id)) return;

  deleteProduct(id);
  revalidatePath("/", "layout");
  redirect("/admin?deleted=1");
}

export async function togglePublishedAction(form: FormData): Promise<void> {
  await requireAdmin();
  const id = Number(form.get("id"));
  if (!Number.isFinite(id)) return;

  setPublished(id, form.get("publish") === "1");
  revalidatePath("/", "layout");
  redirect("/admin");
}
