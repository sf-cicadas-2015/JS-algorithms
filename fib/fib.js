var fibonacci = function(){
  var fibonacci_array = [0,1]
  while (fibonacci_array[fibonacci_array.length - 1] + fibonacci_array[fibonacci_array.length - 2] <= 4000000){
    fibonacci_array.push(fibonacci_array[fibonacci_array.length - 1] + fibonacci_array[fibonacci_array.length - 2])
  }
  return fibonacci_array
}

var even_fibonacci = function(){
  fibonacci_array = fibonacci()
  even_fibonacci = fibonacci_array.filter(function(value) {return (value%2 === 0)})
  return even_fibonacci
}

var sum_of_even_fibonacci =  function(){
  even_fibonacci = even_fibonacci()
  return even_fibonacci.reduce(function(a, b){return a+b})
}

console.log(sum_of_even_fibonacci())
