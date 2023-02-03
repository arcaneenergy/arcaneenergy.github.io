/* empty css                */import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderHead, e as renderSlot, f as createCollectionToGlobResultMap, g as createGetCollection, h as createGetEntryBySlug, i as renderComponent, _ as __astro_tag_component__, j as createVNode, F as Fragment } from './chunk.67c838a9.js';
/* empty css                */import rss from '@astrojs/rss';
/* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                *//* empty css                */
const $$Astro$a = createAstro("https://arcaneenergy.github.io");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-3EF6KSR2">
	<nav class="astro-3EF6KSR2">
		<a href="/" class="logo astro-3EF6KSR2">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="w-6 h-6 astro-3EF6KSR2">
				<path d="M7.99 0h24.007v6.4c-5.54-.008-11.081 0-16.622.019a812.245 812.245 0 0 1 1.595 6.38h10.335v6.399h-8.723a965.173 965.173 0 0 0 1.595 6.389c3.94.01 7.88.013 11.82.01v6.4c-5.443.006-10.886 0-16.328-.02a22346.47 22346.47 0 0 0-4.783-19.098c-1.208 4.807-1.985 7.899-3.19 12.708 1.32.003 2.64.013 3.96.03a483.296 483.296 0 0 1 1.575 6.379c-4.41.006-8.82 0-13.231-.02C5.044 11.791 2.95 20.187 7.99 0z" class="astro-3EF6KSR2"></path>
			</svg>
		</a>
		<a href="/posts" class="astro-3EF6KSR2">Posts</a>
	</nav>
</header>`;
}, "/home/runner/work/website/website/src/components/Header.astro");

const $$Astro$9 = createAstro("https://arcaneenergy.github.io");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = new Date();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
	<div class="socials astro-SZ7XMLTE">
		<a href="https://www.youtube.com/@ArcaneEnergy" class="astro-SZ7XMLTE">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-SZ7XMLTE">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-SZ7XMLTE"></path>
				<path d="M3 5m0 4a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v6a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" class="astro-SZ7XMLTE"></path>
				<path d="M10 9l5 3l-5 3z" class="astro-SZ7XMLTE"></path>
			</svg>
		</a>
		<a href="https://twitter.com/arcanenergy" class="astro-SZ7XMLTE">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-SZ7XMLTE">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-SZ7XMLTE"></path>
				<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" class="astro-SZ7XMLTE"></path>
			</svg>
		</a>
		<a href="https://play.google.com/store/apps/dev?id=5802860236940422854" class="astro-SZ7XMLTE">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-SZ7XMLTE">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-SZ7XMLTE"></path>
				<path d="M4 3.71v16.58a0.7 .7 0 0 0 1.05 .606l14.622 -8.42a0.55 .55 0 0 0 0 -.953l-14.622 -8.419a0.7 .7 0 0 0 -1.05 .607z" class="astro-SZ7XMLTE"></path>
				<path d="M15 9l-10.5 11.5" class="astro-SZ7XMLTE"></path>
				<path d="M4.5 3.5l10.5 11.5" class="astro-SZ7XMLTE"></path>
			</svg>
		</a>
		<a href="https://github.com/arcaneenergy" class="astro-SZ7XMLTE">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-SZ7XMLTE">
				<path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-SZ7XMLTE"></path>
				<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" class="astro-SZ7XMLTE"></path>
			</svg>
		</a>
	</div>

	<div class="links astro-SZ7XMLTE">
		<a href="/posts" class="astro-SZ7XMLTE">Posts</a>
		<a href="/about" class="astro-SZ7XMLTE">About</a>
		<a href="/privacy" class="astro-SZ7XMLTE">Privacy</a>
		<a href="mailto:arcane.energy.help@gmail.com" class="astro-SZ7XMLTE">Contact</a>
	</div>

	<p class="astro-SZ7XMLTE">
		Copyright &copy; ${today.getFullYear()} Arcane Energy. All rights reserved.
	</p>
</footer>`;
}, "/home/runner/work/website/website/src/components/Footer.astro");

const SITE_TITLE = "Arcane Energy";
const SITE_DESCRIPTION = "Welcome to my website!";

