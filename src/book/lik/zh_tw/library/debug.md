## 除錯列印

> **所有的**除錯，-r打包後，自動失效，可安心使用
>
> 每個除錯時會引起**I/O阻塞**，大量使用時會造成卡頓

### 簡單除錯

```lua
print(123)
print("abc")
print({ 1, 2, 3 })
print(123, "abc")
print("你好，世界！")
```

### 詳盡除錯

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

![Print](https://gitlab.com/h-document/lik/-/raw/main/assets/print.png)

### 跟蹤除錯

```lua
stack()
```

### 強制除錯

> must 可判斷布林式，當不成立時程式將直接中止丟擲錯誤及跟蹤

```lua
must(isClass(whichUnit, UnitClass)) -- 判斷單位是否<Unit>類
must(instanceof(whichButton, FrameClass)) -- 判斷按鈕是否<Frame>子類
```

### 檔案日誌

> logger 自動按分鐘分段，將資料儲存在除錯魔獸目錄下

```lua
logger("message")
```

### 上線須知

> 使用測試版本上線依然會啟用除錯，請打包上線版本再上傳平臺 [參考](https://lik.hunzsig.org/?p=other&n=pt)
