import { c as createComponent, b as createAstro, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './chunk.CDHILubp.js';
import 'kleur/colors';
import 'clsx';
/* empty css               */

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$ItchioWidget = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItchioWidget;
  const { embedId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-vpucgvij> <iframe${addAttribute(`https://itch.io/embed/${embedId}?dark=true`, "src")} width="552" height="167" frameborder="0" data-astro-cid-vpucgvij></iframe> </div> `;
}, "/home/runner/work/website/website/src/components/ItchioWidget.astro", void 0);

export { $$ItchioWidget as $ };
