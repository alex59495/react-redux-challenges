function occurrences(text, word) {
  const arrayWord = text.split(" ");
  let count = 0;
  arrayWord.forEach((wordA) => {
    if (wordA.toLowerCase() === word.toLowerCase()) {
      count += 1;
    }
  });
  return count;
}

module.exports = occurrences;
