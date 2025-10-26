---
title: 10 tuples and lists
exportFilename: 10 tuples and lists
---

# Tuples and Lists
And also anonymous functions

---

## Recap

```python
def apply(criteria, n):
    count = 0
    for i in range(n+1):
        if criteria(i):
            count += 1
    return count

def is_even(x):
    return x % 2 == 0

def is_five(x):
    return x == 5

print(apply(is_even, 10))
print(apply(is_five, 10))
```

Make the scope tables

---

## Anonymous functions

Sometimes, you don't want to name a function, especially if it's simple and only used once.

```python
def is_even(x):
    return x % 2 == 0
```

This is a good example of a function that can be replaced with an *anonymous* function.

```python
lambda x: x % 2 == 0
```

It's called an *anonymous* function because it doesn't have a name.

It creates a function object, but doesn't bind it to a name.

---

## Anonymous functions

You can use it like this:

```python
apply(lambda x: x % 2 == 0, 10)
```

Where `lambda x: x % 2 == 0` is an anonymous function that takes one argument `x` and returns `x % 2 == 0`.

Lambda is *one-time use*, it can't be reused because ____

---

## Exercise

```python
def do_twice(n, fn):
    return fn(fn(n))

print(do_twice(3, lambda x: x**2))
```

Note:
- top to bottom
- scope tables

---
layout: center
---

# Tuples
New data type

---

## Tuples

- we've seen scalar types: `int`, `float`, `str`, `bool`
- we've also seen one compound type: `string`
- other compound data types include
    - indexed sequences of elements/objects
    - tuples (immutable)
    - lists (mutable)

---

## Tuples

- indexable ordered sequence of objects
    - can be any type, int, string, tuple, tuples of tuples, etc
- cannot change element values **immutable**

```python {1|2|3|4|5|6|7|8|9|10|11}
te = () # empty tuple
ts = (1, 2, 3) # tuple of three integers
tt = (3,) # tuple of one integer, needs comma
tn = (1, "hello", (2, 3)) # tuple of mixed types

tn[0] # evaluates to 1
(2, 3) + (4, "five") # evaluates to (2, 3, 4, "five")
tn[1:2] # evaluates to ("hello",)k
tn[1:3] # evaluates to ("hello", (2, 3))
len(tn) # evaluates to 3
tn[1] = 4 # TypeError, tuples are immutable
```

---

## Indices and slicing

```python
seq = (2, 'a', 4, (1,2)) # what is index 0
```

````md magic-move
```python {1|2|3|4|5}
print(len(seq)) # what is the length
print(seq[3])
print(seq[-1])
print(seq[3][0])
print(seq[4])
```

```python {1|2|3|4|5}
print(seq[1])
print(seq[-2:])
print(seq[1:4:2])
print(seq[:-1])
print(seq[1:3])
```

```python
for item in sequ:
    print(item)
```
````

---

## Tuple uses

Unpacking, which is also a good way of swapping values

```python
x = 10
y = 20
z = x
x = y
y = z
```

```python
x = 10
y = 20
(x, y) = (y, x)
```

---

## Tuples uses

You can also use them to return more than one value from a function

```python
def quotient_and_remainder(x, y):
    q = x // y
    r = x % y
    return (q, r) # one object, multiple values

both = quotient_and_remainder(10, 3)
(quot, rem) = quotient_and_remainder(10, 3)
```

---

## Exercise

```python
def char_counts(s):
    """
    s, a string of lowercase characters

    return a tuple where the first element is the number of vowels in s,
    and the second element is the number of consonants in s.
    """
```

---
layout: center
---

# Lists

---

## Lists

- *Indexable ordered sequence* of objects
    - usually one type
    - can be mixed but not recommended
- Denoted by square brackets, `[]` 
- Compared to tuples which are denoted by parentheses, `()`

**Mutable**

This means that we can change the values of specific elements

---

## Lists

```python {1|2|3|4|5|6|7|8|9|10|11}
a_list = [] # empty list
b_list = [2, 'A', 4, [1, 2]] # list of mixed types
[1, 2] + [3, 'four'] # evaluates to [1, 2, 3, 'four']

len(b_list)
b_list[0]
b_list[2] + 1
b_list[3]
b_list[4]
i = 2
b_list[i-1]
```

---
layout: two-cols
---

## Iterating over a list

For example, we want to compute the sum of all elements in a list

```python
total = 0
for i in range(len(list_a)):
    totale = total + x[list_a]
print(total)
```

::right::

Because working with every single item of a list is very common, we have

```python
total = 0
for item in list_a:
    total = total + item
print(total)
```

Note:
- list elements are indexed from 0 to len(list)-1
- `range` foes from 0 to n-1

---

## Exercise 2

```python
def sum_and_product(l):
    """
    l is a list of numbers
    return a tuple where the first value is the sum of all the elements in l
    and the second value is the product of all the element in l
    i.e. l = [1, 2, 3, 4] returns (10, 24)
    """
```

---

# Summary

- Lambda functions are useful when you need a simple function once
- tuples are indexable sequences of objects
    - it's immutable, meaning we cannot change the values of specific elements
    - and we use `()`
- lists are indexable sequences of objects
    - it's mutable, meaning we can change the values of specific elements
    - and we use `[]`
- lists and tuples are very similar to strings, in terms of
    - indexing
    - slicing
    - looping
