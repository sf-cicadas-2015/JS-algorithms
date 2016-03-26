function largestPrimePalindrome(number){
  for (var i = number; i > 0; i--){
    var numString = convertToString(i);

    if (isPalindrome(numString) && isPrime(i)){
      return i;
    }
  }
}

function convertToString(number){
  return String(number);
}

function reverseString(string){
  var reversed = [];
  for (var i = 0, strLength = string.length - 1; i <= strLength; i++){
    reversed.push(string.charAt(strLength - i));
  }
  return reversed.join('');
}

function isPalindrome(string){
  return string === reverseString(string);
}

function isPrime(number){
  if (number % 2 === 0){
    return false;
  }

  var checkUpTo = Math.floor(Math.sqrt(number));
  for (i = 3; i <= checkUpTo; i++){
    if (number % i === 0){
      return false;
    }
  }

  return true;
}

console.log(largestPrimePalindrome(1000))
