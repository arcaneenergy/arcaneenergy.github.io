import { b as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.D4nPtnRa.js';
import { $ as $$ItchioWidget } from './chunk.CAF190gn.js';
import { $ as $$Youtube } from './chunk.BfOQW1CV.js';
import { $ as $$ImageGallery } from './chunk.NMJBhc1G.js';
import 'clsx';

const frontmatter = {
  "slug": "limspace-v1",
  "title": "Limspace v1",
  "description": "Explore Godot's graphics capabilities in this short, yet mysterious adventure.",
  "datetime": "2022-12-17T19:10:17.000Z",
  "cover": "/posts/limspace-v1/banner.webp",
  "tags": ["godot", "itch-io", "game", "software"]
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
    code: "code",
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$ItchioWidget, {
      embedId: "1841206"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "The backrooms are a mysterious and complex labyrinth of interconnected dimensions, hidden just beyond the threshold\nof our everyday reality. For some, they are a place of unimaginable horror and darkness, where the laws of physics\nand time are twisted and distorted. For others, they are a realm of endless possibility and exploration, offering\nglimpses into alternate universes and strange new worlds."
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Note"
      }), ": You can use the camera to capture screenshots in game. Pick up the camera and press ", createVNode("kbd", {
        children: "Tab"
      }), " to\nactivate or deactivate it. Left-clicking captures a screenshot. Your screenshots are saved under:\n", createVNode(_components.code, {
        children: "%AppData%\\Godot\\app_userdata\\Limspace"
      })]
    }), "\n", createVNode(_components.p, {
      children: "You cannot bring objects to the backrooms."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "To get to the backrooms, wait approx. 2 minutes or jump off the balcony."
      }), "\n", createVNode(_components.li, {
        children: "To leave the backrooms, find the key in the library. Find the library by following the arrows on the walls. After acquiring the key, find (or go back to) the central and open the door to open a dimensional portal back to your home."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/limspace-v1/image-01.webp", "/posts/limspace-v1/image-02.webp", "/posts/limspace-v1/image-03.webp", "/posts/limspace-v1/image-04.webp", "/posts/limspace-v1/image-05.webp", "/posts/limspace-v1/image-06.webp", "/posts/limspace-v1/image-07.webp", "/posts/limspace-v1/image-08.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "ZDqve0fh6GE"
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

const url = "src/content/posts/limspace-v1.mdx";
const file = "/home/runner/work/website/website/src/content/posts/limspace-v1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/limspace-v1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
