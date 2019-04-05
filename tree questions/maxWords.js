//Given a text find the maximum number of words in a sentence

function solution(S) {
  // write your code in JavaScript ( Node.js 8.9.4)
  //input: string
  //output: number
  //constraints: split words at spaces; split sentences at dots, question marks, exclamation marks
  
  //logic
  //split the text into sentences at dots, question marks, exclamation marks creating an array of sentences
    //go over the sentence. If there is a question mark or an exclamation mark then convert it to to dot
    //split over the dot the dot to get an array of sentences
  //check the number of words in each sentence to return the maxixmum number of words
  let arr = S.split('');
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '?' || arr[i] === '!') {
          arr.splice(i, 1, '.');
      }
  }
  let string = arr.join('');//string with only dots seperating sentences
  let sentences = string.split('.');
  console.log(sentences)
  let max = 0;
  for (let sentence of sentences) {
    sentence = sentence.replace(/\s\s+/g, ' ');
    let subarr = sentence.split(' ');
    if (subarr[0] === '' ) subarr.splice(0, 1);
    let last = subarr.length - 1;
    if (subarr[last] === '') subarr.splice(last, 1);
    if (subarr.length > max) max = subarr.length;
  }
  return max;
}

console.log(solution('Forget  CVs..Save time . x x'));