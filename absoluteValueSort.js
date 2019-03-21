/*
Absolute Value Sort
Given an array of integers arr, write a function absSort(arr), that sorts the array according to the absolute values of the numbers in arr. If two numbers have the same absolute value, sort them according to sign, where the negative numbers come before the positive numbers.

Examples:

input:  arr = [2, -7, -2, -2, 0]
output: [0, -2, -2, 2, -7]
Constraints:

[time limit] 5000ms
[input] array.integer arr
 
 */


//helper function to make a hash table from an array
const hash = (array) => {
  let hashTable = {};
  for (let i = 0; i < array.length; i++) {
    if (hashTable.hasOwnProperty(array[i])) hashTable[array[i]]++;
    else hashTable[array[i]] = 1;
  }
  return hashTable;
};

//helper function to find the least key in an array
const leastKey = (keys) => {
  let least = Number(keys[0]);
  console.log(least);
  let index = 0;
  for (let i = 1; i < keys.length; i++) {
    if (Math.abs(Number(keys[i])) < Math.abs(least)) {
      least = Number(keys[i]);
      index = i;
    }
    if (Math.abs(Number(keys[i])) === Math.abs(least)) {
      if (Number(keys[i]) < least) {
        least = Number(keys[i]);
        index = i;
      }
    }    
  }  
  return [least, index];
};

//main function
function absSort(arr) {
  let sortedAbs = [];
  let hashObj = hash(arr);
  console.log(hashObj)
  let keys = Object.keys(hashObj); 
  
  while (keys.length > 0) {  
    let leastArr = leastKey(keys); 
    let least = leastArr[0];
    let index = leastArr[1]; 
    for (let i = 0; i < hashObj[least]; i++) {
      sortedAbs.push(least);
    }
    keys.splice(index, 1);
    
  }
  return sortedAbs;
}

console.log(absSort([-7, 2, -2, -2, 0]));
