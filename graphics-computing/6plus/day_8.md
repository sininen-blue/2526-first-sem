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

## Interaction

Because rendering is the primary concern of OpenGL, and thus WebGL, interaction is not directly supported

The main reason for this is *portability*, because OpenGL and WebGL don't have standard APIs for handling events and user input, it can be placed in any environment without modification.

This means that interaction must be *handled* by the application or the environment, usually through a third party library in the case of OpenGL, where the library changes depending on the system it's on. Both for input and also window handling.

---

## Interaction in WebGL

Because WebGL is embedded in a browser, we can both use the browser's built in event and window handling, as well as the variety of third party libraries available for the web.

We will mainly be using vanilla JavaScript to handle interaction without using any higher level packages.

---

## Input Devices

Before handling interaction, we need to understand the different types of input devices

There are two main ways of understanding input devices:
1. Physical
2. Logical

---

## Physical Model

In the physical model, we think of an input device in terms of it's physical properties

- A mouse has a laser, two buttons, and a scroll wheel.
- A trackball mouse has a ball, and two buttons, and sometimes a wheel.
- A keyboard has a set of keys, each with a switch and a label.

All these devices have different physical properties, and thus different ways of interacting with them. And from a purely physical perspective, they are not interchangeable.

---

## Logical Model

In the logical model, we think of an input device in terms of the *events* it generates

A black box with an input and output

In terms of computer graphics, we *prefer* the logical model

- A mouse has `mousemove`, `mousedown`, `mouseup`, and `wheel` events
- A trackball mouse has `mousemove`, `mousedown`, and `mouseup` events
- and a keyboard has ______

This allows us to use the same physical device in multiple ways, but also lets the program work without modification if the physical device changes, as long as the logical events are the same

---

## Physical input devices

From a physical perspective, each input device has properties that make it better for certain tasks for others

Historically, however, there are two main categories of input device
1. *pointing* devices, to indicate position
2. *keyboard* devices, to return character codes


---

## Keyboards and keyboard codes

A mouse, from a logical perspective, can be thought of as a keyboard as long as at least one of its buttons generates and sends a character code

A keyboard, from a logical perspective, is just a set of buttons that generate and send character codes

For many years, the standard for character codes was ASCII, American Standard Code for Information Interchange. And it contained only 127 codes, which was then expanded to a larger 8-bit character set known as Latin 1 which can represent most European languages

Then Unicode was developed as a 16-bit code that's capable of supporting almost every written language 

```mermaid
graph LR;
a[ASCII]
b[Latin 1]
c[Unicode]
a --> b --> c
```

Note that Unicode is a superset of Latin 1, which is a superset of ASCII

---

## Mouse and Trackball

A mouse is a physical device that turns the motion of a ball or the feedback of a laser, into a vector of motion which is then translated into a change in position of a pointer on the screen

This usually takes the form of an optical sensor or a mechanical motion sensor

Motion, usually in two independent axes, is the primary output of a mouse, and is interpreted by a decoder which is then sent to the computer

In most cases, this means that they provide *relative positioning*, where the motion of the mouse is relative to the current position of the pointer

---

## Tablets, touch pads, and touch screens

Data tablets provide *absolute positioning*, where rows and columns of wires or a capacitive layer can determine the exact position of a stylus or finger on the surface of the tablet

Touch pads in particular are a common feature on laptops, and provide a small surface for relative positioning, but through the lens of a logical model, they can be treated as an absolute positioning device

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

## Logical devices

From a logical point of view, an input device has two main characteristics
1. the *measurements* the device returns to the user program
2. the *time* when the device returns those measurements

Historically, APIs defined six classes of logical input device, like a `locator device` which would provide a position in object coordinates, a `pick device` would provide an identifier for an object, etc

---

## Logical devices

However, because modern window systems cannot always be disassociated completely from the properties of the physical device, most systems no longer use these classes.

Instead they use a layer in between, usually in a display such as a pop-up menu or a button, also known as a `widget`

```mermaid
graph LR;
a[physical device] --> b[logical device] --> c[widget] --> d[application]
```

---

## Input modes

