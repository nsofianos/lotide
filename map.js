const map = function(array, cb) {
  const results = [];
  for (const elem of array) {
    results.push(cb(elem));
  }
  return results;
};

module.exports = map;