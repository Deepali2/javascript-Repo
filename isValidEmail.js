const email = "deepaligarg1001@gmail.com";

const validEmail = email => {
  //check if exactly one @
  let atCharac = 0;
  let index;
  for (let i = 0; i < email.length; i++) {
    let ele = email[i];
    if (ele === "@") {
      atCharac++;
      index = i;
    } else continue;
  }
  if (atCharac !== 1) return false;
  let lowerStr = email.substring(0, index);
  let upperStr = email.substring(index + 1);

  if (
    lowerStr.length < 1 ||
    lowerStr.length > 64 ||
    upperStr.length < 1 ||
    upperStr.length > 64
  )
    return false;

  const onlyLettersDigitsDots = str => {
    let re = /[A-z]|\d|\./;
    for (let i = 0; i < str.length; i++) {
      let ele = str[i];
      let isValidCharacter = re.test(ele);
      if (!isValidCharacter) return false;
      else continue;
    }
    return true;
  };

  const isValid = email => {
    let re = /[A-z]|\d|\./;
    for (let i = 0; i < email.length; i++) {
      let ele = email[i];
      let isValidChar = re.test(ele);
      if (!isValidChar) return false;
      else continue;
    }
    return true;
  };

  if (!onlyLettersDigitsDots(lowerStr)) return false;
  if (!onlyLettersDigitsDots(upperStr)) return false;

  return true;
};

console.log(validEmail(email));
