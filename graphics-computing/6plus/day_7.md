---
title: interaction and animation
exportFilename: 7 interaction and animation
---

# Interaction and Animation

---

## Interaction and animation

Rendering is fine, but to make complete applications that are more useful, interactions and animations are required

Before this we:
1. we described a scene,
2. sent data 
3. then rendered it

But in most real world applications, we want a more dynamic experience

Like:
- changing colors
- moving objects
- or moving the camera


---

# Animation
We'll talk about some animation first

Imagine that we want to display a square that rotates at a constant rate.

One approach is to have our application generate new vertex data each frame, then send that data to the GPU, then render it.

The problem with this approach is that sending data to the GPU is slow, and doing it every frame is inefficient. 

We can do better if we start thinking in terms of a recursive rendering process where the render function can call itself and use the data that have already been placed on the GPU

---

## Rotating square

Consider the two-dimensional point

$$
x = \cos{\theta}, \quad y = \sin{\theta}
$$

This point, because of how trig works, and

$$
(-\sin{\theta}, \cos{\theta}), (-\cos{\theta}, -\sin{\theta}), ( \sin{\theta}, -\cos{\theta} )
$$

Also lie on the unit circle

---

## Rotating square

So starting at $\theta = 0$, we can generate a square by using the points, which generate the points

`(1, 0), (0, 1), (-1, 0), (0, -1)`


---

## Rotating square

And we can set these vertices with
```js
var vertices = [
    vec2(0, 1),
    vec2(-1, 0),
    vec2(1, 0),
    vec2(0, -1)
]
```

And send them to the GPU with
```js
var bufferId = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
gl.bufferData(gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW);
```

---

## Rotating square

Then render
```js
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}
```

---

## Rotating square

What if we want to display a square with a different value of $\theta$?

One way would be:
- compute new vertices with positions defined by our equations
- send the new vertices to the GPU
- ask for another render

Then just loop that while incrementing $\theta$ each time

> What if we wanted to render an object with 10,000 vertices?

1. This approach means were sending data, which is slow
2. and doing trigonometry in CPU, which is slower than in the GPU

---

## Rotating square

A better solution is to 
1. send the original data to the GPU, then 
2. alter only $\theta$ each frame
3. send the new $\theta$ value to the GPU
4. then ask for a render

To do this, we need to add a new variable to our vertex shader

Something called `uniform qualified variables`

---

## Rotating square

`vertex shader`
```glsl {1-7}
attribute vec4 aPosition;
uniform float uTheta

void main() {
    gl_Position.x = -sin(uTheta) * aPosition.x + cos(uTheta) * aPosition.y;
    gl_Position.y =  sin(uTheta) * aPosition.y + cos(uTheta) * aPosition.x;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
}
```

The variable `uTheta` is called a `uniform`, so the shader expects this value to be sent from the application

And with this value, the shader outputs a vertex position that is rotated by $\theta$

---

## Rotating square

To send that value, we need to first set that value in application

```js
var theta = 0.0;
```

Then link that to the `uTheta` in the shader

`after shaders are linked`
```js
var thetaLoc = gl.getUniformLocation(program, "uTheta");
```

Then we can send it through
```js
gl.uniform1f(thetaLoc, theta);
```

---

## Rotating square

There are multiple forms of `gl.uniform`, and they correspond to the type of variable we're sending

Mainly `scalars`, `vectors`, and `matrices`

Here `1f` means were sending a single floating point variable

---

## Rotating square

Finally we render

```js
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    theta += 0.1;
    gl.uniform1f(thetaLoc, theta);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    render();
}
```

Which increases $\theta$ each frame, sends the new value to the GPU, then asks for a render by calling itself

This approach *does not work*, if we ran this program, all we'll see is the first square

To fix this, we need to examine how and when the display is updated

---

# Display Process
How does a browser and window system interact with a physical display?


Imagine a monitor, this monitor has
- an image stored in pixels
- those pixels are stored in a frame buffer
- that frame buffer is refreshed periodically

