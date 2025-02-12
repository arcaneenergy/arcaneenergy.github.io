import { b as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.D4nPtnRa.js';
import { $ as $$Youtube } from './chunk.BfOQW1CV.js';
import { $ as $$ImageGallery } from './chunk.NMJBhc1G.js';
import 'clsx';

const frontmatter = {
  "slug": "voxelgi-scene",
  "title": "VoxelGI Scene",
  "description": "A VoxelGI scene in Godot 4.",
  "datetime": "2022-03-18T00:00:00.000Z",
  "cover": "/posts/voxelgi-scene/banner.webp",
  "tags": ["godot", "screenshot-collection", "post"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "screenshots",
    "text": "Screenshots"
  }, {
    "depth": 2,
    "slug": "video",
    "text": "Video"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/voxelgi-scene/image-01.webp", "/posts/voxelgi-scene/image-02.webp", "/posts/voxelgi-scene/image-03.webp", "/posts/voxelgi-scene/image-04.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "video",
      children: "Video"
    }), "\n", createVNode($$Youtube, {
      videoId: "a75-1YT1JaA"
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

const url = "src/content/posts/voxelgi-scene.mdx";
const file = "/home/runner/work/website/website/src/content/posts/voxelgi-scene.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/voxelgi-scene.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
