var problem = function() {

  var sumOfTheSquares = [];
  var squareOfTheSums = [];

  for (i = 1; i < 101; i++) {
      sumOfTheSquares.push(i*i);
  }

  var totalSumOfTheSquares = sumOfTheSquares.reduce(function(a, b) {
    return a + b;
  });

  for (i = 1; i < 101; i++) {
      squareOfTheSums.push(i);
  }


  var totalSquareOfTheSums = squareOfTheSums.reduce(function(a, b) {
    return a + b;
  });
  var totalSquareOfTheSums = totalSquareOfTheSums * totalSquareOfTheSums;
  console.log(totalSquareOfTheSums - totalSumOfTheSquares)
}

problem();



