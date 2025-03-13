import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.CDHILubp.js';
import { $ as $$Youtube } from './chunk.C9JCG4Xb.js';
import 'clsx';

const frontmatter = {
  "slug": "squash-stretch-shader",
  "title": "Squash and Stretch Shader",
  "description": "A simple squash and stretch shader in Godot.",
  "datetime": "2022-07-07T00:00:00.000Z",
  "cover": "/posts/squash-stretch-shader/banner.webp",
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
    a: "a",
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.p, {
      children: ["A simple squash and stretch shader. Tested in Godot 4.0 Alpha 11. ", createVNode(_components.strong, {
        children: "Note: You may need a high-poly model."
      })]
    }), "\n", createVNode(_components.p, {
      children: ["Find the shader on ", createVNode(_components.a, {
        href: "https://godotshaders.com/shader/squash-and-stretch/",
        children: "Godot Shaders"
      }), "."]
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
            children: "shader_type spatial;"
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
            children: " vec2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " direction "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " vec2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "1.0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ");"
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
            children: " squash: "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "hint_range"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2.0"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 1.0"
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
            children: " offset: "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "hint_range"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "0.5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " 0.0"
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
            children: " vertex"
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
            children: " v "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " abs"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(VERTEX.y "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " offset) "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " squash "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "+"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " direction.x;"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "\tVERTEX "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "*="
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " vec3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "(v, direction.y, v);"
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
      videoId: "O0og6WrAWk0"
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

const url = "src/content/posts/squash-stretch-shader.mdx";
const file = "/home/runner/work/website/website/src/content/posts/squash-stretch-shader.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/squash-stretch-shader.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
