import { e as createVNode, F as Fragment, _ as __astro_tag_component__ } from './chunk.CDHILubp.js';
import { $ as $$Youtube } from './chunk.C9JCG4Xb.js';
import { $ as $$GooglePlayButton } from './chunk.DayIZUCV.js';
import { $ as $$ImageGallery } from './chunk.BFg_9Aam.js';
import 'clsx';

const frontmatter = {
  "slug": "metal-ball-adventures",
  "title": "Metal Ball Adventures",
  "description": "Move with the joysticks. Avoid enemies, solve puzzles and reach the flag to win.",
  "datetime": "2020-06-28T00:00:00.000Z",
  "cover": "/posts/metal-ball-adventures/banner.webp",
  "tags": ["unity", "google-play", "game", "software"]
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
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$GooglePlayButton, {
      embedId: "com.arcaneenergy.metalballadventures"
    }), "\n", createVNode(_components.h2, {
      id: "description",
      children: "Description"
    }), "\n", createVNode(_components.p, {
      children: "Use the left control stick to move left and right. Use the right control stick to move forward and backward. The camera\nwill adjust itself when moving and turning."
    }), "\n", createVNode(_components.p, {
      children: "The goal is to complete the level, by reaching the red flag at the end of each level. Collect points throughout the game\nto buy new skins at the shop in the main menu."
    }), "\n", createVNode(_components.p, {
      children: "Purchase a skin by clicking on one of the items in the shop menu. Once you have enough points for a skin, the item will\nbe displayed with a green lock. Purchasing a skin will automatically equip it. To change a skin, click on one of your\npreviously purchased skins to equip it."
    }), "\n", createVNode(_components.h2, {
      id: "screenshots",
      children: "Screenshots"
    }), "\n", createVNode($$ImageGallery, {
      images: ["/posts/metal-ball-adventures/image-01.webp", "/posts/metal-ball-adventures/image-02.webp", "/posts/metal-ball-adventures/image-03.webp", "/posts/metal-ball-adventures/image-04.webp", "/posts/metal-ball-adventures/image-05.webp", "/posts/metal-ball-adventures/image-06.webp", "/posts/metal-ball-adventures/image-07.webp", "/posts/metal-ball-adventures/image-08.webp"]
    }), "\n", createVNode(_components.h2, {
      id: "trailer",
      children: "Trailer"
    }), "\n", createVNode($$Youtube, {
      videoId: "t1ZQNTXYNs8"
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

const url = "src/content/posts/metal-ball-adventures.mdx";
const file = "/home/runner/work/website/website/src/content/posts/metal-ball-adventures.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/runner/work/website/website/src/content/posts/metal-ball-adventures.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
