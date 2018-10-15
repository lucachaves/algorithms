// https://www.hackerrank.com/challenges/weighted-uniform-string/problem

function weightedUniformStrings(s, queries) {
  const weights = new Set()
  let currentWeight = 0
  let prevLetter = ' '

  for (const letter of s) {
    const weight = letter.charCodeAt() - 96
    if (letter != prevLetter)
      currentWeight = weight
    else
      currentWeight += weight
    prevLetter = letter
    weights.add(currentWeight)
  }
  
  return queries.map(q => weights.has(q) ? 'Yes' : 'No')
}

console.log(weightedUniformStrings('abccddde', [1, 3, 12, 5, 9, 10]))  //=> Yes Yes Yes Yes No No
console.log(weightedUniformStrings('aaabbbbcccddd', [9, 7, 8, 12, 5])) //=> Yes No Yes Yes No