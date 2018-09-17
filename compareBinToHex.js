//main function
const compareBinToHex = (bin, hex) => {
  let n1 = convertFromBase(bin, 2);
  let n2 = convertFromBase(hex, 16);
  if (n1 < 0 || n2 < 0) {
    return false;
  }
  return n1 === n2;
}

//an object  containing the values of every digit in the binary system
const hash = {
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  'A': 10,
  'B': 11,
  'C': 12,
  'D': 13,
  'E': 14,
  'F': 15    
};

//helper function to convert a digit to a value
const digitToValue = (digit) => {
  if (digit.match(/[a-f]/)) {
    digit = digit.toUpperCase();
  }
  //if an invalid digit then return invalid string  
  if (!digit.match(/[0-9A-F]/)){
    return 'invalid string';
  }
  return hash[digit];
};

let number = 'A0123EF';
console.log(number[2]);
console.log(number.charAt(2))

//helper function to convert a number to a given base
const convertFromBase = (stringNumber, base) => {
  if (base < 2 || (base > 10 && base !== 16)) return -1;
  let value = 0;
  let placeValue = 0;
  for (let i = stringNumber.length -1; i >= 0; i--) {
    let digitValue = digitToValue(stringNumber[i]);
    if(base === 2) {
      if (digitValue >= 10) return 'provided number is invalid';
    }
    value += digitValue * Math.pow(base, placeValue);
    placeValue++;
  }
  return value;
};

console.log(compareBinToHex('1010000110111110', 'a1BE'));
console.log(compareBinToHex('0011178', '3AB'));