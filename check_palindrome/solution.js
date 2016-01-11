// Pseudocode:
// Check the length of the string and divide it by 2 (rounding down) in order to figure out how many times to loop checking the first and last characters.
// get rid of
// Loop through the string and check the first and last characters.

function checkPalindrome(string){
  var character = Math.floor(string.length/2), result = true, string = string.replace(/\W/, "");
  for(var i = 0; i <= character; i++){
    if(string[i] != string[string.length - 1 - i]){
      result = false;
    };
  };
  return result;
};

// test code
console.log(checkPalindrome("a") == true)
console.log(checkPalindrome("madam") == true)
console.log(checkPalindrome("hi ih") == true)
console.log(checkPalindrome("nurses") == false)
console.log(checkPalindrome("nurses run") == true)