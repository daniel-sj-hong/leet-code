var containsDuplicate = function (nums) {
  let memory = {};

  for (let i = 0; i < nums.length; i++) {
    if (memory[nums[i]] === undefined) {
      memory[nums[i]] = null;
    } else {
      return true;
    }
  }

  return false;
};
