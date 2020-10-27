const head = function(arr) {
  let firstArg = arr[0];
  return firstArg;
};






const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5, 4, 3]), 3);