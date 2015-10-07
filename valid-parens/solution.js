function MultipleBrackets(str) { 
  var array = str.split("");
  var r_parens = [];
  var r_sqr = [];
  var num_of_brackets = 0;
  
  for (i=0; i < array.length; i++){
    var char = array[i];
    
    if (char === "("){
      r_parens.push(char);
    }
    else if (char === ")"){
      r_parens.pop();
      num_of_brackets += 1;
    }
    else if (char === "["){
      r_sqr.push(char);
    }
    else if (char === "]"){
      r_sqr.pop();
      num_of_brackets += 1;
    }
  }
  
  if((r_parens.length === 0) && (r_sqr.length === 0) && (num_of_brackets !== 0)){
      return "1 " + num_of_brackets;
  }
  else {
      return 0;
  }
    
}
