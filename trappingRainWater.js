/**
 * @param {number[]} height
 * @return {number}
 */

 //Brute Force
// var trap = function(heights) {
//   let ans = 0;
//   let leng = heights.length;
//   for (let i = 1; i < leng- 1 ; i++) {
//     let maxLeft = 0, maxRight = 0;
//     for (let j = i; j >= 0; j--) {
//       maxLeft = Math.max(maxLeft, heights[j]);
//     }
//     for (let j = i; j <= heights.length - 1; j++ ) {
//       maxRight = Math.max(maxRight, heights[j]);
//     }
//     ans += Math.min(maxLeft, maxRight) - heights[i];
//   }
//   return ans;
// };

//Dynamic Programming

const trap = function(heights) {
  if (heights === null) return 0;
  let ans = 0, lgth = heights.length;
  let leftMax = [], rightMax = [];
  leftMax[0] = heights[0];
  for (let i = 1; i < lgth; i++) {
    leftMax[i] = Math.max(heights[i], leftMax[i - 1]);
  }
  rightMax[lgth - 1] = heights[lgth - 1];
  for (let i = lgth - 2; i >= 0; i--) {
    rightMax[i] = Math.max(heights[i], rightMax[i + 1]);
  }
  for (let i = 1; i < lgth - 1; i++) {
    ans += Math.min(leftMax[i], rightMax[i]) - heights[i];
  }
  return ans;
};

let heights = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(heights));