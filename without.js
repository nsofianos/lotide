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


const without = function(arr1, arr2) {
  let filteredArr = [];
  for (const elem of arr1) {
    for (const item of arr2) {
      if (elem === item) {
        break;
      }
      if (arr2.indexOf(item) === arr2.length - 1) {
        filteredArr.push(elem);
      }
    }
  }
  console.log(filteredArr);
  return filteredArr;
};

const words = ["jones", "james", "john"];

without(words, ["james"]);
assertArraysEqual(words, ["jones", "james", "john"]);