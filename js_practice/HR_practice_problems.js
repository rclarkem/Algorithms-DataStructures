/* Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word.

Notes:

If given an empty string, it should return an empty array.
You should be familiar with the 'split' method. */

function getAllLetters(str) {
  if (!str) {
    return [];
  } else {
    return str.split('').join('').split('');
  }
}

var outputOne = getAllLetters('Radagast');
console.log(outputOne); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

function getAllWords(str) {
  return !str ? [] : str.split(' ');
}

var outputTwo = getAllWords('Radagast the Brown');
// console.log(outputTwo)  --> ['Radagast', 'the', 'Brown']

/* Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

Notes:

If given an empty string, it should return an empty object. */
function countWords(str) {
  let newObj = {};
  if (!str) {
    return newObj;
  } else {
    let splittedStr = str.split(' ');
    for (let word of splittedStr) {
      if (newObj[word]) {
        newObj[word]++;
      } else {
        newObj[word] = 1;
      }
    }
  }
  return newObj;
}

var outputThree = countWords('ask a bunch get a bunch');
// console.log(outputThree)  --> {ask: 1, a: 2, bunch: 2, get: 1}

/*
 Write a function called "or".

Given 2 boolean expressions, "or" returns true or false, corresponding to the '||' operator. Notes:

Do not use the || operator.
Use ! and && operators instead.

 */

function or(expression1, expression2) {
  return expression1 === true ? true : expression2 === true ? true : false;
}

var outputFour = or(true, false);
// console.log(outputFour)  --> true;

/* Write a function called "isEitherEvenOrAreBoth7".

Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7. */

function isEitherEvenOrAreBoth7(num1, num2) {
  return num1 === 7 && num2 === 7
    ? true
    : num1 % 2 === 0 || num2 % 2 === 0
    ? true
    : false;
}

// A little unreadable, but I just wanted practice with ternary

var outputFive = isEitherEvenOrAreBoth7(3, 7);
// console.log(outputFive)  --> false

var outputFive = isEitherEvenOrAreBoth7(2, 3);
// console.log(outputFive)  --> true

/* Write a function called "isEitherEvenAndLessThan9".

Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9. */

function isEitherEvenAndLessThan9(num1, num2) {
  return num1 < 9 && num2 < 9 && num1 % 2 === 0
    ? true
    : num1 < 9 && num2 < 9 && num2 % 2 === 0
    ? true
    : false;
}

var outputSix = isEitherEvenAndLessThan9(2, 4);
console.log(outputSix); // --> true

var outputSix = isEitherEvenAndLessThan9(72, 2);
console.log(outputSix); // --> false

/* Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object to the 1st object.

Notes:

Add any keys that are not in the 1st object.
If the 1st object already has a given key, ignore it (do not overwrite the property value).
Do not modify the 2nd object at all. */

var obj1 = {
  a: 1,
  b: 2,
};
var obj2 = {
  b: 4,
  c: 3,
};

function extend(obj1, obj2) {
  for (let key in obj2) {
    if (!obj1[key]) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}

/*Write a function called "removeStringValues".

Given an object, "removeStringValues" removes any properties on the given object whose values are strings.

var obj = {
  name: 'Sam',
  age: 20
}
removeStringValues(obj);
console.log(obj); // { age: 20 }*/

function removeStringValues(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'string') {
      delete obj[prop];
    }
  }
  return obj;
}

/*
Write a function called "removeNumberValues".

Given an object, "removeNumberValues" removes any properties whose values are numbers.

var obj = {
  a: 2,
  b: 'remaining',
  c: 4
};
removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
*/

function removeNumberValues(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'number') {
      delete obj[prop];
    }
  }
  return obj;
}
/*Write a function called "removeArrayValues".

Given an object, "removeArrayValues" removes any properties whose values are arrays.

var obj = {
  a: [1, 3, 4],
  b: 2,
  c: ['hi', 'there']
}
removeArrayValues(obj);
console.log(obj); // --> { b: 2 }*/

function removeArrayValues(obj) {
  for (let prop in obj) {
    if (Array.isArray(obj[prop])) {
      delete obj[prop];
    }
  }
  return obj;
}

