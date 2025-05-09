import { c as createComponent, b as createAstro, r as renderTemplate, m as maybeRenderHead, d as addAttribute, e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.CDHILubp.js';
import { $ as $$Youtube } from './chunk.C9JCG4Xb.js';
import { $ as $$ItchioWidget } from './chunk.D7AB2vus.js';
import 'kleur/colors';
import 'clsx';
/* empty css               */
import { $ as $$GooglePlayButton } from './chunk.DayIZUCV.js';
import { $ as $$ImageGallery } from './chunk.BFg_9Aam.js';

const $$Astro = createAstro("https://arcaneenergy.github.io");
const $$ItchioEmbed = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ItchioEmbed;
  const { embedId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div data-astro-cid-gwohacsc> <iframe${addAttribute(`https://itch.io/embed-upload/${embedId}?color=1E1E24`, "src")} allowfullscreen="" width="800" height="500" frameborder="0" data-astro-cid-gwohacsc></iframe> </div> `;
}, "/home/runner/work/website/website/src/components/ItchioEmbed.astro", void 0);

const frontmatter = {
  "slug": "whiteboard",
  "title": "Whiteboard",
  "description": "Your private whiteboard.",
  "datetime": "2021-11-09T00:00:00.000Z",
  "cover": "/posts/whiteboard/banner.webp",
  "tags": ["godot", "google-play", "itch-io", "software"]
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
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$ItchioEmbed, {
      embedId: "6455154"
    }), "\n", createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.whiteboard"
    }), "\n", createVNode($$ItchioWidget, {
      embedId: "1277666"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "A simple whiteboard for writing text, inserting pictures and drawing. Each tool has different settings and properties.\nAn integrated presentation system is available. Place focus points on your whiteboard and play them back like a slide\nshow."
    }), "\n", createVNode(_components.p, {
      children: "Your whiteboards are private. There is no server."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Features"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Write text. Select different fonts and font styles."
      }), "\n", createVNode(_components.li, {
        children: "Insert pictures. Change the scaling mode."
      }), "\n", createVNode(_components.li, {
        children: "Insert shapes."
      }), "\n", createVNode(_components.li, {
        children: "Draw with different variants of brushes."
      }), "\n", createVNode(_components.li, {
        children: "Change the background theme."
      }), "\n", createVNode(_components.li, {
        children: "Edit the grid size, background color and more."
      }), "\n", createVNode(_components.li, {
        children: "Presentation system."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Whiteboard made with Godot."
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/whiteboard/image-01.webp", "/posts/whiteboard/image-02.webp", "/posts/whiteboard/image-03.webp", "/posts/whiteboard/image-04.webp", "/posts/whiteboard/image-05.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "YIwPzPbcuqk"
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

const url = "src/content/posts/whiteboard.mdx";
const file = "/home/runner/work/website/website/src/content/posts/whiteboard.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/whiteboard.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
