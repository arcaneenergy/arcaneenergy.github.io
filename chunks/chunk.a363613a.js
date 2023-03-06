import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.37b49969.js';
import 'html-escaper';

const frontmatter = {
  "slug": "squash-stretch-shader",
  "title": "Squash and Stretch Shader",
  "description": "A simple squash and stretch shader in Godot.",
  "datetime": "2022-07-07T00:00:00.000Z",
  "heroImage": "/posts/squash-stretch-shader/banner.webp",
  "tags": ["godot", "shader", "asset"]
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    strong: "strong",
    pre: "pre",
    code: "code",
    span: "span",
    hr: "hr",
    a: "a"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: "An extremely simple implementation of a squash and stretch shader in Godot. Tested in Godot 4.0 Alpha 11."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Note: You may need a high-poly model."
      })
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
            children: "shader_type spatial;"
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
            children: "vec2"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " direction "
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
              color: "#FF7B72"
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
            children: "1.0"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ");"
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
            children: " squash: "
          }), createVNode(_components.span, {
            style: {
              color: "#D2A8FF"
            },
            children: "hint_range"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "0.0"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "2.0"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ") "
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
            children: "1.0"
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
            children: " offset: "
          }), createVNode(_components.span, {
            style: {
              color: "#D2A8FF"
            },
            children: "hint_range"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ") "
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
            children: "0.0"
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
            children: "vertex"
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
            children: " v "
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
            children: "abs"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(VERTEX.y "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " offset) "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " squash "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " direction.x;"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "	VERTEX "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "*="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#D2A8FF"
            },
            children: "vec3"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(v, direction.y, v);"
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
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["Find the shader on ", createVNode(_components.a, {
        href: "https://godotshaders.com/shader/squash-and-stretch/",
        children: "Godot Shaders"
      }), "."]
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
const url = "src/content/posts/squash-stretch-shader.mdx";
const file = "/home/runner/work/website/website/src/content/posts/squash-stretch-shader.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
