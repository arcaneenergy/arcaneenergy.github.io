import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.67c838a9.js';
import 'html-escaper';

const frontmatter = {
  "slug": "test",
  "title": "Test",
  "description": "Test",
  "datetime": "2026-07-07T00:00:00.000Z",
  "heroImage": "/posts/squash-stretch-shader/banner.webp",
  "tags": ["godot", "shader"]
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "markdown-cheatsheet",
    "text": "Markdown Cheatsheet"
  }, {
    "depth": 5,
    "slug": "table-of-contents",
    "text": "Table of Contents"
  }, {
    "depth": 2,
    "slug": "headers",
    "text": "Headers"
  }, {
    "depth": 1,
    "slug": "h1",
    "text": "H1"
  }, {
    "depth": 2,
    "slug": "h2",
    "text": "H2"
  }, {
    "depth": 3,
    "slug": "h3",
    "text": "H3"
  }, {
    "depth": 4,
    "slug": "h4",
    "text": "H4"
  }, {
    "depth": 5,
    "slug": "h5",
    "text": "H5"
  }, {
    "depth": 6,
    "slug": "h6",
    "text": "H6"
  }, {
    "depth": 1,
    "slug": "alt-h1",
    "text": "Alt-H1"
  }, {
    "depth": 2,
    "slug": "alt-h2",
    "text": "Alt-H2"
  }, {
    "depth": 2,
    "slug": "emphasis",
    "text": "Emphasis"
  }, {
    "depth": 2,
    "slug": "lists",
    "text": "Lists"
  }, {
    "depth": 2,
    "slug": "links",
    "text": "Links"
  }, {
    "depth": 2,
    "slug": "tables",
    "text": "Tables"
  }, {
    "depth": 2,
    "slug": "blockquotes",
    "text": "Blockquotes"
  }, {
    "depth": 2,
    "slug": "inline-html",
    "text": "Inline HTML"
  }, {
    "depth": 2,
    "slug": "horizontal-rule",
    "text": "Horizontal Rule"
  }, {
    "depth": 2,
    "slug": "line-breaks",
    "text": "Line Breaks"
  }, {
    "depth": 2,
    "slug": "youtube-videos",
    "text": "YouTube Videos"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    a: "a",
    h5: "h5",
    br: "br",
    h2: "h2",
    pre: "pre",
    code: "code",
    span: "span",
    h3: "h3",
    h4: "h4",
    h6: "h6",
    em: "em",
    strong: "strong",
    del: "del",
    ol: "ol",
    li: "li",
    ul: "ul",
    table: "table",
    thead: "thead",
    tr: "tr",
    th: "th",
    tbody: "tbody",
    td: "td",
    blockquote: "blockquote",
    hr: "hr"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "markdown-cheatsheet",
      children: "Markdown Cheatsheet"
    }), "\n", createVNode(_components.p, {
      children: ["This is intended as a quick reference and showcase. For more complete info, see ", createVNode(_components.a, {
        href: "http://daringfireball.net/projects/markdown/",
        children: "John Gruber\u2019s original spec"
      }), " and the ", createVNode(_components.a, {
        href: "http://github.github.com/github-flavored-markdown/",
        children: "Github-flavored Markdown info page"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Note that there is also a ", createVNode(_components.a, {
        href: "./Markdown-Here-Cheatsheet",
        children: "Cheatsheet specific to Markdown Here"
      }), " if that\u2019s what you\u2019re looking for. You can also check out ", createVNode(_components.a, {
        href: "./Other-Markdown-Tools",
        children: "more Markdown tools"
      }), "."]
    }), "\n", createVNode(_components.h5, {
      id: "table-of-contents",
      children: "Table of Contents"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "#headers",
        children: "Headers"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#emphasis",
        children: "Emphasis"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#lists",
        children: "Lists"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#links",
        children: "Links"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#images",
        children: "Images"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#code",
        children: "Code and Syntax Highlighting"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#tables",
        children: "Tables"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#blockquotes",
        children: "Blockquotes"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#html",
        children: "Inline HTML"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#hr",
        children: "Horizontal Rule"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#lines",
        children: "Line Breaks"
      }), createVNode(_components.br, {}), "\n", createVNode(_components.a, {
        href: "#videos",
        children: "YouTube Videos"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "headers",
      children: "Headers"
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
            children: "# H1"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "## H2"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "### H3"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "#### H4"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "##### H5"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "###### H6"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Alternatively, for H1 and H2, an underline-ish style:"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Alt-H1"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "======"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Alt-H2"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "------"
          })
        })]
      })
    }), "\n", createVNode(_components.h1, {
      id: "h1",
      children: "H1"
    }), "\n", createVNode(_components.h2, {
      id: "h2",
      children: "H2"
    }), "\n", createVNode(_components.h3, {
      id: "h3",
      children: "H3"
    }), "\n", createVNode(_components.h4, {
      id: "h4",
      children: "H4"
    }), "\n", createVNode(_components.h5, {
      id: "h5",
      children: "H5"
    }), "\n", createVNode(_components.h6, {
      id: "h6",
      children: "H6"
    }), "\n", createVNode(_components.p, {
      children: "Alternatively, for H1 and H2, an underline-ish style:"
    }), "\n", createVNode(_components.h1, {
      id: "alt-h1",
      children: "Alt-H1"
    }), "\n", createVNode(_components.h2, {
      id: "alt-h2",
      children: "Alt-H2"
    }), "\n", createVNode(_components.h2, {
      id: "emphasis",
      children: "Emphasis"
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
            children: "Emphasis, aka italics, with *asterisks* or _underscores_."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Strong emphasis, aka bold, with **asterisks** or __underscores__."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Combined emphasis with **asterisks and _underscores_**."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Strikethrough uses two tildes. ~~Scratch this.~~"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: ["Emphasis, aka italics, with ", createVNode(_components.em, {
        children: "asterisks"
      }), " or ", createVNode(_components.em, {
        children: "underscores"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Strong emphasis, aka bold, with ", createVNode(_components.strong, {
        children: "asterisks"
      }), " or ", createVNode(_components.strong, {
        children: "underscores"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Combined emphasis with ", createVNode(_components.strong, {
        children: ["asterisks and ", createVNode(_components.em, {
          children: "underscores"
        })]
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["Strikethrough uses two tildes. ", createVNode(_components.del, {
        children: "Scratch this."
      })]
    }), "\n", createVNode(_components.h2, {
      id: "lists",
      children: "Lists"
    }), "\n", createVNode(_components.p, {
      children: "(In this example, leading and trailing spaces are shown with with dots: \u22C5)"
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
            children: "1. First ordered list item"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "2. Another item"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "\u22C5\u22C5* Unordered sub-list. "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "1. Actual numbers don't matter, just that it's a number"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "\u22C5\u22C51. Ordered sub-list"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "4. And another item."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "\u22C5\u22C5\u22C5You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown)."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "\u22C5\u22C5\u22C5To have a line break without a paragraph, you will need to use two trailing spaces.\u22C5\u22C5"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "\u22C5\u22C5\u22C5Note that this line is separate, but within the same paragraph.\u22C5\u22C5"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "\u22C5\u22C5\u22C5(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "* Unordered list can use asterisks"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "- Or minuses"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "+ Or pluses"
          })
        })]
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "First ordered list item"
      }), "\n", createVNode(_components.li, {
        children: "Another item"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Unordered sub-list."
      }), "\n"]
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Actual numbers don\u2019t matter, just that it\u2019s a number"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "Ordered sub-list"
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: ["\n", createVNode(_components.p, {
          children: "And another item."
        }), "\n", createVNode(_components.p, {
          children: "You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we\u2019ll use three here to also align the raw Markdown)."
        }), "\n", createVNode(_components.p, {
          children: ["To have a line break without a paragraph, you will need to use two trailing spaces.", createVNode(_components.br, {}), "\nNote that this line is separate, but within the same paragraph.", createVNode(_components.br, {}), "\n(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Unordered list can use asterisks"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Or minuses"
      }), "\n"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Or pluses"
      }), "\n"]
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
            children: " s "
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
              color: "#A5D6FF"
            },
            children: "\"JavaScript syntax highlighting\""
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
              color: "#D2A8FF"
            },
            children: "alert"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(s);"
          })]
        })]
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
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "s "
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
              color: "#A5D6FF"
            },
            children: "\"Python syntax highlighting\""
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "print"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " s"
          })]
        })]
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
              color: "#c9d1d9"
            },
            children: "No language indicated, so no syntax highlighting in Markdown Here (varies on Github). "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "But let's throw in a <b>tag</b>."
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "links",
      children: "Links"
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
            children: " s "
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
              color: "#A5D6FF"
            },
            children: "\"JavaScript syntax highlighting\""
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
              color: "#D2A8FF"
            },
            children: "alert"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "(s);"
          })]
        })]
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
          children: [createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: "s "
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
              color: "#A5D6FF"
            },
            children: "\"Python syntax highlighting\""
          })]
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79C0FF"
            },
            children: "print"
          }), createVNode(_components.span, {
            style: {
              color: "#C9D1D9"
            },
            children: " s"
          })]
        })]
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
              color: "#c9d1d9"
            },
            children: "No language indicated, so no syntax highlighting. "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "But let's throw in a &lt;b&gt;tag&lt;/b&gt;."
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "There are two ways to create links."
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
            children: "[I'm an inline-style link](https://www.google.com)"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[I'm an inline-style link with title](https://www.google.com \"Google's Homepage\")"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[I'm a reference-style link][Arbitrary case-insensitive reference text]"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[I'm a relative reference to a repository file](../blob/master/LICENSE)"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[You can use numbers for reference-style link definitions][1]"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Or leave it empty and use the [link text itself]."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "URLs and URLs in angle brackets will automatically get turned into links. "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "http://www.example.com or <http://www.example.com> and sometimes "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "example.com (but not on Github, for example)."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Some text to show that the reference links can follow later."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[arbitrary case-insensitive reference text]: https://www.mozilla.org"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[1]: http://slashdot.org"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[link text itself]: http://www.reddit.com"
          })
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "tables",
      children: "Tables"
    }), "\n", createVNode(_components.p, {
      children: ["Tables aren\u2019t part of the core Markdown spec, but they are part of GFM and ", createVNode(_components.em, {
        children: "Markdown Here"
      }), " supports them. They are an easy way of adding tables to your email \u2014 a task that would otherwise require copy-pasting from another application."]
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
            children: "Colons can be used to align columns."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "| Tables        | Are           | Cool  |"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "| ------------- |:-------------:| -----:|"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "| col 3 is      | right-aligned | $1600 |"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "| col 2 is      | centered      |   $12 |"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "| zebra stripes | are neat      |    $1 |"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "There must be at least 3 dashes separating each header cell."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "The outer pipes (|) are optional, and you don't need to make the "
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "raw Markdown line up prettily. You can also use inline Markdown."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Markdown | Less | Pretty"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "--- | --- | ---"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "*Still* | `renders` | **nicely**"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "1 | 2 | 3"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Colons can be used to align columns."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Tables"
          }), createVNode(_components.th, {
            align: "center",
            children: "Are"
          }), createVNode(_components.th, {
            align: "right",
            children: "Cool"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "col 3 is"
          }), createVNode(_components.td, {
            align: "center",
            children: "right-aligned"
          }), createVNode(_components.td, {
            align: "right",
            children: "$1600"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "col 2 is"
          }), createVNode(_components.td, {
            align: "center",
            children: "centered"
          }), createVNode(_components.td, {
            align: "right",
            children: "$12"
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "zebra stripes"
          }), createVNode(_components.td, {
            align: "center",
            children: "are neat"
          }), createVNode(_components.td, {
            align: "right",
            children: "$1"
          })]
        })]
      })]
    }), "\n", createVNode(_components.p, {
      children: "There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don\u2019t need to make the raw Markdown line up prettily. You can also use inline Markdown."
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", createVNode(_components.table, {
      children: [createVNode(_components.thead, {
        children: createVNode(_components.tr, {
          children: [createVNode(_components.th, {
            children: "Markdown"
          }), createVNode(_components.th, {
            children: "Less"
          }), createVNode(_components.th, {
            children: "Pretty"
          })]
        })
      }), createVNode(_components.tbody, {
        children: [createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: createVNode(_components.em, {
              children: "Still"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.code, {
              children: "renders"
            })
          }), createVNode(_components.td, {
            children: createVNode(_components.strong, {
              children: "nicely"
            })
          })]
        }), createVNode(_components.tr, {
          children: [createVNode(_components.td, {
            children: "1"
          }), createVNode(_components.td, {
            children: "2"
          }), createVNode(_components.td, {
            children: "3"
          })]
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "blockquotes",
      children: "Blockquotes"
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
            children: "> Blockquotes are very handy in email to emulate reply text."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "> This line is part of the same quote."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Quote break."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote. "
          })
        })]
      })
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: "Blockquotes are very handy in email to emulate reply text.\nThis line is part of the same quote."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Quote break."
    }), "\n", createVNode(_components.blockquote, {
      children: ["\n", createVNode(_components.p, {
        children: ["This is a very long line that will still be quoted properly when it wraps. Oh boy let\u2019s keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can ", createVNode(_components.em, {
          children: "put"
        }), " ", createVNode(_components.strong, {
          children: "Markdown"
        }), " into a blockquote."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "inline-html",
      children: "Inline HTML"
    }), "\n", createVNode(_components.p, {
      children: "You can also use raw HTML in your Markdown, and it\u2019ll mostly work pretty well."
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
            children: "<dl>"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "  <dt>Definition list</dt>"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "  <dd>Is something people use sometimes.</dd>"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "  <dt>Markdown in HTML</dt>"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "</dl>"
          })
        })]
      })
    }), "\n", createVNode("dl", {
      children: [createVNode("dt", {
        children: "Definition list"
      }), "\n", createVNode("dd", {
        children: "Is something people use sometimes."
      }), createVNode("dt", {
        children: "Markdown in HTML"
      }), "\n", createVNode("dd", {
        children: ["Does ", createVNode(_components.em, {
          children: "not"
        }), " work ", createVNode(_components.strong, {
          children: "very"
        }), " well. Use HTML ", createVNode("em", {
          children: "tags"
        }), "."]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "horizontal-rule",
      children: "Horizontal Rule"
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
            children: "Three or more..."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "---"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Hyphens"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "***"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Asterisks"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "___"
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "Underscores"
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Three or more\u2026"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "Hyphens"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "Asterisks"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: "Underscores"
    }), "\n", createVNode(_components.h2, {
      id: "line-breaks",
      children: "Line Breaks"
    }), "\n", createVNode(_components.p, {
      children: "My basic recommendation for learning how line breaks work is to experiment and discover \u2014 hit <Enter> once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You\u2019ll soon learn to get what you want. \u201CMarkdown Toggle\u201D is your friend."
    }), "\n", createVNode(_components.p, {
      children: "Here are some things to try out:"
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
            children: "Here's a line for us to start with."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "This line is separated from the one above by two newlines, so it will be a *separate paragraph*."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            }
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "This line is also a separate paragraph, but..."
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "This line is only separated by a single newline, so it's a separate line in the *same paragraph*."
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Here\u2019s a line for us to start with."
    }), "\n", createVNode(_components.p, {
      children: ["This line is separated from the one above by two newlines, so it will be a ", createVNode(_components.em, {
        children: "separate paragraph"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["This line is also begins a separate paragraph, but\u2026", createVNode(_components.br, {}), "\nThis line is only separated by a single newline, so it\u2019s a separate line in the ", createVNode(_components.em, {
        children: "same paragraph"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: ["(Technical note: ", createVNode(_components.em, {
        children: "Markdown Here"
      }), " uses GFM line breaks, so there\u2019s no need to use MD\u2019s two-space line breaks.)"]
    }), "\n", createVNode("a", {
      name: "videos"
    }), "\n", createVNode(_components.h2, {
      id: "youtube-videos",
      children: "YouTube Videos"
    }), "\n", createVNode(_components.p, {
      children: "They can\u2019t be added directly but you can add an image with a link to the video like this:"
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
            children: '<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE'
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: '" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" '
          })
        }), "\n", createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: 'alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>'
          })
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Or, in pure Markdown, but losing the image sizing and border:"
    }), "\n", createVNode(_components.pre, {
      className: "astro-code",
      style: {
        backgroundColor: "#0d1117",
        overflowX: "auto"
      },
      children: createVNode(_components.code, {
        children: createVNode(_components.span, {
          className: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#c9d1d9"
            },
            children: "[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)"
          })
        })
      })
    }), "\n", createVNode(_components.p, {
      children: "Referencing a bug by #bugID in your git commit links it to the slip. For example #1."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: ["License: ", createVNode(_components.a, {
        href: "https://creativecommons.org/licenses/by/3.0/",
        children: "CC-BY"
      })]
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
const url = "src/content/posts/test.mdx";
const file = "/home/runner/work/website/website/src/content/posts/test.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
