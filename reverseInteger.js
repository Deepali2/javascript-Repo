  /**
 * @param {number} x
 * @return {number}
 */ 
// var reverse = function(x) {
//   let str = String(x);
//   let max = Math.pow(2, 31) - 1;
//   console.log(max);
//   let reversed = parseInt(str.split('').reverse().join(''));
//   if (reversed > max) return 0;  
//   if (x < 0) return (0 - reversed);
//   return reversed;
// };

//faster way checking for overflow

// var reverse = (x) => {
//   let rev = 0;
//   let MAX = Math.pow(2, 31) - 1;
//   let MIN = 0 - MAX;
//   let temp = x;
//   if (x < 0) temp = -x;
//   while(Math.floor(temp) > 0) {
//     let pop = temp % 10;
//     temp = temp/10 - pop/10;
//     if (temp < 1 && temp > 0) temp = 1; // for some reason 1.4 - 0.4 and 1.9 - 0.9 give 0.9999....
//     if (rev > MAX/10 || (rev === MAX/10 && pop === 7)) return 0;
//     if (rev < MIN || (rev === MIN/10 && pop === 7)) return 0;
//     rev = rev * 10 + pop;
//   }
//   if (x < 0) return -rev;
//   else return rev;
// }


//easy solution that is fast and works too


var reverse = function(x) {
  let MAX = 2**31 - 1;
  let rev = Math.abs(x).toString().split('').reverse().join('');
  if (rev > MAX) return 0;
  let sign = x < 0? -1 : 1;
  return Number(rev) * sign;
}

console.log(reverse(-19));