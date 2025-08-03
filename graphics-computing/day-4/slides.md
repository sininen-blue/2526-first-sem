---
title: 4 Programming with graphics
transition: slide-left
---

# Graphics Computing

Introduction to Graphics Programming

---
layout: image-right
image: images/sierpinski_triangle.png
---

## The Sierpinski Triangle

The sierpinski trinagle is an object that can be defined recursively and randomly, with proporties that aren't themselves random

It's an interesting shape, and we'll start trying to create a 2D version of it

---
layout: float-right
image: images/fig2.jpg
---

## Imagine we start with three points in space

As long as the points are 
- non collinear, meaning they don't all lie on a straight line
- they are the vertices of a unique triangle, 
- and also define a unique plane

We can start creating a Sierpinski triangle

---
layout: float-right
image: images/fig2.jpg
---

For now, we'll assume ignore the z coordinate and assume $z = 0$

So when specifiend in some coordinate system, our three points are:
1. $(x_0, y_0, 0)$
2. $(x_1, y_1, 0)$
3. $(x_2, y_2, 0)$

---
layout: float-right
image: images/fig2.jpg
---

## To start creating the image
1. pick an initial point, $p = (x, y, 0)$, at random inside the triangle
2. select one of the three vertices at random
3. find the point $q$ halfway between $p$ and the randomly selected vertex
4. display $q$ by putting some sort of marker, like a circle
5. replace $p$ with $q$
6. repeat steps 2-5 a large number of times

---
layout: center
---

## Exercise

Try creating a Sierpinski triangle using the steps above on paper

---
layout: two-cols
---

## Immediate mode graphics

A possible implementation in WebGL would be

This type of graphics programming is called **immediate-mode graphics** and was the standard for many years especially when interactive performance was needed

In this implementation, we don't store any data to the GPU

So redrawing the points would require us to send the data again to the GPU, which is a slow process

::right::
```javascript 
function sierpinski() {
    initializie_the_system();
    p = find_initial_point();

    for (some_number_of_points) {
        q = generate_a_point(p);
        display_the_point(q);
        p = q;
    }
    cleanup();
}
```

---
layout: two-cols
---

## Retained mode graphics

If we want to be able to display the points again without doing that we can use something like

1st we compute all the points, then we put them into the GPU

And because we know where all the points are, we can redsiplay the points significanltly faster, unless we change the position of the points

<!-- But this means that if we want to move the objects in a new position, we need to recompute all the points and send them again to the GPU -->

This is called **retained-mode graphics** 

::right::
```javascript 
function sierpinski() {
    initialize_the_system();
    p = find_initial_point();

    for (some_number_of_points) {
        q = generate_a_point(p);
        store_the_point(q);
        p = q;
    }
    display_all_points();
    cleanup();
}
```

---
layout: two-cols
---

## Modern retained mode graphics

And with modern graphics systems, we can create a third version of our program

Since the second program has one major flaw. Moving the objects require sending the data from the CPU to the GPU each time we wish to display a new position 

Now we have the display in two parts. Storing the data on the GPU and telling the GPU to display the data

If we only display the data once, this has no advantage

::right::
```javascript
function sierpinski() {
    initialize_the_system();
    p = find_initial_point();

    for (some_number_of_points) {
        q = generate_a_point(p);
        store_the_point(q);
        p = q;
    }

    send_all_points_to_GPU();
    display_all_points_on_GPU();
    cleanup();
}
```


But if we want to animate the display, since our data is already on the GPU, we just use a function call that alters the location of some spatial data

---
layout: center
---

## Programming 2D Applications

---

For our purposes, we'll regard 2d applications as a special case of 3d

Where we'll view the two-dimensional plane as a subspace of the three-dimensional space

We'll represent a point in the plane $z = 0$ as $p = (x, y, 0)$ in the three dimensional world or simply $p = (x, y)$

In WebGL, either represetation is valid and will use the same representation regardless

---

## A side note on vertices and points

We use the terrms *vertex* and *point* slightly differently in computer graphics compared to other fields.

A **vertex** is an object, whose *attributes* is its position in space, and we use them to specify the atomic (smallest) geometric primitives that we can draw

The simplest being a point in space, 
- which is specified by a single vertex
- Two vertices can be used to specify two points or a line (another primitive)
- They can also be used to specify a circle or a rectangle 
- Three vertices can be used to specify either a triangle or a circle
- Four for a quadrilateral
- etc

---
layout: float-right
image: images/fig3.webp
---

To turn our third program into a WebGL program, we will ignore a few things for the sake of simplicity

For one, we'll delay the discussion of coordinate systems and how to represent them in WebGL

And instead we'll use somthing called clip coordinates, where everything outside the clip coordinates will be ignored

This is a cube where its principal diagnonal is from $(-1, -1, -1)$ to $(1, 1, 1)$

Later, we'll learn to specify coordinates better, then transform those object coordinates into clip coordinates

---

## Let's start

to define a point we can theortically use

```javascript
var p = [x, y];
```

But a Javascript array isn't just an ordered set of numbers like in C, it's an object with methods and properties, like length

This is important because a GPU expects a simple 32-bit IEEE floating point number

There are ways to convert this to a Float32Array, such as

```javascript
var p = new Float32Array([x, y]);
```

But it's easier to create an object that has what we need

We'll be using `MV.js` which is provided with the book

---

github link

setup instructions

---
TODO: animate this
```javascript
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
