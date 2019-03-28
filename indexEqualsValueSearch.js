/*
Given a sorted array arr of distinct integers, write a function indexEqualsValueSearch that returns the lowest index i for which arr[i] == i. 
Return -1 if there is no such index. Analyze the time and space complexities of your solution and explain its correctness.
*/

const MAX = 10;

//brute force solution for when the length of the array is less than MAX
function indexEqualsValueSearch1(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    console.log(arr[i])
    if (arr[i] === i) return i;
    
    if (arr[i] > i) return -1;
  }
  return -1;

}
//binary search function for when array is very long
function indexEqualsValueLongArr(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end)/2);
    if (arr[mid] - mid < 0) start = mid + 1;
    else if (arr[mid] === mid  && (mid === 0 || arr[mid - 1] < mid - 1)) return mid;
    else end = mid - 1;
  }
  return -1;
}

//binary search function written using recursion
function binarySearch(arr, start = 0, end = arr.length - 1) {
  let mid = Math.floor((start + end)/2);
  if(start > end) return -1;
  if (arr[mid] < mid) return binarySearch(arr, mid + 1, end);
  if (arr[mid] === mid && (mid === 0 || arr[mid - 1] < mid - 1)) return mid;
  else return binarySearch(arr, start, end - 1);
  }

//main function
function indexEqualsValueSearch(arr) {
// if (arr.length < MAX) return indexEqualsValueSearch1(arr);
return binarySearch(arr);
}

//test cases
// console.log(indexEqualsValueSearch([0])); //-1 We can stop checking as soon as the arr[i] > i 
// console.log(indexEqualsValueSearch([-2, -1, 0, 1, 4]));
console.log(indexEqualsValueSearch([-20, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19]));
console.log(indexEqualsValueSearch([]))





