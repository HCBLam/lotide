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


assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);


/*
middle([1]);
middle([1, 2]);

middle([1, 2, 3]);
middle([1, 2, 3, 4, 5]);

middle([1, 2, 3, 4]);
middle([1, 2, 3, 4, 5, 6]);
*/
