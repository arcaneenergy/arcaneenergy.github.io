import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.CDHILubp.js';
import { $ as $$Youtube } from './chunk.C9JCG4Xb.js';
import { $ as $$GooglePlayButton } from './chunk.DayIZUCV.js';
import { $ as $$ImageGallery } from './chunk.BFg_9Aam.js';
import 'clsx';

const frontmatter = {
  "slug": "icosahedron",
  "title": "icosahedron",
  "description": "Move an icosahedron with the power of thrusters around.",
  "datetime": "2022-01-03T00:00:00.000Z",
  "cover": "/posts/icosahedron/banner.webp",
  "tags": ["godot", "google-play", "game", "software"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "description",
    "text": "Description"
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
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.icosahedron"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Play in unique environments, overcome traps and falls and reach the end of the level to advance."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Introduction"
      })
    }), "\n", createVNode(_components.p, {
      children: "Use the left and right buttons to move in the given direction. Use the up arrow button to fly up in the air. Moving and\nflying burns a given amount of fuel. Flying uses more fuel than left and right movement. To fill up the tank, release\nall buttons and wait a few seconds for the fuel to recharge. Any movement will interrupt the charging process and you\nwill have to wait again."
    }), "\n", createVNode(_components.p, {
      children: "You can find the menu button in the top left corner. Use it to return to the main menu or restart from the last\ncheckpoint or restart the level."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Main Menu"
      })
    }), "\n", createVNode(_components.p, {
      children: "Here you can toggle the sound, change the rendering quality, and enable or disable infinite fuel. You can also find\ninformation about the game and other contact information here."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Infinite fuel"
      })
    }), "\n", createVNode(_components.p, {
      children: "This option allows you to move freely in all levels without the need for charging. To activate this option, you must\nfirst finish the game."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Performance issues"
      })
    }), "\n", createVNode(_components.p, {
      children: "Cycle through the quality options in the main menu. This changes the rendering quality of the game and has a huge impact\non the performance."
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/icosahedron/image-01.webp", "/posts/icosahedron/image-02.webp", "/posts/icosahedron/image-03.webp", "/posts/icosahedron/image-04.webp", "/posts/icosahedron/image-05.webp", "/posts/icosahedron/image-06.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "ux_mbYmUB-o"
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

const url = "src/content/posts/icosahedron.mdx";
const file = "/home/runner/work/website/website/src/content/posts/icosahedron.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/icosahedron.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
