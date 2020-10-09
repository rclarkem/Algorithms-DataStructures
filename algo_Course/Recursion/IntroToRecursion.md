# Intro to Recursion.......

In short taking a problem and making the input shorter and shorter until you hit an endpoint or 'base-case'.

**WHAT DOES THAT MEAN?**

---

## What is Recursion!

Recursion is a function that calls itself.

For ex:

```js
function checkForOdds(arr) {
  //calls itself within the function
  checkForOdds([1, 2, 3]);
}
```

### Why Use Recursion?

- It will be seen with more complex data structures
- You dont have to use recursion, but may make your code cleaner depending on objective.

---

## Understanding the Call Stack

When a function is called, it is pushed on the top of the call stack. When JS sees the `return` statement, the function ends and it gets popped off the top.

_You can use the chrome developer tools to see the call stack and how it works when your function is running_

With recursive functions, we keep pushing new functions onto the call stack, in particular, the **function itself**.
