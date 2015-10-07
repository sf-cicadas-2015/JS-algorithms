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
    var randomValidLocation = Math.floor(Math.random() * Object.keys(continuations).length);
    var nextContinuation = Object.keys(continuations)[randomValidLocation];

    // console.log(firstContinuation);
    if (nextContinuation != "undefined") {
      fullSentence.push(nextContinuation);
    }

    currentWord = nextContinuation;
  }

  return fullSentence.join(" ");
}

var chain = new MarkovChain;
chain.constructChain("Poetry as an art form may predate literacy");
chain.constructChain("Epic poetry, from the Indian Vedas (1700–1200 BC) and Zoroaster's Gathas to the Odyssey (800–675 BC), appears to have been composed in poetic form to aid memorization and oral transmission, in prehistoric and ancient societies");
chain.constructChain("Other forms of poetry developed directly from folk songs. The earliest entries in the ancient compilation Shijing, were initially lyrics, preceding later entries intended to be read");
chain.constructChain("The oldest surviving epic poem is the Epic of Gilgamesh, from the 3rd millennium BC in Sumer (in Mesopotamia, now Iraq), which was written in cuneiform script on clay tablets and, later, papyrus");
chain.constructChain("The oldest love poem is only slightly younger sitting among Sumerian documents such as a court verdict from 2030 B.C.");
chain.constructChain("Other ancient epic poetry includes the Greek epics Iliad and Odyssey, the Old Iranian books the Gathic Avesta and Yasna, the Roman national epic, Virgil's Aeneid, and the Indian epics Ramayana and Mahabharata");
chain.constructChain("The efforts of ancient thinkers to determine what makes poetry distinctive as a form, and what distinguishes good poetry from bad, resulted in 'poetics'—the study of the aesthetics of poetry");
chain.constructChain("Some ancient poetic traditions; such as, contextually, Classical Chinese poetry in the case of the Shijing (Classic of Poetry), which records the development of poetic canons with ritual and aesthetic importance");
chain.constructChain("More recently, thinkers have struggled to find a definition that could encompass formal differences as great as those between Chaucer's Canterbury Tales and Matsuo Bashō's Oku no Hosomichi, as well as differences in context spanning Tanakh religious poetry, love poetry, and rap");

// console.log("Chain storage:");
// console.log(chain.chainStorage);
// console.log("Starter Words:");
// console.log(chain.starterWords);

for (var i = 0; i < 50; i++) {
  console.log("Generated string: " + chain.generateString() + "\n");
}