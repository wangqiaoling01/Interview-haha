rowCnt = 0
i = 0
str = 'This utility is a filter which displays the specified files, or the standard input, if no files are specified, in a user specifi'
n = len(str)
print(n)  # str 的长度
while i < n:
    row16 = str[i:i+16]  # 从第i个取16个
    row16_to_int = [ord(c) for c in row16]  # 将 row16 的每个转成对应的十进制整数。
    print('%8x' % i, end=' ')  # 输出
    for j in range(16):
        print('%x' % row16_to_int[j], end=' ')
    print(row16)

    rowCnt += 1
    i += 16
