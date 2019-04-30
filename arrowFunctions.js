
    const tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0);
   
    const doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val *2);
    
   const mapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length < 5).reduce((acc, next) => {
     acc[next] = next.length;
     return acc;
   },{});
   
   let arr = [{firstName: 'Maggi', LastName: 'Goja'}, {firstName: 'Jonathan', LastName: 'Goja'}, {firstName: 'Ramakrishnan', LastName: 'Goja'}]
   console.log(mapFilterAndReduce(arr));

const createStudentObj = (firstName, lastName) => {
  let obj = {};
  obj.firstName = firstName;
  obj.lastName = lastName;
  return obj;
}

const instructor = {
  firstName: 'Colt',
  sayHi: function(){
    setTimeout(() => {console.log('Hello' + this.firstName)}, 1000);
  }
};


//The rest operator always returns an array
//Is called the rest operator 'only' when it is a parameter to a function
//Is accessed without the ... in a function
//A better alternative to using the arguments array-like-object
const printArguments = (a, b, ...c) => {  // Rest operator
  console.log(a);
  console.log(b);
  console.log(c);
}

printArguments(4, 5, 6, 7, 6, 5555, 56, 0);

function sumArguments1() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sumArguments(2, 3, 4, 5, 6, 81));

//fancier code
function sumArguments2() {
  var argumentsArray = [].slice.call(arguments);
  return argumentsArray.reduce((accumulator, nextValue) => accumulator + nextValue);
}


