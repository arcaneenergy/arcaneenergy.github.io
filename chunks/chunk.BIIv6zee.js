import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './chunk.CDHILubp.js';
import 'kleur/colors';
import 'clsx';
/* empty css               */

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$Tag = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag, sm = true, gray = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/tags/${tag}`, "href")}${addAttribute(`${sm ? "text-sm" : ""} ${gray ? "text-gray" : ""}`, "class")} data-astro-cid-blwjyjpt>#${tag}</a> `;
}, "/home/runner/work/website/website/src/components/Tag.astro", void 0);

export { $$Tag as $ };
