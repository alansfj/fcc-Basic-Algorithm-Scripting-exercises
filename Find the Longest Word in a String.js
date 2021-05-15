// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.


function findLongestWordLength(str) {
  let arrWords = str.split(' ')
  let arrLengths = []

  arrWords.forEach(el => {
    arrLengths.push(el.length)
  })

  return Math.max(...arrLengths);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");