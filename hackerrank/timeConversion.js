// https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  const timeAM = /(\d\d)(:\d{2}:\d{2})AM/
  const timePM = /(\d\d)(:\d{2}:\d{2})PM/
  if (timeAM.test(s)) {
    let hour = s.replace(timeAM, '$1')
    return (hour === '12' ? '00' : hour) + s.replace(timeAM, '$2')
  } else if (timePM.test(s)) {
    let hour = s.replace(timePM, '$1')
    return (hour === '12' ? '12' : 12 + parseInt(hour, 10)) + s.replace(timePM, '$2')
  }
}

console.log(timeConversion('07:05:45PM')) //=> 19:05:45
console.log(timeConversion('12:40:22AM')) //=> 00:40:22
console.log(timeConversion('12:40:22PM')) //=> 12:40:22
console.log(timeConversion('12:05:39AM')) //=> 00:05:39