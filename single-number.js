var singleNumber = function (nums) {
  const obj = {};

  for (let i of nums) {
    if (!obj[i]) {
      obj[i] = 1;
    } else {
      obj[i]++
    }
  }

  for (let i in obj) {
    if (obj[i] === 1) {
      return i
    }
  }
};
