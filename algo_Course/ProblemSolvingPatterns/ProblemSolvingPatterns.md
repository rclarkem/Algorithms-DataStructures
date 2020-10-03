# Problem Solving Patterns

## Improve Your Understanding of Algorithms

Some examples of common algorithm patterns:

1. Frequency Counter
2. Multiple Pointers
3. Sliding Windows
4. Divide and Conquer
5. Dynamic Programming
6. Greedy Algorithms
7. Backtracking
   ....

Think of these as blueprints to starting your problems.

---

## Frequency Counter

Uses an object or set to collect values/frequency of value.

_Key of when to use_: **When the problem asks how many times something occurs or the most/least occuring element. Or to compare two things and see if they have similar characteristics such as anagram.**

- Great for avoiding nested loops or O(N<sup>2</sup>) operations.

- Its usually O(N).

### Example:

we use the objects to hold count of the values and their frequency. We dont have to rely on nested loops and look up for objects are constant time. We can achieve O(N) instead of O(N<sup>2</sup>)

```js
function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};

  for (let el of word1) {
    obj1[el] ? obj1[el]++ : (obj1[el] = 1);
  }
  for (let el of word2) {
    obj2[el] ? obj2[el]++ : (obj2[el] = 1);
  }
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      return false;
    }
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}

// validAnagram('aaz', 'zza') //false
// validAnagram('', '') //true
validAnagram('anagram', 'nagaram'); //true
```

- TIME: O(N)

---

## Multiple Pointers

Creating pointers or values that connect to an index that move towards a specific point based on a condition.

_Key of when to use_: **When the problem tells you to find something especially when the array or string is SORTED.**

- Its usually O(N).

- Great for space complexity!

### Example

```js
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  /* You could use a for loop too! I just happened to use a while loop. 
	The logic would be the same. */
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] === arr[j]) {
      j++;
    } else {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}
// countUniqueValues([1,1,1,1,2]) //2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //7
```

- TIME: O(N)

---

## Sliding Windows

Create a **window** that can be an array or number from one position to another

- Window increases

_Key of when to use_: **When the problem is asking you to keep track of highest count or largest subset of 'x' for example.**

**Think of this technique as for set of data, complete x function, then move onto the next set and discard what you dont need**

- or closes (new window is then created)

- Great for keeping track of subset of data in array or string.

- Its usually O(N).

### Example

```js
function largestSubArray(arr, num) {
  if (arr.length < 0 || arr.length < num) {
    return undefined;
  }

  let tempSum = 0; //this will be the window that will move depending on condition.

  let maxSum = 0; //this will keep our highest sum

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]; //current highest sum
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    /* take the tempSum that was set with the maxSum initially, then on each iteration move the window and discard the previous number and add the previous number to the total.

maxSum = (2 + 6 + 9) => 17, on the start of the loop we start at the 3rd or num index. What we want is to add the next group of three nums 6 + 9 + 2. This is where the window sliding comes in.

 All we had to do was subtract the arr[i - num] which is the the (current index - the number) we are looking for and that will discard what we dont need and we add the current number/index we are on to tempSum  */
    maxSum = Math.max(maxSum, tempSum);
    // Now compare the two values.
  }
  return maxSum;
}

largestSubArray([2, 6, 9, 2, 1, 8, 5, 6, 3], 3); // 8,5,6 => 19
```

TIME: O(N)

---

## Divide and Conquer

A very popular algorithm for sorting algorithms.

We take a set of data and divide it into pieces rather moving left to right or vice versa.

_For Ex:_ dividing an array at the middle and checking if the value is < or > your value and keep going.

_Key of when to use_: **When the problem tells you to find something especially when the array is SORTED.**

- Great for time complexity!

- It can be Log(N) - for ex: Binary Search

# Resources:

- geeksforgeeks.org
- [Algorithms CS Dojo](https://goo.gl/wy3CWF)