const $$Astro$8 = createAstro("https://arcaneenergy.github.io");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Base;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = "/placeholder-social.jpg" } = Astro2.props;
  return renderTemplate`<html lang="en">
    <head>
        <!-- Global Metadata -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <link rel="icon" type="image/svg+xml" href="/favicon.svg">
        <meta name="generator"${addAttribute(Astro2.generator, "content")}>

        <!-- Canonical URL -->
        <link rel="canonical"${addAttribute(canonicalURL, "href")}>

        <!-- Primary Meta Tags -->
        <title>${title}</title>
        <meta name="title"${addAttribute(title, "content")}>
        <meta name="description"${addAttribute(description, "content")}>

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website">
        <meta property="og:url"${addAttribute(Astro2.url, "content")}>
        <meta property="og:title"${addAttribute(title, "content")}>
        <meta property="og:description"${addAttribute(description, "content")}>
        <meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}>

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image">
        <meta property="twitter:url"${addAttribute(Astro2.url, "content")}>
        <meta property="twitter:title"${addAttribute(title, "content")}>
        <meta property="twitter:description"${addAttribute(description, "content")}>
        <meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>
    ${renderHead($$result)}</head>

    <body>
        ${renderSlot($$result, $$slots["default"])}
    </body></html>`;
}, "/home/runner/work/website/website/src/layouts/Base.astro");

const HOMEPAGE_HERO = {
  post: "limspace-v1",
  image: "/posts/limspace-v1/image-03.webp",
  title: "Limspace v1",
  description: "Explore Godot's graphics capabilities in this short, yet mysterious adventure.",
  button: {
    link: "https://arcaneenergy.itch.io/limspace-v1",
    title: "Download on itch.io"
  }
};
const FEATURED_POSTS = ["limspace-v1", "multimesh-scatter"];

// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/2d-physics-sandbox.mdx": () => import('./chunk.926db627.js'),"/src/content/posts/animated-explosions-pack-1.mdx": () => import('./chunk.def8548d.js'),"/src/content/posts/control-cube.mdx": () => import('./chunk.675b379d.js'),"/src/content/posts/divided-chains-combined-brains.mdx": () => import('./chunk.3da0cb12.js'),"/src/content/posts/godot-web-scraper.mdx": () => import('./chunk.a87f8014.js'),"/src/content/posts/icosahedron.mdx": () => import('./chunk.29b78c8d.js'),"/src/content/posts/limspace-v1.mdx": () => import('./chunk.cec3e893.js'),"/src/content/posts/mergifier.mdx": () => import('./chunk.a683e6df.js'),"/src/content/posts/metal-ball-adventures.mdx": () => import('./chunk.0c370c1a.js'),"/src/content/posts/multimesh-scatter.mdx": () => import('./chunk.5866cb06.js'),"/src/content/posts/rocket-bounce.mdx": () => import('./chunk.a2f6aa3f.js'),"/src/content/posts/sm-pdf-viewer.mdx": () => import('./chunk.3529f1cc.js'),"/src/content/posts/sm-text-editor.mdx": () => import('./chunk.4da8ac82.js'),"/src/content/posts/squash-stretch-shader.mdx": () => import('./chunk.911a8994.js'),"/src/content/posts/tilemap-level-editor.mdx": () => import('./chunk.cc4c34b7.js'),"/src/content/posts/top-down-shooter-tutorial-series.mdx": () => import('./chunk.3ee38e1f.js'),"/src/content/posts/vignette-shader.mdx": () => import('./chunk.9dbf7d3c.js'),"/src/content/posts/voxelgi-scene.mdx": () => import('./chunk.10aa3df5.js'),"/src/content/posts/walking-simulator.mdx": () => import('./chunk.61a6d5ed.js'),"/src/content/posts/whiteboard.mdx": () => import('./chunk.c0876d0f.js')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/posts/2d-physics-sandbox.mdx": () => import('./chunk.3178aec0.js'),"/src/content/posts/animated-explosions-pack-1.mdx": () => import('./chunk.a2407e87.js'),"/src/content/posts/control-cube.mdx": () => import('./chunk.35ddbcd8.js'),"/src/content/posts/divided-chains-combined-brains.mdx": () => import('./chunk.7366bd73.js'),"/src/content/posts/godot-web-scraper.mdx": () => import('./chunk.6a0b0985.js'),"/src/content/posts/icosahedron.mdx": () => import('./chunk.86d94ef0.js'),"/src/content/posts/limspace-v1.mdx": () => import('./chunk.98f6062f.js'),"/src/content/posts/mergifier.mdx": () => import('./chunk.3736641d.js'),"/src/content/posts/metal-ball-adventures.mdx": () => import('./chunk.2b5ca0ba.js'),"/src/content/posts/multimesh-scatter.mdx": () => import('./chunk.6aba98de.js'),"/src/content/posts/rocket-bounce.mdx": () => import('./chunk.2293dddf.js'),"/src/content/posts/sm-pdf-viewer.mdx": () => import('./chunk.adabf0e7.js'),"/src/content/posts/sm-text-editor.mdx": () => import('./chunk.9ff07215.js'),"/src/content/posts/squash-stretch-shader.mdx": () => import('./chunk.93c4446b.js'),"/src/content/posts/tilemap-level-editor.mdx": () => import('./chunk.d6d2c433.js'),"/src/content/posts/top-down-shooter-tutorial-series.mdx": () => import('./chunk.f4d751ec.js'),"/src/content/posts/vignette-shader.mdx": () => import('./chunk.40ec6902.js'),"/src/content/posts/voxelgi-scene.mdx": () => import('./chunk.c1b00b0f.js'),"/src/content/posts/walking-simulator.mdx": () => import('./chunk.d8d94a45.js'),"/src/content/posts/whiteboard.mdx": () => import('./chunk.31381e90.js')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

