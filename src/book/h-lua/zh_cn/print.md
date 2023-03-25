### 调试打印

### 简单调试

```lua
print(123)
print("abc")
print({ 1, 2, 3 })
print(123, "abc")
```

### 详尽调试

```lua
dump({
    "你好",
    string = "世界",
    table = {
        1, 3, 5,
        7, 9, 72
    }
})
```

![Print](/assets/print.png)

### 上线须知

> 使用测试版本上线依然会启用调试，请打包上线版本再上传平台 [参考](/?p=pt)
