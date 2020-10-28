const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (const elem of arr1) {
    console.log(arr2[arr1.indexOf(elem)]);
    //console.log(arr1.indexOf(elem));
    console.log(elem);
    if (elem !== arr2[arr1.indexOf(elem)]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion passed: ${arr1} === ${arr2}`)
  }
  else console.log(`⛔⛔⛔ Assertion failed: ${arr1} !== ${arr2}`);
};

const middle = function(arr) {
  let middleArr = [];
  if (arr.length <= 2) return middleArr;
  else if (arr.length % 2 === 0) {
    middleArr.push(arr[arr.length / 2 - 1]);
    middleArr.push(arr[arr.length / 2]);
  }
  else middleArr.push(Math.ceil(arr.length/2));
  return middleArr;
};

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]