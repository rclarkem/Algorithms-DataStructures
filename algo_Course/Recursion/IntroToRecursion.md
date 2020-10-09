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

---

## Writing Your Recursive Function

Objectives:

1. Invoke the same function with a different input until we hit base case
   - Input will be different every time called.
2. Base case => where the recursion ends.
   - Like a conditional.

Example: adding numbers from 1 - n

```js
function addRange(num) {
  // base case: once we hit 1, end the function and add the nums
  if (num == 1) return 1;

  return num + addRange(num - 1);
  // 5 + addRange(4)
  // 4 + addRange(3)
  // 3 + addRange(2)
  // 2 + addRange(1)

  /* addRange(1) hits our base case because num = 1, the return value of 
	addRange(1) is 1. So now we go back up the call stack!!!!
	*/

  // 2 + addRange(1) => The return value of addRange(1) = 1 as per our
  // base case;
  // It becomes 2 + 1 = 3

  // 3 + addRange(2) => addRange(2) return value = 3;
  // It becomes 3 + 3 = 6
  // 4 + addRange(3) => addRange(3) return value = 6;
  // It becomes 4 + 6 = 10
  // 5 + addRange(4) => addRange(4) return value = 10
  // It becomes 5 + 10 = 15
}
addRange(5); // RETURN 15
```
