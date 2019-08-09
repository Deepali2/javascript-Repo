let string = "iHaveMessedItAllUp";

//concise code
const fixSentence = str => {
  let str1 = str.replace(/([A-Z])/g, " $1");
  let str2 = str1.replace(/[A-Z]/g, element => element.toLowerCase());
  let str3 = str2.replace(/^[a-z]/, ele => ele.toUpperCase());
  let str4 = /\.$/.test(str3) ? str3 : str3 + ".";
  return str4;
};

console.log(fixSentence(string));

//Broken down code
let str = "iForgotToPutSpacesInMyDoc";

const addSpaces = str => {
  return str.replace(/([A-Z])/g, " $1");
};
let str1 = addSpaces(str);

const replaceCapitalLetters = str => {
  let re = /[A-Z]/g;
  return str.replace(re, ele => ele.toLowerCase());
};

console.log(replaceCapitalLetters(str1));

//if the first letter of a sentence is lower case then make it upper case

const capitalizeBeginning = str => {
  let re = /^[a-z]/;
  return str.replace(re, element => element.toUpperCase());
};
let str3 = capitalizeBeginning(replaceCapitalLetters(str1));

//add a period at the end of the sentence

const addPeriod = str => {
  let re = /\.$/;
  return re.test(str) ? str : str + ".";
};

console.log(addPeriod(str3));
