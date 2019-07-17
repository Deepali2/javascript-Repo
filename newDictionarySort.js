//Given an Alphabet array and a words array. Sort the words array based on the new alphabet.

//input: two arrays
//output: array

/*
Logic:
helper function to check if two elements are sorted:
  input are the two words
  output is boolean
  loop over the alphabet array
    if word1[0] does not matches and word2[0] matches return false
    else return true

main function:
  loop over the words array
    compare the adjacent elements using the helper function. If they are sorted then the array is sorted
*/

const words1 = ["ac", "bc", "aa", "cats", "cat"];
const words2 = ["bb", "bca", "cbc", "ccab", "ca", "accccbbaa"];
const Alphabet = ["b", "c", "a"];

//helper swap function
const swap = (a, b, array) => {
  [array[a], array[b]] = [array[b], array[a]];
  return array;
};
let arr = [0, 1, 2, 3, 4, 5];
console.log(swap(arr[0], arr[5], arr));

//helper function to check if two words are sorted;
const sorted = (word1, word2, Alphabet) => {
  let word1Length = word1.length;
  let word2Length = word2.length;
  let lgth = word1Length > word2Length ? word1Length : word2Length;

  for (let i = 0; i < lgth; i++) {
    let char1 = Alphabet.indexOf(word1[i]);
    let char2 = Alphabet.indexOf(word2[i]);
    if (char1 < char2) return true;
    if (char1 > char2) return false;
  }
  if (word1Length > word2Length) return false;
  return true;
};

//main function
const isSorted = (words, Alphabet) => {
  console.log(words.length);
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 1; j < words.length; j++) {
      if (!sorted(words[j - 1], words[j], Alphabet)) swap(j - 1, j, words);
    }
  }

  return words;
};
console.log(isSorted(words1, Alphabet));
console.log(isSorted(words2, Alphabet));
