import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.88f5223f.js';
import { $ as $$Youtube } from './chunk.3ad9c7a2.js';
import { $ as $$GooglePlayButton } from './chunk.b1cb7b0a.js';
import { $ as $$ImageGallery } from './chunk.0bab5453.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';
/* empty css                *//* empty css                *//* empty css                */
const frontmatter = {
  "slug": "rocket-bounce",
  "title": "Rocket Bounce",
  "description": "Fly and bounce around to overcome obstacles and levels.",
  "datetime": "2020-02-16T00:00:00.000Z",
  "cover": "/posts/rocket-bounce/banner.webp",
  "tags": ["unity", "google-play", "game", "software"]
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
  const _components = Object.assign({
    h2: "h2",
    p: "p"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.ArcaneEnergy.RocketBounce"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Fly around and avoid obstacles to win levels."
    }), "\n", createVNode(_components.p, {
      children: "Drag around the rocket and release when you are ready to fly. Tap either side of the screen to move in that direction."
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/rocket-bounce/image-01.webp", "/posts/rocket-bounce/image-02.webp", "/posts/rocket-bounce/image-03.webp", "/posts/rocket-bounce/image-04.webp", "/posts/rocket-bounce/image-05.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "kPyI6jscET0"
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
const url = "src/content/posts/rocket-bounce.mdx";
const file = "/home/runner/work/website/website/src/content/posts/rocket-bounce.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
