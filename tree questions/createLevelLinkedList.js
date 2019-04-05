//Given a binary tree create linked lists of the nodes at the same level


//Problem Description:
//So we need to convert the given binary tree to a linked list of all the nodes at each deapth. 
//So if we have a binary tree with depth d we will have d linked lists.

//modify the pre-order traversal algorithm by passing an extra argument of the current height(level)ß + 1

//create a binary tree
function BinaryTree () {
  this.root = null;
}
function Node(val) {
  this.data = val;
  this.children = [];
}
node7 = new Node(7);
node1 = new Node(1);
node2 = new Node(2);
node1another = new Node(1);
node2another = new Node(2);
node5 = new Node(5);
node8 = new Node(8);
node9 = new Node(9);
node11 = new Node(11);

node7.children.push(node1);
node1.children.push(node2, node1another);
node1another.children.push(node2another);
node5.children.push(node8, node9);
node9.children.push(node11);

//create a binary Search Tree
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //insert a node
  insertANode(val) {
    let node = {
      data: val,
      left: null, 
      right: null
    }
    if (!this.root) {
      this.root = node;
      return (`The value has been added as the root of the binary search tree`);
    }
    let currentNode = this.root;
    while(currentNode) {
      if (val < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else if (val > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else {

      }
    }
     
  }
}

