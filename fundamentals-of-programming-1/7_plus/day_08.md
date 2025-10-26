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
layout: center
---

# Functions

- reusable pieces of code
- capture steps of a computation so that we can use with any input
- a function is just regular *code written in a special way* that makes them reusable

---

## Functions

- defining a function tells python some code now exists in memory
- functions are only useful when they are `run` or `called` or `invoked` (same thing)
- you can write a function once but you can then use it many times


Think of a file in your computer
- you create/download it once
- it only runs if you open the file itself
- and you can run it many times

---

## Function characteristics

1. a name
2. 0 or more inputs, usually called *parameters* or *arguments*
3. a *docstring* (optional but recommended)
    - a comment that's started and ended by `"""` (triple double quotes) that provide the specifications for the function
4. a body (code to be executed)
5. a return (optional)
    - the shape of the what the function will evaluate to

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

## How to think about writing a function

1. The first step in creating a function is to understand *what* the problem is

In our example, what was the problem it was trying to solve? 

---

## How to think about writing a function

```python
def is_even(i):
    """
        Input: i, a positive int
        Returns True if i is even, otherwise False
    """
```

---

## Exercise

Given the problem: I want to get the absolute value of a number

1. What is the name of the function?
2. What are the inputs?

```
def _______( ________ ):
    """
        Input: __________
        Returns __________
    """
```

---

## How to think about writing a function

2. How would you solve the problem *without* writing a function?

This is just regular programming

```python
def is_even(i):
    if ________:
        _________
    else:
        _________
```

---

# We only have a function object at this point
Like how numbers are objects, strings are objects

Functions are also objects, and until we call them, they just sit in memory

---

## How to invoke a function

```python
is_even(4)
```

That's it

---

## How to invoke a function

That line of code does the following
1. Python looks for a function named `is_even` in memory
2. It then runs the code inside the function body, using `4` as the value for `i`
3. When the function hits a `return` statement the function gives that data back to the caller
4. The function call `is_even(4)` evaluates to the value that was returned

A function is just a bundle of expressions

Because it's an expression, it evaluates to something

---

## How to invoke a function

````md magic-move
```python {all|7}
def is_even(i):
    if i % 2 == 0:
        return True
    else:
        return False

is_even(4)
```
```python {7,1|1|all}
def is_even(i = 4): # I becomes what the caller provides
    if i % 2 == 0:
        return True
    else:
        return False

is_even(4)
```
```python {3|7}
def is_even(i):
    if i % 2 == 0:
        return True
    else:
        return False

is_even(4)
```
```python {7}
def is_even(i):
    if i % 2 == 0:
        return True
    else:
        return False

True
```
````

---

## How to invoke a function

False by itself isn't very useful

It only becomes useful when we do something with it

````md magic-move
```python
def is_even(i):
    return i % 2 == 0

for number in range(20):
    if is_even(number):
        print(number, "is even")
    else:
        print("something else")
```
```python
def is_even(i):
    return i % 2 == 0

for 0 in range(20):
    if is_even(number):
        print(number, "is even")
    else:
        print("something else")
```
```python
def is_even(i):
    return i % 2 == 0

for 0 in range(20):
    if is_even(0):
        print(0, "is even")
    else:
        print("something else")
```
```python
def is_even(0):
    return 0 % 2 == 0

for 0 in range(20):
    if is_even(0):
        print(0, "is even")
    else:
        print("something else")
```
```python
def is_even(0):
    return 0 == 0

for 0 in range(20):
    if is_even(0):
        print(0, "is even")
    else:
        print("something else")
```
```python
def is_even(0):
    return True

for 0 in range(20):
    if is_even(0):
        print(0, "is even")
    else:
        print("something else")
```
```python
def is_even(i):
    return i % 2 == 0

for 0 in range(20):
    if True:
        print(0, "is even")
    else:
        print("something else")
```
```python
def is_even(i):
    return i % 2 == 0

for 0 in range(20):
    if True:
        None
    else:
        print("something else")
```
````

---

## How to invoke a function

False by itself isn't very useful

It only becomes useful when we do something with it

