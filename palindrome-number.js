var isPalindrome = function (x) {
  let convertedString = x.toString();
  let string1 = '';
  let string2 = '';
  for (let i = 0; i < convertedString.length; i++) {
    string1 += convertedString[i];
  }
  for (let i = string1.length - 1; i >= 0; i--) {
    string2 += string1[i];
  }
  if (string1 === string2) {
    return true
  } else {
    return false
  }
};
