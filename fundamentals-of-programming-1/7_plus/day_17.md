---
title: 17 Refresher on Everything
exportFilename: 16 refresher on everything
lineNumbers: true
---

# Basics

---

## Syntax and Semantics

One is **structure**

- Cat dog boy
- "hi" 5

Incorrect structure

One is **meaning**

- I are hungry
- 5 + "hi"

Correct structure, incorrect meaning

---

## Errors

This also means there are similar types of errors
- **styntactic errors** - structure problems
- **semantic errors** - meaning problems

And **logical errors** - meaning is correct, but the program doesn't do what you want

---

## Objects

**Objects** are the basic building blocks of python programs, sometimes also referred to as **primitive types**

---

### Categories

Roughly they can be categorized into two main sets

**Scalar types** - things that *can't* be broken down further, and

**Non-scalar** types - things that *can* be broken down further

---

### Types

These categories include the following types
- int
- float
- bool
- NoneType

Which function can you use in python to check the type of an object?

---

### Operators

Operators are special symbols that perform operations on one or more objects

These include arithmetic operators like 
- `+`, 
- `-`, 
- `*`, 
- `/`, 

and comparison operators like 

- `==`, 
- `!=`, 
- `<`, 
- `>`, 
- `<=`, 
- `>=`

---

## Expressions

An **expression** is a combination of values, variables, operators, and function calls that can be evaluated to produce another value

Usually in the form of

```
<object> <operator> <object>, like
5 / 3
```

Every expression is **is** a *value* and has a *type*

- `3 + 2`
- `4 / 3`

Python evaluates expressions according to the rules of operator precedence

---

## Variables

A **variable** is a name that refers to a value stored in memory, a **box** with a name and holds a value

To assign a value to a variable, we use the assignment operator `_`


---
layout: center
---

# Strings, Input Output, Branching

---

## Strings

Strings are a sequence of case sensitive characters enclosed in single or double quotes

```python
"this is a string"
'this is also a string'
```

```python
b = “:”
c = “)”
s1 = b + 2*c
f = “a”
g = “ b”
h = “3”
s2 = (f+g) * int(h)
```

What is the value of `s1` and `s2`?

---

## Indexing and Slicing

In order to access specific characters in a string, we can use **indexing** and **slicing**

```python
s1[0]  # first character
s1[-1] # last character

s1[1:4] # characters from index 1 to 3
s1[:3]  # first three characters
s1[2:]  # characters from index 2 to end
s1[4:2:-1] # characters from index 4 to 3 in reverse
```

---

## Immutability

Strings are also **immutable**, meaning that once a string is created, its characters cannot be changed individually

```python
s = "car"

s[0] = "b"  # This will raise an error
```

You need to fully copy and create a new string

```python
s = 'b' + s[1:len(s)]
```

---

## Input and Output

1. What are the functions used to get input from the user and display output to the user in Python?
2. What type of data does the `input()` function return?
3. What function is used to show output to the console in Python?
4. What does the `print()` function return

---

## Branching

Before we can branch, we need to be able to make **comparisons**

```python
some_expression == another_expression
```

Using one, two, or any other number of comparison operators, we can create **conditionals**

Using **local** operators and **comparison** operators.

```python
i > j
i >= j or i == j
i < j and j != 0
```

---

## Conditionals

```python
pset_time = 5
sleep_time = 8
print(sleep_time > pset_time)

drive = True
drink = False
both = drink and drive

print(both)
```

---

## Branching

To actually start branching, we can use `if`, `elif`, and `else` statements

```python
if [condition]:
    # code block if condition is true
elif [another_condition]:
    # code block if another_condition is true
else:
    # code block if none of the above conditions are true
```

---

## Branching

```python
pset_time = 10
sleep_time = 12

if (pset_time + sleet_time) > 24:
	print(“impossible”)

elif (pset_time + sleep_time) >=24:
	print(“full schedule”)

else:
	leftover = abs(24-pset_time-sleep_time)
	print(leftover, “h of free time”)

print(“end of the day”)
```

---

## Nested Branching

```python
x  = float(input("Enter a number for x: "))
y = float(input("Enter a number for y: "))

if x == y:
	print("x and y are equal")

	if y != 0:
		print("therefore, x / y is", x/y)

elif x < y:
	print("x is smaller")

else:
	print("y is smaller")

print("thanks!")
```

---
layout: center
---

# Iteration, loops

---

## While Loops

```python
count = 0 
while count < 5:
    print("count is:", count)
    count += 1
```

*while* the *condition* is true, keep executing the code block

---

## While Loops

```python
x = 4
i = 1
factorial = 1
while i <= x:
    factorial = factorial * i
    i += 1
print("Factorial of", x, "is", factorial)

```

---

## For Loops

Similar to while loops, but used when the number of iterations is known

```python
for n in range(5):
	print(n)
```

---

## For Loops

```python
for i in range(1,4,1):
print(i)

for j in range(1,4,2):
print(j*2)

for me in range(4,0,-1):
print("$"*me)
```

---
layout: center
---

# Algorithms
revisiting some

---

## Exhaustive Enumeration

