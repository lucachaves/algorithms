// https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const applesLength = apples
    .map(apple => apple + a)
    .filter(apple => apple >= s & apple <= t)
    .length
  const orangesLength = oranges
    .map(orange => orange + b)
    .filter(orange => orange >= s & orange <= t)
    .length

  return [applesLength, orangesLength]
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])) //=> [1, 1]