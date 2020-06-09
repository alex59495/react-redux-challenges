function insertDash(word) {
  // TODO: implement the method and return word with dashes
  const vogal = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y", " "];
  const array = word.split("");
  for (let i = 0; i < array.length - 1; i += 1) {
    if (vogal.includes(array[i]) === false && (vogal.includes(array[i + 1])) === false) {
      array[i] = `${array[i]}-`;
    }
  }
  console.log(array.join(""));
  return array.join("");
}

insertDash("Internationalization");

module.exports = insertDash;
