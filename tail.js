// A function to return all the elements after the head (i.e., after index 0) of an element.

const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};


module.exports = tail;


// After refactoring:
// const tail = function(arr) {
//   return arr.slice(1);
// };

