/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//BruteForce Solution: Time Complexity: O(n^2); Space Complexity: O(n)
var twoSum1 = function(nums, target) {
  let results = [];
  for (let i = 0; i < nums.length - 1; i++) {
    console.log(nums[i]);
      for (let j = i + 1; j < nums.length; j++) {
        console.log(nums[j])
          if (nums[i] + nums[j] === target) {
            results.push(i, j);
            return results;
          } 
      }
  } 
  return `No pair of numbers add up to ${target}`;
};

//A better solution usi hash a hash table : time complexity: O(n); space complexity: O(n)
//helper function to create a hash table
const hash = (arr) => {
  console.log('hello')
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i;
  }
  return obj;
};

//main function 
const twoSum = (arr, target) => {
  let results = [];
  let obj = hash(arr);
  for (let i = 0; i < arr.length - 1; i++) {
    let complement = target - arr[i];
    if (obj[complement]) {
      results.push(i, obj[complement]);
      return results;
    }
  }
  return `None add up to ${target}`;
};

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 5));