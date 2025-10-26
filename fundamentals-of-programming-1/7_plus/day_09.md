---
title: 9 Functions as Objects
exportFilename: 9 Functions as Objects
lineNumbers: true
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

```python {all|1-3|5|6|all}
def f(x):
    x = x + 1
    return x

x = 3
z = f(x)
```

---
layout: two-cols
---

## After line 3

```python {1-3}
def f(x):
    x = x + 1
    return x

x = 3
z = f(x)
```

::right::
### Global Scope

<tbody>
    <tr>
        <td>f</td>
        <td>function object</td>
    </tr>
</tbody>

---
layout: two-cols
---

## After line 5

```python {5}
def f(x):
    x = x + 1
    return x

x = 3
z = f(x)
```

::right::
### Global Scope

<tbody>
    <tr>
        <td>f</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>x</td>
        <td>3</td>
    </tr>
</tbody>

---
layout: two-cols
---

## During line 6

```python {6}
def f(x):
    x = x + 1
    return x

x = 3
z = f(x)
```

::right::
### Global Scope

<tbody>
    <tr>
        <td>f</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>x</td>
        <td>3</td>
    </tr>
</tbody>

---
layout: two-cols
---

## During line 6

```python {6,1-3}
def f(x):
    x = x + 1
    return x

x = 3
z = f(x)
```

::right::
### Global Scope

<tbody>
    <tr>
        <td>f</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>x</td>
        <td>3</td>
    </tr>
</tbody>


### Function Scope (inside f)
<tbody>
    <tr>
        <td>x</td>
        <td>3</td>
    </tr>
</tbody>

---
layout: two-cols
---

## During line 6

```python {5}
def f(x):
    x = x + 1
    return x

y = 3
z = f(y)
```

::right::
### Global Scope

<tbody>
    <tr>
        <td>f</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>y</td>
        <td>3</td>
    </tr>
</tbody>


### Function Scope (inside f)
<tbody>
    <tr>
        <td>x</td>
        <td>3</td>
    </tr>
</tbody>


---
layout: two-cols
---

## inside the function

```python {1-3|2}
def f(x):
    x = x + 1
    return x

y = 3
z = f(y)
```

::right::
### Global Scope

<tbody>
    <tr>
        <td>f</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>y</td>
        <td>3</td>
    </tr>
</tbody>


### Function Scope (inside f)
<tbody>
    <tr>
        <td>x</td>
        <td>3</td>
    </tr>
</tbody>

---
layout: two-cols
---

## inside the function

```python {1-3}
def f(x):
    x = x + 1
    return x

y = 3
z = f(y)
```

::right::
### Global Scope

<tbody>
    <tr>
        <td>f</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>y</td>
        <td>3</td>
    </tr>
</tbody>


### Function Scope (inside f)
<tbody>
    <tr>
        <td>x</td>
        <td>4</td>
    </tr>
</tbody>

---
layout: two-cols
---

## back outside the function

```python {6}
def f(x):
    x = x + 1
    return x

y = 3
z = f(y)
```

::right::
### Global Scope

<tbody>
    <tr>
        <td>f</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>y</td>
        <td>3</td>
    </tr>
    <tr>
        <td>z</td>
        <td>4</td>
    </tr>
</tbody>


### Function Scope (inside f)

- `f(y)` gets replaced by return value `4` 
- the scope gets destroyed
<tbody>
    <tr>
        <td>x</td>
        <td>4</td>
    </tr>
</tbody>

---
layout: two-cols
---

## Variable scope

```python
def f(x):
    x = x + 1
    return x

y = 3
z = f(y)
```

::right::
### Global Scope

<tbody>
    <tr>
        <td>f</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>y</td>
        <td>3</td>
    </tr>
    <tr>
        <td>z</td>
        <td>4</td>
    </tr>
</tbody>

---
layout: two-cols
---

## Exercise

```python
def f(y):
    x = 1
    x += 1
    print(x)
x = 5
f(x)
print(x)
```

