import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.CDHILubp.js';
import { $ as $$Youtube } from './chunk.C9JCG4Xb.js';
import { $ as $$ItchioWidget } from './chunk.D7AB2vus.js';
import { $ as $$GooglePlayButton } from './chunk.DayIZUCV.js';
import { $ as $$ImageGallery } from './chunk.BFg_9Aam.js';
import 'clsx';

const frontmatter = {
  "slug": "mergifier",
  "title": "Mergifier",
  "description": "Merge with other blobs to grow or separate yourself to get smaller.",
  "datetime": "2021-07-02T00:00:00.000Z",
  "cover": "/posts/mergifier/banner.webp",
  "tags": ["godot", "google-play", "itch-io", "game", "software"]
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
    a: "a",
    h2: "h2",
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.mergifier"
    }), "\n", createVNode($$ItchioWidget, {
      embedId: "1065242"
    }), "\n", createVNode(_components.p, {
      children: ["First submitted to the ", createVNode(_components.a, {
        href: "https://itch.io/jam/go-godot-jam",
        children: "GoGodotJam"
      }), ", which ran from May 24th 2021 at 12:00 AM to June\n2nd 2021 at 5:00 PM, later made into a full game and released on\nthe ", createVNode(_components.a, {
        href: "https://play.google.com/store/apps/details?id=com.arcaneenergy.mergifier",
        children: "Google Play Store"
      }), ". The theme of the game\njam: ", createVNode(_components.strong, {
        children: "Growth"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.a, {
        href: "https://itch.io/jam/go-godot-jam/rate/1065242",
        children: "View the submission"
      })
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Play as a blob. Merge with other blobs to grow and skip over huge obstacles, or separate yourself to go through small\npathways."
    }), "\n", createVNode(_components.p, {
      children: "Play in 7 unique levels + 2 bonus levels. Each level has a unique atmosphere with vivid backgrounds and elements."
    }), "\n", createVNode(_components.p, {
      children: "This game is playable both with touchscreen and keyboard."
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/mergifier/image-01.webp", "/posts/mergifier/image-02.webp", "/posts/mergifier/image-03.webp", "/posts/mergifier/image-04.webp", "/posts/mergifier/image-05.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "-xpi6DgFLQM"
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

const url = "src/content/posts/mergifier.mdx";
const file = "/home/runner/work/website/website/src/content/posts/mergifier.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/mergifier.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
