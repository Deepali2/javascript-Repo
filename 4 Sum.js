/*
Given an array nums of n integers and an integer target, are there elements a, b, c, and d in 
nums such that a + b + c + d = target? Find all unique quadruplets in the array which 
gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
  nums = nums.sort((a, b) => a - b);
  let results = [];
  if (nums.length < 4) return results;

  for (let start = 0; start <= nums.length - 4; start++) {
    if (start > 0 && nums[start] === nums[start - 1]) continue;
    for (let i = start + 1; i <= nums.length - 3; i++) {
      if (i > start + 1 && nums[i] === nums[i - 1]) continue;
      for (let j = i + 1, k = nums.length - 1; j < k; ) {
        let sum = nums[start] + nums[i] + nums[j] + nums[k];
        if (sum === target) {
          results.push([nums[start], nums[i], nums[j], nums[k]]);
          while (j < k && nums[j] === nums[j + 1]) j++;
          while (j < k && nums[k] === nums[k - 1]) k--;
          j++;
          k--;
        } else if (sum < target) j++;
        else k--;
      }
    }
  }
  return results;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
console.log(fourSum([0, 0, 0, 0], 0));
console.log(fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0));
