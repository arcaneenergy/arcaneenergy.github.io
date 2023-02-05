import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './chunk.67c838a9.js';
/* empty css                */
const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$Youtube = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Youtube;
  const { videoId } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="iframe-container astro-SY3JR4F6">
    <iframe${addAttribute(`https://www.youtube.com/embed/${videoId}`, "src")} title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="astro-SY3JR4F6"></iframe>
</div>`;
}, "/home/runner/work/website/website/src/components/Youtube.astro");

export { $$Youtube as $ };
