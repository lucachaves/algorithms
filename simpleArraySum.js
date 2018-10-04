// https://www.hackerrank.com/challenges/simple-array-sum/problem

function simpleArraySum(ar) {
  return ar.reduce((s, e) => s + e)
}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11])) //=> 31