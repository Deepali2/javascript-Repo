// const isPalindrome = (int) => {
//   return int === Number(int.toString().split('').reverse().join(''));
// }

console.log(isPalindrome(121));

//without converting the number into a string

function isPalindrome(num) {
 if (num < 0) return false;
 if (num < 10) return true;
 if (num % 10 === 0) return false;

 let rev = 0;
 while(rev < num) {
   rev *= 10;
   rev += num % 10;
   num = Math.trunc(num / 10);
   console.log(rev);
   console.log(num);
 }
 return rev === num || Math.trunc(rev/10) === num;
}