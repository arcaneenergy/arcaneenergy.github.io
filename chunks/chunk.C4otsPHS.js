import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.CDHILubp.js';
import { $ as $$Youtube } from './chunk.C9JCG4Xb.js';
import 'clsx';

const frontmatter = {
  "slug": "vignette-shader",
  "title": "Vignette Shader",
  "description": "A simple vignette shader for the Godot game engine.",
  "datetime": "2021-09-01T00:00:00.000Z",
  "cover": "/posts/vignette-shader/banner.webp",
  "tags": ["godot", "shader", "asset"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "video",
    "text": "Video"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "The color and size of the vignette effect is adjustable."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "glsl",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "shader_type canvas_item;"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "uniform"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " vec4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " color: hint_color;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "uniform"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " multiplier "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0.2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "uniform"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " float"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " softness "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 3.0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " fragment"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "\tfloat"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " value "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " distance"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(UV, "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "vec2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "\tCOLOR "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " vec4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(color.rgb, "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "smoothstep"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(multiplier, softness, value));"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "video",
      children: "Video"
    }), "\n", createVNode($$Youtube, {
      videoId: "IGtQwsNDVLM"
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

const url = "src/content/posts/vignette-shader.mdx";
const file = "/home/runner/work/website/website/src/content/posts/vignette-shader.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/vignette-shader.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
