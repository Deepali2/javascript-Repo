//INPUT: NUMBER, ARRAY
//OUTPUT: NUMBER
/*pseudocode
make an empty object
make a pairsCounter = 0
loop over the array
if the element is not a key in the object
  make a key with that element
else 
  increment pairsCounter
  remove the key from the object
after looping finishes, return the pairsCounter
*/ 

function sockMerchant(n, ar) {
  let pairsCounter = 0;
  let obj = {};
  for (let ele of ar) {
      if (!obj[ele]) obj[ele] = true;
      else {
          pairsCounter++;
          delete obj[ele];
      }
  }
  return pairsCounter;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));