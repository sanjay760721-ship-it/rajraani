"use server";

import { revalidatePath } from "next/cache";

import { requireAdmin } from "../auth/session.ts";
import { footerProblems, type FooterSettings } from "../content/footer-defs.ts";
import { FOOTER_KEY, getFooter, saveFooter } from "../content/footer.ts";
import { removeSubscriber } from "../newsletter.ts";
import { describe, rawSetting, recordChange } from "./history.ts";

export type FooterSaveResult = { ok: true } | { ok: false; problems: string[] };

export async function saveFooterAction(value: FooterSettings): Promise<FooterSaveResult> {
  const admin = await requireAdmin();
  const problems = footerProblems(value);
  if (problems.length) return { ok: false, problems };
  const before = rawSetting(FOOTER_KEY);
  const shown = JSON.stringify(await getFooter());
  await saveFooter(value);
  recordChange({
    kind: "setting",
    target: FOOTER_KEY,
    label: "Footer & newsletter pop-up",
    who: admin.email,
    before,
    after: rawSetting(FOOTER_KEY),
    summary: describe(shown, JSON.stringify(value)),
  });
  // The footer is on every page.
  revalidatePath("/", "layout");
  return { ok: true };
}

export async function removeSubscriberAction(email: string): Promise<void> {
  const admin = await requireAdmin();
  removeSubscriber(email);
  recordChange({ kind: "note", target: email, label: "Newsletter", who: admin.email, before: null, after: null, summary: `Removed ${email} from the newsletter list`, restorable: false });
  revalidatePath("/admin/messages");
}
