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
  return !str
    ? []
    : str.split(' ');
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
  return expression1 === true
    ? true
    : expression2 === true
      ? true
      : false;
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
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
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
      delete obj[key]
    }
  }
  return obj
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
      delete obj[key]
    }
  }
  return obj
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
  return Object.keys(obj).length
}

/* Write a function called "convertDoubleSpaceToSingle".

Given a string, "convertDoubleSpaceToSingle" returns the passed in string, with all the double spaces converted to single spaces.

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
Notes:

In order to do this problem, you should be familiar with "String.split", and "Array.join". */

function convertDoubleSpaceToSingle(str) {
  return str.split("  ").join(" ")
}

/* Write a function called "joinThreeArrays".

Given three arrays, "joinThreeArrays" returns an array with the elements of "arr1" in order followed by the elements in "arr2" in order followed by the elements of "arr3" in order.

var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]
You should be familiar with the "concat" method for this problem. */
function joinThreeArrays(arr1, arr2, arr3) {
  return [].slice.call(arguments).reduce((acc, cur) => acc.concat(cur), [])
}


/*
Write a function called "addToFrontOfNew".

Given an array and an element, "addToFrontOfNew" returns a new array containing all the elements of the given array, with the given element added to the front.

Important: It should be a NEW array instance, not the original array instance.

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]
*/
function addToFrontOfNew(arr, element) {
  let newArr = arr.slice(0)
  newArr.unshift(element)
  return newArr
}
