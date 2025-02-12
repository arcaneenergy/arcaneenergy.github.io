import { b as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.D4nPtnRa.js';
import './chunk.BfOQW1CV.js';
import { $ as $$GooglePlayButton } from './chunk.CSYaroUV.js';
import { $ as $$ImageGallery } from './chunk.NMJBhc1G.js';
import 'clsx';

const frontmatter = {
  "slug": "sm-text-editor",
  "title": "SM Text Editor",
  "description": "A simple and quick Text file editor.",
  "datetime": "2022-03-10T00:00:00.000Z",
  "cover": "/posts/sm-text-editor/banner.webp",
  "tags": ["flutter", "google-play", "software"]
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
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.sm_text_editor"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Simply open your text files and start editing."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Features"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Toggle text wrapping"
      }), "\n", createVNode(_components.li, {
        children: "Document history"
      }), "\n", createVNode(_components.li, {
        children: "Change theme (light and dark theme)"
      }), "\n", createVNode(_components.li, {
        children: "Change editor font family and font size"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/sm-text-editor/image-01.webp", "/posts/sm-text-editor/image-02.webp", "/posts/sm-text-editor/image-03.webp"]
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

const url = "src/content/posts/sm-text-editor.mdx";
const file = "/home/runner/work/website/website/src/content/posts/sm-text-editor.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/sm-text-editor.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
