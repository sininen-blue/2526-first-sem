---
title: 12 File Handling
exportFilename: 12 File Handling
lineNumbers: true
---

# Dealing with Files

---

# CRUD

The vast majority of user facing software, especially web software, is about CRUD operations.

# C
ends with an e
# R
synonym of view
# U
6 letters
# D
antonym of make

---

## CRUD

We can already do crud operations on data in memory

1. Create - `list1 = [1, 2, 3]`
2. Read - `list1[0]`
3. Update - `list1[0] = 5`
4. Delete - `list1[0] = None`

But if we close the program, all that data is lost.

This is because the data is stored in RAM, which is volatile memory.

So we need to store the data in *non*-volatile memory, like a file on disk.

---

# Files

*Every* computer system uses files to save things from one computation to the next.

Because of that, Python, along with almost every programming language, has built-in support for dealing with files.

The simplest way to deal with files is using the built-in `open` function.

```python
handle = open("myfile.txt", "r")
```

---

## File Handles

```python
handle = open("myfile.txt", "r")
```

Notice that I named the variable `handle`. This is because the object returned by `open` is a *file handle*.

It's an abstraction that represents the file, and allows us to read from or write to it. It's a way of *handling* the file.

---

## Files Handles

```python
handle = open("myfile.txt", "r")
```

This function instructs the operating system to open the file `myfile.txt` in read mode (`"r"`), and return a handle for that file. If the file does not exist, it will create it.

If we wanted it to be in write mode, we would use `"w"` instead.

```python
handle = open("myfile.txt", "w")
```

---

## Create

And with that file handle, we can now do CRUD operations on the file.

To "create" inside the file, we would write data to that file so that we can read it later.

```python
name_handle = open("students", "w")
for i in range(2):
    name = input("Enter name: ")
    name_handle.write(name + "\n")
name_handle.close()
```

What does this code do?
1. What does `open` in line 1 create?
2. How about line 3?
3. Guess what line 4 does?
4. Guess what line 5 does?

---

## Create

```python
name_handle = open("students", "w")
for i in range(2):
    name = input("Enter name: ")
    name_handle.write(name + "\n")
name_handle.close()
```

Firstly this creates or opens a file handle called `students` in write mode.

Then it asks the user to input a name twice, and writes each name to the file, followed by a newline character.

Finally, it closes the file handle, which is important to ensure that all data is written to the file and resources are freed.

Note that 
1. Closing the file handle is *important*
2. Writing to a file in `"w"` mode *overwrites* the file if it already exists

---

## Create

We can ensure that we don't forget to close a file by opening it with a `with` statement.

```python
with open(file_name, mode) as name_handle:
    code_block_here
```

This `open`s the file, `mode` determines the open mode of that file,  assigns it to the `name_handle` variable, and then runs the code block.

When the code block is done, it automatically closes the file handle for us once it's no longer in the `with` block.

---

## Read

And once we have a file with data in it, we can read that data back.

```python
with open("students", "r") as student_handle:
    for x in student_handle:
        print(x)
```

This reads (denoted by the `"r"`) the file as multiple lines because when we wrote the file we included a ____ character

---
layout: two-cols
---

## Read

Note in normal convention, you would usually use *line* instead of *x*

```python
for line in student_handle:
    print(line)
```

Because a file handle, by default, is an iterable that yields each line in the file.

::right::

But often you'll end up using `readlines()` as getting all the lines is more convenient

```python
with open("students", "r") as student_handle:
    lines = student_handle.readlines()
    print(lines)
```

---

## Update and Delete

There are a few ways of updating and deleting data in a file, the simplest way is to read the file, modify the data in memory, and then write it back to the file.

Essentially replacing the entire file with a new version

```python
lines = []
with open("students", "r") as student_handle:
    lines = student_handle.readlines()

lines.append(input("Enter new name:  "))

with open("students", "w") as student_handle:
    student_handle.writelines(lines)
```

Where `writelines` writes a list of strings to the file.

---

## Delete

To delete a line, we can read the file, remove the line from the list, and then write it back.

```python
lines = []
with open("students", "r") as student_handle:
    lines = student_handle.readlines()

lines.remove(input("Enter name to delete:  "))

with open("students", "w") as student_handle:
    student_handle.writelines(lines)
```

Note that `[list object].remove()` removes the first occurrence of the specified value.

---

# Summary

Crud Operations
- create - `opent("file.txt", "w")`
- read - `open("file.txt", "r")`
- update = `readlines()` -> modify -> `writelines()`
- delete = `readlines()` -> modify -> `writelines()`

Files
- Files let programs store data permanently on disk
- Always close the file, or use `with`
- "w" overwrites, "a" appends, "r" reads

---

# Exercise

Submission link here

- Filename: **lastname_firstname.py**
- Deadline: **Before the end** of this class

Write a program that first stores the first 10 Fibonacci numbers, to a file named `primes.txt`

Each number should be on a separate line, and then the program should read the numbers from the file and print them.

Note that the Fibonacci sequence is defined as:

$$
F_n = F_{n-1} + F_{n-2}
$$

---

## Common file operations

```python
open(fn, 'w') # Creates a file and handle in write mode
open(fn, 'r') # Opens a file and creates a handle in read mode
open(fn, 'a') # Opens a file and creates a handle for appending

fh.read() # returns a string of the file from the file handle
fh.readline() # returns the next line in the file from the file handle
fh.readlines() # returns a list, each element is one of the lines
fh.write(s) # writes a string to the file
fh.writelines(S) # writes a list of strings to the file
fh.close() # closes the file handle
```

- fn = filename
- fh = file handle
- s = string
- S = list of strings