/*Write a function called "removeNumbersLargerThan".

Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }*/
function removeNumbersLargerThan(num, obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'number' && obj[prop] > num) {
      delete obj[prop];
    }
  }
}

/*Write a function called "removeNumbersLessThan".

Given a number and an object, "removeNumbersLessThan" removes any properties whose values are numbers less than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLessThan(5, obj);
console.log(obj); // --> { a: 8, c: 'montana' }*/
function removeNumbersLessThan(num, obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'number' && obj[prop] < num) {
      delete obj[prop];
    }
  }
}

/*Write a function called "removeStringValuesLongerThan".

Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }*/
function removeStringValuesLongerThan(num, obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === 'string' && obj[prop].length > num) {
      delete obj[prop];
    }
  }
  return obj;
}
/*
Write a function called "removeEvenValues".

Given an object, "removeEvenValues" removes any properties whose values are even numbers.

Do this in place and return the original object, do not construct a cloned object that omits the properties.

Example:

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
*/
function removeEvenValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      delete obj[key];
    }
  }
  return obj;
}

/*
Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose values are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
*/
function removeOddValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number' && obj[key] % 2) {
      delete obj[key];
    }
  }
  return obj;
}

/*
Write a function called "countNumberOfKeys".

Given an object, "countNumberOfKeys" returns how many properties the given object has.

var obj = {
  a: 1,
  b: 2,
  c: 3
};
var output = countNumberOfKeys(obj);
console.log(output); // --> 3
*/
function countNumberOfKeys(obj) {
  return Object.keys(obj).length;
}

/* Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
Notes:

In order to do this problem, you should be familiar with "String.split", and "Array.join". */

function convertDoubleSpaceToSingle(str) {
  return str.split('  ').join(' ');
}

/* Write a function called "joinThreeArrays".

Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]
You should be familiar with the "concat" method for this problem. */
function joinThreeArrays(arr1, arr2, arr3) {
  return [].slice.call(arguments).reduce((acc, cur) => acc.concat(cur), []);
}

/* Write a function called "addToFrontOfNew".

Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2] */
function addToFrontOfNew(arr, element) {
  let newArr = arr.slice();
  newArr.unshift(element);
  return newArr;
}

/* Write a function called "addToBackNew".

Given an array and an element, "addToBackNew" returns a clone of the given array, with the given element added to the end.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3] */
function addToBackOfNew(arr, element) {
  let newArr = arr.slice();
  newArr.push(element);
  return newArr;
}

/* Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c'] */
function getAllElementsButNth(array, n) {
  array.splice(n, 1);
  return array;
}

/* Write a function called "getIndexOf".

Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.

Notes:

Strings are zero indexed, meaning the first character in a string is at position 0.
When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
If the character does not exist in the string, it should return -1.
Do not use the native indexOf function in your implementation.
var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2 */
function getIndexOf(char, str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1;
}

/* Write a function called "areValidCredentials".

Given a name and a password, "areValidCredentials", returns true if the name is longer than 3 characters, AND, the password is at least 8 characters long. Otherwise it returns false.

var output = areValidCredentials('Ritu', 'mylongpassword')
console.log(output); // --> true */
function areValidCredentials(name, password) {
  return name.length > 3 && password.length >= 8;
}

/* Write a function called "findMinLengthOfThreeWords".

Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.

var output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1 */

function findMinLengthOfThreeWords(word1, word2, word3) {
  let arr = [].slice.call(arguments).sort((a, b) => b.length - a.length);
  //or put the [word1, word2, word3] and put sort method on this
  return arr[arr.length - 1].length;
}

/* Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3 */
function findMaxLengthOfThreeWords(word1, word2, word3) {
  let arr = [].slice.call(arguments).sort((a, b) => {
    //or put the [word1, word2, word3] and put sort method on this
    return b.length - a.length;
  });
  return arr[0].length;
}

/* Write a function called "getLongestOfThreeWords".

Given 3 words, "getLongestOfThreeWords" returns the longest of three words.

Notes:

If there is a tie, it should return the first word in the tie.
var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these' */

