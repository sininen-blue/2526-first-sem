---
title: 13 A crash course in arm assembly
exportFilename: 13 arm assembly
---

# Arm Assembly Crash Course
https://polysoftit.co.uk/irisc-web/

---

## Registers

Memory locations that hold data temporarily for processing

r0-lr (15 registers) are general purpose registers, meaning they can be used by the programmer for any purpose

---

## Pointers

Semantic names names for memory addresses

- SP - stack pointer, the very top of the stack
- LR - link register, holds the return address for functions
- PC - program counter, holds the address of the next instruction to execute

CSPR - current program status register, holds flags and status bits

---

## Assembler and memory

The assembler translates human-readable assembly code into machine code that the CPU can execute

Memory is organized into bytes, with each byte having a unique address, in this program it has 3 segments:
- text
- data
- stack

---

## Immediate values

Immediate values are constants that are directly encoded in the instruction itself

You can recognize them by the `#` symbol before the number, it can be encoded in

- decimal (default)
- hexadecimal (0x prefix)
- binary (0b prefix)
- and others

---

## Operations and mvn

the `mov` operation copies data from one location to another

The `mvn` operation moves the bitwise NOT of a value into a register

Why does `mvn` put a large number in the register?

These are called operands

---

## Operands and flexible operands

The first operand has to be a register, the second one is something called a flexible operand

It can hold an immediate value, a register value, or a shifted register value

---

## Barrel shifter

The barrel shifter is a hardware component that can shift or rotate a register value in a single cycle

ARM uses this to allow for higher immediate values in instructions

There are only 12 bits available for immediate values in ARM instructions

But arm uses 32 bits for its registers

---

## Add, sub, rsub

These operations are arithmetic operations

Note that they move from right to left

```asm
add r0, r1, #1
```

so immediate value #1, is added to r1, then placed in r0

```asm
sub r0, r1, #1
```

immediate value #1 is subtracted from r1, then placed in r0


**mov**e the number 5 into r0, then **sub**tract 3 and place it into r3

After that **sub**tract r3 with 10 and place it into r2

---

## Bitwise operations

The same as arithmetic operations, but they work on the binary representation of numbers

- and
- orr
- eor (exclusive or)

What is the bitwise and of 1111 and 1001? Output in binary

---

## Tags, labels and branching

Tags are used to mark specific points in the program, the main one being `.text`, which indicates the start of the code segment

Labels allow the programmer to map names to locations in the program, which we can then branch to,

```
main:
```

The entry point of the program is usually labeled `main`

Using what we know, make a program that adds 2 numbers together and stores the result in a register

10 + 2

---

## Ending

When actually editing assembly code

use `bx lr` to return from functions, and stop the program

Run the program without `bx lr`

---

## Branching

To branch to a label, we use the `b` instruction then the label

---

## Cmp and cpsr

The cmp instruction compares two values by subtracting them and setting the condition flags in the cpsr register accordingly

---

## C and v

C and V are a bit less intuitive compared to N and Z

V - overflow flag, set when the result of an addition or subtraction unexpectedly changes signs

Twos complement representation is used for signed numbers in ARM assembly

C - carry flag, set when an addition results in a carry out of the most significant bit or when a subtraction requires a borrow

Note that the computer doesn't care if signed or unsigned, it just does the math

---
layout: two-cols
---

## Conditions

We can use the cpsr values to conditionally execute instructions by adding a two-letter suffix to the instruction

- al - always
- eq - equal (z set)
- ne - not equal (z clear)
- mi - minus/negative (n set)
- pl - plus/positive (n clear)
- vs - overflow set (v set)
- vc - overflow clear (v clear)

::right::
when signed
- gt - greater than (z clear, n = v)
- ge - greater than or equal (n = v)
- lt - less than (n != v)
- le - less than or equal (z set, n != v)

when unsigned
- hi - higher (c set, z clear)
- hs - higher than or same (c set)
- lo - lower (c clear)
- ls - lower than or same (c clear, z set)

---

## Data and .extern

The .data segment is where we store our variables and constants

the format is `name: type value`

```asm
greeting: .asciz "hellow world!\n"
```

`.extern` is used to declare external functions or variables that are defined outside the current assembly file

```asm
.extern printf
```

---

## Reverse engineering hello world
