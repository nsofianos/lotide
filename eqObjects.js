const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔ Assertion failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = (obj1, obj2) => {
  let equal = false;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if (Array.isArray(obj1[key])) {
      if (eqArrays(obj1[key], obj2[key])) {
        equal = true;
      }
    } else if (obj1[key] === obj2[key]) {
      equal = true;
    }
  }
  return equal;
};

console.log(eqObjects(ab, abc));
console.log(eqObjects(ab, ba));