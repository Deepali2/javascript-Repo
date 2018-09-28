//Assume you hve a method isSubstring which checks if one word is a substring of another. Given two srings s1 and s2, write code 
//to check if s2 is a rotation of s1 using only one call to isSubstring(e.g. 'waterbottle is a rotation of 'erbottlewat')

const isStringRotation = (s1, s2) => {
  let s2Concat = s2.concat(s2);
  return s2Concat.includes(s1);
};

console.log(isStringRotation('waterbottle', 'erbottlewat'));