//given two strings, write a method to decide if one is a permutation of the other

let string1 = 'chec king';
let string2 = 'c hin ecg';
 
//helper function to create a hashtable from a string
const hashTable = (string) => {
  let hash = {};
  for (let i = 0; i < string.length; i++) {
    if (hash[string[i]]) {
      hash[string[i]]++;
    } else {
      hash[string[i]] = 1;
    }
  }
  return hash;
}

//main function
const permutationOfOther = (string1, string2) => {
  //remove spaces from both strings
  str1 = string1.replace(/\s/g, '');
  str2 = string2.replace(/\s/g, '');
  //if strings are of different lengths then return false
  if (str1.length !== str2.length) return false;
  //make a hash table for both the strings
  let str1Hash = hashTable(str1);
  let str2Hash = hashTable(str2);
  //check if the hashtables are equal  
  for (key in str1Hash) {
    if (!str2Hash[key] || str1Hash[key] !== str2Hash[key]) return false; 
    else { 
      delete str1Hash[key];
      delete str2Hash[key];
    }  
  }
  if (!str2Hash === {}) return false;
  return true;
};



console.log(permutationOfOther(string1, string2));