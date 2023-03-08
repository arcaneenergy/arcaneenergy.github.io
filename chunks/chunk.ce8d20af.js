import './chunk.95b855ea.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "metal-ball-adventures.mdx";
const collection = "posts";
const slug = "metal-ball-adventures";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport GooglePlayButton from "@components/GooglePlayButton.astro";\nimport ImageGallery from "@components/ImageGallery.astro";\n\n<GooglePlayButton embedId="com.arcaneenergy.metalballadventures" />\n\n## Trailer\n\n<Youtube videoId="t1ZQNTXYNs8" />\n\n## Screenshots\n\n<ImageGallery images={\n  [\n    "/posts/metal-ball-adventures/image-01.webp",\n    "/posts/metal-ball-adventures/image-02.webp",\n    "/posts/metal-ball-adventures/image-03.webp",\n    "/posts/metal-ball-adventures/image-04.webp",\n    "/posts/metal-ball-adventures/image-05.webp",\n    "/posts/metal-ball-adventures/image-06.webp",\n    "/posts/metal-ball-adventures/image-07.webp",\n    "/posts/metal-ball-adventures/image-08.webp",\n  ]\n} />\n\n## Description\n\nUse the left control stick to move left and right. Use the right control stick to move forward and backward. The camera\nwill adjust itself when moving and turning.\n\nThe goal is to complete the level, by reaching the red flag at the end of each level. Collect points throughout the game\nto buy new skins at the shop in the main menu.\n\nPurchase a skin by clicking on one of the items in the shop menu. Once you have enough points for a skin, the item will\nbe displayed with a green lock. Purchasing a skin will automatically equip it. To change a skin, click on one of your\npreviously purchased skins to equip it.\n\n## YouTube Playlist\n\n<Youtube videoId="videoseries?list=PLKnVIoBRwyaMxBoIWwB9ylzLMi7B_HNNO" />\n';
const data = {
  title: "Metal Ball Adventures",
  description: "Move with the joysticks. Avoid enemies, solve puzzles and reach the flag to win.",
  datetime: new Date(15933024e5),
  heroImage: "/posts/metal-ball-adventures/banner.webp",
  tags: ["unity", "google-play", "game", "software"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/metal-ball-adventures.mdx",
  rawData: '\nslug: metal-ball-adventures\ntitle: Metal Ball Adventures\ndescription: Move with the joysticks. Avoid enemies, solve puzzles and reach the flag to win.\ndatetime: 2020-06-28\nheroImage: "/posts/metal-ball-adventures/banner.webp"\ntags:\n  - unity\n  - google-play\n  - game\n  - software'
};

export { _internal, body, collection, data, id, slug };
