function palindrome(str) {
	debugger
	let newStr = str.toLowerCase()
	let reverseStr = ''
	console.log(newStr)
	for (let i = newStr.length - 1; i >= 0; i--) {
		reverseStr += newStr[i]
	}
	console.log(reverseStr)
	if (reverseStr === newStr) {
		return true
	}
	return false
}
palindrome('aCaraManaMaraca')

function firstRepeatingLetter(str) {
	let newStr = str.toLowerCase().replace(/[\s]/g, '')
	for (let i = 0; i < newStr.length; i) {
		// console.log(newStr[i])
		console.log(newStr.lastIndexOf('d'))
		if (newStr.lastIndexOf(newStr[i]) !== newStr.indexOf(newStr[i])) {
			return newStr[i]
		}
	}
	return 'No repeats'
}

firstRepeatingLetter('Grace Hopper') //-> returns "r"
firstRepeatingLetter('Shanna') //-> returns "a"
firstRepeatingLetter('Nimit') //-> returns "d"

function getHeight(cycles) {
	let height = 1

	for (let i = 1; i <= cycles; i++) {
		if (i % 2 === 0) {
			height += 1
		} else if (i % 2) {
			height *= 2
		}
	}
	return height
}
getHeight(3) // 6

function rightTriangle(rows) {
	let store = ''
	for (let i = rows; i > 0; i--) {
		console.log('I:', i)
		for (let j = 0; j < i; j++) {
			console.log('j:', j)
			store += '*'
		}
		if (i === 1) {
			break
		} else {
			store += '\n'
		}
	}
	return store
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
		let query = str.slice(i, i + queryStr.length)
		// console.log(query)
		if (query === queryStr) {
			return i
		}
	}
}
indexOf('helloWorld', 'o') // 4
indexOf('helloWorld', 'World') // 5``

function sumAll(arr) {
	let newArr = []
	for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
		newArr.push(i)
	}
	return newArr.reduce(function (a, b) {
		return a + b
	}, 0)
}

sumAll([1, 4])

function factorialize(num) {
	if (num === 0) {
		return 1
	}
	for (var i = num - 1; i >= 1; i--) {
		console.log(i)
		num *= i
	}

	return num
}

factorialize(5)

function findLongestWord(str) {
	var count = 0
	var newStr = str.split(' ')
	// console.log(newStr)
	for (var i = 0; i < newStr.length; i++) {
		if (newStr[i].length > count) {
			count = newStr[i].length
		}
	}
	return count
}

findLongestWord('May the force be with you')

function findLongestWord(str) {
	var array = str.split(' ')
	var newArr = array.sort(function (a, b) {
		return b.length - a.length
	})
	return newArr[0].length
}
findLongestWord('The quick brown fox jumped over the lazy dog')

function titleCase(str) {
	var newStr = str.toLowerCase().split(' ')
	//newStr.toLowerCase()
	console.log(newStr)

	var newString = newStr.map(function (val) {
		return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
	})

	return newString.join(' ')
}

titleCase("I'm a little tea pot")

function largestOfFour(arr) {
	var newArr = []
	for (var i = 0; i < arr.length; i++) {
		var largest = arr[i][0]
		for (var j = 0; j < arr[i].length; j++) {
			if (arr[i][j] > largest) {
				largest = arr[i][j]
				console.log(largest, 'iteration')
				console.log(arr[0][1])
			}
		}
		newArr.push(largest)
	}
	return newArr
}

largestOfFour([
	[4, 5, 1, 3],
	[13, 27, 18, 26],
	[32, 35, 37, 39],
	[1000, 1001, 857, 1],
])

function myMnemonic(str1, str2, str3, str4) {
	let newStr = ''
	if (str1 !== undefined) {
		newStr += str1[0]
	}
	if (str2 !== undefined) {
		newStr += str2[0]
	}
	if (str3 !== undefined) {
		newStr += str3[0]
	}
	if (str4 !== undefined) {
		newStr += str4[0]
	}
	return newStr
}
myMnemonic('Must', 'Accept', 'Sugar', 'Happiness') // => MASH
