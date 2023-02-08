import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.37b49969.js';
import { $ as $$Youtube } from './chunk.8ce4b926.js';
import { $ as $$ItchioWidget } from './chunk.9dabe0e4.js';
/* empty css                */import { $ as $$GooglePlayButton } from './chunk.96a1c872.js';
import { $ as $$ImageGallery } from './chunk.70984335.js';
import 'html-escaper';
/* empty css                *//* empty css                *//* empty css                *//* empty css                */
const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$ItchioEmbed = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItchioEmbed;
  const { embedId } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="astro-GWOHACSC">
    <iframe${addAttribute(`https://itch.io/embed-upload/${embedId}?color=1E1E24`, "src")} allowfullscreen="" width="800" height="500" frameborder="0" class="astro-GWOHACSC"></iframe>
</div>`;
}, "/home/runner/work/website/website/src/components/ItchioEmbed.astro");

const frontmatter = {
  "slug": "whiteboard",
  "title": "Whiteboard",
  "description": "Your private whiteboard.",
  "datetime": "2021-11-09T00:00:00.000Z",
  "heroImage": "/posts/whiteboard/banner.webp",
  "tags": ["godot", "google-play", "itch-io", "software"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "trailer",
    "text": "Trailer"
  }, {
    "depth": 2,
    "slug": "screenshots",
    "text": "Screenshots"
  }, {
    "depth": 2,
    "slug": "description",
    "text": "Description"
  }, {
    "depth": 2,
    "slug": "youtube-playlist",
    "text": "YouTube Playlist"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    hr: "hr"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$ItchioEmbed, {
      embedId: "6455154"
    }), "\n", createVNode($$ItchioWidget, {
      embedId: "1277666"
    }), "\n", createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.whiteboard"
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "ay3ymU5kMr8"
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/whiteboard/image-01.webp", "/posts/whiteboard/image-02.webp", "/posts/whiteboard/image-03.webp", "/posts/whiteboard/image-04.webp", "/posts/whiteboard/image-05.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Whiteboard made with Godot."
    }), "\n", createVNode(_components.p, {
      children: "Features:"
    }), "\n", createVNode(_components.p, {
      children: "\u{1F539} Write text. Select different fonts and font styles."
    }), "\n", createVNode(_components.p, {
      children: "\u{1F539} Insert pictures. Change the scaling mode."
    }), "\n", createVNode(_components.p, {
      children: "\u{1F539} Insert shapes."
    }), "\n", createVNode(_components.p, {
      children: "\u{1F539} Draw with different variants of brushes."
    }), "\n", createVNode(_components.p, {
      children: "\u{1F539} Change the background theme."
    }), "\n", createVNode(_components.p, {
      children: "\u{1F539} Edit the grid size, background color and more."
    }), "\n", createVNode(_components.p, {
      children: "\u{1F539} Presentation system."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "A simple whiteboard for writing text, inserting pictures and drawing. Each tool has different settings and properties.\nAn integrated presentation system is available. Place focus points on your whiteboard and play them back like a slide\nshow."
    }), "\n", createVNode(_components.p, {
      children: "Your whiteboards are private. There is no server."
    }), "\n", createVNode(_components.h2, {
      id: "youtube-playlist",
      children: "YouTube Playlist"
    }), "\n", createVNode($$Youtube, {
      videoId: "videoseries?list=PLKnVIoBRwyaO3n4L06BIfuS26e3ultvxf"
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = props.components || {};
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "src/content/posts/whiteboard.mdx";
const file = "/home/runner/work/website/website/src/content/posts/whiteboard.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
