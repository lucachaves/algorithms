// https://www.hackerrank.com/challenges/two-characters/problem

function twoCharacters(s) {
  let maxPatternLength = 0
  const letters = s.split('').filter((e, i, a) => a.indexOf(e) === i)
  for (const firstLetter of letters) {
    for (const secondLetter of letters) {
      if (firstLetter !== secondLetter) {
        let patternLength = 0
        let lastSeen
        for (const letter of s.split('')) {
          if ([firstLetter, secondLetter].includes(letter)) {
            if (letter === lastSeen) {
              patternLength = 0
              break;
            } else {
              patternLength++
              lastSeen = letter
            }
          }
        }
        if (patternLength > maxPatternLength)
          maxPatternLength = patternLength
      }
    }
  }
  return maxPatternLength
}

console.log(twoCharacters('beabeefeab')) //=> 5
console.log(twoCharacters('asdcbsdcagfsdbgdfanfghbsfdab')) //=> 8
console.log(twoCharacters('asvkugfiugsalddlasguifgukvsa')) //=> 0