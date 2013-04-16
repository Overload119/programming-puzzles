function collatz_helper(n, i, mem) {
  if( mem[n] != null ) {
    return i + mem[n];
  }

  mem[n] = i+1;

  if( n == 1 ) {
    return i + 1;
  } else if ( (n%2) == 0 ) {
    return collatz_helper(n / 2, ++i, mem);
  } else {
    return collatz_helper( 3*n + 1, ++i, mem);
  }
}

function collatz(n) {
  return collatz_helper(n, 0, {});
}

function get_longest_chain() {
  var maxChainSize = -1;
  var highestNumber = -1;
  for(var i = 1; i < 1000000; i++) {
    var chainSize = collatz(i);
    if(chainSize > maxChainSize) {
      maxChainSize = chainSize;
      highestNumber = i;
    }
  }
  return highestNumber;
}
