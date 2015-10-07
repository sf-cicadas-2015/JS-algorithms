// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


// Write a function that finds the prime numbers up to the square root of input.
// Write a function that returns the factors of an integer, taking an array and the integer as input.

// PRIMES function accepts an integer as input
  // Name an empty array PRIMES
  // Set the floored square root of the input to variable LIMIT
  // (because our case is odd) If input is odd
    // Counter at 3
    // While length of PRIMES is 0
      // If counter is a factor of input
        // Add it to PRIMES array
      //
    //
  // (needs a case for even input) end for now
// end PRIMES



function primes(integer) {
  primes = [1];
  var limit = Math.floor(Math.sqrt(integer));
  if (integer % 2 !== 0) {
    var counter = 3;
    while (primes[primes.length - 1] <= limit) {
      if (integer % counter === 0) {
        primes.push(counter);
      };
      counter += 2
    };
    return primes;
  };
  console.log("Y O U  S H O U L D N ' T  S E E  M E");
};



function factors(primes, integer) {
  console.log("Test");
  console.log(primes);
  console.log(integer);
};


var primes = primes(13195);
factors(primes, 13195);