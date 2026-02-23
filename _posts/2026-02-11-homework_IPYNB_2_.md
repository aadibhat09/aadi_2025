---
layout: post
title: CSA 2019 FRQ 4 Homework
description: Homework blog for CSA 2019 FRQ 4
permalink: /posts/frq-2019-4/
comments: True
---

# Challenge Part A


```java

class LightBoard
{

    private boolean[][] lights;

    public LightBoard(int numRows, int numCols)
    {
        lights = new boolean[numRows][numCols];
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                lights[i][j] = (Math.random() < 0.4);
            }
        }
    }

    public boolean evaluateLight(int row, int col)
    { return false; }

    public void printBoard() {
        for (int r = 0; r < lights.length; r++) {
            for (int c = 0; c < lights[0].length; c++) {
                System.out.print((lights[r][c] ? "T" : "F") + " ");
            }
            System.out.println();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        LightBoard board = new LightBoard(5, 5);
        System.out.println("Part A - Initial Board (T = true/on, F = false/off):");
        board.printBoard();
    }
}

Main.main(null)

```

    Part A - Initial Board (T = true/on, F = false/off):
    T F F F F 
    T F T T F 
    F F F F F 
    F F F T F 
    F F F F F 


# Challenge Part B


```java

class LightBoard
{

    private boolean[][] lights;

    public LightBoard(int numRows, int numCols)
    {
        lights = new boolean[numRows][numCols];
        for (int i = 0; i < numRows; i++) {
            for (int j = 0; j < numCols; j++) {
                lights[i][j] = (Math.random() < 0.4);
            }
        }
    }

    public boolean evaluateLight(int row, int col)
    {
        int count = 0;

        for (int i = 0; i < lights.length; i++) {
            if (lights[i][col]) {
                count ++;
            }
        }

        boolean light = lights[row][col];

        if (light) {
            return count % 2 == 0 ? false : light;
        } else {
            return count % 3 == 0 ? true : light;
        }
    }

    public void printBoard() {
        for (int r = 0; r < lights.length; r++) {
            for (int c = 0; c < lights[0].length; c++) {
                System.out.print((lights[r][c] ? "T" : "F") + " ");
            }
            System.out.println();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        LightBoard board = new LightBoard(5, 5);
        System.out.println("Part A - Initial Board (T = true/on, F = false/off):");
        board.printBoard();
        
        System.out.println("Part B (row 1 col 1, row 2 col 2, ... row 5 col 5):");
        for (int i = 0; i < 5; i++) {
            System.out.println(board.evaluateLight(i, i));
        }
    }
}

Main.main(null)

```

    Part A - Initial Board (T = true/on, F = false/off):
    T F F T F 
    T T F F F 
    F F T F F 
    T T F F T 
    T T T T T 
    Part B (row 1 col 1, row 2 col 2, ... row 5 col 5):
    false
    true
    false
    false
    false


# How I Solved it

I started with Part A for this problem. This part was simple for the most part. I just had to initialize the 2D array and populate it with random booleans. I didn't really struggle with this part. I created the array with preset row and column counts. Then, I used a nested for loop to iterate through each row and column. I generated a random number from 0 to 1 using `Math.random()`. I used a ternary to compare its value to 0.4, as I thought this was the cleanest way to do it.

Then, I did Part B. The key takeaway for this part was understanding the question. There were many conditions for this question. I noticed first that regardless of whether the light at the row and column is on or off, we'd have to count the number of lights that are on in the column. So, before checking the light's condition, I made a for loop that ran through the number of rows and counted up the number of `true`s in the column, adding it to a `count` variable. After this, I checked the status of the light using `if (lights[row][col]) {}`. For both the if and the else case, I used a ternary to check the divisibility of the `count` variable by 2 or 3. I realized then that I would need to access `lights[row][col]` two more times in the function, so I cleaned it up by creating a boolean `lights` before the if statement that is set to `lights[row][col]`. Then, I was able to finish the ternaries.

# Area of Struggle

I did not have much of a struggle with the code, but I had trouble understanding the output of the code, particularly for part B. I made five test cases for part B in the `main()` method to test five cells in total, one from each row and column. For some of the outputs, I noticed that the corresponding cell was `F` (the light was off), and all the cells in the column were also `F`. I expected it to have an output of `false` for that cell, assuming it would take the second path and return the status of the light. I was confused when it had an output of `true`. It took me some time to realize that 0 % 3 is also equal to zero because 0 is divisible by three, and the output was indeed correct!
# Final result

These are some randomized outputs I got:

```
Part A - Initial Board (T = true/on, F = false/off):
F T F F T 
F F F F F 
F F F F T 
F T F F F 
F F T T T 
Part B (row 1 col 1, row 2 col 2, ... row 5 col 5):
true
false
false
false
true
```

```
Part A - Initial Board (T = true/on, F = false/off):
T F T F F 
F T F F F 
T F F F T 
F F T F F 
F F T F T 
Part B (row 1 col 1, row 2 col 2, ... row 5 col 5):
false
true
true
true
false
```

```
Part A - Initial Board (T = true/on, F = false/off):
T F F T F 
T T F F F 
F F T F F 
T T F F T 
T T T T T 
Part B (row 1 col 1, row 2 col 2, ... row 5 col 5):
false
true
false
false
false
```

# Coderunner proof

Looks like the coderunner is not working at all right now (it says error failed to fetch) so I can't really put anything here.

