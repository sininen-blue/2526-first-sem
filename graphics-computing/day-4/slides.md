---
title: 4 Programming with graphics
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

A possible implementation in WebGL would be

```javascript {children:text-2xl}
function sierpinski() {
    initializie_the_system();
    p= find_initial_point();

    for (some_number_of_points) {
        q = generate_a_point(p);
        display_the_point(q);
        p = q;
    }
    cleanup();
}
```

This works
