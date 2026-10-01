import type { Section } from "@/lib/content/sections";
import type { SiteText } from "@/lib/content/site-text-defs";
import type { Scene, Slide } from "./Cinematic";

/**
 * The homepage, as the admin edits it, grouped into cinematic scenes: related
 * slides share one full screen. Server-safe (no client code), used by app/(home).
 */

/** Group the homepage's sections into scenes: related slides share a screen. */
export function toScenes(sections: readonly Section[], text: SiteText): Scene[] {
  const scenes: Scene[] = [];
  const shop: { id: string; title: string; kicker: string; body?: string; href: string; image?: string; focus?: string }[] = [];
  let statement: { quote: string; body: string } | undefined;
  let closing: Scene | undefined;
  let edits: Scene | undefined;

  for (const section of sections) {
    switch (section.type) {
      case "heroCarousel":
        scenes.push({
          kind: "slides",
          id: section.id,
          transition: "fade",
          isPageTitle: true,
          slides: section.slides.map(
            (slide): Slide => ({
              id: slide.id,
              kicker: slide.eyebrow,
              title: slide.title,
              body: slide.body,
              cta: { label: slide.ctaLabel, href: slide.ctaHref },
              image: slide.art.desktop.src,
              mobileImage: slide.art.mobile.src,
              align: slide.align === "right" ? "right" : "left",
            }),
          ),
        });
        break;
      case "brandStatement":
        statement = { quote: section.quote, body: section.body };
        break;
      case "collectionTriptych":
        scenes.push({
          kind: "story",
          id: section.id,
          statement,
          photos: section.art.map((art, i) => ({
            image: art.desktop.src,
            href: section.artHrefs?.[i] ?? section.ctaHref,
          })),
          title: section.title,
          body: section.body,
          cta: { label: section.ctaLabel, href: section.ctaHref },
          secondary: { label: text["home.shopThePieces"], href: section.ctaHref },
          kicker: text["home.storyKicker"],
        });
        break;
      case "tileRow":
        edits = {
          kind: "edits",
          id: section.id,
          kicker: text["home.editsKicker"],
          title: text["home.editsTitle"],
          note: text["home.editsNote"],
          items: section.items.map((item) => ({
            label: item.label.charAt(0) + item.label.slice(1).toLowerCase(),
            href: item.href,
            image: item.art.desktop.src,
          })),
        };
        break;
      case "richText":
        if (section.heading && section.paragraphs.length > 0) {
          closing = { kind: "words", id: section.id, title: section.heading, body: section.paragraphs.join(" ") };
        }
        break;
      case "videoBand":
        scenes.push({
          kind: "film",
          id: section.id,
          kicker: text["home.filmKicker"],
          title: section.title,
          body: section.body,
          cta: { label: section.ctaLabel, href: section.ctaHref },
          image: section.art.desktop.src,
          video: section.videoSrc,
          facts: ([1, 2, 3] as const)
            .map((n) => ({ figure: text[`home.fact${n}.figure`], label: text[`home.fact${n}.label`] }))
            .filter((fact) => fact.figure.trim()),
        });
        break;
      case "categorySplit":
        for (const item of section.items) {
          const name = item.label.charAt(0) + item.label.slice(1).toLowerCase();
          shop.push({ id: item.label, title: name, kicker: text["home.shopKicker"], href: item.href, image: item.art.desktop.src });
        }
        break;
      case "editorialSlideshow":
        for (const slide of section.slides) {
          shop.push({
            id: slide.id,
            title: slide.title,
            kicker: slide.eyebrow && slide.eyebrow !== slide.title ? slide.eyebrow : text["home.shopKicker"],
            body: slide.body,
            href: slide.ctaHref,
            image: slide.art.desktop.src,
            // Wide banner photographs with the sitter on the left third: a
            // narrow strip centred on them would show only the wall.
            focus: "27% 45%",
          });
        }
        break;
      case "campaignSlideshow":
        scenes.push({
          kind: "slides",
          id: section.id,
          transition: "wipe",
          slides: section.slides.map(
            (slide): Slide => ({
              id: slide.id,
              kicker: text["home.campaignKicker"],
              title: slide.title,
              body: slide.body,
              cta: { label: slide.ctaLabel, href: slide.ctaHref },
              secondary: { label: text["home.shopThePieces"], href: "/collections/all" },
              image: slide.art.desktop.src,
              align: "left",
            }),
          ),
        });
        break;
      case "storesSlideshow":
        scenes.push({
          kind: "slides",
          id: section.id,
          transition: "fade",
          slides: section.slides.map(
            (slide): Slide => ({
              id: slide.id,
              kicker: sentenceCase(slide.title),
              title: slide.ctaLabel.replace(/\s*Store$/i, ""),
              body: slide.body,
              cta: { label: text["home.visitButton"], href: slide.ctaHref },
              image: slide.art.desktop.src,
              align: "left",
            }),
          ),
        });
        break;
      default:
        break;
    }
  }

  // The four curated edits follow the shop strips (placed below, once the
  // strips are in), so both shopping scenes sit together.
  // The closing words sit just before the visit scene.
  if (closing) {
    const visit = scenes.findIndex((scene) => scene.kind === "slides" && scene.id.startsWith("stores"));
    scenes.splice(visit >= 0 ? visit : scenes.length, 0, closing);
  }
  // The shop strips sit straight after the loom film (or after the hero if there is no film).
  if (shop.length > 0) {
    const film = scenes.findIndex((scene) => scene.kind === "film");
    scenes.splice(film >= 0 ? film + 1 : 1, 0, { kind: "shop", id: "shop", items: shop });
  }
  if (edits) {
    const shopAt = scenes.findIndex((scene) => scene.kind === "shop");
    scenes.splice(shopAt >= 0 ? shopAt + 1 : scenes.length, 0, edits);
  }
  return scenes;
}

/** "VISIT OUR STORES" → "Visit our stores" (the kicker sets its own capitals). */
function sentenceCase(text: string): string {
  const lower = text.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}
