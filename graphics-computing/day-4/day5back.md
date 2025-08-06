
---
layout: center
---

# https://ishortn.ink/day4graphics
Github link

1. Make a folder somewhere
2. add a the `gasket.html` file
3. add the `MV.js` file
4. add the `initShaders.js` file
5. add the `gasket.js` file

5. don't add the `gasketFromBook.js`

---

# MV.js
a library for simple primitives

```javascript
var a = vec2(1.0, 0.0);
var b = vec2(3.0, 4.0);
var c = add(a, b);
```

`MV.js` is a library provided by 'Interactive Computer Graphics' by Edward Angel and Dave Shreiner

It gives us some useful functions and objects to work with like the above

And `flatten()` which let's us convert multiple vertices in an array to what the GPU wants

---

---

## Sample Code
```javascript {all|1-2|3-7|9-12|14-18|15|16-17|all}
const numPositions = 5000;
var positions = [];
var vertices = [
    vec2(-1.0, -1.0),
    vec2(0.0, 1.0),
    vec2(1.0, -1.0)
];

var u = mult(0.5, add(vertices[0], vertices[1]));
var v = mult(0.5, add(vertices[0], vertices[2]));
var p = mult(0.5, add(u, v));
positions.push(p);

for (var i = 0; i < numPositions - 1; ++i) {
    var j = Math.floor(Math.random() * 3);
    p = mult(0.5, add(positions[i], vertices[j]));
    positions.push(p);
} 
```
---

Considering we only want to generate the positions once then place it on the GPU, we can make the creation part, part of the `init()` function

We can also fairly easily specify them in 3 dimensions by adding a z coordinate which is always zero, by using `vec3()`

````md magic-move {at:4-6}
```javascript {*}{maxHeight: '300px'}
const numPositions = 5000;
var positions = [];
var vertices = [
    vec2(-1.0, -1.0),
    vec2(0.0, 1.0),
    vec2(1.0, -1.0)
];

var u = mult(0.5, add(vertices[0], vertices[1]));
var v = mult(0.5, add(vertices[0], vertices[2]));
var p = mult(0.5, add(u, v));
positions.push(p);

for (var i = 0; i < numPositions - 1; ++i) {
    var j = Math.floor(Math.random() * 3);
    p = mult(0.5, add(positions[i], vertices[j]));
    positions.push(p);
} 
```

```javascript {*}{maxHeight: '300px'}
const numPositions = 5000;
var positions = [];
var vertices = [
    vec3(-1.0, -1.0, 0.0),
    vec3(0.0, 1.0, 0.0),
    vec3(1.0, -1.0, 0.0)
];

var u = mult(0.5, add(vertices[0], vertices[1]));
var v = mult(0.5, add(vertices[0], vertices[2]));
var p = mult(0.5, add(u, v));
positions.push(p);

for (var i = 0; i < numPositions - 1; ++i) {
    var j = Math.floor(Math.random() * 3);
    p = mult(0.5, add(positions[i], vertices[j]));
    positions.push(p);
}
```
````

---
