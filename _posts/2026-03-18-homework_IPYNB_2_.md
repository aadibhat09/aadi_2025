---
layout: post
title: CSA 2024 FRQ 3 Homework
description: Homework blog for CSA 2024 FRQ 3
permalink: /posts/frq-2024-3/
comments: True
---

# Challenge Part A


```Java
import java.util.ArrayList;
import java.util.Arrays;

public class WordChecker {
    private ArrayList<String> wordList;
    
    public WordChecker(ArrayList<String> words) {
        wordList = words;
    }
    
    public boolean isWordChain() {
        for (int i = 1; i < wordList.size(); i++) {
            if (!wordList.get(i).contains(wordList.get(i - 1))) {
                return false;
            }
        }
        return true;
    }
    
    public static void main(String[] args) {
        ArrayList<String> test1 = new ArrayList<>(Arrays.asList("an", "band", "band", "abandon"));
        WordChecker checker1 = new WordChecker(test1);
        System.out.println("Test 1: " + test1);
        System.out.println("Result: " + checker1.isWordChain());
        
        ArrayList<String> test2 = new ArrayList<>(Arrays.asList("to", "too", "stool", "tools"));
        WordChecker checker2 = new WordChecker(test2);
        System.out.println("Test 2: " + test2);
        System.out.println("Result: " + checker2.isWordChain());
    }
}

WordChecker.main(null);
```

    Test 1: [an, band, band, abandon]
    Result: true
    Test 2: [to, too, stool, tools]
    Result: false


# Challenge Part B


```Java
import java.util.ArrayList;
import java.util.Arrays;

public class WordChecker {
    private ArrayList<String> wordList;
    
    public WordChecker(ArrayList<String> words) {
        wordList = words;
    }
    
    public ArrayList<String> createList(String target) {
        ArrayList<String> result = new ArrayList<String>();
        for (String word : wordList) {
            if (word.startsWith(target)) {
                result.add(word.substring(target.length()));
            }
        }
        return result;
    }
    
    public static void main(String[] args) {
        ArrayList<String> words = new ArrayList<>(Arrays.asList("catch", "bobcat", "catchacat", "cat", "at"));
        WordChecker checker = new WordChecker(words);
        
        System.out.println("Original wordList: " + words);
        System.out.println();
        
        ArrayList<String> result1 = checker.createList("cat");
        System.out.println("createList('cat'): " + result1);
        
        ArrayList<String> result2 = checker.createList("catch");
        System.out.println("createList('catch'): " + result2);
        
        ArrayList<String> result3 = checker.createList("dog");
        System.out.println("createList('dog'): " + result3);
    }
}

WordChecker.main(null);
```

    Original wordList: [catch, bobcat, catchacat, cat, at]
    
    createList('cat'): [ch, chacat, ]
    createList('catch'): [, acat]
    createList('dog'): []


# How I Solved It

Part (a) was about checking if a list of words forms a "chain" where each word contains the previous one as a substring. I used a simple `for` loop starting at index 1 to iterate through the wordList. For each word, I used the `contains()` method to check if it contains the previous word as a substring. If any word didn't contain its predecessor, I immediately returned `false`. If the loop completed without finding any violations, I returned `true`.

Part (b) required creating a new ArrayList based on words that start with a target string, with that target removed. I created a new ArrayList and used an enhanced `for` loop to iterate through wordList. For each word, I checked if it started with the target using `startsWith()`. If it did, I added the word with the target prefix removed using `substring(target.length())`. This preserved the original order while filtering and modifying the words.

# Area of Struggle

Part (a) was straightforward once I understood the substring logic. Part (b) required careful attention to string manipulation. The key was remembering that `substring(target.length())` removes exactly the characters at the beginning, which works perfectly even when the target is completely removed (leaving an empty string). I made sure to create a new ArrayList rather than modifying the original wordList, which the postcondition required.

# Coderunner proof

<img src="{{site.baseurl}}/images/idk.png">
