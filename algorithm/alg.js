var threes_fives = function(number){
  var result = 0;
  for(var i=1; i<number; i++){
    if (i%3==0 || i%5==0){
      result+=i
    };
  }
  return result
};

console.log(threes_fives(1000))
