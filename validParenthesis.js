/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/
/**
 * @param {string} s
 * @return {boolean}
 */
//if the string could contain "'" or '""
// const isValid = str => {
//   if (str.length === 0) return true;
//   const mapping = {
//     '"': '"',
//     "'": "'",
//     "}": "{",
//     ")": "(",
//     "]": "["
//   };
//   let order = [];
//   for (let i = 0; i < str.length; i++) {
//     let ele = str[i];
//     if (mapping[ele]) {
//       if (order.length === 0 && (ele === '"' || ele === "'")) order.push(ele);
//       else if (order.length === 0) return false;
//       else if (order[order.length - 1] === mapping[ele]) order.pop();
//       else return false;
//     } else order.push(ele);
//     if (i === str.length - 1) {
//       if (order.length === 0) return true;
//       else return false;
//     }
//   }
// };

const isValid = str => {
  let mapping = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let ele = str[i];
    if (ele === "(" || ele === "[" || ele === "{") stack.push(ele);
    else if (mapping[ele] === stack[stack.length - 1]) stack.pop();
    else return false;
  }
  if (stack.length === 0) return true;
  else return false;
};

console.log(isValid("(])"));
console.log(isValid(""));
console.log(isValid("([]{})"));
