// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
  let size = s.length
  for (let i = 0; i < size - 1; i++) {
    if (s[i] === s[i + 1]) {
      s = s.replace(s[i]+s[i], '')
      size -= 2
      i = -1
    }
  }
  return s.length > 0 ? s : 'Empty String'
}

console.log(superReducedString('aaabccddd')) //=> abd
console.log(superReducedString('aa'))        //=> Empty String
console.log(superReducedString('baab'))      //=> Empty String