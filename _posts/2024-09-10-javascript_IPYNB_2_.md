---
layout: post
title: JavaScript
description: Let's learn some basic JavaScript functions!
permalink: /posts/javascript-functions
comments: True
---

<br>

### Custom Objects

Here, we can create an object called `person`. This object has keys of `name`, `age`, `currentClasses`, `interests`, `favoriteAnimal`, and `favoriteColor`. Some of these kays have values that are strings, some are integers, and some are arrays.

We can output values to the JS console with `console.log(output)`. We can also edit some of the values with `person[key]`.


```javascript
%%javascript
const person = {
    name: "Aadi Bhat",
    age: 15,
    currentClasses:
      ["HPoE",
      "World History",
      "AP Chem",
      "AP Calc AB",
      "AP CSP",
      "AP English Seminar"],
    interests:
      ["Robotics",
      "Cybersecurity",
      "Piano"],
    favoriteAnimal: "Monkey",
    favoriteColor: "Red"
};

console.log(person);
person["favoriteAnimal"] = "Armadillo";
person["favoriteColor"] = "Orange";
console.log(person);
person["age"] += 100;
console.log("Your age in 100 years is " + person["age"]);
console.log("The type of the value age is " + typeof person["age"]);
console.log("The type of the value interests is " + typeof person["interests"]);
console.log("The type of the value favoriteColor is " + typeof person["favoriteColor"]);
```


    <IPython.core.display.Javascript object>



```
{"name":"Aadi Bhat","age":15,"currentClasses":["HPoE","World History","AP Chem","AP Calc AB","AP CSP","AP English Seminar"],"interests":["Robotics","Cybersecurity","Piano"],"favoriteAnimal":"Monkey","favoriteColor":"Red"}
{"name":"Aadi Bhat","age":15,"currentClasses":["HPoE","World History","AP Chem","AP Calc AB","AP CSP","AP English Seminar"],"interests":["Robotics","Cybersecurity","Piano"],"favoriteAnimal":"Armadillo","favoriteColor":"Orange"}
Your age in 100 years is 115
The type of the value age is number
The type of the value interests is object
The type of the value favoriteColor is string
```

<br>

### Operations

Here, we use basic mathematical operations to compare two values, `a` and `b`. We use conditionals to be able to compare them.

The values `x` and `y` also go through several mathematical operations and the results are outputted.


```javascript
%%javascript
var a = 1;
var b = 2;
if (a < b) {
  console.log("a is less than b");
} else if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a and b are equal");
}

var x = 10;
var y = 5;
console.log("x plus y = " + (x+y));
console.log("x minus y = " + (x-y));
console.log("x times y = " + x*y);
console.log("x divided by y = " + x/y);
console.log("x to the power of y = " + x**y);
console.log("x modulo y = " + x%y);

```


    <IPython.core.display.Javascript object>


```

a is less than b
x plus y = 15
x minus y = 5
x times y = 50
x divided by y = 2
x to the power of y = 100000
x modulo y = 0
```
