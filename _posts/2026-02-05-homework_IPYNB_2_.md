---
layout: post
title: CSA 2024 FRQ 1 Homework
description: Homework blog for CSA 2024 FRQ 1
permalink: /posts/frq-2024-1/
comments: True
---

# Challenge Part A


```Java
class Feeder
{
    private int currentFood;
    
    public Feeder(int initialFood)
    {
        currentFood = initialFood;
    }
    
    public void simulateOneDay(int numBirds)
    {
        double chance = Math.random();
        if (chance >= 0.05) {
            int gramsPerBird = (int)(Math.random() * 41) + 10; // taken from FRQ instructions?
            int totalConsumed = numBirds * gramsPerBird;
            if (totalConsumed >= currentFood) {
                currentFood = 0;
            } else {
                currentFood -= totalConsumed;
            }
        } else {
            currentFood = 0;
        }
    }
    
    public int getCurrentFood()
    {
        return currentFood;
    }
}

public class Main
{
    public static void main(String[] args)
    {
        Feeder feeder = new Feeder(500);
        System.out.println("Starting food: " + feeder.getCurrentFood());
        feeder.simulateOneDay(12);
        System.out.println("Food after one day: " + feeder.getCurrentFood());
    }
}

Main.main(null);
```

    Starting food: 500
    Food after one day: 44


# Challenge Part B


```Java
class Feeder
{
    private int currentFood;
    
    public Feeder(int initialFood)
    {
        currentFood = initialFood;
    }
    
    public void simulateOneDay(int numBirds)
    {
        double chance = Math.random();
        if (chance >= 0.05) {
            int gramsPerBird = (int)(Math.random() * 41) + 10; // taken from FRQ instructions?
            int totalConsumed = numBirds * gramsPerBird;
            if (totalConsumed >= currentFood) {
                currentFood = 0;
            } else {
                currentFood -= totalConsumed;
            }
        } else {
            currentFood = 0;
        }
    }
    
    public int simulateManyDays(int numBirds, int numDays)
    {
        int daysWithFood = 0;
        for (int day = 0; day < numDays; day++)
        {
            if (currentFood > 0)
            {
                daysWithFood++;
                simulateOneDay(numBirds);
            }
            else
            {
                break;
            }
        }
        return daysWithFood;
    }
    
    public int getCurrentFood()
    {
        return currentFood;
    }
}

public class Main
{
    public static void main(String[] args)
    {
        Feeder feeder = new Feeder(500);
        System.out.println("Starting food: " + feeder.getCurrentFood());
        feeder.simulateOneDay(12);
        System.out.println("Food after one day: " + feeder.getCurrentFood());
        
        // Test Part B
        Feeder feeder2 = new Feeder(2400);
        int days = feeder2.simulateManyDays(10, 4);
        System.out.println("\nDays with food (should be <= 4): " + days);
        System.out.println("Remaining food: " + feeder2.getCurrentFood());
    }
}

Main.main(null);
```

    Starting food: 500
    Food after one day: 236
    
    Days with food (should be <= 4): 4
    Remaining food: 1130


# How I Solved it

I started with Part A for this problem. I read the task and found out the goal was to simulate an overall day for the bird feeder where either birds or a bear could visit it. I noticed that since there was probability and randomness involved, I needed to use the `Math.random()`. Since the chances were 5% for bear and 95% for birds, I generated the number anc checked first if it was greater than or equal to 0.05 (which would mean it is birds). If it was the birds, I calculated how much each bird eats using the formula `(int)(Math.random() * 41) + 10` to get a random value between 10 grams and 50 grams. Then, that number was multiplied by the total number of birds to get the total consumption. If the total consumption exceeded the current amount of food available in the feeder, the feeder would be emptied, otherwise I subtracted the consumption from the `currentFood` variable. Otherwise, if the chance was below 5%, it meant a bear visited the feeder, which meant the `currentFood` should be zero.

Then, I did Part B. The key takeaway for this part was that I needed to check if there was enough food before starting the simulation for each day and not after. I made a counter variable, called `daysWithFood`, and I used a for loop to iterate through each day. First, for each day, I checked if `currentFood` was greater than zero. if it was, I would add 1 to the counter and then call the method `simulateOneDay(numBirds)`. Then, if food ever ran out, i used a break statement to exit the loop early, as no more days could have food. Finally, I returned the count of days that had food.

# Area of Struggle

Initially, I had trouble understanding when I should be counting a day as having food. I thought that I should FIRST simulate the day, and THEN check if food remained. However, the problem asked for days where visitors found food, meaning there needs to always be food at the start of the day. Once I realized this, I restructured my logic to check if `currentFood` was greater than zero BEFORE calling the method `simulateOneDay()`.

Another confusion I had was with the probability check. I forgot that `Math.Random()` by default returns a decimal value between 0 and 1, and I had my logic set to interpret the random value as a percentage instead. Because of this, I was checking if the randomly generated value was greater than or equal to 5 instead of 0.05. Since the value would, of course, never be greater than or equal to 5, the code always assumed that it was a bear. I then realized my mistake and was able to fix it.

Finally, I realized that the getter method was needed since the `currentFood` variable is private. This is for encapsulation. So, I created the `getCurrentFood()` method to return this value.
# Final result

These are some randomized outputs I got:

```
Starting food: 500
Food after one day: 140

Days with food (should be <= 4): 4
Remaining food: 800
```

```
Starting food: 500
Food after one day: 308

Days with food (should be <= 4): 4
Remaining food: 1240
```

```
Starting food: 500
Food after one day: 0

Days with food (should be <= 4): 1
Remaining food: 0
```

This makes sense, it looks like the first two examples had birds, while the third one had a bear.

# Coderunner proof

<img src="{{site.baseurl}}/images/code-runner-proof-3.png">
<img src="{{site.baseurl}}/images/code-runner-proof-4.png">

