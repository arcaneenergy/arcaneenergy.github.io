import { c as createComponent, d as createAstro, r as renderTemplate, m as maybeRenderHead, e as addAttribute, b as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.D4nPtnRa.js';
import { $ as $$Youtube } from './chunk.BfOQW1CV.js';
import { $ as $$GithubButton } from './chunk.BKuCniBE.js';
import 'kleur/colors';
import 'clsx';
/* empty css               */

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$Video = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Video;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<video controls data-astro-cid-7qzxku2k> <source${addAttribute(url, "src")} type="video/mp4" data-astro-cid-7qzxku2k> </video> `;
}, "/home/runner/work/website/website/src/components/Video.astro", void 0);

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
    "slug": "description",
    "text": "Description"
  }, {
    "depth": 3,
    "slug": "-features",
    "text": "🧩 Features"
  }, {
    "depth": 3,
    "slug": "-install--use",
    "text": "🚀 Install & Use"
  }, {
    "depth": 3,
    "slug": "️-notes",
    "text": "⚠️ Notes"
  }, {
    "depth": 3,
    "slug": "️-license",
    "text": "🗒️ License"
  }, {
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
    h3: "h3",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$GithubButton, {
      embedId: "godot-multimesh-scatter"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
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
    }), "\n", createVNode(_components.h3, {
      id: "-features",
      children: "🧩 Features"
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
    }), "\n", createVNode(_components.h3, {
      id: "-install--use",
      children: "🚀 Install & Use"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Download this ", createVNode(_components.a, {
          href: "https://github.com/arcaneenergy/godot-multimesh-scatter",
          children: "repository"
        }), " or download the addon from the asset library inside Godot.\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Import the addons folder into your project (if it already isn’t present)."
          }), "\n"]
        }), "\n"]
      }), "\n", createVNode(_components.li, {
        children: "Activate the MultiMesh Scatter addon under Project > Project Settings > Plugins. If an error dialog appears, restart the engine and try activating it again."
      }), "\n", createVNode(_components.li, {
        children: "Add a MultiMeshScatter node to the scene."
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "️-notes",
      children: "⚠️ Notes"
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
    }), "\n", createVNode(_components.h3, {
      id: "️-license",
      children: "🗒️ License"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "/LICENSE.md",
        children: "MIT License"
      })
    }), "\n", createVNode(_components.h2, {
      id: "video",
      children: "Video"
    }), "\n", createVNode($$Youtube, {
      videoId: "2fa4guxq6iU"
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

const url = "src/content/posts/multimesh-scatter.mdx";
const file = "/home/runner/work/website/website/src/content/posts/multimesh-scatter.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/multimesh-scatter.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
