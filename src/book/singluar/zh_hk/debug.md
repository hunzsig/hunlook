## 調試打印

> **所有的**調試，-r打包後，自動失效，可安心使用
>
> 每個調試時會引起**I/O阻塞**，大量使用時會造成卡頓

### 簡單調試

```lua
print(123)
print("abc")
print({ 1, 2, 3 })
print(123, "abc")
print("你好，世界！")
```

### 詳盡調試

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

### 跟蹤調試

```lua
stack()
```

### 強製調試

> must 可判斷佈爾式，當不成立時程序將直接中止拋出錯誤及跟蹤

```lua
must(isObject(whichUnit,"Unit")) -- 判斷單位是否<Unit>
must(instanceof(whichButton,"Frame")) -- 判斷按鈕是否<子Frame>
```

### 文件日誌

> logger 自動按分鍾分段，將數據保存在調試魔獸目錄下

```lua
logger("message")
```

### 上線須知

> 使用測試版本上線依然會啓用調試，請打包上線版本再上傳平臺 [參考](/?p=other&n=pt)
