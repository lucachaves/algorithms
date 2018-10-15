
function countChar(s) {
  return s.split('').map(c => c.charCodeAt()).reduce((a, b) => +a + +b, 0)
}

console.log(countChar('lorem'))