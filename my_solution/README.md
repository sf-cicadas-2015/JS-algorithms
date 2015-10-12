--- Problem Statement -----------------------------------------------------
 Write the function #has_matching_parens that takes a string as an argument
 and returns true if the string has valid parenthesis.
 ex. str = "(I(really)love(al(g)or)ithms)" => true


--- Pseudocode ------------------------------------------------------------
 a. Count occurances of "(" and ")". They should be equal.
 b. Stack version: Scan from left to right, if opening symbol then add
    it to the list, if closing symbol then remove last symbol in the list,
    should end with an empty list if parenthesis are valid.
