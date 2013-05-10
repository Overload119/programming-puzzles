// Implement a integer square root function without the use of Math.sqrt

function sqrt(num) {
  if (num < 0) {
    throw new Exception("Nope");
  } else if (num === 1) {
    return 1;
  }
  var guessLow = 0;
  var guessHigh = Math.floor(1 + (num/2));
  while (guessLow < guessHigh) {
    var guessMiddle = Math.floor(guessLow + ((guessHigh + guessLow) / 2));
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
