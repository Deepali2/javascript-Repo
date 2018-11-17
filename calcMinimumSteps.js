/*
Problem Statement:
We have two strings A and B with the same super set of characters. We need to change these strings to obtain two equal strings. In each move we can perform one of the following operations:

1. swap two consecutive characters of a string  
2. swap the first and the last characters of a string
A move can be performed on either string.
What is the minimum number of moves that we need in order to obtain two equal strings?
*/

let memory = {};


const minStepsEqualStrs = (str1, str2) => {
  calcMinimumSteps(str1, 0);
  return memory[str2];
};
console.log(minStepsEqualStrs("abcba", "cbbaa"));

function swap(str, i, j) {
  var s = str.split("");
  s[i] = str[j];
  s[j] = str[i];
  return s.join("");
}

function calcMinimumSteps(current, stepsCount)
{  
  if (typeof(memory[current]) !== "undefined") {
     if (memory[current] > stepsCount) {
         memory[current] = stepsCount;
     } else if (memory[current] < stepsCount) {
         stepsCount = memory[current];
     }
  } else {
     memory[current] = stepsCount;    
      
     for (var i = 0; i < current.length - 1; ++i) {      
         calcMinimumSteps(swap(current, i, i + 1), stepsCount+1);         
     }
     calcMinimumSteps(swap(current, 0, current.length-1), stepsCount+1); 
  }
  console.log(memory)
}