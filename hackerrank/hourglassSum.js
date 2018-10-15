// https://www.hackerrank.com/challenges/2d-array/problem

function hourglassSum(arr) {
  let max = Number.NEGATIVE_INFINITY
  for (let r = 0; r < arr.length - 2; r++) {
    for (let c = 0; c < arr.length - 2; c++) {
      const sum = 
        arr[r][c] + arr[r][c + 1] + arr[r][c + 2] + 
        arr[r + 1][c + 1] + 
        arr[r + 2][c] + arr[r + 2][c + 1] + arr[r + 2][c + 2]
      if (sum > max) 
        max = sum
    }
  }
  return max
}

let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]
console.log(hourglassSum(arr)) //=> 19

arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 9, 2, -4, -4, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, -1, -2, -4, 0]
]
console.log(hourglassSum(arr)) //=> 13

arr = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]
console.log(hourglassSum(arr)) //=> 28