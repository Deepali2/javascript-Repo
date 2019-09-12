/*
Add two numbers given as string, return output as string 

Do the same as above but subtraction 
*/

//input: two strings
//output: string
const add = (str1, str2) => {
  let num1 = parseInt(str1);
  let num2 = parseInt(str2);
  return String(num1 + num2);
};

const subtract = (str1, str2) => {
  let num1 = parseInt(str1);
  let num2 = parseInt(str2);
  return String(num1 - num2);
};

console.log(add("123", "-50"));
console.log(subtract("123", "-50"));
console.log(typeof subtract("123", "50"));
