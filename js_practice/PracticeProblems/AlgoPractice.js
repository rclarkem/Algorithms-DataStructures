/* Challenge - Practice using Numbers  

Challenge - Create an Arithmetic Expression that uses three mathematical operators (+,-,/,*) that returns the date
of the current year.

EX: 2000 + 18 - 2 * 1;

Challenge 1: Current Year - WRITE CODE BELOW

*/
console.log(3000 - 1000 + 19 * 1);
/* Challenge - Practice using Numbers  




Challenge - Create an Arithmetic Expression that uses four mathematical operators (+,-,/,*) 
that returns your current age.

EX: (9+1)*6/2-1;

*/

// Challenge 2: Current Age - WRITE CODE BELOW
console.log(27 / 3 + 20 - 2 * 1);

/* Challenge - Practice using Strings  

Challenge - Create a String by surrounding characters with an apostrophe or quotation marks.  
Call the toUpperCase() method on the string. 

NOTE: We will cover methods in more detail in future section.

EX: "javascript jumpstart".toUpperCase()
OUTPUT: "JAVASCRIPT JUMPSTART";

*/

console.log("Let the games begin".toUpperCase());
// Challenge 3: toUpperCase() - WRITE CODE BELOW

/* Challenge - Practice using Strings  

Challenge - Create a String by surrounding characters with an apostrophe or quotation marks.  Call the toLowerCase() method
on the string. 

NOTE: We will cover methods in more detail in future section.

EX: "FULLSTACK ACADEMEY".toLowerCase()
OUTPUT: "fullstack academy";

*/
console.log("HOCUS POCUS".toLowerCase());
// Challenge 4: toLowerCase() - WRITE CODE BELOW

function palindrome(str) {
	debugger;
	let newStr = str.toLowerCase();
	let reverseStr = "";
	console.log(newStr);
	for (let i = newStr.length - 1; i >= 0; i--) {
		reverseStr += newStr[i];
	}
	console.log(reverseStr);
	if (reverseStr === newStr) {
		return true;
	}
	return false;
}
palindrome("aCaraManaMaraca");

function firstRepeatingLetter(str) {
	let newStr = str.toLowerCase().replace(/[\s]/g, "");
	for (let i = 0; i < newStr.length; i) {
		// console.log(newStr[i])
		console.log(newStr.lastIndexOf("d"));
		if (newStr.lastIndexOf(newStr[i]) !== newStr.indexOf(newStr[i])) {
			return newStr[i];
		}
	}
	return "No repeats";
}

firstRepeatingLetter("Grace Hopper"); //-> returns "r"
firstRepeatingLetter("Shanna"); //-> returns "a"
firstRepeatingLetter("Nimit"); //-> returns "d"

function getHeight(cycles) {
	let height = 1;

	for (let i = 1; i <= cycles; i++) {
		if (i % 2 === 0) {
			height += 1;
		} else if (i % 2) {
			height *= 2;
		}
	}
	return height;
}
getHeight(3); // 6

function rightTriangle(rows) {
	let store = "";
	for (let i = rows; i > 0; i--) {
		console.log("I:", i);
		for (let j = 0; j < i; j++) {
			console.log("j:", j);
			store += "*";
		}
		if (i === 1) {
			break;
		} else {
			store += "\n";
		}
	}
	return store;
} //returns "**\n*"

/*"*****
 ****
 ***
 **
 *" */

// returns-- > [4, 5, 1, 2, 3]
// rotate([10, 20, 30, 40, 50, 60], 4) //returns --> [30,40,50,60,10,20]

function indexOf(str, queryStr) {
	for (let i = 0; i < str.length; i++) {
		let query = str.slice(i, i + queryStr.length);
		// console.log(query)
		if (query === queryStr) {
			return i;
		}
	}
}
indexOf("helloWorld", "o"); // 4
indexOf("helloWorld", "World"); // 5``

function sumAll(arr) {
	let newArr = [];
	for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
		newArr.push(i);
	}
	return newArr.reduce(function (a, b) {
		return a + b;
	}, 0);
}

sumAll([1, 4]);

function factorialize(num) {
	if (num === 0) {
		return 1;
	}
	for (var i = num - 1; i >= 1; i--) {
		console.log(i);
		num *= i;
	}

	return num;
}

factorialize(5);

function findLongestWord(str) {
	var count = 0;
	var newStr = str.split(" ");
	// console.log(newStr)
	for (var i = 0; i < newStr.length; i++) {
		if (newStr[i].length > count) {
			count = newStr[i].length;
		}
	}
	return count;
}

findLongestWord("May the force be with you");

