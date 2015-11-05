// Pseudocode
// input: number, num
// output: number, prime, the largest prime of num

// 1. Find the smallest prime of num
// 2. Divide out that prime and store the prime in an array, primes.
// 3. Repeat steps 1 & 2 until the remainser is a prime
// 4. Compare last 2 elements in the array and return the larger of the two.

function isPrime(n){
  if(n < 2){
    return false;
  };

  if(n != Math.round(n)){
    return false;
  };

  var isPrime = true;
  for(var i = 2; i <= Math.sqrt(n); i++){
    if(n % i == 0){
      isPrime = false;
    };
  };

  return isPrime;
};

function getFactors(num) {
  var factors = [];
  for (var i = 2; i < Math.sqrt(num); i++){
    if(num % i == 0){
      factors.push(i);
    };
  };
  return factors;
};

function largestPrime(num){
  var primes = [];
  factors = getFactors(num);
  for (var j = 0; j < factors.length - 1; j++){
    if(isPrime(factors[j])){
      primes.push(factors[j]);
    }
  };
  return primes[primes.length -1];
};

// Test Codes
console.log(largestPrime(13195) === 29)
console.log(largestPrime(240) === 5)

// Final Solution
console.log(largestPrime(600851475143))