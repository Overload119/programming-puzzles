function swap(i, j, array) {
  if ( i === j ) return;
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function sortList(array) {
  var beginning = 0;
  var end = array.length - 1;
  var i = 0;
  while (i <= end) {
    var c = array[i];
    if ( c === 1 ) {
      swap(i, beginning, array);
      beginning++;
      i++;
    }
    else if ( c === 3 ) {
      swap(i, end, array);
      end--;
    }
    else if ( c === 2 ) {
      i++;
    }
  }
  return array;
}

// You are given an array of 1's 2's and 3's. Sort this list so the 1's are first, the 2's come second, and the 3's come third. 

// Ex: Input [1, 3, 3, 2, 1] 
// Output [1, 1, 2, 3, 3] 

// But there is a catch!! The algorithm must be one pass, which means no merge/quick sort. Also no extra list allocations are allowed, which means no bucket/radix/counting sorts. 

// You are only permitted to swap elements.
