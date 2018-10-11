// https://www.urionlinejudge.com.br/judge/en/problems/view/1002

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function areaOfCircle(radius) {
  const area = 3.14159 * Math.pow(radius, 2);
  return area.toFixed(4);
}

console.log(`A=${areaOfCircle(lines.shift())}`);