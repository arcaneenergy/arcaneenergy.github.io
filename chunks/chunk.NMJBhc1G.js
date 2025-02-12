import { c as createComponent, d as createAstro, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './chunk.D4nPtnRa.js';
import 'kleur/colors';
import 'clsx';
/* empty css               */

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$ImageGallery = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageGallery;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-gjhjmbi3> ${images.map((i) => renderTemplate`<img${addAttribute(i, "src")} alt="Image" data-astro-cid-gjhjmbi3>`)} </div> `;
}, "/home/runner/work/website/website/src/components/ImageGallery.astro", void 0);

export { $$ImageGallery as $ };
