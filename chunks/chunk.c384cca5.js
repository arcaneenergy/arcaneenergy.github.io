import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.37b49969.js';
import { $ as $$Youtube } from './chunk.8ce4b926.js';
import 'html-escaper';
/* empty css                */
const frontmatter = {
  "slug": "godot-web-scraper",
  "title": "Download images from web with Godot",
  "description": "Scrape images and content from the web with Godot.",
  "datetime": "2022-03-16T00:00:00.000Z",
  "heroImage": "/posts/godot-web-scraper/banner.webp",
  "tags": ["godot", "tutorial"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
  }, {
    "depth": 2,
    "slug": "part-1-making-http-requests",
    "text": "Part 1: Making HTTP-Requests"
  }, {
    "depth": 3,
    "slug": "creating-the-httprequest-node",
    "text": "Creating the HTTPRequest node"
  }, {
    "depth": 3,
    "slug": "requesting-an-image",
    "text": "Requesting an image"
  }, {
    "depth": 2,
    "slug": "part-2-displaying-the-image-in-godot",
    "text": "Part 2: Displaying the image in Godot"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    a: "a",
    h3: "h3",
    pre: "pre",
    code: "code",
    span: "span",
    img: "img"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$Youtube, {
      videoId: "49CAuQLysyI"
    }), "\n", createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "This is a simple example of how Godot can be used as a web scraper. This tutorial is divided into two parts. Part one\nfocuses on how to make HTTP requests. Part two shows how the image is displayed in Godot."
    }), "\n", createVNode(_components.h2, {
      id: "part-1-making-http-requests",
      children: "Part 1: Making HTTP-Requests"
    }), "\n", createVNode(_components.p, {
      children: ["Godot provides a node to make HTTP-Requests:\nThe ", createVNode(_components.a, {
        href: "https://docs.godotengine.org/en/latest/classes/class_httprequest.html",
        children: "HTTPRequest"
      }), " node. From the\ndescription: A node with the ability to send HTTP(S) requests."]
    }), "\n", createVNode(_components.p, {
      children: "You can either add this node to the scene tree or we can create this node with code. In this example, we create it with\ncode."
    }), "\n", createVNode(_components.h3, {
      id: "creating-the-httprequest-node",
      children: "Creating the HTTPRequest node"
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "func"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#D2A8FF"
            },
            children: "_ready"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "() "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " void:"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " http_request "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " HTTPRequest."
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "add_child"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(http_request)"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    # Connect "
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "\"request_completed\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " signal of HTTPRequest node."
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    http_request."
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "connect"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "\"request_completed\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ", _on_http_request_request_completed)"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "func"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#D2A8FF"
            },
            children: "_on_http_request_request_completed"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(result: "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ", response_code: "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "int"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ", headers: PackedStringArray, body:"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "PackedByteArray) "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "->"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " void:"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    pass"
          })
        })]
      })
    }), "\n", createVNode(_components.h3, {
      id: "requesting-an-image",
      children: "Requesting an image"
    }), "\n", createVNode(_components.p, {
      children: "Now all we have to do is request an image from a website."
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " error "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " http_request."
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "request"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "\"https://api.lorem.space/image/house\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "!="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " OK:"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "printerr"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "\"An error occurred.\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "If the request is unsuccessful, the error message is displayed."
    }), "\n", createVNode(_components.h2, {
      id: "part-2-displaying-the-image-in-godot",
      children: "Part 2: Displaying the image in Godot"
    }), "\n", createVNode(_components.p, {
      children: ["Add the following code to the ", createVNode(_components.code, {
        children: "_on_http_request_request_completed"
      }), " function:"]
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " result "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "!="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " HTTPRequest.RESULT_SUCCESS:"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "push_error"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "\"Image could not be downloaded.\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " img "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " Image."
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " error "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " img."
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "load_jpg_from_buffer"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(body)"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "if"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "error"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "!="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " OK:"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "    "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "push_error"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#A5D6FF"
            },
            children: "\"Could not load the image.\""
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ")"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " tex "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " ImageTexture."
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "tex."
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "create_from_image"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(img)"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "var"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " sprite "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: ":="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " Sprite3D."
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "new"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "()"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "add_child"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(sprite)"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line"
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "sprite.texture "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " tex"
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "sprite.position "
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
            children: "Vector3"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "0"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#FF7B72"
            },
            children: "-"
          }), createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "5"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: ")"
          })]
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["The image is then loaded with the data response of the request (", createVNode(_components.code, {
        children: "body"
      }), "). Depending on the image type requested, you may\nwant to change ", createVNode(_components.code, {
        children: "load_jpg_from_buffer"
      }), " to other image formats. You can change the ", createVNode(_components.code, {
        children: "jpg"
      }), "\nin ", createVNode(_components.a, {
        href: "https://docs.godotengine.org/en/latest/classes/class_image.html?highlight=image#class-image-method-load-jpg-from-buffer",
        children: createVNode(_components.code, {
          children: "load_jpg_from_buffer"
        })
      }), "\nto ", createVNode(_components.code, {
        children: "bmp"
      }), ", ", createVNode(_components.code, {
        children: "png"
      }), ", ", createVNode(_components.code, {
        children: "tga"
      }), " or ", createVNode(_components.code, {
        children: "webp"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: "If the request is successful, the sprite with the requested image should appear in your scene:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/posts/godot-web-scraper/banner.webp",
        alt: "Image 1"
      })
    }), "\n", createVNode(_components.p, {
      children: "Godot v4.0.alpha4.official"
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
const url = "src/content/posts/godot-web-scraper.mdx";
const file = "/home/runner/work/website/website/src/content/posts/godot-web-scraper.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
