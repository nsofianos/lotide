const takeUntil = function(array, cb) {
  let results = [];
  for (const elem of array) {
    if (!cb(elem)) results.push(elem);
    else break;
  }
  return results;
};

module.exports = takeUntil;