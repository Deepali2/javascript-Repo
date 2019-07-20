/*

Coding Problem
Can you determine if a phone number is “easy to dial” based on each digit's physical location on 
a standard phone keypad?
Assume you have a standard phone keypad that looks like this:


1 2 3
4 5 6
7 8 9
   0


For the purposes of this problem, the digit “1” is considered adjacent to “1”, “2”, “5” and “4”. 
The digit “5” is considered adjacent to every digit except “0”.
We consider a phone number “easy to dial” if every digit is physically adjacent to the next 
digit on the keypad. 
The phone numbers “254-7096” and “554-7521” are easy to dial. 
The phone numbers “280-6547” and “355-8123” are not.
Write a function that takes as input a phone number and returns whether or not it is easy to dial.
*/

/*
input: string
output: boolean
*/

//helper function to create the dial which is an array of arrays
const dial = (columns, range) => {
  let dial = [];
  let count = 1;

  while (count <= 9) {
    let row = [];
    for (i = 0; i < columns; i++) {
      row.push("" + count);
      count++;
      if (row.length === 3) {
        dial.push(row);
        row = [];
      }
    }
  }
  dial.push([, "" + 0]);
  return dial;
};

//helper function to create the object with adjacent elements for each element
const makeObj = (columns, range) => {
  let dial1 = dial(columns, range);
  let obj = {};
  for (let r = 0; r < dial1.length; r++) {
    for (let c = 0; c < dial1[r].length; c++) {
      obj[dial1[r][c]] = [dial1[r][c]];

      if (dial1[r - 1] && dial1[r - 1][c])
        obj[dial1[r][c]].push(dial1[r - 1][c]);

      if (dial1[r] && dial1[r][c - 1]) obj[dial1[r][c]].push(dial1[r][c - 1]);

      if (dial1[r + 1] && dial1[r + 1][c])
        obj[dial1[r][c]].push(dial1[r + 1][c]);

      if (dial1[r] && dial1[r][c + 1]) obj[dial1[r][c]].push(dial1[r][c + 1]);

      if (dial1[r - 1] && dial1[r - 1][c - 1])
        obj[dial1[r][c]].push(dial1[r - 1][c - 1]);

      if (dial1[r + 1] && dial1[r + 1][c + 1])
        obj[dial1[r][c]].push(dial1[r + 1][c + 1]);

      if (dial1[r + 1] && dial1[r + 1][c - 1])
        obj[dial1[r][c]].push(dial1[r + 1][c - 1]);

      if (dial1[r - 1] && dial1[r - 1][c + 1])
        obj[dial1[r][c]].push(dial1[r - 1][c + 1]);
    }
  }
  for (let key in obj) {
    if (key === undefined) delete key;
  }
  return obj;
};

//main function
const easyToUse = str => {
  let obj = makeObj(3, 9);
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i + 1] === "-") {
      str = str.slice(0, i + 1) + str.slice(i + 2);
    }
    if (!obj[str[i]].includes(str[i + 1])) return false;
  }
  return true;
};

let number1 = "254-7096"; //true
let number2 = "554-7521"; //true
let number3 = "280-6547"; //false
let number4 = "355-8123"; //false
console.log(easyToUse(number1));
console.log(easyToUse(number2));
console.log(easyToUse(number3));
console.log(easyToUse(number4));
