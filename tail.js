const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};


const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

const result = tail([1,2,3]);
const numbers = [2,3,4];
tail(numbers);

assertEqual(result.length, 2);
assertEqual(result[0], 2);
assertEqual(result[1], 3);

assertEqual(numbers.length, 3);

assertEqual(tail([5]), 0);
assertEqual(tail([]), 0);
tail([]);