::right::

<tbody>
    <tr>
        <td>f</td>
        <td>________ ______</td>
    </tr>
    <tr>
        <td>x during line 5</td>
        <td>__</td>
    </tr>
    <tr>
        <td>x during line 6</td>
        <td>__</td>
    </tr>
    <tr>
        <td>x after line 7</td>
        <td>__</td>
    </tr>
</tbody>

---
layout: two-cols
---

## Other examples

You can access a variable defined outside the function
```python
def g(y):
    print(x)
    print(x + 1)
x = 5
g(x)
print(x)
```

::right::
But you can't change it

```python
def h(y):
    x += 1
x = 5
h(x)
print(x)
```

---

# Higher order procedures

- Objects in Python have a type
    - int, float, str, boolean, NoneType, function
- objects can appear in the right hand side of assignment statement
    - bind a name to an object
- Objects
    - can be used as an argument to a procedure/function
    - can be returned as a value from a procedure
- Functions are _____

---
layout: center
---

# We can treat functions just like any other object
- can be arguments to another function
- can be returned by another function

---
layout: two-cols
---

## Function as an object

```python
def calc(op, x, y):
    return op(x, y)

def add(a, b):
    return a + b

def div(a, b):
    if b != 0:
        return a/b
    print("division by zero!")

res = calc(add, 2, 3)
```

::right::

Program scope
<tbody>
    <tr>
        <td>calc</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>add</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>div</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>res</td>
        <td></td>
    </tr>
</tbody>

---

## Create calc scope

```python
def calc(op, x, y):
    return op(x, y)

res = calc(add, 2, 3)
```

<div class="flex gap-16">
<tbody>
    <tr>
        <td>Prog Scope</td>
    </tr>
    <tr>
        <td>calc</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>add</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>div</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>res</td>
        <td></td>
    </tr>
</tbody>
<tbody>
    <tr>
        <td>Calc Scope</td>
    </tr>
    <tr>
        <td>op</td>
        <td>Add</td>
    </tr>
    <tr>
        <td>x</td>
        <td>2</td>
    </tr>
    <tr>
        <td>y</td>
        <td>3</td>
    </tr>
</tbody>
</div>

---
layout: center
---

## Run the calc body

````md magic-move
```python
def calc(op, x, y):
    return op(x, y)
```
```python
def calc(add, 2, 4):
    return add(2, 4)
```
````

---

## Define add scope

```python
def calc(add, 2, 4):
    return add(2, 4)

def add(a, b):
    return a + b
```

<div class="flex gap-16">
<tbody>
    <tr>
        <td>Prog Scope</td>
    </tr>
    <tr>
        <td>calc</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>add</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>div</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>res</td>
        <td></td>
    </tr>
</tbody>
<tbody>
    <tr>
        <td>Calc Scope</td>
    </tr>
    <tr>
        <td>op</td>
        <td>Add</td>
    </tr>
    <tr>
        <td>x</td>
        <td>2</td>
    </tr>
    <tr>
        <td>y</td>
        <td>3</td>
    </tr>
</tbody>
<tbody>
    <tr>
        <td>Add Scope</td>
    </tr>
    <tr>
        <td>a</td>
        <td>2</td>
    </tr>
    <tr>
        <td>b</td>
        <td>4</td>
    </tr>
</tbody>
</div>

---
layout: two-cols
---

## Evaluating

```python
def calc(op, x, y):
    return op(x, y)

def add(a, b):
    return a + b

def div(a, b):
    if b != 0:
        return a/b
    print("division by zero!")

res = calc(add, 2, 3)
```

::right::

<div class="flex gap-16">
<tbody>
    <tr>
        <td>Prog Scope</td>
    </tr>
    <tr>
        <td>calc</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>add</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>div</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>res</td>
        <td></td>
    </tr>
