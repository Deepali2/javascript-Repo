/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
*/

//make an array
const makeArr = num => {
  let arr = [];
  for (let i = 1; i < num; i++) {
    arr.push(i);
  }
  return arr;
};
let arr3 = makeArr(10005);
let arr4 = makeArr(40000);

let array = [1, 3, 6, 4, 1, 2];
let arr1 = [-1, -100, -3, 1, -35, 6, 7, 4, 4, 1, 2];
let arr2 = [1, 2, 3];

function solution(arr) {
  //helper function
  const swap = (i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  //sorts the array by swapping
  for (let i = 0; i < arr.length; i++) {
    while (
      0 < arr[i] &&
      arr[i] - 1 < arr.length && //takes care of end points
      arr[i] !== i + 1 && //element already in correct position
      arr[i] !== arr[arr[i] - 1] //element being repeated
    ) {
      swap(i, arr[i] - 1);
    }
  }
  console.log(arr);
  //main part
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) return i + 1;
  }
  return arr.length + 1;
}

// console.log(solution(array));
console.log(solution(arr1));
// console.log(solution(arr2));
// console.log(solution(arr3));
// console.log(solution(arr4));
