function SimpleAdding(num) { 
  
  var list = [];
  for (i=0; i <= num; i++){
    list.push(i);
  }
  num = list.reduce(function(a, b){ return a + b }) 
  return num; 
    
}