function getLongestOfThreeWords(word1, word2, word3) {
  return [].slice.call(arguments).sort((a, b) => b.length - a.length)[0];
  //or put the [word1, word2, word3] and put sort method on this
}

/* Write a function called "findShortestOfThreeWords".

Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings.

Notes:

If there are ties, it should return the first word in the parameters list.
var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a' */
function findShortestOfThreeWords(word1, word2, word3) {
  return [].slice.call(arguments).sort((a, b) => a.length - b.length)[0];
}

/*
Write a function called "select".

Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

Notes:

If keys are present in the given array, but are not in the given object, it should ignore them.
It does not modify the passed in object.
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
*/

function select(arr, obj) {
  let newObj = {};
  for (let value of arr) {
    if (obj[value]) {
      newObj[value] = obj[value];
    }
  }
  return newObj;
}

/* Write a function called "filterOddLengthWords".

Given an array of strings, "filterOddLengthWords" returns an array containing only the elements of the given array whose lengths are odd numbers.

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now'] */
function filterOddLengthWords(words) {
  return words.filter((word) => word.length % 2);
}

/* Write a function called "filterEvenLengthWords".

Given an array of strings, "filterEvenLengthWords" returns an array containing only the elements of the given array whose length is an even number.

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word'] */

function filterEvenLengthWords(words) {
  return words.filter((word) => word.length % 2 === 0);
}

/* Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:

It should return 0 if the array is empty.
var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5 */

function getLengthOfLongestElement(arr) {
  if (arr.length > 0) {
    return arr
      .filter((word) => {
        return typeof word === 'string';
      })
      .sort((a, b) => b.length - a.length)[0].length;
  }
  return 0;
}

/* Write a function called "squareElements". Given an array of numbers, "squareElements" should return a new array where each element is the square of the element of the given array.

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9] */

function squareElements(arr) {
  //   return arr.map(elem => elem ** 2 )
  let newArr = [];
  for (let num of arr) {
    newArr.push(num ** 2);
  }
  return newArr;
}

/* Write a function called "filterOddElements".

Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array.

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5] */

function filterOddElements(arr) {
  return arr.filter((elem) => elem % 2);
}

/* Given an array of numbers, "computeProductOfAllElements" returns the products of all the elements in the given array.

Notes:

If given array is empty, it should return 0.
var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60 */

function computeProductOfAllElements(arr) {
  if (arr.length < 1) {
    return 0;
  }
  return arr.reduce((acc, curr) => acc * curr);
}

/* Write a function called "filterEvenElements".

Given an array of numbers, "filterEvenElements" returns an array containing only the even numbers of the given array.

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6] */
function filterEvenElements(arr) {
  return arr.filter((num) => num % 2 === 0);
}

/* Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:

It should return 0 if the array is empty.
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3 */
function getLengthOfShortestElement(arr) {
  if (arr.length < 1) {
    return 0;
  } else {
    let newArr = JSON.parse(JSON.stringify(arr));
    return newArr.sort((a, b) => a.length - b.length)[0].length;
  }
}

/* Write a function called "getLongestElement".

Given an array, "getLongestElement" returns the longest string in the given array.

Notes:

If there are ties, it returns the first element to appear.
If the array is empty, it should return an empty string.
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three' */
function getLongestElement(arr) {
  if (arr.length < 1) {
    return '';
  } else {
    let newArr = JSON.parse(JSON.stringify(arr));
    return newArr.sort((a, b) => b.length - a.length)[0];
  }
}

/* Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:

If the given array is empty, it should return 0.
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1 */

function findSmallestElement(arr) {
  if (arr.length < 1) {
    return 0;
  }
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

/* Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:

If there are ties, it should return the first element to appear.
If the given array is empty, it should return an empty string.
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a' */

function findShortestElement(arr) {
  if (arr.length < 1) {
    return '';
  }
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length < smallest.length) {
      smallest = arr[i];
    }
  }
  return smallest;
}

/* Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8; */
function getLargestElement(arr) {
  return arr.sort((a, b) => b - a)[0];
}

/* Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6 */

