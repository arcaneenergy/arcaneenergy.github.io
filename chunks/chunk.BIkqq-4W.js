import { b as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.D4nPtnRa.js';
import { $ as $$Youtube } from './chunk.BfOQW1CV.js';
import { $ as $$ItchioWidget } from './chunk.CAF190gn.js';
import { $ as $$GithubButton } from './chunk.BKuCniBE.js';
import 'clsx';

const frontmatter = {
  "slug": "tilemap-level-editor",
  "title": "Tilemap Level Editor (Archived)",
  "description": "Simple level editor for Godot with JSON export functionality. Made with Godot.",
  "datetime": "2022-05-27T00:00:00.000Z",
  "cover": "/posts/tilemap-level-editor/banner.webp",
  "tags": ["godot", "open-source", "itch-io", "software"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "description",
    "text": "Description"
  }, {
    "depth": 3,
    "slug": "use-case",
    "text": "Use case"
  }, {
    "depth": 3,
    "slug": "controls",
    "text": "Controls"
  }, {
    "depth": 3,
    "slug": "ui-overview",
    "text": "UI Overview"
  }, {
    "depth": 3,
    "slug": "exported-json-file",
    "text": "Exported JSON file"
  }, {
    "depth": 3,
    "slug": "problems",
    "text": "Problems"
  }, {
    "depth": 2,
    "slug": "video",
    "text": "Video"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    input: "input",
    li: "li",
    p: "p",
    pre: "pre",
    span: "span",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$GithubButton, {
      embedId: "tilemap-level-editor"
    }), "\n", createVNode($$ItchioWidget, {
      embedId: "1547896"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.h3, {
      id: "use-case",
      children: "Use case"
    }), "\n", createVNode(_components.p, {
      children: "This is currently used in a personal project. It’s used to load in JSON files into Godot to recreate the levels at\nruntime. The exported JSON file contains all levels and individual cells. This makes it easy to recreate the level in\nGodot."
    }), "\n", createVNode(_components.p, {
      children: "Alternatively, you can use this program to easily create levels in the editor."
    }), "\n", createVNode(_components.h3, {
      id: "controls",
      children: "Controls"
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "Left click"
      }), ": Place tile (if a tile is selected)"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "Right click"
      }), ": Delete tile"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "Tab"
      }), ": Toggle GUI"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "Shift"
      }), " + ", createVNode("kbd", {
        children: "Scroll up"
      }), ": Increase brush size"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "Shift"
      }), " + ", createVNode("kbd", {
        children: "Scroll down"
      }), ": Decrease brush size"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "Middle mouse drag"
      }), ": Drag camera"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "W"
      }), "/", createVNode("kbd", {
        children: "A"
      }), "/", createVNode("kbd", {
        children: "S"
      }), "/", createVNode("kbd", {
        children: "D"
      }), ": Move camera"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "↑"
      }), "/", createVNode("kbd", {
        children: "←"
      }), "/", createVNode("kbd", {
        children: "↓"
      }), "/", createVNode("kbd", {
        children: "→"
      }), ": Move camera"]
    }), "\n", createVNode(_components.p, {
      children: "Mouse scroll up/down: Zoom in/out"
    }), "\n", createVNode(_components.h3, {
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
    }), "\n", createVNode(_components.h3, {
      id: "exported-json-file",
      children: "Exported JSON file"
    }), "\n", createVNode(_components.p, {
      children: "The exported JSON file might look like this:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "json",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "{"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"layers\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"texture_path\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"C:/tilemap-level-editor/test/tileset.png\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"cells\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": [["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "-5"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "-3"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ],"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "  \"objects\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    {"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"key\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#9ECBFF"
            },
            children: "\"player\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ","
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "      \"position\""
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": ["
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "2"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "4"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "]"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "  ]"
          })
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
    }), "\n", createVNode(_components.p, {
      children: "Each cell contains an ID, an x and a y position. The ID is used to identify which cell in the tileset it refers to."
    }), "\n", createVNode(_components.h3, {
      id: "problems",
      children: "Problems"
    }), "\n", createVNode(_components.ul, {
      class: "contains-task-list",
      children: ["\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Currently, the program only supports tiles of 16x16 size. The spritesheet needs to be divisible by 16 (16, 32, 48,\n64 etc.)"]
      }), "\n", createVNode(_components.li, {
        class: "task-list-item",
        children: [createVNode(_components.input, {
          type: "checkbox",
          disabled: true
        }), " Exported texture paths are absolute."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "video",
      children: "Video"
    }), "\n", createVNode($$Youtube, {
      videoId: "01ktb-9E6J0"
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

const url = "src/content/posts/tilemap-level-editor.mdx";
const file = "/home/runner/work/website/website/src/content/posts/tilemap-level-editor.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/tilemap-level-editor.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
