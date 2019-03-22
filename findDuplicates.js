/*
Find The Duplicates
Given two sorted arrays arr1 and arr2 of passport numbers, implement a function findDuplicates that returns an array of all passport numbers that are both in arr1 and arr2. Note that the output array should be sorted in an ascending order.

Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and analyze the time & space complexities of your solutions: M ≈ N - the array lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

Example:

input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

output: [3, 6, 7] # since only these three values are both in arr1 and arr2
Constraints:

[time limit] 5000ms

[input] array.integer arr1

1 ≤ arr1.length ≤ 100
[input] array.integer arr2

1 ≤ arr2.length ≤ 100
[output] array.integer
*/
//Method in which sorting does not matter. Linear time complexity
//helper function to make a hash from an array
const object = (array) => {
 
  let obj = {};
  for (let element of array) {
    obj[element] = obj[element] + 1 || 1;
  }
  return obj;
};

function duplicates (ar1, ar2) {
  let results = [];
  let obj1 = object(ar1);
  let obj2 = object(ar2);
  
  let smallerObj = obj1;
  let largerObj = obj2;
  
  
  let obj1Length = Object.keys(obj1).length;
  let obj2Length = Object.keys(obj2).length;
  
  if (obj1Length > obj2Length) {
    smallerObj = obj2;
    largerObj = obj1;
  } 
 console.log(obj1);
 console.log(obj2);
  for (let key in smallerObj) {
    if (largerObj.hasOwnProperty(key)) results.push(parseInt(key));
  }
  return results;
}

console.log(duplicates([11], [11]))
console.log(duplicates([1, 2, 3, 3, 5, 6, 7, 9, 10, 10, 40, 40], [3, 6, 7, 8, 20, 40]));




//Method in which sorting matters

//helper function in the case when the lengths of the two arrays are equivalent
const duplicates = (arr1, arr2) => {
   // arr1 < arr2 
   // iterate through arr1 N = length of arr1, M = length of arr2
    // binarysearch(arr1[element], arr2) (N * (log(M)))
    let duplicates = [];
    let pointer1 = 0;
    let pointer2 = 0;
    while(pointer1 <= arr1.length - 1 && pointer2 <= arr2.length - 1) {
      if (arr1[pointer1] === arr2[pointer2]) {
        duplicates.push(arr1[pointer1]);
        pointer1++;
        pointer2++;
      }
      if (arr1[pointer1] > arr2[pointer2]) pointer2++;
      if (arr1[pointer1] < arr2[pointer2]) pointer1++;
    }
    return duplicates;
//M is length of longer array; N is length of shorter array
// time complexity: O(M + N)
// space complexity: O(N)
}

//helper recursive function using binary search to find a number
const binarySearch = (array, num, start, end) => {
  let mid = Math.floor((start + end) / 2);
  if (array[mid] === num || (array[mid] > num && array[mid - 1] < num)) return mid;
  if (array[mid] < num && array[mid + 1] > num) return mid + 1;
  if (array[mid] > num) return binarySearch(array, num, start, mid - 1);
  if (array[mid] < num) return binarySearch(array, num, mid + 1, end);
};

console.log(binarySearch([3, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60], 29, 0, 11))


//helper function in the case when the lengths of the two arrays are very different
const duplicatesBinary = (arr1, arr2) => {
  let duplicates = [];
  let pointer1 = 0;
  let pointer2 = 0;
  let start = 0;
  let end = arr2.length - 1; 
  while(pointer1 <= arr1.length - 1) {
    if (arr1[pointer1] === arr2[pointer2]) {
      duplicates.push(arr1[pointer1]);
      pointer1++;
      pointer2++;
    }
    if (arr1[pointer1] < arr2[pointer2]) pointer1++;
    if (arr1[pointer1] > arr2[pointer2]) {
      pointer2 = binarySearch(arr2, arr1[pointer1], start, end)
      start = pointer2;      
    }
    
  }
  return duplicates;
};



//main function
function findDuplicates(array1, array2) {
   //making arr1 as the array with the smaller length
  let arr1 = [];
  let arr2 = []; 
  if (array1.length < array2.length) {
    arr1 = array1;
    arr2 = array2;
  }
  else {
    arr2 = array1;
    arr1 = array2;
  }
  //sort the two arrays
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let differenceInLengths = arr1.length - arr2.length;
  console.log(differenceInLengths)
  if (Math.abs(differenceInLengths) > 2 * (arr1.length)) return duplicatesBinary(arr1, arr2);
  else return duplicates(arr1, arr2); 
  //if M >>> N, then do binary search on the longer length matrix to get time complexity of O(N*logM)
}


console.log(findDuplicates([1, 2, 3, 5, 6, 7, 9, 10, 40], [3, 6, 7, 8, 20, 40]));
console.log(findDuplicates([3, 100, 105, 107, 1000], [3, 5, 6, 7, 8, 9, 10, 11, 12, 100, 101, 105, 200, 300, 302, 303, 500, 1000, 2000, 3000]));