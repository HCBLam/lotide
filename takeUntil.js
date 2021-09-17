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



// Create a takeUntil function that takes 2 parameters.
// First parameter:  the array to work with.
// Second parameter:  the callback function.

// The function will return a slice of the array with elements starting from the beginning of the array.
// The function should keep going until the callback returns a truthy value (the stopping condition kicks in).
// The callback should only take 1 value:  the item in the array.

// Return an array:     declare a variable and assign it an empty array.
// Loop through the array:    use a for of loop.
// If callback returns truthy value, stop the loop:   use callback in a conditional with a return statement.
// Otherwise, keeping pushing the elements into the final results array.


const takeUntil = function(array, callback) {
  const results = [];

  for (let item of array) {

    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);

















