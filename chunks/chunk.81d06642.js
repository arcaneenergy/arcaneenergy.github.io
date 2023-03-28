import './chunk.88f5223f.js';
import 'module';
import 'node:fs/promises';
import 'node:url';
import 'html-escaper';

const id = "top-down-shooter-tutorial-series.mdx";
const collection = "posts";
const slug = "top-down-shooter-tutorial-series";
const body = `
import Youtube from "@components/Youtube.astro";

## Description

This tutorial series focuses on different parts of game development.

You will learn:

- How to use a singleton.
- Creating custom inputs and user-defined signals.
- How to create a Player who can move, turn and attack.
- How to create enemies that can move, turn and attack a target.
- Common attack and health system.
- Create a simple user interface
- GUI Skinning (Themes)
- Connecting the interface with game code.
- Create a simple main menu.

---

## Tutorial #1: Creating the Player

Tutorial 1/5

This tutorial will focus on creating a basic game structure and player character. The player character can be controlled
with keys and rotated with the mouse.

<Youtube videoId="wdKOtA5-Imk" />

---

## Tutorial #2: Adding Enemies and Shooting

Tutorial 2/5

In this tutorial, we are going to create a simple enemy that can move. We will also implement a simple but dynamic
shooting system that can be shared by different scripts.

<Youtube videoId="bjP71cQJrVE" />

---

## Tutorial #3: Collision Layers/Masks and Health System

Tutorial 3/5

Collision layers and collision masks can be confusing at first. In this tutorial, both of them will be used to make the
bullets collide with specific layers. We will also implement a dynamic health system.

<Youtube videoId="Z6i58mfcK3A" />

---

## Tutorial #4: Health Kits, Bullet Hits

Tutorial 4/5

We're going to be adding health kits to the game now. We will also get the bullets to do something now.

<Youtube videoId="Yk00STxcon4" />

---

## Tutorial #5: GUI and Theming

Tutorial 5/5

A simple, but functional GUI will be created in this tutorial.

<Youtube videoId="v-N_auLEQ2w" />

---

## YouTube Playlist

<Youtube videoId="videoseries?list=PLKnVIoBRwyaPJ-U6jPAePrwvOHhWZ6vxo" />
`;
const data = {
  title: "Top Down Shooter Tutorial Series",
  description: "Learn how to create a Top Down Shooter in a 5-part tutorial series.",
  datetime: new Date(16388352e5),
  cover: "/posts/top-down-shooter-tutorial-series/banner.webp",
  tags: ["godot", "tutorial", "post"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/top-down-shooter-tutorial-series.mdx",
  rawData: '\nslug: top-down-shooter-tutorial-series\ntitle: Top Down Shooter Tutorial Series\ndescription: Learn how to create a Top Down Shooter in a 5-part tutorial series.\ndatetime: 2021-12-07\ncover: "/posts/top-down-shooter-tutorial-series/banner.webp"\ntags:\n  - godot\n  - tutorial\n  - post'
};

export { _internal, body, collection, data, id, slug };
