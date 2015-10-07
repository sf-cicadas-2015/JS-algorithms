// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


// Define three functions: one that returns an array of factors of an input integer, one to return the prime numbers of an array of integers, and one to return the largest value in an array of numbers.

// Factor function accepts an argument, which should be an integer, and returns an array
  // Store the floored square root of the integer to set the max value for the array
  // Create an empty array called factors
  // Start a for loop with the counter set to 2 while the counter is less than/eql to the floored sqrt
    // If the input is divisible by the counter, check the counter against the factors array
      // If a number in the factors array is not a factor of the counter being checked
        // Insert it in the factor array
      // End conditional
    // End conditional
  // End loop
  // Return array
// End function

// Primes function accepts an array of integers as its argument, and returns an array of prime numbers
  // Create an empty array called primes
  // If the first element of the array is 2
    // Do stuff... handle later because test case is odd
  // Else
    // Store first element into primes array
    // Loop through input array starting at index 1
      // Loop through prime factors array starting at index 0
        // If input array element is evenly divisible by an integer in the prime array
          // Do nothing
        // Else
          // Add input element to primes array
        //
      //
    //
  //
// end primes function


function factors(integer) {
  factors = [];
  var limit = Math.floor(Math.sqrt(integer));
  console.log(limit);
  if (integer % 2 === 0) {
    factors.push(2);
    console.log("This test should not print.");
  } else {
    // from counter = 3 up to the limit, loop and add 2 to the counter each time
      // if the counter modulo integer is zero
        //  add it to the factors array
      // end conditional
    // end loop
    for(var i=3; i <= limit; i+=2)
      if(integer % i === 0) {
        console.log("This test should print");
        factors.push(i);
      };
    console.log("This test should print.");
    return factors;
  };
};


function primes(integers) {
  console.log("This test should print.");

};


console.log("Testing factors function...");
var factors = factors(13195);
console.log(factors);
console.log("Testing primes function...");
primes(factors);