function palindromicNumberGenerator(num) {
  // do work here
  let value = 0;
  let steps = 0;

  function checkPalindrome(answer) {
    var str = answer.toString();
    var reverseString = str
      .split("")
      .reverse()
      .join("");
    if (str === reverseString) {
      return (value = parseInt(str));
    } else {
      steps++;
      let newNum = parseInt(str) + parseInt(reverseString);
      return checkPalindrome(newNum);
    }
  }

  checkPalindrome(num);

  return {
    value: value,
    steps: steps
  };
}

module.exports = palindromicNumberGenerator;
