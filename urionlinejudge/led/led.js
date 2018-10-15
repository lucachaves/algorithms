// https://www.urionlinejudge.com.br/judge/en/problems/view/1168

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var result = [];
var led = {
  0: 6,
  1: 2,
  2: 5,
  3: 5,
  4: 4,
  5: 5,
  6: 6,
  7: 3,
  8: 7,
  9: 6
}

while (lines.length > 0) {
  const size = lines.shift();
  for (let flag = 0; flag < size; flag++) {
    const number = lines.shift();
    const total = number.split('').reduce((t, l) => t + led[l], 0);
    result.push(total+' leds');
  }
}

console.log(result.join('\n'));