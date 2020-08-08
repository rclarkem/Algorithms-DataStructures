const funcs = require("./testing_file.js");

test("should return array of those numbers having been cubed.", () => {
	// Use '.toStrictEqual' with arrays
	const arr = [1, 2, 3];
	expect(funcs.cubeAll(arr)).toStrictEqual([1, 4, 9]);
});

test("be a length of 3 ", () => {
	const arr = [1, 2, 3];
	expect(funcs.cubeAll(arr).length).toBe(arr.length);
});
