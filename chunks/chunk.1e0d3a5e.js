import"../entry.346ba6be.js";/* empty css              */const s="squash-stretch-shader.mdx",n="posts",a="squash-stretch-shader",o=`
An extremely simple implementation of a squash and stretch shader in Godot. Tested in Godot 4.0 Alpha 11.

**Note: You may need a high-poly model.**

\`\`\`glsl
shader_type spatial;

uniform vec2 direction = vec2(1.0);
uniform float squash: hint_range(0.0, 2.0) = 1.0;
uniform float offset: hint_range(-0.5, 0.5) = 0.0;

void vertex() {
	float v = abs(VERTEX.y + offset) * squash + direction.x;
	VERTEX *= vec3(v, direction.y, v);
}
\`\`\`

---

Find the shader on [Godot Shaders](https://godotshaders.com/shader/squash-and-stretch/).
`,h={title:"Squash and Stretch Shader",description:"A simple squash and stretch shader in Godot.",datetime:new Date(1657152e6),heroImage:"/posts/squash-stretch-shader/banner.webp",tags:["godot","shader"]},r={filePath:"/home/runner/work/website/website/src/content/posts/squash-stretch-shader.mdx",rawData:`
slug: squash-stretch-shader
title: Squash and Stretch Shader
description: A simple squash and stretch shader in Godot.
datetime: 2022-07-07
heroImage: "/posts/squash-stretch-shader/banner.webp"
tags:
  - godot
  - shader`};export{r as _internal,o as body,n as collection,h as data,s as id,a as slug};
