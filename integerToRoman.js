/*
input: number
output: string

make an object with the numerical values as keys and symbols as values
initialze an empty string

place if statements to determine the first strinfg value 
subtract that value from the number and add that symbol to the string
*/

// const intToRoman = (int, str = "") => {
//   //base case
//   if (int === 0) return str;

//   if (int >= 1000) return intToRoman(int - 1000, (str += "M"));
//   if (int >= 900) return intToRoman(int - 900, (str += "CM"));
//   if (int >= 500) return intToRoman(int - 500, (str += "D"));
//   if (int >= 400) return intToRoman(int - 400, (str += "CD"));
//   if (int >= 100) return intToRoman(int - 100, (str += "C"));
//   if (int >= 90) return intToRoman(int - 90, (str += "XC"));
//   if (int >= 50) return intToRoman(int - 50, (str += "L"));
//   if (int >= 40) return intToRoman(int - 40, (str += "XL"));
//   if (int >= 10) return intToRoman(int - 10, (str += "X"));
//   if (int >= 9) return intToRoman(int - 9, (str += "IX"));
//   if (int >= 5) return intToRoman(int - 5, (str += "V"));
//   if (int >= 4) return intToRoman(int - 4, (str += "IV"));
//   if (int >= 1) return intToRoman(int - 1, (str += "I"));
// };

const intToRoman = int => {
  const arr = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"]
  ];
  let str = "";

  for (let i = 0; i < arr.length; i++) {
    const [value, numeral] = arr[i];
    while (int >= value) {
      int -= value;
      str += numeral;
    }
    if (int === 0) return str;
  }
};

console.log(intToRoman(1994));