const getEntryBySlug = createGetEntryBySlug({
	getCollection,
	collectionToRenderEntryMap,
});

const $$Astro$7 = createAstro("https://arcaneenergy.github.io");
const $$Datetime = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Datetime;
  const datetime = Astro2.props.datetime;
  return renderTemplate`${maybeRenderHead($$result)}<div class="astro-KHMJ5RSK">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-KHMJ5RSK">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-KHMJ5RSK"></path>
        <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" class="astro-KHMJ5RSK"></path>
        <path d="M16 3l0 4" class="astro-KHMJ5RSK"></path>
        <path d="M8 3l0 4" class="astro-KHMJ5RSK"></path>
        <path d="M4 11l16 0" class="astro-KHMJ5RSK"></path>
        <path d="M8 15h2v2h-2z" class="astro-KHMJ5RSK"></path>
    </svg>

    <span class="astro-KHMJ5RSK">
        <time${addAttribute(datetime.toISOString(), "datetime")} class="astro-KHMJ5RSK">
            ${datetime.toLocaleString("default", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  })}
        </time>
    </span>
</div>`;
}, "/home/runner/work/website/website/src/components/Datetime.astro");

const $$Astro$6 = createAstro("https://arcaneenergy.github.io");
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { slug, showDatetime } = Astro2.props;
  const post = await getEntryBySlug("posts", slug);
  return renderTemplate`${maybeRenderHead($$result)}<div class="group astro-IYIQI2SO">
    <a${addAttribute(`/posts/${post.slug}/`, "href")} class="astro-IYIQI2SO">
        <img${addAttribute(post.data.heroImage, "src")}${addAttribute(post.data.title, "alt")} class="astro-IYIQI2SO">

        <h3 class="astro-IYIQI2SO">${post.data.title}</h3>
    </a>

    ${showDatetime && renderTemplate`${renderComponent($$result, "Datetime", $$Datetime, { "datetime": post.data.datetime, "class": "astro-IYIQI2SO" })}`}

    <p class="description astro-IYIQI2SO">${post.data.description}</p>
</div>`;
}, "/home/runner/work/website/website/src/components/PostCard.astro");

const getSortedPosts = (posts) => posts.sort(
  (a, b) => b.data.datetime.valueOf() - a.data.datetime.valueOf()
);
const capitalize = (str) => str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

