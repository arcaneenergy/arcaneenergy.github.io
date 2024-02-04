import './chunk.b21d6461.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "voxelgi-scene.mdx";
const collection = "posts";
const slug = "voxelgi-scene";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport ImageGallery from "@components/ImageGallery.astro";\n\n## Screenshots\n\n<ImageGallery images={\n  [\n    "/posts/voxelgi-scene/image-01.webp",\n    "/posts/voxelgi-scene/image-02.webp",\n    "/posts/voxelgi-scene/image-03.webp",\n    "/posts/voxelgi-scene/image-04.webp",\n  ]\n} />\n\n## Video\n\n<Youtube videoId="a75-1YT1JaA" />\n';
const data = {
  title: "VoxelGI Scene",
  description: "A VoxelGI scene in Godot 4.",
  datetime: new Date(16475616e5),
  cover: "/posts/voxelgi-scene/banner.webp",
  tags: ["godot", "screenshot-collection", "post"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/voxelgi-scene.mdx",
  rawData: '\nslug: voxelgi-scene\ntitle: VoxelGI Scene\ndescription: A VoxelGI scene in Godot 4.\ndatetime: 2022-03-18\ncover: "/posts/voxelgi-scene/banner.webp"\ntags:\n  - godot\n  - screenshot-collection\n  - post'
};

export { _internal, body, collection, data, id, slug };
