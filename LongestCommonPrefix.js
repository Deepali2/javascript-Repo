/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/
/*
input: array of strings
output: string
*/

const longestCommonPrefix = function(strs) {
  let result = "";
  if (!strs[0]) return result;
  let word0 = strs[0];
  for (let i = 0; i < word0.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (!strs[j][i] || word0[i] !== strs[j][i]) return result;
    }
    result += word0[i];
  }
  return result;
};

let arr1 = ["flower", "flow", "flight"];
let arr2 = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(arr1));
console.log(longestCommonPrefix(arr2));
console.log(longestCommonPrefix([]));
