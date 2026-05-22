---
layout: post
title: CSA 2017 FRQ 4 Homework
description: Homework blog for CSA 2017 FRQ 4
permalink: /posts/frq-2017-4/
comments: True
---

# Challenge Part A


```Java
public class Successors {
    public static class Position {
        private int row;
        private int col;
        
        public Position(int r, int c) {
            row = r;
            col = c;
        }
        
        public String toString() {
            return "(" + row + "," + col + ")";
        }
    }
    
    public static Position findPosition(int num, int[][] intArr) {
        for (int r = 0; r < intArr.length; r++) {
            for (int c = 0; c < intArr[r].length; c++) {
                if (intArr[r][c] == num) {
                    return new Position(r, c);
                }
            }
        }
        return null;
    }
    
    public static void main(String[] args) {
        int[][] arr = {
            {15, 5, 9, 10},
            {12, 16, 11, 6},
            {14, 8, 13, 7}
        };
        
        System.out.println("findPosition(8, arr): " + findPosition(8, arr));
        System.out.println("findPosition(17, arr): " + findPosition(17, arr));
        System.out.println("findPosition(15, arr): " + findPosition(15, arr));
        System.out.println("findPosition(7, arr): " + findPosition(7, arr));
    }
}

Successors.main(null);
```

    findPosition(8, arr): (2,1)
    findPosition(17, arr): null
    findPosition(15, arr): (0,0)
    findPosition(7, arr): (2,3)


# Challenge Part B


```Java
public class Successors {
    public static class Position {
        private int row;
        private int col;
        
        public Position(int r, int c) {
            row = r;
            col = c;
        }
        
        public String toString() {
            return "(" + row + "," + col + ")";
        }
    }
    
    public static Position findPosition(int num, int[][] intArr) {
        for (int r = 0; r < intArr.length; r++) {
            for (int c = 0; c < intArr[r].length; c++) {
                if (intArr[r][c] == num) {
                    return new Position(r, c);
                }
            }
        }
        return null;
    }
    
    public static Position[][] getSuccessorArray(int[][] intArr) {
        Position[][] result = new Position[intArr.length][];
        
        for (int r = 0; r < intArr.length; r++) {
            result[r] = new Position[intArr[r].length];
            for (int c = 0; c < intArr[r].length; c++) {
                result[r][c] = findPosition(intArr[r][c] + 1, intArr);
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        int[][] arr = {
            {15, 5, 9, 10},
            {12, 16, 11, 6},
            {14, 8, 13, 7}
        };
        
        Position[][] successors = getSuccessorArray(arr);
        for (int r = 0; r < successors.length; r++) {
            for (int c = 0; c < successors[r].length; c++) {
                System.out.print(successors[r][c] + " ");
            }
            System.out.println();
        }
    }
}

Successors.main(null);
```

    (1,1) (1,3) (0,3) (1,2) 
    (2,2) null (1,0) (2,3) 
    (0,0) (0,2) (2,0) (2,1) 


# How I Solved It

I tackled Part (a) first. I set up nested `for` loops to traverse the 2D array row by row and column by column. For each position, I compared the element at `intArr[r][c]` to the target number. When I found a match, I immediately returned a new `Position` object with the current row and column. If the loops completed without finding anything, I returned `null`. This is a classic 2D array search pattern.

Then I did Part (b). The key was using `findPosition` appropriately, which is why the scoring guidelines emphasized this. For each element in the input array, I needed to find where its successor (the next integer value) was located. I set up the result array to match the dimensions of the input array using nested array initialization. For each position, I called `findPosition(intArr[r][c] + 1, intArr)` to find the successor and stored the result directly into the corresponding position in my result array.

# Area of Struggle

This FRQ was relatively clean, but there was one thing to think about carefully: handling the jagged 2D array properly. In Part (b), when initializing the result array, I needed to mirror the structure of the input array. Some 2D arrays might not be rectangular (each row could have different lengths). By initializing `result[r]` inside the outer loop and setting its length to `intArr[r].length`, I ensured the result array had the exact same dimensions as the input, whether it was rectangular or jagged. This prevented any potential dimension mismatches.

<img src="{{site.baseurl}}/images/idk2.png">
