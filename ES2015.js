
//Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.

function copyObject(o){
  return Object.assign({}, o);
}

//Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.

function checkIfFinite(num){
  return Number.isFinite(num);
}
console.log(checkIfFinite(4)); // true
console.log(checkIfFinite(-3)); // true
console.log(checkIfFinite(4.08)); // .toEqual(true
console.log(checkIfFinite(NaN)) // false
console.log(checkIfFinite(Infinity)) // false

//Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array 
//is a finite number, otherwise return false.

function areAllNumbersFinite(arr){
  return arr.every(Number.isFinite)
}

var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
console.log(areAllNumbersFinite(finiteNums)); // true
console.log(areAllNumbersFinite(finiteNumsExceptOne)); // false

/* 

Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. 
The function should return the array like object converted to an array.

*/

function convertArrayLikeObject(obj){
  return Array.from(obj);
}

/*
Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array 
with all of the arguments that are even numbers.
*/

function displayEvenArguments(){
  let arr = Array.from(arguments);
  return arr.filter(ele => ele % 2 === 0);
}
console.log(displayEvenArguments(1,2,3,4,5,6)); // [2,4,6]
console.log(displayEvenArguments(7,8,9)) // [8]
console.log(displayEvenArguments(1,3,7)) // []