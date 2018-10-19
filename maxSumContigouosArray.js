//Return the largest sum of any contiguus sub-array of a list. Can assume array is non empty


const maxSumContigouosArray = (arr) => {
  //initialize sum to zero
  let sum = 0;  
  //iterate over the array
  for (let i = 0; i < arr.length - 1; i++) {
    //make a slice of the array from i
    let arrSlice = arr.slice(i);    
    let length = arrSlice.length;
    while (length > 0) {
      let arrSliceSum = arrSlice.reduce((a, b) => a + b);
      if (arrSliceSum > sum) sum = arrSliceSum;
      arrSlice = arrSlice.slice(0, length - 1); 
      length = arrSlice.length;   
    }
  }
  return sum;
};

let array = [5, -7, 8, 2];
console.log(maxSumContigouosArray(array));