function computeSumOfAllElements(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

/*
Write a function called "getElementsThatEqual10AtProperty".

Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

Notes:

If the array is empty, it should return an empty array.
If the array contains no elements that are equal to 10, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
*/
function getElementsThatEqual10AtProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    if (Array.isArray(obj[key])) {
      return obj[key].filter((num) => num === 10);
    }
  }
  return [];
}

/*
Write a function called "getElementsLessThan100AtProperty".

Given an object and a key, "getElementsLessThan100AtProperty" returns an array containing all the elements of the array located at the given key that are less than 100.

Notes:

If the array is empty, it should return an empty array.
If the array contains no elements less than 100, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]
*/
function getElementsLessThan100AtProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    if (Array.isArray(obj[key])) {
      return obj[key].filter((num) => num < 100);
    }
  }
  return [];
}

/* Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:

If given an empty string, countAllCharacters should return an empty object.
var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2} */

function countAllCharacters(str) {
  let newObj = {};

  for (let letter of str) {
    if (newObj[letter]) {
      newObj[letter]++;
    } else {
      newObj[letter] = 1;
    }
  }
  return newObj;
}

/*
Write a function called "getElementsGreaterThan10AtProperty".

Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.

Notes:

If the array is empty, it should return an empty array.
If the array contains no elements greater than 10, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]
*/
function getElementsGreaterThan10AtProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    if (Array.isArray(obj[key])) {
      return obj[key].filter((num) => num > 10);
    }
  }
  return [];
}

/*
Write a function called "getFirstElementOfProperty".

Given an object and a key, "getFirstElementOfProperty" returns the first element of the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
  key: [1, 2, 4]
};
var output = getFirstElementOfProperty(obj, 'key');
console.log(output); // --> 1
*/

function getFirstElementOfProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    if (Array.isArray(obj[key])) {
      return obj[key][0];
    }
  }
}

/*
Write a function called "getNthElementOfProperty".

Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

Notes:

If the array is empty, it should return undefined.
If n is out of range, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2
*/

function getNthElementOfProperty(obj, key, n) {
  if (obj.hasOwnProperty(key)) {
    if (Array.isArray(obj[key])) {
      return obj[key][n];
    }
  }
  return undefined;
}

/*
 Write a function called "getLastElementOfProperty".

Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.

Notes:

If the array is empty, it should return undefined.
if the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
 */
function getLastElementOfProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    if (Array.isArray(obj[key])) {
      const arr = obj[key];
      return arr[arr.length - 1];
    }
  }
  return undefined;
}

/*
 Write a function called "removeElement".

Given an array of elements, and a "discarder" parameter, "removeElement" returns an array containing the items in the given array that do not match the "discarder" parameter.

Notes:

If all the elements match, it should return an empty array.
If an empty array is passed in, it should return an empty array.
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]
 */

function removeElement(array, discarder) {
  return array.filter((elem) => elem !== discarder);
}

/*
Write a function called "keep".

Given an array and a keeper element, "keep" returns an array containing the items that match the given keeper element.

Notes:

If no elements match, "keep" should return an empty array.
var output = keep([1, 2, 3, 2, 1], 2)
console.log(output); --> [2, 2]
*/
function keep(array, keeper) {
  return array.filter((elem) => elem === keeper);
}

/*Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average.

Notes:

If given an empty array, it should return 0.
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3 */

function computeAverageOfNumbers(nums) {
  if (nums.length < 1) {
    return 0;
  }
  return nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
}

/*
Write a function called "getOddLengthWordsAtProperty".

Given an object and a key, "getOddLengthWordsAtProperty" returns an array containing all the odd length word elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If it contains no odd length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array.
var obj = {
  key: ['It', 'has', 'some', 'words']
};
var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
*/

function getOddLengthWordsAtProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    if (Array.isArray(obj[key])) {
      return obj[key].filter((word) => word.length % 2);
    }
  }
  return [];
}

/*
getAverageOfElementsAtProperty
Submitted on Today at 2:05 AM
Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key.

Notes:

If the array at the given key is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
*/

function getAverageOfElementsAtProperty(obj, key) {
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
    if (obj[key].length > 1) {
      return obj[key].reduce((a, b) => a + b, 0) / obj[key].length;
    }
  }
  return 0;
}

