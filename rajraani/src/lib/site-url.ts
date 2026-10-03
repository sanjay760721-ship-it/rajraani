/**
 * The public address of the shop, from `SITE_URL` (for example
 * https://rajraani.com). Used for share previews, the sitemap and robots.txt,
 * which all need full addresses. Falls back to the local server.
 */
export const SITE_URL = (process.env.SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

/**
 * Whether search engines may index the shop. Off until `SITE_LIVE=1` is set on
 * the server at launch: the site still carries stand-in photographs that must
 * not end up in search results.
 */
export const SITE_LIVE = process.env.SITE_LIVE === "1";