```python
guess = 0
is_negative = False

x = int(input("Enter a number: "))

if x < 0:
    is_negative = True

while guess**2 < x:
    guess += 1

if guess**2 == x:
    print("The square root of", x, "is", guess)
else:
    print(x, "does not have a perfect square root")

    if is_negative:
        print("This program does not support negative numbers")
```

---

## Approximation

```python
x = 36
epsilon = 0.01
num_guesses = 0
guess = 0.0
increment = 0.0001

while (abs(guess**2 - x) -x) >= epsilon and guess**2 <= x:
    guess += increment
    num_guesses += 1

print("num_guesses =", num_guesses)
if abs(guess**2 - x) >= epsilon:
    print("Failed to find the square root of", x)
else:
    print(guess, "is close to square root of", x)
```

---

## Bisection Search

```python
x = 54321
epsilon = 0.01
num_guesses = 0
low = 0
high = x
guess = (high + low)/2.0
while abs(guess**2 - x) >= epsilon:
    if guess ** 2 < x:
        low = guess
    else: 
        high = guess
    guess = (high + low)/2.0
    num_guesses += 1

print('num_guesses =', num_guesses)
print(guess, 'is close to the square root of', x)
```


---
layout: center
---

# Decomposition and Abstraction

---

## Functions

```python
calculateAreaOfCircle(radius)
```

```python
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
---

## Functions as Objects

When a function is called without the `()` parentheses, it returns the function object itself

```python
def square(x):
    return x * x
f = square
print(f(5))  # prints 25
```

Functions are also just objects, the only difference is that they can be **called**

---
layout: center
---

# Tuples and Lists

---

## Lists

```python
a_list = [] 
b_list = [2, 'A', 4, [1, 2]] 
[1, 2] + [3, 'four']

len(b_list)
b_list[0]
b_list[2] + 1
b_list[3][0]
b_list[4]
i = 2
b_list[i-1]
```

Tuples are exactly like lists, except they are **immutable**

---

## Mutability

The ability of an object to be changed after it is created

```python
a_list = [1, 2, 3]
a_list[0] = 10  # This is allowed

a_tuple = (1, 2, 3)
a_tuple[0] = 10  # This will raise an error

string = "hello"
string[0] = "H" 
```

---
layout: two-cols
---

## List methods

```python
my_list = [3, 1, 4, 1, 5]
my_list.append(9)
my_list.sort()
print(my_list)
my_list.pop()
print(my_list)
```
::right::

```python
L1 = ['re']
L2 = ['mi']
L3 = ['do']
L4 = L1 + L2
L3.append(L4)
L = L1.append(L3)
```

---

## Lists, tuples, and strings, as iterables

```python
for char in "hello":
    print(char)

for num in (1, 2, 3):
    print(num)

for item in [4, 5, 6]:
    print(item)
```

---
layout: center
---

# Dictionaries

---

## Dictionary

One of the most important built-in data types in Python

```python
my_dict = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(my_dict["name"]) 
my_dict["age"] = 31

print(my_dict["age"]) 
```

Accessing values and modifying values use **keys**

It doesn't have an order, can the **value** can be any type, but the **key** must be immutable

---

## Hashing

An object is **hashable** if you can map it to a unique integer value that doesn't change during its lifetime, where that integer corresponds to a position in a block of memory


---
layout: center
---

# Classes

---

## Classes

A **class** is a blueprint for creating objects, which are instances of the class

It's an **object** that has **attributes** and **methods**

```python
class Dog:
    tricks = [] # class variable shared by all instances

    def __init__(self, name, age):
        self.name = name # instance variable unique to each instance
        self.age = age

    def bark(self): # method
        return "Woof!"

fido = Dog("Fido", 3)
print(fido.bark())
```

---

## Namespace

Every class, and every function, creates a new **namespace**

```python
def scope_test():
    def do_local():
        spam = "local spam"

    def do_nonlocal():
        nonlocal spam
        spam = "nonlocal spam"

    def do_global():
        global spam
        spam = "global spam"

    spam = "test spam"
    do_local()
    print("After local assignment:", spam)
    do_nonlocal()
    print("After nonlocal assignment:", spam)
    do_global()
    print("After global assignment:", spam)

scope_test()
print("In global scope:", spam)
```

---
layout: center
---

# Imports

---

## Imports

There are a few main ways to import modules in Python

```python
import math # import math module
print(math.sqrt(16))
```

```python
from math import sqrt # import only sqrt function
print(sqrt(16))
```

```python
from math import * # import all functions from math
print(sqrt(16))
print(cos(0))
```

```python
import math as m # import math module with alias m
print(m.sqrt(16))
```

---
layout: center
---

# Version Control

---

## Git

Git has three main states that your files can reside in

1. **Modified** - you have changed the file but not committed it to your database yet
2. **Staged** - you have marked a modified file in its current version to go into your next commit snapshot
3. **Committed** - the data is safely stored in your local database

---

## Git Commands

The most common git commands are

```
git init
git add <file>
git commit -m "commit message"
git status
git log
git push
```

---

## Github

Github is a web-based platform that uses Git for version control and collaboration

When using `git push`, you are pushing your local commits to a remote repository on Github

---

## Branching

Branching allows you to create separate lines of development in your project

```
git branch <branch-name>
git checkout <branch-name>

git checkout -b <branch-name> # create and switch to new branch
```
