//A ransom note can be formed by cutting words out of a magazine to form a new sentence. 
//How would you figure out if a ransom note can be formed from a given magazine?
//Both the ransom note and the magazine are represented by strings

//input: 2 strings
//output: boolean
//constraints: none
//edges: none

//helper function to create a hash table from a string
const makeHashTable = (string) => {
  let hashTable = {};
  for (let i = 0; i < string.length; i++ ) {
      //if there is a space in the string then skip it
      if (string[i] === ' ') {
          continue;
      }
      //if the key already exists then increase the value
      if (hashTable.hasOwnProperty(string[i])) {
          hashTable[string[i]]++;
      } else {
          //create the key if it does not exist
          hashTable[string[i]] = 1;
      }
  }
  return hashTable;
};

//main function
const yesRansom = (ransomStr, magazineStr) => {
    let ransomHT = makeHashTable(ransomStr);
    let magazineHT = makeHashTable(magazineStr);
    for (key in ransomHT) {
        if (!magazineHT.hasOwnProperty(key) || magazineHT[key] < ransomHT[key]) {
            return false;
        }
    }
    return true;
};



//testing
console.log(makeHashTable('skjkhsd8yuihjkertyiuhydswjueiwyiuy   feiufidwyuiysjiiusufuswiufgj uiuis ujiui1234 jj'));
console.log(yesRansom('l  ove', 'e oo 12 vvvvv l'))