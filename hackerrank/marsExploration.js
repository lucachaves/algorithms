// https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(s) {
  let count = 0
  const msg = 'SOS'
  for (const index in s) {
    if (s[index] !== msg[index % 3])
      count++
  }
  return count
}

console.log(marsExploration('SOSSPSSQSSOR')) //=> 3
console.log(marsExploration('SOSSOT'))       //=> 1
console.log(marsExploration('SOSSOSSOS'))    //=> 0