import"../entry.346ba6be.js";/* empty css              */const o="godot-web-scraper.mdx",n="posts",r="godot-web-scraper",s=`
import Youtube from "@components/Youtube.astro";

<Youtube videoId="49CAuQLysyI" />

## Overview

This is a simple example of how Godot can be used as a web scraper. This tutorial is divided into two parts. Part one
focuses on how to make HTTP requests. Part two shows how the image is displayed in Godot.

## Part 1: Making HTTP-Requests

Godot provides a node to make HTTP-Requests:
The [HTTPRequest](https://docs.godotengine.org/en/latest/classes/class_httprequest.html) node. From the
description: A node with the ability to send HTTP(S) requests.

You can either add this node to the scene tree or we can create this node with code. In this example, we create it with
code.

### Creating the HTTPRequest node

\`\`\`go
func _ready() -> void:
    var http_request := HTTPRequest.new()
    add_child(http_request)

    # Connect "request_completed" signal of HTTPRequest node.
    http_request.connect("request_completed", _on_http_request_request_completed)

func _on_http_request_request_completed(result: int, response_code: int, headers: PackedStringArray, body:
PackedByteArray) -> void:
    pass
\`\`\`

### Requesting an image

Now all we have to do is request an image from a website.

\`\`\`go
var error = http_request.request("https://api.lorem.space/image/house")
if error != OK:
    printerr("An error occurred.")
\`\`\`

If the request is unsuccessful, the error message is displayed.

## Part 2: Displaying the image in Godot

Add the following code to the \`_on_http_request_request_completed\` function:

\`\`\`go
if result != HTTPRequest.RESULT_SUCCESS:
    push_error("Image could not be downloaded.")

var img := Image.new()
var error = img.load_jpg_from_buffer(body)
if error != OK:
    push_error("Could not load the image.")

var tex = ImageTexture.new()
tex.create_from_image(img)

var sprite := Sprite3D.new()
add_child(sprite)

sprite.texture = tex
sprite.position = Vector3(0, 0, -5)
\`\`\`

The image is then loaded with the data response of the request (\`body\`). Depending on the image type requested, you may
want to change \`load_jpg_from_buffer\` to other image formats. You can change the \`jpg\`
in [\`load_jpg_from_buffer\`](https://docs.godotengine.org/en/latest/classes/class_image.html?highlight=image#class-image-method-load-jpg-from-buffer)
to \`bmp\`, \`png\`, \`tga\` or \`webp\`.

If the request is successful, the sprite with the requested image should appear in your scene:

![Image 1](/posts/godot-web-scraper/banner.webp)

Godot v4.0.alpha4.official
`,a={title:"Download images from web with Godot",description:"Scrape images and content from the web with Godot.",datetime:new Date(16473888e5),heroImage:"/posts/godot-web-scraper/banner.webp",tags:["godot","tutorial"]},i={filePath:"/home/runner/work/website/website/src/content/posts/godot-web-scraper.mdx",rawData:`
slug: godot-web-scraper
title: Download images from web with Godot
description: Scrape images and content from the web with Godot.
datetime: 2022-03-16
heroImage: "/posts/godot-web-scraper/banner.webp"
tags:
  - godot
  - tutorial`};export{i as _internal,s as body,n as collection,a as data,o as id,r as slug};
