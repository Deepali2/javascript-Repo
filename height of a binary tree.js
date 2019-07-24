class BinaryTree {
  constructor() {
    this.root = null;
  }

  insertNode(data) {
    let node = {
      data: data,
      left: null,
      right: null
    };
    //the tree is empty so no root node
    if (!this.root){
      this.root = node;
      return (`${data} has been added as the root node`);
    }
    //if the tree is not empty
    let currentNode = this.root;
    while(currentNode) {
      //if the value to be inserted is less than the value of the node
      if (data < currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = node;
          break;
        } else currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = node;
          break;
        } else currentNode = currentNode.right;
      }
      else return('In a binary search tree all values must be unique')
    }
    return `The node with a value of ${data} has been added to the binary tree`;
  }

  //find the height of the binary search tree
  height() {
    const maxDepth = (root) => {
      return maxDepthHandler(root, 1)
    };
    const maxDepthHandler = (root, num) => {
      if (!this.root) return 0;
      if (root.right === null && root.left === null) return num;
      if (root.right && root.left) return Math.max(maxDepthHandler(root.right, num + 1), maxDepthHandler(root.left, num + 1));
      else if (root.right !== null) return maxDepthHandler(root.right, num + 1);
      else return maxDepthHandler(root.left, num + 1);
    }   
  }
  
}

//create the binary tree
const BST = new BinaryTree();
console.log(BST.insertNode(3));
console.log(BST.insertNode(2));
console.log(BST.insertNode(1));
console.log(BST.insertNode(5));
console.log(BST.insertNode(4));
console.log(BST.insertNode(6));
console.log(BST.insertNode(7));
console.log(BST.height());

