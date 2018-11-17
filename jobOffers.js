/*
Psychometric testing is designed to find job-relevant information about an applicant that the
traditional interview process would not uncover. It typically includes a combination of online
aptitude and personality tests that measure cognitive ability and personality traits.
A company has psychometric scores for n candidates, and it will only extend job offers to
candidates with scores in the inclusive range given by [lowerLimit, upperLimit]. Given the list of
scores and a sequence of score ranges, determine how many candidates the company will extend
offers to for each range of scores. For example, if the scores are scores = [1,2,2,3,4] and the limits
are 2 and 4, there are 4 candidates, i.e. those with scores [2,2,3,4] that match the conditions.
Function Description
Complete the jobOffers function in the editor below. The function must return an array of q
integers where the value at each index i denotes the number of candidates in the inclusive range
[lowerLimits[i], upperLimits[]] that the company will extend offers to.
jobOffers has the following parameter(s):
scores[scores[0],...scores[n-1]]: an array of integers
lowerLimit[lowerLimit[0],...lowerLimit[q-1]]: an array of integers
upperLimit[upperLimit[0],...upperLimit[q-1]]: an array of integers
Constraints
1 ≤ n ≤ 10^5
1 ≤ scores[j] ≤ 10^9
1 ≤ q ≤ 10^5
1 ≤ lowerLimits[i] ≤ upperLimits[i] ≤ 10^9

Explanation 0
Given scores = [1, 3, 5, 6, 8], lowerLimits = [2], and upperLimits = [6], perform the following q =
1 query:

0. Find all the scores in the inclusive range [2, 6]. There are three such candidates (i.e., scores
3, 5, and 6), so store 3 in index 0 of the return array.
The function then returns the array [3].
*/


//helper function to make an object from an array counting the number of times each element is being repeated
const countingObject = (array) => {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element > Math.pow(10, 9)) return(`The score at index ${i} is greater than the maximum allowed value of 10^9`);
    if (!obj[element]) obj[element] = 1;
     else obj[element]++;
  }
  return obj;
};

//main function
const jobOffers = (scores, lowerLimits, upperLimits) => {
  let q = [];  //output query array
  let sum = 0;
  if (scores.length < 1) return ("There must be at least one score in the scores array");
  if (scores.length > Math.pow(10, 9)) return ("You have too many scores. Maximum number of scores allowed is 10^9");
  if (lowerLimits.length !== upperLimits.length) return ("length of the lowerLimit array must be equal to the length of the upperLimitArray");
  let obj = countingObject(scores);
  console.log(obj);
  for(let i = 0; i < lowerLimits.length; i++) {
    let min = lowerLimits[i];
    let max = upperLimits[i];
    if (min > max) return (`the element in the lowerLimitArray at index ${i} must be less than the element in the upperLimitArray at the same index ${i}`);
    for (let key in obj) {
      if (key >= min && key <= max) {
        sum += obj[key];
        if (sum > Math.pow(10, 5)) return (`There are more than the maximum allowed candidates of 10^9 for the limits at index${i}`);
      }          
    }    
    q.push(sum);
    sum = 0;
  }
  return q;
};


console.log(jobOffers([], [2], [6]));
console.log(jobOffers([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3], [6]));
console.log(jobOffers([1, 2, 3, 4, 9, 3, 4], [2, 4], [6, 6]));
