---
title: 13 Semi Final Review
exportFilename: 13 Semi Final Review
lineNumbers: true
---

# Semi Final Coverage
Mostly projects

1. Information about your 3 project
2. Skills used in the creation of those projects

---

## Project questions include

1. Which module did you use to generate the choice of the computer?
2. Fill in the blank for rock paper scissors process
3. Create the if statement for 5 different choices in rock paper scissors
4. How do you open a file for reading?

---

## Imports

- Specific format of imports
- The idea of the *standard library*
- importing specific functions
- importing with aliases

---

## Documentation

- what it's about
- how to read documentation
- return type of a specific function

---

## General Programming

- variables
- if statements
- combined conditionals
- loops

---
layout: center
---

# File Handling
This is just the file handling lesson again

---
src: ./day_12.md
---

---
layout: center
---

# Dictionaries
quick run through, will be in the exam but not heavily focused on

---
layout: two-cols-header
---

## Dictionaries

If we wanted to store the name of a piece of data, and a value of a piece of data together, one way would be to use 

::left::
```python
data = [
    f"neil: {neil_grade}",
    f"Isaac: {isaac_grade}",
    f"Ray: {ray_grade}",
]
```

::right::
```python
names = [
    "neil", "Isaac", "Ray"
]

grades = [
    "2.3", "1.2", "0.2"
]
```

Where each name corresponds to the grade at the **same index**

---

## Exercise

Given

```python

height = [5.8, 6.0, 5.5]
status = ["tall", "very tall", "average"]
```

1. how would you figure out what the status of the person with height 6.0 is? What information do you need?

Write a function

```python
def get_status(height_value):
    """
    returns a tuple of (height_value, status)
    height_value: float - the height to look up
    """
```

hint: https://www.w3schools.com/python/ref_list_index.asp

---

## Problems with this approach

1. Messy - you have to manage two lists for every piece of connected data
2. Need to do index search every time which is slow
3. If you mess up the order of one list, everything breaks

---

## Dictionaries

A better way is to use a **data structure** called a dictionary

A **Dictionary** is a key-value store where the index is the "key" and the data is the "value"

```python
my_dictionary = { # define a dictionary with {}
    "key1": "value1", # the key is on the left of the colon, 
    "key2": "value2", # the value is on the right
    "key3": "value3",
}
```

And to access data

```python
x = my_dictionary['key2'] # index using the key
print(x)
```

Note that if the key isn't found, it raises a *KeyError*

---

## Exercise

given

```python
def find_grades(grades, students):
    """
    grades is a dictionary mapping student names (str) to grades (int)
    students is a list of student names
    returns a list containing the grades for students
    """
```

For example

```python
d = {'neil': 2.3, 'isaac': 1.2, 'ray': 0.2}
print(find_grades(d, ['neil', 'ray'])) # should print [2.3, 0.2]
```

---

## Operations

To add an entry
```python
grades['grace'] = 1.5 # new key
```

To change an entry
```python
grades['neil'] = 3.0 # existing key
```

To delete an entry
```python
del(grades['isaac'])
```

Note that these operations are **in-place** meaning they don't return a new dictionary, they modify the existing one

---

## Operations

To test if a key exists
```python
'John' in grades # returns False
'neil' in grades # returns True
1.5 in grades # returns False
```

Note that it only checks keys, not values

---

## Exercise

Write a function according to these specs

```python
def find_in_L(Ld, k):
    """
    Ld: list of dictionaries
    k: key is an integer

    returns True if k is a key in any of the dictionaries in Ld, 
    returns false otherwise
    """
```

---

## Looping through dictionaries

While you can lop over dictionaries, because of how they are stored inside the computer, the order is not guaranteed to be the same every time

```python
grades.keys() # returns a list of all keys
grades.values() # returns a list of all values
```

Typically you would loop through both using `.items()`

```python
for key, value in grades.items():
    print(f"{key} has a grade of {value}")
```

---

## Summary

- Dictionaries are a **mutable** data structure that has key-value pairs
- Assume there is **no order** to the keys
- Dictionary **values**
    - can be any data type
    - can be duplicates
- **Keys**
    - must be *unique*
    - must be immutable data types (strings, numbers, tuples)

Technically speaking, keys need an object that is *hashable*

---

## Hashable?

An object is hashable if you can map it to a unique integer value that doesn't change during its lifetime, where that integer corresponds to a position in a block of memory

i.e. map "a" to 1, "b" to 2, "c" to 3, etc, this is called **hashing**

And at that memory address, **store** the dictionary value

And to figure out where to find that value later, you just `hash` the key again to get the memory address

A simple hash function would be to sum the letters and take modulo the size of the memory block

