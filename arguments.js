var add = function(arguments) {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};

console.log(add([1, 2, 3, 4, 5]));

var add1 = function() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
};
console.log(add1(1, 2, 3, 4, 5));

var add3 = function(arguments) {
  return arguments.reduce(function(a, b) {
    return a + b;
  });
};
console.log(add3([1, 2, 3, 4, 5]));

const add4 = (...arguments) => arguments.reduce((a, b) => a + b);
console.log(add4(1, 2, 3, 4));
