/*

 Given an array of arrays, implement an iterator class to allow the client to

 traverse and remove elements in the array list.  This iterator should provide

 three public class member functions:

 hasNext()

    return true or false if there is another element in the array

 next()

    return the value of the next element in the array

 void remove()

    remove the last element returned by the iterator.

    That is, remove the element that the previous next() returned

 The code should be well structured, and robust enough to handle any access

 pattern.  Additionally, write code to demonstrate that the class can be used for

 the following basic scenarios:

 Print elements

   Given:  [[],[1,2,3],[4,5],[],[],[6],[7,8],[],[9],[10],[]]

   Print:  1 2 3 4 5 6 7 8 9 10

 Remove multiples of 3

   Given:  [[],[1,2,3],[4,5],[],[],[6],[7,8],[],[9],[10],[]]

   Should result in:  [[], [1,2], [4,5], [], [], [], [7,8], [], [], [10], []]

*/

// print everything in the array:

function testCase1(arr) {
  console.log("---------Test Case-----------");

  let it = new Iterator(arr);

  while (it.hasNext()) {
    console.log(it.next());
  }
}

// out of range

function testCase2(arr) {
  console.log("---------Test Case-----------");

  let it = new Iterator(arr);

  try {
    for (let i = 0; i < 20; i++) {
      console.log(it.next());
    }
  } catch (ex) {
    console.log(ex);
  }
}

// remove every 3rd element from the array:

function testCase3(arr) {
  console.log("---------Test Case-----------");

  let it = new Iterator(arr);

  while (it.hasNext()) {
    let x = it.next();

    if (x % 3 === 0) it.remove();
  }

  console.log(JSON.stringify(arr));
}

// error when remove

function testCase4(arr) {
  console.log("---------Test Case-----------");

  let it = new Iterator(arr);

  it.next();

  it.remove();

  try {
    it.remove();
  } catch (ex) {
    console.log(ex);
  }

  console.log(JSON.stringify(arr));
}

// remove everything

function testCase5(arr) {
  console.log("---------Test Case-----------");

  let it = new Iterator(arr);

  while (it.hasNext()) {
    it.next();

    it.remove();
  }

  console.log(JSON.stringify(arr));
}

// nested array:

function arr() {
  return [[], [1, 2, 3], [4, 5], [], [], [6], [7, 8], [], [9], [10], []];
}

class Iterator {
  constructor(arr) {
    this.arr = arr;

    this.outer = 0;

    this.inner = 0;

    this.nextValue = null;

    this.nextWrapper();
  }

  next() {
    const oldNext = this.nextValue;
    this.nextWrapper();
    return oldNext;
  }

  isValid(outer, inner) {
    return !!this.arr[outer] && !!this.arr[outer][inner];
  }

  nextWrapper() {
    this.inner++;

    while (!this.isValid(this.outer, this.inner)) {
      if (this.outer >= this.arr.length) break;

      if (this.inner < this.arr[this.outer].length) this.inner++;
      else {
        this.outer++;

        this.inner = 0;
      }
    }

    this.nextValue = this.arr[this.outer] && this.arr[this.outer][this.inner];
  }

  hasNext() {
    return !!this.nextValue;
  }

  remove() {
    const oldOuter = this.outer;

    const oldInner = this.inner;

    this.nextWrapper();

    this.arr[oldOuter].splice(oldInner, 1);
  }
}

// part 1

testCase1(arr());

testCase2(arr());

// part2

// testCase3(arr());

//testCase4(arr());// test remove method

//testCase5(arr());// test remove method
