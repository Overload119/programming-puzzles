// Given an unordered list of N elements, write a function to find the top four elements of the given list. Make sure your function runs in linear time O(N).

function makeList(size) {
  var list = [];
  for (var i = 0; i < size; i++) {
    list[i] = Math.floor(Math.random() * 100000);
  }
  // Put the top four in random places in the array
  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor( Math.random() * size );
    list[randomIndex] = 100000 + i;
  }
  return list;
}

function findTopFour(list) {
  var topFour = [0, 0, 0, 0];
  for (var i = 0; i < list.length; i++) {
    var index = -1;
    var currentNum = list[i];
    for (var j = 0; j < 4; j++) {
      if (currentNum > topFour[j]) {
        index = j;
        break;
      }
    }
    if (index != -1) {
      for (var j = 3; j > index; j--) {
        topFour[j] = topFour[j - 1];
      }
      topFour[index] = currentNum;
    }
  }
  return topFour;
}

var list = makeList(100);
findTopFour(list);
