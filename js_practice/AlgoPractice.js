 function palindrome(str) {
	debugger
	let newStr = str.toLowerCase()
	let reverseStr = ""
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
palindrome("aCaraManaMaraca")

function firstRepeatingLetter(str) {
	let newStr = str.toLowerCase().replace(/[\s]/g, "")
	for (let i = 0; i < newStr.length; i) {
		// console.log(newStr[i])
		console.log(newStr.lastIndexOf("d"))
		if (newStr.lastIndexOf(newStr[i]) !== newStr.indexOf(newStr[i])) {
			return newStr[i]
		}
	}
	return "No repeats"
}

firstRepeatingLetter("Grace Hopper Academy") //-> returns "r"
firstRepeatingLetter("Shanna Gregory") //-> returns "a"
firstRepeatingLetter("David Nimit") //-> returns "d"


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
	let store = ""

	for (let i = rows; i > 0; i--) {
		console.log("i:", i)
		for (let j = ; j > rows; j--) {
			console.log("j:", j)
			store += "*"
		}

		console.log(store)
	}
}
rightTriangle(2) //returns "**\n*"

/*"*****
  ****
  ***
  **
 *" */


returns-- > [4, 5, 1, 2, 3]
rotate([10, 20, 30, 40, 50, 60], 4) //returns --> [30,40,50,60,10,20]

function indexOf(str, queryStr) {
	for (let i = 0; i < str.length; i++) {
		let query = str.slice(i, i + queryStr.length)
		if (query === query)
	}

}

indexOf('helloWorld', 'o') // 4
// // indexOf('helloWorld', 'World') // 5``