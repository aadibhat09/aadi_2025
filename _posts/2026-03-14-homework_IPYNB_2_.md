---
layout: post
title: CSA 2017 FRQ 1 Homework
description: Homework blog for CSA 2017 FRQ 1
permalink: /posts/frq-2017-1/
comments: True
---

# Challenge Part A


```Java
import java.util.ArrayList;

public class Digits {
    private ArrayList<Integer> digitList;

    public Digits(int num) {
        digitList = new ArrayList<Integer>();
        
        if (num == 0) {
            digitList.add(0);
        }
        
        while (num > 0) {
            digitList.add(0, num % 10);
            num /= 10;
        }
    }

    public ArrayList<Integer> getDigitList() {
        return digitList;
    }

    public static void main(String[] args) {
        Digits d1 = new Digits(15704);  // Use Digits, not Main
        System.out.println("Digits(15704): " + d1.getDigitList());

        Digits d2 = new Digits(0);
        System.out.println("Digits(0): " + d2.getDigitList());

        Digits d3 = new Digits(9);
        System.out.println("Digits(9): " + d3.getDigitList());
    }
}

Digits.main(null);
```

    Digits(15704): [1, 5, 7, 0, 4]
    Digits(0): [0]
    Digits(9): [9]


# Challenge Part B


```Java
import java.util.ArrayList;

public class Digits {
    private ArrayList<Integer> digitList;

    public Digits(int num) {
        digitList = new ArrayList<Integer>();
        if (num == 0) {
            digitList.add(0);
        }
        while (num > 0) {
            digitList.add(0, num % 10);
            num /= 10;
        }
    }

    public boolean isStrictlyIncreasing() {
        for (int i = 0; i < digitList.size() - 1; i++) {
            if (digitList.get(i) >= digitList.get(i + 1)) {
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(new Digits(7).isStrictlyIncreasing());
        System.out.println(new Digits(1356).isStrictlyIncreasing());
        System.out.println(new Digits(1336).isStrictlyIncreasing());
        System.out.println(new Digits(1536).isStrictlyIncreasing());
        System.out.println(new Digits(65310).isStrictlyIncreasing());
    }
}

Digits.main(null);
```

    true
    true
    false
    false
    false


# How I Solved it

I started with Part A for this problem. This part was simple for the most part. I had to rip digits off the given integer, which I did using a `while` loop, modulo 10, and dividing by 10. To make sure they appeared in the correct order, I used `digitList.add(0, num % 10)` to insert each digit at the front of the list, automatically reversing them into proper order. 

Then, I did Part B. The key takeaway for this part was comparing consecutive elements. I set up a `for` loop to iterate up to `digitList.size() - 1` so I wouldn't hit an `IndexOutOfBoundsException` when checking `i` and `i + 1`. If the current digit was ever greater than or equal to the next digit, I immediately returned `false`. If the loop finished without finding any violations, I returned `true`.

# Area of Struggle

I did not have much of a struggle with Part B, but I had trouble initially with an edge case in Part A. My code for ripping the digits failed when the input number was exactly `0`, because my `while (num > 0)` loop never ran, resulting in an empty ArrayList. I fixed this by adding a quick `if (num == 0)` check right at the start of the constructor to simply add `0` to the list directly.

# Final result

These are some outputs I got:

```
Digits(15704): [1, 5, 7, 0, 4]
Digits(0): [0]
Digits(9): [9]
```

```
true
true
false
false
```

# Coderunner proof

<img src="{{site.baseurl}}/images/3-14-a.png">
<img src="{{site.baseurl}}/images/3-14-b.png">
