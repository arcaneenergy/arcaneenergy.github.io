import './chunk.88f5223f.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "whiteboard.mdx";
const collection = "posts";
const slug = "whiteboard";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport ItchioWidget from "@components/ItchioWidget.astro";\nimport ItchioEmbed from "@components/ItchioEmbed.astro";\nimport GooglePlayButton from "@components/GooglePlayButton.astro";\nimport ImageGallery from "@components/ImageGallery.astro";\n\n<ItchioEmbed embedId="6455154" />\n\n<ItchioWidget embedId="1277666" />\n\n<GooglePlayButton embedId="com.arcaneenergy.whiteboard" />\n\n## Trailer\n\n<Youtube videoId="ay3ymU5kMr8" />\n\n## Screenshots\n\n<ImageGallery images={\n  [\n    "/posts/whiteboard/image-01.webp",\n    "/posts/whiteboard/image-02.webp",\n    "/posts/whiteboard/image-03.webp",\n    "/posts/whiteboard/image-04.webp",\n    "/posts/whiteboard/image-05.webp",\n  ]\n} />\n\n## Description\n\nA simple whiteboard for writing text, inserting pictures and drawing. Each tool has different settings and properties.\nAn integrated presentation system is available. Place focus points on your whiteboard and play them back like a slide\nshow.\n\nYour whiteboards are private. There is no server.\n\n**Features**\n\n- Write text. Select different fonts and font styles.\n- Insert pictures. Change the scaling mode.\n- Insert shapes.\n- Draw with different variants of brushes.\n- Change the background theme.\n- Edit the grid size, background color and more.\n- Presentation system.\n\nWhiteboard made with Godot.\n\n---\n\n## YouTube Playlist\n\n<Youtube videoId="videoseries?list=PLKnVIoBRwyaO3n4L06BIfuS26e3ultvxf" />\n';
const data = {
  title: "Whiteboard",
  description: "Your private whiteboard.",
  datetime: new Date(1636416e6),
  cover: "/posts/whiteboard/banner.webp",
  tags: ["godot", "google-play", "itch-io", "software"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/whiteboard.mdx",
  rawData: '\nslug: whiteboard\ntitle: Whiteboard\ndescription: Your private whiteboard.\ndatetime: 2021-11-09\ncover: "/posts/whiteboard/banner.webp"\ntags:\n  - godot\n  - google-play\n  - itch-io\n  - software'
};

export { _internal, body, collection, data, id, slug };
