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
  return filteredArr;
};

module.exports = without;