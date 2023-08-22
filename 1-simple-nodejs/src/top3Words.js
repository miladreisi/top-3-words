const fs = require("fs");
const readline = require("readline");
const stream = require("stream");

function top3Words(text) {
  // Convert the entire text to lowercase
  const lowercaseText = text.toLowerCase();

  // Use regular expression to extract words containing letters and optional apostrophes
  const words = lowercaseText.match(/\b[a-z']+\b/g);

  // Count the occurrences of each word using an object
  const wordCount = {};
  words.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  // Sort the words by their counts in descending order
  const sortedWords = Object.keys(wordCount).sort(
    (a, b) => wordCount[b] - wordCount[a]
  );

  // Get the top 3 most common words
  const topWords = sortedWords.slice(0, 3);

  return topWords;
}

module.exports = top3Words;
