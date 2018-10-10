// https://www.hackerrank.com/challenges/richie-rich/problem

function highestValuePalindrome(s, n, k) {
  const ans = []
  const mark = (new Array(n)).fill(0)
  let l = 0
  let r = n - 1

  while (l <= r) {
    if (l == r) {
      ans[l] = s[l]
      break
    }
    if (s[l] == s[r]) {
      ans[l] = s[l]
      ans[r] = s[r]
    } else {
      if (s[l] >= s[r]) {
        mark[r] = 1
        k--
        ans[l] = ans[r] = s[l]
      } else {
        mark[l] = 1
        k--
        ans[l] = ans[r] = s[r]
      }
    }
    l++;
    r--;
  }

  if (k < 0) {
    return -1
  }

  //Maximizing number
  l = 0
  r = n - 1
  while (l <= r) {
    if (l == r) {
      if (ans[l] < '9' && k >= 1)
        ans[l] = '9'
      break
    }
    if (ans[l] < '9') {
      if (mark[l] == 0 && mark[r] == 0 && k >= 2) //not touch before
      {
        k -= 2
        ans[l] = ans[r] = '9'
      } else if ((mark[l] == 1 || mark[r] == 1) && k >= 1) {
        k -= 1
        ans[l] = ans[r] = '9'
      }
    }
    l++
    r--
  }
  return ans.join('')
}

console.log(highestValuePalindrome('3943', 4, 1))   //=> 3993
console.log(highestValuePalindrome('092282', 6, 3)) //=> 992299
console.log(highestValuePalindrome('932239', 6, 2)) //=> 992299
console.log(highestValuePalindrome('0011', 4, 1))   //=> 992299