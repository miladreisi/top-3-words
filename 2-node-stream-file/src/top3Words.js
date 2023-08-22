const fs = require("fs");
const readline = require("readline");

async function processLargeInput(filePath) {
  const wordCount = {};

  // Create a readable stream from the input file
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity, // Read the input line by line
  });

  for await (const line of rl) {
    // Convert each line to lowercase and split into words
    const words = line.toLowerCase().match(/\b[a-z']+\b/g);

    if (words) {
      words.forEach((word) => {
        wordCount[word] = (wordCount[word] || 0) + 1;
      });
    }
  }

  // Convert wordCount object to an array of [word, count] pairs
  const wordCountArray = Object.entries(wordCount);

  // Sort the array by count in descending order
  wordCountArray.sort((a, b) => b[1] - a[1]);

  // Get the top 3 most common words
  const topWords = wordCountArray.slice(0, 3).map((pair) => pair[0]);

  return topWords;
}

// Call the function with the path to your input file
const filePath = "./input.txt";
processLargeInput(filePath)
  .then((topWords) => {
    console.log(topWords);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
