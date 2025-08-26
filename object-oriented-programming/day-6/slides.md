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
layout: two-cols
---

## Key concepts of OOP

1. Objects

But also:
1. Encapsulation,
2. Polymorphism,
3. Inheritance,
4. Composition

::right::

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
layout: center
---

# Objects
A bundling of attributes and behavior

*Is that familiar?* (participation points)

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

1. Separation of concerns
2. Data hiding

---

## Encapsulation

### Data Hiding

One of the primary advantages of OOP is that objects don't need to reveal all of it's attributes and behaviors

In a good OO design, an object will only show *interfaces* that are necessary for *other* object to interact with it and nothing more

---

# Interfaces and implementation
Means of communication between objects

<img class="mx-auto" src="./images/fig2.png" width="400">

An interface is how one object can *message* another object, the method which other objects are meant to access

And as long as the `interface` stays the same, the implementation can change and the *user* won't notice

---

## Note on terminology

- Interface means something completely different than *graphical user interface*.

- *User* just means another programmer, another object, or another actual user which is interacting with the user

---

## Interfaces and implementation

````md magic-move
```python {all|3-4|6-9|11-13|8-9}
class IntSquare():
    def __init__(self) -> None:
        # private attribute
        self._square_value = None

    # public interface
    def int_get_square(self, x: int) -> int:
        self._square_value = self._int_calc_square(x)
        return self._square_value

    # private implementation
    def _int_calc_square(self, x: int) -> int:
        return x * x
```
```python {all|12-13|7-8}
class IntSquare():
    def __init__(self) -> None:
        # private attribute
        self._square_value = None

    # public interface
    def int_get_square(self, x: int) -> int:
        self._square_value = self._int_calc_square(x)
        return self._square_value

    # private implementation
    def _int_calc_square(self, x: int) -> int:
        return math.pow(x, 2)
```
````
---

# Polymorphism
From the greek word that means "many shapes"

One of the most powerful advantages of object oriented design

1. Imagine a bunch of different shape objects `circle`, `square`, `triangle`
2. Each of these objects are *subclasses* of a `shape` object, meaning they all have the same `draw()` function
3. Your program could then have

```python
# where shapes is a list of `shape` class instances
for shape in shapes: 
    shape.draw()
```

You don't need to know what shape it is, only that it's a subclass of a shape object

It allows a single interface to be used for different underlying data types or objects

---

# Inheritance
One of the ways to do polymorphism

Is a way of *abstracting* common elements of classes into a higher class a `superclass` and then extending that superclass to its `subclass`es

Often called an *is-a* relationship

Each `subclass` has to implement the same interfaces the `superclass` implements

The most common example for this would be the `mammal example`

---

# Composition
Another way of doing polymorphism

Instead of having a `superclass` and `subclass` classes to create objects, you instead use object to build/*compose* a bigger object

Often calld a *has-a* relationship

THe most common example for this would be the `car example`
