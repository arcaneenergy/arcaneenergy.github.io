import './chunk.67c838a9.js';
import 'html-escaper';

const id = "vignette-shader.mdx";
const collection = "posts";
const slug = "vignette-shader";
const body = '\nimport Youtube from "@components/Youtube.astro";\n\nThe color and size of the vignette effect is adjustable.\n\n```glsl\nshader_type canvas_item;\n\nuniform vec4 color: hint_color;\nuniform float multiplier = 0.2;\nuniform float softness = 3.0;\n\nvoid fragment() {\n	float value = distance(UV, vec2(0.5));\n	COLOR = vec4(color.rgb, smoothstep(multiplier, softness, value));\n}\n```\n\n<Youtube videoId="IGtQwsNDVLM" />\n\n---\n';
const data = {
  title: "Vignette Shader",
  description: "A simple vignette shader for the Godot game engine.",
  datetime: new Date(16304544e5),
  heroImage: "/posts/vignette-shader/banner.webp",
  tags: ["godot", "shader"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/vignette-shader.mdx",
  rawData: '\nslug: vignette-shader\ntitle: Vignette Shader\ndescription: A simple vignette shader for the Godot game engine.\ndatetime: 2021-09-01\nheroImage: "/posts/vignette-shader/banner.webp"\ntags:\n  - godot\n  - shader'
};

export { _internal, body, collection, data, id, slug };
