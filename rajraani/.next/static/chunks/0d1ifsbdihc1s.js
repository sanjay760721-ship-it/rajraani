(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,95187,(e,i,n)=>{"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r={callServer:function(){return o.callServer},createServerReference:function(){return l.createServerReference},findSourceMapURL:function(){return a.findSourceMapURL}};for(var t in r)Object.defineProperty(n,t,{enumerable:!0,get:r[t]});let o=e.r(32120),a=e.r(92245),l=e.r(51723)},40877,e=>{"use strict";var i=e.i(43476),n=e.i(71645),r=e.i(22016),t=e.i(54626),o=e.i(98550),a=e.i(54368),l=e.i(49289);let c=`
.cine-footer { position: relative; isolation: isolate; }
.cine-footer::before { content: ""; position: absolute; inset: 0 0 auto; height: min(560px, 70%); z-index: -1; pointer-events: none; background: url("data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20width%3D'60'%20height%3D'60'%3E%3Cpath%20d%3D'M30%200C36%2010%2050%2016%2060%2030%2050%2044%2036%2050%2030%2060%2024%2050%2010%2044%200%2030%2010%2016%2024%2010%2030%200Z'%20fill%3D'none'%20stroke%3D'rgb(201%2C169%2C110)'%20stroke-width%3D'.8'%2F%3E%3Cpath%20d%3D'M30%2021C24.5%2025.5%2023.5%2033%2027.5%2038%2029.5%2040.2%2033%2039.4%2034%2036.2%2035%2032.4%2032%2031%2031%2028.8%2030.2%2026.8%2030.8%2024%2030%2021Z'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'0'%20cy%3D'0'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'60'%20cy%3D'0'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'0'%20cy%3D'60'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3Ccircle%20cx%3D'60'%20cy%3D'60'%20r%3D'2'%20fill%3D'rgb(201%2C169%2C110)'%2F%3E%3C%2Fsvg%3E") repeat 50% 0 / 60px 60px; opacity: 0.16; -webkit-mask-image: radial-gradient(ellipse 70% 85% at 50% 0%, black 30%, transparent 75%); mask-image: radial-gradient(ellipse 70% 85% at 50% 0%, black 30%, transparent 75%); }
.cine-footer__sign { display: flex; flex-direction: column; align-items: center; }
.cine-footer__tagline { margin: 4px 0 0; font-size: 17px; letter-spacing: 0.02em; color: rgb(255 255 255 / 0.62); }
.cine-promises { list-style: none; margin: 0 0 56px; padding: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 10px 0; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.22em; text-transform: uppercase; color: rgb(255 255 255 / 0.62); }
.cine-promises li { padding: 0 22px; }
.cine-promises li + li { border-left: 1px solid rgb(255 255 255 / 0.22); }
@media (max-width: 767px) { .cine-promises { flex-direction: column; align-items: center; gap: 14px; text-align: center; } .cine-promises li + li { border-left: 0; } }
.cine-letters { width: min(1100px, 100%); display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr); gap: 48px; align-items: end; padding: 40px 0 44px; border-top: 1px solid rgb(255 255 255 / 0.14); border-bottom: 1px solid rgb(255 255 255 / 0.14); text-align: left; }
.cine-letters__title { margin: 0; font-family: var(--font-cine-display); font-weight: 600; font-size: clamp(2rem, 1.4rem + 1.8vw, 3rem); line-height: 1; text-transform: uppercase; color: #fff; }
.cine-letters__text { margin: 12px 0 0; max-width: 40ch; font-size: 17px; line-height: 1.5; color: rgb(255 255 255 / 0.7); }
.cine-letters__label { display: block; margin-bottom: 10px; font-family: var(--font-cine-display); font-weight: 500; font-size: 13px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.7); }
.cine-letters__row { display: flex; gap: 12px; }
.cine-letters__row input { flex: 1; min-width: 0; height: 56px; padding: 0 18px; background: transparent; border: 1px solid rgb(255 255 255 / 0.45); color: #fff; font-size: 17px; outline: none; transition: border-color 200ms ease; }
.cine-letters__row input::placeholder { color: rgb(255 255 255 / 0.45); }
.cine-letters__row input:focus { border-color: #fff; }
.cine-button--solid { background: var(--zari); border-color: var(--zari); color: var(--kohl); padding: 0 34px; height: 56px; cursor: pointer; }
.cine-button--solid::before { background: rgb(255 255 255); }
.cine-button--solid:hover { color: var(--kohl); }
.cine-button--solid:disabled { opacity: 0.6; cursor: default; }
.cine-letters__note { margin: 10px 0 0; font-size: 15px; color: #fff; }
.cine-foot-grid { width: min(1100px, 100%); display: grid; grid-template-columns: 1.3fr 1fr 1fr; gap: 48px; padding: 8px 0 24px; text-align: left; }
.cine-foot-grid__h { margin: 0 0 18px; font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; }
.cine-foot-grid__list { list-style: none; margin: 0; padding: 0; display: grid; gap: 10px; font-size: 16px; color: rgb(255 255 255 / 0.62); }
.cine-foot-grid__list a { color: rgb(255 255 255 / 0.82); transition: color 200ms ease; }
.cine-foot-grid__list a:hover, .cine-foot-grid__social a:hover { color: #fff; }
.cine-foot-grid__hours { margin: 18px 0 0; display: grid; gap: 4px; font-size: 15px; color: rgb(255 255 255 / 0.55); }
.cine-foot-grid__social { list-style: none; margin: 24px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px 22px; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; }
.cine-foot-grid__social a { color: rgb(255 255 255 / 0.75); }
.cine-footer__legal a { color: inherit; }
@media (max-width: 767px) { .cine-foot-grid { grid-template-columns: 1fr; gap: 36px; } }
.cine-contact { display: flex; flex-direction: column; align-items: center; gap: 12px; }
.cine-contact__ways { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px 36px; font-size: 17px; }
.cine-contact__ways a { color: rgb(255 255 255 / 0.86); transition: color 200ms ease; }
.cine-contact__ways a:hover { color: #fff; }
.cine-contact__wa { font-family: var(--font-cine-display); font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase; color: #fff !important; padding-bottom: 3px; border-bottom: 2px solid #fff; }
.cine-contact__hours { margin: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 4px 28px; font-size: 15px; color: rgb(255 255 255 / 0.55); }
.cine-contact__hours span { white-space: nowrap; }
html:has(.cine), body:has(.cine) { background: rgb(16 11 18); }
@media (max-width: 767px) {
  .cine-letters { grid-template-columns: 1fr; gap: 24px; }
  .cine-letters__row { flex-direction: column; }
  .cine-letters__row input { flex: none; width: 100%; }
  .cine-button--solid { justify-content: center; }
}
`;e.s(["CINE_FOOTER_CSS",0,c,"CineFooter",0,function({data:e}){let[c,s]=(0,n.useState)(""),[p,d]=(0,n.useState)(null),[m,f]=(0,n.useTransition)(),h=(0,n.useId)(),g=(0,o.useSiteText)(),u=(0,a.announcementParts)(g),x=e.phone.replace(/[^0-9]/g,"");return(0,i.jsxs)("footer",{className:"cine-footer",children:[(0,i.jsxs)("div",{className:"cine-footer__sign",children:[(0,i.jsx)("p",{className:"cine-footer__name","aria-hidden":"true",children:t.BRAND.name.toUpperCase()}),g.tagline?(0,i.jsx)("p",{className:"cine-footer__tagline",children:g.tagline}):null]}),u.length>0?(0,i.jsx)("ul",{className:"cine-promises","aria-label":"Our promises",children:u.map(e=>(0,i.jsx)("li",{children:e},e))}):null,(0,i.jsxs)("section",{className:"cine-letters","aria-labelledby":`${h}-h`,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{id:`${h}-h`,className:"cine-letters__title",children:e.newsletterHeading}),(0,i.jsx)("p",{className:"cine-letters__text",children:e.newsletterText})]}),(0,i.jsxs)("form",{className:"cine-letters__form",onSubmit:e=>{e.preventDefault(),f(async()=>{let e=await (0,l.subscribeAction)(c,"footer");d(e.ok?{ok:!0,text:"Thank you. You are on the list."}:{ok:!1,text:e.error}),e.ok&&s("")})},children:[(0,i.jsx)("label",{htmlFor:h,className:"cine-letters__label",children:"Your email"}),(0,i.jsxs)("div",{className:"cine-letters__row",children:[(0,i.jsx)("input",{id:h,type:"email",required:!0,autoComplete:"email",placeholder:"name@example.com",value:c,onChange:e=>s(e.target.value)}),(0,i.jsx)("button",{type:"submit",disabled:m,className:"cine-button cine-button--solid",children:(0,i.jsx)("span",{children:m?"Sending":e.newsletterButton})})]}),p?(0,i.jsx)("p",{role:p.ok?"status":"alert",className:"cine-letters__note",children:p.text}):null]})]}),(0,i.jsxs)("div",{className:"cine-foot-grid",children:[(0,i.jsxs)("section",{"aria-labelledby":`${h}-talk`,children:[(0,i.jsx)("h2",{id:`${h}-talk`,className:"cine-foot-grid__h",children:e.talkHeading}),(0,i.jsxs)("ul",{className:"cine-foot-grid__list",children:[(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:`mailto:${e.email}`,children:e.email})}),(0,i.jsxs)("li",{children:["Call us: ",(0,i.jsx)("a",{href:`tel:${e.phone.replace(/\s/g,"")}`,children:e.phone})]}),(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:`https://wa.me/${x}`,target:"_blank",rel:"noopener noreferrer",children:e.whatsappLabel})})]}),(0,i.jsxs)("p",{className:"cine-foot-grid__hours",children:[(0,i.jsx)("span",{children:e.hoursLabel}),e.hours.map(e=>(0,i.jsx)("span",{children:e},e))]})]}),e.columns.map((n,t)=>(0,i.jsxs)("nav",{"aria-label":n.heading,children:[(0,i.jsx)("h2",{className:"cine-foot-grid__h",children:n.heading}),(0,i.jsx)("ul",{className:"cine-foot-grid__list",children:n.links.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(r.default,{href:e.href,children:e.label})},e.href+e.label))}),t===e.columns.length-1&&e.socials.length>0?(0,i.jsx)("ul",{className:"cine-foot-grid__social","aria-label":"Social links",children:e.socials.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",children:e.label})},e.label))}):null]},n.heading+t))]}),(0,i.jsxs)("p",{className:"cine-footer__legal",children:["© ",new Date().getFullYear()," ",(0,i.jsx)(r.default,{href:"/",children:e.legalName}),"."]})]})}])},40784,e=>{"use strict";var i=e.i(43476),n=e.i(28047),r=e.i(85886),t=e.i(40877),o=e.i(11255);let a=`
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
`;e.s(["CineFrame",0,function({menu:e,footer:l,children:c}){return(0,i.jsxs)("div",{className:"cine cine--shop flex flex-1 flex-col text-ink-body",children:[(0,i.jsx)("style",{children:o.CINE_FRAME_CSS+r.CINE_MENU_CSS+t.CINE_FOOTER_CSS+a}),(0,i.jsx)(n.CineHeader,{menu:e,mode:"solid"}),(0,i.jsx)("main",{id:"main",className:"cine-shop-main flex-1",children:c}),(0,i.jsx)(t.CineFooter,{data:l})]})}])},28047,85886,e=>{"use strict";var i=e.i(43476),n=e.i(71645),r=e.i(22016),t=e.i(54626),o=e.i(45244),a=e.i(34631),l=e.i(50016),c=e.i(68875),s=e.i(57688),p=e.i(74080);function d({panels:e,onOpenChange:o,children:l}){var c;let[m,f]=(0,n.useState)(null),[h,g]=(0,n.useState)(!1),{currency:u,setCurrency:x,currencies:b}=(0,a.useCurrency)(),[_,v]=(0,n.useState)(null),y=(0,n.useRef)(void 0),k=(0,n.useRef)(void 0),w=(0,n.useRef)(null),j=(0,n.useId)();(0,n.useEffect)(()=>{o?.(null!==m||h)},[m,h,o]),(0,n.useEffect)(()=>()=>{clearTimeout(y.current),clearTimeout(k.current)},[]),(0,n.useEffect)(()=>{if(!m&&!h)return;let e=e=>{"Escape"===e.key&&(m&&document.getElementById(`${j}-t-${m}`)?.focus(),f(null),g(!1))},i=e=>{m&&!w.current?.contains(e.target)&&f(null)};return document.addEventListener("keydown",e),document.addEventListener("pointerdown",i),()=>{document.removeEventListener("keydown",e),document.removeEventListener("pointerdown",i)}},[m,h,j]),(0,n.useEffect)(()=>{if(!h)return;let e=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=e}},[h]);let C=()=>{clearTimeout(y.current),k.current=setTimeout(()=>f(null),360)},N=e.find(e=>e.id===m);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{ref:w,className:"cine-menu",onMouseLeave:C,children:[(0,i.jsx)("nav",{"aria-label":"Main",className:"cine-menu__row",children:e.map(e=>(0,i.jsx)(r.default,{id:`${j}-t-${e.id}`,href:e.href,className:"cine-menu__trigger","aria-expanded":m===e.id,"aria-controls":`${j}-p-${e.id}`,onClick:()=>f(null),onMouseEnter:()=>{var i;return i=e.id,void(clearTimeout(k.current),clearTimeout(y.current),y.current=setTimeout(()=>f(i),m?300:120))},onMouseLeave:C,onFocus:()=>f(e.id),children:e.label},e.id))}),N?(0,i.jsx)("div",{id:`${j}-p-${N.id}`,"aria-label":N.label,className:"cine-drop",onMouseEnter:()=>clearTimeout(k.current),onMouseLeave:C,"data-lenis-prevent":!0,children:(0,i.jsxs)("div",{className:"cine-drop__inner",children:[(0,i.jsx)("div",{className:"cine-drop__cols",children:((c=N).columns&&c.columns.length>0?c.columns:[{heading:c.label,links:c.links}]).map(e=>(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"cine-drop__heading",children:e.heading}),(0,i.jsx)("ul",{children:e.links.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(r.default,{href:e.href,onClick:()=>f(null),className:`cine-drop__link ${e.emphasis?"is-strong":""}`,children:e.label})},e.href+e.label))})]},e.heading))}),N.tiles&&N.tiles.length>0?(0,i.jsx)("div",{className:"cine-drop__tiles",children:N.tiles.slice(0,3).map(e=>(0,i.jsxs)(r.default,{href:e.href,onClick:()=>f(null),className:"cine-tile",children:[(0,i.jsx)("span",{className:"cine-tile__img",children:e.src?(0,i.jsx)(s.default,{src:e.src,alt:"",fill:!0,sizes:"240px",className:"object-cover"}):null}),(0,i.jsx)("span",{className:"cine-tile__label",children:e.label})]},e.href+e.label))}):null]})}):null]}),(0,i.jsxs)("div",{className:"cine-header__end",children:[l,(0,i.jsxs)("button",{type:"button",className:"cine-burger","aria-label":h?"Close menu":"Open menu","aria-expanded":h,"aria-controls":`${j}-mobile`,onClick:()=>{v(w.current?.closest(".cine")??document.body),g(e=>!e)},children:[(0,i.jsx)("span",{}),(0,i.jsx)("span",{})]})]}),h&&_?(0,p.createPortal)((0,i.jsxs)("div",{id:`${j}-mobile`,className:"cine-mobile",role:"dialog","aria-modal":"true","aria-label":"Menu","data-lenis-prevent":!0,children:[(0,i.jsxs)("div",{className:"cine-mobile__top",children:[(0,i.jsx)("span",{className:"cine-logo",children:t.BRAND.name.toUpperCase()}),(0,i.jsx)("button",{type:"button",className:"cine-mobile__close","aria-label":"Close menu",onClick:()=>g(!1),autoFocus:!0,children:(0,i.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6","aria-hidden":"true",children:(0,i.jsx)("path",{d:"M5 5l14 14M19 5L5 19"})})})]}),(0,i.jsx)("nav",{"aria-label":"Mobile",children:e.map(e=>(0,i.jsxs)("details",{className:"cine-mobile__group",children:[(0,i.jsx)("summary",{children:e.label}),(0,i.jsx)("ul",{children:e.links.map(e=>(0,i.jsx)("li",{children:(0,i.jsx)(r.default,{href:e.href,onClick:()=>g(!1),children:e.label})},e.href+e.label))})]},e.id))}),(0,i.jsxs)("div",{className:"cine-mobile__actions",children:[(0,i.jsx)(r.default,{href:"/search",onClick:()=>g(!1),children:"Search"}),(0,i.jsx)(r.default,{href:"/account",onClick:()=>g(!1),children:"Account"}),(0,i.jsx)(r.default,{href:"/wishlist",onClick:()=>g(!1),children:"Wishlist"}),(0,i.jsx)(r.default,{href:"/cart",onClick:()=>g(!1),children:"Bag"}),(0,i.jsxs)("label",{className:"cine-mobile__currency",children:[(0,i.jsx)("span",{children:"Currency"}),(0,i.jsx)("select",{value:u,onChange:e=>x(e.target.value),children:b.map(e=>(0,i.jsx)("option",{value:e,children:e},e))})]})]})]}),_):null]})}let m=`
.cine-menu { display: none; justify-self: center; }
@media (min-width: 1360px) { .cine-menu { display: block; } .cine-burger { display: none; } }
.cine-menu__row { display: flex; gap: 6px; }
.cine-menu__trigger { position: relative; background: none; border: 0; cursor: pointer; padding: 12px clamp(9px, 0.95vw, 16px); font-family: var(--font-cine-display); font-weight: 500; font-size: 16.5px; letter-spacing: 0.17em; text-transform: uppercase; white-space: nowrap; color: #fff; opacity: 0.86; transition: opacity 200ms ease; }
.cine-menu__trigger:hover, .cine-menu__trigger[aria-expanded="true"] { opacity: 1; }
.cine-menu__trigger::after { content: ""; position: absolute; left: clamp(9px, 0.95vw, 16px); right: calc(clamp(9px, 0.95vw, 16px) + 0.17em); bottom: 4px; height: 2px; background: #fff; transform: scaleX(0); transform-origin: left; transition: transform 400ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-menu__trigger[aria-expanded="true"]::after { transform: scaleX(1); }

/* An invisible bridge over the gap between the words and the dropdown, so the
   pointer never leaves the menu on its way down. */
.cine-drop::before { content: ""; position: absolute; left: 0; right: 0; bottom: 100%; height: 24px; }
/* The words always sit above the dropdown and its bridge, so another word can
   be hovered or clicked while a dropdown is open. */
.cine-menu__row { position: relative; z-index: 2; }
.cine-drop { position: absolute; left: 50%; top: calc(100% - 8px); width: min(1200px, calc(100vw - 2 * var(--pad))); translate: -50% 0; background: var(--kohl); border: 1px solid rgb(255 255 255 / 0.12); animation: cineDrop 380ms cubic-bezier(0.22, 1, 0.36, 1) both; }
@keyframes cineDrop { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: none; } }
.cine-drop__inner { display: flex; justify-content: space-between; gap: 48px; padding: 40px 44px 44px; }
.cine-drop__cols { display: flex; gap: 56px; }
.cine-drop__heading { margin: 0 0 18px; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.24em; text-transform: uppercase; color: rgb(255 255 255 / 0.55); }
.cine-drop ul { list-style: none; margin: 0; padding: 0; display: grid; gap: 4px; }
.cine-drop__link { display: inline-block; padding: 5px 0; font-family: var(--font-cine-text); font-size: 18px; color: rgb(255 255 255 / 0.86); transition: color 200ms ease, transform 300ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-drop__link:hover { color: #fff; transform: translateX(4px); }
.cine-drop__link.is-strong { color: #fff; font-weight: 500; }
.cine-drop__tiles { display: flex; gap: 20px; }
.cine-tile { display: block; width: 220px; color: #fff; }
.cine-tile__img { position: relative; display: block; aspect-ratio: 3 / 4; overflow: hidden; background: rgb(255 255 255 / 0.06); }
.cine-tile__img img { transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1); }
.cine-tile:hover .cine-tile__img img { transform: scale(1.05); }
.cine-tile__label { display: block; margin-top: 12px; font-family: var(--font-cine-display); font-weight: 500; font-size: 15px; letter-spacing: 0.18em; text-transform: uppercase; }

.cine-mobile { position: fixed; inset: 0; z-index: 70; overflow-y: auto; background: var(--kohl); padding: 0 var(--pad) 48px; animation: cineDrop 300ms ease both; }
.cine-mobile__top { height: 72px; display: flex; align-items: center; justify-content: space-between; }
.cine-mobile__close { width: 44px; height: 44px; display: inline-flex; align-items: center; justify-content: center; background: none; border: 0; color: #fff; cursor: pointer; }
.cine-mobile__group { border-bottom: 1px solid rgb(255 255 255 / 0.14); }
.cine-mobile__group summary { list-style: none; cursor: pointer; padding: 20px 0; font-family: var(--font-cine-display); font-weight: 600; font-size: 30px; letter-spacing: 0.06em; text-transform: uppercase; color: #fff; }
.cine-mobile__group summary::-webkit-details-marker { display: none; }
.cine-mobile__group ul { list-style: none; margin: 0; padding: 0 0 18px; display: grid; gap: 2px; }
.cine-mobile__group a { display: block; padding: 8px 0; font-size: 18px; color: rgb(255 255 255 / 0.8); }
.cine-mobile__actions { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 32px; }
.cine-mobile__currency { grid-column: 1 / -1; display: flex; align-items: center; justify-content: space-between; height: 52px; padding: 0 18px; border: 1px solid rgb(255 255 255 / 0.4); font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; }
.cine-mobile__currency select { background: transparent; border: 0; color: #fff; font: inherit; letter-spacing: 0.1em; }
.cine-mobile__currency option { color: #000; }
.cine-mobile__actions a { display: flex; align-items: center; justify-content: center; height: 52px; border: 1px solid rgb(255 255 255 / 0.4); font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; }
`;function f(){let{open:e}=(0,l.useSearchModal)(),{itemCount:n,open:t}=(0,o.useCart)(),{itemCount:s}=(0,c.useWishlist)(),{currency:p,setCurrency:d,currencies:m}=(0,a.useCurrency)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",{type:"button",onClick:e,className:"cine-nav cine-hide-sm cine-action",children:"Search"}),(0,i.jsxs)("label",{className:"cine-hide-sm cine-currency",children:[(0,i.jsx)("span",{className:"sr-only",children:"Currency"}),(0,i.jsx)("select",{value:p,onChange:e=>d(e.target.value),className:"cine-nav",children:m.map(e=>(0,i.jsx)("option",{value:e,children:e},e))})]}),(0,i.jsx)(r.default,{href:"/account",className:"cine-nav cine-hide-lg",children:"Account"}),(0,i.jsxs)(r.default,{href:"/wishlist",className:"cine-nav cine-hide-sm","aria-label":`Wishlist${s>0?`, ${s} saved`:""}`,children:["Wishlist",s>0?(0,i.jsx)("span",{className:"cine-count",children:s}):null]}),(0,i.jsxs)("button",{type:"button",onClick:t,className:"cine-nav cine-action","aria-label":`Bag${n>0?`, ${n} items`:""}`,children:["Bag",n>0?(0,i.jsx)("span",{className:"cine-count",children:n}):null]})]})}e.s(["CINE_MENU_CSS",0,m,"CineMenu",0,d],85886),e.s(["CineHeader",0,function({menu:e,mode:o}){let a=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=window.scrollY,i=0,n=()=>{i=0;let n=window.scrollY,r=a.current;r&&(Math.abs(n-e)>4&&(r.toggleAttribute("data-hidden",n>e&&n>140&&!r.hasAttribute("data-menu")),e=n),"overlay"===o&&r.toggleAttribute("data-solid",n>.85*window.innerHeight))},r=()=>{i||(i=requestAnimationFrame(n))};return n(),window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r),cancelAnimationFrame(i)}},[o]),(0,i.jsx)("header",{ref:a,className:"cine-header","data-solid":"solid"===o?"":void 0,children:(0,i.jsxs)("div",{className:"cine-header__row",children:[(0,i.jsx)(r.default,{href:"/",className:"cine-logo","aria-label":`${t.BRAND.name} home`,children:t.BRAND.name.toUpperCase()}),(0,i.jsx)(d,{panels:e,onOpenChange:e=>a.current?.toggleAttribute("data-menu",e),children:(0,i.jsx)(f,{})})]})})}],28047)},11255,e=>{"use strict";let i=`
/* Banaras, in three quiet touches: a kohl ground instead of black, zari gold
   on the fine details, and a jaal behind the footer like the pallu at a
   saree's end. */
.cine { font-family: var(--font-cine-text), system-ui, sans-serif; --ease: cubic-bezier(0.22, 1, 0.36, 1); --pad: max(24px, 4vw); --kohl: rgb(16 11 18); --zari: rgb(201 169 110); background: var(--kohl); }

/* Header */
.cine-header { position: fixed; inset: 0 0 auto; z-index: 50; transition: transform 600ms var(--ease), background-color 400ms ease; background: linear-gradient(to bottom, rgb(16 11 18 / 0.55), transparent); }
.cine-header[data-solid], .cine-header[data-menu] { background: var(--kohl); }
.cine-header[data-hidden] { transform: translateY(-100%); }
.cine-header__row { height: 92px; padding: 0 var(--pad); display: grid; grid-template-columns: auto 1fr auto; column-gap: 32px; align-items: center; }
.cine-header__end { display: flex; justify-content: flex-end; align-items: center; gap: clamp(18px, 1.8vw, 28px); }
@media (max-width: 1359px) { .cine-header__row { display: flex; justify-content: space-between; } }
@media (max-width: 767px) { .cine-header__row { height: 72px; } .cine-logo { font-size: 19px; letter-spacing: 0.3em; margin-right: 0; } .cine-header__end { gap: 20px; } }
.cine-logo { font-family: var(--font-cine-display); font-weight: 600; font-size: 24px; letter-spacing: 0.42em; margin-right: -0.42em; color: #fff; justify-self: start; }
.cine-nav { font-family: var(--font-cine-display); font-weight: 500; font-size: 16px; letter-spacing: 0.17em; text-transform: uppercase; color: #fff; opacity: 0.82; transition: opacity 200ms ease; }
.cine-nav:hover { opacity: 1; }
.cine-hide-sm { display: none; }
.cine-hide-lg { display: none; }
@media (min-width: 1360px) { .cine-hide-lg { display: inline; } }
.cine-action { background: none; border: 0; cursor: pointer; padding: 0; }
.cine-count { display: inline-block; min-width: 18px; margin-left: 6px; padding: 0 5px; font-size: 11px; line-height: 18px; letter-spacing: 0; text-align: center; color: #000; background: #fff; }
.cine-currency select { appearance: none; background: transparent; border: 0; cursor: pointer; padding: 0 14px 0 0; background-image: linear-gradient(45deg, transparent 50%, #fff 50%), linear-gradient(135deg, #fff 50%, transparent 50%); background-position: right 5px center, right 0 center; background-size: 5px 5px; background-repeat: no-repeat; }
.cine-currency option { color: #000; }
@media (min-width: 768px) { .cine-hide-sm { display: inline; } }
.cine-burger { display: inline-flex; flex-direction: column; gap: 7px; width: 30px; padding: 8px 0; cursor: pointer; background: none; border: 0; }
.cine-burger span { display: block; height: 2px; background: #fff; }

/* Type and actions, shared by every page */
.cine-kicker { display: flex; align-items: center; gap: 14px; margin: 0 0 18px; font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.28em; text-transform: uppercase; color: rgb(255 255 255 / 0.85); animation: cineFade 900ms var(--ease) both; }
.cine-kicker__rule { width: 36px; height: 1px; background: var(--zari); }
.cine-title { margin: 0; font-family: var(--font-cine-display); font-weight: 600; text-transform: uppercase; line-height: 0.9; letter-spacing: 0.005em; color: #fff; }
.cine-title--xl { font-size: clamp(3.4rem, 1.6rem + 7.4vw, 9.5rem); }
.cine-title--lg { font-size: clamp(3rem, 1.6rem + 5vw, 6.75rem); }
.cine-title--md { font-size: clamp(2.5rem, 1.5rem + 3.5vw, 4.75rem); line-height: 0.95; }
.cine-word { display: inline-block; overflow: hidden; vertical-align: top; padding-bottom: 0.07em; }
.cine-word > span { display: inline-block; transform: translateY(115%); }
.cine-title.is-live .cine-word > span { animation: cineRise 1100ms var(--ease) both; animation-delay: calc(var(--i) * 70ms + 120ms); }
@keyframes cineRise { from { transform: translateY(115%); } to { transform: translateY(0); } }
@keyframes cineFade { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }

.cine-body { margin: 24px 0 0; max-width: 40ch; font-size: 18px; line-height: 1.55; color: rgb(255 255 255 / 0.86); animation: cineFade 1000ms var(--ease) 350ms both; }
.cine-actions { display: flex; align-items: center; gap: 30px; flex-wrap: wrap; margin-top: 34px; animation: cineFade 1000ms var(--ease) 480ms both; }
.cine-button { position: relative; display: inline-flex; align-items: center; padding: 17px 42px; border: 1px solid var(--zari); font-family: var(--font-cine-display); font-weight: 600; font-size: 15px; letter-spacing: 0.22em; text-transform: uppercase; color: #fff; overflow: hidden; isolation: isolate; transition: color 400ms var(--ease), transform 160ms var(--ease); }
.cine-button::before { content: ""; position: absolute; inset: 0; background: var(--zari); transform: scaleY(0); transform-origin: bottom; transition: transform 400ms var(--ease); z-index: -1; }
.cine-button:hover { color: var(--kohl); }
.cine-button:hover::before { transform: scaleY(1); }
.cine-button:active { transform: scale(0.97); }
.cine-link { font-family: var(--font-cine-display); font-weight: 500; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; color: #fff; padding-bottom: 4px; background: linear-gradient(var(--zari), var(--zari)) 0 100% / 100% 1px no-repeat; transition: background-size 400ms var(--ease); }
.cine-link:hover { background-size: 0 1px; background-position: 100% 100%; }

/* Footer */
.cine-footer { display: flex; flex-direction: column; align-items: center; gap: 40px; padding: 96px var(--pad) 56px; text-align: center; }
.cine-footer__name { margin: 0; font-family: var(--font-cine-display); font-weight: 600; font-size: clamp(3rem, 2rem + 6vw, 8rem); letter-spacing: 0.32em; margin-right: -0.32em; line-height: 1; color: rgb(255 255 255 / 0.12); }
.cine-footer__links { display: flex; flex-wrap: wrap; justify-content: center; gap: 14px 36px; }
.cine-footer__links a, .cine-footer__legal { font-family: var(--font-cine-display); font-weight: 500; font-size: 14px; letter-spacing: 0.2em; text-transform: uppercase; color: rgb(255 255 255 / 0.7); }
.cine-footer__links a:hover { color: #fff; }
.cine-footer__legal { margin: 0; font-size: 12px; color: rgb(255 255 255 / 0.45); }

.cine :focus-visible { outline: 2px solid #fff; outline-offset: 3px; }
`;e.s(["CINE_FRAME_CSS",0,i])},34631,e=>{"use strict";var i=e.i(43476),n=e.i(71645),r=e.i(71737),t=e.i(15342);let o=(0,r.createLocalStore)("currency",t.BASE_CURRENCY,e=>"string"==typeof e&&t.CURRENCIES.includes(e)),a=(0,n.createContext)(void 0);e.s(["CurrencyProvider",0,function({children:e}){let r=(0,n.useSyncExternalStore)(o.subscribe,o.getSnapshot,o.getServerSnapshot),l=(0,n.useCallback)(e=>{o.write(e)},[]),c=(0,n.useMemo)(()=>({currency:r,setCurrency:l,currencies:t.CURRENCIES}),[r,l]);return(0,i.jsx)(a,{value:c,children:e})},"useCurrency",0,function(){let e=(0,n.useContext)(a);if(!e)throw Error("useCurrency must be used inside a CurrencyProvider");return e}])},50016,e=>{"use strict";var i=e.i(43476),n=e.i(71645);let r=(0,n.createContext)(void 0);e.s(["SearchProvider",0,function({children:e}){let[t,o]=(0,n.useState)(!1),a=(0,n.useCallback)(()=>o(!0),[]),l=(0,n.useCallback)(()=>o(!1),[]),c=(0,n.useMemo)(()=>({isOpen:t,open:a,close:l}),[t,a,l]);return(0,i.jsx)(r,{value:c,children:e})},"useSearchModal",0,function(){let e=(0,n.useContext)(r);if(!e)throw Error("useSearchModal must be used inside a SearchProvider");return e}])},98550,54368,e=>{"use strict";var i=e.i(43476),n=e.i(71645),r=e.i(54626);let t=e=>r.INFO_TABS.find(i=>i.id===e),o={"announce.1":r.ANNOUNCEMENT_PARTS[0],"announce.2":r.ANNOUNCEMENT_PARTS[1],"announce.3":r.ANNOUNCEMENT_PARTS[2],tagline:r.BRAND.line,"contact.email":r.BRAND.supportEmail,"contact.phone":r.BRAND.supportPhone,"contact.hours":r.BRAND.supportHours.split(" · ").join("\n"),"home.storyKicker":"The collection","home.shopThePieces":"Shop the pieces","home.filmKicker":"Handloom heritage","home.fact1.figure":"6–26","home.fact1.label":"Weeks on the loom","home.fact2.figure":"By hand","home.fact2.label":"Every thread","home.fact3.figure":"Varanasi","home.fact3.label":"Where it is woven","home.shopKicker":"Shop","home.editsKicker":"For the occasion","home.editsTitle":"Curated edits","home.editsNote":"Bridal, gifting, real zari and repoussé, each chosen piece by piece.","home.campaignKicker":"Campaign","home.visitButton":"Book a visit","product.promise":r.BRAND.promise,"product.handmadeNote":r.BRAND.irregularityNote,"product.tab.shipping.label":t("shipping").label,"product.tab.shipping.lines":t("shipping").items.join("\n"),"product.tab.dimensions.label":t("dimensions").label,"product.tab.dimensions.lines":t("dimensions").items.join("\n"),"product.tab.care.label":t("care").label,"product.tab.care.lines":t("care").items.join("\n"),"product.tab.other.label":t("other").label,"product.tab.other.lines":t("other").items.join("\n")};e.s(["SITE_TEXT_DEFAULTS",0,o,"announcementParts",0,function(e){return[e["announce.1"],e["announce.2"],e["announce.3"]].filter(e=>e.trim())},"productTabs",0,function(e){return["shipping","dimensions","care","other"].map(i=>({id:i,label:e[`product.tab.${i}.label`],items:e[`product.tab.${i}.lines`].split("\n").map(e=>e.trim()).filter(Boolean)})).filter(e=>e.label.trim()&&e.items.length)}],54368);let a=(0,n.createContext)(o);e.s(["SiteTextProvider",0,function({value:e,children:n}){return(0,i.jsx)(a.Provider,{value:e,children:n})},"useSiteText",0,()=>(0,n.useContext)(a)],98550)},49289,e=>{"use strict";var i=e.i(95187);let n=(0,i.createServerReference)("60e6b8f9384acb095ae3e6d1ce2ff1f4554abf81fe",i.callServer,void 0,i.findSourceMapURL,"subscribeAction");e.s(["subscribeAction",0,n])}]);