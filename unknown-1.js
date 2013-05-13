// From an array find the longest set of strings based on their length

var arr = ['mat', 'rat', 'groom', 'broom', 'cat'];

function getSwappable(arr) {
  var wordLengths = {};
  for (var i = 0; i < arr.length; i++) {
    var word = arr[i];
    var key = word.length;
    if (wordLengths[key]) {
      wordLengths[key].push( word );
    } else {
      wordLengths[key] = [ word ];
    }
  }

  var maxKey = 0;
  var maxResult = [];
  for (var key in wordLengths) {
    if (wordLengths[key].length > maxKey) {
      maxKey = wordLengths[key].length;
      maxResult = wordLengths[key];
    }
  }

  return maxResult;
}

getSwappable(arr);
