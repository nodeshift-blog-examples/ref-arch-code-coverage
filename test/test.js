'use strict';

const assert = require('assert');
const { bestBand, addTwoNumbers } = require('../');

describe('testing for coverage', () => {
  it ('should add 2 numbers correctly', () => {
    assert.equal(addTwoNumbers(1,1), 2);
  });

  // Uncomment the below tests to see how coverage works

  it ('should test that phish is the best band', () => {
    assert.equal(bestBand('phish'), 'This is the correct answer');
  });

  it ('should test the beatles are a good band too', () => {
    assert.equal(bestBand('beatles'), 'Yea,  not bad');
  });

  it ('should test that nickelback is not that good', () => {
    assert.equal(bestBand('nickelback'), 'Really?');
  });

  it ('should test that all other bands are pretty good', () => {
    assert.equal(bestBand('khruangbin'), 'Yea, Their pretty good');
  });
});
