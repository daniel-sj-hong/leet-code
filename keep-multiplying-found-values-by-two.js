var findFinalValue = function (nums, original) {
  let newValue = 0;

  if (!nums.includes(original)) {
    return original
  } else {
    newValue = original * 2
  }

  while (nums.includes(newValue)) {
    newValue = newValue * 2
  }

  return newValue
};

/*
    create a variable to hold the new value after you multiply by two
    go through the nums array and find original
    if you find original
        times by 2 and set to new value variable

    go through nums array and find new value variable
    if it doesn't exist, return the new value
*/
