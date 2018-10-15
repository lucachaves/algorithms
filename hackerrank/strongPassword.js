// https://www.hackerrank.com/challenges/strong-password/problem

function strongPassword(password) {
  const numbers = "0123456789"
  const lower_case = "abcdefghijklmnopqrstuvwxyz"
  const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const special_characters = "!@#$%^&*()-+"
  let minimumNumber = 0

  if (password.search(new RegExp(`[${numbers}]`)) === -1)
    minimumNumber++
  if (password.search(new RegExp(`[${lower_case}]`)) === -1)
    minimumNumber++
  if (password.search(new RegExp(`[${upper_case}]`)) === -1)
    minimumNumber++
  if (password.search(/[\!\@\#\$\%\^\&\*\(\)\-\+]/) === -1)
    minimumNumber++
  if (password.length < 6) {
    const diff = 6 - password.length
    minimumNumber = minimumNumber <= diff ? diff : minimumNumber
  }

  return minimumNumber
}

console.log(strongPassword('Ab1'))         //=> 3
console.log(strongPassword('#HackerRank')) //=> 1
console.log(strongPassword('AUzs-nV'))     //=> 1