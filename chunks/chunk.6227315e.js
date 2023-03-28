import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.88f5223f.js';
import { $ as $$Youtube } from './chunk.3ad9c7a2.js';
import { $ as $$GithubButton } from './chunk.f6fe427d.js';
/* empty css                */import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';
/* empty css                *//* empty css                */
const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$Video = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Video;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<video controls class="astro-7QZXKU2K">
    <source${addAttribute(url, "src")} type="video/mp4" class="astro-7QZXKU2K">
</video>`;
}, "/home/runner/work/website/website/src/components/Video.astro");

const frontmatter = {
  "slug": "multimesh-scatter",
  "title": "MultiMesh Scatter",
  "description": "A simple tool to randomly place meshes.",
  "datetime": "2022-12-01T00:00:00.000Z",
  "cover": "/posts/multimesh-scatter/banner.webp",
  "tags": ["godot", "open-source", "addon", "asset"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "-features",
    "text": "\u{1F9E9} Features"
  }, {
    "depth": 2,
    "slug": "-install--use",
    "text": "\u{1F680} Install & Use"
  }, {
    "depth": 2,
    "slug": "\uFE0F-notes",
    "text": "\u26A0\uFE0F Notes"
  }, {
    "depth": 2,
    "slug": "\uFE0F-license",
    "text": "\u{1F5D2}\uFE0F License"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    hr: "hr",
    p: "p",
    strong: "strong",
    img: "img",
    h2: "h2",
    ul: "ul",
    li: "li",
    ol: "ol",
    a: "a",
    code: "code"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$GithubButton, {
      embedId: "godot-multimesh-scatter"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "A simple tool to randomly place meshes."
      })
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/posts/multimesh-scatter/random-rotation.webp",
        alt: "Image 1"
      })
    }), "\n", createVNode("div", {
      class: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
      children: [createVNode($$Video, {
        url: "https://user-images.githubusercontent.com/52855634/213530097-8c653666-5b24-41b0-91d2-4bb9b68750b7.mp4"
      }), createVNode($$Video, {
        url: "https://user-images.githubusercontent.com/52855634/213530108-fa75e5d3-0d4c-49f6-a449-f4df0d07f92c.mp4"
      }), createVNode($$Video, {
        url: "https://user-images.githubusercontent.com/52855634/213530112-e70b88b1-933b-407d-b491-c99db91d9ee1.mp4"
      })]
    }), "\n", createVNode(_components.h2, {
      id: "-features",
      children: "\u{1F9E9} Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Scatter objects in the scene. Instances automatically rotate to the normal of the terrain."
      }), "\n", createVNode(_components.li, {
        children: "Adjust the scatter type, size and collision layer and randomize the size and rotation."
      }), "\n", createVNode(_components.li, {
        children: "Clustering: Place instances in tight groups together."
      }), "\n", createVNode(_components.li, {
        children: ["Apply advanced constraint options to scatter according to:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Terrain angle"
          }), "\n", createVNode(_components.li, {
            children: "Vertex color"
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Chunks: Split the MultiMeshScatter node into chunks."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "-install--use",
      children: "\u{1F680} Install & Use"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Download this ", createVNode(_components.a, {
          href: "https://github.com/arcaneenergy/godot-multimesh-scatter",
          children: "repository"
        }), " or download the addon from the asset library inside Godot.\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Import the addons folder into your project (if it already isn\u2019t present)."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Activate the MultiMesh Scatter addon under Project > Project Settings > Plugins. If an error dialog appears, restart the engine and try activating it again."
      }), "\n", createVNode(_components.li, {
        children: "Add a MultiMeshScatter node to the scene."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "\uFE0F-notes",
      children: "\u26A0\uFE0F Notes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["The sphere placement type takes ", createVNode(_components.code, {
          children: "placement_size.x"
        }), " for the radius. The y and z values are not used."]
      }), "\n", createVNode(_components.li, {
        children: "The sphere placement type behaves more like a capsule shape. This means that only the horizontal radius is taken into account when scattering meshes."
      }), "\n", createVNode(_components.li, {
        children: "Scattering occurs automatically in the editor whenever you change a parameter or move the MultiMeshScatter node. In game mode, the scatter occurs once at the beginning of the game."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "\uFE0F-license",
      children: "\u{1F5D2}\uFE0F License"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "/LICENSE.md",
        children: "MIT License"
      })
    }), "\n", createVNode($$Youtube, {
      videoId: "2fa4guxq6iU"
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
const url = "src/content/posts/multimesh-scatter.mdx";
const file = "/home/runner/work/website/website/src/content/posts/multimesh-scatter.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