</tbody>
<tbody>
    <tr>
        <td>Calc Scope</td>
    </tr>
    <tr>
        <td>op</td>
        <td>Add</td>
    </tr>
    <tr>
        <td>x</td>
        <td>2</td>
    </tr>
    <tr>
        <td>y</td>
        <td>3</td>
    </tr>
</tbody>
<tbody>
    <tr>
        <td>Add Scope</td>
    </tr>
    <tr>
        <td>a</td>
        <td>2</td>
    </tr>
    <tr>
        <td>b</td>
        <td>4</td>
    </tr>
</tbody>
</div>

<style>
.grid-cols-2 {
    grid-template-columns: .5fr 1fr;
}
</style>


---
layout: two-cols
---

## Evaluating

````md magic-move
```python {12|1-2|2|4-5|5}
def calc(op, x, y):
    return op(x, y)

def add(a, b):
    return a + b

def div(a, b):
    if b != 0:
        return a/b
    print("division by zero!")

res = calc(add, 2, 3)
```
```python {5}
def calc(op, x, y):
    return op(x, y)

def add(a, b):
    return 2 + 4

def div(a, b):
    if b != 0:
        return a/b
    print("division by zero!")

res = calc(add, 2, 3)
```
```python {5}
def calc(op, x, y):
    return op(x, y)

def add(a, b):
    return 6

def div(a, b):
    if b != 0:
        return a/b
    print("division by zero!")

res = calc(add, 2, 3)
```
```python {5,1-2}
def calc(op, x, y):
    return 6

def add(a, b):
    return 6

def div(a, b):
    if b != 0:
        return a/b
    print("division by zero!")

res = calc(add, 2, 3)
```
```python {12}
def calc(op, x, y):
    return 6

def add(a, b):
    return 6

def div(a, b):
    if b != 0:
        return a/b
    print("division by zero!")

res = 6
```
````

::right::

<div class="flex gap-16">
<tbody>
    <tr>
        <td>Prog Scope</td>
    </tr>
    <tr>
        <td>calc</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>add</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>div</td>
        <td>function object</td>
    </tr>
    <tr>
        <td>res</td>
        <td><strong>6</strong></td>
    </tr>
</tbody>
<tbody>
    <tr>
        <td>Calc Scope</td>
    </tr>
    <tr>
        <td>op</td>
        <td>Add</td>
    </tr>
    <tr>
        <td>x</td>
        <td>2</td>
    </tr>
    <tr>
        <td>y</td>
        <td>3</td>
    </tr>
</tbody>
<tbody>
    <tr>
        <td>Add Scope</td>
    </tr>
    <tr>
        <td>a</td>
        <td>2</td>
    </tr>
    <tr>
        <td>b</td>
        <td>4</td>
    </tr>
</tbody>
</div>

<style>
.grid-cols-2 {
    grid-template-columns: .5fr 1fr;
}
</style>

---

## Exercise

Trace this function call

```python
def calc(op, x, y):
    return op(x, y)

def div(a, b):
    if b != 0:
        return a/b
    print("division by zero!")

res = calc(div, 2, 0)
```

What is the value of `res` and what get's printed?

make global scope table, and function scope tables

---

## More Exercise

```python
def func_a():
    print("inside func_a")

def func_b(y):
    print("inside func_b")
    return y

def func_c(f, z):
    print("inside func_c")
    return f(z)

print(func_a())
print(5 + func_b(2))
print(func_c(func_b, 3))
```

Starting at line 12

---

## Exercise

Write a function that meets these specs

```python
def apply(criteria, n):
    """
    criteria, a function that takes in a number and returns a boolean
    n, an integer

    Returns how many ints from 0 to n (inclusive) meet the criteria
    (i.e. numbers that return True when a criteria is applied)
    """

def is_even(x):
    """
    x, a positive integer
    returns True if x is even, False otherwise
    """
```

---

# Summary
- functions are objects
    - they have a type
    - can be assigned as a variable
    - can be used as an argument
    - can be returned as a value
- be careful with scopes and environments
    - main program runs in the global
    - function calls each get a new temp environment
