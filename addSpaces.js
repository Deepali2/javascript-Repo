//add spaces in between camel cased string
const addSpaces = (str) => {
  let spacesAdded = str.replace(/([A-Z])/g, ' $1');
  let allLowerCase = spacesAdded.replace(/[A-Z]/g, ele => ele.toLowerCase());
  let firstLetterCapitalized = allLowerCase.replace(/[a-z]/, ele => ele.toUpperCase());
  return firstLetterCapitalized + '!'
}

console.log(addSpaces('helloWorldItIsMe'))