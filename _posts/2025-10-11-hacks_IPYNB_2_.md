---
layout: post
title: 3.6 and 3.7 Hacks
description: Completing the hacks for lessons 3.6 and 3.7
permalink: /posts/hacks
comments: True
---

<br>

# 3.6

<br>

## Hack 1

<br>

Create a simple conditional statement.

<br>


```python
# Declaring two boolean values
is_raining = False
is_bored = True

# Compares one value to the opposite of the other value
if is_bored and not is_raining:
    print("Go play outside!")
else:
    print("idk what to tell you man")
```

    Go play outside!


<br>

## Hack 2

<br>

Create a piece of code that compares two statements and checks if they are equal to each other.

<br>


```python
# Declaring two string values
friend_one = "Billy"
friend_two = "Bobby"

# Declaring two integer values
friend_one_length = len(friend_one)
friend_two_length = len(friend_two)

# Compares the values with each other
if friend_one == friend_two:
    print("Wow the friends have the same name!")
elif friend_one_length == friend_two_length:
    print("Wow the friends' names have the same amount of letters!")
else:
    print("The friends have completely different names.")
```

    Wow the friends' names have the same amount of letters!


<br>

## Hack 3

<br>

Create a simple program that classifies an individual as a “Child,” “Teenager,” or “Adult” based on their age input.

<br>


```python
age = int(input())

if age < 13:
    print("You are a child")
elif age < 18:
    print("You are a teenager")
else:
    print("You are an adult")
```

    You are a teenager


<br>

## Hack 4

<br>

Create a counter function that takes input.

<br>


```python
# Defining a function that takes an integer parameter, `n`
def counter(n):

    # Loop `n` times
    for i in range(n):

        # Take input
        inp = input("Type the number " + str(i))

        # Continue if the number is correct, break if it isn't
        if int(inp) == i:
            continue
        else:
            print("Come on man...")
            break

# Call the function with value of user's input
counter(int(input("Enter any number! ")))
```

    Come on man...


<br>

# 3.7

<br>

## Hack 1

<br>

Test out the examples above and change up the the starting values to play with how the conditions within each other work.
Demonstrate knowledge of nested conditionals by creating your own nested conditional statements.

<br>


```python

# Defining a function that takes an integer parameter, `latency`
def check_latency(latency):

    # Check if latency is more than 30 Mbps
    if latency > 30:

        # Check if latency is more than 50 Mbps
        if latency > 50:

            # Check if latency is more than 100 Mbps
            if latency > 100:
                return "You have potato internet."
            else:
                return "You can play Among Us with friends!."
        else:
            return "You can play Minecraft with friends!"
    else:
        return "You can play COD with friends!"

# Call the function with value of user's input
print(check_latency(int(input("What is your latency in Mbps?"))))
```

    You have potato internet.


<br>

## Extra Credit: Caesar Cipher

<br>


```python
# Defining a function that takes two paramenters, a string and an integer
def caesar(string, shift):

    # Preset alphabet for reference
    alphabet = "abcdefghijklmnopqrstuvwxyz"

    # Output
    new_string = ""

    # Looping through given string's characters
    for character in string:

        # If the character is a letter...
        if character.lower() in alphabet:

            # Add the shifted character to the new string
            index = alphabet.index(character.lower())
            new_index = index + shift
            new_string += alphabet[new_index]
        
        # Otherwise...
        else:
            # Add the normal character to the new string
            new_string += character

    # Return the new string
    return new_string

# Call the function with values from this string
print(caesar("hello my name is aadi bhat", -11))
```

    wtaad bn cpbt xh ppsx qwpi

