## sync 同步

> 網易給我們提供的與同步資料有關的函式有4條：
>
> japi已附帶

```
DzSyncData
DzTriggerRegisterSyncData
DzGetTriggerSyncPlayer
DzGetTriggerSyncData
```

> 原理和伺服器請求響應一樣，簡單易懂
>
> 一個發，一個收（注意過程時間0.1~0.15s）

#### 直接使用Game物件的同步

> 並不建議直接呼叫japi
>
> 使用兩組配套，經由框架協助你最佳化排程同步過程

```lua
-- 發
sync.send("hzg", { "hunzsig", "是個開源框架作者" })

-- 收
sync.receive("hzg", function(syncData)
    echo(syncData.transferData[1] .. "確實" .. syncData.transferData[2])
end)
```
