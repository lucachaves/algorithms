// https://www.urionlinejudge.com.br/judge/en/problems/view/2356

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var result = [];

while (lines.length > 0) {
  const dna = lines.shift();
  const resistance = lines.shift();
  const isResistance = dna.includes(resistance) ? 'Resistente' : 'Nao resistente';
  result.push(isResistance);
}

console.log(result.join('\n'));