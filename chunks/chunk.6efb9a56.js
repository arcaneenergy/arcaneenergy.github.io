import './chunk.88f5223f.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "squash-stretch-shader.mdx";
const collection = "posts";
const slug = "squash-stretch-shader";
const body = '\nimport Youtube from "@components/Youtube.astro";\n\nA simple squash and stretch shader. Tested in Godot 4.0 Alpha 11. **Note: You may need a high-poly model.**\n\nFind the shader on [Godot Shaders](https://godotshaders.com/shader/squash-and-stretch/).\n\n```glsl\nshader_type spatial;\n\nuniform vec2 direction = vec2(1.0);\nuniform float squash: hint_range(0.0, 2.0) = 1.0;\nuniform float offset: hint_range(-0.5, 0.5) = 0.0;\n\nvoid vertex() {\n	float v = abs(VERTEX.y + offset) * squash + direction.x;\n	VERTEX *= vec3(v, direction.y, v);\n}\n```\n\n<Youtube videoId="O0og6WrAWk0" />\n';
const data = {
  title: "Squash and Stretch Shader",
  description: "A simple squash and stretch shader in Godot.",
  datetime: new Date(1657152e6),
  cover: "/posts/squash-stretch-shader/banner.webp",
  tags: ["godot", "shader", "asset"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/squash-stretch-shader.mdx",
  rawData: '\nslug: squash-stretch-shader\ntitle: Squash and Stretch Shader\ndescription: A simple squash and stretch shader in Godot.\ndatetime: 2022-07-07\ncover: "/posts/squash-stretch-shader/banner.webp"\ntags:\n  - godot\n  - shader\n  - asset'
};

export { _internal, body, collection, data, id, slug };
