---
layout: post
title: AP CSA Tri 2 Final Review
description: Final review blog for AP CSA Tri 2
permalink: /posts/tri-2-final/
comments: True
---

# Analytics Summary

| GitHub Analytics |
|---|
| ![GitHub Analytics]({{site.baseurl}}/images/2-22-26-analytics.png) |

| OCS Analytics |
|---|
| ![OCS Analytics]({{site.baseurl}}/images/2-22-26-analytics-2.png) |

# MCQ Analysis

| MCQ 1 (old) | MCQ 2 (new) | 
|---|--|
| ![MCQ 1 (old)]({{site.baseurl}}/images/36of42.png) | ![MCQ 2 (new)]({{site.baseurl}}/images/39of42.png) |
| **36 / 42** | **39 / 42** |
| **85.7% Accuracy** | **92.9% Accuracy** |
| **1:16:33** | **1:07:00** |

## I. Overview

This reflection examines three incorrectly answered questions from an AP Computer Science A practice exam. The errors span multiple units and reveal specific conceptual gaps requiring targeted remediation.

The mistakes cluster around **procedural tracing** (loops and string operations), **static variable behavior**, and **algorithm visualization** (insertion sort). While these topics appear straightforward, they require careful step-by-step execution tracking—a skill that demands deliberate practice.

## II. Question-Level Breakdown

| **Question** | **Topic**                          | **AP Unit / Subtopic**        |
| ------------ | ---------------------------------- | ----------------------------- |
| Q12           | Expression equivalent to nested ifs         | 2.4 – Nested `if` Statements & 2.9 - Implementing Selection and Iteration Algorithms                 |
| Q14           | Equivalent Boolean expression  | 2.6 - Comparing Boolean Expressions    |
| Q19           | Adding and setting in numList | 4.7 - Wrapper Classes & 4.8 - `ArrayList` Methods        |


## III. Deep Analysis, Approach, and Corrections

### **Q12 – Expression Equivalent to Nested Ifs**

**Topic:** Nested `if` Statements & Boolean Logic  
**Code:**
```java
boolean b1 = true;
if (num > 0) {
    if (num >= 100) {
        b1 = false;
    }
} else {
    if (num >= -100) {
        b1 = false;
    }
}
```

**My Approach:**  
I selected **A: `boolean b2 = (num > -100) && (num < 100);`**. I incorrectly simplified the conditions under which `b1` remains `true`. I assumed that since `b1` becomes `false` at the extremes (`>= 100` and `<= -100` when `<= 0`), it must be `true` strictly between `-100` and `100`.

**Correct Approach:**  
Let's trace when `b1` becomes `false`:
1. If `num > 0` AND `num >= 100` (which simplifies to `num >= 100`).
2. If `num <= 0` (the `else` branch) AND `num >= -100` (which means `-100 <= num <= 0`).

Therefore, `b1` remains `true` in the opposite cases:
1. When `num < -100` (it falls into the `else` branch but fails the `num >= -100` check).
2. When `0 < num < 100` (it falls into the `if (num > 0)` branch but fails the `num >= 100` check).

Combining these gives: `(num < -100) || (num > 0 && num < 100)`.

**Correct Answer:** D

**Correction:**  
When simplifying nested conditionals, explicitly write out the mathematical ranges where the variable changes state, then find the complement. Don't rely on intuition for complex boundary conditions.


### **Q14 – Equivalent Boolean Expression**

**Topic:** Comparing Boolean Expressions & De Morgan's Laws  
**Expression:** `!(a && b) || c`

**My Approach:**  
I selected **C: `!a && !b && c`**. I attempted to apply De Morgan's Laws but incorrectly changed the outer `||` to an `&&` and failed to properly distribute the negation over the `&&` inside the parentheses.

**Correct Approach:**  
According to De Morgan's Laws, the negation of an AND statement is the OR of the negations:
`!(a && b)` is equivalent to `!a || !b`.

Substituting this back into the original expression:
`(!a || !b) || c` which simplifies to `!a || !b || c`.

**Correct Answer:** D

**Correction:**  
Apply De Morgan's Laws strictly step-by-step. `!(A && B) -> !A || !B`. Never alter operators outside the negated parentheses during this step.


### **Q19 – Adding and Setting in ArrayList**

**Topic:** `ArrayList` Methods (`add` and `set`)  
**Code:**
```java
ArrayList<Integer> numList = new ArrayList<Integer>();
numList.add(3);
numList.add(2);
numList.add(1);
numList.add(1, 0);
numList.set(0, 2);
```

**My Approach:**  
I selected **A: `[1, 3, 0, 1]`**. I confused the parameters for the `add(index, element)` and `set(index, element)` methods, effectively tracing `numList.add(0, 1)` and `numList.set(2, 0)`.

**Correct Approach:**  
Let's trace the list state after each operation:
1. `numList.add(3);` → `[3]`
2. `numList.add(2);` → `[3, 2]`
3. `numList.add(1);` → `[3, 2, 1]`
4. `numList.add(1, 0);` → Inserts `0` at index `1`, shifting subsequent elements right. → `[3, 0, 2, 1]`
5. `numList.set(0, 2);` → Replaces the element at index `0` with `2`. → `[2, 0, 2, 1]`

