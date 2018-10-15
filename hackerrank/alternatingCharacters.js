// https://www.hackerrank.com/challenges/alternating-characters/problem

function alternatingCharacters(s) {
  let deletions = 0
  let size = s.length
  for (let i = 0; i < size; i++) {
    if (s[i] == s[i + 1]) {
      s = s.slice(0, i)+s.slice(i+1)
      size--
      i--
      deletions++
    }
  }
  return deletions
}

console.log(alternatingCharacters('AAAA'))       //=> 3
console.log(alternatingCharacters('BBBBB'))      //=> 4
console.log(alternatingCharacters('ABABABAB'))   //=> 0
console.log(alternatingCharacters('BABABA'))     //=> 0
console.log(alternatingCharacters('AAABBB'))     //=> 4
console.log(alternatingCharacters('AAABBBAABB')) //=> 6
console.log(alternatingCharacters('AABBAABB'))   //=> 4
console.log(alternatingCharacters('ABABABAA'))   //=> 1
console.log(alternatingCharacters('ABBABBAA'))   //=> 3




