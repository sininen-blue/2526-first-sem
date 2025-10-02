---
title: CPU and Buses
exportFilename: 8 Cpu and Buses
---

# CPU and Buses
Putting integrated circuits, clocks, and memory chips together

---

## CPU Chips

All modern CPUs are contained on a single chip, and each of those chips contain a set of pins.

Some of those pins are to *receive* signals to the outside world, and some *accept* signals from the outside world, and some do **both**.

By understanding the function of all the pins, we can learn how the CPU interacts with the memory and I/O devices at the digital logic level.

---

## CPU Pins

The cpu pins can be grouped into 3 main categories:
- Address pins,
- Data pins, and
- Control pins

These pins are connected to similar pins on the memory and I/O devices through a set of parallel wires called a **Bus**

---

## CPU Pins

### Example

For a cpu to fetch and run an instruction from memory, it needs to:
1. *Put* the memory address of that instruction *on its address pins*
2. *Assert\** one or more *control lines* to inform the memory that it wants to read a word
3. The memory *replies* by *putting* the requested word on the *CPU's data pins*
4. The memory *asserts* a signal that it's done
5. The CPU *sees* this *signal* and accepts the word
6. It carries out the instruction
7. This can then repeat for the next instruction

What's important to understand is that the CPU communicates with the memory and I/O devices by presenting and accepting signals on its pins

> No other communication is possible

<small class="float-right">*Assert meaning to cause an action regardless of the level</small>

---

## CPU performance

The number of address pins and the number of data pins on a CPU chip are key factors in determining the performance of a CPU.

A chip with $m$ address pins can only address up to $2^m$ memory locations. And a chip with $n$ data pins can only read or write $n$ bits of data at a time.

This is why 32-bit CPUs are limited to 4 GB of memory, because they have 32 address pins, and $2^{32} = 4,294,967,296$ bytes = 4 GB.

Where a CPU with 8 data pins will take four operations to read a 32-bit word, a 32 data pin CPU can read it in one.

So a 32 data pin CPU is faster, but signicantly more expensive to manufacture.

---

## Control pins

In addition to address and data pins, each CPU has some control pins that regulate flow and timing of data.

They all usually have pins for:
1. Power
2. Ground
3. Clocks

But other control pins vary between CPU architectures, though they are usually grouped into:

1. Bus control
2. Interrupts
3. Bus arbitration
4. Coprocessor signaling
5. Status
6. Miscellanenous

---
layout: two-cols
---

## Control Pins

- The bus control pins are mostly CPU -> bus, for when the CPU wants to read or write
- The interrupt pins are inputs form I/O Devices
- The bus arbitration pins are for regulating bus traffic
- Coprocessor pins are for communicating with things like floating point chips and graphics chips
- and other miscellaneous pins that some CPUs have


::right::

<img class="mx-auto w-3/4" src="./images/day_08/fig1.png" alt="Control Pins">

---
layout: center
---

# Buses

---

## Buses

An electrical pathway betweenmultiple devices, usually categorized by their functiona. They can be used internally inside the CPU to transport data to and from the CPU.

Or they can be external, connecting to memory or I/O devices.

And each has its own requirements and properties

---

## System Bus

Early computers had a single external bus, usually called a *system bus*. It consisted of 50-100 parallel copper wires etched into the motherboard, with conenctors for I/O

<img class="mx-auto w-3/4" src="./images/day_08/fig2.png" alt="System Bus">

Modern PCs usually have special purpose bus' between the CPU and memory, and the CPU and I/O devices.

---

## Bus Protocols

Designers of the CPU can use whatever bus they want inside. But for external buses, they have to use a bus protocol that is compatible with the memory and I/O devices.

These protocols are a set of well-defined rules, both logically and electrically, that all devices on the bus must follow to be able to communicate.

Though some busses, especiallly for smaller embedded systems, are custom designed for a specific application since they don't need to deal with compatibility.

---
layout: two-cols
---

## Bus Protocols

The world would be a better place if all but one dissapeared and we all used the same one. However, that's unlikely to ever happen.

Too much money is involved in the design and manufacture of these systems for companies to give up their proprietary designs.

And backward compatibility limits the ability for new designs to take over the market.

