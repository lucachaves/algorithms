// https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
  const size = s.length
  const repeat = Math.floor(n / size)
  const remainder = n % size
  const count = s.split('a').length - 1
  const countRemainer = s.slice(0, remainder).split('a').length - 1
  return count * repeat + countRemainer
}

console.log(repeatedString('aba', 10)) //=> 7
console.log(repeatedString('a', 1000000000000)) //=> 1000000000000