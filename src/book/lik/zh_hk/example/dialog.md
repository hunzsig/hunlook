## 難度選擇對話框

創建一個帶文本當作數值的“難度選擇”對話框，自動挑選第一位玩家，讓他選

```lua
Dialog(
    "選擇難度",
    { "一般困難", "非常困難", "極其困難", "破天荒難" },
    function(evtData)
    
        -- 對話框不再使用則清理
        destroy(evtData.triggerDialog)
        
        if (evtData.value == "非常困難") then
            --搞點事情
        elseif (evtData.value == "極其困難") then
            --搞點事情
        elseif (evtData.value == "破天荒難") then
            --搞點事情
        else
            --搞點事情
        end
        echo("選擇了：" .. evtData.value)
    end
):show()
```

創建一個帶熱鍵、文本、數值的“難度選擇”對話框，給玩家1，讓他選

```lua
Dialog(
    "選擇難度",
    {
        { label = "一般困難", value = 1, hotkey = "Q" },
        { label = "非常困難", value = 2, hotkey = "W" },
        { label = "極其困難", value = 3, hotkey = "E" },
        { label = "破天荒難", value = 5 },
    },
    function(evtData)
    
        -- 對話框不再使用則清理
        destroy(evtData.triggerDialog)
        
        if (evtData.value == 1) then
            --搞點事情
        elseif (evtData.value == 2) then
            --搞點事情
        elseif (evtData.value == 3) then
            --搞點事情
        elseif (evtData.value == 5) then
            --搞點事情
        end
        echo("選擇了：" .. evtData.label .. "，" .. evtData.value)
    end
):show(Player(1))
```

預定義對話框，後續可根據title取回同一個對象

> 如上面的對話框，沒有destroy前都可以重新取回數據

```lua
Dialog("選擇難度")
```
