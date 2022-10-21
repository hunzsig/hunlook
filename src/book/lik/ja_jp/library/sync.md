## sync 同時発生

> 網易が提供してくれる同期データに関する関数は4つ：
>
> japiは付属しています

```
DzSyncData
DzTriggerRegisterSyncData
DzGetTriggerSyncPlayer
DzGetTriggerSyncData
```

> 原理はサーバ要求応答と同じで、簡単でわかりやすい
>
> 1つの送信、1つの受信（プロセス時間0.1～0.15 sに注意）

#### Gameオブジェクトを直接使用した同期

> 直接japiを呼び出すことはお勧めしません
>
> 2つのセットを使用して、フレームワークを介してスケジューリング同期プロセスの最適化を支援

```lua
-- 送信
sync.send("hzg", { "hunzsig", "オープンソースフレームの作者です" })

-- 受信
sync.receive("hzg", function(syncData)
    echo(syncData.transferData[1] .. "確かに" .. syncData.transferData[2])
end)
```
