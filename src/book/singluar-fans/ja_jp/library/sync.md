## sync 同時発生

> ネットワークが提供しやすい同期データに関する関数は4つあります：
>
> japiは付属しています

```
DzSyncData
DzTriggerRegisterSyncData
DzGetTriggerSyncPlayer
DzGetTriggerSyncData
```

>原理はサーバ要求応答と同じでわかりやすい
>
>1つの送信、1つの受信（プロセス時間0.1～0.15 sに注意）

#### Gameオブジェクトを直接使用した同期

>japiを直接呼び出すことはお勧めしません
>
>2つのセットを使用して、フレームワークを介してスケジューリング同期プロセスの最適化を支援

```lua
-- 髪を出す
sync.send("hzg", { "hunzsig", "是个开源框架作者" })

-- 受け取る
sync.receive("hzg", function(syncData)
    echo(syncData.transferData[1] .. "确实" .. syncData.transferData[2])
end)
```
