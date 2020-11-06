const letterPositions = (sentence) => {
  const results = {};
  let count = 0;
  for (const letter of sentence) {
    if ((letter !== ' ') && (results[letter])) {
      results[letter].push(count);
      count++;
    } else if (letter !== ' ') {
      results[letter] = [count];
      count++;
    }
    else count++;
  }
  return results;
}

module.exports = letterPositions;

