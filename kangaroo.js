// https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {
  const time = (x1 - x2) / (v2 - v1)
  const remainder = time - Math.floor(time)
  return time > 0 && remainder === 0 ? 'YES' : 'NO'
}

console.log(kangaroo(0, 3, 4, 2))   //=> YES
console.log(kangaroo(0, 2, 5, 3))   //=> NO
console.log(kangaroo(21, 6, 47, 3)) //=> NO