/*
Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word.

Notes:

If given an empty string, it should return an empty array.
You should be familiar with the 'split' method.

*/

function getAllLetters(str) {
	if(!str){
		return []
	} else {
		return str.split('').join('').split('')
	}
}

var outputOne = getAllLetters('Radagast')
console.log(outputOne) // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

function getAllWords(str) {
	return !str ? [] : str.split(' ')
}

var outputTwo = getAllWords('Radagast the Brown')
// console.log(outputTwo) // --> ['Radagast', 'the', 'Brown']

/*

Write a function called "countWords".

Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

Notes:

If given an empty string, it should return an empty object.

*/
function countWords(str) {
	let newObj = {}
	if (!str) {
		return newObj
	} else {
		let splittedStr = str.split(' ')
		for (let word of splittedStr) {
			if (newObj[word]) {
				newObj[word]++
			} else {
				newObj[word] = 1
			}
		}
	}
	return newObj
}

var outputThree = countWords('ask a bunch get a bunch')
// console.log(outputThree) // --> {ask: 1, a: 2, bunch: 2, get: 1}

/*
 Write a function called "or".

Given 2 boolean expressions, "or" returns true or false, corresponding to the '||' operator. Notes:

Do not use the || operator.
Use ! and && operators instead.
 
 */

function or(expression1, expression2) {
	return expression1 === true ? true : expression2 === true ? true : false
}

var outputFour = or(true, false)
// console.log(outputFour) // --> true;

/*
Write a function called "isEitherEvenOrAreBoth7".

Given two numbers, 'isEitherEvenOrAreBoth7' returns whether at least one of them is even, or, both of them are 7.
*/

function isEitherEvenOrAreBoth7(num1, num2) {
	return num1 === 7 && num2 === 7 ? true : num1 % 2 === 0 || num2 % 2 === 0 ? true : false
}

// A little unreadable, but I just wanted practice with ternary

var outputFive = isEitherEvenOrAreBoth7(3, 7)
// console.log(outputFive) // --> false

var outputFive= isEitherEvenOrAreBoth7(2, 3)
// console.log(outputFive) // --> true

/*
Write a function called "isEitherEvenAndLessThan9".

Given two numbers, 'isEitherEvenAndLessThan9' returns whether at least one of them is even, and, both of them are less than 9.

*/

function isEitherEvenAndLessThan9(num1, num2) {
	return num1 < 9 && num2 < 9 && num1 % 2 === 0 ? true : num1 < 9 && num2 < 9 && num2 % 2 === 0 ? true : false
}

var outputSix = isEitherEvenAndLessThan9(2, 4)
console.log(outputSix) // --> true

var outputSix = isEitherEvenAndLessThan9(72, 2)
console.log(outputSix) // --> false

/*

Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object to the 1st object.

Notes:

Add any keys that are not in the 1st object.
If the 1st object already has a given key, ignore it (do not overwrite the property value).
Do not modify the 2nd object at all.
*/

var obj1 = {
	a: 1,
	b: 2,
}
var obj2 = {
	b: 4,
	c: 3,
}

function extend(obj1, obj2) {
	for (let key in obj2) {
		if(!obj1[key]) {
			obj1[key] = obj2[key]
		}
	}
	return obj1
}

extend(obj1, obj2)

console.log(obj1) // --> {a: 1, b: 2, c: 3}
console.log(obj2) // --> {b: 4, c: 3}