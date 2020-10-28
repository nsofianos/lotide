const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const elem of arr1) {
    if (elem !== arr2[arr2.indexOf(elem)]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion passed`)
  }
  else console.log(`⛔⛔⛔ Assertion failed`);
};

assertArraysEqual([1,2], [1,"2"]);
