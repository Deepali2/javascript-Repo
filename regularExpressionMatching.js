const isMatch = function(s, p) {
  let sLength = s.length;
  let pLength = p.length;
  let mem = {};
  return helper(0, 0);

  function helper(idxS, idxP) {
    if (idxS === sLength && idxP === pLength) return true;
    else if(idxS > sLength || idxP > pLength) return false;
    let flag = `${idxS}:${idxP}`;
    if (mem[flag] !== undefined) return mem[flag];
    else if (s[idxS] === p[idxP] || p[idxP] === '.') mem[flag] = p[idxP + 1] === '*' ? helper(idxS + 1, idxP) || helper(idxS, idxP + 2) : helper(idxS + 1, idxP + 1);
    else mem[flag] = p[idxP + 1] === '*' ? helper(idxS, idxP + 2) : false;
    return mem[flag];
  }
};

//works but hard to understand
// function isMatch(s, p) {
//   const table = [];

//   return match(0, 0);

//   function match(i, j) {
//     table[i] = table[i] || [];
//     if (table[i][j] === undefined) {
//       table[i][j] = compute(i,j);
//     }

//     return table[i][j];
//   }

//   function compute(i, j) {
//     if (s[i] === undefined && p[j] === undefined) {
//       return true;
//     } else if (p[j] === undefined) {
//       return false;
//     }

//     const astrisk = p[j + 1] === '*';
//     if (s[i] === undefined) {
//       if (astrisk) {
//         return match(i, j + 2);
//       } else {
//         return false;
//       }
//     }

//     const charMatch = isCharMatch(s[i], p[j]);

//     if (astrisk && charMatch) {      
//       return (
//         match(i + 1, j + 2) ||
//         match(i, j + 2) ||
//         match(i + 1, j)
//       );
//     } else if (astrisk) {
//       return match(i, j + 2);
//     } else if (charMatch) {
//       return match(i + 1, j + 1);
//     } else {
//       return false;
//     }
//   }
// }

// function isCharMatch(sChar, pChar) {
//   return sChar === pChar || pChar === '.';
// }

console.log(isMatch("mississipi", "mis*is*p*."));
console.log(isMatch("aab", "c*a*b"));