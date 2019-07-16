const swap = (a, b, array) => {
  [array[a], array[b]] = [array[b], array[a]];
  return array;
};
let arr = [6, -8, 5, 0, 1, 3, 2];

const sorted = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) swap(j - 1, j, arr);
    }
  }
  return arr;
};
console.log(sorted(arr));
