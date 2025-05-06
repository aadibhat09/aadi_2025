---
layout: post
title: Binary Blog
description: A blog for the Binary team
permalink: /posts/binary-team-teach/
comments: True
---

## Popcorn Hack 1


```python
def binary_to_decimal(binary_str):
    decimal = 0
    for i in range(len(binary_str)):
        decimal += int(binary_str[-(i + 1)]) * (2 ** i)
    return decimal

# Example usage
binary_input = input("Enter a binary number: ")
decimal_output = binary_to_decimal(binary_input)
print(f"The decimal representation of {binary_input} is {decimal_output}.")
```

    The decimal representation of 1010100100101011 is 43307.


<br>

## Popcorn Hack 2


```python
import random
import time

def binary_addition_battle():
    num1 = bin(random.randint(0, 255))[2:]
    num2 = bin(random.randint(0, 255))[2:]

    print("Add the following binary numbers:")
    print(f"Number 1: {num1}")
    print(f"Number 2: {num2}")

    start_time = time.time()
    user_answer = input("Your answer (in binary): ")
    end_time = time.time()

    correct_answer = bin(int(num1, 2) + int(num2, 2))[2:]

    if user_answer == correct_answer:
        print(f"✅ Correct! Time: {end_time - start_time:.2f} seconds. +10 points!")
    else:
        print(f"❌ Incorrect. The correct answer was {correct_answer}. -5 points.")

# Run the game
binary_addition_battle()

```

    Add the following binary numbers:
    Number 1: 111111
    Number 2: 11100
    ✅ Correct! Time: 10.24 seconds. +10 points!


<br>

## Popcorn Hack 3


```python
import random

def binary_subtraction(bin1, bin2):
    max_len = max(len(bin1), len(bin2))
    bin1 = bin1.zfill(max_len)
    bin2 = bin2.zfill(max_len)

    result = ''
    borrow = 0

    for i in range(max_len-1, -1, -1):
        bit1 = int(bin1[i])
        bit2 = int(bin2[i])
        sub = bit1 - bit2 - borrow

        if sub == 0 or sub == 1:
            result = str(sub) + result
            borrow = 0
        elif sub == -1:
            result = '1' + result
            borrow = 1
        elif sub == -2:
            result = '0' + result
            borrow = 1

    return result.lstrip('0') or '0'

print("🧠 Binary Subtraction Challenge! 🧠")
score = 0
total_questions = 3

for question_num in range(1, total_questions + 1):
    num1 = random.randint(8, 63)
    num2 = random.randint(0, num1)

    bin1 = bin(num1)[2:]
    bin2 = bin(num2)[2:]

    print(f"\nProblem {question_num}: {bin1} - {bin2}")
    user_answer = input("Your answer: ").strip()

    correct_answer = binary_subtraction(bin1, bin2)

    if user_answer == correct_answer:
        print("✅ Correct!")
        score += 1
    else:
        print(f"❌ Incorrect. The correct answer was {correct_answer}.")

print(f"\n🎯 You got {score}/{total_questions} correct!")
print("Thanks for practicing!")

```

    🧠 Binary Subtraction Challenge! 🧠
    
    Problem 1: 110101 - 11010
    ✅ Correct!
    
    Problem 2: 111101 - 10100
    ✅ Correct!
    
    Problem 3: 101110 - 100110
    ❌ Incorrect. The correct answer was 1000.
    
    🎯 You got 2/3 correct!
    Thanks for practicing!


<br>

## Homework Hack


```python
import random
import time

def binary_addition(a, b):
    return bin(int(a, 2) + int(b, 2))[2:]

def binary_subtraction(a, b):
    if int(a, 2) < int(b, 2):
        return "Error"
    return bin(int(a, 2) - int(b, 2))[2:]

def decimal_to_binary(n):
    return bin(n)[2:]

def binary_to_decimal(b):
    return int(b, 2)

def binary_battle_royale():
    print("👾 Welcome to Binary Battle Royale! 👾")
    score = 0
    total_rounds = 3

    for round_num in range(1, total_rounds + 1):
        print(f"\n⚡ Round {round_num} ⚡")
        mode = random.choice(["addition", "subtraction", "dec_to_bin", "bin_to_dec"])

        if mode == "addition":
            num1 = bin(random.randint(0, 15))[2:]
            num2 = bin(random.randint(0, 15))[2:]
            print(f"Add these two binary numbers: {num1} + {num2}")
            user_answer = input("Your answer (binary): ").strip()
            correct_answer = binary_addition(num1, num2)
        elif mode == "subtraction":
            num1_val = random.randint(8, 31)
            num2_val = random.randint(0, num1_val)
            num1 = bin(num1_val)[2:]
            num2 = bin(num2_val)[2:]
            print(f"Subtract these two binary numbers: {num1} - {num2}")
            user_answer = input("Your answer (binary): ").strip()
            correct_answer = binary_subtraction(num1, num2)
        elif mode == "dec_to_bin":
            decimal_number = random.randint(0, 31)
            print(f"Convert this decimal number to binary: {decimal_number}")
            user_answer = input("Your answer (binary): ").strip()
            correct_answer = decimal_to_binary(decimal_number)
        elif mode == "bin_to_dec":
            binary_number = bin(random.randint(0, 31))[2:]
            print(f"Convert this binary number to decimal: {binary_number}")
            user_answer = input("Your answer (decimal): ").strip()
            correct_answer = str(binary_to_decimal(binary_number))

        if user_answer == correct_answer:
            print("✅ Correct!")
            score += 1
        else:
            print(f"❌ Incorrect. The correct answer was {correct_answer}.")

    print("\n🏆 Game Over! 🏆")
    print(f"Your final score: {score}/{total_rounds}")
    if score == total_rounds:
        print("🌟 Amazing job! You're a Binary Master!")
    elif score >= total_rounds // 2:
        print("👍 Good effort! Keep practicing!")
    else:
        print("💡 Don't worry — review the rules and try again!")

# Start the game
binary_battle_royale()

```

    👾 Welcome to Binary Battle Royale! 👾
    
    ⚡ Round 1 ⚡
    Add these two binary numbers: 1100 + 1010
    ✅ Correct!
    
    ⚡ Round 2 ⚡
    Add these two binary numbers: 1110 + 1110
    ✅ Correct!
    
    ⚡ Round 3 ⚡
    Add these two binary numbers: 11 + 1000
    ❌ Incorrect. The correct answer was 1011.
    
    🏆 Game Over! 🏆
    Your final score: 2/3
    👍 Good effort! Keep practicing!


To convert a binary number to a decimal number, multiply each bit by 2 raised to the power of its position from right to left (starting at 0), then add all the results together. For example, 11111111 in binary equals 255 in decimal.
