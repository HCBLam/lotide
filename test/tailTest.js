const assert = require('chai').assert;
const tail = require('../tail');

/*
// TEST CODE
const results = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(results.length, 2);
assertEqual(results[0], 'Lighthouse');
assertEqual(results[1], 'Labs');
*/


describe('#tail', () => {

  it('returns array length of 2 for ["Lighthouse", "Labs"]', () => {
    assert.equal(tail(['Hello', 'Lighthouse', 'Labs']).length, 2)
  })

  it('returns "Lighthouse" for index 0 of ["Lighthouse", "Labs"]', () => {
    assert.equal(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  })

  it('returns "Labs" for index 1 of ["Lighthouse", "Labs"]', () => {
    assert.equal(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  })

  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  })

  it('returns [] for ["5"]', () => {
    assert.deepEqual(tail(["5"]), []);
  })

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  })

})




