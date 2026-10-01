module.exports=[25963,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246),e=a.i(58618),f=a.i(26141),g=a.i(39970),h=a.i(73925);let i=`
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
`;a.s(["CINE_FOOTER_CSS",0,i,"CineFooter",0,function({data:a}){let[i,j]=(0,c.useState)(""),[k,l]=(0,c.useState)(null),[m,n]=(0,c.useTransition)(),o=(0,c.useId)(),p=(0,f.useSiteText)(),q=(0,g.announcementParts)(p),r=a.phone.replace(/[^0-9]/g,"");return(0,b.jsxs)("footer",{className:"cine-footer",children:[(0,b.jsxs)("div",{className:"cine-footer__sign",children:[(0,b.jsx)("p",{className:"cine-footer__name","aria-hidden":"true",children:e.BRAND.name.toUpperCase()}),p.tagline?(0,b.jsx)("p",{className:"cine-footer__tagline",children:p.tagline}):null]}),q.length>0?(0,b.jsx)("ul",{className:"cine-promises","aria-label":"Our promises",children:q.map(a=>(0,b.jsx)("li",{children:a},a))}):null,(0,b.jsxs)("section",{className:"cine-letters","aria-labelledby":`${o}-h`,children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{id:`${o}-h`,className:"cine-letters__title",children:a.newsletterHeading}),(0,b.jsx)("p",{className:"cine-letters__text",children:a.newsletterText})]}),(0,b.jsxs)("form",{className:"cine-letters__form",onSubmit:a=>{a.preventDefault(),n(async()=>{let a=await (0,h.subscribeAction)(i,"footer");l(a.ok?{ok:!0,text:"Thank you. You are on the list."}:{ok:!1,text:a.error}),a.ok&&j("")})},children:[(0,b.jsx)("label",{htmlFor:o,className:"cine-letters__label",children:"Your email"}),(0,b.jsxs)("div",{className:"cine-letters__row",children:[(0,b.jsx)("input",{id:o,type:"email",required:!0,autoComplete:"email",placeholder:"name@example.com",value:i,onChange:a=>j(a.target.value)}),(0,b.jsx)("button",{type:"submit",disabled:m,className:"cine-button cine-button--solid",children:(0,b.jsx)("span",{children:m?"Sending":a.newsletterButton})})]}),k?(0,b.jsx)("p",{role:k.ok?"status":"alert",className:"cine-letters__note",children:k.text}):null]})]}),(0,b.jsxs)("div",{className:"cine-foot-grid",children:[(0,b.jsxs)("section",{"aria-labelledby":`${o}-talk`,children:[(0,b.jsx)("h2",{id:`${o}-talk`,className:"cine-foot-grid__h",children:a.talkHeading}),(0,b.jsxs)("ul",{className:"cine-foot-grid__list",children:[(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:`mailto:${a.email}`,children:a.email})}),(0,b.jsxs)("li",{children:["Call us: ",(0,b.jsx)("a",{href:`tel:${a.phone.replace(/\s/g,"")}`,children:a.phone})]}),(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:`https://wa.me/${r}`,target:"_blank",rel:"noopener noreferrer",children:a.whatsappLabel})})]}),(0,b.jsxs)("p",{className:"cine-foot-grid__hours",children:[(0,b.jsx)("span",{children:a.hoursLabel}),a.hours.map(a=>(0,b.jsx)("span",{children:a},a))]})]}),a.columns.map((c,e)=>(0,b.jsxs)("nav",{"aria-label":c.heading,children:[(0,b.jsx)("h2",{className:"cine-foot-grid__h",children:c.heading}),(0,b.jsx)("ul",{className:"cine-foot-grid__list",children:c.links.map(a=>(0,b.jsx)("li",{children:(0,b.jsx)(d.default,{href:a.href,children:a.label})},a.href+a.label))}),e===a.columns.length-1&&a.socials.length>0?(0,b.jsx)("ul",{className:"cine-foot-grid__social","aria-label":"Social links",children:a.socials.map(a=>(0,b.jsx)("li",{children:(0,b.jsx)("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",children:a.label})},a.label))}):null]},c.heading+e))]}),(0,b.jsxs)("p",{className:"cine-footer__legal",children:["© ",new Date().getFullYear()," ",(0,b.jsx)(d.default,{href:"/",children:a.legalName}),"."]})]})}])},71783,18159,a=>{"use strict";var b=a.i(87924),c=a.i(72131),d=a.i(38246),e=a.i(58618),f=a.i(7544),g=a.i(20586),h=a.i(29119),i=a.i(70686),j=a.i(71987),k=a.i(35112);function l({panels:a,onOpenChange:f,children:h}){var i;let[m,n]=(0,c.useState)(null),[o,p]=(0,c.useState)(!1),{currency:q,setCurrency:r,currencies:s}=(0,g.useCurrency)(),[t,u]=(0,c.useState)(null),v=(0,c.useRef)(void 0),w=(0,c.useRef)(void 0),x=(0,c.useRef)(null),y=(0,c.useId)();(0,c.useEffect)(()=>{f?.(null!==m||o)},[m,o,f]),(0,c.useEffect)(()=>()=>{clearTimeout(v.current),clearTimeout(w.current)},[]),(0,c.useEffect)(()=>{if(!m&&!o)return;let a=a=>{"Escape"===a.key&&(m&&document.getElementById(`${y}-t-${m}`)?.focus(),n(null),p(!1))},b=a=>{m&&!x.current?.contains(a.target)&&n(null)};return document.addEventListener("keydown",a),document.addEventListener("pointerdown",b),()=>{document.removeEventListener("keydown",a),document.removeEventListener("pointerdown",b)}},[m,o,y]),(0,c.useEffect)(()=>{if(!o)return;let a=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=a}},[o]);let z=()=>{clearTimeout(v.current),w.current=setTimeout(()=>n(null),360)},A=a.find(a=>a.id===m);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{ref:x,className:"cine-menu",onMouseLeave:z,children:[(0,b.jsx)("nav",{"aria-label":"Main",className:"cine-menu__row",children:a.map(a=>(0,b.jsx)(d.default,{id:`${y}-t-${a.id}`,href:a.href,className:"cine-menu__trigger","aria-expanded":m===a.id,"aria-controls":`${y}-p-${a.id}`,onClick:()=>n(null),onMouseEnter:()=>{var b;return b=a.id,void(clearTimeout(w.current),clearTimeout(v.current),v.current=setTimeout(()=>n(b),m?300:120))},onMouseLeave:z,onFocus:()=>n(a.id),children:a.label},a.id))}),A?(0,b.jsx)("div",{id:`${y}-p-${A.id}`,"aria-label":A.label,className:"cine-drop",onMouseEnter:()=>clearTimeout(w.current),onMouseLeave:z,"data-lenis-prevent":!0,children:(0,b.jsxs)("div",{className:"cine-drop__inner",children:[(0,b.jsx)("div",{className:"cine-drop__cols",children:((i=A).columns&&i.columns.length>0?i.columns:[{heading:i.label,links:i.links}]).map(a=>(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{className:"cine-drop__heading",children:a.heading}),(0,b.jsx)("ul",{children:a.links.map(a=>(0,b.jsx)("li",{children:(0,b.jsx)(d.default,{href:a.href,onClick:()=>n(null),className:`cine-drop__link ${a.emphasis?"is-strong":""}`,children:a.label})},a.href+a.label))})]},a.heading))}),A.tiles&&A.tiles.length>0?(0,b.jsx)("div",{className:"cine-drop__tiles",children:A.tiles.slice(0,3).map(a=>(0,b.jsxs)(d.default,{href:a.href,onClick:()=>n(null),className:"cine-tile",children:[(0,b.jsx)("span",{className:"cine-tile__img",children:a.src?(0,b.jsx)(j.default,{src:a.src,alt:"",fill:!0,sizes:"240px",className:"object-cover"}):null}),(0,b.jsx)("span",{className:"cine-tile__label",children:a.label})]},a.href+a.label))}):null]})}):null]}),(0,b.jsxs)("div",{className:"cine-header__end",children:[h,(0,b.jsxs)("button",{type:"button",className:"cine-burger","aria-label":o?"Close menu":"Open menu","aria-expanded":o,"aria-controls":`${y}-mobile`,onClick:()=>{u(x.current?.closest(".cine")??document.body),p(a=>!a)},children:[(0,b.jsx)("span",{}),(0,b.jsx)("span",{})]})]}),o&&t?(0,k.createPortal)((0,b.jsxs)("div",{id:`${y}-mobile`,className:"cine-mobile",role:"dialog","aria-modal":"true","aria-label":"Menu","data-lenis-prevent":!0,children:[(0,b.jsxs)("div",{className:"cine-mobile__top",children:[(0,b.jsx)("span",{className:"cine-logo",children:e.BRAND.name.toUpperCase()}),(0,b.jsx)("button",{type:"button",className:"cine-mobile__close","aria-label":"Close menu",onClick:()=>p(!1),autoFocus:!0,children:(0,b.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.6","aria-hidden":"true",children:(0,b.jsx)("path",{d:"M5 5l14 14M19 5L5 19"})})})]}),(0,b.jsx)("nav",{"aria-label":"Mobile",children:a.map(a=>(0,b.jsxs)("details",{className:"cine-mobile__group",children:[(0,b.jsx)("summary",{children:a.label}),(0,b.jsx)("ul",{children:a.links.map(a=>(0,b.jsx)("li",{children:(0,b.jsx)(d.default,{href:a.href,onClick:()=>p(!1),children:a.label})},a.href+a.label))})]},a.id))}),(0,b.jsxs)("div",{className:"cine-mobile__actions",children:[(0,b.jsx)(d.default,{href:"/search",onClick:()=>p(!1),children:"Search"}),(0,b.jsx)(d.default,{href:"/account",onClick:()=>p(!1),children:"Account"}),(0,b.jsx)(d.default,{href:"/wishlist",onClick:()=>p(!1),children:"Wishlist"}),(0,b.jsx)(d.default,{href:"/cart",onClick:()=>p(!1),children:"Bag"}),(0,b.jsxs)("label",{className:"cine-mobile__currency",children:[(0,b.jsx)("span",{children:"Currency"}),(0,b.jsx)("select",{value:q,onChange:a=>r(a.target.value),children:s.map(a=>(0,b.jsx)("option",{value:a,children:a},a))})]})]})]}),t):null]})}let m=`
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
`;function n(){let{open:a}=(0,h.useSearchModal)(),{itemCount:c,open:e}=(0,f.useCart)(),{itemCount:j}=(0,i.useWishlist)(),{currency:k,setCurrency:l,currencies:m}=(0,g.useCurrency)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("button",{type:"button",onClick:a,className:"cine-nav cine-hide-sm cine-action",children:"Search"}),(0,b.jsxs)("label",{className:"cine-hide-sm cine-currency",children:[(0,b.jsx)("span",{className:"sr-only",children:"Currency"}),(0,b.jsx)("select",{value:k,onChange:a=>l(a.target.value),className:"cine-nav",children:m.map(a=>(0,b.jsx)("option",{value:a,children:a},a))})]}),(0,b.jsx)(d.default,{href:"/account",className:"cine-nav cine-hide-lg",children:"Account"}),(0,b.jsxs)(d.default,{href:"/wishlist",className:"cine-nav cine-hide-sm","aria-label":`Wishlist${j>0?`, ${j} saved`:""}`,children:["Wishlist",j>0?(0,b.jsx)("span",{className:"cine-count",children:j}):null]}),(0,b.jsxs)("button",{type:"button",onClick:e,className:"cine-nav cine-action","aria-label":`Bag${c>0?`, ${c} items`:""}`,children:["Bag",c>0?(0,b.jsx)("span",{className:"cine-count",children:c}):null]})]})}a.s(["CINE_MENU_CSS",0,m,"CineMenu",0,l],18159),a.s(["CineHeader",0,function({menu:a,mode:f}){let g=(0,c.useRef)(null);return(0,c.useEffect)(()=>{let a=window.scrollY,b=0,c=()=>{b=0;let c=window.scrollY,d=g.current;d&&(Math.abs(c-a)>4&&(d.toggleAttribute("data-hidden",c>a&&c>140&&!d.hasAttribute("data-menu")),a=c),"overlay"===f&&d.toggleAttribute("data-solid",c>.85*window.innerHeight))},d=()=>{b||(b=requestAnimationFrame(c))};return c(),window.addEventListener("scroll",d,{passive:!0}),()=>{window.removeEventListener("scroll",d),cancelAnimationFrame(b)}},[f]),(0,b.jsx)("header",{ref:g,className:"cine-header","data-solid":"solid"===f?"":void 0,children:(0,b.jsxs)("div",{className:"cine-header__row",children:[(0,b.jsx)(d.default,{href:"/",className:"cine-logo","aria-label":`${e.BRAND.name} home`,children:e.BRAND.name.toUpperCase()}),(0,b.jsx)(l,{panels:a,onOpenChange:a=>g.current?.toggleAttribute("data-menu",a),children:(0,b.jsx)(n,{})})]})})}],71783)},15038,a=>{"use strict";let b=`
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
`;a.s(["CINE_FRAME_CSS",0,b])}];

//# sourceMappingURL=src_components_cinematic_1gervrd._.js.map