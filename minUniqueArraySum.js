/*Given an array, you must increment any duplicate elements until all its elements are unique. In
addition, the sum of its elements must be the minimum possible within the rules. For example, if
arr = [3, 2, 1, 2, 7], then arr = [3, 2, 1, 4, 7] and its elements sum to a minimal value of 3 + 2
+ 1 + 4 + 7 = 17.
Function Description
Complete the getMinimumUniqueSum function in the editor below to create an array of unique
elements with a minimal sum. Return the integer sum of the resulting array.
getMinimumUniqueSum has the following parameter(s):
arr: an array of integers to process

Constraints
1 ≤ n ≤ 2000
1 ≤ arr[i] ≤ 3000 where 0 ≤ i < n
*/

//i: array
//o: number
//constraints: given in the problem
//edge: none

const getMinimumUniqueSum = (array) => {
  if (array.length < 1) return ("The given array is empty. Please add positive integer elements to array");
  if (array.length > 2000) return ("The array cannot be longer than 2000 elements");
  let obj = {};
  let toChange = [];

  //loop over the array checking each element for constraints, duplicates, and assigning element to object or array
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 1 || array[i] > 3000) {      
      return (`change ${array[i]} so that it is an integer greater than 0 but less than 3001`);
    } 
    if (!obj[array[i]]) {
      obj[array[i]] = 1;      
    } else {
      toChange.push(array[i]);      
    }
  }  

  for (let i = 0; i < toChange.length; i++) {
    while(obj[toChange[i]]) {
      toChange[i]++;
    }
    obj[toChange[i]] = 1;      
  };
  
  let arrKeys = Object.keys(obj);  
  let sum = (arrKeys.reduce((a, b) => Number(a) + Number(b)));
  return sum;
};


console.log(getMinimumUniqueSum([]));
console.log(getMinimumUniqueSum([-1, 3001, 3, 9, 18, 7, 8, 7, 18]));
console.log(getMinimumUniqueSum([3, 2, 1, 2, 7]));
console.log(getMinimumUniqueSum([3, 2, 1, 2, 7, 1, 3]))