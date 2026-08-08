import { readdirSync, statSync } from "node:fs";
import path from "node:path";

import { MediaManager, type MediaItem } from "@/components/admin/MediaManager";

export const metadata = { title: "Media Manager" };

/**
 * The asset directory the storefront serves from.
 *
 * Statically scoped to one folder on purpose — a dynamic path here makes
 * Turbopack trace the whole project into the server bundle (see the build
 * warning on `src/lib/data/catalogue.ts`).
 */
const MEDIA_DIR = path.join(process.cwd(), "public", "reference-only");

const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);

/**
 * Aspect ratio is inferred from the naming convention rather than measured.
 * Reading real dimensions means decoding every file on each request, which is
 * not worth it for a label — and the convention is enforced by the seed script.
 */
function ratioFor(name: string): MediaItem["ratio"] {
  if (VIDEO_EXTENSIONS.has(path.extname(name).toLowerCase())) return "video";
  if (/^(hero|stores|editorial)-/.test(name)) return "banner";
  if (/^(category|tile|triptych)-/.test(name)) return "1:1";
  return "2:3";
}

function formatSize(bytes: number): string {
  return bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.round(bytes / 1024)} KB`;
}

/**
 * Lists what is actually committed under `public/reference-only`.
 *
 * This replaced a hardcoded sample list whose twelve entries named files that
 * had never existed, so every thumbnail on the page rendered broken. Reading
 * the directory means the page cannot drift from the assets again.
 */
function listMedia(): MediaItem[] {
  let entries: string[];
  try {
    entries = readdirSync(MEDIA_DIR);
  } catch {
    return [];
  }

  return entries
    .filter((name) => !name.startsWith("."))
    .sort()
    .map((name) => ({
      name,
      path: `/reference-only/${name}`,
      size: formatSize(statSync(path.join(MEDIA_DIR, name)).size),
      type: VIDEO_EXTENSIONS.has(path.extname(name).toLowerCase())
        ? ("video" as const)
        : ("image" as const),
      ratio: ratioFor(name),
    }));
}

export default function AdminMediaRoute() {
  return <MediaManager items={listMedia()} />;
}