::right::
Some popular bus protocols include:
- Omnibus (PDP-8)
- Unibus (PDF-11)
- Multibus (8086)
- VME bus (physics lab equipment)
- IBM PC bus (PC/XT)
- ISA buf (PC/AT)
- EISA bus (80386)
- Microchannel (PS/2)
- Nubus (Macintosh)
- PCI bus (many PCs)
- SCSY bus (many workstations)
- Universal Serial Bus (USB), and
- FireWire (consumer electronics)


---

## Bus Relationships

How buses work can be described in terms of a Master/Slave relationship.

Active buses (masters) can intitiate bus transfers whereas passive (slaves) buses wait for requests.

WAhen the CPU orders a disk controller to read or write, the CPU is acting as themaster and the disk controller is the slave.

But later, the disk controller may act as the master when it commands the memory to accept the words it is reading from disk

There are several combinations of master and slave relationships possible, with the only rule being that memory can never be a master

<small class="text-right float-right w-1/2">As a note on terminology, master/slave is being replaced with more neutral terms like controller/target or initiator/responder. But master/slave is still widely used in technical documentation</small>

---

## Bus Relationships

<img class="mx-auto w-3/4" src="./images/day_08/fig3.png" alt="Bus Relationships">

Usually the binary signals that these devices output are too weak to power a bus, which is why most bus masters are connected to the bus by a circuit called a `bus
driver`, which is essentially a digital amplifier.

Similarly, bus slaves are usually connected to the bus by a `bus receiver`

And devices that can do both are connected by a `bus transceiver`

---
layout: center
---

# Bus Design Choices

Bus design is complicated enough to have its own field of study.

But for our purposes, we only need to understand a few basic design choices that affect how a bus works

Primarily the width, the clocking, the arbitration, and the operation

And each of these hve a substantial impact on the speed and bandwidth of the bus.

---
layout: two-cols
---

## Bus Width

The most obvious design parameter. More address lines a bus has, the more memory the CPU can address directly.

If a bus has $n$ address lines, it can address $2^n$ memory locations.

However, larger buses need more wires, which both increase the cost, make it take up more physical spaec, and require bigger connectors.

A system with a 64-line address bus and $2^32$ bytes of memory will cost more than one with a 32-line address bus and $2^32$ bytes of memory.

::right::

<img class="mx-auto w-3/4" src="./images/day_08/fig4.png" alt="Bus Width">

---
layout: two-cols
---

## Bus Width

This led to many designs where the CPU had significantly more complicated architercturse, due to the designers not initially starting with a wide enough bus.

In this example, the 8088 CPU had a 20-bit address bus for 1MB of memory, but the 80286 wanted 16MB of memory so four more bus lines were added.

And because of backwards compatibility, the original 20 lines were kept, leading to a more complex design.

And was then repeated once more with the 80386

::right::

<img class="mx-auto w-3/4" src="./images/day_08/fig4.png" alt="Bus Width">

---

## Bus Width

Not only does the number of address lines grow over time, the number of data lines also tends to grow. Though it grows for different reasons.

There are 2 main ways to increase the bandwidth of a bus:
1. decrease bus cycle time, or
2. increase the data bus width

The first one is possible (but difficult) and leads to more *bus skew*. An effect caused by signals traveling at different speeds down different wires. The faster the bus, the more skew

Another problem with speeding up the bus is *backward compatibility*. Old boards designed for slower buses will not work with faster ones.

The second one is the usual approach, but usually leads to a *multiplexd bus* because super wide buses are expensive. And so the data lines are shared for both address and data, but at different times

This leads to narrower bus widths (and costs) but a slower system.

---

## Bus Clocking

Buses can be divided into two disctinct categories depending on their clocking

- A synchronous bus has a line driven by a crystal ascillator
- A asynchronous bus has no clock line

Each type runs on bus cycles, and they can be of any length

---

## Synchronous

A synchronous bus runs on a crystal that usually runs between 5 - 133 MHz with all activities running in sync with the clock

In our example, we'll be using a 100 MHz clock, which gives a bus cycle time of 10 ns. We'll also assme that reading from memory takes 15 nsec from the time the address is stable

<img class="mx-auto w-3/4" src="./images/day_08/fig5.png" alt="Synchronous Bus">

This means that it takes 3 bus cycles to read a word from memory

---

## Synchronous

---

## Asynchronous

---

## Bus Arbitration

---

## Bus Operatoin

---



