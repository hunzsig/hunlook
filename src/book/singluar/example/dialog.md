## 难度选择对话框

创建一个带文本当作数值的“难度选择”对话框，自动挑选第一位玩家，让他选

```lua
Dialog(
    "选择难度",
    { "一般困难", "非常困难", "极奇困难", "破天荒难" },
    function(evtData)
    
        -- 对话框不再使用则清理
        evtData.triggerDialog.destroy()
        
        if (evtData.value == "非常困难") then
            --搞点事情
        elseif (evtData.value == "极奇困难") then
            --搞点事情
        elseif (evtData.value == "破天荒难") then
            --搞点事情
        else
            --搞点事情
        end
        echo("选择了：" .. evtData.value)
    end
).show()
```

创建一个带热键、文本、数值的“难度选择”对话框，给玩家1，让他选

```lua
Dialog(
    "选择难度",
    {
        { hotkey = "Q", label = "一般困难", value = 1 },
        { hotkey = "W", label = "非常困难", value = 2 },
        { hotkey = "E", label = "极奇困难", value = 3 },
        { hotkey = "R", label = "破天荒难", value = 4 },
    },
    function(evtData)
    
        -- 对话框不再使用则清理
        evtData.triggerDialog.destroy()
        
        if (evtData.hotkey == "Q") then
            --搞点事情
        elseif (evtData.hotkey == "W") then
            --搞点事情
        elseif (evtData.hotkey == "E") then
            --搞点事情
        else
            --搞点事情
        end
        echo("选择了：" .. evtData.label .. "等级：" .. evtData.value)
    end
).show(Player(1))
```

预定义对话框，后续可根据title取回同一个对象

> 如上面的对话框，没有destroy前都可以重新取回数据

```lua
Dialog("选择难度")
```
