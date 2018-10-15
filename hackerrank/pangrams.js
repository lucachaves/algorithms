// https://www.hackerrank.com/challenges/pangrams/problem

function pangrams(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  for (const a of alphabet) {
    if (!(s.includes(a.toUpperCase()) || s.includes(a.toLowerCase()))) {
      return 'not pangram'
    }
  }
  return 'pangram'
}

console.log(pangrams('We promptly judged antique ivory buckles for the next prize')) //=> pangram
console.log(pangrams('We promptly judged antique ivory buckles for the prize'))      //=> not pangram