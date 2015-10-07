// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


// PRIMES function accepts an integer as input
  // Have two arrays, one empty, one with a beginning case 1 (always a factor)
  // Set the floored square root of the input to variable LIMIT
  // (because our case is odd) If input is odd
    // Counter at 3
    // While the last integer of our test number is less than or equal to the limit
      // If counter is a factor of input
        // Add it to test numbers array
      // Increase counter by 2
    // end loop
    // take off first and last elements of array
  // end conditional
  // if input is even
    // add two to beginning of array
  // end conditional
// end PRIMES



function largestPrime(integer) {
  if (integer < 1) {
    console.log("G E T  O U T")
  }
  testNumbers = [1]; primes = [];
  var limit = Math.floor(Math.sqrt(integer));
  console.log(limit);
  if (integer % 2 === 0) {
    testNumbers.push(2);
    console.log("Y O U  S H O U L D N ' T  S E E  M E");
  } else {
    counter = 3;
    while (testNumbers[testNumbers.length - 1] <= limit) {
      if (integer % counter === 0) {
        testNumbers.push(counter);
      };
      counter += 2
    };
    testNumbers.pop();
    testNumbers.shift();
  };
  primes.push(testNumbers[0]);

  console.log(testNumbers);
  return primes;
};



console.log(largestPrime(13195));
console.log(largestPrime(600851475143));