// function findLongestWord(str) {
// 	var array = str.split(' ')
// 	var newArr = array.sort(function (a, b) {
// 		return b.length - a.length
// 	})
// 	return newArr[0].length
// }
// findLongestWord('The quick brown fox jumped over the lazy dog')

function titleCase(str) {
	var newStr = str.toLowerCase().split(" ");
	//newStr.toLowerCase()
	console.log(newStr);

	var newString = newStr.map(function (val) {
		return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
	});

	return newString.join(" ");
}

titleCase("I'm a little tea pot");

function largestOfFour(arr) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		var largest = arr[i][0];
		for (var j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > largest) {
				largest = arr[i][j];
				console.log(largest, "iteration");
				console.log(arr[0][1]);
			}
		}
		newArr.push(largest);
	}
	return newArr;
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1],
]);

function myMnemonic(str1, str2, str3, str4) {
	let newStr = "";
	if (str1 !== undefined) {
		newStr += str1[0];
	}
	if (str2 !== undefined) {
		newStr += str2[0];
	}
	if (str3 !== undefined) {
		newStr += str3[0];
	}
	if (str4 !== undefined) {
		newStr += str4[0];
	}
	return newStr;
}
myMnemonic("Must", "Accept", "Sugar", "Happiness"); // => MASH

var contacts = [
	{
		firstName: "Akira",
		lastName: "Laine",
		number: "0543236543",
		likes: ["Pizza", "Coding", "Brownie Points"],
	},
	{
		firstName: "Harry",
		lastName: "Potter",
		number: "0994372684",
		likes: ["Hogwarts", "Magic", "Hagrid"],
	},
	{
		firstName: "Sherlock",
		lastName: "Holmes",
		number: "0487345643",
		likes: ["Intriguing Cases", "Violin"],
	},
	{
		firstName: "Kristian",
		lastName: "Vos",
		number: "unknown",
		likes: ["JavaScript", "Gaming", "Foxes"],
	},
];

function lookUpProfile(name, prop) {
	for (let i = 0; i < contacts.length; i++) {
		if (contacts[i].firstName === name) {
			if (contacts[i].hasOwnProperty(prop)) {
				return contacts[i][prop];
			} else {
				return "No such property";
			}
		}
	}
	return "No such contact";
	// Only change code above this line
}

lookUpProfile("Bob", "potato");

function sum(arr, n) {
	// Only change code below this line
	if (n <= 0) {
		return 0;
	} else {
		return sum(arr, n - 1) + arr[n - 1];
	}

	// Only change code above this line
}
sum([2, 3, 4], 2); // 2

var collection = {
	2548: {
		album: "Slippery When Wet",
		artist: "Bon Jovi",
		tracks: ["Let It Rock", "You Give Love a Bad Name"],
	},
	2468: {
		album: "1999",
		artist: "Prince",
		tracks: ["1999", "Little Red Corvette"],
	},
	1245: {
		artist: "Robert Palmer",
		tracks: [],
	},
	5439: {
		album: "ABBA Gold",
	},
};

// Only change code below this line
function updateRecords(id, prop, value) {
	if (value === "") {
		delete collection[id][prop];
	} else if (prop === "tracks") {
		collection[id][prop] = collection[id][prop] || [];
		collection[id][prop].push(value);
	} else {
		collection[id][prop] = value;
	}
	return collection;
}

updateRecords(1245, "tracks", "Take a Chance on Me");

var arr1 = [5, 10, 15, 20];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [1, 10, 15, 5, 20];
function intersection(arr) {
	return arr.reduce(function (acc, curr) {
		console.log("acc:", acc, "curr:", curr);
		let result = [];
		for (var i = 0; i < acc.length; i++) {
			if (curr.includes(acc[i])) {
				result.push(acc[i]);
			}
		}
		return result;
	});
}
intersection([arr1, arr2, arr3]); // should log: [5, 15]

var arr1 = [5, 10, 15];
var arr2 = [15, 88, 1, 5, 7];
var arr3 = [100, 15, 10, 1, 5];

function union(arr) {
	let flattened = arr.reduce(function (acc, curr) {
		return acc.concat(curr);
	});
	return [...new Set(flattened)];
}

union([arr1, arr2, arr3]); // should log: [5, 10, 15, 88, 1, 7, 100]

function getRemainder(num1, num2) {
	//your code goes here...
	if (num1 > num2) {
		return num1 % num2;
	} else {
		return num2 % num1;
	}
}
console.log(getRemainder(17, 5)); //=> 2