**Correct Answer:** B

**Correction:**  
Always remember the method signatures: `add(index, element)` shifts elements to the right, while `set(index, element)` replaces the existing element. Write out the array state after *every single line* to prevent mental mix-ups.


## IV. Comparison: MC1 vs MC2

###*Performance Improvement
- **MC1 Score:** 36 / 42 (85.7%)
- **MC2 Score:** 39 / 42 (92.9%)
- **Time Taken:** Improved from 1:16:33 to 1:07:00.

### Skill Progression & Insights
1. **Execution Tracing:** In MC1, my primary weakness was incomplete mental traces of iterative processes (loops and string manipulations). In MC2, I successfully navigated complex loops and string traversals, indicating that my structured tracing methodology (writing out intermediate states) has paid off.
2. **Algorithm Visualization:** I missed an insertion sort question in MC1 due to an off-by-one error. In MC2, I correctly answered all sorting and searching algorithm questions, showing improved visualization and tracking of algorithm passes.
3. **Current Weaknesses (MC2):** The errors in MC2 shifted from procedural tracing to Boolean logic simplification (De Morgan's Laws, nested conditionals) and API method signatures (`ArrayList` add vs. set). These are more about memorization and strict rule application rather than complex state tracking.
4. **Time Management:** Despite scoring higher, I finished the exam nearly 10 minutes faster. This suggests increased confidence and fluency in reading Java code, allowing me to allocate more time to the few questions that required deep analysis.

### Action Plan for Next Trimester
- **Master Boolean Algebra and Logical Equivalencies:** Since my errors shifted toward logic simplification (De Morgan's Laws and nested conditionals), I will dedicate time to explicitly writing out truth tables and mathematical ranges for complex `if/else` structures. I will stop relying on mental math for boundary conditions.
- **Solidify Java API Method Signatures:** I will create a strict memorization routine for standard Java Collections Framework APIs. Specifically, I need to drill the exact parameter orders and return types for `ArrayList` methods (like `add(index, element)` vs. `set(index, element)`) and `String` methods to prevent simple mix-ups.
- **Implement a "Trace-Every-Line" Rule for Data Mutations:** While my loop tracing has improved, I still make assumptions when data structures are modified. Moving forward, I will write out the exact state of an array or list after *every single line* of code that mutates it.
- **Increase Speed on Syntax and API Trivia:** To free up even more time for complex algorithm questions, I will take timed, rapid-fire quizzes focused purely on Java syntax, operator precedence, and method behaviors.

### Homework Resources for Study
- **Targeted CodingBat Practice:** I will complete the `Logic-2` and `String-2` problem sets on CodingBat. These exercises are perfect for reinforcing boolean expressions, De Morgan's Laws, and string manipulations in a rapid, test-driven environment.
- **AP Classroom Topic Questions:** I will revisit the AP Classroom question banks specifically for Unit 2 (Using Objects) and Unit 7 (ArrayList). I will filter for questions that have less than a 50% national pass rate to challenge my understanding of edge cases.
- **Custom API Flashcards:** I will build a physical or digital (Anki/Quizlet) flashcard deck pulling directly from the official Java API documentation. The deck will focus on the exact parameters, return types, and side effects of methods in the `String`, `Math`, and `ArrayList` classes.
- **Refactoring Past Labs:** I will go back to my previous trimester labs and specifically look for areas where I used deeply nested `if` statements. I will practice refactoring those sections into single, simplified boolean expressions using De Morgan's Laws to build practical muscle memory.

# FRQ Work

Finally, I have been logging my FRQ practice homework in my blogs. With each homework I complete, I made a note about key takeaways and challenges that I overcame to accomplish it. What's unique about my blogs is that I go through my step-by-step line of reasoning that I take on when going through the problems, and I show my genuine self-feedback through my writing.

| **Title** | **Key Takeaways** | **Link** |
| --------- | ----------------- | -------- |
| 2025 FRQ 2 | I learned to carefully decide what properties a class needs before coding. I also realized the importance of handling special cases (like a point value of zero) to prevent huge logic errors with state switching. | [View Blog]({{site.baseurl}}/posts/frq-2025-2/) |
| 2016 FRQ 3 | The main takeaway was learning how to initialize an empty 2D array and fill it with data afterward. I also learned to always check if a preceding row or column exists to avoid index out of bounds errors. | [View Blog]({{site.baseurl}}/posts/frq-2016-3/) |
| 2024 FRQ 1 | The key takeaway was understanding the sequence of events, specifically checking for conditions *before* starting a simulation loop. I also solidified my understanding of `Math.random()` returning a decimal between 0 and 1. | [View Blog]({{site.baseurl}}/posts/frq-2024-1/) |
| 2019 FRQ 4 | The key takeaway was carefully understanding complex problem conditions. I learned to break down the logic, such as counting the number of active lights in a column before evaluating the specific light's status. | [View Blog]({{site.baseurl}}/posts/frq-2019-4/) |
