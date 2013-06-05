// Find all permutations of a string

var result = [];

function permutate(string, index) {
  if(index === string.length - 1) {
    result.push(string);
  } else {
    permutate(string, index + 1);

    for(var i = index + 1; i < string.length; i++) {
      var currentLetter = string[index];
      var swapLetter = string[i];

      // Javascript doesn't modify strings in place
      var newString = '';
      for( var j = 0; j < string.length; j++ ) {
        if( j === index ) {
          newString += swapLetter;
        } else if ( j === i ) {
          newString += currentLetter;
        } else {
          newString += string[j];
        }
      }

      permutate(newString, index + 1);
    }
  }
}

function permutateString(string) {
  result = [];
  permutate(string, 0);
  return result;
}
