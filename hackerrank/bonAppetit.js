// https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  const total = bill
    .filter((a, i) => i !== k)
    .reduce((a, b) => a + b)
  const diff = b - total/2
  return diff === 0 ? 'Bon Appetit' : diff
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12))
console.log(bonAppetit([3, 10, 2, 9], 1, 7))