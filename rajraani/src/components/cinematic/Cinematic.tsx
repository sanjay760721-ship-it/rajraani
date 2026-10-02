"use client";

import { Fragment, useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import type { NavPanel } from "@/lib/data/navigation";
import { CINE_MENU_CSS } from "./CineMenu";
import { CineHeader } from "./CineHeader";
import { CINE_FRAME_CSS } from "./frame-css";
import { CINE_FOOTER_CSS, CineFooter, type CineFooterData } from "./CineFooter";
import { VideoPlayer } from "@/components/sections/VideoPlayer";

type Cta = { label: string; href: string };

export type Slide = {
  id: string;
  kicker?: string;
  title: string;
  body?: string;
  cta: Cta;
  secondary?: Cta;
  image?: string;
  mobileImage?: string;
  align: "left" | "right";
};

export type Scene =
  | { kind: "slides"; id: string; transition: "fade" | "wipe"; slides: Slide[]; isPageTitle?: boolean }
  | {
      kind: "film";
      id: string;
      kicker: string;
      title: string;
      body: string;
      cta: Cta;
      image?: string;
      video?: string;
      facts: { figure: string; label: string }[];
    }
  | { kind: "shop"; id: string; items: { id: string; title: string; kicker: string; body?: string; href: string; image?: string; focus?: string }[] }
  | {
      kind: "story";
      id: string;
      statement?: { quote: string; body: string };
      photos: { image?: string; href: string }[];
      title: string;
      body: string;
      cta: Cta;
      secondary?: Cta;
      kicker: string;
    }
  | { kind: "words"; id: string; title: string; body: string }
  | { kind: "edits"; id: string; kicker: string; title: string; note: string; items: { label: string; href: string; image?: string }[] };

const SLIDE_MS = 7000;

/** Headline scale follows the title's length so short names land big. */
const titleSize = (title: string) => (title.length <= 8 ? "xl" : title.length <= 16 ? "lg" : "md");

/** True while the element is mostly on screen; drives entrances and autoplay. */
function useInView<T extends HTMLElement>(threshold = 0.45) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let visible = false;
    const update = () => setInView(visible && !document.hidden);
    const io = new IntersectionObserver(([entry]) => {
      visible = Boolean(entry?.isIntersecting);
      update();
    }, { threshold });
    io.observe(el);
    document.addEventListener("visibilitychange", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, [threshold]);
  return [ref, inView] as const;
}

/**
 * A cinematic homepage. Each scene is one full screen; related slides share a
 * scene and change in place (a cross-fade for the campaigns up top, a curtain
 * wipe for the stories). Lenis weights the scroll, GSAP ScrollTrigger drifts
 * each photograph as it passes, and headlines rise word by word whenever their
 * scene arrives or its slide changes. Reduced motion: native scroll, still
 * photographs, no autoplay, text simply present.
 */
