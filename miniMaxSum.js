// https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  arr.sort()
  const sum = (x, y) => x + y
  const result = [arr.slice(0, -1).reduce(sum), arr.slice(1).reduce(sum)]
  return result
}

console.log(miniMaxSum([1, 2, 3, 4, 5])) //=> [ 10, 14 ]