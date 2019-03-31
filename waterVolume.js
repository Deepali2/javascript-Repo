/*
Given list of mountain heights, find volume of water trapped during rain
*/
//expected output is 5

//pseudocode:
//make array recording max number seen so far going from left to right [2, 3, 3, 4, 4, 4, 4, 4]
//make array recording max number seen so far going from right to left and recording right to left also[4, 4, 4, 4, 3, 3, 3, 3, 2]
//make array recording the min of the above 2 arrays [2, 3, 3, 4, 3, 3, 3, 2]
//make array recording absolute difference between original and minimum array [0, 0, 2, 0, 1, 2, 0, 0]
//add up the contents of the last array

//main function
const waterVolume = (arr) => {
  let maxL2R = [];
  let maxR2Reversed = [];
  let min = [];
  let diff = [];
  // , maxR2Reversed, min, diff

  //populating maxL2R
  let maxEle = null;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxEle) {
      maxL2R.push(arr[i]);
      maxEle = arr[i];
    }
    else maxL2R.push(maxEle);
  }
  maxEle = null;
  
  //populating maxR2Reversed
  for (let i = arr.length -1; i >= 0; i--) {
    if (arr[i] > maxEle) {
      maxR2Reversed.unshift(arr[i]);
      maxEle = arr[i];
    }
    else maxR2Reversed.unshift(maxEle);
  }

  //populating min
  for (i = 0; i < arr.length; i++) {
    min.push(Math.min(maxL2R[i], maxR2Reversed[i]));
  }
  
  //populating d  iff 
  for (i = 0; i < arr.length; i++) {
    diff.push(Math.abs(arr[i] - min[i]));
  }
  
  //returning the sum of the diff array elements
  return diff.reduce((a, b) => a + b);
};
let arr = [2, 3, 1, 4, 2, 1, 3, 2];
console.log(waterVolume(arr));