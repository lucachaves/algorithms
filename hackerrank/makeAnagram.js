// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

function makeAnagram(a, b) {
  const frequencyA = {}
  const frequencyB = {}
  let deletions = 0
  
  for (const l of a) {
    frequencyA[l] = frequencyA[l] ? frequencyA[l] + 1 : 1
  }
  for (const l of b) {
    frequencyB[l] = frequencyB[l] ? frequencyB[l] + 1 : 1
  }
  for (const l of 'abcdefghijklmnopqrstuvwxyz'.split('')) {
    deletions += Math.abs((frequencyA[l] || 0) - (frequencyB[l] || 0))
  }

  return deletions
}

console.log(makeAnagram('cde', 'abc')) //=> 4
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')) //=> 30
console.log(makeAnagram('showman', 'woman')) //=> 2

