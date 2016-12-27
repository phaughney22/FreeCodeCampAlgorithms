
function repeatStringNumTimes(str, num) {
  // repeat after me
  var answer = '';
  if (num > 0){
    for (i=0; i<num; i++){
    answer+=str;
    }
  }
  
  else{
    answer=answer;
  }
  return answer;
}

repeatStringNumTimes("abc", 3);