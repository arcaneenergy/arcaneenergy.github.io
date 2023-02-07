import './chunk.67c838a9.js';
import 'html-escaper';

const id = "sm-text-editor.mdx";
const collection = "posts";
const slug = "sm-text-editor";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport GooglePlayButton from "@components/GooglePlayButton.astro";\nimport ImageGallery from "@components/ImageGallery.astro";\n\n<GooglePlayButton embedId="com.arcaneenergy.sm_text_editor" />\n\n## Trailer\n\n<Youtube videoId="ysHCItURWYY" />\n\n## Screenshots\n\n<ImageGallery images={\n  [\n    "/posts/sm-text-editor/image-01.webp",\n    "/posts/sm-text-editor/image-02.webp",\n    "/posts/sm-text-editor/image-03.webp",\n  ]\n} />\n\n## Description\n\nSimply open your text files and start editing.\n\n**Features**\n\n- Toggle text wrapping\n- Document history\n- Change theme (light and dark theme)\n- Change editor font family and font size\n';
const data = {
  title: "SM Text Editor",
  description: "A simple and quick Text file editor.",
  datetime: new Date(16468704e5),
  heroImage: "/posts/sm-text-editor/banner.webp",
  tags: ["flutter", "google-play"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/sm-text-editor.mdx",
  rawData: '\nslug: sm-text-editor\ntitle: SM Text Editor\ndescription: A simple and quick Text file editor.\ndatetime: 2022-03-10\nheroImage: "/posts/sm-text-editor/banner.webp"\ntags:\n  - flutter\n  - google-play'
};

export { _internal, body, collection, data, id, slug };
