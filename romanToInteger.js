/**
 * @param {string} s
 * @return {number}
 */
/*
input: string
output: number
*/

const romanToInt = str => {
  let num = 0;
  const given = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1
  };
  for (let i = str.length - 1; i >= 0; i--) {
    let current = given[str[i]];
    let previous = given[str[i - 1]];
    if (str[i - 1] && current > previous) {
      num = num + (current - previous);
      i--;
    } else {
      num = num + current;
    }
  }
  return num;
};

console.log(romanToInt("LVIII"));
