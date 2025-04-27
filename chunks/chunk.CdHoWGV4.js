import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './chunk.CDHILubp.js';
import 'kleur/colors';
import { a as getEntryBySlug } from './chunk.DjS7-pvD.js';
import { $ as $$Datetime } from './chunk.BsmpS8jM.js';
/* empty css               */

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { slug, showDatetime } = Astro2.props;
  const post = await getEntryBySlug("posts", slug);
  return renderTemplate`${maybeRenderHead()}<div class="group" data-astro-cid-iyiqi2so> <a${addAttribute(`/posts/${post.slug}/`, "href")} data-astro-cid-iyiqi2so> <img${addAttribute(post.data.cover, "src")}${addAttribute(post.data.title, "alt")} data-astro-cid-iyiqi2so> <h3 data-astro-cid-iyiqi2so>${post.data.title}</h3> </a> <div class="datetime" data-astro-cid-iyiqi2so> ${showDatetime && renderTemplate`${renderComponent($$result, "Datetime", $$Datetime, { "datetime": post.data.datetime, "data-astro-cid-iyiqi2so": true })}`} </div> <p class="description" data-astro-cid-iyiqi2so>${post.data.description}</p> </div> `;
}, "/home/runner/work/website/website/src/components/PostCard.astro", void 0);

const getSortedPosts = (posts) => posts.sort(
  (a, b) => b.data.datetime.valueOf() - a.data.datetime.valueOf()
);

export { $$PostCard as $, getSortedPosts as g };
