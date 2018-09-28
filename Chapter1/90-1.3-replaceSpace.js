//Write a method to replace all spaces in a string with %20. You may assume that the string has sufficient space at the end to hold the additional characters
//and that you are given the 'true' length of the string. 

const replaceSpace = (string) => {
  //make a copy of the string
  let strCopy = string.slice();
  //initialize a count variable
  let count = 0;
  //loop over the string
  for (let i = 0; i < string.length; i++) {
    let index = i + count * 2;
    if (string[i] === ' ') {
      strCopy = strCopy.substring(0, index) + '%20' + string.substring(i + 1);
      count++;
    }
  }
  return strCopy;
};

console.log(replaceSpace('to do mo lok   lovely '));

