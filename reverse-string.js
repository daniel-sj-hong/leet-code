var reverseString = function (s) {
  let start = 0;
  let end = s.length - 1;

  while (start < end) {
    let container = s[start];
    s[start] = s[end];
    s[end] = container;
    start++
    end--;
  }
};
