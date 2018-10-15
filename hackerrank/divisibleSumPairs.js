// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

function divisibleSumPairs(n, k, ar) {
  let pairs = 0
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      const remainder = (ar[x] + ar[y]) % k
      if (x < y && remainder === 0) {
        pairs++
      }
    }
  }
  return pairs
}

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])) //=> 3
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])) //=> 5