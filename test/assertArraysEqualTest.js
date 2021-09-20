const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]); // => true
assertArraysEqual(["x", "y", "z"], ["x", "y", 3]); // => false
