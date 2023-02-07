import './chunk.67c838a9.js';
import 'html-escaper';

const id = "2d-physics-sandbox.mdx";
const collection = "posts";
const slug = "2d-physics-sandbox";
const body = `
import Youtube from "@components/Youtube.astro";
import GooglePlayButton from "@components/GooglePlayButton.astro";
import ImageGallery from "@components/ImageGallery.astro";

<GooglePlayButton embedId="com.arcaneenergy.physicssandboxgame" />

## Trailer

<Youtube videoId="bMAygTCpA84" />

## Screenshots

<ImageGallery images={
  [
    "/posts/2d-physics-sandbox/image-01.webp",
    "/posts/2d-physics-sandbox/image-02.webp",
    "/posts/2d-physics-sandbox/image-03.webp",
    "/posts/2d-physics-sandbox/image-04.webp",
    "/posts/2d-physics-sandbox/image-05.webp",
    "/posts/2d-physics-sandbox/image-06.webp",
  ]
} />

## Description

**\u{1F539} About the game**

Open your backpack and select from various elements. Tap anywhere to spawn elements in the world. Select different tools
from your toolbox and tinker in your own sandbox. Burn and destroy elements to collect coins and purchase new elements.

---

**\u{1F53A} How to play**

Open your backpack to view your elements. The backpack is located in the top left corner. You can select different
elements from there. Press anywhere on the screen or drag to spawn the elements in the world.

The toolbox contains the way to select different tools to interact with elements. The move tool can drag elements. The
edit tool can change their properties, like size, rotation or color.

The pause button is located at the center of the navigation menu. Pressing this button will freeze all elements. You can
still move elements by hand with the move tool and change properties.

The globe button is the world settings. This menu allows you to change the world's appearance, day and night time and
other settings, like friction and bounce.

## YouTube Playlist

<Youtube videoId="videoseries?list=PLKnVIoBRwyaOveK9Smt4RWZoVYarER4ua" />
`;
const data = {
  title: "2D Physics Sandbox",
  description: "Create and control your own 2D Sandbox.",
  datetime: new Date(16038432e5),
  heroImage: "/posts/2d-physics-sandbox/banner.webp",
  tags: ["godot", "google-play", "game"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/2d-physics-sandbox.mdx",
  rawData: '\nslug: 2d-physics-sandbox\ntitle: 2D Physics Sandbox\ndescription: Create and control your own 2D Sandbox.\ndatetime: 2020-10-28\nheroImage: "/posts/2d-physics-sandbox/banner.webp"\ntags:\n  - godot\n  - google-play\n  - game'
};

export { _internal, body, collection, data, id, slug };
