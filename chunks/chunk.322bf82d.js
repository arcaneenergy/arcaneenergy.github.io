import"../entry.346ba6be.js";/* empty css              */const n="tilemap-level-editor.mdx",o="posts",i="tilemap-level-editor",l=`
import Youtube from "@components/Youtube.astro";
import ItchioWidget from "@components/ItchioWidget.astro";
import GithubButton from "@components/GithubButton.astro";

<GithubButton embedId="tilemap-level-editor" />

<ItchioWidget embedId="1547896" />

## Trailer

<Youtube videoId="01ktb-9E6J0" />

## Description

## Use case

This is currently used in a personal project. It's used to load in JSON files into Godot to recreate the levels at
runtime. The exported JSON file contains all levels and individual cells. This makes it easy to recreate the level in
Godot.

Alternatively, you can use this program to easily create levels in the editor.

## Controls

Placement:

- Left click: Place tile (if selected)
- Right click: Delete tile

Other:

- TAB: Toggle GUI
- SHIFT + Scroll up: Increase brush size
- SHIFT + Scroll down: Decrease brush size

Camera:

- Middle mouse drag: Drag camera around
- W / ↑: Move camera up
- S / ↓: Move camera down
- A / ←: Move camera left
- D / →: Move camera right
- Mouse scroll up: Zoom in
- Mouse scroll down: Zoom out

## UI Overview

Create new layers with the \`+ New Layer\` button. This brings up a dialog box for selecting an image file. After
selecting a file, the new layer appears in the list.

Switch between layers by pressing the arrow to the left of the layer. This will open the tileset on the left. Use the up
and down arrow keys to move layers.

![Image 1](/posts/tilemap-level-editor/image-01.webp)

Select a tile and start drawing.

![Image 2](/posts/tilemap-level-editor/image-02.webp)

Change the size and shape of the cursor using the buttons in the lower right corner.

![Image 3](/posts/tilemap-level-editor/image-03.webp)

## Exported JSON file

The exported JSON file might look like this:

\`\`\`json
{
  "layers": [
    {
      "texture_path": "C:/tilemap-level-editor/test/tileset.png",
      "cells": [[4, -5, -3]]
    }
  ],
  "objects": [
    {
      "key": "player",
      "position": [2, 4]
    }
  ]
}
\`\`\`

Each cell contains an ID, an x and a y position. The ID is used to identify which cell in the tileset it refers to.

## Problems

- [ ] Currently, the program only supports tiles of 16x16 size. The spritesheet needs to be divisible by 16 (16, 32, 48,
      64 etc.)
- [ ] Exported texture paths are absolute.

Godot_v3.5-rc2
`,r={title:"Tilemap Level Editor",description:"Simple level editor for Godot with JSON export functionality. Made with Godot.",datetime:new Date(16536096e5),heroImage:"/posts/tilemap-level-editor/banner.webp",tags:["godot","github","itch-io"]},a={filePath:"/home/runner/work/website/website/src/content/posts/tilemap-level-editor.mdx",rawData:`
slug: tilemap-level-editor
title: Tilemap Level Editor
description: Simple level editor for Godot with JSON export functionality. Made with Godot.
datetime: 2022-05-27
heroImage: "/posts/tilemap-level-editor/banner.webp"
tags:
  - godot
  - github
  - itch-io`};export{a as _internal,l as body,o as collection,r as data,n as id,i as slug};
