var fib = [0, 1];
var sum = []
for(var i=fib.length; i<4000000; i++) {
    fib[i] = fib[i-2] + fib[i-1];
    if(i % 2 === 0 ){
      sum.push(i);    
    }
  }console.log(sum.reduce(function(a, b) {
    return (a + b); 
  }));
