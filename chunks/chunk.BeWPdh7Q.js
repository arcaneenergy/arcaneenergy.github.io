import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, f as renderSlot, m as maybeRenderHead } from './chunk.D4nPtnRa.js';
import 'kleur/colors';
import { $ as $$Breadcrumbs } from './chunk.DA-nV72e.js';
import { $ as $$Datetime } from './chunk.CQvNBpys.js';
import { $ as $$Base, b as $$Footer, a as $$Header } from './chunk.CJgi_0tX.js';
import { $ as $$Tag } from './chunk.Wlkcmo4T.js';
/* empty css               */

const $$Astro$1 = createAstro("https://arcaneenergy.github.io");
const $$TagsList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagsList;
  const tags = Astro2.props.tags;
  return renderTemplate`${tags.map((tag) => renderTemplate`${renderComponent($$result, "Tag", $$Tag, { "tag": tag })}`)}`;
}, "/home/runner/work/website/website/src/components/TagsList.astro", void 0);

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$Article = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Article;
  const { title, description, datetime, cover, tags } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "image": cover, "data-astro-cid-uwv4mmhs": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-uwv4mmhs": true })} ${renderComponent($$result2, "Breadcrumbs", $$Breadcrumbs, { "title": title, "data-astro-cid-uwv4mmhs": true })} ${renderSlot($$result2, $$slots["before-content"])} ${maybeRenderHead()}<main data-astro-cid-uwv4mmhs> <div class="info" data-astro-cid-uwv4mmhs> <!-- {cover && <img src={cover} alt="Image" />} --> <h1 data-astro-cid-uwv4mmhs>${title}</h1> </div> <article data-astro-cid-uwv4mmhs> ${renderSlot($$result2, $$slots["default"])} </article> <div class="metadata" data-astro-cid-uwv4mmhs> ${datetime && renderTemplate`${renderComponent($$result2, "Datetime", $$Datetime, { "datetime": datetime, "data-astro-cid-uwv4mmhs": true })}`} ${tags && renderTemplate`${renderComponent($$result2, "TagsList", $$TagsList, { "tags": tags, "data-astro-cid-uwv4mmhs": true })}`} </div> </main> ` })} ${renderSlot($$result, $$slots["after-content"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-uwv4mmhs": true })} `;
}, "/home/runner/work/website/website/src/layouts/Article.astro", void 0);

export { $$Article as $ };
