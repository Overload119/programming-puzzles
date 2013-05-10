// Implement a integer square root function without the use of Math.sqrt

function sqrt(num) {
  if (num < 0) {
    throw new Exception("Nope");
  } else if (num === 1) {
    return 1;
  }
  var guessLow = 0; 
  var guessHigh = 1 + Math.floor((num / 2));
  while (guessLow + 1 < guessHigh) {
    var guessMiddle = guessLow + Math.floor(((guessHigh - guessLow) / 2));
    var square = guessMiddle * guessMiddle;
    if (square == num) {
      return guessMiddle;
    } else if (square < num) {
      guessLow = guessMiddle;
    } else {
      guessHigh = guessMiddle;
    }
  }
  return guessLow;
}

// Initial solution which is bad
function sqrt(num) {
  for (var i = 0; i < (Math.floor(num/2) + 1); i++) {
    if (i*i == num) {
      return i;
    }
  }
  return "Square root not found."
}
