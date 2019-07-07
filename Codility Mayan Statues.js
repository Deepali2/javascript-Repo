//codility problm

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//helper function to determine the quadrant the point is ine
// const quadrant = arr => {
//   if (arr[0] > 0 && arr[1] > 0) return 1;
//   if (arr[0] < 0 && arr[1] > 0) return 2;
//   if (arr[0] < 0 && arr[1] < 0) return 3;
//   if (arr[0] > 0 && arr[1] < 0) return 4;
// };

// function solution(arr) {
//   let obj = {};
//   for (let point of arr) {
//     let slope = point[1] / point[0];
//     let quad = quadrant(point);
//     if (!obj[quad]) obj[quad] = [slope];
//     else if (!obj[quad].includes(slope)) obj[quad].push(slope);
//     else continue;
//   }
//   let count = 0;
//   for (let key in obj) {
//     for (ele of key) count++;
//   }
//   return count;
// }

// console.log(solution([[-1, -2], [1, 2], [2, 4], [-3, 2], [2, -2]]));

const quadrant = arr => {
  if (arr[0] > 0 && arr[1] > 0) return 1;
  if (arr[0] < 0 && arr[1] > 0) return 2;
  if (arr[0] < 0 && arr[1] < 0) return 3;
  if (arr[0] > 0 && arr[1] < 0) return 4;
};

function solution(arr) {
  let obj = {};
  for (let point of arr) {
    point = point.split(",");
    point[0] = Number(point[0].substring(1));
    point[1] = Number(point[1].substring(0, point[1].length - 1));
    let slope = point[1] / point[0];
    let quad = quadrant(point);
    if (!obj[quad]) obj[quad] = [slope];
    else if (!obj[quad].includes(slope)) obj[quad].push(slope);
    else continue;
  }
  let count = 0;
  for (let key in obj) {
    for (ele of key) count++;
  }
  return count;
}

// console.log(solution([[-1, -2], [1, 2], [2, 4], [-3, 2], [2, -2]]));

console.log(solution(["(-1, -2)", "(1, 2)", "(2, 4)", "(-3, 2)", "(2, -2)"]));
