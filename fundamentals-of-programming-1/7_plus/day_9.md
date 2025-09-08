---
title: 9 Functions as Objects
exportFilename: 9 Functions as Objects
---

# Functions as Objects

---

## Recap


```python
def is_even(x):
    """
    Input: x, a positive integer
    Returns True if x is even, False otherwise
    """
    return x % 2 == 0
```

1. what is the function name?
2. where is the docstring?
3. what is the input?
4. what is the output?
5. where is the body of the function?
6. where is the return value?

---

## Recap

what is this code doing:

```python {all|1|2|all}
x = is_even(54)
print(x)
```

---

## Recap

What is printed if you run this code?

````md magic-move
```python {all|1-2|3-4|all}
def add(x, y):
    return x + y
def mult(x, y):
    return x * y

add(1,2)
print(add(3,4))
mult(3,4)
print(mult(5,6))
```

```python {6}
def add(x, y):
    return x + y
def mult(x, y):
    return x * y

add(1,2)
print(add(3,4))
mult(3,4)
print(mult(5,6))
```

```python {1-2}
def add(1, 2):
    return 1 + 2
def mult(x, y):
    return x * y

add(1,2)
print(add(3,4))
mult(3,4)
print(mult(5,6))
```

```python {6}
def add(x, y):
    return x + y
def mult(x, y):
    return x * y

3
print(add(3,4))
mult(3,4)
print(mult(5,6))
```

```python {7,1-2}
def add(3, 4):
    return 3 + 4
def mult(x, y):
    return x * y

3
print(add(3,4))
mult(3,4)
print(mult(5,6))
```

```python {7}
def add(x, y):
    return x + y
def mult(x, y):
    return x * y

3
print(7)
mult(3,4)
print(mult(5,6))
```

```python {8,3-4}
def add(x, y):
    return x + y
def mult(3, 4):
    return 3 * 4

3
print(7)
mult(3,4)
print(mult(5,6))
```

```python {8}
def add(x, y):
    return x + y
def mult(x, y):
    return x * y

3
print(7)
12
print(mult(5,6))
```
```python {9,3-4}
def add(x, y):
    return x + y
def mult(5, 6):
    return 5 * 6

3
print(7)
12
print(mult(5,6))
```

```python {all}
def add(x, y):
    return x + y
def mult(x, y):
    return x * y

3
print(7)
12
print(30)
```
````

---
layout: two-cols
---

## Return

- return only has meaning inside a function
- only one return executed inside a function
- code inside function but after return is not executed
- has a value associated with it, given to the function caller

::right::

## Print

- can be used outside functions
- can execute many print statements inside a function
- code inside function can be executed after a print statement
- has a value associated with it, outputted to the console
- print expression itself returns `None` value

---

# Functions as a support of modularity

```python {all|1|2-5|7|8-11|12|7-12|13|all}
def bisection_root(x):
    epsilon = 0.01
    low = 0
    high = x
    ans = (high + low) / 2.0

    while abs(ans**2 - x) >= epsilon:
        if ans**2 < x:
            low = ans
        else:
            high = ans
        ans = (high + low) / 2.0
    return ans
```

---

## Functions as a support of modularity

So to get the square root of 25, we can just call:

```python
print(bisection_root(25))
```

This is now a black box, with a specified input, and an output that changes based on the input

---
layout: two-cols
---

## Zooming out and scope

```python {1-6|8|9}
def sum_odd(a, b):
    sum_of_odds = 0
    for i in range(a, b+1):
        if i % 2 == 1:
            sum_of_odds += i
    return sum_of_odds

low = 2
high = 7
my_sum = sum_odd(low, high)
```

::right::

## Variables
<tbody>
    <tr>
        <td>sum_odd</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>low</td>
        <td>2</td>
    </tr>
    <tr>
        <td>high</td>
        <td>7</td>
    </tr>
    <tr>
        <td>my_sum</td>
        <td></td>
    </tr>
</tbody>

---
layout: two-cols
---

## Zooming out and scope

```python {10}
def sum_odd(a, b):
    sum_of_odds = 0
    for i in range(a, b+1):
        if i % 2 == 1:
            sum_of_odds += i
    return sum_of_odds

low = 2
high = 7
my_sum = sum_odd(low, high)
```

::right::

## Variables
<tbody>
    <tr>
        <td>sum_odd</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>low</td>
        <td>2</td>
    </tr>
    <tr>
        <td>high</td>
        <td>7</td>
    </tr>
    <tr>
        <td>my_sum</td>
        <td>15</td>
    </tr>
</tbody>

---
layout: center
---

# Function scope

---

## How does python execute a function

Python creates an *entirely new environment* with every function call
- essentially a mini program
- it runs with its own set of variables
- it does the work (body)
- it returns a value
- then the environment is destroyed

---

## Environments

- Global environment
  - created when program starts
  - holds all global variables
  - holds function definitions

And invoking a function creates a new environment (scope)

---

## Variable Scope

- *formal parameters/arguments* get bound to the value of *input parameters*
- *scope* is a mapping of names to objects
    - it defines which variables have which values
- expressions in bodies of a function evaluate with respect to the function's scope

```python {all|1|6|}
def f(x):
    y = x + 1
    return y

y = 3
z = f(y)
```
