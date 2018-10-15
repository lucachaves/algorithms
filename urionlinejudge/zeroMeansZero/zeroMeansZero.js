// https://www.urionlinejudge.com.br/judge/en/problems/view/1871

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var result = [];

while (lines.length > 0) {
  values = lines.shift().split(' ');
  var sum = values
    .reduce((a, b) => a + +b, 0)
    .toString()
    .replace(/0/g, '');
  if (sum !== '')
    result.push(sum);
}

console.log(result.join('\n'));