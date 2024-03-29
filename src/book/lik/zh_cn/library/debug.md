## 调试打印

> **所有的**调试，-r打包后，自动失效，可安心使用
>
> 每个调试时会引起**I/O阻塞**，大量使用时会造成卡顿

### 简单调试

```lua
print(123)
print("abc")
print({ 1, 2, 3 })
print(123, "abc")
print("你好，世界！")
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

### 跟踪调试

```lua
stack()
```

### 强制调试

> must 可判断布尔式，当不成立时程序将直接中止抛出错误及跟踪

```lua
must(isClass(whichUnit, UnitClass)) -- 判断单位是否<Unit>类
must(instanceof(whichButton, FrameClass)) -- 判断按钮是否<Frame>子类
```

### 文件日志

> logger 自动按分钟分段，将数据保存在调试魔兽目录下

```lua
logger("message")
```

### 上线须知

> 使用测试版本上线依然会启用调试，请打包上线版本再上传平台 [参考](/?p=other&n=pt)
