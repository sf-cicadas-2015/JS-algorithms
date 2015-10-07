# JavaScript Whiteboarding Challenge
## From: https://www.interviewcake.com/question/reverse-string-in-place
## Instruction: Write a function to reverse a string in place. "In place" means "without creating a new string in memory."

# Solution

```
myString = "hello"
myString = myString.split('')

for (var i = 0; i < myString.length; i++) {
    myString.splice(i, 0, myString.pop())
}
myString = myString.join('')
console.log(myString)
// prints "elloh"
```
