import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.b21d6461.js';
import { $ as $$Youtube } from './chunk.27ae4066.js';
import { $ as $$ImageGallery } from './chunk.531e6310.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';
/* empty css                *//* empty css                */
const frontmatter = {
  "slug": "walking-simulator",
  "title": "Walking Simulator",
  "description": "Walking Simulator focuses on the Backrooms-related concepts and environments.",
  "datetime": "2022-05-17T00:00:00.000Z",
  "cover": "/posts/walking-simulator/banner.webp",
  "tags": ["godot", "screenshot-collection", "post"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "screenshots",
    "text": "Screenshots"
  }, {
    "depth": 2,
    "slug": "videos",
    "text": "Videos"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/walking-simulator/image-01.webp", "/posts/walking-simulator/image-02.webp", "/posts/walking-simulator/image-03.webp", "/posts/walking-simulator/image-04.webp", "/posts/walking-simulator/image-05.webp", "/posts/walking-simulator/image-06.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "videos",
      children: "Videos"
    }), "\n", createVNode("div", {
      class: "row",
      children: [createVNode("div", {
        class: "col-xs-6",
        children: createVNode($$Youtube, {
          videoId: "6EP0E4-m7DU"
        })
      }), createVNode("div", {
        class: "col-xs-6",
        children: createVNode($$Youtube, {
          videoId: "x3yRIS53hBw"
        })
      }), createVNode("div", {
        class: "col-xs-6",
        children: createVNode($$Youtube, {
          videoId: "zXZNGsL-n2w"
        })
      })]
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
const url = "src/content/posts/walking-simulator.mdx";
const file = "/home/runner/work/website/website/src/content/posts/walking-simulator.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
