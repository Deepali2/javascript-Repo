//string compression: method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3
//if the 'compresses' string would not become smaller then return the original string
//assume the string has only upper and lower case letters.

const stringCompression = (string) => {
  let str = '';
  let char = string[0];
  let count = 1;
  for (let i = 1; i < string.length + 1; i++) {
    if (string[i] === char) count++;
    else{
      str += char + count;
      char = string[i];
      count = 1;
    }
  }
  return str;
};

console.log(stringCompression('aabbbcccd'));