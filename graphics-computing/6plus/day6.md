---
title: Expanding the gasket
exportFilename: 6 expanding the gasket
---

# Expanding the gasket

---
layout: float-right
image: /images/day6/fig1.png
---

- While the gasket with points is random, the more iterations we do, the more that randomness disappears
- Regardless of how many points we generate, the middle point is always empty
- and if we draw line segments between mid points, and connect it to other midpoints, we get a sierpinski triangle

---
layout: float-right
image: /images/day6/fig2.png
---

- this produces ___ upright triangles
- we can then repeat this process for each one
- then do it again

---

## This means we can generate a sierpinski triangle without randomness, and using polygons
- one advantage of this system is that we can fill up solid areas on our display
- we start with one triangle, then subdivide it into 4 triangles, then do it again, then again
- note to remove the middle triangle each time

---

# Programming

- We start with making a function that takes in 3 2d vertices and puts it into the `positions[]` array

```js
function triangle(a, b, c) {
    positions.push(a);
    positions.push(b);
    positions.push(c);
}
```

---

Imagine we have our main triangle from last time

```js
var vertices = [
    vec2(-1, -1),
    vec2(0, 1),
    vec2(1, -1)
]
```

We can get the midpoint of each point by using the `mix` function, this is essentially an addition and multiplication

```js
var ab = mix(a, b, 0.5);
var ac = mix(a, c, 0.5);
var bc = mix(b, c, 0.5);
```

---

And with these six locations we can use our function `triangle` to place data for the three new triangles formed by 

$$
(a, ab, ac), (c, ac, bc), (b, bc, ab)
$$

---

We can then make a recursive function to do this multiple times

```js
function divideTriangle(a, b, c, count) {
    if (count == 0) {
        triangle(a, b, c);
    } else {
        var ab = mix(a, b, 0.5);
        var ac = mix(a, c, 0.5);
        var bc = mix(b, c, 0.5);

        count--;

        divideTriangle(a, ab, ac, count);
        divideTriangle(c, ac, bc, count);
        divideTriangle(b, bc, ab, count);
    }
}
```

---

Then we can

```js
divideTriangle(vertices[0], vertices[1], vertices[2], numTimes);
```

---

The rest of the program is essentially the same

but 

```js
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, numPositions);
}
```

---

Now watch me struggle to get this working

---

# Turning it 3d

- Because a tetrahedron (pyramid with triangular base) is convex, the midpoint of a line segment between a vertex and any point inside a tetrahedron is also inside the tetrahedron
- This means we can use the same algorithm as before, but instead of three vertices to define a triangle, we have ___
- this also means we need to change the variables form `vec2` to `vec3`

```js
var vertices = [
    vec3(-0.5, -0.5, -0.5),
    vec3(0.5, -0.5, -0.5),
    vec3(0.0, 0.5, 0.0),
    vec3(0.0, -0.5, 0.5)
];
```

---

## Pick a starting point

```js
var posisions = [vec3(0.0, 0.0, 0.0)];
```

---

## fill in the tetrahedron

```js
far (var i = 0; i < numPositions - 1; i++) {
    var j = Math.floor(Math.random() * 4);
    var mid = mix(positions[i], vertices[j], 0.5);
    positions.push(mid);
}
```

---

slight problem

- It's hard to see a 3d object on a 2d screen
- Especially since we aren't doing any projection


---

# Adding some color

To get around this problem, we can add some new things to our shaders to change the color of each point depending on its location

A simple way to do this would be to map a color to it's position (they're both cubes)

Since the range is from `vec3(-1,-1,-1)` to `vec3(1,1,1)`, we can just convert it to a range of `0-1` by adding `1` and dividing by `2`

$$
r=\frac{1 + x}{2},
g=\frac{1 + y}{2},
b=\frac{1 + z}{2}
$$

So every point has its own color based on its $x$ $y$ and $z$ position

---

`vector.glsl`
```glsl
in vec4 aPosition;
out vec4 vColor;

void main() 
{
    vColor = vec4((1.0 + aPosition.xyz) / 2.0, 1.0);
    gl_PointSize = 3.0;
    gl_Position = aPosition;
}
```

---

`fragment.glsl`
```glsl
in vec4 vColor;
out vec4 fColor;

void main()
{
    fColor = vColor;
}
```

---

We can also do cool things like change the color in application, and then send it to the shaders

We just need to set up a `colors` variable, bind it to a buffer, and then send it to the shader
