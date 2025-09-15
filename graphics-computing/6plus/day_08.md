---
title: interaction
exportFilename: 8 interaction  
---

# Interaction

---

## Interaction

One of the most important advancements in computer technology was the invention of interaction.

Primarily pushed by Ivan Sutherland's Sketchpad, his project launched the current era of *interactive* computer graphics

```mermaid
graph LR;
a[sees an image]
b[reacts to the image]
c[provides input]
d[the image changes]

a --> b --> c --> d --> a
```

His model of how interaction worked was deceptively simple, but so generalized that it's still being used today

---
layout: two-cols
---

## Interaction

Most rendering APIs do not handle interaction directly.

Mostly for *portability* reasons.

This means that interaction must be *handled* by the application or the environment

::right::

```mermaid
graph TD;
subgraph os
    a[window handling]

    subgraph window/browser
        b[event handling]

        subgraph webgl/opengl
            c[application]
        end
    end
end
```

---

## Interaction in WebGL

Because WebGL is embedded in a browser, we can both use the browser's built in event and window handling, as well as the variety of third party libraries available for the web.

We will mainly be using *vanilla* JavaScript to handle interaction without using any higher level packages.

---
layout: center
---

# Input Devices

---

## Input Devices

Before handling interaction, we need to understand the different types of input devices

There are two main ways of *understanding* input devices:
1. Physical
2. Logical

---

## Physical Model

In the physical model, we think of an input device in terms of its physical properties

- A mouse has a laser, two buttons, and a scroll wheel.
- A trackball mouse has a ball, and two buttons, and sometimes a wheel.
- A keyboard has a set of keys, each with a switch and a label.

All these devices have different physical properties, and thus different ways of interacting with them. And from a purely physical perspective, they are not interchangeable.

---

## Logical Model

In the logical model, we think of an input device in terms of the `events` it generates

A *black box* with an input and output

In terms of computer graphics, we *prefer* the logical model

- A mouse has `mousemove`, `mousedown`, `mouseup`, and `wheel` events
- A trackball mouse has `mousemove`, `mousedown`, and `mouseup` events
- and a keyboard has ______

This allows us to use the same physical device in multiple ways, but also lets the program work *without modification* if the physical device changes, as long as the logical events are the same

---
layout: center
---

# Physical Input Devices

---

## Physical input devices

From a physical perspective, each input device has properties that make it better for certain tasks for others

Historically, however, there are two main categories of input device
1. *keyboard* devices, to return character codes,
2. *pointing* devices, to indicate position

Where every other input device is a variation or combination of these two main types

---
layout: two-cols
---

## Keyboards and keyboard codes

A keyboard is just a set of buttons that generate and send character codes

- The standard for character codes was **ASCII**, American Standard Code for Information Interchange. 
- It was expanded to an 8-bit character set known as **Latin-1** which can represent most European languages
- Then **Unicode** was developed as a 16-bit code that's capable of supporting almost every written language 

::right::
```mermaid
graph LR;
subgraph UNICODE
    subgraph LATIN-1
        ASCII
    end
end
```

All of these are cross compatible

Note that Unicode is a superset of Latin 1, which is a superset of ASCII


---

## Mouse and Trackball

A mouse is a physical device that turns the motion of a ball (or the feedback of a laser), into a *vector of motion* which is then translated into a change in position of a pointer on the screen

Motion, usually in two independent axes, is the primary output of a mouse, and is interpreted by a decoder which is then sent to the computer

In most cases, this means that they provide *relative positioning*, where the motion of the mouse is relative to the current position of the pointer

---

## Tablets, touch pads, and touch screens

Data tablets provide *absolute positioning*, 
- Where rows and columns of wires or a capacitive layer can determine the exact position of a stylus or finger on the surface of the tablet

Touch pads in particular are a common feature on laptops, and provide 
- A small surface for relative positioning, 
- But through the lens of a logical model, they can be treated as an absolute positioning device

These devices also allow for more complex gestures, such as *multi-touch*, pinching, and swiping, which while still under the purview of a pointing device, can be thought of as a completely different class of input

---

## Multidimensional input devices

Finally, we have multidimensional input devices, which are usually specialized devices for specific applications, though usually not as common as two-dimensional input devices

But recent technology has made these devices slightly more common, especially with the rise of augmented reality and virtual reality

Examples of this include
- kinect
- virtual reality
- robotics
- wii remote
- mocap suits
- phones

---
layout: center
---

# Logical Input Devices

---

## Logical devices

From a logical point of view, an input device has two main characteristics
1. the *measurements* the device returns to the user program
2. the *time* when the device returns those measurements

Usually, input handling APIs use a layer in between, usually in a display such as a pop-up menu or a button, also known as a `widget`

```mermaid
graph LR;
a[physical device] --> b[logical device] --> c[widget] --> d[application]
```

To take accept measurements and time

---

## Input modes

Device to application interaction has two main entities
1. the *measure*, which is what the device returns
2. the *trigger*, which is what the device uses to send the measure

For example
> A keyboard has a measure (a character code) and a trigger (a key press)

And the application has two modes of getting that measure defined by the relationship between the measure process and the trigger

Once a measure process is started, the measure is taken and placed in a buffer, and depending on the mode, the application can either get the measure when it wants, or when the device wants to send it

---

## Request Mode

