---
layout: post
title: Simulation Games and Random Algorithms Blog
description: A blog for the Simulation Games and Random Algorithms team
permalink: /posts/simulation-games-and-random-algorithms/
comments: True
---

<br>

# Random Algorithms
<br>

## Popcorn Hack 1: Brainstorm

I think a random algorithm is a way for a computer to be able to generate a random value using data from user input. We would need random algorithms for real-life coding situations for many reasons. An example would be how Minecraft worlds are randomly generated from a seed, or to main a coin flipper or card shuffler. I think CollegeBoard will ask me how a random algorithm can be implemented into someone's code, or what the result of the algorithm could be.

<br>

## Popcorn Hack 2


```python
# Popcorn Hack Number 2 (Random): Make a random algorithm to choose a daily activity:
import random
# Step 1: Define a list of activities
activities = ['Cook pasta', 'Doomscroll reels', 'Do homework', 'Walk dog', 'Go to gym', 'Eat a full pineapple']
# Step 2: Randomly choose an activity
random_activity = random.choice(activities)
# Step 3: Display the chosen activity
print(f"Today’s random activity: {random_activity}")
```

    Today’s random activity: Doomscroll reels


<br>

## Popcorn Hack 3


```python
# Popcorn Hack Number 3: Using a loops in random
# This popcorn hack assigns an activity to each person
import random
hosts = ['Aadi', 'Aditya', 'Ansh', 'Derek', 'Gyutae', 'Rayhaan']
activities = ['watch tv', 'eat cake', 'play a game', 'go to pool', 'sing', 'scroll reels']
# Randomly shuffle the list of activities to assign them randomly to the guests
random.shuffle(activities)
# Loop through each guest and assign them a random activity
for i in range(len(hosts)):
    print(f"{hosts[i]} will be monitoring {activities[i]}!")
```

    Aadi will be monitoring watch tv!
    Aditya will be monitoring scroll reels!
    Ansh will be monitoring play a game!
    Derek will be monitoring sing!
    Gyutae will be monitoring eat cake!
    Rayhaan will be monitoring go to pool!


<br>
<hr>

# Simulation Games

<br>

## Popcorn Hack 1




```python
import random

def spinner():
    return random.randint(1, 1000000000000000000)

number = spinner()
print("Number:", number)
```

    Number: 445970208443364150


<br>

## Popcorn Hack 2


```python
import random

def play_rock_paper_scissors():
    choices = ['rock', 'paper', 'scissors']
    computer_choice = random.choice(choices)
    user_choice = input("Enter your choice (rock, paper, or scissors): ")

    if user_choice not in choices:
        print("Invalid choice. Please try again.")
        return

    print("Computer chose:", computer_choice)
    print("You chose:", user_choice)

    if user_choice == computer_choice:
        print("It's a tie!")
    elif (user_choice == 'rock' and computer_choice == 'scissors') or (user_choice == 'paper' and computer_choice == 'rock') or (user_choice == 'scissors' and computer_choice == 'paper'):
        print("You win!")
    else:
        print("You lose!")

play_rock_paper_scissors()
```

    Computer chose: scissors
    You chose: rock
    You win!


<br>
<hr>

# MCs

<br>

## Question 1

Answer: C

3 1 2 because 3 cannot be printed on the first iteration

## Question 2

Answer: D

This makes the output have a 75% chance

## Question 3

Answer: C

This won’t be accurate

## Question 4

Answer: D

The number of predators does not change

<br>
<hr>

# Homework Hacks

<br>

## Homework Hack 1


```python
import random

students = ['Jim', 'Jam', 'Jem', 'Jum', 'Jom', 'Cool Boy', 'Mr. Griddy', 'Iphone', 'Bowl', 'Risha Guha', 'Plate', 'Monkeykindman', 'Black FOrest COokie', 'Sir Minion Man', 'Sir Bronze']
teams = ['Team super man', 'Team not so super man', 'Team Super duper DUPER man']

assignments = {team: [] for team in teams}
for student in students:
    team = random.choice(teams)
    assignments[team].append(student)

for _, j in assignments.items():
    print(team + ": " + ", ".join(j))
```

    Team Super duper DUPER man: Jem, Mr. Griddy, Bowl, Sir Minion Man
    Team Super duper DUPER man: Jam, Jum, Jom, Risha Guha
    Team Super duper DUPER man: Jim, Cool Boy, Iphone, Plate, Monkeykindman, Black FOrest COokie, Sir Bronze


<br>

## Homework Hack 2


```python
import random

forecasts = ['sunny', 'cloudy', 'rainy']
days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

for i in days:
    print("It is going to be " + random.choice(forecasts) + " on " + i)
```

    It is going to be cloudy on monday
    It is going to be cloudy on tuesday
    It is going to be rainy on wednesday
    It is going to be rainy on thursday
    It is going to be cloudy on friday
    It is going to be sunny on saturday
    It is going to be sunny on sunday


<br>

## Homework Hack 3


```python
import random

customers = 5

time = [random.randint(1, 5) for _ in range(customers)]

total_time = sum(time)

for i, j in enumerate(time, 1):
    print("Customer number " + str(i) + " takes " + str(j) + " minutes to get coffee")

print("Total time: " + str(total_time) + " minutes")

```

    Customer number 1 takes 1 minutes to get coffee
    Customer number 2 takes 2 minutes to get coffee
    Customer number 3 takes 1 minutes to get coffee
    Customer number 4 takes 4 minutes to get coffee
    Customer number 5 takes 1 minutes to get coffee
    Total time: 9 minutes

