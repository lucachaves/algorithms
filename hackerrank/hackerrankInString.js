// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

function hackerrankInString(s) {
  const hackerrank = 'hackerrank'
  for (let i = 0, index = 0; i < s.length; i++) {
    if (s.charAt(i) === hackerrank.charAt(index)) {
      index++;
    }
    if (index == hackerrank.length) {
      return 'YES'
    }
  }
  return 'NO'
}

console.log(hackerrankInString('hereiamstackerrank'))                           //=> YES
console.log(hackerrankInString('hackerworld'))                                  //=> NO
console.log(hackerrankInString('hhaacckkekraraannk'))                           //=> YES
console.log(hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt')) //=> NO