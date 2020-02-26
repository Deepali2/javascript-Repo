
/*
input: array
output: number
*/

// const maxOnes = (arr) => {
//   let max = 0;
//   let count = 0;

//   for (let ele of arr) {
//     if (ele === 1) {
//       count++;
//       if (count > max) max = count;      
//     } else {
//       count = 0;
//     }
//   }

//   return max;
// }

// console.log(maxOnes([0,0,0,0]));



const s1 = '234234234299829748932';
const s2 = '23499999999999999999999999999';
console.log(s1)



/*
input: 2 string
output: a string
*/



const add = (s1, s2) => {
  let indexS1 = s1.length - 1;
  let indexS2 = s2.length - 1;

  let current = 0;
  let result = '';
  let carry = 0;
  console.log('hello');
  while (indexS1 >= 0 || indexS2 >= 0) {
    current = indexS1 >= 0 && indexS2 >= 0
      ? Number(s1[indexS1]) + Number(s2[indexS2]) + carry
      : indexS1 >= 0 ? Number(s1[indexS1]) + carry
        : Number(s2[indexS2]) + carry;

    if (current > 9) {
      current = current.toString();
      result = current[1] + result;
      carry = Number(current[0]);
    } else {
      result = current + result;
      carry = 0;
    }
    indexS1--;
    indexS2--;
  }
  return carry ? result = carry + result : result;
}

console.log(add(s1, s2));




