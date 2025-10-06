---
title: Math
exportFilename: 9 Math
---

# Math
We're going to be doing a lot of math

---

# Basics
Scalars, points, and vectors

These are the three fundamental types

Note that we will be distinguishing between the `abstract` definition and any `implementation` of these types

---

## Scalars

Real numbers that obey a set of rules that are abstractions of the operations of ordinary arithmetic

i.e. real numbers with addition, subtraction, multiplication, and division

---

## Points

A location in space with neither size nor shape and one of the simplest geometric objects

Useful in specifying geometric objects but not sufficient.

---

## Vectors

Directions with a magnitude and no fixed position. In computer graphics, this is often referred to as a directed line segment

And because vectors have no fixed position, vectors are identical if they have the same direction and magnitude

<img class="mx-auto w-1/2" src="./images/day_09/fig1.png" alt="Vector Example">

---

## Vector Operations

Scalar multiplication allows you to take a vector, multiply it by a scalar, and get a new vector with the same direction but a different magnitude

<img class="mx-auto w-1/2" src="./images/day_09/fig2.png" alt="Vector Example">

We write that as $B = 2A$

---

## Vector Operations

Vector addition allows you to take two vectors and add them together to get a new vector using the head-to-tail rule

<img class="mx-auto w-1/2" src="./images/day_09/fig3.png" alt="Vector Example">

Where we connect the head of the vector $A$ to the tail of vector $C$ which gets us a vector $D$

This is the sum and written as $D = A + C$

---

## Vector Operations

We can also invert a vector by multiplying it with the scalar $-1$

<img class="mx-auto w-1/2" src="./images/day_09/fig4.png" alt="Vector Example">

And from that inverse, we can get a *zero vector* by using the head-to-tail rule and adding the inverse to the original vector

---

## Vector Operations

Point Vector addition is the first non intuitive operation we'll be doing

There are no sensible operations for a point-to-point ($P + P$) and point-to-scalar ($Ps$)

But there *is* an operation for point-to-vector ($P + V$) called point-vector addition

This takes a point and a vector and produces a new point

<img class="mx-auto w-1/2" src="./images/day_09/fig5.png" alt="Vector Example">

Denoted as $P = Q + v$ where $v$ displaces $Q$ to the new location $P$

---

## Point Vector Operations

Looking at it slightly differently, we can also write it as $v = P - Q$

Where the vector $v$ is the displacement from point $Q$ to point $P$, this is called *point-point subtraction*

And because vectors can be multiplied by scalars, we can suddenly write

$$
2P-Q + 3v
$$

Because $P-Q$ is a vector and vectors can be multiplied by scalars

---

# Coordinate Free Geometry

A box is a box regardless of any coordinate system. 

Thus, we don't need a coordinate system to specify a point or a vector.

I repeat, vectors don't need to have a position and can exist outside a coordinate system

---

## Coordinate Free Geometry

<img class="mx-auto w-1/2" src="./images/day_09/fig6.png" alt="Coordinate system">

In this example, we have a coordinate system defined by two axes, an origin, and a simple geometric object, a box

Assume that the lower-left of the square is (1, 1) and because the square is orthogonal (has right angles), we can define the other points in relation to that point

And assuming that it's two units wide and tall, we can define the other points as (3, 1), (1, 3), and (3, 3)

---

## Coordinate Free Geometry

What if we removed the axes?

We can no longer specify the points as (1, 1), (3, 1), (1, 3), and (3, 3) because we don't have a coordinate system

However, the relationships between the points remain

The lower-left point is still two units away from the lower-right point and two units away from the upper-left point

<img class="mx-auto w-1/2" src="./images/day_09/fig7.png" alt="Coordinate system">

It's still a square

---

# Vector, Affine, and Euclidean Spaces

Sets of objects with defined relationships and operations

Mathematical sets each have different ways of manipulating the elements of the set, and by treating points and vectors as elements of different sets, we can use mathematical operations to manipulate them

Primarily, we'll be talking about vector spaces, and their extensions, affine and euclidean spaces.

---

## Scalar field

Before we can define a vector space, we need to define a scalar field

A scalar field is a set of scalars (real numbers) with two operations, addition and multiplication, that obey a set of rules

Essentially regular arithmetic with real and complex numbers

---

## Vector field (linear)

The most important mathematical space we care about is the vector space, often called the linear space

A vector space has two types, vectors and scalars

In addition to the rules for combining scalars within a vector space, we can combine scalars and vectors using scalar multiplication and we can combine vectors using vector addition 

But in linear space, we don't have a way of measuring the quantity of a vector

Because a vector in vector space is simply an algebraic structure that obeys a set of rules

