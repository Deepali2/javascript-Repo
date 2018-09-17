//code to swap minimum and maximum values in an integer array
const swapMinMax = (arr) => {
  let min = 0;
  let max = 0;
  let minIndex = 0;
  let maxIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
  }
  swap(minIndex, maxIndex, arr);
  return arr;
};

//helper function to swap the min and max values
const swap = (minIndex, maxIndex, arr) => {
  [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
  return arr;
};

let arr = [0, -2, 3, 200, -5, -10];
console.log(swapMinMax(arr));