const assertEqual = require('./assertEqual');


// Need to compare 2 arrays and see if they match perfectly, element for element.


const eqArrays = function(array1, array2) {
  // console.log('Array1: ' + array1);
  // console.log('Array2: ' + array2);

  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


module.exports = eqArrays;