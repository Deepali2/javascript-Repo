/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
//https://leetcode.com/problems/zigzag-conversion/
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  //initialize matrix
  let matrix = [];
  //add inner arrays
  for (let i = 0; i < numRows; i++) {
    matrix.push([]);
  }
  let r = 0, c = 0, nextRound = false;

  for (let i = 0; i < s.length; i++) {
    matrix[r][c] = s[i]; 
    if (r === numRows - 1) nextRound = true;  
    if (nextRound === false && r < numRows) {
      r++;
    } 
    if (nextRound === true && r >= 0) {
      r--;
      c++;
    }
    if (r === 0 && nextRound === true) nextRound = false;
    }   
    
    //flatten the matrix
    let resArr = matrix[0];
    for (let i = 1; i < matrix.length; i++) {
      resArr = resArr.concat(matrix[i]);
    }
    let resStr = resArr.join('');
    return resStr;    
};

console.log(convert("AB", 1));