const $$Astro$5 = createAstro("https://arcaneenergy.github.io");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$1;
  const postsCollection = await getCollection("posts");
  const allPosts = getSortedPosts(postsCollection);
  const recentPosts = allPosts.filter((p) => !FEATURED_POSTS.includes(p.slug)).slice(0, 6);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "class": "astro-J7PV25F6" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<section id="hero" class="relative max-w-full m-0 p-0 astro-J7PV25F6">
		<div${addAttribute(`background-image: url(${HOMEPAGE_HERO.image});`, "style")} class="w-full bg-center bg-no-repeat bg-blend-darken bg-cover will-change-transform astro-J7PV25F6">
			${renderComponent($$result, "Header", $$Header, { "class": "astro-J7PV25F6" })}
			<div class="py-32 px-8 max-w-screen-lg mx-auto pr-auto astro-J7PV25F6">
				<h1 class="drop-shadow-lg text-6xl astro-J7PV25F6">${HOMEPAGE_HERO.title}</h1>
				<p class="my-4 text-lg drop-shadow-lg astro-J7PV25F6">
					${HOMEPAGE_HERO.description}
				</p>

				<div class="flex astro-J7PV25F6">
					<a${addAttribute(HOMEPAGE_HERO.button.link, "href")} class="px-8 py-4 bg-orange rounded-l-lg shadow-lg text-black text-lg font-bold hover:no-underline hover:bg-black hover:text-white transition-all flex items-center astro-J7PV25F6">
						<span class="mr-4 astro-J7PV25F6">
							${HOMEPAGE_HERO.button.title}
						</span>

						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 245.37069 220.73612" class="w-8 h-8 stroke-red-500 astro-J7PV25F6"><path d="M31.99 1.365C21.287 7.72.2 31.945 0 38.298v10.516C0 62.144 12.46 73.86 23.773 73.86c13.584 0 24.902-11.258 24.903-24.62 0 13.362 10.93 24.62 24.515 24.62 13.586 0 24.165-11.258 24.165-24.62 0 13.362 11.622 24.62 25.207 24.62h.246c13.586 0 25.208-11.258 25.208-24.62 0 13.362 10.58 24.62 24.164 24.62 13.585 0 24.515-11.258 24.515-24.62 0 13.362 11.32 24.62 24.903 24.62 11.313 0 23.773-11.714 23.773-25.046V38.298c-.2-6.354-21.287-30.58-31.988-36.933C180.118.197 157.056-.005 122.685 0c-34.37.003-81.228.54-90.697 1.365zm65.194 66.217a28.025 28.025 0 0 1-4.78 6.155c-5.128 5.014-12.157 8.122-19.906 8.122a28.482 28.482 0 0 1-19.948-8.126c-1.858-1.82-3.27-3.766-4.563-6.032l-.006.004c-1.292 2.27-3.092 4.215-4.954 6.037a28.5 28.5 0 0 1-19.948 8.12c-.934 0-1.906-.258-2.692-.528-1.092 11.372-1.553 22.24-1.716 30.164l-.002.045c-.02 4.024-.04 7.333-.06 11.93.21 23.86-2.363 77.334 10.52 90.473 19.964 4.655 56.7 6.775 93.555 6.788h.006c36.854-.013 73.59-2.133 93.554-6.788 12.883-13.14 10.31-66.614 10.52-90.474-.022-4.596-.04-7.905-.06-11.93l-.003-.045c-.162-7.926-.623-18.793-1.715-30.165-.786.27-1.757.528-2.692.528a28.5 28.5 0 0 1-19.948-8.12c-1.862-1.822-3.662-3.766-4.955-6.037l-.006-.004c-1.294 2.266-2.705 4.213-4.563 6.032a28.48 28.48 0 0 1-19.947 8.125c-7.748 0-14.778-3.11-19.906-8.123a28.025 28.025 0 0 1-4.78-6.155 27.99 27.99 0 0 1-4.736 6.155 28.49 28.49 0 0 1-19.95 8.124c-.27 0-.54-.012-.81-.02h-.007c-.27.008-.54.02-.813.02a28.49 28.49 0 0 1-19.95-8.123 27.992 27.992 0 0 1-4.736-6.155zm-20.486 26.49l-.002.01h.015c8.113.017 15.32 0 24.25 9.746 7.028-.737 14.372-1.105 21.722-1.094h.006c7.35-.01 14.694.357 21.723 1.094 8.93-9.747 16.137-9.73 24.25-9.746h.014l-.002-.01c3.833 0 19.166 0 29.85 30.007L210 165.244c8.504 30.624-2.723 31.373-16.727 31.4-20.768-.773-32.267-15.855-32.267-30.935-11.496 1.884-24.907 2.826-38.318 2.827h-.006c-13.412 0-26.823-.943-38.318-2.827 0 15.08-11.5 30.162-32.267 30.935-14.004-.027-25.23-.775-16.726-31.4L46.85 124.08c10.684-30.007 26.017-30.007 29.85-30.007zm45.985 23.582v.006c-.02.02-21.863 20.08-25.79 27.215l14.304-.573v12.474c0 .584 5.74.346 11.486.08h.006c5.744.266 11.485.504 11.485-.08v-12.474l14.304.573c-3.928-7.135-25.79-27.215-25.79-27.215v-.006l-.003.002z" fill="currentColor" class="astro-J7PV25F6"></path></svg>
					</a>

					<a href="https://youtu.be/ZDqve0fh6GE" class="px-4 py-1 bg-white rounded-r-lg shadow-lg text-black text-lg font-bold hover:no-underline hover:bg-black hover:text-white transition-all flex items-center astro-J7PV25F6">
						<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2" viewBox="52.12 84.48 215.77 151.03" class="w-8 h-8 astro-J7PV25F6">
							<path d="M0 0h400v400H0z" style="fill:#fff;fill-rule:nonzero" transform="matrix(.2 0 0 .2 115 115)" class="astro-J7PV25F6"></path>
							<path d="M199.917 105.63s-84.292 0-105.448 5.498c-11.328 3.165-20.655 12.492-23.821 23.987-5.497 21.156-5.497 64.968-5.497 64.968s0 43.979 5.497 64.802c3.166 11.495 12.326 20.656 23.821 23.821 21.322 5.664 105.448 5.664 105.448 5.664s84.459 0 105.614-5.498c11.495-3.165 20.655-12.159 23.654-23.82 5.664-20.99 5.664-64.802 5.664-64.802s.166-43.979-5.664-65.135c-2.999-11.495-12.159-20.655-23.654-23.654-21.155-5.83-105.614-5.831-105.614-5.831Zm-26.821 53.974 70.133 40.479-70.133 40.313v-80.792Z" style="fill:red;fill-rule:nonzero" transform="scale(.8)" class="astro-J7PV25F6"></path></svg>
					</a>
				</div>
			</div>
		</div>
	</section><main class="astro-J7PV25F6">
		<section class="astro-J7PV25F6">
			<span class="flex items-baseline astro-J7PV25F6">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-J7PV25F6">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-J7PV25F6"></path>
					<path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" class="astro-J7PV25F6"></path>
					<path d="M9 15l-4.5 4.5" class="astro-J7PV25F6"></path>
					<path d="M14.5 4l5.5 5.5" class="astro-J7PV25F6"></path>
				</svg>

				<h1 class="ml-2 astro-J7PV25F6">Featured</h1>
			</span>

			<div class="grid md:grid-cols-2 gap-8 py-8 astro-J7PV25F6">
				${FEATURED_POSTS.map((p) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "slug": p, "showDatetime": false, "class": "astro-J7PV25F6" })}`)}
			</div>
		</section>

		<hr class="astro-J7PV25F6">

		<section class="astro-J7PV25F6">
			<span class="flex items-baseline astro-J7PV25F6">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-J7PV25F6">
					<path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-J7PV25F6"></path>
					<path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" class="astro-J7PV25F6"></path>
					<path d="M8 8l4 0" class="astro-J7PV25F6"></path>
					<path d="M8 12l4 0" class="astro-J7PV25F6"></path>
					<path d="M8 16l4 0" class="astro-J7PV25F6"></path>
				</svg>

				<h1 class="ml-2 astro-J7PV25F6">Recent Posts</h1>
			</span>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 astro-J7PV25F6">
				${recentPosts.map((p) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "slug": p.slug, "showDatetime": false, "class": "astro-J7PV25F6" })}`)}
			</div>

			<div class="text-center astro-J7PV25F6">
				<a href="/posts" class="astro-J7PV25F6">All Posts</a>
			</div>
		</section>

		<hr class="astro-J7PV25F6">
	</main>${renderComponent($$result, "Footer", $$Footer, { "class": "astro-J7PV25F6" })}` })}`;
}, "/home/runner/work/website/website/src/pages/index.astro");

