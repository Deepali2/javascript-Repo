const array = [[0, 1, 0, 3], [2, 4, 5, 7], [1, 3, 5, 2], [5, 1, 3, 6]];
// const array = [];

//helper function to find the least number of an array
const least = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let ele = arr[i];
    if (ele < min) min = ele;
  }
  return min;
}

const calculated = (current, test) => {
  let output = [];
  for (let i = 0; i < current.length; i++) {
    let left = i - 1;
    let down = i;
    let right = i + 1;
    let min, check;

    min = current[i] + test[down];

    if (test[left] !== undefined) {
      check = current[i] + test[left];
      if (check < min) min = check;
    };
    if (test[right] !== undefined) {
      check = current[i] + test[right];
      if (check < min) min = check;
    };
    output.push(min);
  }
  return output;
}

const leastCostPath = array => {
  if (array.length <= 1) return array;
  let currentRow = array[0];
  let testRow = array[1];

  let minRow = least(array[0]);
  let outputRow = calculated(currentRow, testRow);
  for (let i = 2; i < array.length; i++) {
    currentRow = outputRow;
    testRow = array[i];
    outputRow = calculated(currentRow, testRow);
  }
  return least(outputRow);
}

console.log(leastCostPath(array));