"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * The shop pages' motion, in the homepage's grammar but quieter: these are
 * pages where people decide, so nothing pins, nothing hides content for long,
 * and every move finishes within a second.
 *
 * - Lenis smooths the scroll, as on the homepage.
 * - Page openings: the gold rule draws in beside the label.
 * - Product cards rise into place in a wave as they enter; photos settle
 *   from a slight zoom.
 * - Product page: the main photo settles, the details follow in sequence,
 *   specification rows draw in, and "Where this came from" counts up.
 * - Story pages: opening photographs drift slower than the page, photos open
 *   with a curtain wipe, pull quotes rise word by word.
 * - Footer: the large RAJRAANI gathers in from wide letter-spacing.
 *
 * It finds the page's existing elements by class, so no page knows about it.
 * Re-runs on every client navigation. Reduced motion: none of it runs.
 */
export function CineMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 0.95 });
    const raf = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const ease = "power3.out";
    const main = document.querySelector<HTMLElement>(".cine-shop-main");
    const splits: { el: HTMLElement; html: string }[] = [];
    const counted: HTMLElement[] = [];

    const ctx = gsap.context(() => {
      if (!main) return;

      // Page openings: the gold rule draws in.
      main.querySelectorAll<HTMLElement>(".cine-page-head .cine-kicker__rule, .pdp-kicker .cine-kicker__rule").forEach((rule) => {
        gsap.fromTo(rule, { scaleX: 0, transformOrigin: "left center" }, { scaleX: 1, duration: 1, ease, delay: 0.15 });
      });

      // Product cards: a wave as they enter; each photo settles from a zoom.
      const cards = gsap.utils.toArray<HTMLElement>(main.querySelectorAll(".product-card"));
      if (cards.length) {
        gsap.set(cards, { autoAlpha: 0, y: 40 });
        ScrollTrigger.batch(cards, {
          start: "top 92%",
          once: true,
          onEnter: (batch) => {
            gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.9, ease, stagger: 0.09, overwrite: true });
            batch.forEach((card) => {
              const img = card.querySelector("img");
              if (img) gsap.fromTo(img, { scale: 1.07 }, { scale: 1, duration: 1.4, ease: "power2.out" });
            });
          },
        });
      }

      // Product page: photo settles, details follow, specs draw in, figures count.
      const gallery = main.querySelector<HTMLElement>(".pdp-details")?.parentElement?.firstElementChild;
      if (gallery instanceof HTMLElement) {
        const photo = gallery.querySelector("img");
        if (photo) gsap.fromTo(photo, { scale: 1.06, autoAlpha: 0.6 }, { scale: 1, autoAlpha: 1, duration: 1.4, ease: "power2.out" });
      }
      const details = main.querySelector<HTMLElement>(".pdp-details");
      if (details) {
        const steps = [...details.children].filter((child) => !child.matches("dl"));
        gsap.from(steps, { autoAlpha: 0, y: 24, duration: 0.8, ease, stagger: 0.07, delay: 0.1 });
        const rows = details.querySelectorAll("dl > div");
        if (rows.length) {
          gsap.from(rows, {
            autoAlpha: 0, x: -16, duration: 0.6, ease, stagger: 0.06,
            scrollTrigger: { trigger: rows[0], start: "top 90%", once: true },
          });
        }
      }
      main.querySelectorAll<HTMLElement>("dl dd").forEach((dd) => {
        // The real figure is kept on the element, so a re-run (React runs
        // effects twice in development) counts to it, never to a half-way value.
        dd.dataset.figure ??= dd.textContent?.trim() ?? "";
        counted.push(dd);
        const match = /^(\d+)(\D.*)?$/.exec(dd.dataset.figure);
        if (!match || !dd.closest("section")?.textContent?.match(/came from/i)) return;
        const target = Number(match[1]);
        const rest = match[2] ?? "";
        const counter = { n: 0 };
        gsap.to(counter, {
          n: target, duration: 1.4, ease: "power2.out",
          scrollTrigger: { trigger: dd, start: "top 90%", once: true },
          onUpdate: () => { dd.textContent = `${Math.round(counter.n)}${rest}`; },
        });
      });

      // Story pages: the opening photograph drifts slower than the page.
      main.querySelectorAll<HTMLElement>(".ed-hero").forEach((hero) => {
        const art = hero.querySelector<HTMLElement>(".ed-hero__art img, .ed-hero__art");
        if (!art) return;
        gsap.fromTo(art, { yPercent: 0 }, { yPercent: 14, ease: "none", scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
        const copy = hero.querySelector(".ed-hero__copy");
        if (copy) gsap.from(copy.querySelectorAll(".ed-kicker, .ed-hero__title, .ed-hero__body, .ed-hero__cta"), { autoAlpha: 0, y: 36, duration: 1, ease, stagger: 0.12, delay: 0.2 });
      });

      // Photos open with a curtain wipe; their text rises after them.
      main.querySelectorAll<HTMLElement>(".ed-media").forEach((media) => {
        gsap.fromTo(media, { clipPath: "inset(0 0 100% 0)" }, {
          clipPath: "inset(0 0 0% 0)", duration: 1.3, ease: "power4.inOut",
          scrollTrigger: { trigger: media, start: "top 85%", once: true },
        });
        const img = media.querySelector("img");
        if (img) gsap.fromTo(img, { scale: 1.15 }, { scale: 1, duration: 1.8, ease: "power2.out", scrollTrigger: { trigger: media, start: "top 85%", once: true } });
      });
      main.querySelectorAll<HTMLElement>(".ed-text, .ed-rich, .ed-poetry").forEach((block) => {
        gsap.from(block.children, { autoAlpha: 0, y: 32, duration: 0.9, ease, stagger: 0.1, scrollTrigger: { trigger: block, start: "top 85%", once: true } });
      });

      // Pull quotes rise word by word, like the homepage's headlines.
      main.querySelectorAll<HTMLElement>(".ed-quote").forEach((quote) => {
        const text = quote.textContent ?? "";
        splits.push({ el: quote, html: quote.innerHTML });
        quote.setAttribute("aria-label", text.trim());
        quote.innerHTML = text.trim().split(/\s+/).map((word) => `<span class="motion-word" aria-hidden="true"><span>${word.replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c]!)}</span></span>`).join(" ");
        gsap.from(quote.querySelectorAll(".motion-word > span"), {
          yPercent: 110, duration: 1, ease, stagger: 0.05,
          scrollTrigger: { trigger: quote, start: "top 85%", once: true },
        });
      });
    }, main ?? undefined);

    // Footer: the large name gathers in from wide spacing as it arrives.
    const name = document.querySelector<HTMLElement>(".cine--shop .cine-footer__name");
    const nameTween = name
      ? gsap.from(name, {
          letterSpacing: "0.7em", autoAlpha: 0, y: 30, duration: 1.6, ease: "power2.out",
          scrollTrigger: { trigger: name, start: "top 95%", once: true },
        })
      : undefined;

    // Layout settles after fonts and images; measure again.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const late = setTimeout(refresh, 800);

    return () => {
      clearTimeout(late);
      window.removeEventListener("load", refresh);
      nameTween?.scrollTrigger?.kill();
      nameTween?.kill();
      ctx.revert();
      for (const { el, html } of splits) el.innerHTML = html;
      for (const dd of counted) if (dd.dataset.figure) dd.textContent = dd.dataset.figure;
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, [pathname]);

  return null;
}
