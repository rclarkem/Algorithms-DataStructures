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

Ex: Factorials

```js
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
factorial(5); //120
```

Same idea as in the addRange function in that our function calls are waiting for the return values of the factorial(num - 1) before they can return and pop off the call stack.

When we do `return num * factorial(num-1)` on the first go =>

- `5 * factorial(4)`, we need to know what the return value is of the function call `factorial(4)`. However, the function knows that num is not `1` yet so it keeps going.
- `4 * factorial(3)`
- `3 * factorial(2)`
- `2 * factorial(1)` => NUM = 1

_WE HIT THE BASE CASE NOW_

- return value of `factorial(1)` = **1**; go back up the call stack!!!
  <br></br>

- `2 * factorial(1)` => 2 \* 1 = factorial(2) = **2**
- `3 * factorial(2)` => 3 \* 2 = factorial(3) = **6**
- `4 * factorial(3)` => 4 \* 6 = factorial(4) = **24**
- `5 * factorial(4)` => 5 \* 24 = factorial(5) = **120**

The return value is _120_

---

## Issues with Recursion

1.  FORGETTING A BASE CASE!!!!

- This can lead to maximum call stack exceeded error and even freezing.

2.  Not returning your values.

---

## Helper Method Recursion

You have an outer function thats not recursive and then it invokes an inner function which is recursive.
