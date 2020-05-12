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

firstRepeatingLetter('Grace Hopper Academy') //-> returns "r"
firstRepeatingLetter('Shanna Gregory') //-> returns "a"
firstRepeatingLetter('David Nimit') //-> returns "d"

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
