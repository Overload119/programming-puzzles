// Given an virtual 4x4 boggle board, and some 4 letter words, determine if the words are in the board
// ex.

// S M E F
// R A T D
// L O N I
// K A F B

// STAR- no
// TONE- no
// NOTE- yes
// SAND- yes
// etc.

var alphabet = 'smefratdlonikafb';
var BOARD = [];
var BOARD_ROWS = 4;
var BOARD_COLS = 4;
for(var i = 0; i < BOARD_COLS; i++) {
  BOARD[i] = [];
  for(var j = 0; j < BOARD_ROWS; j++) {
    BOARD[i][j] = alphabet[0];
    alphabet = alphabet.substring(1);
  }
}

function getNearbyCells(x, y) {
  var result = [];
  if( x < BOARD_COLS-1) {
    result.push({ x: x+1, y: y });
    if( y < BOARD_ROWS-1 ) {
      result.push({ x: x+1, y: y+1 });
    }
    if( y > 0 ) {
      result.push({ x: x+1, y: y-1 });
    }
  }

  if( x > 0 ) {
    if( y < BOARD_ROWS-1) {
      result.push({ x: x-1, y: y+1 });
    }
    result.push({ x: x-1, y: y });
    if( y > 0 ) {
      result.push({ x: x-1, y: y-1 });
    }
  }

  if( y < BOARD_ROWS-1 ) {
    result.push({ x: x, y: y+1 });
  }
  if( y > 0 ) {
    result.push({ x: x, y: y-1 });
  }

  return result;
}

// Returns the location of the letter or false if it could not be found
function findLetter(x, y, l) {
  var nearbyCells = getNearbyCells(x, y)
  for( var i = 0; i < nearbyCells.length; i++ ) {
    var position = nearbyCells[i];
    if( BOARD[position.x][position.y] === l ) {
      return {
        x: position.x,
        y: position.y
      };
    }
  }
  return false;
}

function searchForWord(x, y, word) {
  var l = {x:x, y:y};
  for( var i = 0; i < word.length; i++ ) {
    var letter = word[i];
    l = findLetter(l.x, l.y, letter);

    if( !l ) {
      return false;
    }
  }
  return true;
}

function hasWord(word) {
  // See if the first letter exists by searching the entire board
  var firstLetter = word[0];
  word = word.substring(1);
  var possibleStartLocations = [];
  for(var i = 0; i < BOARD_COLS; i++) {
    for(var j = 0; j < BOARD_ROWS; j++) {
      if(BOARD[i][j] === firstLetter) {
        possibleStartLocations.push({
          x: i,
          y: j
        });
      }
    }
  }

  // Starting from all the possible start locations, find the word
  for( var i = 0; i < possibleStartLocations.length; i++ ) {
    var p = possibleStartLocations[i];
    var canFindWord = searchForWord(p.x, p.y, word);
    if(canFindWord) {
      return true;
    }
  }
  return false;
}
