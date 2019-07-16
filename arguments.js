//using es5 when the input is an array
var add = function(arguments) {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

console.log(add([1, 2, 3, 4, 5]));

//using es5 when the input is not an array
var add1 = function() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
console.log(add1(1, 2, 3, 4, 5));

//using es5 with reduce and input is an array
//when using reduce the input must be an array
var add3 = function(arguments) {
  return arguments.reduce(function(a, b) {
    return a + b;
  });
};
console.log(add3([1, 2, 3, 4, 5]));

//using es6 and input is not an array, then we destructure arguments
const add5 = (...arguments) => arguments.reduce((a, b) => a + b);
console.log(add5(1, 2, 3, 4));

//using es6 and input is an array, then we do not destructure arguments
const add6 = arguments => arguments.reduce((a, b) => a + b);
console.log(add6([1, 2, 3, 4]));
