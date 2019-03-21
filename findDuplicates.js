function findDuplicates(arr1, arr2) {
  // your code goes here
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
}
//M is length of longer array; N is length of shorter array
// time complexity: O(M + N)
// space complexity: O(N)
//if M >>> N, then do binary search on the longer length matrix to get time complexity of O(N*logM)
console.log(findDuplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20]));