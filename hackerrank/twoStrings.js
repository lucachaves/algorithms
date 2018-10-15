// https://www.hackerrank.com/challenges/two-strings/problem

function twoStrings(s1, s2) {
  s1 = new Set(s1.split(''))
  s2 = new Set(s2.split(''))
  const temp = [...s1]
  return temp.some(x => s2.has(x)) ? 'YES' : 'NO'
}

console.log(twoStrings('hello', 'world'))                          //=> YES
console.log(twoStrings('hi', 'world'))                             //=> NO
console.log(twoStrings('wouldyoulikefries', 'abcabcabcabcabcabc')) //=> NO
console.log(twoStrings('hackerrankcommunity', 'cdecdecdecde'))     //=> YES
console.log(twoStrings('jackandjill', 'wentupthehill'))            //=> YES
console.log(twoStrings('writetoyourparents', 'fghmqzldbc'))        //=> NO
console.log(twoStrings('aardvark', 'apple'))                       //=> YES
console.log(twoStrings('beetroot', 'sandals'))                     //=> NO
