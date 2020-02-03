//to check if a given parenthesis string is valid
//input: string
//output: boolean

const isValid = (str) => {
  const obj = {
    '}': '{',
    ']': '[',
    ')': '(',
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let ele = str[i];
    if (ele === '{' || ele === '[' || ele === '(') {
      stack.push(ele);
    }
    else if (obj[ele] === stack[stack.length - 1]) stack.pop();
    else return false;

  }
  if (stack.length === 0) return true;
  return false;
}

console.log(isValid('{[]{({})}}'));
console.log(isValid("(])"));
console.log(isValid(""));
console.log(isValid("([]{})"));


