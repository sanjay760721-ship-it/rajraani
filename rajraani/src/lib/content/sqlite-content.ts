import "server-only";

import { db } from "../db/client.ts";
import type {
  ContentWriteRepository,
  PageContent,
  PageKind,
} from "./repository.ts";
import type { Section } from "./sections.ts";

/**
 * Content, read from and written to SQLite.
 *
 * Two tables, both of which already existed and neither of which had ever held
 * a row:
 *
 * - `setting` — key/value JSON, for singletons. `schema.sql` names homepage
 *   sections as one of its intended uses.
 * - `page` — editorial pages, with the ordered section list in `sections_json`.
 *
 * Sections are stored as JSON rather than decomposed into tables. That is a
 * deliberate trade and worth stating: a polymorphic `sections[]` with fifteen
 * member types (build.md §2.4) normalises into a table per type plus a join,
 * which is a great deal of schema for content that is only ever read as a whole
 * list and written as a whole list. Nothing queries *into* a section. If that
 * ever changes — "find every page using a videoBand" — this is the seam to
 * change behind, and no page will notice.
 */

const HOMEPAGE_KEY = "homepage.sections";

type SettingRow = { value_json: string };
type PageRow = {
  slug: string;
  kind: PageKind;
  title: string;
  standfirst: string;
  sections_json: string;
  published: number;
};

/**
 * Parse stored JSON, treating anything unreadable as absent.
 *
 * Content written by a previous schema, or half-written by a crash, must not
 * take the storefront down — an unparseable homepage row falls back to the
 * fixtures, exactly as an empty one does.
 */
function parseSections(json: string, where: string): readonly Section[] {
  try {
    const value: unknown = JSON.parse(json);
    return Array.isArray(value) ? (value as Section[]) : [];
  } catch {
    console.error(`[content] ${where} holds unparseable JSON; ignoring it.`);
    return [];
  }
}

function toPage(row: PageRow): PageContent {
  return {
    slug: row.slug,
    kind: row.kind,
    title: row.title,
    standfirst: row.standfirst,
    sections: parseSections(row.sections_json, `page "${row.slug}"`),
    published: row.published === 1,
  };
}

export class SqliteContentRepository implements ContentWriteRepository {
  async getHomepageSections(): Promise<readonly Section[]> {
    const row = db()
      .prepare("SELECT value_json FROM setting WHERE key = ?")
      .get(HOMEPAGE_KEY) as SettingRow | undefined;

    if (!row) return [];
    return parseSections(row.value_json, HOMEPAGE_KEY);
  }

  async saveHomepageSections(sections: readonly Section[]): Promise<void> {
    db()
      .prepare(
        `INSERT INTO setting (key, value_json, updated_at)
         VALUES (?, ?, datetime('now'))
         ON CONFLICT(key) DO UPDATE SET
           value_json = excluded.value_json,
           updated_at = excluded.updated_at`,
      )
      .run(HOMEPAGE_KEY, JSON.stringify(sections));
  }

  async listPages(): Promise<readonly PageContent[]> {
    const rows = db()
      .prepare(
        `SELECT slug, kind, title, standfirst, sections_json, published
         FROM page ORDER BY title`,
      )
      .all() as PageRow[];
    return rows.map(toPage);
  }

  async getPage(slug: string): Promise<PageContent | undefined> {
    const row = db()
      .prepare(
        `SELECT slug, kind, title, standfirst, sections_json, published
         FROM page WHERE slug = ?`,
      )
      .get(slug) as PageRow | undefined;
    return row ? toPage(row) : undefined;
  }

  async savePage(page: PageContent): Promise<void> {
    db()
      .prepare(
        `INSERT INTO page (slug, kind, title, standfirst, sections_json, published, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, datetime('now'))
         ON CONFLICT(slug) DO UPDATE SET
           title = excluded.title,
           standfirst = excluded.standfirst,
           sections_json = excluded.sections_json,
           published = excluded.published,
           updated_at = excluded.updated_at`,
      )
      .run(
        page.slug,
        page.kind,
        page.title,
        page.standfirst,
        JSON.stringify(page.sections),
        page.published ? 1 : 0,
      );
  }

  async deletePage(slug: string): Promise<void> {
    db().prepare("DELETE FROM page WHERE slug = ?").run(slug);
  }
}
