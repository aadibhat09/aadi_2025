---
layout: post
title: Math Class Homework
permalink: /posts/csa/unit_01/1_11/homework
comments: True
---

## Popcorn Hack 1


```Java
import java.util.Scanner;

public class PowerLevelCalculator {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        double basePower = 100.0;

        System.out.print("Enter your character level: ");
        int level = input.nextInt();

        double finalPower = basePower * Math.pow(1.2, level);

        System.out.println("\n=== Power Level Calculator ===");
        System.out.println("Level: " + level);
        System.out.println("Base Power: " + basePower);
        System.out.printf("Final Power: %.2f%n", finalPower);

        input.close();
    }
}

PowerLevelCalculator.main(null);
```

    Enter your character level: 
    === Power Level Calculator ===
    Level: 4
    Base Power: 100.0
    Final Power: 207.36


## Popcorn Hack 2


```Java
public class LootDropSimulator {
    public static void main(String[] args) {
        System.out.println("=== Loot Drop Simulator ===");

        int rarityRoll = (int)(Math.random() * 100) + 1;

        String rarity;
        int goldValue = 0;

        if (rarityRoll <= 60) {
            rarity = "COMMON";
            goldValue = (int)(Math.random() * (30 - 10 + 1)) + 10;
        } else if (rarityRoll <= 85) {
            rarity = "RARE";
            goldValue = (int)(Math.random() * (70 - 31 + 1)) + 31;
        } else {
            rarity = "LEGENDARY";
            goldValue = (int)(Math.random() * (100 - 71 + 1)) + 71;
        }

        System.out.println("Rarity Roll: " + rarityRoll);
        System.out.println("You got a: " + rarity + " item!");
        System.out.println("Gold Value: " + goldValue);
    }
}

LootDropSimulator.main(null);
```

    === Loot Drop Simulator ===
    Rarity Roll: 47
    You got a: COMMON item!
    Gold Value: 12


## Homework Hack


```Java
public class GameStatsCalculator {

    public static int healthDifference(int player1Health, int player2Health) {
        return Math.abs(player1Health - player2Health);
    }

    public static double calculateDamage(double baseDamage, double powerLevel) {
        return baseDamage * Math.pow(1.5, powerLevel);
    }

    public static double findDistance(int playerX, int playerY, int enemyX, int enemyY) {
        return Math.sqrt(Math.pow(enemyX - playerX, 2) + Math.pow(enemyY - playerY, 2));
    }

    public static int generateLoot(int minValue, int maxValue) {
        return (int)(Math.random() * (maxValue - minValue + 1)) + minValue;
    }

    public static void main(String[] args) {
        System.out.println("=== Homework Hack: Game Stats Calculator ===\n");

        System.out.println("Part A: Health Difference");
        System.out.println("75 vs 120 -> " + healthDifference(75, 120));
        System.out.println("100 vs 80 -> " + healthDifference(100, 80));
        System.out.println("50 vs 50 -> " + healthDifference(50, 50));

        System.out.println("\nPart B: Attack Damage");
        System.out.println("Base 10.0, Power 2 -> " + calculateDamage(10.0, 2));
        System.out.println("Base 15.0, Power 3 -> " + calculateDamage(15.0, 3));

        System.out.println("\nPart C: Distance Detector");
        System.out.println("(0,0) to (3,4) -> " + findDistance(0, 0, 3, 4));
        System.out.println("(1,1) to (4,5) -> " + findDistance(1, 1, 4, 5));

        System.out.println("\nPart D: Random Loot Generator");
        System.out.println("10–50 gold -> " + generateLoot(10, 50));
        System.out.println("1–6 dice -> " + generateLoot(1, 6));
        System.out.println("100–100 fixed -> " + generateLoot(100, 100));
    }
}

GameStatsCalculator.main(null);
```

    === Homework Hack: Game Stats Calculator ===
    
    Part A: Health Difference
    75 vs 120 -> 45
    100 vs 80 -> 20
    50 vs 50 -> 0
    
    Part B: Attack Damage
    Base 10.0, Power 2 -> 22.5
    Base 15.0, Power 3 -> 50.625
    
    Part C: Distance Detector
    (0,0) to (3,4) -> 5.0
    (1,1) to (4,5) -> 5.0
    
    Part D: Random Loot Generator
    10–50 gold -> 10
    1–6 dice -> 2
    100–100 fixed -> 100


## MC Questions

### Question 1
**Answer: A. 2**

**Explanation:** Math.pow(2, 3.0/2) calculates 2^1.5 = √8 ≈ 2.828. When cast to int, it truncates to 2.

---

### Question 2
**Answer: A. An int from 5 to 10, inclusive**

**Explanation:** Math.random() returns [0.0, 1.0). Multiplying by 6 gives [0.0, 6.0). Casting to int gives [0, 5]. Adding 5 gives [5, 10].

---

### Question 3
**Answer: A. -10**

**Explanation:**
- Math.round(-3.5) = -3 (rounds to nearest even number)
- Math.floor(-3.1) = -4.0 (rounds down)
- Math.ceil(-3.1) = -3.0 (rounds up)
- x = -3 + (-4) + (-3) = -10

---

### Question 4
**Answer: A. Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))**

**Explanation:** This correctly implements the Euclidean distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]

---

### Question 5
**Answer: B. 25**

**Explanation:** Math.sqrt(26) ≈ 5.099. When cast to int, both a and b equal 5. Therefore, 5 × 5 = 25.
