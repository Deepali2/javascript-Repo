//implement linked list in javascript with the followind method:
//insertNodeAtTail
//deleteNodes  

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  insertNodeAtTail(value) {
    let node = {
       data: value,
       next: null
    };
    if(!this.head) this.head = node;
    else {
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  deleteNode(value) {
    //if the list is empty 
    if(!this.head) {
      console.log('The list is empty');
      return;
    }
    //if the value to delete is at the head
    if (this.head.data === value) {
      this.head = this.head.next;
    }
    else {
      let currentNode = this.head;
      let nextNode =  currentNode.next;
      while(nextNode) {
        if (nextNode.data === value) {
          currentNode.next = nextNode.next;
          break;
        }
        else {
          currentNode = nextNode;
        }
        //the next node will eitherways be nextNode.next
        nextNode = nextNode.next;
      }
    }
  }
  //remove duplicates from an unsorted linked list
  removeDuplicates() {
    if(!this.head || !this.head.next) {
      console.log('No dupilcates found. Empty or a single element Linked List');
      return;
    }
    let count = 0;
    let currentNode = this.head;
    let nextNode = currentNode.next;
    let obj = {};
    while (currentNode) {
      if (obj.hasOwnProperty(currentNode.data)){
        ll1.deleteNode(currentNode.data);
        count++;
      }
      else {
        obj[currentNode.data] = 1; 
      }
      currentNode = currentNode.next;
    }
    console.log(`${count} elements that were duplicates removed. Current length of the linked list is ${ll1.findLength()}`);
  }

  //find the length of the linked list
  findLength() {
    let count = 0;
    let currentNode = this.head;
    while(currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  } 
}

//Create an instance of a linked list to test the above code
let ll1 = new LinkedList();

//Create a linked list with six elements
let testData = [106, 26, 7, 8, 8, 9, 10, 7, 11, 11, 7, 7];
testData.forEach(ele => {
  ll1.insertNodeAtTail(ele);
});
console.log(ll1);

//delete a node

ll1.deleteNode(6);
console.log(ll1);

console.log(ll1);
ll1.removeDuplicates();
/*
Advantages of a linked list:
 1. Dynamic data structure, can create new nodes while the program is running.
 2. Insertion and deletion of nodes are easily implementable as we simply have to change the poiner to the next
 3. Linear data structures such as stacks and queues are easily implemented since the pointer to the next simply changes.
 4. Linked lists can reduce access tine and may expand in real time without memeory since we just have to implement the pointers for already existing data values to connect them in a linked list

 Disadvantages:
 1. They have a tendency to use more memory due to extra property 'next' to point to the next node.
 2. Nodes in a linked list must be read in order from beginning as linked lists are inherently sequential access.
 3. Difficulties arise in linked list it comes to reverse traversing. For instance, singly linked lists are cumbersome to navigate backwards and while doubly linked lists are somewhat easier to read, memory is wasted in allocating space for a property 'back'
 */