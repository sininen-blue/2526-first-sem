---
title: Sierpinski Gasket v2
exportFilename: Instructions.pdf
---

# Sierpinski Gasket v2
With written instructions this time

---
layout: center
---

0. Prep
- download the starter files from  [ishortn.ink/gasketSource](https://ishortn.ink/gasketSource)
<img src="./images/gitQr.png" alt="QR code to the GitHub repo" width="150"/>

- ignore the `NOTES:` comments in the code for now, these are questions which you will answer later

---
layout: center
---

1. *Add* a canvas element to the *top* of your body in your `gasket.html` HTML file with the specified id and dimensions.

`gasket.html`
```html
<canvas id="gl-canvas" width="512" height="512"></canvas>
```

Notes:
- The id must be exactly `gl-canvas` for the JavaScript code to work.
- The width and height can be changed, but the JavaScript code assumes a square canvas.
- try using a non square canvas and see what happens

---
layout: center
---

2. Copy the contents of the shader files (`.glsl` files) in the `shader/` folder to the designated spots in your html file.

`gasket.html`
```html
<script id="fragment-shader" type="x-shader/x-fragment">
    <!-- fragment shader here -->
</script>

<script id="vertex-shader" type="x-shader/x-vertex">
    <!-- vertext shader here -->
</script>
```

---
layout: center
---

3. Write the JavaScript code in the `gasket.js` file to do the following:

- Set up the vertices of the triangle in the `vertices` variable (3 points in *clip space*)
    - clip space starts at `[-1, -1]` in the bottom left and goes to `[1, 1]` in the top right
    - use 3 `vec2(x, y)`

`gasket.js`
```js
var vertices = [];
```

--- 
layout: center
---

- add a point to `positions[]` of where you want the first point to be in
    - you can either pick a random point through math
    - or pick a point you know is inside the triangle 

`gasket.js`
```js
positions.push(...);
```

---
layout: center
---

4. Calculate the points for the Sierpinski Gasket, where 

- you start a loop that starts at `0` and goes to `positions.length < numPoints`
`gasket.js`
```js
for (var i = 0; i < numPoints; i++) {
    ...
}
```

Inside this loop
- you pick a random vertex from the triangle `0, 1, or 2`
    - `Math.floor(Math.random() * 3)` let's you randomly generate a number from `0` to `2`

`gasket.js`
```js
var triangle_index = random point here ;
```

---
layout: center
---


Still inside the loop
- Find the midpoint between the last point in `positions[]` (your *latest* point), and the chosen vertex (the *triangle_index*)

`gasket.js`

Add the two vertices
```js
var newPoint = add(positions[i], vertices[triangle_index]);
```

Then scale them to half
```js
newPoint = scale(0.5, newPoint);
```

Then add the new point to `positions[]`
```js
js positions.push(newPoint);
```
---
layout: center
---

5. Run the WebGL code to render the points (open the html file in your browser)

---
layout: center
---

6. Experiment with different values
- triangle vertices 
    - (in the gasket.js file `vertices = []` ),
- number of points 
    - (in the gasket.js file `var numPositions = ...` ),
- canvas sizes 
    - (in the html file, `<canvas width=... height=...>` ),
- try picking a starting point that is outside the triangle and see what happens
    - (in your first `positions.push(...)` ),
- point sizes (in the vertex shader, `gl_PointSize = ...`),
- colors (in the fragment shader, `gl_FragColor = ...`),

---
layout: center
---

7. Complete the `NOTES:` comments in your code to explain what each part does

i.e. 
- `// NOTES: what does this line do?` becomes
- `// NOTES: what does this line do? This line sets up the WebGL context`

---
layout: center
---

8. rename your folder to `gasket_yourname` and submit it to

[ishortn.ink/gasketSubmit](https://ishortn.ink/gasketSubmit)
<img src="./images/submitQr.png" alt="QR code to the submission form" width="150"/>

---
Layout: center
---

9. Homework
- Save your file somewhere so you can access it at home 
- generate a different image using points by modifying your gasket.js file
- make a square, a house, a tree, a face, etc
- either hand place all the points, or generate them with math and for loops
