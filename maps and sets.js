class MessageBoard {
    constructor() {
      this.messages = new Map();
      this.id = 1;
    }
   
   addMessage(string) {
     this.messages.set(this.id, string);
     this.id++;
     return this;
   }
  
  findMessageById(number){
    return this.messages.get(number);
  }
  
  findMessageByValue(string){
    for (let val of this.messages.values()) {
      if (val === string) return string;
    }
  }

  removeMessage(id){
    this.messages.delete(id);
    return this;
  }
  
  numberOfMessages(){
    return this.messages.size;
      
  }
  
  messagesToArray(){
    return Array.from(this.messages.values());
  }
}

//Set

function uniqueValues(arr){
  return new Set(arr).size;
}

function hasDuplicates(arr){
 return new Set(arr).size !== arr.length;
}

function countPairs(arr, num){
  let count = 0;
  let set = new Set(arr);
  for (let ele of arr) {
    set.delete(ele);
    if (set.has(num - ele)) count++;
  }
  return count;
}

var m = new MessageBoard;

m.addMessage('hello!')
m.addMessage('hi!')
m.addMessage('whats up?')
console.log(m.findMessageByValue('hello!')); // 'hello!'
console.log(m.findMessageByValue('hi!')); // 'hi!'
console.log(m.findMessageByValue('whats up?')); // 'whats up?'
console.log(m.findMessageByValue('nothing here')); // undefined
console.log(m.findMessageByValue()); // undefined// undefined