In this mode, the measure is not given to the program until the device is triggered. For example, 

in a C program that requires user input, we use the function _____

This *stops* the program, and lets the user type,

We can take as long as we like, and that data is placed in a buffer, and only when a specific trigger is given, such as pressing the `enter` key, is the data sent to the program

```mermaid
graph LR;
x[device]
b[measure]
c[program]

x --input--> b
x --trigger--> b --measure--> c
c --request--> b
```

---

## Request mode

A characteristic of request-mode inputs is that the user must identify which device is to provide the input.

This means that we **ignore** any other information from other input devices other the one specified.

Request mode is useful for situations in which the program guides the user
- like when filling up a form, 
- in a tutorial,
- or in a text based game

But *not* useful in applications where the user controls the flow of a program, 
- like in a game, where most buttons can be pressed at any time.
- or graphic design software, where the user can use multiple different tools at any time

---

## Event Mode

Can handle these other interactions

```mermaid
graph LR;
a[device]
b[measure]
c[event queue]
d[program]

a --input--> b
a --trigger--> b --measure--> c --event--> d
d --await--> c
```

In event mode, each input device has its own trigger and each is running a measure process. Each time a device is triggered, an *event* is generated and placed in an *event queue*

In our model, the application can either periodically check the event queue for new events, or it can wait until an event is placed in the queue. And then it can choose whether or not to use said event

This is called `polling` or `querying` the event queue respectively

---

## Event mode

Another approach is to associate a function called a `callback` with a specific type of event.

For example, *mouse events* like moving the mouse, or clicking a button, can be associated with a function that handles those events

```javascript
canvas.addEventListener('mousemove', function(event) {
    // handle mouse move event
});
```

There are also `window events`, `keyboard events`, `idle timeout events`, and others

And from the perspective of the window system, these events are queried regularly, polling it, and executes the callback associated with the event in the event queue

---

## Clients and Servers

When we use WebGL, we follow a client–server model.
- The client is the application code (your JavaScript program).
- The server is the graphics system (the WebGL implementation inside the browser).

This way of thinking comes from the X Window System, which popularized the terminology. Even though everything runs on the same machine, the logical separation still applies.

```mermaid
graph LR;
a[Client / JS Application]
b[Server / WebGL + GPU]
a --"draw line request"--> b
b --"rendered result"--> a
```

---
layout: center
---

# Event-driven programming

---

## Programming event-driven input

Because WebGL is a rendering API, not an input API, we use HTML and JavaScript for the interactive sections.

An event, in this context, is classified by its
- type, the kind of event
- target, the object that generates or receives the event

```javascript
canvas.addEventListener('mousemove', function(event) {
});
```

- Where the target is an object, like a `canvas`, or a physical device, like a `mouse`
- And the type is a string, like `mousemove` generated by the button, or `mousemove` generated by the mouse

---

## Programming event-driven input

Another example of an event that we have already created a handler for is 

```javascript
window.onload = init;
```

Where:
1. the window is the target
2. the load is the type, defined by `onload`
3. the init is a handler/callback function

---
layout: center
---

# Programming

---

## Programming event-driven input

What if we wanted to alter our rotating cube so that it will rotate either clockwise or counterclockwise

And it would switch between these two modes depending on a button in the browser

First we need to add a button to our HTML file

`box.html`
```html
<button id="someId">Change rotation of the thing</button>
```

This button will generate an event each time that we click on it. But that event isn't handled and simply goes into the event queue, then is ignored

> note that buttons generate the `click` event by default

---

## Programming event-driven input

First we need to get a reference to the button in our JavaScript code

`box.js`
```javascript
var button = document.getElementById("someId");

```

Then register an event listener for the `click` event, which will call a callback function each time the button is clicked
```javascript
button.addEventListener("click", function() {
    // handle the click event
});
```

---

## Programming event-driven input

We then need to make our rotation variable, changable depending on the button click

A simple way of doing this would be to make `uTheta` depend on a global variable

`box.js`
```javascript
var direction = 1.0; // 1.0 for clockwise, -1.0 for counterclockwise
```

`box.js in the render function`
```javascript
uTheta += direction * 0.1;
```

---

## Programming event-driven input

Then we can change the direction variable each time the button is clicked

`in the callback function`
```javascript
button.addEventListener("click", function() {
    direction *= -1; // reverse the direction
});
```

---

## Summary

```mermaid
flowchart TD;
a[button pressed]
b[event queue]
c[event listener]
d[callback function]

e[render frame]
f[update theta]
g[wait for next render frame]

subgraph interaction
    direction LR
    a --click event--> b --event--> c --> d
    c --query events --> b
end


subgraph rendering
    direction TB
    e --> f
    f --> g
    g --> e
end

interaction --direction update--> rendering
```

---

## Extras

Because of how this code works

We can also make the direction coupled to other events as long as it uses the same *callback* function

like

`box.js`
```javascript
button.addEventListener("mousemove", function() {
    direction *= -1;
});
```

Where if the mouse moves over the button, it will also change the direction of rotation

---

## Summary
- there are two main models for input devices
    - physical
    - logical
- WebGL only handles rendering, events are handled by the browser
- events are the main mechanism for interaction
    - each event has a type
    - each event has a target
- these events are processed either through *request mode* or *event mode*
- we register events with `addEventListener`
- events go into an `event queue` and are processed by `listeners`
