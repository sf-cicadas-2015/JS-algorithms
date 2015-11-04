function sumOfMultiples(num){
  if(num<3){
    return 0;
  }
  else{
    var nums = [];
    for(var i = 1; i < num; i++){
      if( i%3 == 0 || i%5 == 0){
        nums.push(i)
      }
    };
    var sum = nums.reduce(function(a,b){
      return a + b;
    });
    return sum;
  };
};

/*Final Answer*/
console.log(sumOfMultiples(1000) == 233168)

/*Test Code*/
console.log(sumOfMultiples(10) === 23)
console.log(sumOfMultiples(31) === 225)
console.log(sumOfMultiples(1) === 0)
console.log(sumOfMultiples(30) === 195)

