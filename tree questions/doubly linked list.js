class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null
  }
  
  //insert a node at the tail
  insertANodeAtTail(value) {
    let node = {
      data: value,
      next: null,
      previous: null
    }
    if(!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
      return;
    }
    else {
      let currentNode = this.tail;
      currentNode.next = node;
      node.previous = currentNode;
      this.tail = node;
    }
    return (`${value} added at the tail`);
  }

  //print out all the values in the doubly linked list
  printAllValues() {
    let nodes = [];
    let currentNode = this.head;
    while(currentNode) {
      nodes.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return nodes.join(' ');
  }

  //insert node at the head
  insertNodeAtHead(value) {
    let node = {
      data: value,
      next: null,
      previous: null
    }
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      let currentNode = this.head;
      currentNode.previous = node;
      node.next = currentNode;
      this.head = node;
    }
    return (`${value} added at the head of the doubly linked list`);
  }

  //find the length of the doubly linked list
  length() {
    let count = 0;
    let currentNode = this.head
    while(currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  //insertANode at a given index
  insertNodeAtIndex(index, value) {
    let node = {
      data: value,
      next: null,
      previous: null

    };
    if(!index || !value) return ('Please specify an index and a value');
    if (index === 0) return this.insertNodeAtHead(value);
    let length = this.length();
    if (index === length) return this.insertANodeAtTail(value);
    if (index > length) return (`the index cannot be longer than ${length}`);
    
    let currentNode = this.head;
    let nextNode = currentNode.next;
    let count = 0;
    while(count < index - 1) {
      currentNode = currentNode.next;
      count++;
    } 
    node.next = currentNode.next;
    currentNode.next.previous = node;
    currentNode.next = node;
    node.previous = currentNode;
    return (`node with value ${value} has been added at index ${index} in the doubly linked list`);
  }

}

//create an instance of a doubly linked list with 6 nodes [3, 5, 6, 10, 3, 8]
let DL1 = new DoublyLinkedList();
let nodes = [3, 5, 6, 10, 3, 8];
nodes.forEach(ele => {
  DL1.insertANodeAtTail(ele);
});
console.log(DL1.insertNodeAtHead(300));
console.log(DL1.insertANodeAtTail(500));
console.log(DL1.printAllValues());
console.log(DL1.length());
console.log(DL1.insertNodeAtIndex(8, 200));
console.log(DL1.printAllValues());
console.log(DL1.insertNodeAtIndex(20, 300));
console.log(DL1.insertNodeAtIndex(5, 34));
console.log(DL1.printAllValues());