```python
def is_even(i):
    return i % 2 == 0

for number in range(20):
    if is_even(number):
        print(number, "is even")
    else:
        print("something else")
```

---

## Exercise

Write code that satisfies the following specs

```python
def div_by(n, d):
    """
    n and d are integers > 0
    Returns True if d divides n evenly, and False otherwise
    i.e. n=4, and d=2 returns True because 4/2 = even number, 
    and n=5, and d=2 returns False because 5/2 = not even number
    """
```

---
layout: center
---

# Don't write code right away

---
layout: center
---

## Example

Say we want to add all the odd integers between and including a and b

1. What is the input (what are the values for a and b)
2. what is the output (what do we give back)

With that we can know that 

```python
def sum_odd(a, b):
    # some code here
    return sum_of_odds
```

---

To actually write the program

## Start on paper first


Imagine the scenario with a set input and output

Let's say `a = 2` and `b = 4`

<!-- sum should be 3 -->

---

To actually write the program

## Start on paper first

What if `a = 2` and `b = 7`

<!-- sum should be 15 -->

---

## Solve a similar problem

The next step, after figuring it out on paper, is to look for a similar problem that you know how to solve in code

For example:
- Add all numbers between and including a and b
- and start with that

---

## Solve a similar problem

- We know that that's a loop
- for or while, either works
- We'll be using a both

---
layout: two-cols
---

`for`
```python {all|2|3-4|5|7|all}
def sum_odd(a, b):
    sum_of_odds = 0
    for i in range(a, b):
        sum_of_odds += 1
    return sum_of_odds

print(sum_odd(2, 4))
```

::right::

`while`
```python {all|2|3-6|7|9|all}
def sum_odd(a, b):
    sum_of_odds = 0
    i = a
    while i <= b:
        sum_of_odds += 1
        i += 1
    return sum_of_odds

print(sum_odd(2, 4))
```

---
layout: center
---

## Solve a similar problem

But we don't get the results we want

---
layout: two-cols
---

## DEBUG!
add print statements to see what's happening in your code

`for`
```python 
def sum_odd(a, b):
    sum_of_odds = 0
    for i in range(a, b):
        sum_of_odds += 1
        print(i, sum_of_odds)
    return sum_of_odds

print(sum_odd(2, 4))
```

::right::

`while`
```python 
def sum_odd(a, b):
    sum_of_odds = 0
    i = a
    while i <= b:
        sum_of_odds += 1
        print(i, sum_of_odds)
        i += 1
    return sum_of_odds

print(sum_odd(2, 4))
```

---

## DEBUG!
Fix the problem in the for loop

`for`
```python 
def sum_odd(a, b):
    sum_of_odds = 0
    for i in range(a, b+1):
        sum_of_odds += 1
    return sum_of_odds

print(sum_odd(2, 4))
```

::right::

`while`
```python 
def sum_odd(a, b):
    sum_of_odds = 0
    i = a
    while i <= b:
        sum_of_odds += 1
        i += 1
    return sum_of_odds

print(sum_odd(2, 4))
```

---
layout: center
---

# We now have code that adds all numbers

Now figure out how to do the odd part

---
layout: two-cols
---

`for`
```python 
def sum_odd(a, b):
    sum_of_odds = 0
    for i in range(a, b+1):
        if i % 2 == 1:
            sum_of_odds += 1
    return sum_of_odds

print(sum_odd(2, 4))
```

::right::

`while`
```python 
def sum_odd(a, b):
    sum_of_odds = 0
    i = a
    while i <= b:
        if i % 2 == 1:
            sum_of_odds += 1
        i += 1
    return sum_of_odds

print(sum_odd(2, 4))
```

---

# Observations

1. Do the problem on paper first
2. solve a similar problem if possible first
3. test code often, using print statements 
4. You can also test code with thonny, going line by line

---

# Summary

1. functions allow us to `suppress detail` from a user
2. functions capture computation within a `black box`
3. A programmer writes functions with
- 0 or more `inputs`
- something to `return` (sometimes)
4. a function `only runs when it is called`
5. the entire function call is replaced with the return value

