// https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTheTriplets(a0, a1, a2, b0, b1, b2) {
  const a = [a0, a1, a2]
  const b = [b0, b1, b2]
  let totalA = 0
  let totalB = 0
  a.forEach((e, i) => {
    if (e > b[i])
      totalA += 1
    if (e < b[i])
      totalB += 1
  })
  return [totalA, totalB]
}

console.log(compareTheTriplets(5, 6, 7, 3, 6, 10))     //=> [ 1, 1 ]
console.log(compareTheTriplets(17, 28, 30, 99, 16, 8)) //=> [ 2, 1 ]