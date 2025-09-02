---
title: Decomposition and abstraction
exportFilename: day 8
---

# Decomposition and Abstraction

---

## Recap

- We've covered basic language mechanisms
    - primitives
    - expressions
    - branching
    - iteration
- in principle, you are *done*

## You can build anything computable with these mechanisms

- but I haven't thought you two of the most important concepts in programming

---

## Exercise

Given an input `Temperature` in Celsius, convert it to Fahrenheit and print the result. The formula is:

$$
F = \frac{9}{5}*C + 32
$$

---

### Decomposition

How to divide a program into *self-contained parts* that can be combined to solve the current problem

### Abstraction

How to ignore *unnecessary details*

---

## Decomposition

- Ideally, parts can be *reused* by other programs
- self contained means parts should *complete computation using only inputs provided* to them and "basic operations"
```python
a = 3.14*2.2*2.2
```

```python
pi = 3.14
r = 2.2
area = pi*r**2
```
<!-- each of these is a module, each module is used to form a bigger whole-->

- We have been doing this
- And this let's us read lines of code we wrote weeks or nights ago easier

---

## Abstraction

- used to separate *what* something does, from *how* it does it
- creating parts and abstracting away details allows us to write complex code while *suppressing details*, so what we are not overwhelmed by complexity

```python
calculateAreaOfCircle(radius)
```

---
layout: center
---

We do this to

# Make code easy to create, modify, maintain, and understand

---
