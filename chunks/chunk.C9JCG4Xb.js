import { c as createComponent, b as createAstro, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './chunk.CDHILubp.js';
import 'kleur/colors';
import 'clsx';
/* empty css               */

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$Youtube = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Youtube;
  const { videoId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="iframe-container" data-astro-cid-sy3jr4f6> <iframe${addAttribute(`https://www.youtube.com/embed/${videoId}`, "src")} title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen data-astro-cid-sy3jr4f6></iframe> </div> `;
}, "/home/runner/work/website/website/src/components/Youtube.astro", void 0);

export { $$Youtube as $ };
