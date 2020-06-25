# Big-O Notation

## What is Big O Notation

### Introduction

Big-O notation measures the worst case complexity of an algorithm. Where _n_ represents the number of inputs.

**What will happen as _n_ approaches infinity?**

In ELI5 terms, when dealing with a problem or a task such as **'write a function that accepts string input and returns a reversed copy'** there are multiple ways to go about solving this problem, but Big-O notation lets us pick the solution that is best. In other words, its a way that compares code and its performance/effiency. Does **a** solution to the problem run faster than writing the **b** solution?

With Big-O notation we get numeric representation of how efficient our code is.

### Why Does This Matter?

1. Knowing Big-O is important because it allows you to understand how your code is running and performing


     - This is useful for interviews as this will most likely come up during your job search. You may be asked to discuss why your solution works instead of one your interviewer provides to you.
     - It requires you to know your data structures better. One method might be better suited for large sets of data and one solution might be better suited for smaller sets of data OR a solution might be the same for both depending on the problem.

2. It helps to know how to speed up your code where it might be lagging or slowing down. I believe in the 'aggregation of marginal gains' and even a 1% increase in performance when handling large datasets is an improvement.

## Code

A:

```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```

B:

```javascript
function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
```

Which of these two is faster and why???

---

### Lets count the number of simple operations that the computer has to perform!

**In solution B:** the computer is doing 3 operations.

1. Multiplication
2. Addition
3. Division

And this is regardless of the size of _n_

**In solution A:** the computer is doing _n_ additions and _n_ assignments because of the loop. If _n_ is 10, then it will iterate 10x `(i++)` and the action of addition and assignment will happen those 10 times.

We also have two assignments of total and `i = 1` . There is also the comparison that will run 10x.

**As _n_ grows, the number of operations grows roughly proportionally with _n_**

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n )
- f(n) could be constant (f(n) = 1)
- f(n) could be something entirely different!

**Solution B** => O(1)
**Solution A** => O(n)

---
