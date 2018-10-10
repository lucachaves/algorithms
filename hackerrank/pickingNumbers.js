// https://www.hackerrank.com/challenges/picking-numbers/problem

function pickingNumbers(a) {
  let res = 0
  a.sort((a, b) => a - b)
  for (let x = a.length; x > 0; x--) {
    for (let y = x - 1; y >= 0; y--) {
      const slice = a.slice(y, x)
      if (slice.length > res && slice[slice.length - 1] - slice[0] <= 1){
        res = slice.length
      }
    }
  }
  return res
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1])) //=> 3
console.log(pickingNumbers([1, 2, 2, 3, 1, 2])) //=> 5