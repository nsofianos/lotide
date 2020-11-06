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

module.exports = middle;