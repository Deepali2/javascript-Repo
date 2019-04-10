//A Binary Tree is a tree data structure in which every node has at most two children.

//A Binary Search tree is a special type of a Binary tree in which the keys are in sorted order.
//Binary Search trees keep their keys in sorted order so that lookup and other operations can use the principle of binary search.

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insertNode(val) {
    let node = {
      data: val,
      left: null,
      right: null
    };
    //if there is no root node 
    if (!this.root) {
      this.root = node;
      return (`${val} has been added as the root of the binary search tree`);
    }
    let currentNode = this.root;
    while(currentNode) {
      //if the value to be inserted is less than the current Node
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
        return (`In a binary search tree all values must be unique. ${val} node value already exists.`);
      }
    }
    return (`The node ${val} has been added to the binary search tree.`);
  }
  /*
  Depth First Traversals:
  (a) Inorder (Left, Root, Right) : 4 2 5 1 3
  (b) Preorder (Root, Left, Right) : 1 2 4 5 3
  (c) Postorder (Left, Right, Root) : 4 5 2 3 1
  */
  //Depth first traversal is of three types: inorder, preorder, postorder
  //Breadth first traversal is only of one type: Breadth first traversal
  
  //in-order traversal:
  //traverse the left subtree by recursively calling the in-order functiomn
  //Display the data part of root element(or current element)
  //Traverse the right subtree by recursively calling the in-order function
  
  inOrderTraversal(root) {
    if (root.left) this.inOrderTraversal(root.left);
    console.log(root.data);
    if (root.right) this.inOrderTraversal(root.right);
  }

  //pre-order traversal
  //display the data part of the root element
  //traverse the left subtree
  //traverse the right subtree

  preOrderTraversal(root) {
    console.log(root.data);
    if (root.left) this.preOrderTraversal(root.left);
    if (root.right) this.preOrderTraversal(root.right);
  }

  //post-order traversal
  //traverse the left subtree by recursively calling the post-order function
  //traverse the right subtree by recursively calling the post-order function
  //display the data part of the root element or the current element
  postOrderTraversal(root) {
    if (root.left) this.postOrderTraversal(root.left);
    if (root.right) this.postOrderTraversal(root.right);
    console.log(root.data);
  }

  //breadth first search is also called level order search. It is a queue. Meaning first is first out
  printTreeInLevelOrder(BST) {
    let temp, queue = [];
    queue.push(BST.root);
    while(queue.length) {
      //dequeue the queue
      temp = queue.splice(0, 1)[0];
      console.log(temp.data);
      if (temp.left) queue.push(temp.left);
      if (temp.right) queue.push(temp.right);
    }
  }

}

const BST1 = new BinarySearchTree();
console.log(BST1.insertNode(8));
console.log(BST1.insertNode(3));
console.log(BST1.insertNode(10));
console.log(BST1.insertNode(1));
console.log(BST1.insertNode(6));
console.log(BST1.insertNode(14));
console.log(BST1.insertNode(4));
console.log(BST1.insertNode(7));
console.log(BST1.insertNode(13));
console.log(BST1.inOrderTraversal(BST1.root));
console.log(BST1.printTreeInLevelOrder(BST1));