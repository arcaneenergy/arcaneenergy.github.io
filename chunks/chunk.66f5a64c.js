import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.95b855ea.js';
import { $ as $$Youtube } from './chunk.d62b00db.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';
/* empty css                */
const frontmatter = {
  "slug": "top-down-shooter-tutorial-series",
  "title": "Top Down Shooter Tutorial Series",
  "description": "Learn how to create a Top Down Shooter in a 5-part tutorial series.",
  "datetime": "2021-12-07T00:00:00.000Z",
  "cover": "/posts/top-down-shooter-tutorial-series/banner.webp",
  "tags": ["godot", "tutorial", "post"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "description",
    "text": "Description"
  }, {
    "depth": 2,
    "slug": "tutorial-1-creating-the-player",
    "text": "Tutorial #1: Creating the Player"
  }, {
    "depth": 2,
    "slug": "tutorial-2-adding-enemies-and-shooting",
    "text": "Tutorial #2: Adding Enemies and Shooting"
  }, {
    "depth": 2,
    "slug": "tutorial-3-collision-layersmasks-and-health-system",
    "text": "Tutorial #3: Collision Layers/Masks and Health System"
  }, {
    "depth": 2,
    "slug": "tutorial-4-health-kits-bullet-hits",
    "text": "Tutorial #4: Health Kits, Bullet Hits"
  }, {
    "depth": 2,
    "slug": "tutorial-5-gui-and-theming",
    "text": "Tutorial #5: GUI and Theming"
  }, {
    "depth": 2,
    "slug": "youtube-playlist",
    "text": "YouTube Playlist"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h2: "h2",
    p: "p",
    ul: "ul",
    li: "li",
    hr: "hr"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "This tutorial series focuses on different parts of game development."
    }), "\n", createVNode(_components.p, {
      children: "You will learn:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "How to use a singleton."
      }), "\n", createVNode(_components.li, {
        children: "Creating custom inputs and user-defined signals."
      }), "\n", createVNode(_components.li, {
        children: "How to create a Player who can move, turn and attack."
      }), "\n", createVNode(_components.li, {
        children: "How to create enemies that can move, turn and attack a target."
      }), "\n", createVNode(_components.li, {
        children: "Common attack and health system."
      }), "\n", createVNode(_components.li, {
        children: "Create a simple user interface"
      }), "\n", createVNode(_components.li, {
        children: "GUI Skinning (Themes)"
      }), "\n", createVNode(_components.li, {
        children: "Connecting the interface with game code."
      }), "\n", createVNode(_components.li, {
        children: "Create a simple main menu."
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "tutorial-1-creating-the-player",
      children: "Tutorial #1: Creating the Player"
    }), "\n", createVNode(_components.p, {
      children: "Tutorial 1/5"
    }), "\n", createVNode(_components.p, {
      children: "This tutorial will focus on creating a basic game structure and player character. The player character can be controlled\nwith keys and rotated with the mouse."
    }), "\n", createVNode($$Youtube, {
      videoId: "wdKOtA5-Imk"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "tutorial-2-adding-enemies-and-shooting",
      children: "Tutorial #2: Adding Enemies and Shooting"
    }), "\n", createVNode(_components.p, {
      children: "Tutorial 2/5"
    }), "\n", createVNode(_components.p, {
      children: "In this tutorial, we are going to create a simple enemy that can move. We will also implement a simple but dynamic\nshooting system that can be shared by different scripts."
    }), "\n", createVNode($$Youtube, {
      videoId: "bjP71cQJrVE"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "tutorial-3-collision-layersmasks-and-health-system",
      children: "Tutorial #3: Collision Layers/Masks and Health System"
    }), "\n", createVNode(_components.p, {
      children: "Tutorial 3/5"
    }), "\n", createVNode(_components.p, {
      children: "Collision layers and collision masks can be confusing at first. In this tutorial, both of them will be used to make the\nbullets collide with specific layers. We will also implement a dynamic health system."
    }), "\n", createVNode($$Youtube, {
      videoId: "Z6i58mfcK3A"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "tutorial-4-health-kits-bullet-hits",
      children: "Tutorial #4: Health Kits, Bullet Hits"
    }), "\n", createVNode(_components.p, {
      children: "Tutorial 4/5"
    }), "\n", createVNode(_components.p, {
      children: "We\u2019re going to be adding health kits to the game now. We will also get the bullets to do something now."
    }), "\n", createVNode($$Youtube, {
      videoId: "Yk00STxcon4"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "tutorial-5-gui-and-theming",
      children: "Tutorial #5: GUI and Theming"
    }), "\n", createVNode(_components.p, {
      children: "Tutorial 5/5"
    }), "\n", createVNode(_components.p, {
      children: "A simple, but functional GUI will be created in this tutorial."
    }), "\n", createVNode($$Youtube, {
      videoId: "v-N_auLEQ2w"
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "youtube-playlist",
      children: "YouTube Playlist"
    }), "\n", createVNode($$Youtube, {
      videoId: "videoseries?list=PLKnVIoBRwyaPJ-U6jPAePrwvOHhWZ6vxo"
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
const url = "src/content/posts/top-down-shooter-tutorial-series.mdx";
const file = "/home/runner/work/website/website/src/content/posts/top-down-shooter-tutorial-series.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
