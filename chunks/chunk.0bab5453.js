import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './chunk.88f5223f.js';
/* empty css                */
const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$ImageGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImageGallery;
  const { images } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="astro-GJHJMBI3">
    ${images.map((i) => renderTemplate`<img${addAttribute(i, "src")} alt="Image" class="astro-GJHJMBI3">`)}
</div>`;
}, "/home/runner/work/website/website/src/components/ImageGallery.astro");

export { $$ImageGallery as $ };
