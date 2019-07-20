/* 
returns function to determine whether two numbers are adjacent
only works with unique keypad
*/
const getAdjacentFunction = (
  keypad = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [NaN, 0, NaN]]
) => {
  const keymap = new Map();
  if (!keypad.length) {
    throw Error("expecting keyboard to be matrix");
  }
  for (let x = 0; x < keypad.length; x++) {
    if (!keypad[x].length) {
      throw Error("expecting keyboard to be matrix");
    }
    for (let y = 0; y < keypad[x].length; y++) {
      if (keypad[x][y] == NaN) continue;
      keymap.set(keypad[x][y], { x: x, y: y });
    }
  }

  return (num1, num2) => {
    const loc1 = keymap.get(num1);
    if (!loc1) throw Error("num1 not in keypad");
    const loc2 = keymap.get(num2);
    if (!loc2) throw Error("num2 not in keypad");
    if (Math.abs(loc1.x - loc2.x) > 1) return false;
    if (Math.abs(loc1.y - loc2.y) > 1) return false;
    return true;
  };
};

const isEasy = phoneNumber => {
  const phoneNumberFormatted = phoneNumber.replace(/\W/g, "").trim();
  const phoneNumberArray = phoneNumberFormatted.split("").map(e => parseInt(e));
  if (phoneNumber.length <= 1) return true;
  const adjacentFunction = getAdjacentFunction();
  for (let i = 1; i < phoneNumberArray.length; i++)
    if (!adjacentFunction(phoneNumberArray[i - 1], phoneNumberArray[i]))
      return false;
  return true;
};

console.log(isEasy("554-7521"), true);
// console.log(isEasy("254-7096"), true);
// console.log(isEasy("280-6547"), false);
// console.log(isEasy("355-8123"), false);

// console.log(isEasy(""), true);
// console.log(isEasy("3"), true);
