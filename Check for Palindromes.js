
function palindrome(str) {
  // Good luck!
  var strSanitized=str.replace(/[^a-zA-Z0-9]/g, '');
  var strSplit = strSanitized.split("");
  var strRevSplit = strSplit.reverse();
  var strRevJoin = strRevSplit.join(""); 
  if ( strRevJoin.toUpperCase() === strSanitized.toUpperCase()){
    return true;
  }
  
  else
    return false;
}



palindrome("eye");