From a device to an application we have two main entities

1. the measure, which is what the device returns
2. the trigger, which is what the device uses to send the measure

For example
> A keyboard has a measure (a character code) and a trigger (a key press)

And the application has two modes of getting that measure defined by the relationship between the measure process and the trigger

Once a measure process is started, the measure is taken and placed in a buffer, and depending on the mode, the application can either get the measure when it wants, or when the device wants to send it

---

## Request Mode

In this mode, the measure is not given to the program until the device is triggered. For example, 

in a C program that requires user input, we use the function _____

This stops the program, and lets the user type,

We can take as long as we like, and that data is placed in a buffer, and only when a specific trigger is given, such as pressing the `enter` key, is the data sent to the program

```mermaid
graph LR;
a[trigger]
b[measure]
c[program]

a --trigger--> b --measure--> c
c --request--> b
```

---

## Request mode

A characteristic of request-mode inputs is that the user must identify which device is to provide the input.

This means that we ignore any other information from other input devices other the one specified.

Request mode is useful for situations in which the program guides the user, but *not* useful in applications where the user controls the flow of a program, like in a game, where most buttons can be pressed at any time.

---

## Event Mode

Can handle these other interactions

```mermaid
graph LR;
a[trigger]
b[measure]
c[event queue]
d[program]

a --trigger--> b --measure--> c --event--> d
d --await--> c
```

In event mode, each input device has its own trigger and each is running a measure process. Each time a device is triggered, an *event* is generated and placed in an *event queue*

In our model, the application can either periodically check the event queue for new events, or it can wait until an event is placed in the queue. And then it can choose whether or not to use said event

> For example, in a text input for a program, the application could look at the event queue and choose to ignore all non keyboard events

---

## Event mode

Another approach is to associate a function called a `callback` with a specific type of event.

For example, *mouse events* like moving the mouse, or clicking a button, can be associated wit ha function that handles those events

```javascript
canvas.addEventListener('mousemove', function(event) {
    // handle mouse move event
});
```

There are also `window events`, `keyboard events`, `idle timeout events`, and others

And from the perspective of the window system, these events are queried regularly, polling it, and executes the callback associated with the event in the event queue

---

## Clients and Servers

Because we're using WebGL, the `server model` is used. Where a *primary* concern is the ability to function in a world of *distributed computing and networks*

This model was popularized by the `X window system`, where even today, we still use the terminology invented for it

However today, servers are usually the graphics system itself, and the client is the application

```mermaid
graph LR;
a[client/web browser]
b[server/webGL]
a --request--> b --response--> a
```

Where the client requests the server to do something, like drawing a line, and the server responds by doing it

---

## Programming event-driven input

Because WebGL is a rendering API, not an input API, we use HTML and JavaScript for the interactive sections.

An event, in this context, is classified by its
- type
- target

Where the target is an object, like a `button`, or a physical device, like a `mouse`

And the type is a string, like `click` generated by the button, or `mousemove` generated by the mouse

Where each event has a *name* that usually begins with `on`, like `onclick` or `onmousemove`

With device independent events, like `onclick` being able to be generated by a mouse, a keyboard, or a touch screen, or a button

---

## Programming event-driven input

An example of an event that we have already created a handler for is 

```javascript
window.onload = init;
```

Where:
1. the window is the target
2. the load is the type
3. the init is the handler/callback function

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

---

## Programming event-driven input

First we need to get a reference to the button in our JavaScript code

`box.js`
```javascript
var button = document.getElementById("someId");
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

`box.js`
```javascript
button.addEventListener("click", function() {
    direction *= -1; // reverse the direction
});
```

---

## Summary

```mermaid
flowchart LR;
a[button pressed]
b[event queue]
c[event listener]
d[callback function]

e[render frame]
f[update theta]
g[wait for next render frame]

subgraph interaction
    direction LR
    a --click event--> b --> c --> d
    c --query events --> b
end


subgraph rendering
    direction TB
    e --> f
    f --> g
    g --> e
end

d --change direction--> rendering

```

Where after the button is pressed, and handled by the event listener, it updates the direction variable which is then rendered

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
