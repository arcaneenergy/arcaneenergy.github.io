import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.88f5223f.js';
import './chunk.3ad9c7a2.js';
import { $ as $$GooglePlayButton } from './chunk.a2dcb8ef.js';
import { $ as $$ImageGallery } from './chunk.d7fcfa95.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';
/* empty css                *//* empty css                *//* empty css                */
const frontmatter = {
  "slug": "sm-pdf-viewer",
  "title": "SM Pdf Viewer",
  "description": "A simple and quick PDF file viewer.",
  "datetime": "2022-03-10T00:00:00.000Z",
  "cover": "/posts/sm-pdf-viewer/banner.webp",
  "tags": ["flutter", "google-play", "software"]
};
function getHeadings() {
  return [{
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
    strong: "strong",
    ul: "ul",
    li: "li"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.sm_pdf_viewer"
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/sm-pdf-viewer/image-01.webp", "/posts/sm-pdf-viewer/image-02.webp", "/posts/sm-pdf-viewer/image-03.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Simply open your PDF files and start reading."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Features"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Remember last opened page number"
      }), "\n", createVNode(_components.li, {
        children: "Document history"
      }), "\n", createVNode(_components.li, {
        children: "Change theme (light and dark theme)"
      }), "\n"]
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
const url = "src/content/posts/sm-pdf-viewer.mdx";
const file = "/home/runner/work/website/website/src/content/posts/sm-pdf-viewer.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
