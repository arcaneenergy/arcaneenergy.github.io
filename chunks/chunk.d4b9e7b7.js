import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.37b49969.js';
import { $ as $$Youtube } from './chunk.8ce4b926.js';
import { $ as $$GooglePlayButton } from './chunk.96a1c872.js';
import { $ as $$ImageGallery } from './chunk.70984335.js';
import 'html-escaper';
/* empty css                *//* empty css                *//* empty css                */
const frontmatter = {
  "slug": "2d-physics-sandbox",
  "title": "2D Physics Sandbox",
  "description": "Create and control your own 2D Sandbox.",
  "datetime": "2020-10-28T00:00:00.000Z",
  "heroImage": "/posts/2d-physics-sandbox/banner.webp",
  "tags": ["godot", "google-play", "game", "software"]
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
    strong: "strong",
    hr: "hr"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.physicssandboxgame"
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "bMAygTCpA84"
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/2d-physics-sandbox/image-01.webp", "/posts/2d-physics-sandbox/image-02.webp", "/posts/2d-physics-sandbox/image-03.webp", "/posts/2d-physics-sandbox/image-04.webp", "/posts/2d-physics-sandbox/image-05.webp", "/posts/2d-physics-sandbox/image-06.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "\u{1F539} About the game"
      })
    }), "\n", createVNode(_components.p, {
      children: "Open your backpack and select from various elements. Tap anywhere to spawn elements in the world. Select different tools\nfrom your toolbox and tinker in your own sandbox. Burn and destroy elements to collect coins and purchase new elements."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "\u{1F53A} How to play"
      })
    }), "\n", createVNode(_components.p, {
      children: "Open your backpack to view your elements. The backpack is located in the top left corner. You can select different\nelements from there. Press anywhere on the screen or drag to spawn the elements in the world."
    }), "\n", createVNode(_components.p, {
      children: "The toolbox contains the way to select different tools to interact with elements. The move tool can drag elements. The\nedit tool can change their properties, like size, rotation or color."
    }), "\n", createVNode(_components.p, {
      children: "The pause button is located at the center of the navigation menu. Pressing this button will freeze all elements. You can\nstill move elements by hand with the move tool and change properties."
    }), "\n", createVNode(_components.p, {
      children: "The globe button is the world settings. This menu allows you to change the world\u2019s appearance, day and night time and\nother settings, like friction and bounce."
    }), "\n", createVNode(_components.h2, {
      id: "youtube-playlist",
      children: "YouTube Playlist"
    }), "\n", createVNode($$Youtube, {
      videoId: "videoseries?list=PLKnVIoBRwyaOveK9Smt4RWZoVYarER4ua"
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
const url = "src/content/posts/2d-physics-sandbox.mdx";
const file = "/home/runner/work/website/website/src/content/posts/2d-physics-sandbox.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
