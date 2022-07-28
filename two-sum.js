var twoSum = function (nums, target) {
  const previousValues = {}
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i]
    const neededValue = target - currentNumber
    if (previousValues[neededValue] !== undefined) {
      return [previousValues[neededValue], i]
    } else {
      previousValues[currentNumber] = i
    }
  }
};
