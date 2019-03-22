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