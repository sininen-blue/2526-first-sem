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

## Memory-memory and Memory-register instructions

There are two main categories of instructions when talking about registers

Register-memory instructions, where they allow memory *words* to be pulled into the register to be operated upon, and stored back into memory

While register-register instructions fetches 2 (typically) operands from the registers, performs an operation on them, and then stores the result back into a register

Most modern machines have multiples of this data cycle, and the speed they run normally determines the speed of the computer itself

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
layout: two-cols
---

## Interpreters 

You'll notice that these steps are very simple, and are also defined by clear steps and conditions

Which means that it's possible to write a program that can imitate the function of a physical CPU.

A program which does this is called an *interpreter*

::right::

```java {*}{maxHeight:'500px'}
public class Interp {
    static int PC; // program counter holds address of next instr
    static int AC; // the accumulator, a register for doing arithmetic
    static int instr; // a holding register for the current instruction
    static int instr type; // the instruction type (opcode)
    static int data loc; // the address of the data, or −1 if none
    static int data; // holds the current operand
    static boolean run bit = true; // a bit to halt the machine

    public static void interpret(int memory[ ], int starting address) {
        PC = starting address;
        while (run bit) {
            instr = memory[PC]; // fetch next instruction into instr
            PC = PC + 1; // increment program counter
            instr type = get instr type(instr); // determine instruction type
            data loc = find data(instr, instr type); // locate data (−1 if none)

            if (data loc >= 0) // if data loc is −1, there is no operand
                data = memory[data loc]; // fetch the data
            execute(instr type, data); // execute instruction
        }
    }
    private static int get instr type(int addr) { ... }
    private static int find data(int instr, int type) { ... }
    private static void execute(int type, int data) { ... }
}
```

<style>
code {
	font-size: 12px !important;
}

.grid-cols-2 {
    grid-template-columns: minmax(0,.4fr) minmax(0,1fr)
}
</style>

---

## The benefits of an interpreter

When a design team creates a new machine language $L$, they can then decide if they want to write an interpreter for it, or to create a new hardware implementation for it, or use a hybrid approach

An interpreter *breaks* the instructions of the target machine into smaller steps. 

Those smaller steps are cheaper and easier to build.

In early computing, expensive hardware tended to have very complex instruction sets which allow for significantly better performance.

But instruction compatibility requirements and rising cost of software development created a need for implementing complex instructions even on lower-end computers, that couldn't afford the hardware to implement them

---
layout: image-right
image: ./images/fig3.webp
---

## IBM and interpreters

In the 1950s, IBM introduced the term *architecture* to describe different computers with the same instruction sets

And a family of computers, with different price points and speed that could be programmed with the same software.

This was because of interpretation introduced by Maurice Wilkes

---

## IBM and interpreters

Other benefits of interpreted computers are

1. the ability to *hotfix* issues on field which can possible make up for hardware design errors
2. the ability to add new instructions at a minimal cost, and 
3. a better way of developing systems that allowed for easier development, testing, and documentation of complex instructions

This, combined with the increased demand for low-cost computers, complex instruction sets, and the development of faster and faster computers.

Created a world where the lost performance of an interpreter was negligible compared to the benefits it provided

---

## RISC versus CISC

Programmers and designers tend towards complexity and powerful solutions, and at the time, this tendency was geared towards closing the *semantic gap* between the machine code and high-level languages

But in 1980, a group led by David Patterson and Carlo Sequin began designing VLSI chips that didn't use interpretation. They called this a *Reduced Instruction Set Computer* (RISC), and produced the RISC I followed by the RISC II

---

## RISC versus CISC

These processors were designed to be completely new and non-backwards compatible, which allowed the designers to create instruction sets that would maximize performance.

Even if it takes a RISC machine 4–5 instructions to do what a CISC machine can do in 1, the RISC machine is still 10–20 times faster

RISC machines were so much better that even CISC machines adopted RISC design, and intel architecture computers today now contain a RISC core 

---
layout: center
---

## So why isn't risk the main computing platform of today?

---

## Designing modern computers

Given the current state of hardware, computer designers have found a few design principles which most general purpose computers follow

1. All instructions are directly executed by the hardware

For CISC computers, this means that instructions should be broken down into smaller steps that can be executed by the hardware

2. Maximize the rate at which instructions are issued

Start as many instructions as possible

---

## Designing modern computers

3. Instructions should be easy to decode

Decoding instructions to find what resources they need should be fast and simple

<!-- this usually means fixed length and a small number of fields -->

4. Only loads and stores should reference memory

Every other instruction should operate on registers

5. Provide many registers

Accessing memory is relatively slow, so have many registers

---

## Instruction Level Parallelism

---

## Pipelining

---

## Super scalar architecture

---

## Processor Level Parallelism

---

## Data parallel computers

---

## Multiprocessors

---

## Multicomputers
