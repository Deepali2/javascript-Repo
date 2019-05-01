/**
 * @param {string} s
 * @return {string}
 */

 //time complexity: O(n^2)?   space Complexity: O(1)
const longestPalindrome = (s) => {
  let res = '';
  function isPalindrome (l, r) {
    while (l >= 0 && r < s.length) {
      if (s[l] === s[r]) {
        l--;
        r++;
      } else break;
    }
    l++;
    r--;
    if (r - l + 1 > res.length) res = s.substring(l, r + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && s[i] === s[i + 1]) isPalindrome(i, i + 1);
    isPalindrome(i, i);
  }
  return res;
};

console.log(longestPalindrome('a'));

