// https://www.hackerrank.com/challenges/gem-stones/problem

function gemstones(arr) {
  return arr
    .map(r => new Set(r.split('')))
    .reduce((i, s) => new Set([...i].filter(x => s.has(x))))
    .size
}

console.log(gemstones(['abcdde', 'baccd', 'eeabg']))                        //=> 2
console.log(gemstones(['basdfj', 'asdlkjfdjsa', 'bnafvfnsd', 'oafhdlasd'])) //=> 4
console.log(gemstones(['vtrjvgbj', 'mkmjyaeav', 'sibzdmsk ']))              //=> 0