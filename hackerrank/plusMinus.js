// https://www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  const stat = [0, 0, 0]
  arr.forEach((e) => {
    if (e > 0)
      stat[0] += 1
    else if (e < 0)
      stat[1] += 1
    else
      stat[2] += 1
  })

  return stat.map(e => Number(e/arr.length).toFixed(6))
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]))        //=> [0.500000, 0.333333, 0.166667]
console.log(plusMinus([1, 2, 3, -1, -2, -3, 0, 0])) //=> [0.375000, 0.375000, 0.250000]