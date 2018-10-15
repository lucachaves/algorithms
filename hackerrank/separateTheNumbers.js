// https://www.hackerrank.com/challenges/separate-the-numbers/problem

function separateTheNumbers(s) {
  for (let slice = 1; slice <= s.length / 2; slice++) {
    let number = +s.slice(0, slice)
    let sequence = number.toString()
    while (sequence.length < s.length) {
      if (number > Number.MAX_SAFE_INTEGER) {
        // number = BigInt(number) + 1n
        
      } else  {
        number += 1
      }
      sequence += number
    }
    console.log(s.slice(0, slice), sequence, s)
    if (sequence === s) 
      return `YES ${s.slice(0, slice)}`
  }
  return 'NO'
}

// console.log(separateTheNumbers('1234'))   //=> YES 1
// console.log(separateTheNumbers('91011'))  //=> YES 9
// console.log(separateTheNumbers('99100'))  //=> YES 99
// console.log(separateTheNumbers('101103')) //=> NO
// console.log(separateTheNumbers('010203')) //=> NO
// console.log(separateTheNumbers('13'))     //=> NO
// console.log(separateTheNumbers('1'))      //=> NO
// console.log(separateTheNumbers('2'))      //=> NO
// console.log(separateTheNumbers('33'))     //=> NO
// console.log(separateTheNumbers('4445'))   //=> YES 44
// console.log(separateTheNumbers('8889'))   //=> YES 88
// console.log(separateTheNumbers('8910'))   //=> YES 8
console.log(separateTheNumbers('90071992547409929007199254740993')) //=> YES 9007199254740992 (Number.MAX_SAFE_INTEGER - 9007199254740991 - 2**53-1)
// console.log(separateTheNumbers('45035996273704964503599627370497')) //=> YES 4503599627370496
// console.log(separateTheNumbers('22517998136852482251799813685249')) //=> YES 2251799813685248
// console.log(separateTheNumbers('11258999068426241125899906842625')) //=> YES 1125899906842624
// console.log(separateTheNumbers('562949953421312562949953421313'))   //=> YES 562949953421312
// console.log(separateTheNumbers('90071992547409928007199254740993')) //=> NO
// console.log(separateTheNumbers('45035996273704963503599627370497')) //=> NO
// console.log(separateTheNumbers('22517998136852481251799813685249')) //=> NO
// console.log(separateTheNumbers('11258999068426240125899906842625')) //=> NO
// console.log(separateTheNumbers('562949953421312462949953421313'))   //=> NO
