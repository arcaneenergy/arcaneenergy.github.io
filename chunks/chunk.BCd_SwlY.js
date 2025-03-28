import { c as createComponent, b as createAstro, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './chunk.CDHILubp.js';
import 'kleur/colors';
import 'clsx';
/* empty css               */

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$GithubButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GithubButton;
  const { embedId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://github.com/arcaneenergy/${embedId}`, "href")} data-astro-cid-ptgari7i> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ptgari7i> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-ptgari7i></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" data-astro-cid-ptgari7i></path> </svg> <span data-astro-cid-ptgari7i>View source code on GitHub</span> </a> `;
}, "/home/runner/work/website/website/src/components/GithubButton.astro", void 0);

export { $$GithubButton as $ };
