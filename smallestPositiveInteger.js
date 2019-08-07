/*
that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
*/
function solution(A) {
  if (A.length === 0) return answer;
  let arr = A.sort((a, b) => a - b);
  if (arr[0] <= 0) {
    let answer = 1;
    let flag = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= 0) continue;
      if (arr[i] === 1 && !flag) {
        flag = true;
        answer++;
        continue;
      } else if (arr[i] === 1) continue;
      else {
        if (flag) {
          if (arr[i] === arr[i - 1]) continue;
          if (arr[i] === arr[i - 1] + 1) {
            answer++;
            continue;
          } else return answer;
        }
      }
      return answer;
    }
    return answer;
  } else {
    if (arr[0] !== 1) return 1;
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i + 1]) return arr[i] + 1;
      if (arr[i + 1] === arr[i] || arr[i + 1] === arr[i] + 1) continue;
      else return arr[i] + 1;
    }
  }
}
console.log(solution([1, 3, 6, 4, 1, 2]));
console.log(solution([1, 3, 6, 4, 1, 2, 2, 2, 6]));
// console.log(solution([-1, 0, 2, 1]));
console.log(solution([-10000, 3, 1, 0, -8, 1, 1, 2, 3, 0, 4, 4, 4, 6]));
