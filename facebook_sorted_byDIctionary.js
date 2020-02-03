// Question
// Write a function that returns whether a list of strings is sorted given a specific alphabet.
// A list of N words and the K-sized alphabet are given.

// input:  words =    ["b", "bat", "bab"]
//         alphabet = ['c', 'b', 'd', 'a', 't']
// output: true

//input: 2 arrays
//output: boolean

//helper function to compare two indexes
const compare = (str1, str2) => {
  let index = 0;
  while (str1[index] && str2[index]) {
    let pointer1 = str1[index];
    let pointer2 = str2[index];
    if (Number(pointer1) > Number(pointer2)) return false;
    index++;
  }
  if (str1[index] && !str2[index]) return false;
  return true;
}

//helper function to create indexes for a word
const indexes = (str, alpha) => {
  let strIndexes = '';
  for (let j = 0; j < str.length; j++) {
    strIndexes += alpha.indexOf(str[j]);
  }
  return strIndexes;
}

const alpha = ['c', 'b', 'd', 'a', 't'];

// main function
const check = (words, alpha) => {
  for (let i = 1; i < words.length; i++) {
    if (!compare(indexes(words[i - 1], alpha), indexes(words[i], alpha))) return false;
  }
  return true;
}

console.log(check(["ba", "bab", "babdat"], ['c', 'b', 'd', 'a', 't']));



