var problem = function(){
  console.log('hello');

  var fibonacci = [1,2];

  for (i = 0; i < 4000000; i++) {
      var addNumb = fibonacci[i] + fibonacci[(i+1)];
      fibonacci.push(addNumb);
      if(fibonacci[fibonacci.length-1] > 4000000){
        break;
      }
  }

  var evenFib = [];

  for (i = 0; i < fibonacci.length-1; i++) {
      if(fibonacci[i] % 2 === 0){
        evenFib.push(fibonacci[i])
      };
  }

   var totalSumofEvenFibs = evenFib.reduce(function(a, b) {
    return a + b;
  });

  console.log(totalSumofEvenFibs);

}

problem();