const $$file$3 = "/home/runner/work/website/website/src/pages/index.astro";
const $$url$3 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout$1 = async function ({
  children
}) {
  const Layout = (await Promise.resolve().then(() => Generic)).default;
  const {
    layout,
    ...content
  } = frontmatter$1;
  content.file = file$1;
  content.url = url$1;
  return createVNode(Layout, {
    file: file$1,
    url: url$1,
    content,
    frontmatter: content,
    headings: getHeadings$1(),
    "server:root": true,
    children
  });
};
const frontmatter$1 = {
  "layout": "../layouts/Generic.astro",
  "title": "Privacy"
};
function getHeadings$1() {
  return [{
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
  }, {
    "depth": 2,
    "slug": "information-collection",
    "text": "Information collection"
  }, {
    "depth": 2,
    "slug": "tracking-and-cookies",
    "text": "Tracking and cookies"
  }, {
    "depth": 2,
    "slug": "service-providers",
    "text": "Service providers"
  }, {
    "depth": 2,
    "slug": "data-security",
    "text": "Data Security"
  }, {
    "depth": 2,
    "slug": "links",
    "text": "Links"
  }, {
    "depth": 2,
    "slug": "childrens-privacy",
    "text": "Children\u2019s privacy"
  }, {
    "depth": 2,
    "slug": "changes",
    "text": "Changes"
  }, {
    "depth": 2,
    "slug": "legal",
    "text": "Legal"
  }];
}
function _createMdxContent$1(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    ul: "ul",
    li: "li",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "This privacy policy applies to all services, websites and games from Arcane Energy. This page is used to inform\nvisitors, regarding the policies with the collection, use, and disclosure of personal information. By using the\nservices, you agree to the collection and use of information in relation to this policy. Personal information that is\ncollected, is used for providing and improving the services. Your data will not be shared with anyone, except as\ndescribed in this privacy policy."
    }), "\n", createVNode(_components.h2, {
      id: "information-collection",
      children: "Information collection"
    }), "\n", createVNode(_components.p, {
      children: "For a better experience, while using the service, I may require you to provide us with certain personally identifiable\ninformation, including but not limited to Device or other IDs (may include Advertising ID, Android ID, IMEI, BSSID).\nThis information is not passed on to third parties. The information that I request will be retained on your device and\nis not collected by me in any way."
    }), "\n", createVNode(_components.p, {
      children: "Third party services may be used, that may collect information used to identify you. Link to the privacy policy of\nthird-party service providers used by the apps are linked here:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://unity3d.com/legal/privacy-policy",
          children: "Unity Ads"
        })
      }), "\n", createVNode(_components.li, {
        children: createVNode(_components.a, {
          href: "https://gameanalytics.com/privacy/",
          children: "GameAnalytics"
        })
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "tracking-and-cookies",
      children: "Tracking and cookies"
    }), "\n", createVNode(_components.p, {
      children: "Cookies and similar tracking technologies may be used to track the activity on these services. Cookies are files with\nsmall amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website\nand stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being\nsent. However, if you do not accept cookies, you may not be able to use some portions of the services."
    }), "\n", createVNode(_components.p, {
      children: "Example of cookies that may be used:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Session cookies may be used to operate the services."
      }), "\n", createVNode(_components.li, {
        children: "Preference cookies are used to remember your preferences and various settings."
      }), "\n", createVNode(_components.li, {
        children: "Security cookies are used for security purposes."
      }), "\n", createVNode(_components.li, {
        children: "Advertising cookies are used to serve you with advertisements that may be relevant for your interests."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "service-providers",
      children: "Service providers"
    }), "\n", createVNode(_components.p, {
      children: "Third-party companies and individuals may be used for one or more of the following reasons:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Facilitate the service."
      }), "\n", createVNode(_components.li, {
        children: "Provide the service."
      }), "\n", createVNode(_components.li, {
        children: "Perform service-related services."
      }), "\n", createVNode(_components.li, {
        children: "Assist, in analyzing how the service is used."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "data-security",
      children: "Data Security"
    }), "\n", createVNode(_components.p, {
      children: "While we strive to provide security for the information that is processed and maintained, no security system can prevent\nall potential security breaches."
    }), "\n", createVNode(_components.p, {
      children: "For optimal security, all application updates should be installed regularly. It is also recommended to regularly check\nfor available updates and turn on automatic updates."
    }), "\n", createVNode(_components.h2, {
      id: "links",
      children: "Links"
    }), "\n", createVNode(_components.p, {
      children: "The services may contain links to other sites. If you click on a third-party link, you will be directed to that site.\nThese external sites are not operated by Arcane Energy. Therefore, it is advised to review the privacy policy of these\nwebsites. No responsibility for the content, privacy policies, or practices of any third-party sites or services are\ntaken."
    }), "\n", createVNode(_components.h2, {
      id: "childrens-privacy",
      children: "Children\u2019s privacy"
    }), "\n", createVNode(_components.p, {
      children: "These services do not address anyone under the age of 13."
    }), "\n", createVNode(_components.h2, {
      id: "changes",
      children: "Changes"
    }), "\n", createVNode(_components.p, {
      children: "This privacy policy may be updated from time to time."
    }), "\n", createVNode(_components.h2, {
      id: "legal",
      children: "Legal"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Google Play and the Google Play logo are trademarks of Google LLC."
      }), "\n"]
    })]
  });
}
function MDXContent$1(props = {}) {
  return createVNode(MDXLayout$1, {
    ...props,
    children: createVNode(_createMdxContent$1, {
      ...props
    })
  });
}

