import './chunk.b21d6461.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "limspace-v1.mdx";
const collection = "posts";
const slug = "limspace-v1";
const body = '\nimport ItchioWidget from "@components/ItchioWidget.astro";\nimport Youtube from "@components/Youtube.astro";\nimport ImageGallery from "@components/ImageGallery.astro";\n\n<ItchioWidget embedId="1841206" />\n\n## Description\n\nThe backrooms are a mysterious and complex labyrinth of interconnected dimensions, hidden just beyond the threshold\nof our everyday reality. For some, they are a place of unimaginable horror and darkness, where the laws of physics\nand time are twisted and distorted. For others, they are a realm of endless possibility and exploration, offering\nglimpses into alternate universes and strange new worlds.\n\n**Note**: You can use the camera to capture screenshots in game. Pick up the camera and press <kbd>Tab</kbd> to\nactivate or deactivate it. Left-clicking captures a screenshot. Your screenshots are saved under:\n`%AppData%\\Godot\\app_userdata\\Limspace`\n\nYou cannot bring objects to the backrooms.\n\n- To get to the backrooms, wait approx. 2 minutes or jump off the balcony.  \n- To leave the backrooms, find the key in the library. Find the library by following the arrows on the walls. After acquiring the key, find (or go back to) the central and open the door to open a dimensional portal back to your home.\n\n## Screenshots\n\n<ImageGallery images={\n  [\n    "/posts/limspace-v1/image-01.webp",\n    "/posts/limspace-v1/image-02.webp",\n    "/posts/limspace-v1/image-03.webp",\n    "/posts/limspace-v1/image-04.webp",\n    "/posts/limspace-v1/image-05.webp",\n    "/posts/limspace-v1/image-06.webp",\n    "/posts/limspace-v1/image-07.webp",\n    "/posts/limspace-v1/image-08.webp",\n  ]\n} />\n\n## Trailer\n\n<Youtube videoId="ZDqve0fh6GE" />\n';
const data = {
  title: "Limspace v1",
  description: "Explore Godot's graphics capabilities in this short, yet mysterious adventure.",
  datetime: new Date(1671304217e3),
  cover: "/posts/limspace-v1/banner.webp",
  tags: ["godot", "itch-io", "game", "software"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/limspace-v1.mdx",
  rawData: `
slug: limspace-v1
title: Limspace v1
description: Explore Godot's graphics capabilities in this short, yet mysterious adventure.
datetime: 2022-12-17T20:10:17+01:00
cover: "/posts/limspace-v1/banner.webp"
tags:
  - godot
  - itch-io
  - game
  - software`
};

export { _internal, body, collection, data, id, slug };
