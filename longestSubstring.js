/**
 * @param {string} s
 * @return {number}
 */

//works but do not understand it
// var lengthOfLongestSubstring = function(s) {
//   let start = 0, maxLength = 0; 
//   let map = new Map();

//   for (let i = 0; i < s.length; i++) {
//     if (map.get(s[i]) >= start) start = map.get(s[i]) + 1;
//     map.set(s[i], i);

//     if(i - start + 1 > maxLength) maxLength = i - start + 1;
//     console.log(maxLength)
//   }
//   return maxLength;
// }

// console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("pw"));

//another way
function lengthOfLongestSubstring(str) {
  let maxLength = 0;
  let results = [];
  for (let element of str) {
    if (results.includes(element)) {
      if (results.length > maxLength) maxLength = results.length;
      results.push(element);
      let elementIndex = results.indexOf(element);
      results = results.slice(elementIndex + 1);
    } else {
      results.push(element);         
    }
    if (results.length > maxLength) maxLength = results.length;   
  }
  return maxLength;
}