---

## Euclidean Space

To get a measure of a vector, we need to extend the vector space to a Euclidean space.

And in a Euclidean space, the measure of a vector can be measured using its length

---

## Affine Space

And affine space is an extension of a vector space that includes points, it does this by adding operations for point-vector addition and point-point subtraction

While there are no operations between two points or a point and a scalar, in an affine space, we can add a vector to a point to get a new point and we can subtract one point from another to get a vector

---

## Summary of Spaces

In these abstract spaces, vectors in a vector space are defined independently of any coordinate system

They are simply an "arrow" with a direction and a magnitude. Without a coordinate system and a basis, without their implementation, vectors are simply an abstract object that obeys a set of rules

This let's us use these abstract objects to define geometric objects irrespective of any coordinate system, and more importantly,

Allow us to convert between different coordinate systems and representations freely

---

# Abstract Data Types
Type defined by behavior

As computer scientists however, we usually work with these spaces through the creation of Abstract Data Types (ADT)

Abstract data types are types defined by their behavior, the operations that can be performed on them, and the rules that those operations obey. But the implementation of those operations is not defined

For a concrete example, consider a list, a list is an abstract data type that has operations like adding an element, removing an element, and checking if an element is in the list

However, the implementation of those operations can vary widely between modules and programming languages, but they are all called lists 

---
layout: two-cols
---

## Geometric ADT

So as computer scientists, we ideally want to define points and vectors as abstract data types

```c
vector u, v;
point p, q;
scalar a, b;
q = p + a * v;
```

Where each of these has standard operations regardless of their implementation

::right::
In languages like C++, we can use operator overloading to make these operations look like standard arithmetic

But in JavaScript we can simply use the functions you've already been using which implement these operations

```javascript
var p = new Point;
var q = new Point;
var a = new Scalar;
var v = new Vector;
q = p.add(v.mult(a));
```

---

## Geometric ADT

The first step to creating these ADTs is to first look at the abstract mathematical spaces that define the behavior of these types

And from there, we get 3 main types

1. Scalars - real numbers
2. Points - locations in space
3. Vectors - directed line segments

And all of these obey the rules set by an affine space.

---

## Notation

Before we continue however, we need to define some notation that we'll be using for the rest of this section

1. Greek letters $\alpha, \beta, \gamma, ...$ will be used to denote scalars;
2. uppercase letters $A, B, C, ...$ will be used to denote points;
3. lowercase letters $a, b, c, ...$ will be used to denote vectors.

Note that we have not implemented any reference system yet, so this notation is for representing the abstract mathematical objects 

But once we implement these objects, we'll be using boldface notation $\textbf{b}$ to denote vectors with a reference system

---

## Notation

And from that notation, we can define formulas we already know to this format

$$
|\alpha v| = |\alpha| |v|
$$

Which defines the magnitude of a vector $v$ as a real number denoted by $|v|$, used in a scalar operation with a scalar $\alpha$

---
layout: two-cols
---

## Point to Vector

To relate points and vectors, we have the subtraction and addition

$$
v = P - Q
$$

Where the vector $v$ is the displacement from point $Q$ to point $P$, so the points $P$ and $Q$ define the vector $v$

::right::

And 

$$
P = Q + v
$$

Where the point $P$ is the result of displacing point $Q$ by vector $v$

<img class="mx-auto w-1/2" src="./images/day_09/fig8.png" alt="ponit point subtraaction">

---

## Vector vector

And because $P - Q$ is a vector, this allows us to use the head-to-tail rule to visualize two points being subtracted

<img class="mx-auto w-1/2" src="./images/day_09/fig9.png" alt="point subtraction vector">

Where

$$
P-R = (Q-R) + (P-Q) \\
\text{or} \\
u + v = u + v
$$

---

## Summary

The reason for going into detail for those operations is that these operations are the only operations we can do with points and vectors, and these operations also need to be implemented in our ADTs

These are the basic operations that we will be repeating over and over again in more advanced operations

---
layout: two-cols
---

## LineLines

The sum of a point and a vector leads to the notion of a line in affine space.

Consider all points in the function 

$$
P(\alpha) = P_0 + \alpha d
$$

Where:
- $P_0$ is an arbitrary point
- $d$ is an arbitrary vector (lowercase), and
- $\alpha$ is a scalar (Greek letter)

Given this formula, and the rules set by an affine space, we can see that this formula defines a line

::right::

<img class="mx-auto w-1/2" src="./images/day_09/fig10.png" alt="line">

This is called the parametric form of the line $(P, P\alpha)$, because by varying the *parameter* $\alpha$, we can get all the points on the line defined by point $P_0$ and direction $d$

