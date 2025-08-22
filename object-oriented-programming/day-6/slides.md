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
layout: two-col
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

::right::

Where the class is a *template* to actually creaate objects

```python
powder = Dog()
```

Where powder is an *instance* of the class `Dog()`, and that instance is an *object*


---

## Objects

<img class="mx-auto" src="./images/fig1.png" width="600">

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

## Object Messages

Another important part of object oriented programming is *messages*

```python
dog_handler = DogHandler()
dog = Dog()

dog_handler.walk(dog)
```

Any time an object is interacting with another object, it's called a message

1. When `object A` calls a method from `object B`
2. `object A` *sends* a message to `object B`
3. `object B` *replies* through a `return` value

---
layout: center
---

# Encapsulation
Bundling data and methods into a single unit

For better organization and access control

> Again, this is done through classes

1. Data hiding
2. Separation of concerns

---

## Encapsulation

### Data Hiding

One of the primary advantages of OOP is that objects don't need to reveal all of it's attributes and behaviors

In a good OO design, an object will only  



---
