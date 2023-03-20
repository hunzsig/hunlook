## 難度選擇對話方塊

建立一個帶文字當作數值的“難度選擇”對話方塊，自動挑選第一位玩家，讓他選

```lua
Dialog(
    "選擇難度",
    { "一般困難", "非常困難", "極其困難", "破天荒難" },
    function(evtData)
    
        -- 對話方塊不再使用則清理
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

建立一個帶熱鍵、文字、數值的“難度選擇”對話方塊，給玩家1，讓他選

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
    
        -- 對話方塊不再使用則清理
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

預定義對話方塊，後續可根據title取回同一個物件

> 如上面的對話方塊，沒有destroy前都可以重新取回資料

```lua
Dialog("選擇難度")
```
