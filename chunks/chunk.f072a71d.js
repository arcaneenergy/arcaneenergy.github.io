import './chunk.b21d6461.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "walking-simulator.mdx";
const collection = "posts";
const slug = "walking-simulator";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport ImageGallery from "@components/ImageGallery.astro";\n\n## Screenshots\n\n<ImageGallery images={\n  [\n    "/posts/walking-simulator/image-01.webp",\n    "/posts/walking-simulator/image-02.webp",\n    "/posts/walking-simulator/image-03.webp",\n    "/posts/walking-simulator/image-04.webp",\n    "/posts/walking-simulator/image-05.webp",\n    "/posts/walking-simulator/image-06.webp",\n  ]\n} />\n\n## Videos\n\n<div class="row">\n  <div class="col-xs-6">\n    <Youtube videoId="6EP0E4-m7DU" />\n  </div>\n  <div class="col-xs-6">\n    <Youtube videoId="x3yRIS53hBw" />\n  </div>\n  <div class="col-xs-6">\n    <Youtube videoId="zXZNGsL-n2w" />\n  </div>\n</div>\n';
const data = {
  title: "Walking Simulator",
  description: "Walking Simulator focuses on the Backrooms-related concepts and environments.",
  datetime: new Date(16527456e5),
  cover: "/posts/walking-simulator/banner.webp",
  tags: ["godot", "screenshot-collection", "post"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/walking-simulator.mdx",
  rawData: '\nslug: walking-simulator\ntitle: Walking Simulator\ndescription: Walking Simulator focuses on the Backrooms-related concepts and environments.\ndatetime: 2022-05-17\ncover: "/posts/walking-simulator/banner.webp"\ntags:\n  - godot\n  - screenshot-collection\n  - post'
};

export { _internal, body, collection, data, id, slug };
