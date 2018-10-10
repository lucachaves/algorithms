// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(a) {
  let primaryDiagonal = 0
  let secondaryDiagonal = 0
  const lenght = a.length
  a.forEach((e, i) => {
    primaryDiagonal += a[i][i]
    secondaryDiagonal += a[i][lenght - 1 - i]
  })
  return Math.abs(primaryDiagonal - secondaryDiagonal)
}

let matrix = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]

console.log(diagonalDifference(matrix)) //=> 15