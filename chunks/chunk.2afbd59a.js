import './chunk.95b855ea.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "multimesh-scatter.mdx";
const collection = "posts";
const slug = "multimesh-scatter";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport GithubButton from "@components/GithubButton.astro";\nimport Video from "@components/Video.astro";\n\n<GithubButton embedId="godot-multimesh-scatter" />\n\n---\n\n**A simple tool to randomly place meshes.**\n\n![Image 1](/posts/multimesh-scatter/random-rotation.webp)\n\n<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">\n  <Video url="https://user-images.githubusercontent.com/52855634/213530097-8c653666-5b24-41b0-91d2-4bb9b68750b7.mp4" />\n  <Video url="https://user-images.githubusercontent.com/52855634/213530108-fa75e5d3-0d4c-49f6-a449-f4df0d07f92c.mp4" />\n  <Video url="https://user-images.githubusercontent.com/52855634/213530112-e70b88b1-933b-407d-b491-c99db91d9ee1.mp4" />\n</div>\n\n## \u{1F9E9} Features\n\n- Scatter objects in the scene. Instances automatically rotate to the normal of the terrain.\n- Adjust the scatter type, size and collision layer and randomize the size and rotation.\n- Clustering: Place instances in tight groups together.\n- Apply advanced constraint options to scatter according to:\n  - Terrain angle\n  - Vertex color\n- Chunks: Split the MultiMeshScatter node into chunks.\n\n## \u{1F680} Install & Use\n\n1. Download this [repository](https://github.com/arcaneenergy/godot-multimesh-scatter) or download the addon from the asset library inside Godot.\n    - Import the addons folder into your project (if it already isn\'t present).\n2. Activate the MultiMesh Scatter addon under Project > Project Settings > Plugins. If an error dialog appears, restart the engine and try activating it again.\n3. Add a MultiMeshScatter node to the scene.\n\n## \u26A0\uFE0F Notes\n\n- The sphere placement type takes `placement_size.x` for the radius. The y and z values are not used.\n- The sphere placement type behaves more like a capsule shape. This means that only the horizontal radius is taken into account when scattering meshes.\n- Scattering occurs automatically in the editor whenever you change a parameter or move the MultiMeshScatter node. In game mode, the scatter occurs once at the beginning of the game.\n\n## \u{1F5D2}\uFE0F License\n\n[MIT License](/LICENSE.md)\n\n<Youtube videoId="2fa4guxq6iU" />\n';
const data = {
  title: "MultiMesh Scatter",
  description: "A simple tool to randomly place meshes.",
  datetime: new Date(16698528e5),
  cover: "/posts/multimesh-scatter/banner.webp",
  tags: ["godot", "open-source", "addon", "asset"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/multimesh-scatter.mdx",
  rawData: '\nslug: multimesh-scatter\ntitle: MultiMesh Scatter\ndescription: A simple tool to randomly place meshes.\ndatetime: 2022-12-01\ncover: "/posts/multimesh-scatter/banner.webp"\ntags:\n  - godot\n  - open-source\n  - addon\n  - asset'
};

export { _internal, body, collection, data, id, slug };
