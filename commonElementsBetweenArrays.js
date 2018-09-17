//given two sorted arrays, find the number of elements in common. The arrays are of the same length and each has all distinct elements


let A = [13, 27, 35, 40, 49, 55, 59, 60];
let B = [17, 35, 39, 40, 55, 58, 60];

const elementsInCommon = (A, B) => {
  let commonElements = [];
  let numberOfCommmon = 0;
  let hash = {};
  for (i = 0; i < B.length; i++) {
    console.log(B[i]);
    console.log(hash);

    if (hash[B[i]]) {
      hash[B[i]]++;
    } else {
      hash[B[i]] = 1;
    }
  }
  for (i = 0; i < A.length; i++) {
    if (A[i] in hash && hash[A[i]] > 0) {
      commonElements.push(A[i]);
      hash[A[i]]--;
      numberOfCommmon++;
    }
  }
  console.log(`There are ${numberOfCommmon} elements common between the given lists. They are ${commonElements}`);
  return numberOfCommmon;
};

console.log(elementsInCommon(A, B));

//The above algorithm runs in O(n) time.

//using the fact that the arrays are sorted we can improve the run time. We can skip making a hash table that requires more space and work with the given arrays. 
// since the elements are sorted we can limit the number of items to check.

const commonUsingSortedness = (A, B) => {
  let index = 0;
  let numberOfCommmon = 0;
  let commonElements = [];
  for (let i = 0; i < A.length; i++) {
    for (let j = index; j < B.length; j++) {
      if (B[j] === A[i]) {
        index = j + 1;
        numberOfCommmon++;
        commonElements.push(A[i]);
      }
    }
  }
  return commonElements;
}

console.log(commonUsingSortedness(A, B));