__astro_tag_component__(getHeadings$1, "astro:jsx");
__astro_tag_component__(MDXContent$1, "astro:jsx");
const url$1 = "/privacy";
const file$1 = "/home/runner/work/website/website/src/pages/privacy.mdx";
const Content$1 = (props = {}) => MDXContent$1({
											...props,
											components: { Fragment, ...props.components },
										});
Content$1[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter$1.layout);

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1,
	default: Content$1,
	file: file$1,
	frontmatter: frontmatter$1,
	getHeadings: getHeadings$1,
	url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

async function get(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/posts/${post.slug}/`,
		})),
	});
}

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	get
}, Symbol.toStringTag, { value: 'Module' }));

const MDXLayout = async function ({
  children
}) {
  const Layout = (await Promise.resolve().then(() => Generic)).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "@layouts/Generic.astro",
  "title": "About",
  "description": "Lorem ipsum dolor sit amet",
  "datetime": "2021-12-07T00:00:00.000Z",
  "heroImage": "/placeholder-about.jpg",
  "tags": null
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "arcane-energy",
    "text": "Arcane Energy"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    blockquote: "blockquote",
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "arcane-energy",
      children: "Arcane Energy"
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Creating unique games and tutorials, everything about game development and beyond."
      }), "\n"]
    }), "\n", createVNode("img", {
      class: "block mx-auto rounded-full shadow-[0_5px_50px_5px_rgba(0,0,0,1)] hover:brightness-125 outline-4 border-dashed hover:contrast-150 hover:mix-blend-luminosity transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none m-8",
      src: "/logo.webp",
      alt: "Arcane Energy"
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/about";
const file = "/home/runner/work/website/website/src/pages/about.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://arcaneenergy.github.io");
const $$Breadcrumbs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const currentUrlPath = Astro2.url.pathname.replace(/\/+$/, "");
  const pathSplit = currentUrlPath.split("/").slice(1);
  let currentPath = "";
  const breadcrumbList = [
    {
      title: "Home",
      path: "/"
    },
    ...pathSplit.map(
      (breadcrumb, index) => (currentPath += `/${breadcrumb}`, {
        title: capitalize(breadcrumb),
        path: currentPath
      })
    )
  ];
  const { title } = Astro2.props;
  if (title)
    breadcrumbList[breadcrumbList.length - 1]["title"] = title;
  return renderTemplate`${maybeRenderHead($$result)}<nav class="astro-ILHXCYM7">
    <ul class="astro-ILHXCYM7">
        ${breadcrumbList.map((breadcrumb, value) => renderTemplate`<li class="astro-ILHXCYM7">
                    <a${addAttribute(breadcrumb["path"], "href")} class="astro-ILHXCYM7">${breadcrumb["title"]}</a>

                    ${value + 1 < breadcrumbList.length && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-right astro-ILHXCYM7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-ILHXCYM7"></path>
                            <path d="M9 6l6 6l-6 6" class="astro-ILHXCYM7"></path>
                        </svg>`}
                </li>`)}
    </ul>
</nav>`;
}, "/home/runner/work/website/website/src/components/Breadcrumbs.astro");

