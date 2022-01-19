var plusOne = function (digits) {
  let string = '';
  for (let i = 0; i < digits.length; i++) {
    string += digits[i];
  }
  let number = Number(string);
  let newNumber = number + 1;
  let newString = newNumber.toString();
  const array = [];
  for (let i = 0; i < newString.length; i++) {
    array.push(newString[i]);
  }
  return array;
};
