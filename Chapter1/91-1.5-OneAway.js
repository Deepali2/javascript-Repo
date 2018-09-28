//there are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings,
//write a function to check if they are one edit(or zero edits away.)





const oneAway = (str1, str2) => {
  let diff = str1.length - str2.length;
  if (diff < 0) {
    //switch the strings so that the longer string is str1
    //also make the diff a positive number
    let temp = str1;
    str1 = str2;
    str2 = temp;  
    diff = -diff;      
  };
  //if lengths differ by more than one then we know that there are more than one edits
  if (diff > 1) return false; 
  //if difference is equal to one then check to see the number of edits
  if (diff === 1) {
   for (let i = 0; i < str1.length; i++) {
     if (str1[i] !== str2[i]) { 
       if (str1[i + 1] !== str2[i]) return false; // example: biale, pale
     }
   } 
  }
  //if difference in length is equal to zero then there should not be more than one character that is different between the two strings
  if (diff === 0) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        count++;
        if (count > 1) return false;
      }
    }
    if (count === 0) return 'the strings are identical';
  }

  return true;
};

//testing
console.log(oneAway('ple', 'pale'));
console.log(oneAway('biale', 'pale'));
console.log(oneAway('bale', 'pale'));
console.log(oneAway('mile', 'pale'));
console.log(oneAway('psle', 'psle'))