function solution(arr) {
  let index = 0;
  let arrTemp = [];
  let arrCount = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      arrTemp.push(arr[i]);
      continue;
    }
    if (arrTemp.length <= 1) {
      arrTemp.push(arr[i]);
      if (i === arr.length - 1) {
        arrCount.push(arrTemp);
      }
      continue;
    }
    for (let j = 0; j < arrTemp.length; j++) {
      if (arr[i] <= arr[j]) {
        arrTemp.push(arr[i]);
        break;
      }
      arrCount.push(arrTemp);
      arrTemp = [];
      arrTemp.push(arr[i]);
    }
  }
  return arrCount.length;
}

console.log(solution([2, 4, 1, 0, 6, 5, 9, 7]));
