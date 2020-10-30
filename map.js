const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1, 2, 3, 4];


const map = function(array, cb) {
  const results = [];
  for (const elem of array) {
    results.push(cb(elem));
  }
  return results;
};

const results1 = map(words, word => word[0]);
const results2 = map(numbers, number => number += 2);

console.log(results1);
console.log(results2);
