// https://www.hackerrank.com/challenges/a-very-big-sum/problem

function aVeryBigSum(ar) {
  return ar.reduce((s, e) => s + e)
}

console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])) //=> 5000000015