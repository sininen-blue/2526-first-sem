---
title: 4 WebGl prep
lineNumbers: true
exportFilename: 5 Finishing up the Gasket
---

Because WebGl uses HTML and JS we don't have to make changes for the underlying window systems

---

## Canvas

Html5 has a canvas element built to be able to draw, usually this is used for 2d drawings in a pen-plotter model, but is now also used for WebGl

We add this canvas to our DOM the same way we add anything else 

```html
<canvas id="gl-canvas" width="512" height="512"></canvas>
```

It's important to note the width and height, as well as the id which can be anything

---

Also as a raster screen, the top-left is considered the origin of the window, but our webgl functions assume the origin is at the bottom left

And information returned from the browser, like mouse, has the origin at the top left

---

## Aspect Ratio and Viewports

it's important to keep aspect ratio to not squish things

One way to do it is to always make sure the window is the same as the clipping rectangle

But another more flexible method is to use a viewport

It's a rectangular area of the canvas, that by defualt is the netire canvas

```javascript
gl.viewport(x, y, w,, h);
```

Where `(x, y)` is the lower left corner of the viewport (relative to the lower left corner of the canvas)

And `w` and `h` give the width and height of that viewport

---

Application execution

even processing so it doesn't close immedieatly

---

# The html file

text file can't load

---

 sending data to the gpu

buffer

binding

flatten

---

## vertex shader

---

## fragment shader

---

# final

---

initShaders

get attriblocation

---

init


---

canvas context

---

---

# future lesson

# v2 use polygons

---

# v3 in 3 dimensions

---

# v3 in 3 dimensions

---

# v3 with view port clipping


