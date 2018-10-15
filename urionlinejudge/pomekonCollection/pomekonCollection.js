// https://www.urionlinejudge.com.br/judge/en/problems/view/2174

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var pokemons = [];

while (lines.length > 0) {
  const size = lines.shift();
  for (let flag = 0; flag < size; flag++) {
    const pokemon = lines.shift();
    if (!pokemons.includes(pokemon))
      pokemons.push(pokemon);
  }
}

console.log('Falta(m) '+(151-pokemons.length)+' pomekon(s).');