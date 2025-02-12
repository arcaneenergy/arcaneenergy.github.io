import { b as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.D4nPtnRa.js';
import { $ as $$ItchioWidget } from './chunk.CAF190gn.js';
import { $ as $$ImageGallery } from './chunk.NMJBhc1G.js';
import 'clsx';

const frontmatter = {
  "slug": "animated-explosions-pack-1",
  "title": "Animated Explosions Pack",
  "description": "Add smooth looking explosions to your game!",
  "datetime": "2022-04-11T00:00:00.000Z",
  "cover": "/posts/animated-explosions-pack-1/banner.webp",
  "tags": ["godot", "paid", "asset"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "description",
    "text": "Description"
  }, {
    "depth": 3,
    "slug": "information",
    "text": "Information"
  }, {
    "depth": 3,
    "slug": "spritesheet-data",
    "text": "Spritesheet data"
  }, {
    "depth": 2,
    "slug": "screenshots",
    "text": "Screenshots"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$ItchioWidget, {
      embedId: "1481896"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "A collection of explosions to add to your game! Create frame by frame explosions with these animations."
    }), "\n", createVNode(_components.p, {
      children: "Included spritesheets, individual frames for each spritesheets and a sample Godot project!\nThe Godot project is made with version 3.4.4."
    }), "\n", createVNode(_components.h3, {
      id: "information",
      children: "Information"
    }), "\n", createVNode(_components.p, {
      children: "Frames:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "128x128"
      }), "\n", createVNode(_components.li, {
        children: ".png format"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Spritesheets:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "25 FPS"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "spritesheet-data",
      children: "Spritesheet data"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: "8x8 (64 Frames)"
      }), "\n", createVNode(_components.li, {
        children: "8x5 (40 Frames)"
      }), "\n", createVNode(_components.li, {
        children: "6x4 (24 Frames)"
      }), "\n", createVNode(_components.li, {
        children: "10x5 (50 Frames)"
      }), "\n", createVNode(_components.li, {
        children: "22x10 (220 Frames)"
      }), "\n", createVNode(_components.li, {
        children: "10x5 (50 Frames)"
      }), "\n", createVNode(_components.li, {
        children: "10x5 (50 Frames)"
      }), "\n", createVNode(_components.li, {
        children: "10x10 (100 Frames)"
      }), "\n", createVNode(_components.li, {
        children: "10x5 (50 Frames)"
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/animated-explosions-pack-1/image-01.webp", "/posts/animated-explosions-pack-1/image-02.webp", "/posts/animated-explosions-pack-1/image-03.webp", "/posts/animated-explosions-pack-1/image-04.webp"]
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

const url = "src/content/posts/animated-explosions-pack-1.mdx";
const file = "/home/runner/work/website/website/src/content/posts/animated-explosions-pack-1.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/animated-explosions-pack-1.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
