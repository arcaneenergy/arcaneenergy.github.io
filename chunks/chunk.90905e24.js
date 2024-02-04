import './chunk.88f5223f.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "rocket-bounce.mdx";
const collection = "posts";
const slug = "rocket-bounce";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport GooglePlayButton from "@components/GooglePlayButton.astro";\nimport ImageGallery from "@components/ImageGallery.astro";\n\n<GooglePlayButton embedId="com.ArcaneEnergy.RocketBounce" />\n\n## Description\n\nFly around and avoid obstacles to win levels.\n\nDrag around the rocket and release when you are ready to fly. Tap either side of the screen to move in that direction.\n\n## Screenshots\n\n<ImageGallery images={\n  [\n    "/posts/rocket-bounce/image-01.webp",\n    "/posts/rocket-bounce/image-02.webp",\n    "/posts/rocket-bounce/image-03.webp",\n    "/posts/rocket-bounce/image-04.webp",\n    "/posts/rocket-bounce/image-05.webp",\n  ]\n} />\n\n## Trailer\n\n<Youtube videoId="kPyI6jscET0" />\n';
const data = {
  title: "Rocket Bounce",
  description: "Fly and bounce around to overcome obstacles and levels.",
  datetime: new Date(15818112e5),
  cover: "/posts/rocket-bounce/banner.webp",
  tags: ["unity", "google-play", "game", "software"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/rocket-bounce.mdx",
  rawData: '\nslug: rocket-bounce\ntitle: Rocket Bounce\ndescription: Fly and bounce around to overcome obstacles and levels.\ndatetime: 2020-02-16\ncover: "/posts/rocket-bounce/banner.webp"\ntags:\n  - unity\n  - google-play\n  - game\n  - software'
};

export { _internal, body, collection, data, id, slug };
