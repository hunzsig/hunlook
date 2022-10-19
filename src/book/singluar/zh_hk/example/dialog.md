## 難度選擇對話框

創建一個帶文本當作數值的“難度選擇”對話框，自動挑選第一位玩家，讓他選

```lua
Dialog(
    "選擇難度",
    { "一般睏難", "非常睏難", "極其睏難", "破天荒難" },
    function(evtData)
    
        -- 對話框不再使用則清理
        evtData.triggerDialog.destroy()
        
        if (evtData.value == "非常睏難") then
            --搞點事情
        elseif (evtData.value == "極其睏難") then
            --搞點事情
        elseif (evtData.value == "破天荒難") then
            --搞點事情
        else
            --搞點事情
        end
        echo("選擇了：" .. evtData.value)
    end
).show()
```

創建一個帶熱鍵、文本、數值的“難度選擇”對話框，給玩家1，讓他選

```lua
Dialog(
    "選擇難度",
    {
        { hotkey = "Q", label = "一般睏難", value = 1 },
        { hotkey = "W", label = "非常睏難", value = 2 },
        { hotkey = "E", label = "極其睏難", value = 3 },
        { hotkey = "R", label = "破天荒難", value = 4 },
    },
    function(evtData)
    
        -- 對話框不再使用則清理
        evtData.triggerDialog.destroy()
        
        if (evtData.hotkey == "Q") then
            --搞點事情
        elseif (evtData.hotkey == "W") then
            --搞點事情
        elseif (evtData.hotkey == "E") then
            --搞點事情
        else
            --搞點事情
        end
        echo("選擇了：" .. evtData.label .. "等級：" .. evtData.value)
    end
).show(Player(1))
```

預定義對話框，後續可根據title取回同一個對象

> 如上麵的對話框，冇有destroy前都可以重新取回數據

```lua
Dialog("選擇難度")
```