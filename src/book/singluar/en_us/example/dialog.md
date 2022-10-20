## Difficulty selection dialog box

Create a "difficulty selection" dialog box with text as a value, and automatically select the first player to choose

```lua
Dialog(
    "Selection mode",
    { "A", "B", "C", "D" },
    function(evtData)
    
        -- Clean up when the dialog box is no longer used
        evtData.triggerDialog.destroy()
        
        if (evtData.value == "B") then
            --something
        elseif (evtData.value == "C") then
            --something
        elseif (evtData.value == "D") then
            --something
        else
            --something
        end
        echo("choose: " .. evtData.value)
    end
).show()
```

Create a "difficulty selection" dialog box with hotkeys, text and values, and give player 1 to choose

```lua
Dialog(
    "Selection mode",
    {
        { hotkey = "Q", label = "A", value = 1 },
        { hotkey = "W", label = "B", value = 2 },
        { hotkey = "E", label = "C", value = 3 },
        { hotkey = "R", label = "D", value = 4 },
    },
    function(evtData)
    
        -- Clean up when the dialog box is no longer used
        evtData.triggerDialog.destroy()
        
        if (evtData.hotkey == "Q") then
            --something
        elseif (evtData.hotkey == "W") then
            --something
        elseif (evtData.hotkey == "E") then
            --something
        else
            --something
        end
        echo("choose: " .. evtData.label .. "lv：" .. evtData.value)
    end
).show(Player(1))
```

Predefined dialog box, and then the same object can be retrieved according to the title

> For example, in the above dialog box, data can be retrieved without destroy

```lua
Dialog("Selection mode")
```
