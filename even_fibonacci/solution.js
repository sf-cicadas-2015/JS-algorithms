function fib(n){
  var fibNums = [1,2];
  while(fibNums[fibNums.length -1] < n){
    var sumLastTwo = fibNums[fibNums.length -1] + fibNums[fibNums.length -2];
    fibNums.push(sumLastTwo);
  };
  fibNums.pop();
  return fibNums;
};

function evenFibs(num){
  var fibNums = fib(num);
  var nums = [];
  for(var i=0; i < fibNums.length; i++){
    if(fibNums[i] % 2 == 0){
      nums.push(fibNums[i]);
    };
  };
  var sum = nums.reduce(function(a,b){
    return a+b;
  });
  return sum;
};

/*Test Code*/
console.log(evenFibs(4000000) == 4613732)