const $$Astro$3 = createAstro("https://arcaneenergy.github.io");
const $$Generic = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Generic;
  const { title, description, datetime, heroImage } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "description": description, "image": heroImage, "class": "astro-FN52SEMU" }, { "default": () => renderTemplate`${renderComponent($$result, "Header", $$Header, { "class": "astro-FN52SEMU" })}${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "class": "astro-FN52SEMU" })}${maybeRenderHead($$result)}<main class="astro-FN52SEMU">
        ${heroImage && renderTemplate`<img${addAttribute(heroImage, "src")} alt="Image" class="astro-FN52SEMU">`}

        <h1 class="astro-FN52SEMU">${title}</h1>

        ${datetime && renderTemplate`${renderComponent($$result, "Datetime", $$Datetime, { "datetime": datetime, "class": "astro-FN52SEMU" })}`}

        ${renderSlot($$result, $$slots["default"])}
    </main>${renderComponent($$result, "Footer", $$Footer, { "class": "astro-FN52SEMU" })}` })}`;
}, "/home/runner/work/website/website/src/layouts/Generic.astro");

const $$file$2 = "/home/runner/work/website/website/src/layouts/Generic.astro";
const $$url$2 = undefined;

const Generic = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Generic,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://arcaneenergy.github.io");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index;
  const postsCollection = await getCollection("posts");
  const posts = getSortedPosts(postsCollection);
  return renderTemplate`${renderComponent($$result, "Generic", $$Generic, { "title": "Posts", "description": "Description", "class": "astro-FJQFNJXI" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<section class="astro-FJQFNJXI">
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 astro-FJQFNJXI">
			${posts.map((post) => renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "slug": post.slug, "showDatetime": true, "class": "astro-FJQFNJXI" })}`)}
		</div>
	</section>` })}`;
}, "/home/runner/work/website/website/src/pages/posts/index.astro");

const $$file$1 = "/home/runner/work/website/website/src/pages/posts/index.astro";
const $$url$1 = "/posts";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://arcaneenergy.github.io");
const $$Tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tag;
  const { tag } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`/tags/${tag}`, "href")} class="pr-1 group flex items-center astro-BLWJYJPT">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" class="astro-BLWJYJPT">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" class="astro-BLWJYJPT"></path>
        <path d="M5 9l14 0" class="astro-BLWJYJPT"></path>
        <path d="M5 15l14 0" class="astro-BLWJYJPT"></path>
        <path d="M11 4l-4 16" class="astro-BLWJYJPT"></path>
        <path d="M17 4l-4 16" class="astro-BLWJYJPT"></path>
    </svg>
    <span class="astro-BLWJYJPT">${tag}</span>
</a>`;
}, "/home/runner/work/website/website/src/components/Tag.astro");

