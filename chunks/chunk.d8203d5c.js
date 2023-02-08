import './chunk.37b49969.js';
import 'html-escaper';

const id = "godot-web-scraper.mdx";
const collection = "posts";
const slug = "godot-web-scraper";
const body = '\nimport Youtube from "@components/Youtube.astro";\n\n<Youtube videoId="49CAuQLysyI" />\n\n## Overview\n\nThis is a simple example of how Godot can be used as a web scraper. This tutorial is divided into two parts. Part one\nfocuses on how to make HTTP requests. Part two shows how the image is displayed in Godot.\n\n## Part 1: Making HTTP-Requests\n\nGodot provides a node to make HTTP-Requests:\nThe [HTTPRequest](https://docs.godotengine.org/en/latest/classes/class_httprequest.html) node. From the\ndescription: A node with the ability to send HTTP(S) requests.\n\nYou can either add this node to the scene tree or we can create this node with code. In this example, we create it with\ncode.\n\n### Creating the HTTPRequest node\n\n```go\nfunc _ready() -> void:\n    var http_request := HTTPRequest.new()\n    add_child(http_request)\n\n    # Connect "request_completed" signal of HTTPRequest node.\n    http_request.connect("request_completed", _on_http_request_request_completed)\n\nfunc _on_http_request_request_completed(result: int, response_code: int, headers: PackedStringArray, body:\nPackedByteArray) -> void:\n    pass\n```\n\n### Requesting an image\n\nNow all we have to do is request an image from a website.\n\n```go\nvar error = http_request.request("https://api.lorem.space/image/house")\nif error != OK:\n    printerr("An error occurred.")\n```\n\nIf the request is unsuccessful, the error message is displayed.\n\n## Part 2: Displaying the image in Godot\n\nAdd the following code to the `_on_http_request_request_completed` function:\n\n```go\nif result != HTTPRequest.RESULT_SUCCESS:\n    push_error("Image could not be downloaded.")\n\nvar img := Image.new()\nvar error = img.load_jpg_from_buffer(body)\nif error != OK:\n    push_error("Could not load the image.")\n\nvar tex = ImageTexture.new()\ntex.create_from_image(img)\n\nvar sprite := Sprite3D.new()\nadd_child(sprite)\n\nsprite.texture = tex\nsprite.position = Vector3(0, 0, -5)\n```\n\nThe image is then loaded with the data response of the request (`body`). Depending on the image type requested, you may\nwant to change `load_jpg_from_buffer` to other image formats. You can change the `jpg`\nin [`load_jpg_from_buffer`](https://docs.godotengine.org/en/latest/classes/class_image.html?highlight=image#class-image-method-load-jpg-from-buffer)\nto `bmp`, `png`, `tga` or `webp`.\n\nIf the request is successful, the sprite with the requested image should appear in your scene:\n\n![Image 1](/posts/godot-web-scraper/banner.webp)\n\nGodot v4.0.alpha4.official\n';
const data = {
  title: "Download images from web with Godot",
  description: "Scrape images and content from the web with Godot.",
  datetime: new Date(16473888e5),
  heroImage: "/posts/godot-web-scraper/banner.webp",
  tags: ["godot", "tutorial"]
};
const _internal = {
  filePath: "/home/runner/work/website/website/src/content/posts/godot-web-scraper.mdx",
  rawData: '\nslug: godot-web-scraper\ntitle: Download images from web with Godot\ndescription: Scrape images and content from the web with Godot.\ndatetime: 2022-03-16\nheroImage: "/posts/godot-web-scraper/banner.webp"\ntags:\n  - godot\n  - tutorial'
};

export { _internal, body, collection, data, id, slug };
