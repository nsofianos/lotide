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
  //check if objects have the same amount of keys
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }

  for (const key in obj1) {
    if (Array.isArray(obj1[key])) { //if key is an array, then..
      if (!eqArrays(Object.keys(obj1), Object.keys(obj2))) { //check if the keys are the same in both objects. If so...
        return false;
      }
      if (!eqArrays(obj1[key], obj2[key])) { //check if the key values are the same
        return false;
      }
    } 
    if ((!Array.isArray(obj1[key])) && obj1[key] !== obj2[key]) { //otherwise, if primitive values, just compare them
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion passed: ${inspect(actual)} === ${inspect(expected)}`)
  }
  else console.log(`⛔⛔⛔ Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`)
};

assertObjectsEqual({a:1}, {b:1}); //false
assertObjectsEqual({a:1, b:2}, {b:2, a:1}) //true
assertObjectsEqual({a:1,b:2}, {b:2,a:2}); //false
assertObjectsEqual({a:1,b:'s'}, {b:'s',a:1}); //true
assertObjectsEqual({a:[1,2], b:[1,2]},{a:[1,2], b:[1,2]}); //true
assertObjectsEqual({a:[1,2], b:[1,2,3]},{a:[1,2], b:[1,2]}); //false
assertObjectsEqual({a:[1,2,3]},{a:[1,2,3,4]}); //false
assertObjectsEqual({a:[1]}, {b:[2]}); //false
assertObjectsEqual({a:1, b:[1]}, {a:1, b:[1]}) //true
assertObjectsEqual({a:1,b:[2]}, {a:[1], b:2}) //false