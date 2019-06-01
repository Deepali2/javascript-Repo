/**
 * @param {string} str
 * @return {number}
 */

var myAtoi = function(str) {
  let sign = "";
  let integralNumbers = '';
  let index = 0;
  
  // Skip through all the whitespaces
  while (str.charAt(index) === ' ') {
      index++;
  }
  
  // Check for optional +/- sign
  if (str.charAt(index) === '+' || str.charAt(index) === '-') {
      sign = str.charAt(index);
      index++;
  }
  
  // Check for consecutive integral numbers
  while (index < str.length) {
      const char = str.charAt(index);
      const regexp = /[0-9]/g;
      if (regexp.test(char)) {
          integralNumbers += char;
          index++;
      } else {
          break;
      }
  }
  
  // Convert string to number
  integralNumbers = sign === '-' ? -integralNumbers : integralNumbers;
  
  // Test for 32-bit boundaries
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = Math.pow(-2, 31);
  
  if (integralNumbers >= INT_MAX) {
      return INT_MAX;
  }
  
  if (integralNumbers <= INT_MIN) {
      return INT_MIN;
  }
  
  if (integralNumbers === '') return 0;
  return integralNumbers;
};



 //works but uses parseInt
// const myAtoi = (str) => {
//   let MAX = 2**31 - 1;
//   let MIN = 2**31 * -1;
//   return Math.max(Math.min(parseInt(str)||0, MAX), MIN)
// }

console.log(typeof(myAtoi("42")));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("3.14159"));
console.log(myAtoi("+-2"));
console.log(myAtoi("+1"));
console.log(myAtoi("-+1"));
console.log(myAtoi("  -0012a42"));
console.log(myAtoi("   +0 123"));
console.log(myAtoi("- 234"));
console.log(myAtoi("0-1"));
console.log(myAtoi("-827 "))
console.log(myAtoi("    -88827   5655  U"))