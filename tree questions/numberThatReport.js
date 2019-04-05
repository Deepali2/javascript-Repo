//Given an array representing the ranks of army officers. 
//A lower rank reports to its immediate +1. Determine the total number of officers that report to someone.
//Example: [2, 3, 3, 0, 5, 4, 7] will give output as 4 since 2 will report , 3's will report, 4 will report. 5 cannot report as there is no 6.

//logic:
//make an object

//helper function to make a hash table
const hash = (array) => {
  let obj = {};
  for (let ele of array) {
    obj[ele] = ++obj[ele] || 1;
  }
  return obj;
}

//main function
const numberThatReport = (array) => {
  let result = 0;
  let hashTable = hash(array);
  for (let key in hashTable) {
    let keyToTest = parseInt(key) + 1;
    if (hashTable.hasOwnProperty(keyToTest)) result += parseInt(hashTable[key]);
  }
  return result;
};
console.log(numberThatReport([2, 3, 3, 0, 5, 4, 7]));