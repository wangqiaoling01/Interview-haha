const price = [30, 20, 35, 40]
const profit = [20, 18, 25, 30]

function test(price, profit) {
  let dp = new Array(price.length).fill(new Array(101).fill(0))

  for (let i = 1; i <= price.length; i++) {
    for (let j = 1; j < 101; j++) {
      if (j - price[i] < 0) {
        // 不选
        dp[i][j] = dp[i - 1][j]
      } else {
        let a = dp[i - 1][j], // 不选
          b = dp[i - 1][j - price[i]] + profit[i] // 选
        dp[i][j] = Math.max(a, b)
      }
      console.log(i, j, dp[i][j])
    }
  }
  return dp[(profit.length - 1, profit.length - 1)]
}
function test1(weight, value, len) {
  const dp = new Array(weight.length).fill(new Array(len + 1).fill(0))
  for (let i = 0; i <= weight.length; i++) {
    for (let j = 1; j <= len; j++) {
      if (j >= weight[i]) {
        dp[i][j] =
          dp[i - 1][j] > dp[i - 1][j - weight[i]] + value[i]
            ? dp[i - 1][j]
            : dp[i - 1][j - weight[i]] + value[i]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
      console.log(dp[i][j])
    }
  }
  console.log(dp)
}
function knapsack(weights, values, W) {
  var n = weights.length
  var f = new Array(n)
  for (var i = 0; i < n; i++) {
    f[i] = []
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j <= W; j++) {
      if (i === 0) {
        //第一行
        f[i][j] = j < weights[i] ? 0 : values[i]
      } else {
        if (j < weights[i]) {
          //等于之前的最优值
          f[i][j] = f[i - 1][j]
        } else {
          f[i][j] = Math.max(f[i - 1][j], f[i - 1][j - weights[i]] + values[i])
        }
      }
    }
  }
  console.log(f)
  console.log(f[n - 1][W])
}
const weight = [2, 2, 6, 5, 4]
const value = [6, 3, 5, 4, 6]
knapsack(weight, value, 10)
