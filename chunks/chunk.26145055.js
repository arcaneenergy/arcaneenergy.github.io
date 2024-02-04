import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './chunk.b21d6461.js';
/* empty css                */
const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$GooglePlayButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GooglePlayButton;
  const { embedId } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`https://play.google.com/store/apps/details?id=${embedId}`, "href")} class="astro-NHJO2Z25">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-NHJO2Z25">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-NHJO2Z25"></path>
        <path d="M4 3.71v16.58a0.7 .7 0 0 0 1.05 .606l14.622 -8.42a0.55 .55 0 0 0 0 -.953l-14.622 -8.419a0.7 .7 0 0 0 -1.05 .607z" class="astro-NHJO2Z25"></path>
        <path d="M15 9l-10.5 11.5" class="astro-NHJO2Z25"></path>
        <path d="M4.5 3.5l10.5 11.5" class="astro-NHJO2Z25"></path>
    </svg>

    <span class="astro-NHJO2Z25">Google Play Store</span>
</a>`;
}, "/home/runner/work/website/website/src/components/GooglePlayButton.astro");

export { $$GooglePlayButton as $ };
