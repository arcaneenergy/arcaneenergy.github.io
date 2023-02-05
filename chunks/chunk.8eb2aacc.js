import{c as e}from"./chunk.4c9b946c.js";import{$ as r}from"./chunk.b3cb2d74.js";import{$ as c}from"./chunk.02c22089.js";import{F as i}from"../entry.346ba6be.js";/* empty css              *//* empty css              *//* empty css              */const s={slug:"multimesh-scatter",title:"MultiMesh Scatter",description:"A simple tool to randomly place meshes.",datetime:"2022-12-01T00:00:00.000Z",heroImage:"/posts/multimesh-scatter/banner.webp",tags:["godot","github","addon"]};function b(){return[{depth:2,slug:"download",text:"Download"},{depth:2,slug:"how-to-use",text:"How to use"},{depth:2,slug:"features",text:"Features"},{depth:2,slug:"parameters",text:"Parameters"},{depth:2,slug:"notes",text:"Notes"},{depth:2,slug:"license",text:"License"}]}function o(n){const t=Object.assign({p:"p",img:"img",hr:"hr",h2:"h2",a:"a",ol:"ol",li:"li",ul:"ul",code:"code"},n.components);return e(i,{children:[e(c,{embedId:"godot-multimesh-scatter"}),`
`,e(t.p,{children:e(t.img,{src:"/posts/multimesh-scatter/random-rotation.webp",alt:"Image 1"})}),`
`,e(t.hr,{}),`
`,e(t.h2,{id:"download",children:"Download"}),`
`,e(t.p,{children:e(t.a,{href:"https://github.com/arcaneenergy/godot-multimesh-scatter",children:"MultiMesh Scatter"})}),`
`,e(t.h2,{id:"how-to-use",children:"How to use"}),`
`,e(t.ol,{children:[`
`,e(t.li,{children:["Download this ",e(t.a,{href:"https://github.com/arcaneenergy/godot-multimesh-scatter",children:"repository"}),` or download the addon from the
AsseLib in Godot.`]}),`
`,e(t.li,{children:"Import the addons folder into your project."}),`
`,e(t.li,{children:"Activate MultiMesh Scatter under Project > Project Settings > Plugins."}),`
`,e(t.li,{children:"Add a MultiMeshScatter node to the scene."}),`
`]}),`
`,e("video",{width:"320",height:"240",controls:!0,children:e("source",{src:"https://user-images.githubusercontent.com/52855634/213530097-8c653666-5b24-41b0-91d2-4bb9b68750b7.mp4",type:"video/mp4"})}),`
`,e("video",{width:"320",height:"240",controls:!0,children:e("source",{src:"https://user-images.githubusercontent.com/52855634/213530108-fa75e5d3-0d4c-49f6-a449-f4df0d07f92c.mp4",type:"video/mp4"})}),`
`,e("video",{width:"320",height:"240",controls:!0,children:e("source",{src:"https://user-images.githubusercontent.com/52855634/213530112-e70b88b1-933b-407d-b491-c99db91d9ee1.mp4",type:"video/mp4"})}),`
`,e(t.h2,{id:"features",children:"Features"}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:"Scatter objects in the scene using a MultiMeshInstance node."}),`
`,e(t.li,{children:"Adjust the instance count, size, and collision layer."}),`
`,e(t.li,{children:"Randomize size and rotation of each instance."}),`
`,e(t.li,{children:"Automatically rotates each instance to the normal of the terrain."}),`
`]}),`
`,e(t.h2,{id:"parameters",children:"Parameters"}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:[e(t.code,{children:"count"}),": The number of instances to generate."]}),`
`,e(t.li,{children:[e(t.code,{children:"placement_type"}),": Defines the placement type."]}),`
`,e(t.li,{children:[e(t.code,{children:"placement_size"}),": The placement size of the bounding box. Enable ",e(t.code,{children:"show_debug_area"}),` to view the size of the bounding
box. Note: If the `,e(t.code,{children:"placement_type"}),` is set to Sphere, only the x value will be used to specify the radius of the
sphere.`]}),`
`,e(t.li,{children:[e(t.code,{children:"collision_mask"}),": The physics collision mask that the instances should collide with."]}),`
`,e(t.li,{children:[e(t.code,{children:"offset_position"}),": Add an offset to the placed instances."]}),`
`,e(t.li,{children:[e(t.code,{children:"offset_rotation"}),": Add a rotation offset to the placed instances."]}),`
`,e(t.li,{children:[e(t.code,{children:"base_scale"}),": Change the base scale of the instanced meshes."]}),`
`,e(t.li,{children:[e(t.code,{children:"min_random_size"}),": The minimum random size for each instance."]}),`
`,e(t.li,{children:[e(t.code,{children:"max_random_size"}),": The maximum random size for each instance."]}),`
`,e(t.li,{children:[e(t.code,{children:"random_rotation"}),": Rotate each instance by a random amount between. ",e(t.code,{children:"-random_rotation"})," and ",e(t.code,{children:"+random_rotation"}),"."]}),`
`,e(t.li,{children:[e(t.code,{children:"seed"}),": A seed to feed for the random number generator."]}),`
`,e(t.li,{children:[e(t.code,{children:"show_debug_area"}),": Toggle the visibility of the bounding box area."]}),`
`]}),`
`,e(t.h2,{id:"notes",children:"Notes"}),`
`,e(t.ul,{children:[`
`,e(t.li,{children:["The sphere placement type takes ",e(t.code,{children:"placement_size.x"})," for the radius. The y and z values are not used."]}),`
`,e(t.li,{children:`The sphere placement type behaves more like a capsule shape. This means that only the horizontal radius is taken
into account when scattering meshes.`}),`
`,e(t.li,{children:`Scattering occurs automatically in the editor whenever you change a parameter or move the MultiMeshScatter node.
In game mode, the scatter occurs once at the beginning of the game.`}),`
`]}),`
`,e(t.h2,{id:"license",children:"License"}),`
`,e(t.p,{children:e(t.a,{href:"/LICENSE.md",children:"MIT License"})}),`
`,e(r,{videoId:"2fa4guxq6iU"})]})}function d(n={}){const{wrapper:t}=n.components||{};return t?e(t,{...n,children:e(o,{...n})}):o(n)}const w="src/content/posts/multimesh-scatter.mdx",y="/home/runner/work/website/website/src/content/posts/multimesh-scatter.mdx",a=(n={})=>d({...n,components:{Fragment:i,...n.components}});a[Symbol.for("astro.needsHeadRendering")]=!Boolean(s.layout);export{a as Content,a as default,y as file,s as frontmatter,b as getHeadings,w as url};