A *ray* of infinite length, which is incredibly useful in computer graphics

---

## Affine Sums

In affine space, the addition of two vectors, multiplication of a vector by a scalar, and the addition of a vector and a point, are defined

But the addition of two points and the multiplication of a point by a scalar are not 

So in affine space, there is an operation defined as the **affine sum**

Where for any point $Q$, vector $v$, and scalar $\alpha$

$$
P = Q + \alpha v
$$

Describes all points on the line from $Q$ in the direction of $v$

---
layout: two-cols
---

## Affine sums

And because we can always find a point $R$ such that 

$$
v = R - Q;
$$

We can rewrite the affine sum as

$$
\begin{align*}
P &= Q + \alpha (R-Q) \\
&= \alpha R + (Q - \alpha Q) \\
&= \alpha R + (1 - \alpha) Q
\end{align*}
$$

::right::

Read as: There exists a point $P$ which is an addition of the point $Q$ and vector defined by the points $R$ and $Q$ scaled by the scalar $\alpha$

or

There exists a point $P$ which is the point $R$ scaled by $\alpha$ and the point $Q$ scaled by $(1 - \alpha)$

---
layout: two-cols
---

## Affine sums

thus

$$
P = \alpha_1 R + \alpha_2 Q
$$

where

$$
\alpha_1 + \alpha_2 = 1
$$

::right::

<img class="mx-auto w-3/4" src="./images/day_09/fig11.png" alt="affine sum">


---

# Convexity
in the context of affine sums

If you recall, a **convex** object is one for which any point lying on the line segment connecting any two points belonging to the object also belongs to the object.

Essentially, given any two points of an object, any points on the line between those two points must be **inside** the object

We can use affine sums to give us a mathematical way of convexity

Given that the affine sum where $0 \leq \alpha \leq 1$ describes all points on the line segment between points $Q$ and $R$. We can extend that to include objects defined by n points $P_1, P_2, ..., P_n$

Where this sum is only valid if $\alpha_1 + \alpha_2 + ... + \alpha_n = 1$

---
layout: two-cols
---

## Convexity

Concretely, this means that by calculating the affine sum of a number of points, we can determine if a point is inside the **convex hull** of those points

As long as the additional condition

$$
\alpha_i \geq 0, \space i =  1, 2, ..., n,
$$

is met.

The convex hull being the smallest convex object that contains all the points

::right::

<img class="mx-auto w-3/4" src="./images/day_09/fig12.png" alt="convexity">

This is useful once we start designing curves and surfaces, however, for now, just understand that this is a property of affine sums in abstract

---
layout: two-cols-header
---

# Dot and Cross Products
Vector angle relationships

Many geometric concepts relating the *orientation between two vectors* are in terms of the **dot** and **cross** products

This is useful in graphics primarily in determining angles between vectors, and in determining normals to surfaces.

Specifically, the dot product is useful in determining how much two vectors point in the same direction, and the cross product is useful in determining a vector that is perpendicular to two other vectors

Or in an example, the dot product is useful in determining how much light hits a surface, and the cross product is useful in determining the normal to a surface for lighting calculations
$
---

## Dot Product

The dot product, (inner angle) is a measure of how much two vectors point in the same direction

Where if 

$$
u \cdot v = 0
$$

Then the vectors are orthogonal (perpendicular) in euclidean space

and if

$$
u \cdot v = 1
$$

Then the vectors point in the same direction (assuming they are unit vectors)

---
layout: two-cols
---

## Dot product

It's calculated as the product of the magnitudes of the two vectors and the cosine of the angle between them

$$
\cos \theta = \frac{u \cdot v}{|u| |v|} \\
\text{or} \\
u \cdot v = |u| |v| \cos \theta \\
$$

<small>Where $\theta$ is the angle between the two vectors</small>

Algebraically, the dot product can also be calculated as

$$
u \cdot v = u_x v_x + u_y v_y + ... + u_n v_n
$$

::right::

<img class="mx-auto w-3/4" src="./images/day_09/fig13.png" alt="dot product">


---
layout: two-cols
---

## Cross Product

A cross product, (outer angle) produces a vector perpendicular to both.

Which means, unlike the dot product which is defined for any *n*-dimensional space, the cross product is only defined in three-dimensional space

$$
w = u \times v
$$

this gives us the vectors $u$, $v$, and $w$ which are all mutually orthogonal, and where $w$ is perpendicular to both $u$ and $v$

::right::
<img class="mx-auto w-3/4" src="./images/day_09/fig14.png" alt="cross product">

---

## Cross Product

