// Given N terms, your task is to find the k most frequent terms from given N terms.

function randomInputData(n) {
  var result = [];
  var words = ['cat', 'hat', 'brat', 'rat', 'snat'];
  for (var i = 0; i < n; i++) {
    var randomWord = words[ Math.floor(Math.random() * words.length) ];
    result[i] = randomWord;
  }
  return result;
}

function getKMostFrequentTerms(k, terms) {
  var termCounter = {};
  var frequencyMap = [];
  var frequencyStack = [];
  for (var i = 0; i < k; i++) {
    frequencyStack[i] = 0;
    frequencyMap[i] = '';
  }
  for (var i = 0; i < terms.length; i++) {
    var currentWord = terms[i];
    if (termCounter[currentWord]) {
      termCounter[currentWord]++;
    } else {
      termCounter[currentWord] = 1;
    }
  }

  for (var term in termCounter) {
    var freq = termCounter[term];
    var index = -1;
    for (var j = 0; j < k; j++) {
      if (freq > frequencyStack[j]) {
        index = j;
      }
    }
    if (index != -1) {
      frequencyStack[index] = freq;
      frequencyMap[index] = term;
    }
  }

  for (var i = k-1; i >= 0; i--) {
    console.log(frequencyMap[i] + ': ' + frequencyStack[i])
  }
}

var randomData = randomInputData(10);
getKMostFrequentTerms(1, randomData);
getKMostFrequentTerms(2, randomData);
getKMostFrequentTerms(3, randomData);