export function Cinematic({ scenes, menu, footer }: { scenes: Scene[]; menu: readonly NavPanel[]; footer: CineFooterData }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.config({ ignoreMobileResize: true });
    // Interpolated rather than timed: every wheel tick eases into the next, so
    // the scroll glides instead of stepping.
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.9 });
    const raf = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      // Paragraphs rise into view once, whole. (The zoom scene's promise is
      // part of its own pinned sequence on computers.)
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((block) => {
        if (block.closest("[data-zoom]") && window.matchMedia("(min-width: 768px)").matches) return;
        gsap.fromTo(
          block,
          { autoAlpha: 0, y: 48 },
          { autoAlpha: 1, y: 0, duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: block, start: "top 86%", toggleActions: "play none none reverse" } },
        );
      });
      // Photographs that travel at their own speed, for depth.
      root.querySelectorAll<HTMLElement>("[data-speed]").forEach((el) => {
        const speed = Number(el.dataset.speed ?? 0);
        gsap.fromTo(
          el,
          { yPercent: speed * 10 },
          { yPercent: speed * -10, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 } },
        );
      });
      // Computers only: the pinned scenes. Phones keep plain swipe rows.
      mm.add("(min-width: 768px)", () => {
        // zoomOut: one photograph full screen pulls back, two more glide in.
        root.querySelectorAll<HTMLElement>("[data-zoom]").forEach((section) => {
          const stage = section.querySelector<HTMLElement>(".cine-zoom__stage");
          const center = section.querySelector<HTMLElement>('[data-zoom-card="center"]');
          const left = section.querySelector('[data-zoom-card="left"]');
          const right = section.querySelector('[data-zoom-card="right"]');
          const promise = section.querySelector("[data-zoom-promise]");
          const copy = section.querySelector("[data-zoom-copy]");
          if (!stage || !center) return;

          // The centre card's resting frame, read from its CSS; it starts as the whole stage.
          const rest = () => ({ left: center.offsetLeft, top: center.offsetTop, width: center.offsetWidth, height: center.offsetHeight });
          let frame = rest();

          gsap.set(copy, { autoAlpha: 0, y: 30 });
          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: "+=170%",
              pin: true,
              anticipatePin: 1,
              scrub: 1,
              invalidateOnRefresh: true,
              onRefreshInit: () => {
                gsap.set(center, { clearProps: "left,top,width,height" });
                frame = rest();
              },
            },
          });
          // One continuous movement: the promise lifts away while the photograph
          // pulls back, the other two glide in as it settles, then the words.
          tl.to(promise, { autoAlpha: 0, yPercent: -18, duration: 0.7, ease: "power1.in" }, 0.15)
            .fromTo(
              center,
              { left: 0, top: 0, width: () => stage.clientWidth, height: () => stage.clientHeight },
              { left: () => frame.left, top: () => frame.top, width: () => frame.width, height: () => frame.height, duration: 1.4, ease: "power1.inOut", immediateRender: true },
              0.3,
            )
            .fromTo(left, { xPercent: -140, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 0.9, ease: "power2.out" }, 1.1)
            .fromTo(right, { xPercent: 140, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 0.9, ease: "power2.out" }, 1.1)
            .to(copy, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }, 1.75)
            .to({}, { duration: 0.35 });
        });

        // panGallery: the edits slide sideways; each photograph drifts in its frame.
        root.querySelectorAll<HTMLElement>("[data-pan]").forEach((section) => {
          const track = section.querySelector<HTMLElement>("[data-pan-track]");
          if (!track) return;
          const distance = () => track.scrollWidth - window.innerWidth;
          gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: { trigger: section, start: "top top", end: () => `+=${distance()}`, pin: true, scrub: 1.2, invalidateOnRefresh: true },
          });
        });
      });

      root.querySelectorAll<HTMLElement>("[data-scene]").forEach((scene) => {
        const media = scene.querySelector("[data-drift]");
        if (!media) return;
        gsap.fromTo(
          media,
          { yPercent: -5 },
          { yPercent: 5, ease: "none", scrollTrigger: { trigger: scene, start: "top bottom", end: "bottom top", scrub: 0.6 } },
        );
      });
    }, root);

    return () => {
      mm.revert();
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={rootRef} className="cine cine--home text-white">
      <style>{CINE_FRAME_CSS + CSS + CINE_MENU_CSS + CINE_FOOTER_CSS}</style>

      <CineHeader menu={menu} mode="overlay" />

      <main id="main">
        {scenes.map((scene) =>
          scene.kind === "slides" ? (
            <SlidesScene key={scene.id} scene={scene} />
          ) : scene.kind === "film" ? (
            <FilmScene key={scene.id} scene={scene} />
          ) : scene.kind === "story" ? (
            <StoryScene key={scene.id} scene={scene} />
          ) : scene.kind === "words" ? (
            <WordsScene key={scene.id} scene={scene} />
          ) : scene.kind === "edits" ? (
            <EditsScene key={scene.id} scene={scene} />
          ) : (
            <ShopScene key={scene.id} scene={scene} />
          ),
        )}
      </main>

      <CineFooter data={footer} />
    </div>
  );
}

/* ── Words that rise ─────────────────────────────────────────────────────── */

function Headline({ text, as: Tag = "h2", live }: { text: string; as?: "h1" | "h2"; live: boolean }) {
  return (
    <Tag className={`cine-title cine-title--${titleSize(text)} ${live ? "is-live" : ""}`} aria-label={text}>
      {text.split(" ").map((word, i, words) => (
        <Fragment key={i}>
          <span className="cine-word" aria-hidden="true">
            <span style={{ "--i": i } as CSSProperties}>{word}</span>
          </span>
          {i < words.length - 1 ? " " : null}
        </Fragment>
      ))}
    </Tag>
  );
}

function Kicker({ text }: { text?: string }) {
  if (!text) return null;
  return (
    <p className="cine-kicker">
      <span aria-hidden="true" className="cine-kicker__rule" />
      {text}
    </p>
  );
}

function Actions({ cta, secondary }: { cta: Cta; secondary?: Cta }) {
  const external = /^https?:\/\//.test(cta.href);
  return (
    <div className="cine-actions">
      {external ? (
        <a href={cta.href} target="_blank" rel="noopener noreferrer" className="cine-button">
          <span>{cta.label}</span>
        </a>
      ) : (
        <Link href={cta.href} className="cine-button">
          <span>{cta.label}</span>
        </Link>
      )}
      {secondary ? (
        <Link href={secondary.href} className="cine-link">
          {secondary.label}
        </Link>
      ) : null}
    </div>
  );
}

function Photo({ src, mobileSrc, priority, className = "", focus = "left" }: { src?: string; mobileSrc?: string; priority?: boolean; className?: string; focus?: "left" | "right" }) {
  if (!src) return null;
  const split = mobileSrc && mobileSrc !== src;
  return (
    <>
      <Image src={src} alt="" fill sizes="100vw" priority={priority} className={`object-cover ${focus === "right" ? "object-[72%_50%]" : "object-[28%_50%]"} md:object-center ${split ? "hidden md:block" : ""} ${className}`} />
      {split ? <Image src={mobileSrc} alt="" fill sizes="100vw" priority={priority} className={`object-cover md:hidden ${className}`} /> : null}
    </>
  );
}

