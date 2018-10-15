// https://www.hackerrank.com/challenges/beautiful-binary-string/problem

function beautifulBinaryString(b) {
  b = b.split('')
  let changes = 0
  for (let i = 0; i < b.length - 2; i++) {
    if (b.slice(i, i + 3).join('') === '010') {
      changes ++
      if (b[i + 3] === '1') {
        b[i + 2] = '1'
      } else {
        b[i + 1] = '0'
      }
    }
  }
  return changes
}

console.log(beautifulBinaryString('0101010'))    //=> 2
console.log(beautifulBinaryString('01100'))      //=> 0
console.log(beautifulBinaryString('0100101010')) //=> 3