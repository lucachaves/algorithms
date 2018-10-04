// https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(ar) {
  let total = 0
  let max = ar[0]
  for (const e of ar) {
    if (e > max)
      max = e
  }
  for (const e of ar) {
    if (e === max)
      total++
  }
  return total
}

console.log(birthdayCakeCandles([3, 2, 1, 3]))                            //=> 2
console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43])) //=> 5