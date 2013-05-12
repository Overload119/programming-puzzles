// Given a list of integers, your task is to write a program to output an integer-valued list of equal length such that the output element at index 'i' is the product of all input elements except for the input element at 'i'.

function generateList(n) {
  var result = [];
  for (var i = 0; i < n; i++) {
    result.push( Math.floor(Math.random() * 10 + 1) );
  }
  return result;
}

function productList(list) {
  var outputArr = [];

  var grandProduct = 1;
  for (var i = 0, m = list.length; i < m; i++) {
    grandProduct *= list[i];
  }

  for (var i = 0, m = list.length; i < m; i++) {
    outputArr[i] = grandProduct / list[i];
  }

  return outputArr;
}

var randomData = generateList(5);
productList(randomData);
