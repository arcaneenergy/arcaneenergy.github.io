import './chunk.67c838a9.js';
import 'html-escaper';

const id = "whiteboard.mdx";
const collection = "posts";
const slug = "whiteboard";
const body = `
import Youtube from "@components/Youtube.astro";
import ItchioWidget from "@components/ItchioWidget.astro";
import ItchioEmbed from "@components/ItchioEmbed.astro";
import GooglePlayButton from "@components/GooglePlayButton.astro";

<ItchioEmbed embedId="6455154" />

<button
  class="index-whiteboard-btn"
  onclick="window.location.href='/whiteboard';"
>
  <img src="/software/whiteboard/icon.png" alt="" />
  <h2>Open Whiteboard</h2>
</button>

<ItchioWidget embedId="1277666" />

<GooglePlayButton embedId="com.arcaneenergy.whiteboard" />

## Trailer

<Youtube videoId="ay3ymU5kMr8" />

## Screenshots

![Image 1](/posts/whiteboard/image-01.webp)
![Image 2](/posts/whiteboard/image-02.webp)
![Image 3](/posts/whiteboard/image-03.webp)
![Image 4](/posts/whiteboard/image-04.webp)
![Image 5](/posts/whiteboard/image-05.webp)

## Description

Whiteboard made with Godot.

Features:

\u{1F539} Write text. Select different fonts and font styles.

\u{1F539} Insert pictures. Change the scaling mode.

\u{1F539} Insert shapes.

\u{1F539} Draw with different variants of brushes.

\u{1F539} Change the background theme.

\u{1F539} Edit the grid size, background color and more.

\u{1F539} Presentation system.

---

A simple whiteboard for writing text, inserting pictures and drawing. Each tool has different settings and properties.
An integrated presentation system is available. Place focus points on your whiteboard and play them back like a slide
show.

Your whiteboards are private. There is no server.

## YouTube Playlist

<Youtube videoId="videoseries?list=PLKnVIoBRwyaO3n4L06BIfuS26e3ultvxf" />
`;
const data = {
  title: "Whiteboard",
  description: "Your private whiteboard.",
  datetime: new Date(1636416e6),
  heroImage: "/posts/whiteboard/banner.webp",
  tags: ["godot", "google-play", "itch-io"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/whiteboard.mdx",
  rawData: '\nslug: whiteboard\ntitle: Whiteboard\ndescription: Your private whiteboard.\ndatetime: 2021-11-09\nheroImage: "/posts/whiteboard/banner.webp"\ntags:\n  - godot\n  - google-play\n  - itch-io'
};

export { _internal, body, collection, data, id, slug };
