// Project Euler Problem 1

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.


// Pseudocode
// Start up a loop that will run from 1 to 1000, incrementing by 1 each loop.
// Test whether the number is a multiple of 3 or 5
// If it is, add it to an accumulator
// Return the accumulator at the end of the loop

var sum = 0;
for (var i = 1; i < 1000; i++) {
  if ((i % 3 === 0) || (i % 5 ===)) {
    sum += i;
  };
};

// sum must equal 233168