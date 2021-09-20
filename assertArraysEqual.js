const eqArrays = require('./eqArrays');


// This function asserts to see if 2 arrays are equal in value and type.
// It will take 2 arrays as arguments.
// It will pass those 2 arrays as arguments to the eqArrays helper function inside.
// The eqArrays helper function will return either true or false, i.e., that the arrays match or not.
// A conditional will check that if eqArrays result is true, log Passed message; if not, log Failed message.
const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true ?
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) :
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};


module.exports = assertArraysEqual;
