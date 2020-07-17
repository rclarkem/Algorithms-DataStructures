## Big O With Objects

### Why are Objects Are Great?

- If you do not need to know the order of information.
- If you need quick access to values -> `O(1)`
- If you need to quickly insert or remove values -> `O(1)`

### The Cost of Built-in Methods

- `Object.keys()` -> `O(n)`
- `Object.values()` -> `O(n)`
- `Object.entries()` -> `O(n)`
  The three above are creating an array based upon the number of keys or values. So as the number of keys or values increases in the obj, or _n_, so does the newly created array. This causes the operation to be `O(n)` and not constant

**However** since accessing values in an object is constant, and since we know the key value we want to check, `.hasOwnProperty()` takes the key and will try to access the value from the obj in the same way.
`Object.hasOwnProperty()` -> `O(1)`
