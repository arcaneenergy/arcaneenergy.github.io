import{c as e}from"./chunk.4c9b946c.js";import{$ as r}from"./chunk.b3cb2d74.js";import{$ as s}from"./chunk.a8664dc2.js";import{$ as o}from"./chunk.02c22089.js";import{F as t}from"../entry.346ba6be.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */const c={slug:"tilemap-level-editor",title:"Tilemap Level Editor",description:"Simple level editor for Godot with JSON export functionality. Made with Godot.",datetime:"2022-05-27T00:00:00.000Z",heroImage:"/posts/tilemap-level-editor/banner.webp",tags:["godot","github","itch-io"]};function f(){return[{depth:2,slug:"trailer",text:"Trailer"},{depth:2,slug:"description",text:"Description"},{depth:2,slug:"use-case",text:"Use case"},{depth:2,slug:"controls",text:"Controls"},{depth:2,slug:"ui-overview",text:"UI Overview"},{depth:2,slug:"exported-json-file",text:"Exported JSON file"},{depth:2,slug:"problems",text:"Problems"}]}function i(n){const l=Object.assign({h2:"h2",p:"p",ul:"ul",li:"li",code:"code",img:"img",pre:"pre",span:"span",input:"input"},n.components);return e(t,{children:[e(o,{embedId:"tilemap-level-editor"}),`
`,e(s,{embedId:"1547896"}),`
`,e(l.h2,{id:"trailer",children:"Trailer"}),`
`,e(r,{videoId:"01ktb-9E6J0"}),`
`,e(l.h2,{id:"description",children:"Description"}),`
`,e(l.h2,{id:"use-case",children:"Use case"}),`
`,e(l.p,{children:`This is currently used in a personal project. It’s used to load in JSON files into Godot to recreate the levels at
runtime. The exported JSON file contains all levels and individual cells. This makes it easy to recreate the level in
Godot.`}),`
`,e(l.p,{children:"Alternatively, you can use this program to easily create levels in the editor."}),`
`,e(l.h2,{id:"controls",children:"Controls"}),`
`,e(l.p,{children:"Placement:"}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"Left click: Place tile (if selected)"}),`
`,e(l.li,{children:"Right click: Delete tile"}),`
`]}),`
`,e(l.p,{children:"Other:"}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"TAB: Toggle GUI"}),`
`,e(l.li,{children:"SHIFT + Scroll up: Increase brush size"}),`
`,e(l.li,{children:"SHIFT + Scroll down: Decrease brush size"}),`
`]}),`
`,e(l.p,{children:"Camera:"}),`
`,e(l.ul,{children:[`
`,e(l.li,{children:"Middle mouse drag: Drag camera around"}),`
`,e(l.li,{children:"W / ↑: Move camera up"}),`
`,e(l.li,{children:"S / ↓: Move camera down"}),`
`,e(l.li,{children:"A / ←: Move camera left"}),`
`,e(l.li,{children:"D / →: Move camera right"}),`
`,e(l.li,{children:"Mouse scroll up: Zoom in"}),`
`,e(l.li,{children:"Mouse scroll down: Zoom out"}),`
`]}),`
`,e(l.h2,{id:"ui-overview",children:"UI Overview"}),`
`,e(l.p,{children:["Create new layers with the ",e(l.code,{children:"+ New Layer"}),` button. This brings up a dialog box for selecting an image file. After
selecting a file, the new layer appears in the list.`]}),`
`,e(l.p,{children:`Switch between layers by pressing the arrow to the left of the layer. This will open the tileset on the left. Use the up
and down arrow keys to move layers.`}),`
`,e(l.p,{children:e(l.img,{src:"/posts/tilemap-level-editor/image-01.webp",alt:"Image 1"})}),`
`,e(l.p,{children:"Select a tile and start drawing."}),`
`,e(l.p,{children:e(l.img,{src:"/posts/tilemap-level-editor/image-02.webp",alt:"Image 2"})}),`
`,e(l.p,{children:"Change the size and shape of the cursor using the buttons in the lower right corner."}),`
`,e(l.p,{children:e(l.img,{src:"/posts/tilemap-level-editor/image-03.webp",alt:"Image 3"})}),`
`,e(l.h2,{id:"exported-json-file",children:"Exported JSON file"}),`
`,e(l.p,{children:"The exported JSON file might look like this:"}),`
`,e(l.pre,{className:"astro-code",style:{backgroundColor:"#0d1117",overflowX:"auto"},children:e(l.code,{children:[e(l.span,{className:"line",children:e(l.span,{style:{color:"#C9D1D9"},children:"{"})}),`
`,e(l.span,{className:"line",children:[e(l.span,{style:{color:"#C9D1D9"},children:"  "}),e(l.span,{style:{color:"#7EE787"},children:'"layers"'}),e(l.span,{style:{color:"#C9D1D9"},children:": ["})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#C9D1D9"},children:"    {"})}),`
`,e(l.span,{className:"line",children:[e(l.span,{style:{color:"#C9D1D9"},children:"      "}),e(l.span,{style:{color:"#7EE787"},children:'"texture_path"'}),e(l.span,{style:{color:"#C9D1D9"},children:": "}),e(l.span,{style:{color:"#A5D6FF"},children:'"C:/tilemap-level-editor/test/tileset.png"'}),e(l.span,{style:{color:"#C9D1D9"},children:","})]}),`
`,e(l.span,{className:"line",children:[e(l.span,{style:{color:"#C9D1D9"},children:"      "}),e(l.span,{style:{color:"#7EE787"},children:'"cells"'}),e(l.span,{style:{color:"#C9D1D9"},children:": [["}),e(l.span,{style:{color:"#79C0FF"},children:"4"}),e(l.span,{style:{color:"#C9D1D9"},children:", "}),e(l.span,{style:{color:"#79C0FF"},children:"-5"}),e(l.span,{style:{color:"#C9D1D9"},children:", "}),e(l.span,{style:{color:"#79C0FF"},children:"-3"}),e(l.span,{style:{color:"#C9D1D9"},children:"]]"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#C9D1D9"},children:"    }"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#C9D1D9"},children:"  ],"})}),`
`,e(l.span,{className:"line",children:[e(l.span,{style:{color:"#C9D1D9"},children:"  "}),e(l.span,{style:{color:"#7EE787"},children:'"objects"'}),e(l.span,{style:{color:"#C9D1D9"},children:": ["})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#C9D1D9"},children:"    {"})}),`
`,e(l.span,{className:"line",children:[e(l.span,{style:{color:"#C9D1D9"},children:"      "}),e(l.span,{style:{color:"#7EE787"},children:'"key"'}),e(l.span,{style:{color:"#C9D1D9"},children:": "}),e(l.span,{style:{color:"#A5D6FF"},children:'"player"'}),e(l.span,{style:{color:"#C9D1D9"},children:","})]}),`
`,e(l.span,{className:"line",children:[e(l.span,{style:{color:"#C9D1D9"},children:"      "}),e(l.span,{style:{color:"#7EE787"},children:'"position"'}),e(l.span,{style:{color:"#C9D1D9"},children:": ["}),e(l.span,{style:{color:"#79C0FF"},children:"2"}),e(l.span,{style:{color:"#C9D1D9"},children:", "}),e(l.span,{style:{color:"#79C0FF"},children:"4"}),e(l.span,{style:{color:"#C9D1D9"},children:"]"})]}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#C9D1D9"},children:"    }"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#C9D1D9"},children:"  ]"})}),`
`,e(l.span,{className:"line",children:e(l.span,{style:{color:"#C9D1D9"},children:"}"})})]})}),`
`,e(l.p,{children:"Each cell contains an ID, an x and a y position. The ID is used to identify which cell in the tileset it refers to."}),`
`,e(l.h2,{id:"problems",children:"Problems"}),`
`,e(l.ul,{className:"contains-task-list",children:[`
`,e(l.li,{className:"task-list-item",children:[e(l.input,{type:"checkbox",disabled:!0}),` Currently, the program only supports tiles of 16x16 size. The spritesheet needs to be divisible by 16 (16, 32, 48,
64 etc.)`]}),`
`,e(l.li,{className:"task-list-item",children:[e(l.input,{type:"checkbox",disabled:!0})," Exported texture paths are absolute."]}),`
`]}),`
`,e(l.p,{children:"Godot_v3.5-rc2"})]})}function a(n={}){const{wrapper:l}=n.components||{};return l?e(l,{...n,children:e(i,{...n})}):i(n)}const v="src/content/posts/tilemap-level-editor.mdx",w="/home/runner/work/website/website/src/content/posts/tilemap-level-editor.mdx",d=(n={})=>a({...n,components:{Fragment:t,...n.components}});d[Symbol.for("astro.needsHeadRendering")]=!Boolean(c.layout);export{d as Content,d as default,w as file,c as frontmatter,f as getHeadings,v as url};