function gradeCalculator(grade) {
	let result;
	if (grade >= 90) {
		result = "A";
	} else if (grade >= 80) {
		result = "B";
	} else if (grade >= 70) {
		result = "C";
	} else if (grade >= 60) {
		result = "D";
	} else if (grade <= 50) {
		result = "F";
	}
	return result;
}

console.log(gradeCalculator(92)); //=> "A"
console.log(gradeCalculator(84)); //=> "B"
console.log(gradeCalculator(70)); //=> "C"
console.log(gradeCalculator(61)); //=> "D"
console.log(gradeCalculator(43)); //=> "F"

function arrayBuilder(obj) {
	let newArr = [];
	for (let key in obj) {
		for (let i = 0; i < obj[key]; i++) {
			newArr.push(key);
		}
	}
	return newArr;
}

console.log(arrayBuilder({ cats: 2, dogs: 1 })); //=> ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); //=> []

var arr1 = ["hi", "howdy", "bye", "later", "hello"];
var arr2 = ["HI", "Howdy", "BYE", "later", "HELLO"];
function uppercaser(str) {
	return str.toUpperCase();
}

function objOfMatches(arr1, arr2, callback) {
	let newObj = {};
	let check = arr1.filter(function (val) {
		return arr2.includes(val.toUpperCase());
	});
	console.log(check);
	for (let i = 0; i < check.length; i++) {
		newObj[check[i]] = check[i].toUpperCase();
	}
	return newObj;
}
objOfMatches(arr1, arr2, uppercaser); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

// function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
function repeater(str) {
	return str + str;
}
var items = ["catfood", "glue", "beer"];
var functions = [uppercaser, capitalize, repeater];

function multiMap(arr, functionsArr) {
	let newArr = {};
	let test = arr.map(function (val) {
		return functionsArr.map(function (val2) {
			return val2(val);
		});
	});
	for (let i = 0; i < test.length; i++) {
		newArr[arr[i]] = test[i];
	}
	return newArr;
}
console.log(multiMap(items, functions));
//  { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

function majority(arr, callback) {
	let filtered = arr.map(function (val) {
		return callback(val);
	});

	let trueValues = filtered.filter(function (val2) {
		return val2 === true;
	});
	let falseValues = filtered.filter(function (val3) {
		return val3 === false;
	});
	if (trueValues.length > falseValues.length) {
		return true;
	} else if (trueValues.length === falseValues.length) {
		return false;
	} else {
		return false;
	}
}

var isOdd = function (num) {
	return num % 2 === 1;
};
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

function prioritize(arr, callback) {
	let trueValues = arr.filter(function (val2) {
		return callback(val2) === true;
	});
	console.log(trueValues);
	let falseValues = arr.filter(function (val3) {
		return callback(val3) === false;
	});
	// console.log(falseValues)
	return trueValues.concat(falseValues);
}
//
function startsWithS(str) {
	return str[0].toLowerCase() === "s";
}
var tvShows = ["curb", "rickandmorty", "seinfeld", "sunny", "friends"];
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

function countBy(arr, callback) {
	let newObj = {};
	let props = arr.map(function (val) {
		return callback(val);
	});

	for (let i = 0; i < props.length; i++) {
		if (newObj[props[i]]) {
			newObj[props[i]]++;
		} else {
			newObj[props[i]] = 1;
		}
	}
	return newObj;
}
//
function evenOdd(n) {
	if (n % 2 === 0) return "even";
	else return "odd";
}
var nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenAndOdd)); // should log: { odd: 3, even: 2 }

var decimals = [1, 2, 3, 4, 5].sort();
// console.log(decimals)
var floored = function (num) {
	return Math.floor(num);
};
var evenAndOdd = function (num) {
	return num % 2 === 0;
};

function groupBy(arr, callback) {
	debugger;
	let newObj = {};
	let test = arr.map(function (val) {
		return callback(val);
	});
	for (let i = 0; i < test.length; i++) {
		if (!newObj[test[i]]) {
			newObj[test[i]] = [arr[i]];
		} else {
			newObj[test[i]].push(arr[i]);
		}
	}
	return newObj;
}
groupBy(decimals, floored); // should log: { 1: [1.3], 2: [2.1, 2.4] }

groupBy(decimals, evenOdd);

// for(let i = 0; i < mapped.length; i++){
// 	if(!newObj[mapped[i]]){
// 		if(Math.floor(arr[i])=== mapped[i]){
// 			 newObj[mapped[i]] = [arr[i]]
// 		}
// 	} else {
// 		if(Math.floor(arr[i]) === mapped[i]){
// 			newObj[mapped[i]].push(arr[i])
// 	}
// }

