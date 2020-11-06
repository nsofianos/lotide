const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;
