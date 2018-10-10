// https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfProgrammer(year) {
  let day
  if (year < 1918) {         //Julian check for leap year
    const isLeapYear = year % 4 == 0
    day = isLeapYear ? 12 : 13
  } else if (year == 1918) { //Special case
    day = 26
  } else {                   //Gregorian check for leap year
    const isLeapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    day = isLeapYear ? 12 : 13
  }
  return `${day}.09.${year}`
}

console.log(dayOfProgrammer(2017)) //=> 13.09.2017
console.log(dayOfProgrammer(2016)) //=> 12.09.2016
console.log(dayOfProgrammer(1800)) //=> 12.09.1800
console.log(dayOfProgrammer(2100)) //=> 13.09.2100