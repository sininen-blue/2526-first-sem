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

## Example

A smartphone

It's a black box which can be viewed in terms of its
- inputs
- outputs

So
- how outputs are related to inputs
- its implementation is "opaque"

---

## Abstraction through the smartphone

Do you know how a smartphone works?
- Most likely not
- but you know how to use it
- you *don't need to know how it works* to use it

The only thing the user knows is the interface
- it converts a sequence of screen touches and sounds into expected output

The only thing you know is the *relationship* between inputs and outputs 

---

## Abstraction enable decomposition

- 100's of distinct parts
- designed and made by different companies
    - each of those companies don't communicate with each other
    - and sometimes they don't make the same subparts
- each component make has to know *how its component interfaces* with other components
- each component maker can *solve sub-problems independent of other* parts, as long as they provide the expected inputs
- True for both hardware and software

---
layout: center
---

# Apply abstraction (black box) and decomposition (split into self-contained parts) to programming

---

## Suppress details with abstraction

- In programming, want to think of piece of code as *black box*
    - hide tedious coding details from the user
    - reuse it at different parts
- coder creates details and designs interface
- user does not need or want to see details

User in this case is you, the programmer

---

## Suppress details with abstraction

- Programmers achieve this abstraction mainly with `functions`
- and you have already been using functions
- a function lets us capture code within a black box
    - where we only care about the inputs and outputs

```python
max(1, 4)
abs(-3)
len("hello world")
```

---

## Suppress details with abstraction

- A function has *specifications*, captured using *doctrings*
- think of a *docstring* as a "contract" between you the programmer, and you the future programmer
    - if user provides input that satisfied stated conditions, function will produce output according to specs, including indicated side effects
    - not typically enforced in python, but user relies on past programmers work satisfying the contract

```python
abs(-3)
```

```python
def abs(x):
# Return the absolute value of the argument
```

---

## create structure with decomposition

- given the idea of a black box abstraction, use it to *divide code into modules* that are
    - *self contained*
    - and intended to be *reusable*
- modules are used to:
    - *break up* code into logical pieces
    - keep code *organized*
    - keep code *coherent* (easy to understand)
- we do this through `functions`
- maybe `classes` later, depending on how far we can get

---

# Functions

- reusable pieces of code
- capture steps of a computation so that we can use with any input
- a function is just regular *code written in a special reusable*

---

## Functions

- defining a function tells python some code now exists in memory
- functions are only useful when they are *run* or *called* or *invoked* (same thing)
- you write a function once but you can then use it many times
- it's like code inside a file, it only runs when you hit the run button

---

## Function characteristics

- a name
- inputs which can be 0 or more, usually called *parameters* or *arguments*
- a *docstring* (optional but recommended)
    - a commend that's started and ended by `"""` (triple double quotes) that provide the specifications for the function
- a body (code to be executed)
- a return (optional)

---

## Function definition

```python {all|1|2-5|7-11|8,10|all}
def is_even(i):
    """
    Input: i, a positive int
    Returns True if i is even, otherwise False
    """

    if i % 2 == 0:
        return True
    else:
        return False
```

- Where is the name?
- Where are the inputs?
- Where is the docstring?
- Where is the body?
- Where is the return?

---

