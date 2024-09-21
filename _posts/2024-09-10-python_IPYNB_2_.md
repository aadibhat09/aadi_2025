---
layout: post
title: Basic Python Functions
description: Let's learn some basic Python functions!
permalink: /posts/python-functions
comments: False
---

<br>

### Input and Output

The `input()` function in Python allows you to collect the user's input through the terminal and store it as a string. You can use this to prompt the user!

The `print()` function allows you to output any data type to the terminal!


```
name = input("What is your name?")

print("Hello, " + name + "!")
```

    Hello, Aadi!


<br>

### Mathematics

Python has some basic math functions that we can use to perform operations. You have to import the `math` module to use them!


```
import math

print(math.sqrt(9))
print(math.cos(math.pi))
print(math.ceil(0.3))
```

    3.0
    -1.0
    1


<br>

### Emoji Package

We can install the `emoji` package using `pip install emoji`. This allows us to import functions such as `emojize`, which lets us use emojis in our code!

As you can see here, when we use the `emojize()` function on a string, all of the text that represents an emoji is turned into an emoji when printed!


```
from emoji import emojize

print(emojize(":thumbs_up: Python is awesome! :monkey:"))
```

    👍 Python is awesome! 🐒

