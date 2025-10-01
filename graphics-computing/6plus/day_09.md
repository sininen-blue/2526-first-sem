---
title: Modeling A Colored Cube Unfinished
exportFilename: 9 cube
---

# Rotating cube
Modeling a simple cube requires a significant amount of foundational knowledge in both geometry, coordinate systems, and computer graphics.

Instead we'll be building up the necessary concepts over a series of lessons, and then in a future lesson, we'll apply these concepts to model a colored cube.

---

## Modeling it

The first thing to consider, is how to model a cube efficiently

Although 3D objects can be represented like 2D objects through a set of vertices, a data structure helps us incorporate the relationships among the vertices, edges, and faces of geometric objects.

---

## Modeling

There are a number of ways to model a cube.

A CSG (Constructive Solid Geometry) model would represent it as a single primitive. And on the other extreme, a hardware processing model would represent it as a set of eight vertices.

We will use surface-based modeling which regards a cube as either
- an intersection of six planes, or
- a set of six polygons called facets, that comprise the cube's faces.

---

## Modeling

We first assume that the vertices of the cube are available through an array of `vertices`

```javascript
var vertices = [
    vec3(-0.5, -0.5, 0.5),
    vec3(-0.5, 0.5, 0.5),
    vec3( 0.5, 0.5, 0.5),
    vec3( 0.5, -0.5, 0.5),
    vec3(-0.5, -0.5, -0.5),
    vec3(-0.5, 0.5, -0.5),
    vec3( 0.5, 0.5, -0.5),
    vec3( 0.5, -0.5, -0.5)
];
```

This can then define the faces of a cube. For example, one face is specified by the sequence of vertices 0, 3, 2, 1

---
layout: two-cols
---

## Inward- and Outward-Pointing Faces

The order which we specify our vertices when we are defining a 3D polygon

$0, 3, 2, 1$ would work, and $1, 0, 3, 2$ would also work.

But $0, 1, 2, 3$ would not work.

While it describes the same boundary, it does not define the same face.


::right::

---
layout: two-cols
---

## Inward- and Outward-Pointing Faces

A polygon has two sides, and our graphics system can display either or both of them, but it needs to know which side is which.

And the order in which the vertices are specified determines which side is which.

::right::

It's called `outward facing` if the vertices are traversed in a counter clockwise order when the face is viewed from outside the cube.

This is also known as the `right-hand rule`.

---

## Data structures for object representation




