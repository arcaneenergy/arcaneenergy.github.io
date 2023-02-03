import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.67c838a9.js';
import { $ as $$Youtube } from './chunk.20407163.js';
import 'html-escaper';
/* empty css                */
const frontmatter = {
  "slug": "sm-pdf-viewer",
  "title": "SM Pdf Viewer",
  "description": "A simple and quick PDF file viewer.",
  "datetime": "2022-03-10T00:00:00.000Z",
  "heroImage": "/posts/sm-pdf-viewer/banner.webp",
  "tags": ["flutter", "google-play"]
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
    img: "img",
    strong: "strong",
    ul: "ul",
    li: "li"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode("div", {
      class: "row",
      children: createVNode("div", {
        class: "col-xs-12 col-sm-6",
        children: createVNode("a", {
          href: "https://play.google.com/store/apps/details?id=com.arcaneenergy.sm_pdf_viewer",
          children: createVNode("img", {
            src: "/icons/google_play_badge.svg"
          })
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "2JOKs6jHbgk"
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/posts/sm-pdf-viewer/image-01.webp",
        alt: "Image 1"
      }), "\n", createVNode(_components.img, {
        src: "/posts/sm-pdf-viewer/image-02.webp",
        alt: "Image 2"
      }), "\n", createVNode(_components.img, {
        src: "/posts/sm-pdf-viewer/image-03.webp",
        alt: "Image 3"
      })]
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
