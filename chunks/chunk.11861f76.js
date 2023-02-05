import"../entry.346ba6be.js";/* empty css              */const n="vignette-shader.mdx",o="posts",s="vignette-shader",i=`
import Youtube from "@components/Youtube.astro";

The color and size of the vignette effect is adjustable.

\`\`\`glsl
shader_type canvas_item;

uniform vec4 color: hint_color;
uniform float multiplier = 0.2;
uniform float softness = 3.0;

void fragment() {
	float value = distance(UV, vec2(0.5));
	COLOR = vec4(color.rgb, smoothstep(multiplier, softness, value));
}
\`\`\`

<Youtube videoId="IGtQwsNDVLM" />

---
`,a={title:"Vignette Shader",description:"A simple vignette shader for the Godot game engine.",datetime:new Date(16304544e5),heroImage:"/posts/vignette-shader/banner.webp",tags:["godot","shader"]},r={filePath:"/home/runner/work/website/website/src/content/posts/vignette-shader.mdx",rawData:`
slug: vignette-shader
title: Vignette Shader
description: A simple vignette shader for the Godot game engine.
datetime: 2021-09-01
heroImage: "/posts/vignette-shader/banner.webp"
tags:
  - godot
  - shader`};export{r as _internal,i as body,o as collection,a as data,n as id,s as slug};
