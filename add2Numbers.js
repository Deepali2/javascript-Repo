/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/**
I: 2 linked lists
O: a Linked list
C: non empty linked lists;only positive integers; no leading zeroes

Logic:
*read each list backwards to create a number
* add the two numbers
* create a linked list for the result starting backwards

Pseudocode:
create a linked list
function to traverse the linked list 
create test cases

call the traversing function for each list
reverse the number
add the nummbers
reverse the result
use function to create the output linked list


*/
//create a linked list
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  //function to add a node to the linked list
  addANode(value) {
    //create a node object
    const node = {
      data : value,
      next: null
    }
    //if there is no head, then make this node the head
    if (!this.head) {
      this.head = node;
      this.tail = node;
      return `${value} added as the head`;
    }
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.next) {
        currentNode = currentNode.next;
      } else {
        currentNode.next = node;
        return `${value} added as the next node`
      }
    }   
  }

  //function to traverse the linked list and to return the digits from head to tail
  printLinkedList() {
    if (!this.head) return null;
    let nodes = [];
    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode.data);
      if (currentNode.next === null) break;
      else currentNode = currentNode.next;
    }
    return nodes.join('');
  }
}

//testing
//create linked list1
let l1 = new LinkedList();
console.log(l1.printLinkedList());
console.log(l1.addANode(2));
console.log(l1.addANode(4));
console.log(l1.addANode(3));
console.log(l1.printLinkedList());
console.log(typeof(l1.printLinkedList()));

//create linkedList2
let l2 = new LinkedList();
console.log(l2.printLinkedList());
console.log(l2.addANode(5));
console.log(l2.addANode(6));
console.log(l2.addANode(4));
console.log(l2.printLinkedList());
console.log(typeof(l1.printLinkedList()));

var addTwoNumbers = function(l1, l2) {
  let str1 = l1.printLinkedList();
  let str2 = l2.printLinkedList();
  let result = String(parseInt(str1.split('').reverse().join('')) + parseInt(str2.split('').reverse().join('')));
  const l3 = new LinkedList();
  for (let i = result.length - 1; i >= 0; i--) {
    l3.addANode(result[i]);
  }   
  return l3;
};


//testing 
console.log(addTwoNumbers(l1, l2));