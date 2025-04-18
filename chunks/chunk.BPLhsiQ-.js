import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.CDHILubp.js';
import { $ as $$Youtube } from './chunk.C9JCG4Xb.js';
import { $ as $$GooglePlayButton } from './chunk.DayIZUCV.js';
import { $ as $$ImageGallery } from './chunk.BFg_9Aam.js';
import 'clsx';

const frontmatter = {
  "slug": "2d-physics-sandbox",
  "title": "2D Physics Sandbox",
  "description": "Create and control your own 2D Sandbox.",
  "datetime": "2020-10-28T00:00:00.000Z",
  "cover": "/posts/2d-physics-sandbox/banner.webp",
  "tags": ["godot", "google-play", "game", "software"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "description",
    "text": "Description"
  }, {
    "depth": 2,
    "slug": "screenshots",
    "text": "Screenshots"
  }, {
    "depth": 2,
    "slug": "trailer",
    "text": "Trailer"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.physicssandboxgame"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "🔹 About the game"
      })
    }), "\n", createVNode(_components.p, {
      children: "Open your backpack and select from various elements. Tap anywhere to spawn elements in the world. Select different tools\nfrom your toolbox and tinker in your own sandbox. Burn and destroy elements to collect coins and purchase new elements."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "🔺 How to play"
      })
    }), "\n", createVNode(_components.p, {
      children: "Open your backpack to view your elements. The backpack is located in the top left corner. You can select different\nelements from there. Press anywhere on the screen or drag to spawn the elements in the world."
    }), "\n", createVNode(_components.p, {
      children: "The toolbox contains the way to select different tools to interact with elements. The move tool can drag elements. The\nedit tool can change their properties, like size, rotation or color."
    }), "\n", createVNode(_components.p, {
      children: "The pause button is located at the center of the navigation menu. Pressing this button will freeze all elements. You can\nstill move elements by hand with the move tool and change properties."
    }), "\n", createVNode(_components.p, {
      children: "The globe button is the world settings. This menu allows you to change the world’s appearance, day and night time and\nother settings, like friction and bounce."
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/2d-physics-sandbox/image-01.webp", "/posts/2d-physics-sandbox/image-02.webp", "/posts/2d-physics-sandbox/image-03.webp", "/posts/2d-physics-sandbox/image-04.webp", "/posts/2d-physics-sandbox/image-05.webp", "/posts/2d-physics-sandbox/image-06.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "bMAygTCpA84"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/posts/2d-physics-sandbox.mdx";
const file = "/home/runner/work/website/website/src/content/posts/2d-physics-sandbox.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/2d-physics-sandbox.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
