// https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(socks) {
  const countSocks = {}
  for (const s of socks) {
    countSocks[s] = countSocks[s] ? countSocks[s] + 1 : 1
  }
  return Object.values(countSocks)
          .reduce((t, c) => t + Math.floor(c / 2), 0)
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])) //=> 3