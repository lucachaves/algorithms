// https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  const result = []
  for (let flag = 1; flag <= n; flag++) {
    result.push(' '.repeat(n - flag) + '#'.repeat(flag))
  }
  return result.join('\n')
}

console.log(staircase(2))
//=> 
//  #
// ##

console.log(staircase(3))
//=>
//   #
//  ##
// ###