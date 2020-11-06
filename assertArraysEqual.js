const _ = require('./index');

const assertArraysEqual = function(arr1, arr2) {
  if (_.eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`)
  }
  else console.log(`⛔⛔⛔ Assertion failed: ${arr1} !== ${arr2}`);
};

module.exports = assertArraysEqual;