//helper function to make an object for each bulb
function bulbObj(val) {
  let bulb = {
      moment: val,
      on: 0,
      light: 0
  }
  return bulb;
}

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let bulbs = [];

  //loop over the input array, create an object for each bulb, push it into bulbs
  for (let ele of A) {
    let obj = bulbObj(ele);
      bulbs.push(obj);
  }

  //loop to see which bulbs will turn on.
  //keep track of moments when all bulbs that are on are lighted.
  //return the moments
  let momentsAllOn = 0;
  for (let i = 0; i < bulbs.length; i++) {
    let lightFactor = 1;
    for (let j = 0; j <= i; j++) {
      if (bulbs[j].light === 0) lightFactor = 0;
      if (bulbs[j].moment === i + 1) {
        bulbs[j].on = 1;
        if (lightFactor === 1) {
          bulbs[j].light = 1;
          momentsAllOn++;
          for (k = j; k < bulbs.length; k++) {
            if (bulbs[k].on === 1) bulbs[k].light = 1;
          }
        }
      }
    }
  }
  return momentsAllOn;
  
}

console.log(solution([2, 1, 3, 5, 4]));