//brute force solution
// const maxArea = heights => {
//   let maximumArea = 0;
//   for (let i = 0; i < heights.length - 1; i++) {
//     for (let j = i + 1; j < heights.length; j++) {
//     maximumArea = Math.max(maximumArea, Math.min(heights[i], heights[j])*(j - i));
//     }
//   }
//   return maximumArea;
// };

//two pointer solution
//time complexity: O(n); space complexity: O(1)
const maxArea = heights => {
  let maximumArea = 0, left = 0; right = heights.length - 1;
  while(right - left > 0) {
    maximumArea = Math.max(maximumArea, Math.min(heights[left], heights[right]) * (right - left));
    if (heights[left] < heights[right]) left++;
    else right--;
  }
  return maximumArea;
} 
let heights = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(heights));