---
title: Computer Systems Processors
---

# Computer Systems Organization
Chapter 2

---
layout: center
---

# Digital computers
are interconnected systems of processors, memories, and input/output devices

For this lesson, we'll be focusing on processors

---
layout: float-right
image: ./images/fig1.png
---

## Processors

The "brain" of the computer

It executes programs stored in memory by fetching instructions, examining them, and then executing them one after another

It does this by through something called a **bus** which is parallel wires used to transmit address', data, and control signals

This bus allows the computer to communicate with other components like memory and I/O devices

---
layout: float-right
image: ./images/fig1.png
---

## Parts

The processor itself consists of:
1. Control Unit (CU)
2. Arithmetic Logic Unit (ALU)
3. Memory

The control unit does the fetching and decoding instructions from memory

The arithmetic logic unit performs arithmetic and logical operations

And the memory which is usually made up of registers, which are small memory locations inside the processor

---
layout: center
---

### Registers

There are several types of registers, but the most important ones are

1. **Program Counter (PC)**: Holds the address of the next instruction to be executed
2. **Instruction Register (IR)**: Holds the current instruction being executed

Where without these, the processor would not know what to do next

---
layout: float-right
image: ./images/fig2.png
---

## Von Neumann Architecture

At the heart of most computer systems is a **Data Path Cycle**, as defined by the Von Neumann architecture

This usually consists of registers, the ALU, and several buses

The registers feed into ALU input registers, which then feed into the ALU, and the ALU output registers feed back into the registers

The ALU performing some simple addition, subtraction, or logical operations

The register can then be saved into memory

---
layout: float-right
image: ./images/fig2.png
---

## memory-memory and memory-register instructions

There are two main categories of instructions when talking about registers

Register-memory instructions, where they allow memory *words* to be pulled into the register to be operated upon, and stored back into memory

While register-register instructions fetches 2 (typically) operands from the registers, performs an operation on them, and then stores the result back into a register

Most modern machines have multiples of this data cycle, and the speed they run normally determines the speed of the computer itsel

---

## Instruction Execution Cycle

Roughly, the instruction execution cycle can be broken down into the following steps:

1. Fetch the instructions from memory into the instruction register
2. Change the program counter to point to the next instruction
3. Determine the type of instruction fetched
4. If the instruction uses a word in memory, determine where it is
5. Fetch the word, if needed, into a CPU register
6. Execute the instruction
7. Go to step 1 to begin executing the next instruction

This is frequently referred to as the **fetch-decode-execute cycle** and is how most computers work

---

# IBM

---

# RISC versus CISC

---

# Modern Computers 

---

# Instruction Level Parallelism

---

# Processor Level Parallelism

---

# Multiprocessors

---
