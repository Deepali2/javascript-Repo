/**
 * @param {string} s
 * @return {number}
 */
/*
input: string
output: number

*/
const romanToInt = function(s) {
  let i = 0;
  let num = 0;
  while (i < s.length) {
    if (s[i] === "M") {
      num += 1000;
      i++;
    }

    if (s[i] === "D") {
      num += 500;
      i++;
    }

    if (s[i] === "C") {
      if (s[i + 1] === "M") {
        num += 900;
        i = i + 2;
      } else if (s[i + 1] === "D") {
        num += 400;
        i = i + 2;
      } else {
        num += 100;
        i++;
      }
    }

    if (s[i] === "L") {
      num += 50;
      i++;
    }

    if (s[i] === "X") {
      if (s[i + 1] === "C") {
        num += 90;
        i = i + 2;
      } else if (s[i + 1] === "L") {
        num += 40;
        i = i + 2;
      } else {
        num += 10;
        i++;
      }
    }

    if (s[i] === "X") {
      num += 10;
      i++;
    }

    if (s[i] === "V") {
      num += 5;
      i++;
    }

    if (s[i] === "I") {
      if (s[i + 1] === "X") {
        num += 9;
        i = i + 2;
      } else if (s[i + 1] === "V") {
        num += 4;
        i = i + 2;
      } else {
        num += 1;
        i++;
      }
    }
  }
  return num;
};

console.log(romanToInt("DCXXI"));
