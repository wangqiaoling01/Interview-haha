dis = [2, 2, 6, 5, 4]
dian = [6, 3, 5, 4, 6]
total_dis = 10
n = len(dis)
dp = [[0]*(total_dis+1)]*n
print(len(dp))
for i in range(n):
    for j in range(total_dis+1):
        if i == 0:
            if j < dis[i]:
                dp[i][j] = 0

            else:
                dp[i][j] = dian[i]
        else:
            if j < dis[i]:
                dp[i][j] = dp[i-1][j]

            else:
                dp[i][j] = max(dp[i-1][j], dp[i-1][j-dis[i]]+dian[i])
print(dp)
print(dp[n-1][total_dis])
