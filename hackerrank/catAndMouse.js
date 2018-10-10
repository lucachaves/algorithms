// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  const da = Math.abs(x - z)
  const db = Math.abs(y - z)
  if (da < db)
    return 'Cat A'
  else if (db < da)
    return 'Cat B'
  else
    return 'Mouse C'
}

console.log(catAndMouse(1, 2, 3)) //=> Cat B
console.log(catAndMouse(1, 3, 2)) //=> Mouse C