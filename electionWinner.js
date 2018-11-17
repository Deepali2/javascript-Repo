/*
In elections that use the ballot box system for voting, each voter writes the name of a candidate
on a ballot and places it in the ballot box. The candidate with the highest number of votes wins
the election. If two or more candidates have the same number of votes, then the tied candidates'
names are ordered alphabetically and the last name in the alphabetical order wins.
For example, votes are in the names ['Joe', 'Mary', 'Mary', 'Joe']. Each candidate received two
votes, but Mary is alphabetically later than Joe, so she wins.

Function Description
Complete the function electionWinner in the editor below. The function must return a string
denoting the name of the winning candidate.
electionWinner has the following parameter(s):
votes[votes[0],...votes[n-1]]: an array of strings representing the names of the candidates as
voted by the i voter.

Constraints
1 ≤ n ≤ 10^4

Sample Input is 
Alex
Michael
Harry
Dave
Michael
Victor
Harry
Alex
Mary
Mary

Explanation 0
The votes tally is:
2 votes: Alex, Harry, Michael, Mary
1 vote: Dave, Victor
The highest vote count is 2, and among those receiving 2 votes, the last name alphabetically is
Michael
*/

let votes = ['Alex', 'Michael', 'Harry', 'Dave', 'Michael', 'Victor', 'Harry', 'Alex', 'Mary', 'Mary'];

//helper function: make a hash table
const hashTable = (array) => {
  let hash = {};
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (!hash[element]) hash[element] = 1;
    else hash[element]++;
  }
  return hash;
};

//helper function to sort

const sortedArray = (arr) => {
 let sorted = arr.sort(function(a, b) {
   if (a < b) return -1;
   else if (a > b) return 1;
   return 0;
 });
 return sorted;
}
console.log(sortedArray(['hi', 'yo', 'whatup', 'bye', 'lol'])); 

const electionWinner = (votes) => {
  let hash = hashTable(votes); 
  let votesArr = Object.keys(hash).map(function(key) {
    return hash[key];
  });
  let maxVotes = 0;
  
  for (let i = 0; i < votesArr.length; i++) {    
    if (maxVotes < votesArr[i]) maxVotes = votesArr[i];
  }

  let maxVotesReceivedArr = [];
  for (let key in hash) {
    if (hash[key] === maxVotes) maxVotesReceivedArr.push(key);
  }
  let sortedMaxVotesReceivedArr = sortedArray(maxVotesReceivedArr)
  console.log(maxVotesReceivedArr)
  return maxVotesReceivedArr[maxVotesReceivedArr.length - 1];
};


console.log(electionWinner(votes));