/*
getEvenLengthWordsAtProperty
Submitted on Today at 2:06 AM
Write a function called "getEvenLengthWordsAtProperty".

Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If it contains no even length elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
*/

function getEvenLengthWordsAtProperty(obj, key) {
  if (obj.hasOwnProperty(key)) {
    if (Array.isArray(obj[key])) {
      return obj[key].filter((word) => word.length % 2 === 0);
    }
  }
  return [];
}

/*
Write a function called "getSquaredElementsAtProperty".

Given an object and a key, "getSquaredElementsAtProperty" returns an array containing all the squared elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
*/

function getSquaredElementsAtProperty(obj, key) {
  const arr = obj[key];
  if (obj.hasOwnProperty(key) && Array.isArray(arr)) {
    if (arr.length > 1) {
      return arr.map((word) => word ** 2);
    }
  }
  return [];
}

/*
Write a function called "getOddElementsAtProperty".

Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If it contains no odd elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5] 
*/
function getOddElementsAtProperty(obj, key) {
  const arr = obj[key];
  if (obj.hasOwnProperty(key) && Array.isArray(arr)) {
    if (arr.length > 1) {
      return arr.filter((num) => num % 2);
    }
  }
  return [];
}

/*
Write a function called "getEvenElementsAtProperty".

Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If the array contains no even elements, it should return an empty array.
If the property at the given key is not an array, it should return an empty array.
If there is no property at the given key, it should return an empty array.
var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
*/

function getEvenElementsAtProperty(obj, key) {
  const arr = obj[key];
  if (obj.hasOwnProperty(key) && Array.isArray(arr)) {
    if (arr.length > 1) {
      return arr.filter((num) => num % 2 === 0);
    }
  }
  return [];
}

/*
Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
*/
function getSmallestElementAtProperty(obj, key) {
  const arr = obj[key];
  if (obj.hasOwnProperty(key) && Array.isArray(arr)) {
    if (arr.length > 1) {
      return arr.slice().sort((a, b) => a - b)[0];
    }
  }
  return undefined;
}

/*
Write a function called "getLargestElementAtProperty".

Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

Notes:

If the array is empty, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
*/

function getLargestElementAtProperty(obj, key) {
  const arr = obj[key];
  if (obj.hasOwnProperty(key) && Array.isArray(arr)) {
    if (arr.length > 1) {
      return arr.slice().sort((a, b) => b - a)[0];
    }
  }
  return undefined;
}

/*
Write a function called "getAllButLastElementOfProperty".

Given an object and a key, "getAllButLastElementOfProperty" returns an array containing all but the last element of the array located at the given key.

Notes:

If the array is empty, it should return an empty array.
If the property at the given key is not an array, it return an empty array.
If there is no property at the key, it should return an empty array.
var obj = {
  key: [1, 2, 3]
};
var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]
*/

function getAllButLastElementOfProperty(obj, key) {
  const arr = obj[key];
  if (obj.hasOwnProperty(key) && Array.isArray(arr)) {
    if (arr.length > 1) {
      return arr.slice(0, arr[arr.length - 2]);
    }
  }
  return [];
}

/*
Write a function called "getElementOfArrayProperty".

Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.

Notes:

If the array is empty, it should return undefined.
If the given index is out of range of the array located at the given key, it should return undefined.
If the property at the given key is not an array, it should return undefined.
If there is no property at the key, it should return undefined.
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'

*/
function getElementOfArrayProperty(obj, key, index) {
  const arr = obj[key];
  if (obj.hasOwnProperty(key) && Array.isArray(arr)) {
    if (arr.length > 1) {
      return arr.slice()[index];
    }
  }
  return undefined;
}

/*
Write a function called "calculateBillTotal".

Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.

Notes:

Assume that sales tax is 9.5% and tip is 15%.
Do NOT tip on the sales tax, only on the pre tip amount.
var output = calculateBillTotal(20);
console.log(output); // --> 24.9
*/
function calculateBillTotal(preTaxAndTipAmount) {
  const salesTax = preTaxAndTipAmount * (9.5 / 100);
  const afterTip = preTaxAndTipAmount * (15 / 100) + preTaxAndTipAmount;
  return afterTip + salesTax;
}

