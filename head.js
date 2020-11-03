const assertEqual = require('./assertEqual');


const head = function(arr) {
  let firstArg = arr[0];
  return firstArg;
};

assertEqual(head([0,1,2]), 0);