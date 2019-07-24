/* 
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

//using dictionary don't have to do reverse
var removeNthFromEnd = function(head, n) {
  let dict = {};
  let i = 0;
  let current = head;
  while (current) {
    i++;
    dict[i] = current;
    current = current.next;
  }
  let lastN = i;
  let NtoDelete = lastN - n + 1;
  if (NtoDelete === 1) {
    console.log("Cannot remove the head");
    return;
  }
  if (dict[NtoDelete - 1] === undefined) return dict[NtoDelete].next;

  dict[NtoDelete - 1].next = dict[NtoDelete].next;

  return head;
};

//testing on my own
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
Node.prototype.addNode = function(node) {
  this.next = node;
};

let head = new Node(1);
let node2 = new Node(2);
head.addNode(node2);

let node3 = new Node(3);
node2.addNode(node3);

let node4 = new Node(4);
node3.addNode(node4);

let node5 = new Node(5);
node4.addNode(node5);

let node6 = new Node(6);
node5.addNode(node6);

const listAllElements = head => {
  let arr = [];
  let currentNode = head;
  while (currentNode) {
    arr.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return arr;
};

console.log(listAllElements(head));
removeNthFromEnd(head, 5);
console.log(listAllElements(head));
