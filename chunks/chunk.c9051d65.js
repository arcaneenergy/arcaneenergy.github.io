import './chunk.37b49969.js';
import 'html-escaper';

const id = "multimesh-scatter.mdx";
const collection = "posts";
const slug = "multimesh-scatter";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport GithubButton from "@components/GithubButton.astro";\nimport Video from "@components/Video.astro";\n\n<GithubButton embedId="godot-multimesh-scatter" />\n\n![Image 1](/posts/multimesh-scatter/random-rotation.webp)\n\n---\n\n## Download\n\n[MultiMesh Scatter](https://github.com/arcaneenergy/godot-multimesh-scatter)\n\n## How to use\n\n1. Download this [repository](https://github.com/arcaneenergy/godot-multimesh-scatter) or download the addon from the AssetLib in Godot.\n2. Import the addons folder into your project.\n3. Activate MultiMesh Scatter under Project > Project Settings > Plugins.\n4. Add a MultiMeshScatter node to the scene.\n\n<Video url="https://user-images.githubusercontent.com/52855634/213530097-8c653666-5b24-41b0-91d2-4bb9b68750b7.mp4" />\n<Video url="https://user-images.githubusercontent.com/52855634/213530108-fa75e5d3-0d4c-49f6-a449-f4df0d07f92c.mp4" />\n<Video url="https://user-images.githubusercontent.com/52855634/213530112-e70b88b1-933b-407d-b491-c99db91d9ee1.mp4" />\n\n## Features\n\n- Scatter objects in the scene using a MultiMeshInstance node.\n- Adjust the instance count, size, and collision layer.\n- Randomize size and rotation of each instance.\n- Automatically rotates each instance to the normal of the terrain.\n\n## Parameters\n\n- `count`: The number of instances to generate.\n- `placement_type`: Defines the placement type.\n- `placement_size`: The placement size of the bounding box. Enable `show_debug_area` to view the size of the bounding\n  box. Note: If the `placement_type` is set to Sphere, only the x value will be used to specify the radius of the\n  sphere.\n- `collision_mask`: The physics collision mask that the instances should collide with.\n- `offset_position`: Add an offset to the placed instances.\n- `offset_rotation`: Add a rotation offset to the placed instances.\n- `base_scale`: Change the base scale of the instanced meshes.\n- `min_random_size`: The minimum random size for each instance.\n- `max_random_size`: The maximum random size for each instance.\n- `random_rotation`: Rotate each instance by a random amount between. `-random_rotation` and `+random_rotation`.\n- `seed`: A seed to feed for the random number generator.\n- `show_debug_area`: Toggle the visibility of the bounding box area.\n\n## Notes\n\n- The sphere placement type takes `placement_size.x` for the radius. The y and z values are not used.\n- The sphere placement type behaves more like a capsule shape. This means that only the horizontal radius is taken\n  into account when scattering meshes.\n- Scattering occurs automatically in the editor whenever you change a parameter or move the MultiMeshScatter node.\n  In game mode, the scatter occurs once at the beginning of the game.\n\n## License\n\n[MIT License](/LICENSE.md)\n\n<Youtube videoId="2fa4guxq6iU" />\n';
const data = {
  title: "MultiMesh Scatter",
  description: "A simple tool to randomly place meshes.",
  datetime: new Date(16698528e5),
  heroImage: "/posts/multimesh-scatter/banner.webp",
  tags: ["godot", "open-source", "addon"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/multimesh-scatter.mdx",
  rawData: '\nslug: multimesh-scatter\ntitle: MultiMesh Scatter\ndescription: A simple tool to randomly place meshes.\ndatetime: 2022-12-01\nheroImage: "/posts/multimesh-scatter/banner.webp"\ntags:\n  - godot\n  - open-source\n  - addon'
};

export { _internal, body, collection, data, id, slug };
