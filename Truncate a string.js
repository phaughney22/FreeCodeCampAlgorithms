
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num){
    if (num <=3){
      str = str.substr(0,num)+'...';
    }
    else{
      str = str.substr(0,num-3)+'...';
    }
    
  }
  else {
    str=str;
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);