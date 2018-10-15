// https://www.hackerrank.com/challenges/making-anagrams/problem

function makingAnagrams(s1, s2) {
  const frequencyA = {}
  const frequencyB = {}
  let deletions = 0

  for (const l of s1) {
    frequencyA[l] = frequencyA[l] ? frequencyA[l] + 1 : 1
  }
  for (const l of s2) {
    frequencyB[l] = frequencyB[l] ? frequencyB[l] + 1 : 1
  }
  for (const l of 'abcdefghijklmnopqrstuvwxyz'.split('')) {
    deletions += Math.abs((frequencyA[l] || 0) - (frequencyB[l] || 0))
  }

  return deletions
}

console.log(makingAnagrams('cde', 'abc')) //=> 4
console.log(makingAnagrams('absdjkvuahdakejfnfauhdsaavasdlkj', 'djfladfhiawasdkjvalskufhafablsdkashlahdfa ')) //=> 19