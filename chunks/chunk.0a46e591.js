import './chunk.88f5223f.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "sm-pdf-viewer.mdx";
const collection = "posts";
const slug = "sm-pdf-viewer";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport GooglePlayButton from "@components/GooglePlayButton.astro";\nimport ImageGallery from "@components/ImageGallery.astro";\n\n<GooglePlayButton embedId="com.arcaneenergy.sm_pdf_viewer" />\n\n## Description\n\nSimply open your PDF files and start reading.\n\n**Features**\n\n- Remember last opened page number\n- Document history\n- Change theme (light and dark theme)\n\n## Screenshots\n\n<ImageGallery images={\n  [\n    "/posts/sm-pdf-viewer/image-01.webp",\n    "/posts/sm-pdf-viewer/image-02.webp",\n    "/posts/sm-pdf-viewer/image-03.webp",\n  ]\n} />\n';
const data = {
  title: "SM Pdf Viewer",
  description: "A simple and quick PDF file viewer.",
  datetime: new Date(16468704e5),
  cover: "/posts/sm-pdf-viewer/banner.webp",
  tags: ["flutter", "google-play", "software"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/sm-pdf-viewer.mdx",
  rawData: '\nslug: sm-pdf-viewer\ntitle: SM Pdf Viewer\ndescription: A simple and quick PDF file viewer.\ndatetime: 2022-03-10\ncover: "/posts/sm-pdf-viewer/banner.webp"\ntags:\n  - flutter\n  - google-play\n  - software'
};

export { _internal, body, collection, data, id, slug };
