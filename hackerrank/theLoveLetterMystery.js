// https://www.hackerrank.com/challenges/the-love-letter-mystery/problem

function theLoveLetterMystery(s) {
  let operations = 0
  for (let i = 0, j = s.length - 1; i < j; i++, j--)
    operations += Math.abs(s[i].charCodeAt() - s[j].charCodeAt())
  return operations
}

console.log(theLoveLetterMystery('abc'))   //=> 2
console.log(theLoveLetterMystery('abcba')) //=> 0
console.log(theLoveLetterMystery('abcd'))  //=> 4
console.log(theLoveLetterMystery('cba'))   //=> 2
