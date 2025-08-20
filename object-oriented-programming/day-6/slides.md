---
title: 6 OOP intro
exportFilename: 6 OOP intro
---

# An introduction to some OOP concepts

---

# OOP
Object Oriented Programming

1. What is an object
2. what does it mean to be oriented around objects
3. what does that have to do with programming

---

## Key concepts of OOP

1. Objects

But also:
1. Encapsulation,
2. Polymorphism,
3. Inheritance,
4. Composition

And:
1. interfaces,
2. implementation,

And then:
1. Object-Oriented Design,
2. Design patterns,
3. SOLID principles

Also:
1. Test driven development

---

# Objects
A bundling of attributes and behavior

> Is that familiar? (participation points)

---

## Objects

The reason objects are useful is primarily because of two things
1. They allow us to model the real world
2. They make it easier to reason about our code

Each object is *ideally* a self-contained unit that has its own state and behavior.

And as long as its interactions with other objects are well-defined, we can reason about it in isolation.

---

## Objects

In python, objects are created using classes. 

```python
class Dog:
    def __init__(self, name):
        self.name = name
        self.energy = 100

    def bark(self):
        print(f"{self.name} says Woof!")

    def run(self):
        if self.energy > 0:
            print(f"{self.name} is running!")
            self.energy -= 10
        else:
            print(f"{self.name} is too tired to run.")
```

---

## Object Data/Attributes

Object data or attributes are the properties of an object.

The
- height
- weight
- eye color
- name

Of a person

---

## Object Behavior/Methods

Object behavior or methods are the actions that an object can perform.

Like
- walking
- running 
- sleeping
- eating

---
layout: center
---

# Encapsulation
data hiding

---

