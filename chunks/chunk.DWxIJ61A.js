import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.CDHILubp.js';
import { $ as $$Youtube } from './chunk.C9JCG4Xb.js';
import { $ as $$GooglePlayButton } from './chunk.DayIZUCV.js';
import { $ as $$ImageGallery } from './chunk.BFg_9Aam.js';
import 'clsx';

const frontmatter = {
  "slug": "sandbox-elements",
  "title": "Sandbox Elements",
  "description": "Play, create and share — Your own pixel art sandbox.",
  "datetime": "2025-10-04T20:00:00.000Z",
  "cover": "/posts/sandbox-elements/banner.webp",
  "tags": ["godot", "google-play", "game", "software"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "description",
    "text": "Description"
  }, {
    "depth": 3,
    "slug": "daynight-cycle",
    "text": "Day/Night-Cycle"
  }, {
    "depth": 3,
    "slug": "fire-and-explosion-system",
    "text": "Fire and Explosion System"
  }, {
    "depth": 3,
    "slug": "backpack",
    "text": "Backpack"
  }, {
    "depth": 3,
    "slug": "entities",
    "text": "Entities"
  }, {
    "depth": 3,
    "slug": "weather-system",
    "text": "Weather System"
  }, {
    "depth": 3,
    "slug": "world-themes",
    "text": "World Themes"
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
    h3: "h3",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.sandbox_elements"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Play, create and share worlds in this physics-based pixel art sandbox game. Complete quests and earn achievements to collect coins and purchase elements. Adapt your world to different day and weather conditions and watch elements interact."
    }), "\n", createVNode(_components.h3, {
      id: "daynight-cycle",
      children: "Day/Night-Cycle"
    }), "\n", createVNode(_components.p, {
      children: "With a naturally occurring day/night cycle or a manually configured one, you can easily turn day into night or night into day."
    }), "\n", createVNode(_components.h3, {
      id: "fire-and-explosion-system",
      children: "Fire and Explosion System"
    }), "\n", createVNode(_components.p, {
      children: "Light up your sandbox with explosive energy! Start fires and put them out, watching elements burn and explosions ripple through. Elements burn through various factors, and explosions create dynamic impacts, influencing the elements in their vicinity."
    }), "\n", createVNode(_components.h3, {
      id: "backpack",
      children: "Backpack"
    }), "\n", createVNode(_components.p, {
      children: "Your backpack is the key to your elements. Choose an element of your choice from a variety of categories and place it into your world."
    }), "\n", createVNode(_components.h3, {
      id: "entities",
      children: "Entities"
    }), "\n", createVNode(_components.p, {
      children: "Watch entities wander and bring a touch of life to your game. They will react to things around in their environment."
    }), "\n", createVNode(_components.h3, {
      id: "weather-system",
      children: "Weather System"
    }), "\n", createVNode(_components.p, {
      children: "Without weather, the world would feel dry. Add clouds and rain to your sandbox to enhance the experience. Feel the atmosphere change, turning your sandbox into a living, breathing masterpiece."
    }), "\n", createVNode(_components.h3, {
      id: "world-themes",
      children: "World Themes"
    }), "\n", createVNode(_components.p, {
      children: "From a dense forest, to a bustling city, or a rocky mountain desert, each environment is a canvas for your imagination. These themes provide a unique backdrop for your sandbox."
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/sandbox-elements/image-01.webp", "/posts/sandbox-elements/image-02.webp", "/posts/sandbox-elements/image-03.webp", "/posts/sandbox-elements/image-04.webp", "/posts/sandbox-elements/image-05.webp", "/posts/sandbox-elements/image-06.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "5P42Vc4zp0Y"
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

const url = "src/content/posts/sandbox-elements.mdx";
const file = "/home/runner/work/website/website/src/content/posts/sandbox-elements.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/sandbox-elements.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
