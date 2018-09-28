//write an algorithm such that if an element in an M X N matrix is 0, then its entire row and column are set to 0.

//helper function to change row elements to zero
const rowToZero = (matrix, row, column) => {
  for (let c = 0; c < matrix[0].length; c++) { 
    matrix[row][c] = 0;
  }
  return matrix;
};

//helper function to chnage column elements to zero
const columnToZero = (matrix, row, column) => {
  for (let r = 0; r < matrix.length; r++) {
    matrix[r][column] = 0;
  }
  return matrix;
};

//main function
const zeroMatrix = (matrix) => {
  //make a copy of the matrix
  let matrixCopy = matrix.slice();
  let rowsNum = matrix.length;
  let store = [];
  for (let i = 0; i < rowsNum; i++) {
    let columnsNum = matrix[i].length;
    for (let j = 0; j < columnsNum; j++) {
      if (matrix[i][j] === 0) {
        store.push([i, j]);
      }
    }
  }
  for (let m = 0; m < store.length; m++) {
    rowToZero(matrixCopy, store[m][0], store[m][1]);
    columnToZero(matrixCopy, store[m][0], store[m][1]);
  }

  return matrixCopy;
};


//testing
let testMatrix = [
  [1, 2, 3, 4],
  [1, 0, 2, 3],
  [2, 6, 1, 8],
  [1, 9, 8, 7],
  [2, 3, 3, 5], 
  [3, 3, 3, 3],
  [2, 1, 2, 9]
];



  console.log('before:');
  console.log(testMatrix[0]);
  console.log(testMatrix[1]);
  console.log(testMatrix[2]);
  console.log(testMatrix[3]);
  console.log(testMatrix[4]);
  console.log(testMatrix[5]);
  console.log(testMatrix[6]);

  zeroMatrix(testMatrix);

  console.log('after:');
  console.log(testMatrix[0]);
  console.log(testMatrix[1]);
  console.log(testMatrix[2]);
  console.log(testMatrix[3]);
  console.log(testMatrix[4]);
  console.log(testMatrix[5]);
  console.log(testMatrix[6]);