/* ── A scene of slides that change in place ──────────────────────────────── */

function SlidesScene({ scene }: { scene: Extract<Scene, { kind: "slides" }> }) {
  const [ref, inView] = useInView<HTMLElement>(0.4);
  const [active, setActive] = useState(0);
  const [previous, setPrevious] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const count = scene.slides.length;

  const go = useCallback(
    (to: number) => {
      setActive((current) => {
        const next = ((to % count) + count) % count;
        if (next !== current) setPrevious(current);
        return next;
      });
    },
    [count],
  );

  useEffect(() => {
    if (!inView || paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setTimeout(() => go(active + 1), SLIDE_MS);
    return () => clearTimeout(timer);
  }, [inView, paused, active, count, go]);

  const slide = scene.slides[active]!;
  const right = slide.align === "right";

  return (
    <section
      ref={ref}
      data-scene
      className={`cine-scene cine-scene--${scene.transition}`}
      aria-roledescription="carousel"
      aria-label={scene.slides.map((s) => s.title).join(", ")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div data-drift className="cine-media">
        {scene.slides.map((s, i) => (
          <div
            key={s.id}
            className="cine-layer"
            data-state={i === active ? "active" : i === previous ? "previous" : "idle"}
            aria-hidden={i !== active}
          >
            <div className={`cine-layer__img ${i === active ? "is-zooming" : ""}`}>
              <Photo src={s.image} mobileSrc={s.mobileImage} priority={scene.isPageTitle && i === 0} focus={s.align === "right" ? "left" : "right"} />
            </div>
          </div>
        ))}
      </div>
      <div aria-hidden className={`cine-scrim ${right ? "cine-scrim--right" : ""}`} />

      <div className={`cine-copy ${right ? "cine-copy--right" : ""}`} key={slide.id}>
        <Kicker text={slide.kicker} />
        <Headline text={slide.title} as={scene.isPageTitle ? "h1" : "h2"} live={inView} />
        {slide.body ? <p className="cine-body">{slide.body}</p> : null}
        <Actions cta={slide.cta} secondary={slide.secondary} />
      </div>

    </section>
  );
}

/* ── Words that light up as you scroll ───────────────────────────────────── */

/** A paragraph that rises into view, fully lit: never left half-bright. */
function ScrubText({ text, className }: { text: string; className: string }) {
  return (
    <p data-reveal className={className}>
      {text}
    </p>
  );
}

/* ── The house: one photograph full screen, pulling back to three ────────── */

/*
 * On computers the scene pins and scrolling drives it (GSAP, `zoomOut` in the
 * effect above): the middle photograph opens full screen under the promise,
 * whose words light as you scroll; the promise fades, the photograph pulls
 * back into its frame, and the other two glide in from the edges to make
 * three. Then the collection's words arrive. On phones and for reduced motion
 * it is a plain stack: the promise, a swipeable row, the words.
 */
function StoryScene({ scene }: { scene: Extract<Scene, { kind: "story" }> }) {
  // Middle photograph first in the DOM so it paints under the other two.
  const order = [1, 0, 2].filter((i) => i < scene.photos.length);
  return (
    <section data-zoom className="cine-zoom" aria-label={scene.title}>
      <div className="cine-zoom__stage">
        {/* A plain wrapper on computers (display: contents); a swipe row on phones. */}
        <div className="cine-zoom__cards">
        {order.map((i) => {
          const photo = scene.photos[i]!;
          return (
            <Link
              key={i}
              href={photo.href}
              data-zoom-card={i === 1 ? "center" : i === 0 ? "left" : "right"}
              className={`cine-zoom__card cine-zoom__card--${i === 1 ? "center" : i === 0 ? "left" : "right"}`}
              aria-label={`${scene.title}, piece ${i + 1}`}
            >
              {photo.image ? <Image src={photo.image} alt="" fill sizes="100vw" className="object-cover" /> : null}
            </Link>
          );
        })}
        </div>

        {scene.statement ? (
          <div data-zoom-promise className="cine-zoom__promise">
            <div aria-hidden="true" className="cine-zoom__veil" />
            <ScrubText text={scene.statement.quote} className="cine-story__quote" />
            <ScrubText text={scene.statement.body} className="cine-story__lead" />
          </div>
        ) : null}

        <div data-zoom-copy className="cine-zoom__copy">
          <div>
            <p className="cine-kicker"><span aria-hidden="true" className="cine-kicker__rule" />{scene.kicker}</p>
            <h2 className="cine-title cine-zoom__title">{scene.title}</h2>
          </div>
          <div>
            <p className="cine-story__body">{scene.body}</p>
            <Actions cta={scene.cta} secondary={scene.secondary} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Curated edits: a gallery wall that slides past as you scroll ─────────── */

/*
 * On computers the scene pins and scrolling moves the track sideways (GSAP,
 * `panGallery` in the effect above); inside each frame the photograph shifts a
 * little against it, like looking through a window. The stand-in photographs
 * carry their own lettering along the bottom; the frame crops that band off
 * and the name is set beneath in the page's own type. On phones it is a
 * swipeable row.
 */
function EditsScene({ scene }: { scene: Extract<Scene, { kind: "edits" }> }) {
  return (
    <section data-pan className="cine-pan" aria-label={scene.title}>
      <div data-pan-track className="cine-pan__track">
        <div className="cine-pan__intro">
          <p className="cine-kicker"><span aria-hidden="true" className="cine-kicker__rule" />{scene.kicker}</p>
          <h2 className="cine-title cine-title--lg">{scene.title}</h2>
          {scene.note ? <p className="cine-pan__note">{scene.note}</p> : null}
        </div>
        {scene.items.map((item) => (
          <Link key={item.href + item.label} href={item.href} data-pan-card className="cine-pan__card">
            <span className="cine-pan__frame">
              <span data-pan-img className="cine-pan__img">
                {item.image ? <Image src={item.image} alt="" fill sizes="(min-width: 768px) 36vw, 74vw" className="object-cover object-top" /> : null}
              </span>
            </span>
            <span className="cine-pan__caption">
              <span className="cine-pan__name">{item.label}</span>
              <span aria-hidden="true" className="cine-pan__go">Explore</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ── A pause: one paragraph, read as you scroll ──────────────────────────── */

function WordsScene({ scene }: { scene: Extract<Scene, { kind: "words" }> }) {
  return (
    <section className="cine-words" aria-label={scene.title}>
      <p className="cine-kicker cine-kicker--center"><span aria-hidden="true" className="cine-kicker__rule" />{scene.title}</p>
      <ScrubText text={scene.body} className="cine-words__text" />
    </section>
  );
}

/* ── The loom film, with its facts ───────────────────────────────────────── */

/**
 * The film carries its own subtitles, so the scene's words only introduce it:
 * they show for a few seconds when the scene arrives, then fade away with the
 * dark overlay, leaving the film and its subtitles clear. A small link stays
 * in the corner. Scrolling away and back introduces it again.
 */
const FILM_INTRO_MS = 6000;

function FilmScene({ scene }: { scene: Extract<Scene, { kind: "film" }> }) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [quiet, setQuiet] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting);
        setInView(visible);
        setQuiet(false);
        clearTimeout(timer);
        if (visible) timer = setTimeout(() => setQuiet(true), FILM_INTRO_MS);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      clearTimeout(timer);
      io.disconnect();
    };
  }, []);

  return (
    <section ref={ref} data-scene className={`cine-scene cine-film ${quiet ? "is-quiet" : ""}`}>
      <div className="cine-film__media">
        {scene.video ? (
          /* The site's own player: plays only while on screen, keeps a pause
             the viewer chose, remembers sound, full screen with exit, and no
             autoplay for reduced motion. Only its frame is new: the whole
             film shows, uncropped, so its own titles stay readable. */
          <VideoPlayer src={scene.video} className="h-full w-full object-contain" />
        ) : (
          <Photo src={scene.image} />
        )}
      </div>
      <div aria-hidden className="cine-scrim cine-scrim--film" />
      <div className="cine-copy cine-copy--center cine-film__intro">
        <Kicker text={scene.kicker} />
        <Headline text={scene.title} live={inView} />
        <p className="cine-body">{scene.body}</p>
        <dl className={`cine-facts ${inView ? "is-live" : ""}`}>
          {scene.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.figure}</dd>
            </div>
          ))}
        </dl>
        <Actions cta={scene.cta} />
      </div>
      <Link href={scene.cta.href} className="cine-film__corner" tabIndex={quiet ? 0 : -1} aria-hidden={!quiet}>
        {scene.cta.label}
      </Link>
    </section>
  );
}

/* ── Shop: tall strips that widen under the pointer ──────────────────────── */

function ShopScene({ scene }: { scene: Extract<Scene, { kind: "shop" }> }) {
  const [ref, inView] = useInView<HTMLElement>(0.35);
  const [hover, setHover] = useState(0);
  return (
    <section ref={ref} data-scene className="cine-scene cine-shop" aria-label="Shop">
      <div className="cine-shop__row" onMouseLeave={() => setHover(0)}>
        {scene.items.map((item, i) => (
          <Link
            key={item.id}
            href={item.href}
            className={`cine-strip ${hover === i ? "is-open" : ""}`}
            onMouseEnter={() => setHover(i)}
            onFocus={() => setHover(i)}
          >
            <div className="cine-strip__img">
              {item.image ? <Image src={item.image} alt="" fill sizes="(min-width: 768px) 40vw, 82vw" className="object-cover" style={{ objectPosition: item.focus ?? "50% 40%" }} /> : null}
            </div>
            <div aria-hidden className="cine-scrim" />
            <div className="cine-strip__copy">
              <Kicker text={item.kicker} />
              <Headline text={item.title} live={inView} />
              {item.body ? <p className="cine-strip__body">{item.body}</p> : null}
              <span className="cine-strip__cta">Shop {item.title.toLowerCase()}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* Scoped to this preview; nothing here touches the site's own styles. */
const CSS = `
/* Scenes flow into one another: a soft fade from black at each join. */
.cine--home #main > section:not(:first-child)::before { content: ""; position: absolute; inset: 0 0 auto; height: 16vh; z-index: 3; pointer-events: none; background: linear-gradient(to bottom, var(--kohl), transparent); }
.cine--home #main > section { position: relative; }

/* Scenes */
.cine-scene { position: relative; height: 100svh; min-height: 640px; overflow: hidden; }
.cine-media { position: absolute; inset: -6% 0; will-change: transform; }
.cine-layer { position: absolute; inset: 0; }
.cine-layer__img { position: absolute; inset: 0; }
/* A slow settle that never restarts with a jump: the resting scale returns
   only after the slide has faded out. */
.cine-layer__img { transform: scale(1.05); transition: transform 1.2s linear 1.5s; }
.cine-layer__img.is-zooming { transform: scale(1); transition: transform 9s cubic-bezier(0.25, 0.1, 0.25, 1); }
.cine-scene--fade .cine-layer { opacity: 0; transition: opacity 1400ms var(--ease); }
.cine-scene--fade .cine-layer[data-state="active"] { opacity: 1; z-index: 2; }
.cine-scene--wipe .cine-layer { clip-path: inset(0 0 0 100%); }
.cine-scene--wipe .cine-layer[data-state="previous"] { clip-path: inset(0 0 0 0); z-index: 1; }
.cine-scene--wipe .cine-layer[data-state="active"] { clip-path: inset(0 0 0 0); z-index: 2; transition: clip-path 1300ms cubic-bezier(0.77, 0, 0.175, 1); }
@keyframes cineZoom { from { transform: scale(1.12); } to { transform: scale(1); } }

.cine-scrim { position: absolute; inset: 0; z-index: 3; pointer-events: none; background: linear-gradient(to top, rgb(16 11 18 / 0.78) 0%, rgb(16 11 18 / 0.28) 40%, transparent 65%), linear-gradient(to right, rgb(16 11 18 / 0.45), transparent 58%); }
.cine-scrim--right { background: linear-gradient(to top, rgb(16 11 18 / 0.78) 0%, rgb(16 11 18 / 0.28) 40%, transparent 65%), linear-gradient(to left, rgb(16 11 18 / 0.45), transparent 58%); }
.cine-scrim--even { background: rgb(16 11 18 / 0.5); }
.cine-scrim--film { background: radial-gradient(ellipse 60% 55% at 50% 50%, rgb(16 11 18 / 0.72), rgb(16 11 18 / 0.5) 70%, rgb(16 11 18 / 0.42)); transition: opacity 1200ms var(--ease); }
.cine-film__intro { transition: opacity 900ms var(--ease), visibility 0s linear 0s; text-shadow: 0 2px 18px rgb(16 11 18 / 0.55); }
.cine-film.is-quiet .cine-film__intro { opacity: 0; visibility: hidden; transition: opacity 900ms var(--ease), visibility 0s linear 900ms; }
.cine-film.is-quiet .cine-scrim--film { opacity: 0; }
.cine-film__corner { position: absolute; z-index: 5; left: var(--pad); top: 120px; font-family: var(--font-cine-display); font-weight: 600; font-size: 14px; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; padding: 12px 20px; border: 1px solid rgb(255 255 255 / 0.6); background: rgb(16 11 18 / 0.35); backdrop-filter: blur(6px); opacity: 0; pointer-events: none; transition: opacity 700ms var(--ease) 600ms, background-color 300ms ease; }
.cine-film.is-quiet .cine-film__corner { opacity: 1; pointer-events: auto; }
.cine-film { background: var(--kohl); height: auto !important; min-height: 0 !important; aspect-ratio: 16 / 9; }
.cine-film__media { position: absolute; inset: 0; }
.cine-film__media video { object-fit: cover !important; }
.cine-film__corner:hover { background: #fff; color: #000; }
@media (max-width: 1099px) {
  .cine-film { aspect-ratio: auto; display: flex; flex-direction: column; }
  .cine-film__media { position: relative; inset: auto; aspect-ratio: 16 / 9; order: 2; }
  .cine-film .cine-film__intro { position: relative; order: 1; left: auto; top: auto; transform: none; width: auto; padding: 120px var(--pad) 56px; opacity: 1 !important; visibility: visible !important; text-shadow: none; }
  .cine-film .cine-scrim--film, .cine-film__corner { display: none; }
  .cine-film .cine-film__intro, .cine-film .cine-film__intro .cine-body { text-align: left; margin-left: 0; }
  .cine-film .cine-film__intro .cine-kicker, .cine-film .cine-film__intro .cine-actions { justify-content: flex-start; }
}

/* Copy */
.cine-copy { position: absolute; z-index: 4; left: var(--pad); bottom: 13vh; width: min(640px, calc(100% - 2 * var(--pad))); }
.cine-copy--right { left: auto; right: var(--pad); text-align: right; }
.cine-copy--right .cine-kicker, .cine-copy--right .cine-actions { justify-content: flex-end; }
.cine-copy--right .cine-body { margin-left: auto; }
.cine-copy--center { left: 50%; bottom: auto; top: 50%; transform: translate(-50%, -50%); text-align: center; width: min(920px, calc(100% - 2 * var(--pad))); }
.cine-copy--center .cine-kicker, .cine-copy--center .cine-actions { justify-content: center; }
.cine-copy--center .cine-body { margin-left: auto; margin-right: auto; }


/* Facts row */
.cine-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin: 40px auto 0; max-width: 760px; }
.cine-facts > div { display: flex; flex-direction: column-reverse; gap: 8px; padding: 0 20px; border-left: 1px solid rgb(255 255 255 / 0.3); opacity: 0; transform: translateY(16px); }
.cine-facts > div:first-child { border-left: 0; }
.cine-facts.is-live > div { animation: cineFade 900ms var(--ease) both; }
.cine-facts.is-live > div:nth-child(2) { animation-delay: 120ms; }
.cine-facts.is-live > div:nth-child(3) { animation-delay: 240ms; }
.cine-facts dd { margin: 0; font-family: var(--font-cine-display); font-weight: 600; font-size: clamp(1.75rem, 1.2rem + 1.8vw, 3rem); line-height: 1; text-transform: uppercase; }
.cine-facts dt { font-family: var(--font-cine-display); font-size: 13px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.72); }

/* Chapters */
.cine-chapters { position: absolute; z-index: 5; right: var(--pad); bottom: 13vh; display: flex; flex-direction: column; align-items: flex-end; gap: 22px; }
.cine-chapters--left { right: auto; left: var(--pad); align-items: flex-start; }
.cine-chapters ol { list-style: none; margin: 0; padding: 0; display: flex; gap: 18px; }
.cine-chapters button { display: block; background: none; border: 0; padding: 8px 0; color: #fff; cursor: pointer; text-align: left; }
.cine-chapter__bar { position: relative; display: block; width: 72px; height: 2px; background: rgb(255 255 255 / 0.28); overflow: hidden; }
.cine-chapter__bar > span { position: absolute; inset: 0; background: #fff; transform: scaleX(0); transform-origin: left; }
.cine-chapter__bar > .is-running { animation: cineBar var(--ms) linear both; }
.cine-chapter__bar > .is-full { transform: scaleX(1); }
.cine-chapter__bar > .is-dim { opacity: 0.5; }
@keyframes cineBar { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.cine-chapter__name { display: block; margin-top: 10px; font-family: var(--font-cine-display); font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; opacity: 0.6; transition: opacity 300ms ease; white-space: nowrap; }
.cine-chapters button[aria-current] .cine-chapter__name, .cine-chapters button:hover .cine-chapter__name { opacity: 1; }
.cine-arrows { display: flex; gap: 10px; }
.cine-arrows button { width: 52px; height: 52px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgb(255 255 255 / 0.5); transition: background-color 300ms ease, color 300ms ease, border-color 300ms ease; }
.cine-arrows button:hover { background: #fff; color: #000; border-color: #fff; }

/* Shop strips */
.cine-shop__row { position: absolute; inset: 0; display: flex; }
.cine-strip { position: relative; flex: 1 1 0; overflow: hidden; border-left: 1px solid var(--kohl); transition: flex-grow 900ms var(--ease); color: #fff; }
.cine-strip:first-child { border-left: 0; }
.cine-strip.is-open { flex-grow: 2.4; }
.cine-strip__img { position: absolute; inset: 0; transition: transform 1200ms var(--ease); }
.cine-strip.is-open .cine-strip__img { transform: scale(1.04); }
.cine-strip__copy { position: absolute; z-index: 4; left: 32px; right: 24px; bottom: 13vh; }
.cine-strip .cine-title { font-size: clamp(2rem, 0.8rem + 2.1vw, 3.75rem); white-space: nowrap; }
.cine-strip__body { margin: 0; max-width: 34ch; max-height: 0; overflow: hidden; font-size: 16px; line-height: 1.5; color: rgb(255 255 255 / 0.85); transition: opacity 500ms var(--ease), max-height 700ms var(--ease); }
.cine-strip.is-open .cine-strip__body { max-height: 7.5em; margin-top: 14px; }
@media (max-width: 767px) { .cine-strip__body { max-height: none; margin-top: 14px; } }
.cine-strip .cine-kicker, .cine-strip__body, .cine-strip__cta { opacity: 0; transform: translateY(10px); transition: opacity 500ms var(--ease), transform 500ms var(--ease); animation: none; }
.cine-strip.is-open .cine-kicker, .cine-strip.is-open .cine-strip__body, .cine-strip.is-open .cine-strip__cta { opacity: 1; transform: none; }
.cine-strip__cta { display: inline-block; margin-top: 20px; font-family: var(--font-cine-display); font-weight: 600; font-size: 14px; letter-spacing: 0.22em; text-transform: uppercase; padding-bottom: 4px; border-bottom: 1px solid var(--zari); }
@media (max-width: 767px) {
  .cine-shop__row { overflow-x: auto; scroll-snap-type: x mandatory; scrollbar-width: none; }
  .cine-strip { flex: 0 0 82vw; scroll-snap-align: start; }
  .cine-strip .cine-kicker, .cine-strip__body, .cine-strip__cta { opacity: 1; transform: none; }
}

/* The house: one photograph pulling back to three */
.cine-zoom { position: relative; background: var(--kohl); --zw: min(25vw, 360px); --zh: calc(var(--zw) * 4 / 3); --zgap: clamp(18px, 2.4vw, 40px); }
.cine-zoom__stage { position: relative; height: 100svh; min-height: 680px; overflow: hidden; }
.cine-zoom__card { position: absolute; top: 11vh; width: var(--zw); height: var(--zh); overflow: hidden; display: block; }
.cine-zoom__card--center { left: calc(50% - var(--zw) / 2); }
.cine-zoom__card--left { left: calc(50% - var(--zw) * 1.5 - var(--zgap)); }
.cine-zoom__card--right { left: calc(50% + var(--zw) / 2 + var(--zgap)); }
.cine-zoom__cards { display: contents; }
/* scale crops the corner mark printed along each stand-in photograph's bottom edge. */
.cine-zoom__card img { scale: 1.12; transform-origin: 50% 0; transition: transform 1000ms var(--ease); }
.cine-zoom__card:hover img { transform: scale(1.04); }
.cine-zoom__promise { position: absolute; inset: 0; z-index: 3; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 0 var(--pad); text-align: center; pointer-events: none; }
.cine-zoom__veil { position: absolute; inset: 0; z-index: -1; background: radial-gradient(ellipse 70% 60% at 50% 50%, rgb(16 11 18 / 0.62), rgb(16 11 18 / 0.38)); }
.cine-story__quote { margin: 0; max-width: 14ch; font-family: var(--font-cine-display); font-weight: 600; text-transform: uppercase; font-size: clamp(3rem, 1.6rem + 6vw, 8.5rem); line-height: 0.92; color: #fff; }
.cine-story__lead { margin: 32px auto 0; max-width: 34ch; font-size: clamp(1.2rem, 1rem + 0.8vw, 1.75rem); line-height: 1.4; color: #fff; }
.cine-zoom__copy { position: absolute; z-index: 4; left: var(--pad); right: var(--pad); bottom: 5vh; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: 40px; align-items: end; }
.cine-zoom__title { font-size: clamp(3rem, 1.6rem + 4.6vw, 6.5rem); }
.cine-story__body { margin: 0; max-width: 46ch; font-size: 17px; line-height: 1.6; color: rgb(255 255 255 / 0.82); }
.cine-zoom .cine-actions, .cine-zoom .cine-kicker { animation: none; }
.cine-zoom .cine-actions { margin-top: 24px; }

@media (max-width: 767px) {
  .cine-zoom__stage { height: auto; min-height: 0; overflow: visible; padding: 110px 0 90px; display: flex; flex-direction: column; }
  .cine-zoom__promise { position: static; order: -1; pointer-events: auto; }
  .cine-zoom__veil { display: none; }
  .cine-zoom__cards { display: flex; gap: 14px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--pad); scrollbar-width: none; padding: 0 var(--pad); margin-top: 56px; }
  .cine-zoom__card { position: relative; top: auto; left: auto !important; width: 76vw; height: auto; aspect-ratio: 3 / 4; flex: none; scroll-snap-align: start; }
  .cine-zoom__card--left { order: 0; } .cine-zoom__card--center { order: 1; } .cine-zoom__card--right { order: 2; }
  .cine-zoom__copy { position: static; grid-template-columns: 1fr; gap: 20px; padding: 40px var(--pad) 0; }
}

@media (prefers-reduced-motion: reduce) {
  .cine-zoom__stage { height: auto; min-height: 0; overflow: visible; padding: 140px var(--pad) 100px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
  .cine-zoom__promise { position: static; grid-column: 1 / -1; order: -1; margin-bottom: 64px; }
  .cine-zoom__veil { display: none; }
  .cine-zoom__cards { display: contents; }
  .cine-zoom__card { position: relative; top: auto; left: auto !important; width: auto; height: auto; aspect-ratio: 3 / 4; }
  .cine-zoom__card--left { order: 0; } .cine-zoom__card--center { order: 1; } .cine-zoom__card--right { order: 2; }
  .cine-zoom__copy { position: static; grid-column: 1 / -1; order: 3; padding-top: 48px; }
}

/* Curated edits: a gallery wall that slides past */
.cine-pan { position: relative; background: var(--kohl); overflow: hidden; }
.cine-pan__track { display: flex; align-items: center; gap: clamp(20px, 2.6vw, 44px); height: 100svh; min-height: 640px; padding: 0 var(--pad); width: max-content; }
.cine-pan__intro { flex: 0 0 min(34vw, 460px); padding-right: 2vw; }
.cine-pan__intro .cine-kicker { animation: none; }
.cine-pan__note { margin: 22px 0 0; max-width: 30ch; font-size: 18px; line-height: 1.55; color: rgb(255 255 255 / 0.75); }
.cine-pan__card { position: relative; flex: 0 0 auto; width: calc(min(64vh, 620px) * 518 / 560); display: flex; flex-direction: column; color: #fff; text-decoration: none; transition: transform 600ms var(--ease); }
.cine-pan__frame { position: relative; display: block; aspect-ratio: 518 / 560; overflow: hidden; }
.cine-pan__caption { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding: 20px 0 0; border-top: 1px solid transparent; }
.cine-pan__name { font-family: var(--font-cine-display); font-weight: 500; font-size: clamp(20px, 1.7vw, 26px); letter-spacing: 0.12em; text-transform: uppercase; line-height: 1.1; }
.cine-pan__go { font-family: var(--font-cine-display); font-weight: 500; font-size: 13px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.6); transition: color 300ms var(--ease); }
.cine-pan__card:hover .cine-pan__go, .cine-pan__card:focus-visible .cine-pan__go { color: #fff; }
.cine-pan__card:hover { transform: translateY(-10px); }
/* Taller than its frame and pinned to the top, so the lettering printed along
   each stand-in photograph's bottom edge falls outside the frame. */
.cine-pan__img { position: absolute; left: 0; right: 0; top: -1.5%; height: calc(684 / 560 * 100%); display: block; }

@media (max-width: 767px) {
  .cine-fan__stage { height: auto; min-height: 0; overflow: visible; padding: 110px 0 90px; }
  .cine-fan__promise { position: static; padding: 0 var(--pad); }
  .cine-fan__deck { position: static; translate: none; width: auto; aspect-ratio: auto; display: flex; gap: 14px; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--pad); scrollbar-width: none; padding: 0 var(--pad); margin-top: 64px; }
  .cine-fan__card { position: relative; inset: auto; flex: 0 0 76vw; aspect-ratio: 3 / 4; scroll-snap-align: start; }
  .cine-fan__copy { position: static; grid-template-columns: 1fr; gap: 20px; padding: 48px var(--pad) 0; }
  .cine-pan__track { width: auto; height: auto; min-height: 0; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--pad); scrollbar-width: none; padding: 100px var(--pad); align-items: center; }
  .cine-pan__intro { flex: 0 0 78vw; scroll-snap-align: start; }
  .cine-pan__card { width: auto; flex: 0 0 72vw; scroll-snap-align: start; }
}

@media (prefers-reduced-motion: reduce) {
  .cine-fan__stage { height: auto; min-height: 0; overflow: visible; padding: 140px 0 100px; }
  .cine-fan__promise { position: static; }
  .cine-fan__deck { position: static; translate: none; width: auto; aspect-ratio: auto; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; max-width: 1200px; margin: 80px auto 0; padding: 0 var(--pad); }
  .cine-fan__card { position: relative; inset: auto; aspect-ratio: 3 / 4; }
  .cine-fan__copy { position: static; padding: 56px var(--pad) 0; }
  .cine-pan__track { width: auto; overflow-x: auto; }
}

/* Words */
.cine-words { padding: 160px var(--pad); background: var(--kohl); text-align: center; }
.cine-kicker--center { justify-content: center; animation: none; }
.cine-words__text { margin: 28px auto 0; max-width: 34ch; font-family: var(--font-cine-text); font-weight: 400; font-size: clamp(1.375rem, 0.9rem + 1.4vw, 2.25rem); line-height: 1.45; color: rgb(255 255 255 / 0.9); text-wrap: pretty; }

@media (max-width: 767px) {
  .cine-story { padding: 110px var(--pad) 96px; }
  .cine-story__promise { margin-bottom: 72px; }
  .cine-story__photos { display: flex; overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding-inline: var(--pad); scrollbar-width: none; margin: 0 calc(-1 * var(--pad)); padding: 0 var(--pad); }
  .cine-story__photo { flex: 0 0 76vw; scroll-snap-align: start; margin-top: 0 !important; }
  .cine-story__copy { grid-template-columns: 1fr; gap: 24px; margin-top: 56px; }
  .cine-words { padding: 120px var(--pad); }
}


@media (max-width: 767px) {
  .cine-copy, .cine-copy--right { left: var(--pad); right: auto; text-align: left; bottom: 22vh; }
  .cine-copy--right .cine-kicker, .cine-copy--right .cine-actions { justify-content: flex-start; }
  .cine-copy--right .cine-body { margin-left: 0; }
  .cine-chapters, .cine-chapters--left { left: var(--pad); right: var(--pad); bottom: 6vh; align-items: flex-start; }
  .cine-chapter__bar { width: 44px; }
  .cine-chapter__name { display: none; }
  .cine-body { font-size: 16px; }
  .cine-facts dd { font-size: 1.5rem; }
  .cine-facts > div { padding: 0 10px; }
}

@media (prefers-reduced-motion: reduce) {
  .cine-word > span, .cine-facts > div { transform: none !important; opacity: 1 !important; animation: none !important; }
  .cine-layer__img, .cine-layer__img.is-zooming { transform: none !important; transition: none !important; }
  .cine-kicker, .cine-body, .cine-actions { animation: none !important; }
  .cine-scene--wipe .cine-layer[data-state="active"] { transition: none; }
}
`;