const $$Astro = createAstro("https://arcaneenergy.github.io");
async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": post.data.title, "description": post.data.description, "image": post.data.heroImage, "class": "astro-GYSQO7GH" }, { "default": () => renderTemplate`${renderComponent($$result, "Header", $$Header, { "class": "astro-GYSQO7GH" })}${renderComponent($$result, "Breadcrumbs", $$Breadcrumbs, { "title": post.data.title, "class": "astro-GYSQO7GH" })}${maybeRenderHead($$result)}<main class="astro-GYSQO7GH">
		${post.data.heroImage && renderTemplate`<img${addAttribute(post.data.heroImage, "src")} alt="Image" class="astro-GYSQO7GH">`}

		<h1 class="astro-GYSQO7GH">${post.data.title}</h1>

		${post.data.datetime && renderTemplate`${renderComponent($$result, "Datetime", $$Datetime, { "datetime": post.data.datetime, "class": "astro-GYSQO7GH" })}`}

		<article class="astro-GYSQO7GH">
			${renderComponent($$result, "Content", Content, { "class": "astro-GYSQO7GH" })}
		</article>
	</main><ul class="tags astro-GYSQO7GH">
		${post.data.tags.map((tag) => renderTemplate`<li class="astro-GYSQO7GH">
					${renderComponent($$result, "Tag", $$Tag, { "tag": tag, "class": "astro-GYSQO7GH" })}
				</li>`)}
	</ul>${renderComponent($$result, "Footer", $$Footer, { "class": "astro-GYSQO7GH" })}` })}`;
}, "/home/runner/work/website/website/src/pages/posts/[slug].astro");

const $$file = "/home/runner/work/website/website/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e };
