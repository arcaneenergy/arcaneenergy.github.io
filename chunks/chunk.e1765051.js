import './chunk.b21d6461.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "mergifier.mdx";
const collection = "posts";
const slug = "mergifier";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport ItchioWidget from "@components/ItchioWidget.astro";\nimport GooglePlayButton from "@components/GooglePlayButton.astro";\nimport ImageGallery from "@components/ImageGallery.astro";\n\n<GooglePlayButton embedId="com.arcaneenergy.mergifier" />\n\n<ItchioWidget embedId="1065242" />\n\nFirst submitted to the [GoGodotJam](https://itch.io/jam/go-godot-jam), which ran from May 24th 2021 at 12:00 AM to June\n2nd 2021 at 5:00 PM, later made into a full game and released on\nthe [Google Play Store](https://play.google.com/store/apps/details?id=com.arcaneenergy.mergifier). The theme of the game\njam: **Growth**.\n\n[View the submission](https://itch.io/jam/go-godot-jam/rate/1065242)\n\n## Description\n\nPlay as a blob. Merge with other blobs to grow and skip over huge obstacles, or separate yourself to go through small\npathways.\n\nPlay in 7 unique levels + 2 bonus levels. Each level has a unique atmosphere with vivid backgrounds and elements.\n\nThis game is playable both with touchscreen and keyboard.\n\n## Screenshots\n\n<ImageGallery images={\n  [\n    "/posts/mergifier/image-01.webp",\n    "/posts/mergifier/image-02.webp",\n    "/posts/mergifier/image-03.webp",\n    "/posts/mergifier/image-04.webp",\n    "/posts/mergifier/image-05.webp",\n  ]\n} />\n\n## Trailer\n\n<Youtube videoId="-xpi6DgFLQM" />\n';
const data = {
  title: "Mergifier",
  description: "Merge with other blobs to grow or separate yourself to get smaller.",
  datetime: new Date(1625184e6),
  cover: "/posts/mergifier/banner.webp",
  tags: ["godot", "google-play", "itch-io", "game", "software"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/mergifier.mdx",
  rawData: '\nslug: mergifier\ntitle: Mergifier\ndescription: Merge with other blobs to grow or separate yourself to get smaller.\ndatetime: 2021-07-02\ncover: "/posts/mergifier/banner.webp"\ntags:\n  - godot\n  - google-play\n  - itch-io\n  - game\n  - software'
};

export { _internal, body, collection, data, id, slug };
