# Functions II Lab

## Getting Started

- This lab will be completed in the same way as yesterday. You will write your code in `script.js` and run it by opening `index.html` in the browser (or refreshing the page).
- make sure to open the chrome inspector console to see your errors and logs in the **console**

## Exercises


### Named functions as parameters

1. assign to a variable a function called `outputName` that...
    - takes one string parameter
    - concatenates the passed string with `Your name is: `
    - `console.log`s the result

2. Write a function called `sayMyName` that...
    - takes two string parameters (first and last name)
    - also takes one function parameter
    - concatenates your first and last name into a string
    - and then uses the passed function to output your first and last name

3. call `sayMyName` with your `outputName` function as the function parameter
4. call `sayMyName` with `console.log` as the function parameter
   - what do you expect the result to be of each call?


### Anonymous functions as parameters

1. use the `setTimeout` function to `console.log` a message of your choice after 2 seconds
    - recall that `setTimeout` takes two parameters
      - a function to be invoked
      - the number of milliseconds to wait before invoking
    - pass the function parameter of your `setTimeout` call with an anonymous function

2. modify the anonymous function passed to `setTimeout` to instead call `sayMyName`
   - you should call `sayMyName` in the same way you did in step 4 of the last exercise


### Arrow functions

1. rewrite the previous exercise with the **arrow function** syntax