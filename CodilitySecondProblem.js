function solution(U, L, arr) {
  let upperArr = [];
  let lowerArr = [];
  console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      upperArr[i] = 1;
      lowerArr[i] = 1;
    } else if (arr[i] === 0) {
      upperArr[i] = 0;
      lowerArr[i] = 0;
    } else {
      upperArr[i] = null;
      lowerArr[i] = null;
    }
  }

  let upperSum = upperArr.reduce((acc, current) => acc + current);
  let lowerSum = lowerArr.reduce((acc, current) => acc + current);

  for (let i = 0; i < upperArr.length; i++) {
    if (upperArr[i] !== 0 && upperArr[i] !== 1) {
      if (upperSum < U) {
        upperArr[i] = 1;
        upperSum++;
        lowerArr[i] = 0;
      } else {
        upperArr[i] = 0;
        lowerArr[i] = 1;
        lowerSum++;
      }
    } else continue;
  }

  if (lowerSum !== L) return "IMPOSSIBLE";
  else {
    upperStr = upperArr.join("");
    lowerStr = lowerArr.join("");
    return `${upperStr},${lowerStr}`;
  }
}

console.log(solution(3, 2, [2, 1, 1, 0, 1])); //'110001,10100'
console.log(solution(3, 3, [0, 0, 1, 1, 1, 2])); //IMPOSSIBLE
console.log(solution(2, 2, [2, 0, 2, 0])); //'1010,1010'
