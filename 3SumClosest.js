/*
Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target. 
Return the sum of the three integers. You may assume that each input would have exactly one solution.

Example:

Given array nums = [-1, 2, 1, -4], and target = 1.

The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  let num,
    apart = Infinity;
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1, k = nums.length - 1; j < k; ) {
      let sum = nums[i] + nums[j] + nums[k];
      let diff = sum - target;
      if (diff === 0) return sum;
      if (Math.abs(diff) < Math.abs(apart)) {
        apart = diff;
        num = sum;
      }
      if (diff < 0) j++;
      else k--;
      while (j > i + 1 && j < k && nums[j] == nums[j - 1]) j++;
      while (k < nums.length - 1 && j < k && nums[k] == nums[k + 1]) k--;
    }
  }
  return num;
};

console.log(threeSumClosest([-1, 2, 1, -4], 1));
console.log(
  threeSumClosest(
    [-10, 0, -2, 3, -8, 1, -10, 8, -8, 6, -7, 0, -7, 2, 2, -5, -8, 1, -4, 6],
    18
  )
);
console.log(threeSumClosest([1, 1, -1, -1, 3], -1));
