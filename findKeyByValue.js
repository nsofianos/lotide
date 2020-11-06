const findKeyByValue = (object, value) => {
  for (let val in object) {
    if (object[val] === value) {
      return val;
    }
  }
};

module.exports = findKeyByValue;