import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './chunk.88f5223f.js';
/* empty css                */
const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$ItchioWidget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItchioWidget;
  const { embedId } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="astro-VPUCGVIJ">
    <iframe${addAttribute(`https://itch.io/embed/${embedId}?dark=true`, "src")} width="552" height="167" frameborder="0" class="astro-VPUCGVIJ"></iframe>
</div>`;
}, "/home/runner/work/website/website/src/components/ItchioWidget.astro");

export { $$ItchioWidget as $ };
