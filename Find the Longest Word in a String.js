
function findLongestWord(str) {
  var indStr = str.split(" ");
  var longWord = indStr.sort(
    function(a,b){
      return b.length - a.length;
    })[0];
  return longWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