var sunny = { mac: "priest", dennis: "calculating", charlie: "birdlaw", dee: "bird", frank: "warthog" };

function goodKeys(obj, callback) {
	let base = [];
	let callbackResult;
	for (prop in obj) {
		callbackResult = callback(obj[prop]);
		if (callbackResult === true) {
			base.push(prop);
		}
	}
	return base;
}

function startsWithBird(str) {
	return str.slice(0, 4).toLowerCase() === "bird";
}

console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

function createFunction() {
	function helloWorld() {
		return "Hello World";
	}
	return helloWorld;
}
//
var myFunction = createFunction();
myFunction(); //should log: 'hello world'

function addByX(input) {
	function add(x) {
		return x + input;
	}
	return add;
}
const addByTwo = addByX(2);
console.log(addByTwo(2));
console.log(addByTwo(3));

function partlist(arr) {
	debugger;
	var newArray;
	var returnArray = [];
	for (var i = 1; i < arr.length; i++) {
		newArray = [];
		//  console.log( newArray.push(arr.slice(0,4).join(" ")))
		// console.log(newArray.push(arr.slice(4).join(' ')))
		console.log(newArray);
	}
}
partlist(["az", "toto", "picaro", "zone", "kiwi"]);

function censor() {
	let storedStrings1 = {};
	function censored(str1, str2) {
		if (arguments.length === 2) {
			// console.log(arguments.length)
			storedStrings1[str1] = str2;
			// storedStrings1[str1] = str2
			// console.log(storedStrings1)
		} else {
			for (let prop in storedStrings1) {
				console.log(str1, "str1");
				str1 = str1.replace(prop, storedStrings1[prop]);
			}
			return str1;
		}

		// storedStrings2.push(str1)

		// console.log(storedStrings2.length)

		// console.log(arguments)
		// console.log(storedStrings2)
	}
	return censored;
}

//
const changeScene = censor();
changeScene("dogs", "cats");
console.log(changeScene("quick", "slow"));
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // should log: 'The slow, brown fox jumps over the lazy cats.'
storedStrings.push(...args);
console.log(storedStrings);
console.log(storedStrings);
// if two strings are given, this function will store the two strings
// if given one string, it will return the given one string and replace all instances of the pair in the one string given

function makePerson(name, age) {
	let obj = { name: name, age: age };
	return obj;
}

const vicky = makePerson("Vicky", 24);

// Uncomment these lines to check your work!
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24

const personStore = {
	greet: function () {
		console.log("hello");
	},
};

function personFromPersonStore(name, age) {
	const person = Object.create(personStore);
	person.name = name;
	person.age = age;
	return person;
}

const sandra = personFromPersonStore("Sandra", 26);
personStore.introduce = function () {
	console.log(`Hi, my name is ${this.name}`);
};
//

// Uncomment this line to check your work!
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

function PersonConstructor() {
	this.greet = function () {
		console.log("hello");
	};
}

function personFromConstructor(name, age) {
	let person = new PersonConstructor(name, age);
	person.name = name;
	person.age = age;
	return person;
}
var simon = new PersonConstructor();

// function personFromConstructor(name, age) {
//   let person = new PersonConstructor(name, age);
//   person.name = name;
//   person.age = age;
//   return person;
// }
// var simon = new PersonConstructor;

const mike = personFromConstructor("Mike", 30);

// Uncomment these lines to check your work!
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'

let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function () {
		return `This dog has ${dog.numLegs} legs.`;
	},
};

dog.sayLegs();

function pluralize(arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(arr[i] + "s");
	}
	return newArr;
}
//
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals));

function subtractTwo(num) {
	return num - 2;
}
function map(arr, callback) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		newArr.push(callback(arr[i]));
	}

	return newArr;
}
console.log(map([3, 4, 5], subtractTwo));

//
function groupy(array, callback) {
	let arr = [];
	let obj = {};
	let called = array.map(function (val) {
		return callback(val);
	});
	for (let i = 0; i < called.length; i++) {
		if (!obj[called[i]]) {
			obj[called[i]] = [array[i]];
		} else {
			obj[called[i]].push(array[i]);
		}
	}
	return obj;
}
//
const decimals = [1.3, 2.1, 2.4];
const floored = function (num) {
	return Math.floor(num);
};
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

function good_Keys(obj, callback) {
	let newArr = [];
	for (let props in obj) {
		if (callback(obj[props])) {
			newArr.push(props);
		}
	}
	return newArr;
}
//
const sunny = { mac: "priest", dennis: "calculator", charlie: "birdlaw", dee: "bird", frank: "warthog" };
function startsWithBird(str) {
	return str.slice(0, 4).toLowerCase() === "bird";
}
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

