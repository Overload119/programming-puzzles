// Given an array of distinct numbers find all pairs in the array that equal k

function kPairs(arr, k) {
  var awaitingPair = {};
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];
    if( awaitingPair[ k-currentNumber ] ) {
      result.push('(' + currentNumber + ',' + (k-currentNumber) + ')');
    } else {
      awaitingPair[ arr[i] ] = true;
    }
  }
  return result;
}
