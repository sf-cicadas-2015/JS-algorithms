// Populate array of Fibonacci Numbers

var fibonacciGenerator = function(limit){
  var fibonacciArray = [1, 1];
  for(i = fibonacciArray.length; fibonacciArray[fibonacciArray.length-1] < limit; i++){
    fibonacciArray.push(fibonacciArray[i-1] + fibonacciArray[i-2]);
  }
  if(fibonacciArray[fibonacciArray.length-1] > limit){
    fibonacciArray.pop()
  }
  return fibonacciArray
}

// Eliminate odd numbers

var evens = function(array){
  return array.filter(function(element){
    return element % 2 == 0
  })
}

// Reduce to sum
var sum = function(array){
  return array.reduce(function(a, b){
    return a + b;
  })
}

// Program Call Method
var fibonacciEvenSum = function(limit){
  var allFibs = fibonacciGenerator(limit)
  var evenFibs = evens(allFibs)
  return sum(evenFibs)
}

console.log(fibonacciEvenSum(4000000))