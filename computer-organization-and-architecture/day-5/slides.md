---
title: Computer Systems Input Output
exportFilename: 5 Input output
---

# Input and Output
Chapter 2

---
layout: center
---

# Input Output
Printers, scanners, keyboards, and mice

---
layout: float-right
image: images/fig1.png
---

# Bus
Data highway

Most personal computers are generally built like metal boxes with a printed circuit board

This is nominally called the *motherboard*

It holds all your computer parts, but also serves as a bus

---
layout: float-right
image: images/fig1.png
---

## Bus

Each I/O device consists of two parts
1. A controller that manages the device, and
2. The device itself

For example, in the case of a disk drive:
> A controller, usually integrated into the motherboard, receives a command from the bus, the controller then sends a signal to the disk drive to read or write data, and then it sends that data back to the bus

---
layout: float-right
image: images/fig1.png
---

# DMA
Direct Memory Access

The controller could also read and write data to or from memory without CPU intervention

This is called *Direct Memory Access (DMA)*

And when the transfer is complete, the controller sends an *interrupt* to the CPU, to suspend it's currently running program and handle the interrupt

---
layout: float-right
image: images/fig2.png
---

# PCI and PCIe
Peripheral Component Interconnect and PCI Express

Buses were too slow, so new buses were developed

Designed by Intel, but with the patents in the public domain, it quickly became an industry standard
- it's generally faster
- it has more lanes
- and all communication is point to point

---
layout: float-right
image: images/fig3.png
---

# Terminals
A terminal is a device that allows a user to interact with a computer

They consist of two parts, a keyboard and a monitor

In the old mainframe world, these parts are often integrated into a single device

But in the personal computer world, these devices are often separate

---
layout: float-right
image: images/fig4.png
---

## Keyboards

A way for a user to input data into a computer through a set of keys

These keys generate a keyboard interrupt, which is handled by a keyboard interrupt handler

When you click or release a key, the physical location of the key is sent to the keyboard controller, which then sends a signal to the CPU

---
layout: float-right
image: images/fig5.png
---

## Touch Screens

One of the newer input devices, touch screens allow users to interact with a computer by touching the screen

The first one was developed in 1965 at the Royal Radar Establishment in the UK

They work by detecting the location of a touch on the screen, and then sending that information to the CPU

---
layout: float-right
image: images/fig6.png
---

## Mice

A surprisingly new input device, compared to other input devices, it works by detecting the movement of a ball or an optical sensor, and then sending that information to the CPU

It revolutionized early computer interaction, allowing users to point and click on objects on the screen

Making the use of computers, when not already a professional programmer, much easier

---
layout: float-right
image: images/fig7.png
---

## Game Controllers

- wiimote
- kinect
- gamepad
- joystick
- etc

There are a variety of game controllers, each with their own unique features and capabilities

But almost all of the work the same way as any other input device

Which is by translating physical movement into digital signals that the CPU can understand

---

## Printers

Printers are output devices that allow users to produce a physical copy of a document or image

- Either through extremely precise drops of ink (inkjet), 
- or by shooting a ray of light to a drum, which makes it attract toner, which is then transferred to paper (laser)
- or by melting plastic to create a 3D object (3D printer)

