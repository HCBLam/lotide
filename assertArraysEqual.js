// This function compares 2 arrays to see if they are perfect matches, element for element.
// It will take 2 arrays as arguments.
// First it checks that both arrays have the same length; if not, arrays are not perfect matches.
// Second, it loops through the *same* index for *both* arrays at the same time to check that iterated element.
// If the 2 current elements are not strictly equal, then return false and stop the function.
// If the 2 current elements are strictly equal, go onto the next index iteration and check.
// If the loop is done and all elements match, then return true that the arrays are perfect matches.
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
// It will take 2 arrays as arguments.
// It will pass those 2 arrays as arguments to the eqArrays helper function inside.
// The eqArrays helper function will return either true or false, i.e., that the arrays match or not.
// A conditional will check that if eqArrays result is true, log Passed message; if not, log Failed message.
const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true ?
    console.log(`✅ Assertion Passed: ${array1} === ${array2}`) :
    console.log(`❌ Assertion Failed: ${array1} !== ${array2}`);
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]); // => true
assertArraysEqual(["x", "y", "z"], ["x", "y", 3]); // => false
