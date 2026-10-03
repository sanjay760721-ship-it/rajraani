import { notFound } from "next/navigation";

/**
 * Any address no other route claims ends here, so it gets the shop's own
 * "not found" (../not-found.tsx) inside the shop frame, rather than the bare
 * page the root falls back to.
 */
export const metadata = { title: "Page not found" };

export default function Missing(): never {
  notFound();
}
