
//creating a tree
function Tree () {
  this.root = null;
}
function Node(val) {
  this.data = val;
  this.children = [];
}

let tree1 = new Tree();
let node7 = new Node(7);
tree1.root = node7;
let node1 = new Node(1);
let node2 = new Node(2);
let node1another = new Node(1);
let node2another = new Node(2);
let node5 = new Node(5);
let node8 = new Node(8);
let node9 = new Node(9);
let node11 = new Node(11);

node7.children.push(node1, node5);
node1.children.push(node2, node1another);
node1another.children.push(node2another);
node5.children.push(node8, node9);
node9.children.push(node11);

function depthFirst(node) {
 console.log(node.data);
   if (node.children) {
     for (ele of node.children) depthFirst(ele);
   }

}

console.log(depthFirst(tree1.root));