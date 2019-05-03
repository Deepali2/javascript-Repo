/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let MAX = 2**31 - 1;
  let MIN = 2**31 * -1;
  let negative = false;
  let number = false;
  let sign = false;
  let string = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (number === true && str[i + 1].match(/[0-9]/g)) return 0;
      continue;
    }
    if (sign === false && str[i] === '+') {
      sign = true;
      continue;
    }
    if (sign === false && str[i] === '-') {
      sign = true;
      negative = true;
      continue;
    }
    if (str[i].match(/\D/g) ) {
      if (number === false) return 0;
      else {
        let num = parseInt(string);
        if (negative === true) { 
          num = num * -1; 
          if (num <= MIN) return MIN;        
        }
        if (num >= MAX) return MAX;
        return num;
      }
    }
    if (str[i].match(/[0-9]/g)) {
      number = true;
      string += str[i];
    }      
  }
  if (number === true) {
    let num = parseInt(string);      
      if (negative === true) { 
        num = num * -1; 
        if (num <= MIN) return MIN;        
      }
      if (num >= MAX) return MAX;
      return num;
  }
  return 0;
};

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