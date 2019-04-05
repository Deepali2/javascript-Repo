//Bulbs are connected in series with the first bulb connected to power outlet. Think of an array as representing the moments in time when a bulb is switched on.
//bulb will light up only if all the previous bulbs are also on. Determine the moments in time when all bulbs that have been switched on will light up together.
//Example: [2, 1, 3, 5, 4] should return 3 corresponding to moments 2, 3, 5

function solution(A) {
  let momentsAllOn = 0;
  let maxSoFar = A[0];
  for (let i = 0; i < A.length; i++) {
    console.log(maxSoFar)
    if (A[i] >= maxSoFar) {
      momentsAllOn++;
      maxSoFar = A[i];
    }
  }
  return momentsAllOn;
}

console.log(solution([2, 1, 3, 5, 4]));