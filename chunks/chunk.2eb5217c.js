import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.67c838a9.js';
import { $ as $$Youtube } from './chunk.20407163.js';
import { $ as $$GooglePlayButton } from './chunk.e6644013.js';
import 'html-escaper';
/* empty css                *//* empty css                */
const frontmatter = {
  "slug": "control-cube",
  "title": "Control Cube",
  "description": "Navigate through levels and solve puzzles.",
  "datetime": "2021-03-12T00:00:00.000Z",
  "heroImage": "/posts/control-cube/banner.webp",
  "tags": ["godot", "google-play"]
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
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    img: "img"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.controlcube"
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "2IcDCf354ZA"
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/posts/control-cube/image-01.webp",
        alt: "Image 1"
      }), "\n", createVNode(_components.img, {
        src: "/posts/control-cube/image-02.webp",
        alt: "Image 2"
      }), "\n", createVNode(_components.img, {
        src: "/posts/control-cube/image-03.webp",
        alt: "Image 3"
      }), "\n", createVNode(_components.img, {
        src: "/posts/control-cube/image-04.webp",
        alt: "Image 4"
      }), "\n", createVNode(_components.img, {
        src: "/posts/control-cube/image-05.webp",
        alt: "Image 5"
      }), "\n", createVNode(_components.img, {
        src: "/posts/control-cube/image-06.webp",
        alt: "Image 6"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Move a cube, solve puzzles and unlock new levels."
    }), "\n", createVNode(_components.p, {
      children: "Your goal is to reach the end of the level. Collect coins to unlock new levels."
    }), "\n", createVNode(_components.p, {
      children: "Each level has a different style."
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
const url = "src/content/posts/control-cube.mdx";
const file = "/home/runner/work/website/website/src/content/posts/control-cube.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
