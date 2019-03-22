/*Matrix Spiral Copy
Given a 2D array (matrix) inputMatrix of integers, create a function spiralCopy that copies inputMatrix’s values into a 1D array in a spiral order, clockwise. Your function then should return that array. Analyze the time and space complexities of your solution.

Example:

input:  inputMatrix  = [ [1,    2,   3,  4,    5],
                         [6,    7,   8,  9,   10],
                         [11,  12,  13,  14,  15],
                         [16,  17,  18,  19,  20] ]

output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]
See the illustration below to understand better what a clockwise spiral order looks like.

alt Clockwise spiral order

Constraints:

[time limit] 5000ms

[input] array.array.integer inputMatrix

1 ≤ inputMatrix[0].length ≤ 100
1 ≤ inputMatrix.length ≤ 100
[output] array.integer

*/

let input = inputMatrix  = [ [1,    2,   3,  4,    5],
[6,    7,   8,  9,   10],
[11,  12,  13,  14,  15],
[16,  17,  18,  19,  20] ];



function spiralCopy(inputMatrix) {
  // your code goes here
  /*
  i: two dimensional array
  o: array
  c: none
  e: none
  
  row = 4
  column = 5
  
  picturization:
  pattern:
  00 column increased
  01
  02
  03
  04
  
  14 row incresed
  24
  34
  
  33 column decreased
  32
  31
  30
  
  20 row decreased
  10
  
  11 column increased
  12  
  13  
  
  23  row increase
  
  22  column decrease
  21
  
  */
  // rowStart rowEnd colStart colEnd
  
  let result = [];   
  let rowStart = 0;
  let rowEnd = inputMatrix.length - 1; //rowEnd = 3
  let colStart = 0;
  let colEnd = inputMatrix[0].length - 1; //colEnd = 4
  
  while (rowStart <= rowEnd && colStart <= colEnd) {
    //column increase
    for (let c = colStart; c <= colEnd; c++) { //colEnd = 4
      result.push(inputMatrix[rowStart][c]);
    }
    rowStart++; // rowStart = 1
    
    if (rowStart > rowEnd) return result;
    //row increase
    for (let r = rowStart; r <= rowEnd; r++) { //rowEnd = 3
      result.push(inputMatrix[r][colEnd]);
    }
    colEnd--; //colEnd = 3

    //column decrease
    for (let c = colEnd; c >= colStart; c--) {
      result.push(inputMatrix[rowEnd][c]);
    }
    rowEnd--; // rowEnd = 2

    //row decrease
     for (let r = rowEnd; r >= rowStart; r--) {
      result.push(inputMatrix[r][colStart]);
    }
    colStart++;
  }   
  return result;
}

console.log(spiralCopy(inputMatrix));
console.log(spiralCopy([[1, 2]]));
//
output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]