//
function createFunction() {
	function helloWorld() {
		return "hello world";
	}
	return helloWorld;
}
//
var myFunction = createFunction();
myFunction(); //should log: 'hello world'

//
function createFunctionWithInput(input) {
	function returnInput() {
		return input;
	}
	return returnInput;
}
//
const sampleFunc = createFunctionWithInput("sample");
console.log(sampleFunc()); // should log: 'sample'
const helloFunc = createFunctionWithInput("hello");
console.log(helloFunc()); // should log: 'hello'

function outer() {
	var counter = 0; // this variable is outside incrementCounter's scope
	function incrementCounter() {
		counter++;
		console.log("counter", counter);
	}
	return incrementCounter;
}

var willCounter = outer();
var jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

willCounter();
willCounter();
willCounter();

// jasCounter();
// willCounter();

//
function addByX(input) {
	function add(x) {
		return x + input;
	}
	return add;
}
const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output

// Now call addByTwo with an input of 2 and log the output

function once(callback) {
	let functionCall = false;
	let result;

	function onceIfied(...args) {
		if (functionCall === false) {
			result = callback(...args);
			functionCall = true;
		}
		return result;
	}
	return onceIfied;
}
const addByTwoOnce = once(function (num) {
	return num + 2;
});

// should log 7

function after(num, callback) {
	let counter = 0;

	function call() {}
}
const called = function (string) {
	return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled("world")); // -> nothing is printed
console.log(afterCalled("world")); // -> nothing is printed
console.log(afterCalled("world")); // -> 'hello world' is printed

function once(callback) {
	let result;
	function test(b) {
		console.log(b);
		if (result === undefined) {
			result = callback(b);
		}
		return result;
	}
	return test;
}
const addByTwoOnce = once(function (num) {
	return num + 2;
});

//
console.log(addByTwoOnce(5)); //should log 7
console.log(addByTwoOnce(10)); //should log 7
console.log(addByTwoOnce(9001)); //should log 7

function after(numOfTimes, callback) {
	let timesCalled = 1;
	let result;
	function numberCalled(s) {
		if (numOfTimes === 0) {
			return callback(s);
		} else {
			if (timesCalled === numOfTimes) {
				result = callback(s);
			} else {
				timesCalled++;
			}
			return result;
		}
	}
	return numberCalled;
}
const called = function (string) {
	return "hello " + string;
};
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled("world")); // -> nothing is printed
console.log(afterCalled("world")); // -> nothing is printed
console.log(afterCalled("world")); // -> 'hello world' is printed

function saveOutput(callback, string) {
	let password = {};
	function replicate(s) {
		if (typeof s !== "string") {
			password[s] = callback(s);
		} else {
			return password;
		}
		return password[s];
	}
	return replicate;
}
//
const multiplyBy2 = function (num) {
	return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog("boo")); // should log: { 2: 4, 9: 18 }'

function cycleIterator(array) {
	let storedElem = 0;
	function test() {
		storedElem++;
		if (storedElem === array.length + 1) {
			storedElem = 1;
		}
		return array[storedElem - 1];
	}
	return test;
}

//
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'

function censor() {
	let stored = {};
	function test(...args) {
		if (arguments.length === 2) {
			stored[arguments[0]] = arguments[1];
		} else {
			for (let props in stored) {
				arguments[0] = arguments[0].replace(props, stored[props]);
			}
			return arguments[0];
		}
	}
	return test;
}

const changeScene = censor();
changeScene("dogs", "cats");
changeScene("quick", "slow");
console.log(changeScene("The quick, brown fox jumps over the lazy dogs.")); // should log: 'The slow, brown fox jumps over the lazy cats.'

function updateInventory(arr1, arr2) {
	arr1.forEach((elem) => {
		arr2.forEach((elem1) => {
			if (elem[1] === elem1[1]) {
				elem[0] += elem1[0];
			}
		});
	});

	let curI = arr1.map((ele) => ele[1]);

	arr2.forEach((ele) => {
		if (!curI.includes(ele[1])) {
			arr1.push(ele);
		}
	});

	return arr1.sort((a, b) => {
		return a[1] > b[1] ? 1 : -1;
	});
}

// test
// Example inventory lists
var curInv = [
	[2, "Dirty Sock"],
	[21, "Bowling Ball"],
	[1, "Hair Pin"],
	[5, "Microphone"],
];

var newInv = [
	[2, "Hair Pin"],
	[3, "Half-Eaten Apple"],
	[67, "Bowling Ball"],
	[7, "Toothpaste"],
];

updateInventory(curInv, newInv);
