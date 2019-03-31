/*
given a binary tree, check if it is a binary search tree or not.
*/ 

// A binary tree means that every node has maximum two nodes. 
// A binary search tree means that:
//the left subtree of a node contains only nodes with keys that are less than the node's keys.
//the right subtree of a node contains only nodes with keys that are greater than the node's keys.
//both the left and the right subtrees must also be binary search trees.

//Logic:
//traverse the tree in order.
//compare the current element with the previous element.
//the node values are not distict
//time complexity: O{N}.

function BinaryTree() {
  this.root = null;
}

var last_logged;

//check if Binary Search Tree function
function isBST(root) {
  //if the value of the node is null then return true.
  //base case
  if (root === null) return true;
  //check if the left subtree is not a BST, then we do not have a BST
  if (!isBST(root.left)) return false
  //verify the current node
  if (last_logged !==null && root.data < last_logged) return false;  //if you want distict nodes then mal]ke that <=
  //log the current data and update last_logged
  console.log(`Current Data: ${root.data}`);
  last_logged = root.data;
  //check the binary subtree on the right
  if (!isBST(root.right)) return false;
  return true;
}

//create a binary tree

//constructor to make a node
function Node (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

const root = new Node(8)
// const root = {
//   data : 8,
//   left : null,
//   right: null
// };

const node4 = new Node(4);

// const node1 = {
//   data : 10,
//   left: null,
//   right: null
// };

const node10 = new Node(10);
const node2 = new Node(2);
const node6 = new Node(6);
const node12 = new Node(12);
const node20 = new Node(20);
const node10another = new Node(10);



//create a binary search tree with repeated values and verify
const BT1 = new BinaryTree();
BT1.root = root;
BT1.root.left = node4;
BT1.root.right = node10;
node4.left = node2;
node4.right = node6;
node10.right = node10another;
console.log(isBST(BT1.root));

//create a non binary search tree and verify
// const BT2 = new BinaryTree();
// BT2.root = root;
// BT2.root.left = node4;
// BT2.root.right = node10;
// node4.left = node2;
// node4.right = node12;
// node10.right = node20;
// console.log(isBST(BT2.root));

