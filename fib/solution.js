// First populate the array of fib numbers up to 4,000,000, using iteration
// Then find the even numbers in the fibonacci array
// Then return the sum of the array


var fibArray = function(upperBound){
  var array = [0,1]
  for(i=0;array[array.length-1]<upperBound;i++){
    var b = array[i] + array[i+1]
      array.push(b);
  };
  array.pop();
  return array
};

var evensArray = function(){
  var array = fibArray(4000000);
  var evens = []
  for(i=0;i <= array.length;i++){
    if(array[i] % 2 == 0){
      evens.push(array[i]);
    };
  };
    return evens
};

var sum = function(){
  var evens = evensArray();
   return evens.reduce(function(previous,current){
    return previous + current
  });
};

console.log(sum());

