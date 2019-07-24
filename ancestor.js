/*
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
            
  11
   \ 
1   2   4
 \ /   / \
  3   5   8
   \ / \   \
    6   7   10

Write a function that, for a given individual in our dataset, returns their earliest known ancestor -- 
the one at the farthest distance from the input individual. If there is more than one ancestor tied for "earliest", 
return any one of them. If the input individual has no parents, the function should return null (or -1).

Sample input and output:


findEarliestAncestor(parentChildPairs, 8) => 4
findEarliestAncestor(parentChildPairs, 7) => 4
findEarliestAncestor(parentChildPairs, 6) => 11
findEarliestAncestor(parentChildPairs, 1) => null or -1

*/

let parentChildPairs = [
  [1, 3],
  [2, 3],
  [3, 6],
  [5, 6],
  [5, 7],
  [4, 5],
  [4, 8],
  [8, 10],
  [11, 2]
];

/*
input: array of arrays
output: number
*/

const findEarliestAncestor = (parentChildPairs, num) => {
  let ancestors = [];
  let oldest;
  for (let ele of parentChildPairs) {
    if (ele[1] === num) ancestors.push(ele[0]);
  }
  if (ancestors.length === 0) return null;
  while (ancestors.length > 0) {
    oldest = ancestors[0];
    for (let ele of parentChildPairs) {
      if (ele[1] === oldest) ancestors.push(ele[0]);
    }
    ancestors.shift();
    if (ancestors.length === 0) return oldest;
    else oldest = null;
  }
};
console.log(findEarliestAncestor(parentChildPairs, 6));
console.log(findEarliestAncestor(parentChildPairs, 8));
console.log(findEarliestAncestor(parentChildPairs, 7));
console.log(findEarliestAncestor(parentChildPairs, 1));
