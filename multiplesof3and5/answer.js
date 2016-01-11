var problem = function() {

  var allLeftNumbers = [];

   for (i = 3; i < 1000; i++) {
      if (i % 3 === 0 || i % 5 === 0 ){
        allLeftNumbers.push(i);
      }
  }


   var totalSum = allLeftNumbers.reduce(function(a, b) {
    return a + b;
  });
   console.log(allLeftNumbers);
   console.log(totalSum)
}

problem();
