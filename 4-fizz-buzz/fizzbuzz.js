var number_list = require('./data.js');

for (i = 0; i < number_list.length; i++){
  number_list.forEach(function(numbers){
    result = [];
    for (i = 1; i < numbers[2]; i++){
      if ((i % numbers[0] == 0) && (i % numbers[1] == 0)){
        result.push('*FB*');
      } else if (i % numbers[0] == 0){
        result.push('*F*');
      } else if (i % numbers[1] == 0){
        result.push('*B*');
      } else {
        result.push(i);
      };
    };
    console.log(result.join(', '));
  });
};
