function solution() {
  // write your code in JavaScript (Node.js 8.9.4)
  //
  // you can access DOM Tree using DOM Object Model:
  //    document.getElementById
  // or using jQuery:
  //    $('some_tag')
  //
  // you can write to stdout for debugging purposes, e.g.
  // console.log('this is a debug message');
  const personChecked = document.getElementById("type_person").checked; //true or false
  const companyChecked = document.getElementbyId("type_company").checked; //true or false

  if (personChecked) {
    const firstName = document.getElementById("first_name").innerHTML;
    const lastName = document.getElementById("last_name").innerHTML;
    const email = document.getElementById("email").innerHTML;

    //firstName and lastName are non empty
    if (firstName.length === 0) return false;
    if (lastName.length === 0) return false;

    //email is non empty
    if (email.length === 0) return false;

    //email scheme verification
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

    if (!validEmail) return false;
    else return true;
  } else if (companyChecked) {
    const companyName = document.getElementById("company_name").innerHTML;
    const phone = document.getElementById("phone").innerHTML;

    if (companyName.length === 0) return false;
    if (phone.length === 0) return false;

    const isValidPhone = str => {
      let lgth = str.length;
      if (lgth < 6) return false;
      let re = /\d|\-/;
      for (let i = 0; i < str.length; i++) {
        let ele = str[i];
        let isValid = re.test(ele);
        if (!isValid) return false;
        else continue;
      }
      return true;
    };

    if (!validPhone(phone)) return false;
  }

  return true;
}
