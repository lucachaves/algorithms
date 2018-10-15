// https://www.urionlinejudge.com.br/judge/en/problems/view/2137

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var result = [];

while (lines.length > 0) {
  let size = lines.shift();
  let temp = [];
  for (let flag = 0; flag < size; flag++) {
    temp.push(lines.shift());
  }
  temp.sort((a, b) => a - b);
  result = result.concat(temp);
}

console.log(result.join('\n'));