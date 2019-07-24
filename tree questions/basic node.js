//implement linked list in javascript with the followind method:
//insertNodeAtTail
//deleteNodes

class Node {
  constructor(val) {
    this.val = null;
    this.next = null;
  }
}

Node.prototype.addNode = function(node) {
  this.next = node;
};
let head = new Node(1);
let secondElement = new Node(2);
head.addNode(secondElement);
