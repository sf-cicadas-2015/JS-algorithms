var MarkovChain = function() {
  this.chainStorage = {},
  this.starterWords = [];
}

MarkovChain.prototype.constructChain = function(inputString) {
  // Split the sentence into words
  var words = inputString.split(" ");
  // Iterate over the words
  for (var i = 0; i < words.length; i++) {
    var currentWord = words[i],
        nextWord = words[i + 1];

    // Store the first word as the beginning of a potential sentence
    if (i == 0) {
      this.starterWords.push(words[i]);
    }

    // If the word is in storage, access the next word
    if (currentWord in this.chainStorage) {
      // If the next word is associated with the first word
      if (nextWord in this.chainStorage[currentWord].continuations) {
        // Update the probability
        this.chainStorage[currentWord].continuations[nextWord]++;
      } else { // If the next word is not associated with the first word
        // Push the next word onto the list of possible next words
        this.chainStorage[currentWord].continuations[nextWord] = 1;
      }
    } else { // If the word is not already in storage
      // Add a space for the word
      this.chainStorage[currentWord] = {continuations: {}};
      this.chainStorage[currentWord].continuations[nextWord] = 1;
    }
  }
}

MarkovChain.prototype.generateString = function() {
  var fullSentence = [];

  // Start up the initial parameters
  var startingWord = this.starterWords[Math.floor(Math.random() * this.starterWords.length)];
  var currentWord = startingWord;
  var nextWord;

  fullSentence.push(currentWord);

  while (currentWord != "undefined") {
    var continuations = this.chainStorage[currentWord].continuations;
    var firstContinuation = Object.keys(continuations)[0];

    // console.log(firstContinuation);
    fullSentence.push(firstContinuation);
    currentWord = firstContinuation;
  }

  return fullSentence.join(" ");
}

var chain = new MarkovChain;
chain.constructChain("how is the weather today");
chain.constructChain("i wonder who will win the game");
chain.constructChain("how about a game of hopscotch");
chain.constructChain("only you can eat the cereal");

// console.log("Chain storage:");
// console.log(chain.chainStorage);
// console.log("Starter Words:");
// console.log(chain.starterWords);

console.log("Generated string: " + chain.generateString());