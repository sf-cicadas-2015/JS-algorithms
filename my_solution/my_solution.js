
//--- Solution a ---
var has_matching_parens_a = function(str) {
  return ((str.match(/\(/g) || []).length) === ((str.match(/\)/g) || []).length);
}
//--- Solution a Tests ---------------------------------------------------------
console.log( has_matching_parens_a("(sdd)") == true );
console.log( has_matching_parens_a("(sdd))") == false );
//------------------------------------------------------------------------------

//--- Solution b ---
var has_matching_parens_b = function(str) {
  counter = 0;
  for (i=0;i<str.length;i++) {
    if (str[i].match(/\(/)) { counter++; }
    else if (str[i].match(/\)/)) { counter--; }
    if (counter < 0) { return false; }
  }
  return counter === 0;
}

//--- Solution b Tests ---------------------------------------------------------
console.log( has_matching_parens_b("(sdd)") == true );
console.log( has_matching_parens_b("(sdd))") == false );
//------------------------------------------------------------------------------