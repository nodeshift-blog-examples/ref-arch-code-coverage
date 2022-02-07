'use strict';

function addTwoNumbers(x, y) {
  return x + y;
}

function bestBand(bandName) {
  let answer;
  switch (bandName.toLowerCase()) {
    case 'phish':
      answer = 'This is the correct answer';
      break;
    case 'beatles':
      answer = 'Yea,  not bad';
      break;
    case 'nickelback':
      answer = 'Really?';
      break;
    default:
      answer = 'Yea, Their pretty good';
  }

  return answer;
}

module.exports = {
  addTwoNumbers,
  bestBand
}
