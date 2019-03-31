/*
Sales Path
The car manufacturer Honda holds their distribution system in the form of a tree (not necessarily binary). The root is the company itself, and every node in the tree represents a car distributor that receives cars from the parent node and ships them to its children nodes. The leaf nodes are car dealerships that sell cars direct to consumers. In addition, every node holds an integer that is the cost of shipping a car to it.

Take for example the tree below:

alt

A path from Honda’s factory to a car dealership, which is a path from the root to a leaf in the tree, is called a Sales Path. The cost of a Sales Path is the sum of the costs for every node in the path. For example, in the tree above one Sales Path is 0→3→0→10, and its cost is 13 (0+3+0+10).

Honda wishes to find the minimal Sales Path cost in its distribution tree. Given a node rootNode, write a function getCheapestCost that calculates the minimal Sales Path cost in the tree.

Implement your function in the most efficient manner and analyze its time and space complexities.

For example:
https://www.pramp.com/img/content/img_01.png

Given the rootNode of the tree in diagram above

Your function would return:

7 since it’s the minimal Sales Path cost (there are actually two Sales Paths in the tree whose cost is 7: 0→6→1 and 0→3→2→1→1)

Constraints:

[time limit] 5000ms

[input] Node rootNode

0 ≤ rootNode.cost ≤ 100000
[output] integer
*/

//create a Node
function Node(cost) {
  this.cost = cost;
  this.children = []; 
}

//create the tree
const node0 = new Node(0);
const node1 = new Node(5);
const node2 = new Node(3);
const node3 = new Node(6);
const node4 = new Node(4);
const node5 = new Node(2);
const node6 = new Node(0);
const node7 = new Node(1);
const node8 = new Node(5);
const node9 = new Node(1);
const node10 = new Node(10);
const node11 = new Node(1);

node0.children.push(node1, node2, node3);
node1.children.push(node4);
node2.children.push(node5, node6);
node3.children.push(node7, node8);
node5.children.push(node9);
node6.children.push(node10);
node9.children.push(node11);

function getCheapestCost1(node, totalCost = 0, result = Infinity) {
  totalCost += node.cost;
  //base case
  if (node.children.length === 0) return totalCost;
  //recursive 
  node.children.forEach(child => {
    result = Math.min(result, getCheapestCost1(child, totalCost, result))
  });
  return result;
}
console.log(getCheapestCost1(node0));

//Another way
function getCheapestCost2(root, accumulatedCost = 0) {
  if (!root)return null;
  if (root.lowestCostToLeaf)return root.lowestCostToLeaf;
  let lowestCostToLeaf = accumulatedCost+root.cost;
  if (root.children.length > 0) {
    lowestCostToLeaf+=Math.min(
      ...root.children.map(
        child => getCheapestCost2(child, accumulatedCost)
      )
    );
  }
  root.lowestCostToLeaf = lowestCostToLeaf;
  return lowestCostToLeaf;
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/ 

// Constructor to create a new Node
function Node(cost) {
  this.cost = cost;
  this.children = [];
  this.lowestCostToLeaf = null;
}

let Honda = new Node(0);
let l25 = new Node(5);
let l23 = new Node(3);
let l26 = new Node(6);
Honda.children = [l25, l23, l26];

let l34 = new Node(4);
let l32 = new Node(2);
let l30 = new Node(0);
let l31 = new Node(1);
let l35 = new Node(5);

l25.children = [l34];
l23.children = [l32, l30];
l26.children = [l31, l35];

let l41 = new Node(1);
let l310 = new Node(10);

l32.children = [l41];
l30.children = [l310];

let l510 = new Node(10);

l41.children = [l510];

console.log(getCheapestCost2(Honda));
