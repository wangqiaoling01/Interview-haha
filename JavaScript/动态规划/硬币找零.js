/**
 *
 * @param {Array} coins
 * @param {Number} amount
 */
function minCoinChange(coins, amount) {
  const cache = []

  const makeChange = (value) => {
    if (!value) return []

    if (cache[value]) return cache[value]

    let min = [],
      newMin,
      newAmount
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      newAmount = value - coin
      if (newAmount >= 0) {
        newMin = makeChange(newAmount)
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin)
        console.log('new Min ' + min + ' for ' + amount)
      }
    }
    return (cache[value] = min)
  }

  return makeChange(amount)
}
let res = minCoinChange([1, 5, 10, 25], 36)
console.log(res)
