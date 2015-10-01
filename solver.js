var nonDistinctPowers = 99*99 // number of numbers in 2..100 is 99.
//Darn it. I totally thought logs were going to be a thing in this... but really I was thinking
// ALL numbers that are are powers of
// 2,3,4..100 that are under 100^100, but really our max with 2 is 2^100

console.log(nonDistinctPowers)

var numberOfRepeated = -1 // negative one because the algrithim will count 2^2
for (var base =2; base <= 10; base++){
  for (var power = 2; power <= 10; power++){
    if (Math.pow(base, power) <= 100) {
      numberOfRepeated += Math.floor(100/power) -1  //-1 because we start at 2
    }
  }
}
// console.log(numberOfRepeated)
var distinctPowers = (nonDistinctPowers - numberOfRepeated)
console.log(distinctPowers)

