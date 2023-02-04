import { _ as __astro_tag_component__, F as Fragment, j as createVNode } from './chunk.67c838a9.js';
import { $ as $$Youtube } from './chunk.20407163.js';
import { $ as $$ItchioWidget } from './chunk.3201c11b.js';
import { $ as $$GooglePlayButton } from './chunk.e6644013.js';
import 'html-escaper';
/* empty css                *//* empty css                *//* empty css                */
const frontmatter = {
  "slug": "mergifier",
  "title": "Mergifier",
  "description": "Merge with other blobs to grow or separate yourself to get smaller.",
  "datetime": "2021-07-02T00:00:00.000Z",
  "heroImage": "/posts/mergifier/banner.webp",
  "tags": ["godot", "google-play", "itch-io"]
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "trailer",
    "text": "Trailer"
  }, {
    "depth": 2,
    "slug": "screenshots",
    "text": "Screenshots"
  }, {
    "depth": 2,
    "slug": "description",
    "text": "Description"
  }, {
    "depth": 2,
    "slug": "youtube-playlist",
    "text": "YouTube Playlist"
  }];
}
function _createMdxContent(props) {
  const _components = Object.assign({
    p: "p",
    a: "a",
    strong: "strong",
    h2: "h2",
    img: "img"
  }, props.components);
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.mergifier"
    }), "\n", createVNode("div", {
      class: "row",
      children: createVNode("div", {
        class: "col-xs-6",
        children: createVNode("a", {
          href: "https://arcaneenergy.itch.io/mergifier",
          children: createVNode("img", {
            src: "/icons/itch_io_badge.svg"
          })
        })
      })
    }), "\n", createVNode($$ItchioWidget, {
      embedId: "1065242"
    }), "\n", createVNode(_components.p, {
      children: ["First submitted to the ", createVNode(_components.a, {
        href: "https://itch.io/jam/go-godot-jam",
        children: "GoGodotJam"
      }), ", which ran from May 24th 2021 at 12:00 AM to June\n2nd 2021 at 5:00 PM, later made into a full game and released on\nthe ", createVNode(_components.a, {
        href: "https://play.google.com/store/apps/details?id=com.arcaneenergy.mergifie",
        children: "Google Play Store"
      }), ". The theme of the game\njam: ", createVNode(_components.strong, {
        children: "Growth"
      }), "."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://itch.io/jam/go-godot-jam/rate/1065242",
        children: "View the submission"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "-xpi6DgFLQM"
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.img, {
        src: "/posts/mergifier/image-01.webp",
        alt: "Image 1"
      }), "\n", createVNode(_components.img, {
        src: "/posts/mergifier/image-02.webp",
        alt: "Image 2"
      }), "\n", createVNode(_components.img, {
        src: "/posts/mergifier/image-03.webp",
        alt: "Image 3"
      }), "\n", createVNode(_components.img, {
        src: "/posts/mergifier/image-04.webp",
        alt: "Image 4"
      }), "\n", createVNode(_components.img, {
        src: "/posts/mergifier/image-05.webp",
        alt: "Image 5"
      })]
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
      id: "youtube-playlist",
      children: "YouTube Playlist"
    }), "\n", createVNode($$Youtube, {
      videoId: "videoseries?list=PLKnVIoBRwyaOEqi3pQcFzyK57XoJvx8VJ"
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
const url = "src/content/posts/mergifier.mdx";
const file = "/home/runner/work/website/website/src/content/posts/mergifier.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components },
										});
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);

export { Content, Content as default, file, frontmatter, getHeadings, url };
