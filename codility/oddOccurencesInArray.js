function solution(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let ele = array[i];
    obj[ele] ? delete obj[ele] : obj[ele] = true;
  }
  return parseInt(Object.keys(obj).join());
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));