/*
Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:

Do NOT use any native 'length' methods.
You might consider using 'substring' or 'slice' as alternatives.
var output = getStringLength('hello');
console.log(output); // --> 5
*/
function getStringLength(string) {
  let counter = 0;
  if (string !== '') {
    for (let letter of string) {
      counter++;
    }
  }
  return counter;
}

/*
Write a function called "joinArrayOfArrays".

Given an array of arrays, "joinArrayOfArrays" returns a single array containing the elements of the nested arrays.

var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
You should be familiar with the "concat" method for this problem.
*/
function joinArrayOfArrays(arr) {
  return arr.reduce((acc, cur) => acc.concat(cur));
}

/*
Write a function called "getProductOfAllElementsAtProperty".

Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key.

Notes:

If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the given key, it should return 0.
var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
*/
function getProductOfAllElementsAtProperty(obj, key) {
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
    if (obj[key].length > 1) {
      return obj[key].slice().reduce((acc, cur) => acc * cur, 1);
    }
  }
  return 0;
}

/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14
If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4
Notes:

In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.
*/
function sumDigits(num) {
  let stringified = num.toString().split('');
  if (stringified[0] === '-') {
    stringified[1] = stringified[0] + stringified[1];
    stringified.splice(0, 1);
  }
  return stringified.reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, 0);
}
/*
Write a function called "getSumOfAllElementsAtProperty".

Given an object and a key, "getSumOfAllElementsAtProperty" returns the sum of all the elements in the array located at the given key.

Notes:

If the array is empty, it should return 0.
If the property at the given key is not an array, it should return 0.
If there is no property at the key, it should return 0.
var obj = {
  key: [4, 1, 8]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
*/
function getSumOfAllElementsAtProperty(obj, key) {
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
    if (obj[key].length > 1) {
      return obj[key].reduce((a, c) => a + c, 0);
    }
  }
  return 0;
}

/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:

If there are ties, it should return the first element to appear in the given array.
Expect the given array to have values other than strings.
If the given array is empty, it should return an empty string.
If the given array contains no strings, it should return an empty string.
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

function findShortestWordAmongMixedElements(arr) {
  let newArr = [];
  for (let elem of arr) {
    if (typeof elem === 'string') {
      newArr.push(elem);
    }
  }

  if (newArr.length > 0) {
    return newArr.sort((a, b) => a.length - b.length)[0];
  }
  return '';
}

/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:

If the given array is empty, it should return 0.
If the array contains no numbers, it should return 0.
var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/
function findSmallestNumberAmongMixedElements(arr) {
  let newArr = [];
  for (let elem of arr) {
    if (typeof elem === 'number') {
      newArr.push(elem);
    }
  }

  if (newArr.length > 0) {
    return newArr.sort((a, b) => a - b)[0];
  }
  return 0;
}

/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:

If the array is empty, it should return an empty string ("").
If the array contains no strings; it should return an empty string.
var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/
function getLongestWordOfMixedElements(arr) {
  let newArr = [];
  for (let elem of arr) {
    if (typeof elem === 'string') {
      newArr.push(elem);
    }
  }

  if (newArr.length > 0) {
    return newArr.sort((a, b) => b.length - a.length)[0];
  }
  return '';
}

/*
Write a function called "getLargestNumberAmongMixedElements".

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:

The array might contain values of a type other than numbers.
If the array is empty, it should return 0.
If the array contains no numbers, it should return 0.
var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/
function getLargestNumberAmongMixedElements(arr) {
  let newArr = [];
  for (let elem of arr) {
    if (typeof elem === 'number') {
      newArr.push(elem);
    }
  }

  if (newArr.length > 0) {
    return newArr.sort((a, b) => b - a)[0];
  }
  return 0;
}

/*
Write a function called "computeSummationToN".

Given a number, "computeSummationToN" returns the sum of sequential numbers leading up to the given number, beginning at 0.

Notes:

If n = 4, it should calculate the sum of 1 + 2 + 3 + 4, and return 10.
var output = computeSummationToN(6);
console.log(output); // --> 21
*/
function computeSummationToN(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
