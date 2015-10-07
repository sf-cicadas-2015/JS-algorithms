This is my solution to the [CodeEval](https://www.codeeval.com/) challenge, [Fizz Buzz](https://www.codeeval.com/open_challenges/1/).

It is a slightly more complicated version of the typical Fizz Buzz challenge that requires you to replace numbers based on whether they are divisible by a number.

This adds the layer that you have to allow that number to be dynamimc (any number given as input at the start) instead of your standard, hard-coded, "divisible by 3". The first two numbers are each the dividing number to set for Fizz and Buzz (or "f" and "b" in this case) respectively.

Not only are the two numbers given everytime the function is called, but the function must also be able to count a number given (again, not hard coded into it). This is the third number in the line.

It also requires the function to be able to take multiple lines in a file and output the results again, in multiple lines.

I was not able to pull off the solution that accepts a file itself, but it does work with a string input with separate lines (and spaced out numbers).