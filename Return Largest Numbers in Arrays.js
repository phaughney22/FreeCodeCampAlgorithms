function largestOfFour(arr) {
  largest = [];
  for (i=0; i < arr.length; i++){
    arr[i] = arr[i].sort(function(a,b){return b-a;});
    largest.push(arr[i][0]);
    }
    return largest;
  // You can do this!
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);