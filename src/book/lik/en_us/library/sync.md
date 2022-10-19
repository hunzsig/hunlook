## Sync synchronization

> Netease provided us with 4 functions related to synchronizing data
>
> Japi comes with:

```
DzSyncData
DzTriggerRegisterSyncData
DzGetTriggerSyncPlayer
DzGetTriggerSyncData
```

> The principle is as simple as the server request response
>
> One send, one receive (pay attention to the process time of 0.1~0.15s)

#### Synchronization using game objects directly

> It is not recommended to call japi directly
>
> Use two sets of supporting devices to help you optimize the scheduling synchronization process through the framework

```lua
-- send
sync.send("hzg", { "hunzsig", "是个开源框架作者" })

-- receive
sync.receive("hzg", function(syncData)
    echo(syncData.transferData[1] .. "确实" .. syncData.transferData[2])
end)
```
