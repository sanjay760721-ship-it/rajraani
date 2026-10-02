module.exports=[73877,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(71987),e=a.i(38246),f=a.i(35450),g=a.i(26304),h=a.i(81783),i=a.i(18159),j=a.i(71783),k=a.i(15038),l=a.i(56121),m=a.i(61899);function n(a=.45){let b=(0,c.useRef)(null),[d,e]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let c=b.current;if(!c)return;let d=!1,f=()=>e(d&&!document.hidden),g=new IntersectionObserver(([a])=>{d=!!a?.isIntersecting,f()},{threshold:a});return g.observe(c),document.addEventListener("visibilitychange",f),()=>{g.disconnect(),document.removeEventListener("visibilitychange",f)}},[a]),[b,d]}function o({text:a,as:d="h2",live:e}){return(0,b.jsx)(d,{className:`cine-title cine-title--${a.length<=8?"xl":a.length<=16?"lg":"md"} ${e?"is-live":""}`,"aria-label":a,children:a.split(" ").map((a,d,e)=>(0,b.jsxs)(c.Fragment,{children:[(0,b.jsx)("span",{className:"cine-word","aria-hidden":"true",children:(0,b.jsx)("span",{style:{"--i":d},children:a})}),d<e.length-1?" ":null]},d))})}function p({text:a}){return a?(0,b.jsxs)("p",{className:"cine-kicker",children:[(0,b.jsx)("span",{"aria-hidden":"true",className:"cine-kicker__rule"}),a]}):null}function q({cta:a,secondary:c}){let d=/^https?:\/\//.test(a.href);return(0,b.jsxs)("div",{className:"cine-actions",children:[d?(0,b.jsx)("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",className:"cine-button",children:(0,b.jsx)("span",{children:a.label})}):(0,b.jsx)(e.default,{href:a.href,className:"cine-button",children:(0,b.jsx)("span",{children:a.label})}),c?(0,b.jsx)(e.default,{href:c.href,className:"cine-link",children:c.label}):null]})}function r({src:a,mobileSrc:c,priority:e,className:f="",focus:g="left"}){if(!a)return null;let h=c&&c!==a;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d.default,{src:a,alt:"",fill:!0,sizes:"100vw",priority:e,className:`object-cover ${"right"===g?"object-[72%_50%]":"object-[28%_50%]"} md:object-center ${h?"hidden md:block":""} ${f}`}),h?(0,b.jsx)(d.default,{src:c,alt:"",fill:!0,sizes:"100vw",priority:e,className:`object-cover md:hidden ${f}`}):null]})}function s({scene:a}){let[d,e]=n(.4),[f,g]=(0,c.useState)(0),[h,i]=(0,c.useState)(null),[j,k]=(0,c.useState)(!1),l=a.slides.length,m=(0,c.useCallback)(a=>{g(b=>{let c=(a%l+l)%l;return c!==b&&i(b),c})},[l]);(0,c.useEffect)(()=>{if(!e||j||l<2||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let a=setTimeout(()=>m(f+1),7e3);return()=>clearTimeout(a)},[e,j,f,l,m]);let t=a.slides[f],u="right"===t.align;return(0,b.jsxs)("section",{ref:d,"data-scene":!0,className:`cine-scene cine-scene--${a.transition}`,"aria-roledescription":"carousel","aria-label":a.slides.map(a=>a.title).join(", "),onMouseEnter:()=>k(!0),onMouseLeave:()=>k(!1),children:[(0,b.jsx)("div",{"data-drift":!0,className:"cine-media",children:a.slides.map((c,d)=>(0,b.jsx)("div",{className:"cine-layer","data-state":d===f?"active":d===h?"previous":"idle","aria-hidden":d!==f,children:(0,b.jsx)("div",{className:`cine-layer__img ${d===f?"is-zooming":""}`,children:(0,b.jsx)(r,{src:c.image,mobileSrc:c.mobileImage,priority:a.isPageTitle&&0===d,focus:"right"===c.align?"left":"right"})})},c.id))}),(0,b.jsx)("div",{"aria-hidden":!0,className:`cine-scrim ${u?"cine-scrim--right":""}`}),(0,b.jsxs)("div",{className:`cine-copy ${u?"cine-copy--right":""}`,children:[(0,b.jsx)(p,{text:t.kicker}),(0,b.jsx)(o,{text:t.title,as:a.isPageTitle?"h1":"h2",live:e}),t.body?(0,b.jsx)("p",{className:"cine-body",children:t.body}):null,(0,b.jsx)(q,{cta:t.cta,secondary:t.secondary})]},t.id)]})}function t({text:a,className:c}){return(0,b.jsx)("p",{"data-reveal":!0,className:c,children:a})}function u({scene:a}){let c=[1,0,2].filter(b=>b<a.photos.length);return(0,b.jsx)("section",{"data-zoom":!0,className:"cine-zoom","aria-label":a.title,children:(0,b.jsxs)("div",{className:"cine-zoom__stage",children:[(0,b.jsx)("div",{className:"cine-zoom__cards",children:c.map(c=>{let f=a.photos[c];return(0,b.jsx)(e.default,{href:f.href,"data-zoom-card":1===c?"center":0===c?"left":"right",className:`cine-zoom__card cine-zoom__card--${1===c?"center":0===c?"left":"right"}`,"aria-label":`${a.title}, piece ${c+1}`,children:f.image?(0,b.jsx)(d.default,{src:f.image,alt:"",fill:!0,sizes:"100vw",className:"object-cover"}):null},c)})}),a.statement?(0,b.jsxs)("div",{"data-zoom-promise":!0,className:"cine-zoom__promise",children:[(0,b.jsx)("div",{"aria-hidden":"true",className:"cine-zoom__veil"}),(0,b.jsx)(t,{text:a.statement.quote,className:"cine-story__quote"}),(0,b.jsx)(t,{text:a.statement.body,className:"cine-story__lead"})]}):null,(0,b.jsxs)("div",{"data-zoom-copy":!0,className:"cine-zoom__copy",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("p",{className:"cine-kicker",children:[(0,b.jsx)("span",{"aria-hidden":"true",className:"cine-kicker__rule"}),a.kicker]}),(0,b.jsx)("h2",{className:"cine-title cine-zoom__title",children:a.title})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"cine-story__body",children:a.body}),(0,b.jsx)(q,{cta:a.cta,secondary:a.secondary})]})]})]})})}function v({scene:a}){return(0,b.jsx)("section",{"data-pan":!0,className:"cine-pan","aria-label":a.title,children:(0,b.jsxs)("div",{"data-pan-track":!0,className:"cine-pan__track",children:[(0,b.jsxs)("div",{className:"cine-pan__intro",children:[(0,b.jsxs)("p",{className:"cine-kicker",children:[(0,b.jsx)("span",{"aria-hidden":"true",className:"cine-kicker__rule"}),a.kicker]}),(0,b.jsx)("h2",{className:"cine-title cine-title--lg",children:a.title}),a.note?(0,b.jsx)("p",{className:"cine-pan__note",children:a.note}):null]}),a.items.map(a=>(0,b.jsxs)(e.default,{href:a.href,"data-pan-card":!0,className:"cine-pan__card",children:[(0,b.jsx)("span",{className:"cine-pan__frame",children:(0,b.jsx)("span",{"data-pan-img":!0,className:"cine-pan__img",children:a.image?(0,b.jsx)(d.default,{src:a.image,alt:"",fill:!0,sizes:"(min-width: 768px) 36vw, 74vw",className:"object-cover object-top"}):null})}),(0,b.jsxs)("span",{className:"cine-pan__caption",children:[(0,b.jsx)("span",{className:"cine-pan__name",children:a.label}),(0,b.jsx)("span",{"aria-hidden":"true",className:"cine-pan__go",children:"Explore"})]})]},a.href+a.label))]})})}function w({scene:a}){return(0,b.jsxs)("section",{className:"cine-words","aria-label":a.title,children:[(0,b.jsxs)("p",{className:"cine-kicker cine-kicker--center",children:[(0,b.jsx)("span",{"aria-hidden":"true",className:"cine-kicker__rule"}),a.title]}),(0,b.jsx)(t,{text:a.body,className:"cine-words__text"})]})}function x({scene:a}){let d=(0,c.useRef)(null),[f,g]=(0,c.useState)(!1),[h,i]=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let a,b=d.current;if(!b)return;let c=new IntersectionObserver(([b])=>{let c=!!b?.isIntersecting;g(c),i(!1),clearTimeout(a),c&&(a=setTimeout(()=>i(!0),6e3))},{threshold:.4});return c.observe(b),()=>{clearTimeout(a),c.disconnect()}},[]),(0,b.jsxs)("section",{ref:d,"data-scene":!0,className:`cine-scene cine-film ${h?"is-quiet":""}`,children:[(0,b.jsx)("div",{className:"cine-film__media",children:a.video?(0,b.jsx)(m.VideoPlayer,{src:a.video,className:"h-full w-full object-contain"}):(0,b.jsx)(r,{src:a.image})}),(0,b.jsx)("div",{"aria-hidden":!0,className:"cine-scrim cine-scrim--film"}),(0,b.jsxs)("div",{className:"cine-copy cine-copy--center cine-film__intro",children:[(0,b.jsx)(p,{text:a.kicker}),(0,b.jsx)(o,{text:a.title,live:f}),(0,b.jsx)("p",{className:"cine-body",children:a.body}),(0,b.jsx)("dl",{className:`cine-facts ${f?"is-live":""}`,children:a.facts.map(a=>(0,b.jsxs)("div",{children:[(0,b.jsx)("dt",{children:a.label}),(0,b.jsx)("dd",{children:a.figure})]},a.label))}),(0,b.jsx)(q,{cta:a.cta})]}),(0,b.jsx)(e.default,{href:a.cta.href,className:"cine-film__corner",tabIndex:h?0:-1,"aria-hidden":!h,children:a.cta.label})]})}function y({scene:a}){let[f,g]=n(.35),[h,i]=(0,c.useState)(0);return(0,b.jsx)("section",{ref:f,"data-scene":!0,className:"cine-scene cine-shop","aria-label":"Shop",children:(0,b.jsx)("div",{className:"cine-shop__row",onMouseLeave:()=>i(0),children:a.items.map((a,c)=>(0,b.jsxs)(e.default,{href:a.href,className:`cine-strip ${h===c?"is-open":""}`,onMouseEnter:()=>i(c),onFocus:()=>i(c),children:[(0,b.jsx)("div",{className:"cine-strip__img",children:a.image?(0,b.jsx)(d.default,{src:a.image,alt:"",fill:!0,sizes:"(min-width: 768px) 40vw, 82vw",className:"object-cover",style:{objectPosition:a.focus??"50% 40%"}}):null}),(0,b.jsx)("div",{"aria-hidden":!0,className:"cine-scrim"}),(0,b.jsxs)("div",{className:"cine-strip__copy",children:[(0,b.jsx)(p,{text:a.kicker}),(0,b.jsx)(o,{text:a.title,live:g}),a.body?(0,b.jsx)("p",{className:"cine-strip__body",children:a.body}):null,(0,b.jsxs)("span",{className:"cine-strip__cta",children:["Shop ",a.title.toLowerCase()]})]})]},a.id))})})}let z=`
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
`;a.s(["Cinematic",0,function({scenes:a,menu:d,footer:e}){let m=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let a=m.current;if(!a||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;g.gsap.registerPlugin(h.ScrollTrigger),h.ScrollTrigger.config({ignoreMobileResize:!0});let b=new f.default({lerp:.085,smoothWheel:!0,wheelMultiplier:.9}),c=a=>b.raf(1e3*a);b.on("scroll",h.ScrollTrigger.update),g.gsap.ticker.add(c),g.gsap.ticker.lagSmoothing(0);let d=g.gsap.matchMedia(),e=g.gsap.context(()=>{a.querySelectorAll("[data-reveal]").forEach(a=>{a.closest("[data-zoom]")&&window.matchMedia("(min-width: 768px)").matches||g.gsap.fromTo(a,{autoAlpha:0,y:48},{autoAlpha:1,y:0,duration:1.2,ease:"power3.out",scrollTrigger:{trigger:a,start:"top 86%",toggleActions:"play none none reverse"}})}),a.querySelectorAll("[data-speed]").forEach(a=>{let b=Number(a.dataset.speed??0);g.gsap.fromTo(a,{yPercent:10*b},{yPercent:-10*b,ease:"none",scrollTrigger:{trigger:a,start:"top bottom",end:"bottom top",scrub:.6}})}),d.add("(min-width: 768px)",()=>{a.querySelectorAll("[data-zoom]").forEach(a=>{let b=a.querySelector(".cine-zoom__stage"),c=a.querySelector('[data-zoom-card="center"]'),d=a.querySelector('[data-zoom-card="left"]'),e=a.querySelector('[data-zoom-card="right"]'),f=a.querySelector("[data-zoom-promise]"),h=a.querySelector("[data-zoom-copy]");if(!b||!c)return;let i=()=>({left:c.offsetLeft,top:c.offsetTop,width:c.offsetWidth,height:c.offsetHeight}),j=i();g.gsap.set(h,{autoAlpha:0,y:30}),g.gsap.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:a,start:"top top",end:"+=170%",pin:!0,anticipatePin:1,scrub:1,invalidateOnRefresh:!0,onRefreshInit:()=>{g.gsap.set(c,{clearProps:"left,top,width,height"}),j=i()}}}).to(f,{autoAlpha:0,yPercent:-18,duration:.7,ease:"power1.in"},.15).fromTo(c,{left:0,top:0,width:()=>b.clientWidth,height:()=>b.clientHeight},{left:()=>j.left,top:()=>j.top,width:()=>j.width,height:()=>j.height,duration:1.4,ease:"power1.inOut",immediateRender:!0},.3).fromTo(d,{xPercent:-140,autoAlpha:0},{xPercent:0,autoAlpha:1,duration:.9,ease:"power2.out"},1.1).fromTo(e,{xPercent:140,autoAlpha:0},{xPercent:0,autoAlpha:1,duration:.9,ease:"power2.out"},1.1).to(h,{autoAlpha:1,y:0,duration:.6,ease:"power2.out"},1.75).to({},{duration:.35})}),a.querySelectorAll("[data-pan]").forEach(a=>{let b=a.querySelector("[data-pan-track]");b&&g.gsap.to(b,{x:()=>-(b.scrollWidth-window.innerWidth),ease:"none",scrollTrigger:{trigger:a,start:"top top",end:()=>`+=${b.scrollWidth-window.innerWidth}`,pin:!0,scrub:1.2,invalidateOnRefresh:!0}})})}),a.querySelectorAll("[data-scene]").forEach(a=>{let b=a.querySelector("[data-drift]");b&&g.gsap.fromTo(b,{yPercent:-5},{yPercent:5,ease:"none",scrollTrigger:{trigger:a,start:"top bottom",end:"bottom top",scrub:.6}})})},a);return()=>{d.revert(),e.revert(),g.gsap.ticker.remove(c),b.destroy()}},[]),(0,b.jsxs)("div",{ref:m,className:"cine cine--home text-white",children:[(0,b.jsx)("style",{children:k.CINE_FRAME_CSS+z+i.CINE_MENU_CSS+l.CINE_FOOTER_CSS}),(0,b.jsx)(j.CineHeader,{menu:d,mode:"overlay"}),(0,b.jsx)("main",{id:"main",children:a.map(a=>"slides"===a.kind?(0,b.jsx)(s,{scene:a},a.id):"film"===a.kind?(0,b.jsx)(x,{scene:a},a.id):"story"===a.kind?(0,b.jsx)(u,{scene:a},a.id):"words"===a.kind?(0,b.jsx)(w,{scene:a},a.id):"edits"===a.kind?(0,b.jsx)(v,{scene:a},a.id):(0,b.jsx)(y,{scene:a},a.id))}),(0,b.jsx)(l.CineFooter,{data:e})]})}])}];

//# sourceMappingURL=src_components_cinematic_Cinematic_tsx_1-fo5kx._.js.map