// https://www.urionlinejudge.com.br/judge/en/problems/view/2157

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var size = lines.shift();
var result = [];

for (var flag = 0; flag < size; flag++) {
  var temp = '';
  var range = lines.shift().split(' ');
  for (var n = +range[0]; n <= +range[1]; n++) {
    temp += n;
  }
  var mirror = temp.split('').reverse().join('')
  result.push(temp + mirror);
}

console.log(result.join('\n'));