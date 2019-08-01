/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number}n
 * @return {string[]}
 */

const generateParenthesis = n => {
  let results = [];
  const recursive = (left = 0, right = 0, str = "") => {
    if (left === n && right === n && str.length > 0) {
      results.push(str);
      return;
    }
    if (left < n) recursive(left + 1, right, str + "(");
    if (right < left) recursive(left, right + 1, str + ")");
  };
  recursive();
  return results;
};

console.log(generateParenthesis(3));
console.log(generateParenthesis(4));
