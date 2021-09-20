const eqArrays = require('./eqArrays');
const assertArraysEqual = ('./assertArraysEqual');


// Create a function that will take 1 array of any length.
// It should return an array containing only the middle-most element(s) of the given array.
// If the array has only 1 or 2 elements, return an empty array.

// To check if an array has only 1 or 2 elements, use a conditional that .length has to be greater than 2.

// To check if odd number of elements:  use conditional with % 2 !== 0.
// Divide by 2 and round up to get the single middle index.  Then access array with that index.

// To check if even number of elements:  use conditional with % 2 === 0.
// Divide by 2 and take that number as well as that number +1 as two middle elements.  Access array with them.

const middle = function(array) {
  let middleElement = [];
  let middleIndex = 0;

  if (array.length < 3) return middleElement;

  if (array.length % 2 !== 0) {
    middleIndex = Math.ceil(array.length / 2) - 1;
    middleElement.push(array[middleIndex]);
    // console.log(middleIndex);
    // console.log(middleElement);
  }

  if (array.length % 2 === 0) {
    middleIndex = array.length / 2 - 1;
    middleElement.push(array[middleIndex], array[middleIndex + 1]);
    // console.log(middleIndex);
    // console.log(middleElement);
  }
  return middleElement;
};


module.exports = middle;
