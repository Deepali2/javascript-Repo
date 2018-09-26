//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

let string = 'this werd';
const stringHasUniqueCharac = (string) => {
  //remove spaces from string
  let string1 = string.replace(/\s/g, '');  
  //make a hash table
   //if value of a key is greater than 1, return false
  //otherwise return true
  let hash = {};
  for (let i = 0; i < string1.length; i++) {    
    if (hash[string1[i]]) {
      return false
    } else{
      hash[string1[i]] = 1;
    }    
  }
  return true;
};

console.log(stringHasUniqueCharac(string));