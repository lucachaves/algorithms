// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

function sherlockAndAnagrams(s) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const signatures = {}
  let res = 0

  for (const start in s) {
    for (let finish = start; finish < s.length; finish++) {
      let signature = (new Array(alphabet.length)).fill(0)
      for (const letter of s.slice(start, +finish + 1)) {
        signature[letter.charCodeAt() - alphabet[0].charCodeAt()] += 1
      }
      signature = signature.join('')
      if (signatures[signature] === undefined)
        signatures[signature] = 1
      else
        signatures[signature] += 1
      console.log(s.slice(start, +finish + 1))
      console.log(signatures)
    }
  }

  for (const count of Object.values(signatures)) {
    res += count * (count - 1) / 2
  }

  return res
}

console.log(sherlockAndAnagrams('aa'))         //=> 1
console.log(sherlockAndAnagrams('abba'))       //=> 4
// console.log(sherlockAndAnagrams('abcd'))       //=> 0
// console.log(sherlockAndAnagrams('ifailuhkqq')) //=> 3
// console.log(sherlockAndAnagrams('kkkk'))       //=> 10
// console.log(sherlockAndAnagrams('cdcd'))       //=> 5