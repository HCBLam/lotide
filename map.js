// This function compares 2 arrays to see if they are perfect matches, element for element.
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// This function asserts to see if 2 arrays are equal in value and type.
const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true ?
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) :
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};




// Create a map function that will take 2 arguments.
// Argument 1:  an array that the function will map.
// Argument 2:  a callback function that will operate on each element of the array.
// The map function will return a new array based on the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('- - -');
    results.push(callback(item));
  }
  return results;
};

// The callback function is the inline arrow function:  it takes a word returns the first letter of that word.
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[0]);

console.log(results1);
console.log(results2);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['r', 'o', 'o', 'a', 'o']);
assertArraysEqual(results3, ['g', 'c', 't', 'm', 'o']);




















