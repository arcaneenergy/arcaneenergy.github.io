import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, f as renderSlot } from './chunk.D4nPtnRa.js';
import 'kleur/colors';
import { $ as $$Breadcrumbs } from './chunk.DA-nV72e.js';
import { $ as $$Datetime } from './chunk.CQvNBpys.js';
import { $ as $$Base, a as $$Header, b as $$Footer } from './chunk.CJgi_0tX.js';
/* empty css               */

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$Generic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Generic;
  const { title, description, datetime, cover } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "image": cover, "data-astro-cid-fn52semu": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-fn52semu": true })} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "title": title, "data-astro-cid-fn52semu": true })} ${maybeRenderHead()}<main data-astro-cid-fn52semu> <h1 data-astro-cid-fn52semu>${title}</h1> ${datetime && renderTemplate`${renderComponent($$result2, "Datetime", $$Datetime, { "datetime": datetime, "data-astro-cid-fn52semu": true })}`} ${renderSlot($$result2, $$slots["default"])} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-fn52semu": true })} ` })} `;
}, "/home/runner/work/website/website/src/layouts/Generic.astro", void 0);

export { $$Generic as $ };
