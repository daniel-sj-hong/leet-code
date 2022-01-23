var dominantIndex = function (nums) {
  let max = Math.max(...nums);
  let maxIndex = nums.indexOf(Math.max(...nums));

  for (let i = 0; i < nums.length; i++) {
    let double = nums[i] * 2
    if (maxIndex === i) {
      continue;
    } else if (max < double) {
      return -1
    }
  }
  return maxIndex
};
