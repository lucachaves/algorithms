// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
  let count = 0
  for (let i = 0; i < s.length - m + 1; i++) {
    const sum = s.slice(i, i + m).reduce((a, b) => a + b, 0)
    if (sum === d)
      count++
  }
  return count
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2))    //=> 2
console.log(birthday([1, 1, 1, 1, 1, 1], 3, 2)) //=> 0
console.log(birthday([4], 4, 1))                //=> 1