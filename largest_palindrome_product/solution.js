// #muliply method
// starting from num = 999, iterate over the elements subtracting 1 each time while the num is larger than 100.
// nest an iteration so that you can find the product of all nums between 100 and 999.
// set a max to 0
//  replace max with product if it #isPalindrome AND it is larger than the max
// #isPalindrome function compares the current integer with the reversed version of the integer. Returns true if they are the same and false if they are not.

function isPalindrome(product) {
  var reverse = product.toString().split("").reverse().join("");
  return product == reverse;
};

var x, y, product, max = 0;

for (x = 999; x > 100; x--) {
    for (y = x; y > 100; y--) {
        product = x * y;
        if (isPalindrome(product)) {
          if( max < product ){
            max = product;
            console.log(x + '*' + y + '=' + product);
          }
        }
    }
}

