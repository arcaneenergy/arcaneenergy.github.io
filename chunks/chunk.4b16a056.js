import './chunk.37b49969.js';
import 'html-escaper';

const id = "tilemap-level-editor.mdx";
const collection = "posts";
const slug = "tilemap-level-editor";
const body = '\nimport Youtube from "@components/Youtube.astro";\nimport ItchioWidget from "@components/ItchioWidget.astro";\nimport GithubButton from "@components/GithubButton.astro";\n\n<GithubButton embedId="tilemap-level-editor" />\n\n<ItchioWidget embedId="1547896" />\n\n## Trailer\n\n<Youtube videoId="01ktb-9E6J0" />\n\n## Description\n\n## Use case\n\nThis is currently used in a personal project. It\'s used to load in JSON files into Godot to recreate the levels at\nruntime. The exported JSON file contains all levels and individual cells. This makes it easy to recreate the level in\nGodot.\n\nAlternatively, you can use this program to easily create levels in the editor.\n\n## Controls\n\n<kbd>Left click</kbd>: Place tile (if a tile is selected)\n\n<kbd>Right click</kbd>: Delete tile\n\n<kbd>Tab</kbd>: Toggle GUI\n\n<kbd>Shift</kbd> + <kbd>Scroll up</kbd>: Increase brush size\n\n<kbd>Shift</kbd> + <kbd>Scroll down</kbd>: Decrease brush size\n\n<kbd>Middle mouse drag</kbd>: Drag camera\n\n<kbd>W</kbd>/<kbd>A</kbd>/<kbd>S</kbd>/<kbd>D</kbd>: Move camera\n\n<kbd>\u2191</kbd>/<kbd>\u2190</kbd>/<kbd>\u2193</kbd>/<kbd>\u2192</kbd>: Move camera\n\nMouse scroll up/down: Zoom in/out\n\n## UI Overview\n\nCreate new layers with the `+ New Layer` button. This brings up a dialog box for selecting an image file. After\nselecting a file, the new layer appears in the list.\n\nSwitch between layers by pressing the arrow to the left of the layer. This will open the tileset on the left. Use the up\nand down arrow keys to move layers.\n\n![Image 1](/posts/tilemap-level-editor/image-01.webp)\n\nSelect a tile and start drawing.\n\n![Image 2](/posts/tilemap-level-editor/image-02.webp)\n\nChange the size and shape of the cursor using the buttons in the lower right corner.\n\n![Image 3](/posts/tilemap-level-editor/image-03.webp)\n\n## Exported JSON file\n\nThe exported JSON file might look like this:\n\n```json\n{\n  "layers": [\n    {\n      "texture_path": "C:/tilemap-level-editor/test/tileset.png",\n      "cells": [[4, -5, -3]]\n    }\n  ],\n  "objects": [\n    {\n      "key": "player",\n      "position": [2, 4]\n    }\n  ]\n}\n```\n\nEach cell contains an ID, an x and a y position. The ID is used to identify which cell in the tileset it refers to.\n\n## Problems\n\n- [ ] Currently, the program only supports tiles of 16x16 size. The spritesheet needs to be divisible by 16 (16, 32, 48,\n      64 etc.)\n- [ ] Exported texture paths are absolute.\n\nGodot_v3.5-rc2\n';
const data = {
  title: "Tilemap Level Editor",
  description: "Simple level editor for Godot with JSON export functionality. Made with Godot.",
  datetime: new Date(16536096e5),
  heroImage: "/posts/tilemap-level-editor/banner.webp",
  tags: ["godot", "open-source", "itch-io"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/tilemap-level-editor.mdx",
  rawData: '\nslug: tilemap-level-editor\ntitle: Tilemap Level Editor\ndescription: Simple level editor for Godot with JSON export functionality. Made with Godot.\ndatetime: 2022-05-27\nheroImage: "/posts/tilemap-level-editor/banner.webp"\ntags:\n  - godot\n  - open-source\n  - itch-io'
};

export { _internal, body, collection, data, id, slug };