Note that the $\times$ symbol is used to denote the cross product, and is not multiplication

so 
$$
w_x = u_y v_z - u_z v_y \\ 
w_y = u_z v_x - u_x v_z \\
w_z = u_x v_y - u_y v_x
$$

But it can also be calculated geometrically as 

$$
w = u \times v = |u| |v| \sin \theta n
$$


---

# Planes

An extension of the parametric line

A plane in an affine space can be defined as a direct extension of the parametric line

We know that three points not on the same line determines a unique plane

Now imagine three points $P$, $Q$, and $R$ in affine space. The line segment that joins $P$ and $Q$ is the set of points of the form

$$
S(\alpha) = \alpha P + (1 - \alpha) Q, \space 0 \leq \alpha \leq 1
$$

<small>(from affine sums)</small>

---
layout: two-cols
---

## Planes

Now imagine an abritrary point on the line and form a line segment from this point to the point $R$

And using a second parameters $\beta$, we can describe the points along this line as

$$
T(\beta) = \beta S + (1 - \beta) R, \space 0 \leq \beta \leq 1
$$

::right::
<img class="mx-auto w-3/4" src="./images/day_09/fig15.png" alt="plane">

---

## Planes

And if we remove the restrictions on the range of $\alpha$ and $\beta$ and combine the equations, we get one form of the equation of the plane

$$
T(\alpha, \beta) = \beta[\alpha P + (1- \alpha)Q] + (1 - \beta) R
$$

Then rearranging gives us

$$
T(\alpha, \beta) = \alpha \beta P + (1 - \alpha)(Q - P) + (1 - \beta)(R - P)
$$

And since $Q-P$ and $R-P$ are vectors, we can rewrite this as

$$
T(\alpha, \beta) = P_0 + \alpha u + \beta v
$$

Which is the parametric form of a plane, where $P_0$ is an arbitrary point on the plane, and $u$ and $v$ are two non-parallel vectors lying on the plane

---

## Planes

Don't worry, we won't be working with these formulas directly, but it's important to understand that these formulas exist and that they are derived from the same operations we've been discussing

And once we do start using these formulas (mostly for clipping), we'll have more concrete examples

---

# This is the End of the slides for now, summary

## Math foundations
- scalars, points, and vectors
- abstract definitions (math) vs implementations (code)

## Scalars
- real numbers with standard arithmetic operations

## Points
- locations in space, no size or shape

---

# Summary (cont)

## Vectors
- directed line segments with magnitude and direction
- same direction and magnitude are identical, regardless of position

## Vector operations *
- scalar multiplication: changes magnitude, same direction
- vector addition: head-to-tail rule
- vector inversion: multiply by -1, leads to zero vector
- point-vector addition: displaces a point by a vector
- point-point subtraction: gives vector from one point to another

---

# Summary (cont)

## Spaces
- scalar field: set of scalars with addition and multiplication
- vector space: vectors and scalars with addition and scalar multiplication
- euclidean space: adds measurement (vector length, and angles)

## Affine sums
- combination of points and vectors with coefficients summing to 1
- $P = \alpha R + (1 - \alpha) Q$ gives a line segment between Q and R
- extended to multiple points for convex combinations

---

# Summary (cont)

## Convexity
- a set is convex if line segments between any two points remain inside the set
- Convex hull: smallest convex set containing all points
- expressed using affine sums with non-negative coefficients

## Dot Product *
- measures alignment of two vectors
- $u \cdot v = |u| |v| \cos \theta$
- algebraic form: $u \cdot v = u_x v_x + u_y v_y + ... + u_n v_n$
- applications: angles, projections, lighting

---

## Cross Product *
- defined only in 3D
- produces a vector perpendicular to two input vectors

$$
w = u \times v, \space
\left\{
\begin{align*}
w_x = u_y v_z - u_z v_y \\
w_y = u_z v_x - u_x v_z \\
w_z = u_x v_y - u_y v_x
\end{align*}
\right\}
$$
- applications: normals, surface orientation

---

# Summary (cont)

## Planes
- extensions of lines into 2D **span**
- defined by 3 non-collinear points
- parametric form: $T(\alpha, \beta) = P_0 + \alpha u + \beta v$
- basis for clipping, intersections, geometry

---

# Ignore everything after this

---



# Three Dimensional Primitives

---

# Coordinate Systems and Frames

---

## Basis Vectors

---

## Origin

---

## Representations

---

## Changing Coordinate Systems

---

## Example: changing representations

---

## Homogeneous Coordinates

---

## Example: Change in frames

---

## Working with Representations

---

# Frames in WebGL

---

# Matrix and Vector Types

