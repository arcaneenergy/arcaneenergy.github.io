import './chunk.88f5223f.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "control-cube.mdx";
const collection = "posts";
const slug = "control-cube";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport GooglePlayButton from "@components/GooglePlayButton.astro";\nimport ImageGallery from "@components/ImageGallery.astro";\n\n<GooglePlayButton embedId="com.arcaneenergy.controlcube" />\n\n## Description\n\nMove a cube, solve puzzles and unlock new levels.\n\nYour goal is to reach the end of the level. Collect coins to unlock new levels.\n\nEach level has a different style.\n\n## Screenshots\n\n<ImageGallery images={\n  [\n    "/posts/control-cube/image-01.webp",\n    "/posts/control-cube/image-02.webp",\n    "/posts/control-cube/image-03.webp",\n    "/posts/control-cube/image-04.webp",\n    "/posts/control-cube/image-05.webp",\n    "/posts/control-cube/image-06.webp",\n  ]\n} />\n\n## Trailer\n\n<Youtube videoId="2IcDCf354ZA" />\n';
const data = {
  title: "Control Cube",
  description: "Navigate through levels and solve puzzles.",
  datetime: new Date(16155072e5),
  cover: "/posts/control-cube/banner.webp",
  tags: ["godot", "google-play", "game", "software"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/control-cube.mdx",
  rawData: '\nslug: control-cube\ntitle: Control Cube\ndescription: Navigate through levels and solve puzzles.\ndatetime: 2021-03-12\ncover: "/posts/control-cube/banner.webp"\ntags:\n  - godot\n  - google-play\n  - game\n  - software'
};

export { _internal, body, collection, data, id, slug };
