/*
Merge two sorted linked lists and return it as a new list. The new list should be 
made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4 */

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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let l1 = new ListNode(1);
let l1Node2 = new ListNode(2);
l1.next = l1Node2;
let l1Node3 = new ListNode(4);
l1Node2.next = l1Node3;
console.log(l1);

let l2 = new ListNode(1);
let l2Node2 = new ListNode(3);
let l2Node3 = new ListNode(4);
let l2Node4 = new ListNode(5);
l2.next = l2Node2;
l2Node2.next = l2Node3;
l2Node3.next = l2Node4;
console.log(l2);

const listNodes = (node, elements = []) => {
  let currentNode = node;
  if (!currentNode) return elements;
  while (currentNode) {
    elements.push(currentNode.val);
    currentNode = currentNode.next;
  }
  return elements;
};

console.log(listNodes(l1));
console.log(listNodes(l2));

const mergeTwoLists = (l1, l2) => {
  let mergeHead = { val: null, next: null };
  let currentNode = mergeHead;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  if (l1) currentNode.next = l1;
  if (l2) currentNode.next = l2;
  return mergeHead.next;
};

console.log(listNodes(mergeTwoLists(l1, l2)));
