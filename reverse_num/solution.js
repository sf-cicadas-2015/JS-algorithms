// Pseudocode:
// create an empty array, "reversed"
// Loop taking off the last digit and pushing it into the "reversed"


function reverse_num(num){
  var string = num.toString(), reversed = "";
  for(var i = string.length - 1; i >= 0; i--){
    reversed += string[i]
  };
  return reversed
}

// using enumerables
function reverse_num2(num){
  reversed = num.toString().split("").reverse().join("")
  return reversed
}

// tests
console.log(reverse_num(32243))
console.log(reverse_num2(32243))