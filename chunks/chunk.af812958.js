import"../entry.346ba6be.js";/* empty css              */const n="multimesh-scatter.mdx",o="posts",s="multimesh-scatter",a=`
import Youtube from "@components/Youtube.astro";
import GithubButton from "@components/GithubButton.astro";

<GithubButton embedId="godot-multimesh-scatter" />

![Image 1](/posts/multimesh-scatter/random-rotation.webp)

---

## Download

[MultiMesh Scatter](https://github.com/arcaneenergy/godot-multimesh-scatter)

## How to use

1. Download this [repository](https://github.com/arcaneenergy/godot-multimesh-scatter) or download the addon from the
   AsseLib in Godot.
2. Import the addons folder into your project.
3. Activate MultiMesh Scatter under Project > Project Settings > Plugins.
4. Add a MultiMeshScatter node to the scene.

<video width="320" height="240" controls>
  <source
    src="https://user-images.githubusercontent.com/52855634/213530097-8c653666-5b24-41b0-91d2-4bb9b68750b7.mp4"
    type="video/mp4"
  />
</video>

<video width="320" height="240" controls>
  <source
    src="https://user-images.githubusercontent.com/52855634/213530108-fa75e5d3-0d4c-49f6-a449-f4df0d07f92c.mp4"
    type="video/mp4"
  />
</video>

<video width="320" height="240" controls>
  <source
    src="https://user-images.githubusercontent.com/52855634/213530112-e70b88b1-933b-407d-b491-c99db91d9ee1.mp4"
    type="video/mp4"
  />
</video>

## Features

- Scatter objects in the scene using a MultiMeshInstance node.
- Adjust the instance count, size, and collision layer.
- Randomize size and rotation of each instance.
- Automatically rotates each instance to the normal of the terrain.

## Parameters

- \`count\`: The number of instances to generate.
- \`placement_type\`: Defines the placement type.
- \`placement_size\`: The placement size of the bounding box. Enable \`show_debug_area\` to view the size of the bounding
  box. Note: If the \`placement_type\` is set to Sphere, only the x value will be used to specify the radius of the
  sphere.
- \`collision_mask\`: The physics collision mask that the instances should collide with.
- \`offset_position\`: Add an offset to the placed instances.
- \`offset_rotation\`: Add a rotation offset to the placed instances.
- \`base_scale\`: Change the base scale of the instanced meshes.
- \`min_random_size\`: The minimum random size for each instance.
- \`max_random_size\`: The maximum random size for each instance.
- \`random_rotation\`: Rotate each instance by a random amount between. \`-random_rotation\` and \`+random_rotation\`.
- \`seed\`: A seed to feed for the random number generator.
- \`show_debug_area\`: Toggle the visibility of the bounding box area.

## Notes

- The sphere placement type takes \`placement_size.x\` for the radius. The y and z values are not used.
- The sphere placement type behaves more like a capsule shape. This means that only the horizontal radius is taken
  into account when scattering meshes.
- Scattering occurs automatically in the editor whenever you change a parameter or move the MultiMeshScatter node.
  In game mode, the scatter occurs once at the beginning of the game.

## License

[MIT License](/LICENSE.md)

<Youtube videoId="2fa4guxq6iU" />
`,i={title:"MultiMesh Scatter",description:"A simple tool to randomly place meshes.",datetime:new Date(16698528e5),heroImage:"/posts/multimesh-scatter/banner.webp",tags:["godot","github","addon"]},r={filePath:"/home/runner/work/website/website/src/content/posts/multimesh-scatter.mdx",rawData:`
slug: multimesh-scatter
title: MultiMesh Scatter
description: A simple tool to randomly place meshes.
datetime: 2022-12-01
heroImage: "/posts/multimesh-scatter/banner.webp"
tags:
  - godot
  - github
  - addon`};export{r as _internal,a as body,o as collection,i as data,n as id,s as slug};
