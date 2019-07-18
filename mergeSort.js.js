//MERGE SORT USES DIVIDE AND CONQUER.
//IN THIS METHOD WE KEEP DIVIDING THE ARRAY IN THE MIDDLE TILL WE REACH A SINGLE ELEMENT.
//THEN WE START MERGING TWO ARRAYS BACKWARDS SORTING AS WE GO.

//helper recursive function to merge two arrays while sorting them
const merge = (leftArr, rightArr) => {
  let resultArr = [],
    leftIndex = 0;
  rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] <= rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  return resultArr.concat(
    leftArr.slice(leftIndex).concat(rightArr.slice(rightIndex))
  );
};

//main function
const mergeSort = arr => {
  //base case
  if (arr.length <= 1) return arr;

  let middle = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);
  return merge(mergeSort(leftArr), mergeSort(rightArr)); //merge is the recursive function
};

console.log(mergeSort([10, -1, 2, 5, 0, 6, 4, -5, 3]));
