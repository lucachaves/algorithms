// https://www.hackerrank.com/challenges/camelcase/problem

function camelCase(s) {
  return s.split('').reduce((t, l) => l.charCodeAt() <= 90 ? t + 1 : t, 0) + 1
}

console.log(camelCase('oneTwoThree'))            //=> 3
console.log(camelCase('saveChangesInTheEditor')) //=> 5