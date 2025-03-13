import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './chunk.CDHILubp.js';
import 'kleur/colors';
import 'clsx';
/* empty css               */

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$Datetime = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Datetime;
  const datetime = Astro2.props.datetime;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(datetime.toISOString(), "datetime")} data-astro-cid-khmj5rsk> ${datetime.toLocaleString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  })} </time> `;
}, "/home/runner/work/website/website/src/components/Datetime.astro", void 0);

export { $$Datetime as $ };
