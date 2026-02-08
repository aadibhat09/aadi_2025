---
layout: post
title: CSA 2016 FRQ 3 Homework
description: Homework blog for CSA 2016 FRQ 3
permalink: /posts/frq-2016-3/
comments: True
---

# Challenge Part A and Part B (combined)


```Java
class Square
{
     
    public Square(boolean isBlack, int num)
    { /* implementation not shown */ }

}

class Crossword
{
  
  private Square[][] puzzle;

  public Crossword(boolean[][] blackSquares)
  {
    puzzle = new Square[blackSquares.length][blackSquares[0].length];

    int label = 1;
    for (int r = 0; r < blackSquares.length; r++) {
        for (int c = 0; c < blackSquares[0].length; c++) {
            if (toBeLabeled(r, c, blackSquares)) {
                puzzle[r][c] = new Square(false, label);
                label++;
            } else {
                puzzle[r][c] = new Square(blackSquares[r][c], 0);
            }
        }
    }
  }

    
  private boolean toBeLabeled(int r, int c, boolean[][] blackSquares)
  { 
    return (!(blackSquares[r][c]) &&
            (r == 0 || c == 0 || blackSquares[r - 1][c] ||
                blackSquares[r][c - 1]));
  }

}

public class Main {

    /** Returns true if the square at row r, column c should be labeled
     *  with a positive number; false otherwise.
     *  The square at row r, column c is black if and only if
     *  blackSquares[r][c] is true.
     *  Precondition: r and c are valid indexes in blackSquares.
     */
    private boolean toBeLabeled(int r, int c, boolean[][] blackSquares) 
    {
        return (!(blackSquares[r][c]) &&
            (r == 0 || c == 0 || blackSquares[r - 1][c] ||
                blackSquares[r][c - 1]));
    } 

    // Driver (do not modify)
    public void driver() {
        boolean[][] grid = {
            {true, false, false},
            {false, false, true},
            {false, true, false}
        };

        for (int r = 0; r < grid.length; r++) {
            for (int c = 0; c < grid[0].length; c++) {
                System.out.println(
                    "Square (" + r + "," + c + ") labeled? " +
                    toBeLabeled(r, c, grid)
                );
            }
        }
    }

    public static void main(String[] args) {
        Main tester = new Main();
        tester.driver();
    }
}

Main.main(null);
```

    Square (0,0) labeled? false
    Square (0,1) labeled? true
    Square (0,2) labeled? true
    Square (1,0) labeled? true
    Square (1,1) labeled? false
    Square (1,2) labeled? false
    Square (2,0) labeled? true
    Square (2,1) labeled? false
    Square (2,2) labeled? true


# How I Solved it

I started with part A for this problem. It was a bit confusing to understand the guidelines of when a square should be labeled as white and when it should not, but eventually I got it. I realized that since there were many conditions, I should use a couple if/else statements to make it work. I first check the important condition: is the box white? If not, automatically it will return `false`. If it is, then I can check for the other conditions. However, if I try to just check if the preceding row's cell or preceding column's cell is white, I could encouter errors if the preceding row or column itself did not exist. So, I first checked individually if the row or column existed, and then checked if the cell was white. If either of these conditions were true, then it would return `true`.

Then, I tried part B. The main takeaway for this problem was initializing an empty array and filling it with data afterward. I initialized a blank array: I used the row count as the length of the parameter array, and the column count as the length of the parameter's array at index 0. Then, to fill it, I used nested for loops to go through each row and column. I realized then that the numbers in each white square had to go in numerical order, so I backtracked and added a variable called `label`. Each time a white square was detected, the label count would increase and it would be added to the array.

# Area of Struggle

I initially got errors because I did not check in the `toBeLabeled()` method if a preceding row or column existed at all. I noticed that this was an index out of bounds error, because for cells that were either in the first row or the first column of the array, there was no existing preceding row or column. To fix this, I added a check to see if a row or column existed in the first place before making any changes:

```java
return (!(blackSquares[r][c]) &&
    (r == 0 || c == 0 || blackSquares[r - 1][c] ||
        blackSquares[r][c - 1]));
```

I also had a bit of trouble understanding the logic behind the labelling. I misread the prompt and thought I had to literally add a positive or negative sign into the cell depending on the color. Once I understood what it meant, I understood how to implement it. It took a little time for me to realize that I needed to create a `label` variable that increased whenever a white square was detected.

Finally, I found out that I need to properly read the guidelines for the FRQ. Initially, I had all of my logic correct and the output was correct, but I realized I did not name my variables according to the guidelines. I was able to fix it, but I understand now that this is important and should not be overlooked.
# Final result

My output:

```
Square (0,0) labeled? false
Square (0,1) labeled? true
Square (0,2) labeled? true
Square (1,0) labeled? true
Square (1,1) labeled? false
Square (1,2) labeled? false
Square (2,0) labeled? true
Square (2,1) labeled? false
Square (2,2) labeled? true
```

Everything matched up!

# Coderunner proof

<img src="{{site.baseurl}}/images/code-runner-proof-2.png">


