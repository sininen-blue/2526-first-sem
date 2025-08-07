---
title: Computer Systems Processors
exportFilename: 4 Memory
---

# Memory
Chapter 2

---
layout: center
---

# Primary Memory
Memory is the part of the computer where programs and data are stored

Often called *store* or *storage*, but the term *storage* tends to mean disk storage

---

## Bits

A bit is the basic unit of memory, it can either be a `0` or a `1`, and it's the simplest possible unit

Binary arithmetic is used because it's "efficient" but what that means is that it's easier to distinguish between two states than it is to distinguish between many states

You can store any value in any form of memory, but the way you store it will affect how you access it, and how efficiently and reliable you can access it

<img class="mx-auto" src="./images/fig1.png" alt="bird storage" width="400">

---

## BCD

Some computers like old IBM mainframes are advertised to have decimel as well as binary arithmetic.

They do this by using 4 bits to store one decimal digit using a code called BCD (Binary Coded Decimal)

Four bits provide 16 combinations, used for the 10 digits 0-9 plus 6 unused combinations

The number $1944$ in BCD would be

$0001\ 1001\ 0100\ 0100$ and in binary it would be $0000011110011000_2$

Sixteen bits each, but the BCD version can store up to `9999` while the 16 bit binary can store up to `65,536`

---

## Memory Addresses

A memory system consists of *cells* or *locations* which can store a piece of information, and has a unique *address*.

And if a memory has $n$ cells, they will have addresses from $0$ to $n-1$

If a cell consists of $k$ bists, then it can hold any one of $2^k$ bit combinations

Assuming you have 96-bit memory, you can make a storage system:

<img class="mx-auto" src="./images/fig2.png" alt="memory addresses" width="400">

---

## Memory Addresses

Computers that use the binary number system express memory addresses as binary numbers

And if an address has $m$ bits, the maximum number of addressable cells is $2^m$

For example to represent 11 addresses, you need at least 4 bits, because $2^4 = 16$ and $2^3 = 8$

And it's independent of the size of the cells

A memory system with $2^12$ cells, with 8 bits each, and a memory of $2^12$ cells with 64 bits each would both need 12-bit addresses

---

## Bytes and Words

An 8 bit cell is usually called a *byte*, sometimes called an *octet*

Bytes are grouped into `words`, and a computer with a 32-bit word, has 4 bytes per word while a computer with a 64-bit word has 8 bytes per word

This is important because most instructions operate on entire words, like adding two words together

So a 32 bit machine will have 32 bit registers and instructions for manipulating 32 bit words

But a 64 bit machine will have 64 bit registers and instructions for manipulating 64 bit words

---

## Byte Ordering

The bytes in a word can be numbered from left to right, or from right to left, this has major implications

<img class="mx-auto" src="./images/fig3.png" alt="byte ordering" width="400">

The left image, where the numbering starts at the "big" end is called *big-endian*

And the right image, where the numbering starts at the "little" end is called *little-endian*

If we only ever represented numbers, it would be easy to convert between the two

00000000 00000000 00000000 00000101

---

## Byte Ordering

But if we have mixes of numbers and characters, like in a string, then the ordering matters

<img class="mx-auto" src="./images/fig4.png" alt="byte ordering string" width="400">

For a single machine, it doesn't matter, but when one machine sends data to another, it can cause problems

Assuming that the big endian system sends the record one byte at a time

The big endians 0 goes to the little endians 0, the big endians 1 goes to the little endians 1, and so on

---

## Error correcting codes

Computer memories aren't perfect, voltage spikes, cosmic rays, and other factors can cause bits to flip

- To detect and correct errors, we can use *error correcting codes*
- Extra bits are added to each memory word to allow the computer to detect and correct errors

Suppose that a memory word consists of $m$ data bits, and we'll add $r$ redundant, or check bits. Given that the total length would be $n = m + r$.

- An $n$-bit unit containing $m$ data and $r$ check bits is often called a *codeword*

- Given any two *codewords*

- $10001001$ and $101100001$ it's possible to determine how many corresponding bits differ, in our case it's 3

This is called the *Hamming distance* between the two codewords

---

## Error correcting codes

Given that two codwewords have a hamming distance of $d$, it will require $d$ single bit errors to convert one into another

So it would take 3 errors to convert $10001001$ into $10110000$

A simple error detecting code is the *parity bit*

Consider a code in which a single *parity bit* is appended to data, it's chosen so that the number of 1 bits in the codeword is even

TODO
---

