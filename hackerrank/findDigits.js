// https://www.hackerrank.com/challenges/find-digits/problem

function findDigits(n) {
  let divisor = 0;
  for (let digit of n.toString()) {
    if (n % digit === 0) divisor += 1;
  }
  return divisor;
}

console.log(findDigits(12)); //=> 2
console.log(findDigits(1012)); //=> 3