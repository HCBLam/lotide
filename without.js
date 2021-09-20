
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
  eqArrays(array1, array2) === true ?
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`) :
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
};


// Given an array and a removal criteria array, return a subset of the array not containing the unwanted elements.
// Go thhrough each element of the source array.
// Compare the element to the element(s) in the removal criteria.
// If the source element matches the criteria, remove the source element from the array.
// Return the new array.
// Possible methods to explore:  .splice, .filter(), .map(),



const without = function(source, itemsToRemove) {
  // assigning the values of the source array to the filteredArray so that the source array is not changed during the function.
  let filteredArray = source.slice(0);

  // looping through the nested loop since itemsToRemove can be an array containing multiple elements.
  for (let i = 0; i < filteredArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {

      // conditional:  if source element matches itemsToRemove element...
      if (filteredArray[i] === itemsToRemove[j]) {
        // ...then remove that source element our of the filteredArray array using .splice()
        filteredArray.splice(i, 1);
        // this part was tricky:  the indices of the elements that come after the removal are now all shifted (decreased) by one.
        // i.e., if element 3 is removed, element 4 will now become element 3; so if loop goes on to index 4, new element 3 is skipped.
        // so the counter has to be set back by one so that when it goes onto the next iteration, it includes the shifted elements.
        i--;
        // once the matching element is removed, no need to continue this iteration of the loop so break and start next iteration.
        break;
      }
    }
  }
  return filteredArray;
};





// Test Case:  array of strings against a string
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // we're not testing the new filteredArray results
// We're testing the original array to make sure it was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// Test Case:  aray of numbers against a number
const words2 = without([1, 2, 3], [1]); // => [2, 3]
assertArraysEqual(words2, [2, 3]);

// Test Case:  array of numbers against an array of numbers
const words3 = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual(words3, ["1", "2"]);


