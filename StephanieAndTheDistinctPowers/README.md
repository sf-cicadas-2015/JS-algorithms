## Distinct Powers

Question: How many distinct powers are there among all the powers in matrix

2^2, 2^3 .... 2^100
3^2, 3^3 .... 3^100
..
..
100^2, 100^3 ....100^100


#explain the problem better:
by distinct power we mean numbers that are uniqu. (if you called .uniq! on
the array of all of them in ruby you'd get the answer) such as 2^4 == 4^4 == 16,
so 16 would only be counted once.


##Solution

First) How many powers are there?

99*99 = 9801

# why 99 * 99?

I initially had been thinking I had to take the log base (each number between
2 and 100) of 100^100 which would actually give me the total number of times
that whichever number we are talking about (let's say 2) can be raised a power
under 100^100. In the case of 2, it's 664. AKA a lot. BUT really, we *only* want
to look at the first 100. But minus one because 2 through 100 discounts 1.

Second) Find the number of repeated, aka find the numbers which are under 100
that are powers (4,8,9,...81,100)

Third) For each of THOSE numbers, divide 100 by their power (2^100 == 4^50 so
all 50 of those powers can be disregaurded as already accounted for except for
1) and subtract one.

Fourth) Take the number of disregaurdable powers and subtract that from the
total number of powers.

Answer: 9183
