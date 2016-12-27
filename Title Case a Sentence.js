
function titleCase(str) {
  var lowStr = str.toLowerCase();
  var splStr = lowStr.split(" ");
  for (i=0; i < splStr.length; i++){
    splStr[i] = splStr[i].split('');
    splStr[i][0] = splStr[i][0].toUpperCase();
    splStr[i] = splStr[i].join('');
  }
  splStr = splStr.join(' ');
  return splStr;
  
}

titleCase("I'm a little tea pot");
