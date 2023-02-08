import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './chunk.37b49969.js';
/* empty css                */
const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$GithubButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GithubButton;
  const { embedId } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`https://github.com/arcaneenergy/${embedId}`, "href")} class="astro-PTGARI7I">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-PTGARI7I">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-PTGARI7I"></path>
        <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" class="astro-PTGARI7I"></path>
    </svg>

    <span class="astro-PTGARI7I">View source code on GitHub</span>
</a>`;
}, "/home/runner/work/website/website/src/components/GithubButton.astro");

export { $$GithubButton as $ };
