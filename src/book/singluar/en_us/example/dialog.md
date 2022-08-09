## Difficulty selection dialog box

Create a "difficulty selection" dialog box with text as a value, and automatically select the first player to choose

```lua
Dialog(
    "选择难度",
    { "一般困难", "非常困难", "极其困难", "破天荒难" },
    function(evtData)
    
        -- 对话框不再使用则清理
        evtData.triggerDialog.destroy()
        
        if (evtData.value == "非常困难") then
            --搞点事情
        elseif (evtData.value == "极其困难") then
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

Create a "difficulty selection" dialog box with hotkeys, text and values, and give player 1 to choose

```lua
Dialog(
    "选择难度",
    {
        { hotkey = "Q", label = "一般困难", value = 1 },
        { hotkey = "W", label = "非常困难", value = 2 },
        { hotkey = "E", label = "极其困难", value = 3 },
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

Predefined dialog box, and then the same object can be retrieved according to the title

> 如上面的对话框，没有destroy前都可以重新取回数据

```lua
Dialog("选择难度")
```
