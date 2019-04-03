//Given a binary tree create linked lists of the nodes at the same level


//Problem Description:
//So we need to convert the given binary tree to a linked list of all the nodes at each deapth. 
//So if we have a binary tree with depth d we will have d linked lists.

//constructor to create a binary tree

class BinaryTree {
  constructor() {
    this.root = null;
  }
  //insert a Node 
  insertNode(value) {
    let node = {
      data: value,
      children: []
    };
    if (!this.root) {
      this.root = node;
      return (`node added as the root of the empty tree`);
    }
    
  }



}

//create an instance of the binary tree
const BT1 = new BinaryTree();
console.log(BT1.insertNode(3));