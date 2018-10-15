// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

function caesarCipher(s, k) {
  const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const lowerRot = lowerAlphabet.slice(k % 26).concat(lowerAlphabet.slice(0, k % 26))
  const rot = (l) => {
    if (lowerAlphabet.includes(l)) {
      return lowerRot[lowerAlphabet.indexOf(l)]
    } else if (lowerAlphabet.includes(l.toLowerCase())) {
      return lowerRot[lowerAlphabet.indexOf(l.toLowerCase())].toUpperCase()
    } else {
      return l
    }
  }
  return s.split('').map(l => rot(l)).join('')
}

console.log(caesarCipher('middle-Outz', 2)) //=> okffng-Qwvb
console.log(caesarCipher('www.abc.xy', 87)) //=> fff.jkl.gh
console.log(caesarCipher('159357lcfd', 98)) //=> 159357fwzx
console.log(caesarCipher('Always-Look-on-the-Bright-Side-of-Life', 5)) //=> Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj