var previousCollatz = {};

function collatz_helper(n, c, i) {
  if( previousCollatz[c] != null ) {
    previousCollatz[n] = previousCollatz[c] + i;
    return previousCollatz[c] + i;
  }

  if( c == 1 ) {
    previousCollatz[n] = i + 1;
    return i + 1;
  } else if ( (c%2) == 0 ) {
    return collatz_helper(n, c / 2, ++i);
  } else {
    return collatz_helper(n, 3*c + 1, ++i);
  }
}

function collatz(n) {
  return collatz_helper(n, n, 0);
}

function getLongestChain(upperLimit) {
  var maxChainSize = -1;
  var highestNumber = -1;
  for(var i = 1; i < upperLimit; i++) {
    var chainSize = collatz(i);
    if(chainSize > maxChainSize) {
      maxChainSize = chainSize;
      highestNumber = i;
    }
  }
  return highestNumber;
}

// Get the longest chain for up to 1 million
getLongestChain( 1000000 );
