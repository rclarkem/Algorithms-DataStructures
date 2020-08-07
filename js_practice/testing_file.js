/*
Here we have a higher order function called 'map'. It takes two arguments: an array and a callback function.

It will iterate over each element in the array, applying the callback function to each element. It should then return a new array whose elements are the result of applying the callback function to each element in the input array.

cubeAll takes one argument: an array. And it calls the map function inside of it. 

cubeAll will return an array of those numbers having been cubed.  

*/

function map(array, callbackFunction) {
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
    newArray.push(callbackFunction(array[i]));
  }

  return newArray;
}

function cubeAll(arrOfNumbers) {
  return map(arrOfNumbers, function (n) {
    return n * n;
  });
}
