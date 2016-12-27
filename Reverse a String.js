
function reverseString(str) {
  var splitUp = str.split('');
  var reversed = splitUp.reverse();
  var joinedAgain = reversed.join('');
  return joinedAgain;
}

reverseString("Greetings from Earth");