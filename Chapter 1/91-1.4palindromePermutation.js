//given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or a phrase that is the same forwards and backwards. 
//A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.


//helper function to make a hash table
const hash = (string) => {
  let hashTable = {};
  for (let i = 0; i < string.length; i++) {
    if (hashTable[string[i]]) {
      hashTable[string[i]]++;
    } else {
      hashTable[string[i]] = 1;
    }
  }
  return hashTable;
}

//main function
const palindromePermut = (string) => {
  let str = string.replace(/\s/g, '');
  str = str.toUpperCase();
  let strHash = hash(str);
  //if string length is even then for the string to be a palidrome each character must have even number of occurences
  if (str.length %2 === 0) {
    for (key in strHash) {
      if (strHash[key] %2 !== 0) return false;
    }
  //if string length is odd, then for the string to be a palindrome there must be only one character that appears odd number of times
  } else {
    let odd = 0;
    for (key in strHash) {
      if (strHash[key] %2 === 0) continue;
      else odd++;
    }
    console.log(odd)
    if (odd !== 1) return false;
  }
  return true;
}

console.log(palindromePermut('Tact Coa'))