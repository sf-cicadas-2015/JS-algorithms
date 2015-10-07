stock_prices_yesterday = [500, 502, 498, 495, 508, 505]

var extremeValues = {
  returnMin: function(stock_prices_yesterday) {
  var a = stock_prices_yesterday[0]
    for (var i = 1; i < stock_prices_yesterday.length; i++){
      var b = stock_prices_yesterday[i];
      if (b < a) {
        a = b
      }
    };
     return a
  },
  returnMax: function(stock_prices_yesterday) {
  var a = stock_prices_yesterday[0]
    for (var i = 1; i < stock_prices_yesterday.length; i++){
      var b = stock_prices_yesterday[i];
      if (b > a) {
        a = b
      }
    };
     return a
  }
};

var highestProfit = function(stock_prices_yesterday) {
  var profit = extremeValues.returnMax(stock_prices_yesterday) - extremeValues.returnMin(stock_prices_yesterday);
    return profit 
};

console.log(extremeValues.returnMin(stock_prices_yesterday))
console.log(extremeValues.returnMax(stock_prices_yesterday))
console.log(highestProfit(stock_prices_yesterday))