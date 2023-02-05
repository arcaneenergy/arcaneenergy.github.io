import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.67c838a9.js';
import { $ as $$Youtube } from './chunk.e774dd31.js';
import { $ as $$ItchioWidget } from './chunk.5610b14e.js';
import 'html-escaper';
/* empty css                *//* empty css                */
const frontmatter = {
  "slug": "divided-chains-combined-brains",
  "title": "Divided Chains Combined Brains",
  "description": "Control one or multiple chunks and complete puzzles.",
  "datetime": "2021-06-12T00:00:00.000Z",
  "heroImage": "/posts/divided-chains-combined-brains/banner.gif",
  "tags": ["godot", "itch-io"]
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
  }, {
    "depth": 3,
    "slug": "controls",
    "text": "Controls"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    strong: "strong",
    h2: "h2",
    img: "img",
    h3: "h3",
    pre: "pre",
    code: "code",
    span: "span"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$ItchioWidget, {
      embedId: "1080661"
    }), "\n", createVNode(_components.p, {
      children: ["Submitted to the ", createVNode(_components.a, {
        href: "https://itch.io/jam/gmtk-2021",
        children: "GMTK Game Jam 2021"
      }), " - 48 hour game making marathon, focused on\ndesign, mechanics, and clever ideas. From June 11th, at 7PM UK time, to June 13th, at 7PM UK time. The theme: ", createVNode(_components.strong, {
        children: "Joined\nTogether"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://itch.io/jam/gmtk-2021/rate/1080661",
        children: "View the submission"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "I66_MyAeb4I"
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/posts/divided-chains-combined-brains/image-01.webp",
        alt: "Image 1"
      }), "\n", createVNode(_components.img, {
        src: "/posts/divided-chains-combined-brains/image-02.webp",
        alt: "Image 2"
      }), "\n", createVNode(_components.img, {
        src: "/posts/divided-chains-combined-brains/image-03.webp",
        alt: "Image 3"
      }), "\n", createVNode(_components.img, {
        src: "/posts/divided-chains-combined-brains/image-04.webp",
        alt: "Image 4"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Every chunk shares the same controls. That means each chunk moves\nin the same direction as the other chunks."
    }), "\n", createVNode(_components.p, {
      children: "Play in 6 unique levels. Each level has a unique atmosphere and different backgrounds."
    }), "\n", createVNode(_components.h3, {
      id: "controls",
      children: "Controls"
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[A] / [\u2190]: Move Left"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[D] / [\u2192]: Move Right"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[Space] / [\u2191]: Jump"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[P]: Restart level"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[Escape]: Exit game"
          })
        })]
      })
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
const url = "src/content/posts/divided-chains-combined-brains.mdx";
const file = "/home/runner/work/website/website/src/content/posts/divided-chains-combined-brains.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
