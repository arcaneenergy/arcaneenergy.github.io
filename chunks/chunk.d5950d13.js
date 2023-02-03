import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.67c838a9.js';
import { $ as $$Youtube } from './chunk.20407163.js';
import 'html-escaper';
/* empty css                */
const frontmatter = {
  "slug": "voxelgi-scene",
  "title": "VoxelGI Scene",
  "description": "A VoxelGI scene in Godot 4.",
  "datetime": "2022-03-18T00:00:00.000Z",
  "heroImage": "/posts/voxelgi-scene/banner.webp",
  "tags": ["godot", "screenshot-collection"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    img: "img"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$Youtube, {
      videoId: "a75-1YT1JaA"
    }), "\n", createVNode("br", {}), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/posts/voxelgi-scene/image-01.webp",
        alt: "Image 1"
      }), "\n", createVNode(_components.img, {
        src: "/posts/voxelgi-scene/image-02.webp",
        alt: "Image 2"
      }), "\n", createVNode(_components.img, {
        src: "/posts/voxelgi-scene/image-03.webp",
        alt: "Image 3"
      }), "\n", createVNode(_components.img, {
        src: "/posts/voxelgi-scene/image-04.webp",
        alt: "Image 4"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Godot v4.0.alpha4.official"
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
const url = "src/content/posts/voxelgi-scene.mdx";
const file = "/home/runner/work/website/website/src/content/posts/voxelgi-scene.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