Historically, monitors refreshed at 60Hz, or 60 times a second
- this was because of the AC frequency in the US
- were old TV's used the power lines as a timing reference
- and monitors followed suit

---

## Display Process

Now consider a browser window. Even though this is being redrawn, the contents are *unchanged* unless some *action* takes place that changes the pixels. We call these actions `events`

And in our code, it loads all our `html`, `css`, and `js` files, then runs our code when the `onload` event occurs.

At the end of our program, we have the `render()` function that calls itself, which invokes the `gl.drawArrays` function, then ends

---

## Display Process

In our square function, it the render function calls itself

```js
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    theta += 0.1;
    gl.uniform1f(thetaLoc, theta);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    render();
}
```

But this will cause a stack overflow, since it loops infinitely

So to control the recursive calls to render, we need to connect it to the display process

--- 

## Double buffering

In graphics systems, 
1. the image is formed in the framebuffer, then
2. the contents of the framebuffer are displayed on the output

And because the physical display refreshes at a fixed rate *independent* of the framebuffer, consider what would happen if the framebuffer were updated *while* the display was being refreshed

There is *no coupling* between when new squares are drawn into the framebuffer and when the display is refreshed 

This is known as `single buffering`

---

## Double buffering

Double buffering provides one solution to these problems

It divides the frame buffer into two parts:
1. the `front buffer`, which is being displayed
2. the `back buffer`, which is being drawn into

When the display is refreshed, the front and back buffers are swapped

WebGL *requires* double buffering, and a typical buffering cycle is:
1. clearing the back buffer
2. rendering into the back buffer
3. finished with a buffer swap

In `OpenGL` the buffer swap is forced by a function on the application side called *swapBuffers*

---

## Double buffering

Because WebGL is embedded in a browser, the browser controls the buffer swap. 

The buffer will continue to refresh the display at a constant rate, and won't replace the part of the display corresponding to the framebuffer until the application signals that it can do so

So the main ways we can control when the browser redisplays the framebuffer are:
1. `timers`
2. `requestAnimationFrame`

These strategies don't solve all the problems of animation. If the display is too complex, we might still need multiple frames to render a single frame

It only ensures that the user *never* sees a partial display

---

## Using a timer

One way to control the rate of display is by using a `setInterval` timer to call the `render` function after some milliseconds

```js
setInterval(render, 16);
```

So this will call the `render` function every 16 milliseconds, or about 60 times a second

But because `setInterval` are independent of the browser, it can be difficult to get a smooth animation, especially as the complexity of the scene increases  

---

## Using requestAnimationFrame

One solution for that is to use the `requestAnimationFrame` function

```js
function render() {
    gl.clear(gl.COLOR_BUFFER_BIT);
    theta += 0.1;
    gl.uniform1f(thetaLoc, theta);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(render);
}
```

This function requests the browser to display the rendering next time it wants to refresh the display

And for our simple square, we'll easily get about 60 fps

But for more complex scenes, the browser may drop frames to keep up, which is preferred to slowing down the animation in most cases

---

## Combination

And we can combine both approaches, to get smooth, browser synchronized animation, and custom frame rates

```js
function render() {
    setTimeout(function() {
        requestAnimationFrame(render);

        gl.clear(gl.COLOR_BUFFER_BIT);
        theta += 0.1;
        gl.uniform1f(thetaLoc, theta);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }, 100);
}
```

This gives us about 10 frames per second, and while it works well for our simple square, it may not work well for more complex scenes

Though we won't worry about the specifics of the browser for now

---

## Assignment

Take your point rendering assignment and
1. add a uniform variable to the vertex shader to control point size
2. change the render function to use `requestAnimationFrame`
3. make your application change the point size over time to create an animation effect

[ishortn.ink/animationAssignmentSubmit](https://ishortn.ink/animationAssignmentSubmit)

Reference code

[ishortn.ink/graphicsGit](https://ishortn.ink/graphicsGit)
