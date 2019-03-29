











/*
input: number
output: array of arrays
constraints: 1st and last element of each row is 1;
edges: first and second rows involve no addition

picture: for num = 6
[[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1]]
make pascals as [[1], [1, 1]]
number of elements in each row equals the row number
start with row = 2 and end at row as number length - 1
make current row as [1]
push elements into pascals
*/

const pascalTri = (num) => {
    if (num <= 0) return [[]];
    if (num === 1) return [[1]];

  let pascals = [[1], [1, 1]];
  for (let r = 2; r < num; r++) {
      let currentRow = [1];
      let prevRow = pascals[r - 1];
      for (let i = 0; i < prevRow.length - 1; i++) {
          currentRow.push(prevRow[i] + prevRow[i + 1]);
      }
      currentRow.push(1);
      console.log(currentRow);
      pascals.push(currentRow);
  }
  return pascals;
};

console.log(pascalTri(3));


