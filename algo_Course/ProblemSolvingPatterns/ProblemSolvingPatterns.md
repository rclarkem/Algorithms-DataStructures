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

## Frequency Counter

Uses an object or set to collect values/frequency of value.

_Key of when to use_: **When the problem asks how many times something occurs or the most/least occuring element. Or to compare two things and see if they have similar characteristics such as anagram.**

- Great for avoiding nested loops or O(n<sup>2</sup>) operations.

- Its usually O(n).

### Example:

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
