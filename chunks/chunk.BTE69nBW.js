import { b as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.D4nPtnRa.js';
import { $ as $$Youtube } from './chunk.BfOQW1CV.js';
import { $ as $$ItchioWidget } from './chunk.CAF190gn.js';
import { $ as $$ImageGallery } from './chunk.NMJBhc1G.js';
import 'clsx';

const frontmatter = {
  "slug": "divided-chains-combined-brains",
  "title": "Divided Chains Combined Brains",
  "description": "Control one or multiple chunks and complete puzzles.",
  "datetime": "2021-06-12T00:00:00.000Z",
  "cover": "/posts/divided-chains-combined-brains/banner.gif",
  "tags": ["godot", "itch-io", "game", "software"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "description",
    "text": "Description"
  }, {
    "depth": 3,
    "slug": "controls",
    "text": "Controls"
  }, {
    "depth": 2,
    "slug": "screenshots",
    "text": "Screenshots"
  }, {
    "depth": 2,
    "slug": "trailer",
    "text": "Trailer"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    h3: "h3",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$ItchioWidget, {
      embedId: "1080661"
    }), "\n", createVNode(_components.p, {
      children: ["Submitted to the ", createVNode(_components.a, {
        href: "https://itch.io/jam/gmtk-2021",
        children: "GMTK Game Jam 2021"
      }), " - 48 hour game making marathon, focused on\ndesign, mechanics, and clever ideas. From June 11th, at 7PM UK time, to June 13th, at 7PM UK time. The theme: ", createVNode(_components.strong, {
        children: "Joined\nTogether"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://itch.io/jam/gmtk-2021/rate/1080661",
        children: "View the submission"
      })
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Every chunk shares the same controls. That means each chunk moves\nin the same direction as the other chunks."
    }), "\n", createVNode(_components.p, {
      children: "Play in 6 unique levels. Each level has a unique atmosphere and different backgrounds."
    }), "\n", createVNode(_components.h3, {
      id: "controls",
      children: "Controls"
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "A"
      }), " or ", createVNode("kbd", {
        children: "←"
      }), ": Move left"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "D"
      }), " or ", createVNode("kbd", {
        children: "→"
      }), ": Move Right"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "Space"
      }), " or ", createVNode("kbd", {
        children: "↑"
      }), ": Jump"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "P"
      }), ": Restart level"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode("kbd", {
        children: "Esc"
      }), ": Exit game"]
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/divided-chains-combined-brains/image-01.webp", "/posts/divided-chains-combined-brains/image-02.webp", "/posts/divided-chains-combined-brains/image-03.webp", "/posts/divided-chains-combined-brains/image-04.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "I66_MyAeb4I"
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

const url = "src/content/posts/divided-chains-combined-brains.mdx";
const file = "/home/runner/work/website/website/src/content/posts/divided-chains-combined-brains.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/divided-chains-combined-brains.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
