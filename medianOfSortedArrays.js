/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

//helper function to merge the two sorted arrays
const merge2arrs = (arr1, arr2) => {
  let pointer1Index = 0;
  let pointer2Index = 0;
  let sorted = [];
  
  if (arr1.length === 0 && arr2.length === 0) return sorted;
  else if (arr1.length === 0) return arr2;
  else if (arr2.length === 0) return arr1;

  while (pointer1Index < arr1.length && pointer2Index < arr2.length) {
    let arr1Ele = arr1[pointer1Index];
    let arr2Ele = arr2[pointer2Index];
    if (arr1Ele <= arr2Ele) {
      sorted.push(arr1Ele);
      pointer1Index++;
    } else {
      sorted.push(arr2Ele);
      pointer2Index++;
    }
  }
  if (pointer1Index === arr1.length && pointer2Index < arr2.length) {
    let remainingArr = arr2.slice(pointer2Index);
    sorted = sorted.concat(remainingArr);
  }
  else if (pointer2Index === arr2.length && pointer1Index < arr1.length) {
    let remainingArr = arr1.slice(pointer1Index);
    sorted = sorted.concat(remainingArr);
  }
  return sorted;
}

const findMedianSortedArrays = function(nums1, nums2) {
  let sortedArr = merge2arrs(nums1, nums2);
  console.log(sortedArr);
  let lgth = sortedArr.length;
  let median;
  if (lgth % 2 !== 0) median = sortedArr[Math.floor(lgth/2)];  // if there are an odd number of elements in the sorted array
  else {
    median = (sortedArr[lgth/2 - 1] + sortedArr[lgth/2]) / 2;
  }
  return median;
};


console.log(findMedianSortedArrays([1, 3], [2]));