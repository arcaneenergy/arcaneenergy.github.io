import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.67c838a9.js';
import { $ as $$Youtube } from './chunk.20407163.js';
import { $ as $$ItchioWidget } from './chunk.3201c11b.js';
import { $ as $$GithubButton } from './chunk.04470989.js';
import 'html-escaper';
/* empty css                *//* empty css                *//* empty css                */
const frontmatter = {
  "slug": "tilemap-level-editor",
  "title": "Tilemap Level Editor",
  "description": "Simple level editor for Godot with JSON export functionality. Made with Godot.",
  "datetime": "2022-05-27T00:00:00.000Z",
  "heroImage": "/posts/tilemap-level-editor/banner.webp",
  "tags": ["godot", "github", "itch-io"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "trailer",
    "text": "Trailer"
  }, {
    "depth": 2,
    "slug": "description",
    "text": "Description"
  }, {
    "depth": 2,
    "slug": "use-case",
    "text": "Use case"
  }, {
    "depth": 2,
    "slug": "controls",
    "text": "Controls"
  }, {
    "depth": 2,
    "slug": "ui-overview",
    "text": "UI Overview"
  }, {
    "depth": 2,
    "slug": "exported-json-file",
    "text": "Exported JSON file"
  }, {
    "depth": 2,
    "slug": "problems",
    "text": "Problems"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    ul: "ul",
    li: "li",
    code: "code",
    img: "img",
    pre: "pre",
    span: "span",
    input: "input"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$GithubButton, {
      embedId: "tilemap-level-editor"
    }), "\n", createVNode($$ItchioWidget, {
      embedId: "1547896"
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "01ktb-9E6J0"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.h2, {
      id: "use-case",
      children: "Use case"
    }), "\n", createVNode(_components.p, {
      children: "This is currently used in a personal project. It\u2019s used to load in JSON files into Godot to recreate the levels at\nruntime. The exported JSON file contains all levels and individual cells. This makes it easy to recreate the level in\nGodot."
    }), "\n", createVNode(_components.p, {
      children: "Alternatively, you can use this program to easily create levels in the editor."
    }), "\n", createVNode(_components.h2, {
      id: "controls",
      children: "Controls"
    }), "\n", createVNode(_components.p, {
      children: "Placement:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Left click: Place tile (if selected)"
      }), "\n", createVNode(_components.li, {
        children: "Right click: Delete tile"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Other:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "TAB: Toggle GUI"
      }), "\n", createVNode(_components.li, {
        children: "SHIFT + Scroll up: Increase brush size"
      }), "\n", createVNode(_components.li, {
        children: "SHIFT + Scroll down: Decrease brush size"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Camera:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Middle mouse drag: Drag camera around"
      }), "\n", createVNode(_components.li, {
        children: "W / \u2191: Move camera up"
      }), "\n", createVNode(_components.li, {
        children: "S / \u2193: Move camera down"
      }), "\n", createVNode(_components.li, {
        children: "A / \u2190: Move camera left"
      }), "\n", createVNode(_components.li, {
        children: "D / \u2192: Move camera right"
      }), "\n", createVNode(_components.li, {
        children: "Mouse scroll up: Zoom in"
      }), "\n", createVNode(_components.li, {
        children: "Mouse scroll down: Zoom out"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "ui-overview",
      children: "UI Overview"
    }), "\n", createVNode(_components.p, {
      children: ["Create new layers with the ", createVNode(_components.code, {
        children: "+ New Layer"
      }), " button. This brings up a dialog box for selecting an image file. After\nselecting a file, the new layer appears in the list."]
    }), "\n", createVNode(_components.p, {
      children: "Switch between layers by pressing the arrow to the left of the layer. This will open the tileset on the left. Use the up\nand down arrow keys to move layers."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/posts/tilemap-level-editor/image-01.webp",
        alt: "Image 1"
      })
    }), "\n", createVNode(_components.p, {
      children: "Select a tile and start drawing."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/posts/tilemap-level-editor/image-02.webp",
        alt: "Image 2"
      })
    }), "\n", createVNode(_components.p, {
      children: "Change the size and shape of the cursor using the buttons in the lower right corner."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/posts/tilemap-level-editor/image-03.webp",
        alt: "Image 3"
      })
    }), "\n", createVNode(_components.h2, {
      id: "exported-json-file",
      children: "Exported JSON file"
    }), "\n", createVNode(_components.p, {
      children: "The exported JSON file might look like this:"
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
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#7EE787"
            },
            children: "\"layers\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "      "
          }), createVNode(_components.span, {
            style: {
              color: "#7EE787"
            },
            children: "\"texture_path\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "\"C:/tilemap-level-editor/test/tileset.png\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "      "
          }), createVNode(_components.span, {
            style: {
              color: "#7EE787"
            },
            children: "\"cells\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ": [["
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "-5"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "-3"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "]]"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "  ],"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "  "
          }), createVNode(_components.span, {
            style: {
              color: "#7EE787"
            },
            children: "\"objects\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "      "
          }), createVNode(_components.span, {
            style: {
              color: "#7EE787"
            },
            children: "\"key\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "\"player\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "      "
          }), createVNode(_components.span, {
            style: {
              color: "#7EE787"
            },
            children: "\"position\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "  ]"
          })
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
    }), "\n", createVNode(_components.p, {
      children: "Each cell contains an ID, an x and a y position. The ID is used to identify which cell in the tileset it refers to."
    }), "\n", createVNode(_components.h2, {
      id: "problems",
      children: "Problems"
    }), "\n", createVNode(_components.ul, {
      className: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        className: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Currently, the program only supports tiles of 16x16 size. The spritesheet needs to be divisible by 16 (16, 32, 48,\n64 etc.)"]
      }), "\n", createVNode(_components.li, {
        className: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Exported texture paths are absolute."]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Godot_v3.5-rc2"
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
const url = "src/content/posts/tilemap-level-editor.mdx";
const file = "/home/runner/work/website/website/src/content/posts/tilemap-level-editor.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
