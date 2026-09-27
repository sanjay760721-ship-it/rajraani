"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { getDiscount, normaliseCode, saveDiscount, type DiscountKind } from "../discounts.ts";
import { recordChange } from "./history.ts";

export type DiscountInput = {
  code: string;
  kind: DiscountKind;
  /** Percent, or whole rupees for an amount off. */
  amount: number;
  minOrderRupees: number;
  startsOn: string;
  endsOn: string;
  maxUses: string;
  note: string;
  active: boolean;
};

export type DiscountSaveResult = { ok: true } | { ok: false; error: string };

const DAY = /^\d{4}-\d{2}-\d{2}$/;

/** Create a code, or change an existing one (matched by the code itself). */
export async function saveDiscountAction(input: DiscountInput, isNew: boolean): Promise<DiscountSaveResult> {
  const admin = await requireAdmin();
  const code = normaliseCode(input.code);
  if (!/^[A-Z0-9-]{3,20}$/.test(code)) return { ok: false, error: "Use 3 to 20 letters or numbers for the code, e.g. FESTIVE10." };
  if (isNew && getDiscount(code)) return { ok: false, error: `There is already a code called ${code}.` };

  const amount = Number(input.amount);
  if (input.kind === "percent" && (!Number.isInteger(amount) || amount < 1 || amount > 90)) {
    return { ok: false, error: "A percentage off must be a whole number from 1 to 90." };
  }
  if (input.kind === "amount" && (!Number.isInteger(amount) || amount < 1 || amount > 10_00_000)) {
    return { ok: false, error: "The amount off must be in whole rupees, e.g. 2000." };
  }
  const minOrder = Number(input.minOrderRupees || 0);
  if (!Number.isInteger(minOrder) || minOrder < 0) return { ok: false, error: "The minimum order must be in whole rupees, or left empty." };
  if (input.startsOn && !DAY.test(input.startsOn)) return { ok: false, error: "Pick a start date from the calendar." };
  if (input.endsOn && !DAY.test(input.endsOn)) return { ok: false, error: "Pick an end date from the calendar." };
  if (input.startsOn && input.endsOn && input.endsOn < input.startsOn) return { ok: false, error: "The end date is before the start date." };
  const maxUses = input.maxUses.trim() ? Number(input.maxUses) : null;
  if (maxUses !== null && (!Number.isInteger(maxUses) || maxUses < 1)) return { ok: false, error: "The limit on uses must be a whole number, or left empty." };
  if (input.note.length > 200) return { ok: false, error: "Keep the note under 200 characters." };

  saveDiscount({
    code,
    kind: input.kind,
    value: input.kind === "percent" ? amount : amount * 100,
    minOrderMinor: minOrder * 100,
    // Dates are whole days in India: from the start of the first day to the
    // end of the last.
    startsAt: input.startsOn ? `${input.startsOn}T00:00:00+05:30` : null,
    endsAt: input.endsOn ? `${input.endsOn}T23:59:59+05:30` : null,
    maxUses,
    active: input.active,
    note: input.note.trim(),
  });
  recordChange({
    kind: "note",
    target: code,
    label: "Discount codes",
    who: admin.email,
    before: null,
    after: null,
    summary: isNew
      ? `Created ${code} (${input.kind === "percent" ? `${amount}% off` : `₹${amount.toLocaleString("en-IN")} off`})`
      : `Changed ${code}${input.active ? "" : " — switched off"}`,
    restorable: false,
  });
  revalidatePath("/admin/discounts");
  return { ok: true };
}
