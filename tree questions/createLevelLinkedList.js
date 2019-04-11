//Given a binary tree create linked lists of the nodes at the same level


//Problem Description:
//So we need to convert the given binary tree to a linked list of all the nodes at each deapth. 
//So if we have a binary tree with depth d we will have d linked lists.

//modify the pre-order traversal algorithm by passing an extra argument of the current height(level)ß + 1

//create a binary tree
//A binary tree will have a maximum of two children per node but the values need not be in sorted order
function Tree() {
  this.root = null;
}

function Node(val) {
  this.data = val;
  this.left = null;
  this.right = null;
}

//creating a binary tree
const tree1 = new Tree();   
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
let node18 = new Node(18);
let node20 = new Node(20);
let node30 = new Node(30);

node7.left = node1;
node7.right = node5;
node1.left = node2;
node1another.right = node18;
node1.right = node1another;
node1another.left = node2another;
node5.left = node8;
node5.right = node9;
node9.left = node11;
node2.left = node30;
node2.right = node20;

function maxDepthTree(root, depth = 1) {
  //base case
  if(!root) return 0;
  //terminating case when a leaf is reached;
  if (root.left === null && root.right === null) return depth

  if (root.left && root.right) return Math.max(maxDepthTree(root.left, depth + 1), maxDepthTree(root.right, depth + 1));
  else if(root.left) return maxDepthTree(root.left, depth + 1);  
  else if(root.right) return maxDepthTree(root.right, depth + 1);
  
}
console.log(maxDepthTree(tree1.root))

function preorderTree(root) {
  //root left right
  console.log(root.data);
  if (root.left) preorderTree(root.left);
  if(root.right) preorderTree(root.right);

}

function inorderTree(root) {
  //left root right
  if (root.left) inorderTree(root.left);
  console.log(root.data);
  if(root.right)inorderTree(root.right);
}

function postorderTree(root) {
  //left right root
  if (root.left) postorderTree(root.left);
  if (root.right) postorderTree(root.right);
  console.log(root.data);
}

function breadthTraverseTree(tree) {
  let queue = [];
  let temp;
  if(!tree.root) return ('The tree is empty');
  queue.push(tree.root);
  while(queue.length) {
    temp = queue.splice(0, 1)[0];
    console.log(temp.data);
    if(temp.left) queue.push(temp.left);
    if(temp.right) queue.push(temp.right);
  }
}

//testing
// preorderTree(tree1.root);
// inorderTree(tree1.root);
// postorderTree(tree1.root);
// breadthTraverseTree(tree1);

//create a binary Search Tree
//A binary search tree is a special type of a binary tree in which the values are in order
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
      return(`The value ${val} has been added as the root`)
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
       return (`This value already exists in the binary search tree`);
      }
    }  
    return (`The value ${val} has been added`);   
  }

  //Depth first traversal:
  //a) inorder: left root right
  //b) preorder: root left right 
  //c) postorder: left right root

  inorder(root) {
    if(root.left) this.inorder(root.left);
    console.log(root.data);
    if(root.right) this.inorder(root.right);
  }

  preorder(root) {
    console.log(root.data);
    if(root.left) this.preorder(root.left);
    if(root.right) this.preorder(root.right);
  }

  postorder(root) {
    if (root.left) this.postorder(root.left);
    if(root.right) this.postorder(root.right);
    console.log(root.data);
  }

  breadthTraverse(tree) {
    let queue = [];
    let temp;
    queue.push(tree.root);
    while(queue.length) {
      //dequeue the queue
      temp = queue.splice(0, 1)[0];
      console.log(temp.data);
      if(temp.left) queue.push(temp.left);
      if(temp.right) queue.push(temp.right);
    }
  }
}

//testing
const BST1 = new BinarySearchTree();
console.log(BST1.insertANode(3));
console.log(BST1.insertANode(1));
console.log(BST1.insertANode(5));
console.log(BST1.insertANode(4));
console.log(BST1.insertANode(0));
console.log(BST1.insertANode(8));
console.log(BST1.insertANode(2));
console.log(BST1.insertANode(10));
console.log(BST1.inorder(BST1.root));
console.log(BST1.preorder(BST1.root));
console.log(BST1.postorder(BST1.root));
console.log(BST1.breadthTraverse(BST1));

//code to create a doubly linked list
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //insert a node
  insertAtTail(value) {
    let node = {
      data: value,
      next : null,
      previous : null
    };
    if(!this.head) {
      this.head = node;
      this.tail = node;
      return (`${value} has been added as the head of the doubly linked list`);
    }
    let current = this.tail;
    current.next = node;
    node.previous = current;
    this.tail = node;
    return (`${value} added at the tail`)
  }

  //print List from head to tail
  printHeadToTail() {
    if (!this.head) return null;
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    } 
    return arr;
  }
}

//testing Doubly LinkedList

// const DLL1 = new DoublyLinkedList();
// console.log(DLL1.insertAtTail(2));
// console.log(DLL1.insertAtTail(8));
// console.log(DLL1.insertAtTail(19));
// console.log(DLL1.printHeadToTail());

function createLevelLinkedList(tree) {
  if(!tree.root) return null;
  let depth = maxDepthTree(tree.root);
  let lists = [];
  let queue = [];
  let temp;
  let list = new DoublyLinkedList();
  let level = 1;
  let arr = [tree.root, level];
  queue.push(arr);
  while(queue.length) {
    //dequeue the first element in the queue
    temp = queue.splice(0, 1)[0];
    //add to the queue
    if(temp[0].left) queue.push([temp[0].left, temp[1] + 1]);
    if (temp[0].right) queue.push([temp[0].right, temp[1] + 1]);

    if (temp[1] === level) {
      list.insertAtTail(temp[0].data);
      if (queue.length === 0) lists.push(list);  //to get the elements in the deepest level of the tree
    }
    else {
      lists.push(list);
      ++level;
      list = new DoublyLinkedList();
      list.insertAtTail(temp[0].data);
    }

  } 
  return lists;
}

//testing createLevelLinkedList
let arrayOfDoublyLinkedLists = createLevelLinkedList(tree1);
console.log(printcreateLevelLinkedList(arrayOfDoublyLinkedLists));
console.log(printcreateLevelLinkedList(createLevelLinkedList(BST1)));
function printcreateLevelLinkedList(arrayOfDoublyLinkedLists) {
  let results = [];
  for (let ele of arrayOfDoublyLinkedLists) {
    results.push(ele.printHeadToTail());
  }
  return results;
}
