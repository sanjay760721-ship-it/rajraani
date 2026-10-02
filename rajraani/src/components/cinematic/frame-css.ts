/*
 * The frame every storefront page shares: the kohl ground and zari gold, the
 * header, the type and buttons, and the footer. The homepage adds its scenes
 * on top (Cinematic.tsx); every other page adds the shop rules (CineFrame).
 */
export const CINE_FRAME_CSS = `
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
.cine-logo { display: inline-flex; align-items: center; gap: 14px; }
.cine-logo__mark { width: auto; height: 34px; }
@media (max-width: 767px) { .cine-logo__mark { height: 26px; } .cine-logo { gap: 10px; } }
.cine-logo { font-family: var(--font-cine-display); font-weight: 600; font-size: 24px; letter-spacing: 0.42em; margin-right: -0.42em; color: #fff; justify-self: start; }
.cine-nav { white-space: nowrap; font-family: var(--font-cine-display); font-weight: 500; font-size: 16px; letter-spacing: 0.17em; text-transform: uppercase; color: #fff; opacity: 0.82; transition: opacity 200ms ease; }
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
`;
