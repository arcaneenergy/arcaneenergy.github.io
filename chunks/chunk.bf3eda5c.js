import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.95b855ea.js';
import { $ as $$Youtube } from './chunk.d62b00db.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';
/* empty css                */
const frontmatter = {
  "slug": "vignette-shader",
  "title": "Vignette Shader",
  "description": "A simple vignette shader for the Godot game engine.",
  "datetime": "2021-09-01T00:00:00.000Z",
  "heroImage": "/posts/vignette-shader/banner.webp",
  "tags": ["godot", "shader", "asset"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    pre: "pre",
    code: "code",
    span: "span",
    hr: "hr"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "The color and size of the vignette effect is adjustable."
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
              color: "#C9D1D9"
            },
            children: "shader_type canvas_item;"
          })
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "uniform"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "vec4"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " color: hint_color;"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "uniform"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " multiplier "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "0.2"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "uniform"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " softness "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "3.0"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "void"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#D2A8FF"
            },
            children: "fragment"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "() {"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	"
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "float"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " value "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#D2A8FF"
            },
            children: "distance"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(UV, "
          }), createVNode(_components.span, {
            style: {
              color: "#D2A8FF"
            },
            children: "vec2"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "));"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	COLOR "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#D2A8FF"
            },
            children: "vec4"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(color.rgb, "
          }), createVNode(_components.span, {
            style: {
              color: "#D2A8FF"
            },
            children: "smoothstep"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(multiplier, softness, value));"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "}"
          })
        })]
      })
    }), "\n", createVNode($$Youtube, {
      videoId: "IGtQwsNDVLM"
    }), "\n", createVNode(_components.hr, {})]
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
const url = "src/content/posts/vignette-shader.mdx";
const file = "/home/runner/work/website/website/src/content/posts/vignette-shader.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
