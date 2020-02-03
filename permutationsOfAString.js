//print all permutations of a string. Assume that all characters are unique

//input: string
//output: array
//constraints: none
//edges: none

// solving a simpler problem where the length of the string is known.
let string = 'abc';
const permutations = (string) => {
  let permutArr = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = 1; j < string.length; j++) {
      for (let k = 2; k < string.length; k++) {
        permutArr.push(string[i] + string[j] + string[k]);
      }
    }
  }
  return permutArr;
};

console.log(permutations(string));

//solving the problem to find the permutations and also the number of permutations for an unknown length of a string

const permut = (str) => {
  let arr = str.split('');
  console.log(arr)
  let permutations = [];
  let numberOfPermutations = 0;

  //helper function: algorithm to swap elements of an array
  const swap = (a, b) => {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  //helper function: using Heap's algorithm for generating permutations
  const generate = (n) => {
    let regex = /([a-z])\1+/;

    if (n === 1 && !regex.test(arr.join(''))) {
      numberOfPermutations++;
      permutations.push(arr.join(''));
    } else {
      for (let i = 0; i !== n; i++) {
        generate(n - 1, arr);
        if (n % 2 === 0) {
          swap(i, n - 1);
        } else {
          swap(0, n - 1);
        }
      }
    }
  }
  //call the recursive function called generate
  generate(arr.length);
  console.log(numberOfPermutations);
  return permutations;
};

console.log(permut('abhhc'));