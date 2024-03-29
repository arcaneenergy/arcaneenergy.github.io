import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.88f5223f.js';
import './chunk.3ad9c7a2.js';
import { $ as $$GooglePlayButton } from './chunk.b1cb7b0a.js';
import { $ as $$ImageGallery } from './chunk.0bab5453.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';
/* empty css                *//* empty css                *//* empty css                */
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
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    strong: "strong",
    ul: "ul",
    li: "li"
  }, props.components);
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
const url = "src/content/posts/sm-text-editor.mdx";
const file = "/home/runner/work/website/website/src/content/posts/sm-text-editor.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
