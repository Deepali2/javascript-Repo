/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.
*/

const letterCombinations = function(digits) {
  if (digits.length === 0) return [];
  const obj = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  };
  return digits
    .split("")
    .map(digit => [].concat(obj[digit].split("")))
    .reduce((combi, item) => {
      let len = combi.length;
      combi.forEach(combination => {
        item.forEach(letter => combi.push(combination + letter));
      });
      return combi.slice(len);
    });
};

console.log(letterCombinations("234"));
