// https://www.hackerrank.com/challenges/migratory-birds/problem

function migratoryBirds(types) {
  const count = []
  let highestFrequency = 1
  for (const type of types) {
    if (count[type])
      count[type] += 1
    else
      count[type] = 1
  }
  for (const type in count) {
    if (count[type] > count[highestFrequency]) {
      highestFrequency = type
    }
  }
  return highestFrequency
}

console.log(migratoryBirds([1, 4, 4, 4, 5, 3]))                //=> 4
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])) //=> 3