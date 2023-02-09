import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.37b49969.js';
import { $ as $$Youtube } from './chunk.8ce4b926.js';
import { $ as $$GithubButton } from './chunk.ecdb180a.js';
/* empty css                */import 'html-escaper';
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
  "heroImage": "/posts/multimesh-scatter/banner.webp",
  "tags": ["godot", "open-source", "addon"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "download",
    "text": "Download"
  }, {
    "depth": 2,
    "slug": "how-to-use",
    "text": "How to use"
  }, {
    "depth": 2,
    "slug": "features",
    "text": "Features"
  }, {
    "depth": 2,
    "slug": "parameters",
    "text": "Parameters"
  }, {
    "depth": 2,
    "slug": "notes",
    "text": "Notes"
  }, {
    "depth": 2,
    "slug": "license",
    "text": "License"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    img: "img",
    hr: "hr",
    h2: "h2",
    a: "a",
    ol: "ol",
    li: "li",
    ul: "ul",
    code: "code"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$GithubButton, {
      embedId: "godot-multimesh-scatter"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.img, {
        src: "/posts/multimesh-scatter/random-rotation.webp",
        alt: "Image 1"
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "download",
      children: "Download"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://github.com/arcaneenergy/godot-multimesh-scatter",
        children: "MultiMesh Scatter"
      })
    }), "\n", createVNode(_components.h2, {
      id: "how-to-use",
      children: "How to use"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: ["Download this ", createVNode(_components.a, {
          href: "https://github.com/arcaneenergy/godot-multimesh-scatter",
          children: "repository"
        }), " or download the addon from the\nAsseLib in Godot."]
      }), "\n", createVNode(_components.li, {
        children: "Import the addons folder into your project."
      }), "\n", createVNode(_components.li, {
        children: "Activate MultiMesh Scatter under Project > Project Settings > Plugins."
      }), "\n", createVNode(_components.li, {
        children: "Add a MultiMeshScatter node to the scene."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode($$Video, {
        url: "https://user-images.githubusercontent.com/52855634/213530097-8c653666-5b24-41b0-91d2-4bb9b68750b7.mp4"
      }), ",\n", createVNode($$Video, {
        url: "https://user-images.githubusercontent.com/52855634/213530108-fa75e5d3-0d4c-49f6-a449-f4df0d07f92c.mp4"
      }), ",\n", createVNode($$Video, {
        url: "https://user-images.githubusercontent.com/52855634/213530112-e70b88b1-933b-407d-b491-c99db91d9ee1.mp4"
      }), ","]
    }), "\n", createVNode(_components.h2, {
      id: "features",
      children: "Features"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Scatter objects in the scene using a MultiMeshInstance node."
      }), "\n", createVNode(_components.li, {
        children: "Adjust the instance count, size, and collision layer."
      }), "\n", createVNode(_components.li, {
        children: "Randomize size and rotation of each instance."
      }), "\n", createVNode(_components.li, {
        children: "Automatically rotates each instance to the normal of the terrain."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "parameters",
      children: "Parameters"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "count"
        }), ": The number of instances to generate."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "placement_type"
        }), ": Defines the placement type."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "placement_size"
        }), ": The placement size of the bounding box. Enable ", createVNode(_components.code, {
          children: "show_debug_area"
        }), " to view the size of the bounding\nbox. Note: If the ", createVNode(_components.code, {
          children: "placement_type"
        }), " is set to Sphere, only the x value will be used to specify the radius of the\nsphere."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "collision_mask"
        }), ": The physics collision mask that the instances should collide with."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "offset_position"
        }), ": Add an offset to the placed instances."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "offset_rotation"
        }), ": Add a rotation offset to the placed instances."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "base_scale"
        }), ": Change the base scale of the instanced meshes."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "min_random_size"
        }), ": The minimum random size for each instance."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "max_random_size"
        }), ": The maximum random size for each instance."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "random_rotation"
        }), ": Rotate each instance by a random amount between. ", createVNode(_components.code, {
          children: "-random_rotation"
        }), " and ", createVNode(_components.code, {
          children: "+random_rotation"
        }), "."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "seed"
        }), ": A seed to feed for the random number generator."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.code, {
          children: "show_debug_area"
        }), ": Toggle the visibility of the bounding box area."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "notes",
      children: "Notes"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["The sphere placement type takes ", createVNode(_components.code, {
          children: "placement_size.x"
        }), " for the radius. The y and z values are not used."]
      }), "\n", createVNode(_components.li, {
        children: "The sphere placement type behaves more like a capsule shape. This means that only the horizontal radius is taken\ninto account when scattering meshes."
      }), "\n", createVNode(_components.li, {
        children: "Scattering occurs automatically in the editor whenever you change a parameter or move the MultiMeshScatter node.\nIn game mode, the scatter occurs once at the beginning of the game."
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "license",
      children: "License"
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
