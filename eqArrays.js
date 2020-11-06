const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const elem of arr1) {
    if (elem !== arr2[arr1.indexOf(elem)]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

