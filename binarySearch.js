//not used in the problem
const binarySearch = (num, arr, start = 0, end = arr.length - 1) => {
  let mid = Math.floor((start + end)/2);
  //base cases
  if (arr[start] === num) return start;
  if (arr[end] === num) return end;
  if (arr[mid] === num) return mid;
  //recursive 
  if (num < arr[mid]) return binarySearch(num, arr, start, end = mid -1);
  if (num > arr[mid]) return binarySearch(num, arr, start = mid + 1, end);
  return -1;
};

console.log(binarySearch(80, [15, 25, 30, 40, 50, 60, 70, 80 ]));
console.log(binarySearch(9, []));