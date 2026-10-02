module.exports=[7885,a=>{"use strict";var b=a.i(87924),c=a.i(71783),d=a.i(18159),e=a.i(56121),f=a.i(15038),g=a.i(72131),h=a.i(50944),i=a.i(35450),j=a.i(26304),k=a.i(81783);function l(){let a=(0,h.usePathname)();return(0,g.useEffect)(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;j.gsap.registerPlugin(k.ScrollTrigger);let a=new i.default({lerp:.1,smoothWheel:!0,wheelMultiplier:.95}),b=b=>a.raf(1e3*b);a.on("scroll",k.ScrollTrigger.update),j.gsap.ticker.add(b),j.gsap.ticker.lagSmoothing(0);let c="power3.out",d=document.querySelector(".cine-shop-main"),e=[],f=[],g=j.gsap.context(()=>{if(!d)return;d.querySelectorAll(".cine-page-head .cine-kicker__rule, .pdp-kicker .cine-kicker__rule").forEach(a=>{j.gsap.fromTo(a,{scaleX:0,transformOrigin:"left center"},{scaleX:1,duration:1,ease:c,delay:.15})});let a=j.gsap.utils.toArray(d.querySelectorAll(".product-card"));a.length&&(j.gsap.set(a,{autoAlpha:0,y:40}),k.ScrollTrigger.batch(a,{start:"top 92%",once:!0,onEnter:a=>{j.gsap.to(a,{autoAlpha:1,y:0,duration:.9,ease:c,stagger:.09,overwrite:!0}),a.forEach(a=>{let b=a.querySelector("img");b&&j.gsap.fromTo(b,{scale:1.07},{scale:1,duration:1.4,ease:"power2.out"})})}}));let b=d.querySelector(".pdp-details")?.parentElement?.firstElementChild;if(b instanceof HTMLElement){let a=b.querySelector("img");a&&j.gsap.fromTo(a,{scale:1.06,autoAlpha:.6},{scale:1,autoAlpha:1,duration:1.4,ease:"power2.out"})}let g=d.querySelector(".pdp-details");if(g){let a=[...g.children].filter(a=>!a.matches("dl"));j.gsap.from(a,{autoAlpha:0,y:24,duration:.8,ease:c,stagger:.07,delay:.1});let b=g.querySelectorAll("dl > div");b.length&&j.gsap.from(b,{autoAlpha:0,x:-16,duration:.6,ease:c,stagger:.06,scrollTrigger:{trigger:b[0],start:"top 90%",once:!0}})}d.querySelectorAll("dl dd").forEach(a=>{a.dataset.figure??=a.textContent?.trim()??"",f.push(a);let b=/^(\d+)(\D.*)?$/.exec(a.dataset.figure);if(!b||!a.closest("section")?.textContent?.match(/came from/i))return;let c=Number(b[1]),d=b[2]??"",e={n:0};j.gsap.to(e,{n:c,duration:1.4,ease:"power2.out",scrollTrigger:{trigger:a,start:"top 90%",once:!0},onUpdate:()=>{a.textContent=`${Math.round(e.n)}${d}`}})}),d.querySelectorAll(".ed-hero").forEach(a=>{let b=a.querySelector(".ed-hero__art img, .ed-hero__art");if(!b)return;j.gsap.fromTo(b,{yPercent:0},{yPercent:14,ease:"none",scrollTrigger:{trigger:a,start:"top top",end:"bottom top",scrub:!0}});let d=a.querySelector(".ed-hero__copy");d&&j.gsap.from(d.querySelectorAll(".ed-kicker, .ed-hero__title, .ed-hero__body, .ed-hero__cta"),{autoAlpha:0,y:36,duration:1,ease:c,stagger:.12,delay:.2})}),d.querySelectorAll(".ed-media").forEach(a=>{j.gsap.fromTo(a,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:1.3,ease:"power4.inOut",scrollTrigger:{trigger:a,start:"top 85%",once:!0}});let b=a.querySelector("img");b&&j.gsap.fromTo(b,{scale:1.15},{scale:1,duration:1.8,ease:"power2.out",scrollTrigger:{trigger:a,start:"top 85%",once:!0}})}),d.querySelectorAll(".ed-text, .ed-rich, .ed-poetry").forEach(a=>{j.gsap.from(a.children,{autoAlpha:0,y:32,duration:.9,ease:c,stagger:.1,scrollTrigger:{trigger:a,start:"top 85%",once:!0}})}),d.querySelectorAll(".ed-quote").forEach(a=>{let b=a.textContent??"";e.push({el:a,html:a.innerHTML}),a.setAttribute("aria-label",b.trim()),a.innerHTML=b.trim().split(/\s+/).map(a=>`<span class="motion-word" aria-hidden="true"><span>${a.replace(/[&<>]/g,a=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[a])}</span></span>`).join(" "),j.gsap.from(a.querySelectorAll(".motion-word > span"),{yPercent:110,duration:1,ease:c,stagger:.05,scrollTrigger:{trigger:a,start:"top 85%",once:!0}})})},d??void 0),h=document.querySelector(".cine--shop .cine-footer__name"),l=h?j.gsap.from(h,{letterSpacing:"0.7em",autoAlpha:0,y:30,duration:1.6,ease:"power2.out",scrollTrigger:{trigger:h,start:"top 95%",once:!0}}):void 0,m=()=>k.ScrollTrigger.refresh();window.addEventListener("load",m);let n=setTimeout(m,800);return()=>{for(let{el:a,html:b}of(clearTimeout(n),window.removeEventListener("load",m),l?.scrollTrigger?.kill(),l?.kill(),g.revert(),e))a.innerHTML=b;for(let a of f)a.dataset.figure&&(a.textContent=a.dataset.figure);j.gsap.ticker.remove(b),a.destroy()}},[a]),null}let m=`
/* The shop's pages are white, with black type in the homepage's capitals and
   zari gold for the fine details; a white ground also shows a saree's colour
   honestly. The header, menu and footer are redrawn for white below. */
.cine--shop { --kohl: rgb(255 255 255); background: #fff; color: var(--color-ink-body); }
html:has(.cine--shop), body:has(.cine--shop) { background: #fff; }
.cine--shop .cine-header[data-solid], .cine--shop .cine-header[data-menu] { background: #fff; border-bottom: 1px solid var(--color-rule); }
.cine--shop :is(.cine-logo, .cine-nav, .cine-menu__trigger) { color: var(--color-ink); }
.cine--shop .cine-menu__trigger::after { background: var(--color-ink); }
.cine--shop .cine-count { background: var(--color-ink); color: #fff; }
.cine--shop .cine-currency select { background-image: linear-gradient(45deg, transparent 50%, var(--color-ink) 50%), linear-gradient(135deg, var(--color-ink) 50%, transparent 50%); }
.cine--shop .cine-burger span { background: var(--color-ink); }
.cine--shop .cine-drop { background: #fff; border-color: var(--color-rule); }
.cine--shop .cine-drop__heading { color: var(--color-ink-muted); }
.cine--shop .cine-drop__link { color: rgb(17 16 19 / 0.78); }
.cine--shop :is(.cine-drop__link:hover, .cine-drop__link.is-strong, .cine-tile) { color: var(--color-ink); }
.cine--shop .cine-tile__img { background: var(--color-bg-alt); }
.cine--shop .cine-mobile { background: #fff; }
.cine--shop :is(.cine-mobile__close, .cine-mobile__group summary, .cine-mobile__currency, .cine-mobile__currency select, .cine-mobile__actions a) { color: var(--color-ink); }
.cine--shop .cine-mobile__group a { color: rgb(17 16 19 / 0.78); }
.cine--shop :is(.cine-mobile__group, .cine-mobile__actions a, .cine-mobile__currency) { border-color: var(--color-rule); }
/* Lenis owns smooth scrolling; the browser's own would stack on top of it. */
html.lenis { scroll-behavior: auto !important; }
.motion-word { display: inline-block; overflow: hidden; vertical-align: top; padding-bottom: 0.06em; }
.motion-word > span { display: inline-block; }
/* The name gathers in from wide spacing; keep that inside the screen. */
.cine--shop .cine-footer { overflow-x: clip; }
.cine--shop .cine-footer { background: var(--color-bg-alt); }
.cine--shop .cine-footer::before { opacity: 0.22; }
.cine--shop .cine-footer__name { color: rgb(17 16 19 / 0.09); }
.cine--shop :is(.cine-footer__tagline, .cine-promises, .cine-letters__text, .cine-foot-grid__list, .cine-foot-grid__hours, .cine-footer__legal) { color: var(--color-ink-muted); }
.cine--shop .cine-promises li + li { border-left-color: var(--color-rule); }
.cine--shop .cine-letters { border-color: var(--color-rule); }
.cine--shop :is(.cine-letters__title, .cine-foot-grid__h, .cine-letters__note) { color: var(--color-ink); }
.cine--shop .cine-letters__label { color: var(--color-ink-muted); }
.cine--shop .cine-letters__row input { border-color: var(--color-rule-input); color: var(--color-ink); background: #fff; }
.cine--shop .cine-letters__row input::placeholder { color: var(--color-rule-input); }
.cine--shop .cine-letters__row input:focus { border-color: var(--color-ink); }
.cine--shop .cine-button--solid { background: var(--color-ink); border-color: var(--color-ink); color: #fff; }
.cine--shop .cine-button--solid::before { background: var(--zari); }
.cine--shop .cine-button--solid:hover { color: var(--color-ink); }
.cine--shop :is(.cine-foot-grid__list a, .cine-foot-grid__social a) { color: var(--color-ink-body); }
.cine--shop :is(.cine-foot-grid__list a:hover, .cine-foot-grid__social a:hover) { color: var(--color-ink); }
.cine--shop :focus-visible { outline-color: var(--color-ink); }
.cine-shop-main { padding-top: 92px; }
@media (max-width: 767px) { .cine-shop-main { padding-top: 72px; } }
/* A page's opening, in the homepage's voice (PageHead): label, title, intro,
   stacked on one edge. The title rises out of a mask, as the homepage's do. */
.cine-page-head { padding: 44px 0 40px; margin-bottom: 40px; border-bottom: 1px solid var(--color-rule); }
.cine-page-head--center { text-align: center; }
.cine-page-head .cine-kicker { animation: none; margin-bottom: 18px; color: var(--color-ink-muted); }
.cine-page-head--center .cine-kicker { justify-content: center; }
.cine-page-title { margin: 0; font-family: var(--font-cine-display); font-weight: 600; text-transform: uppercase; line-height: 0.92; letter-spacing: 0.005em; color: var(--color-ink); text-wrap: balance; animation: cineHeadIn 1100ms var(--ease) 80ms both; }
.cine-page-title--lg { font-size: clamp(3rem, 1.6rem + 4.4vw, 6.5rem); }
.cine-page-title--md { font-size: clamp(2.5rem, 1.5rem + 3vw, 4.5rem); }
.cine-page-head__intro { margin-top: 24px; max-width: 60ch; font-size: 17px; line-height: 1.65; color: var(--color-ink-body); animation: cineFade 1000ms var(--ease) 300ms both; }
.cine-page-head--center .cine-page-head__intro { margin-left: auto; margin-right: auto; }
@keyframes cineHeadIn { from { clip-path: inset(0 0 100% 0); transform: translateY(35%); } to { clip-path: inset(-20% -5% -20% -5%); transform: none; } }
/* Titles drawn by the page's own blocks (a story under its photograph) take
   the same capitals and the same rise. */
.cine--shop main :is(h1.text-h1, h1.text-display) { font-family: var(--font-cine-display); font-size: clamp(2.5rem, 1.5rem + 3vw, 4.5rem); line-height: 0.95; letter-spacing: 0.005em; animation: cineHeadIn 1100ms var(--ease) 80ms both; }
.cine-card-title { margin: 0; font-family: var(--font-cine-display); font-weight: 600; font-size: 2.25rem; line-height: 1; text-transform: uppercase; letter-spacing: 0.02em; }
@media (max-width: 767px) { .cine-page-head { padding: 28px 0 32px; margin-bottom: 28px; } .cine-page-head__intro { font-size: 16px; } }
@media (prefers-reduced-motion: reduce) { .cine-page-title, .cine-page-head__intro, .cine--shop main h1 { animation: none !important; } }
/* Product page: the name large, the descriptive title beneath, the price in zari. */
.pdp-details { padding-left: clamp(0px, 2vw, 32px); }
.pdp-names { display: flex; flex-direction: column; }
.pdp-kicker { order: -2; margin: 0 0 14px; animation: none; color: var(--color-ink-muted); }
.pdp-name { order: -1; margin: 0; font-family: var(--font-cine-display); font-weight: 600; text-transform: uppercase; font-size: clamp(2.75rem, 1.6rem + 3.2vw, 4.75rem); line-height: 0.92; letter-spacing: 0.01em; color: var(--color-ink); }
.pdp-title { margin: 14px 0 0; font-family: var(--font-cine-text); font-weight: 400; text-transform: none; letter-spacing: 0; font-size: 18px; line-height: 1.45; color: var(--color-ink-body); }
.pdp-price { margin: 22px 0 2px; font-family: var(--font-cine-display); font-weight: 500; font-size: 28px; letter-spacing: 0.04em; color: var(--color-accent); }
.pdp-related-title { display: flex; align-items: center; justify-content: center; gap: 14px; margin: 0 0 40px; font-family: var(--font-cine-display); font-weight: 500; font-size: 15px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--color-ink-muted); }
.cine--shop .cine-footer { margin-top: 64px; border-top: 1px solid rgb(255 255 255 / 0.08); }
`;a.s(["CineFrame",0,function({menu:a,footer:g,children:h}){return(0,b.jsxs)("div",{className:"cine cine--shop flex flex-1 flex-col text-ink-body",children:[(0,b.jsx)("style",{children:f.CINE_FRAME_CSS+d.CINE_MENU_CSS+e.CINE_FOOTER_CSS+m}),(0,b.jsx)(c.CineHeader,{menu:a,mode:"solid"}),(0,b.jsx)("main",{id:"main",className:"cine-shop-main flex-1",children:h}),(0,b.jsx)(e.CineFooter,{data:g}),(0,b.jsx)(l,{})]})}],7885)}];

//# sourceMappingURL=src_components_cinematic_CineFrame_tsx_03glgbw._.js.map