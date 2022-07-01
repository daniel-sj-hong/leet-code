var canConstruct = function (ransomNote, magazine) {
  const mag = {};
  const ransom = {};

  for (let i = 0; i < magazine.length; i++) {
    if (!mag[magazine[i]]) {
      mag[magazine[i]] = 1
    } else {
      mag[magazine[i]] = mag[magazine[i]] + 1
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!ransom[ransomNote[i]]) {
      ransom[ransomNote[i]] = 1
    } else {
      ransom[ransomNote[i]] = ransom[ransomNote[i]] + 1
    }
  }

  console.log('ransom: ', ransom)
  console.log('mag: ', mag)

  for (let prop in ransom) {
    console.log(prop)
    if (!(prop in mag)) {
      return false
    }
    if (mag[prop] < ransom[prop]) {
      return false
    }
  }
  return true
};
