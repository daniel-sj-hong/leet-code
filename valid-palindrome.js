var isPalindrome = function (s) {
  let lowercase = s.toLowerCase();
  let container = '';
  var specialChars = `${'`'}"!@#$^&%*()+=-[]\/{}|:;<>'?,._?"`;
  let backwardsContainer = '';

  for (let i = 0; i < lowercase.length; i++) {
    if (lowercase[i] === ' ') {
      continue;
    } else if (specialChars.includes(lowercase[i])) {
      continue;
    } else {
      container += lowercase[i];
    }
  }
  for (let i = container.length - 1; i >= 0; i--) {
    backwardsContainer += container[i];
  }
  if (container === backwardsContainer) {
    return true;
  } else {
    return false;
  }
};
