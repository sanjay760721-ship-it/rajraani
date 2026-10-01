module.exports=[7885,a=>{"use strict";var b=a.i(87924),c=a.i(71783),d=a.i(18159),e=a.i(25963),f=a.i(15038);let g=`
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
`;a.s(["CineFrame",0,function({menu:a,footer:h,children:i}){return(0,b.jsxs)("div",{className:"cine cine--shop flex flex-1 flex-col text-ink-body",children:[(0,b.jsx)("style",{children:f.CINE_FRAME_CSS+d.CINE_MENU_CSS+e.CINE_FOOTER_CSS+g}),(0,b.jsx)(c.CineHeader,{menu:a,mode:"solid"}),(0,b.jsx)("main",{id:"main",className:"cine-shop-main flex-1",children:i}),(0,b.jsx)(e.CineFooter,{data:h})]})}])}];

//# sourceMappingURL=src_components_cinematic_CineFrame_tsx_03glgbw._.js.map