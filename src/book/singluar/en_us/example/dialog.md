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
        { label = "a", value = 1, hotkey = "Q" },
        { label = "b", value = 2, hotkey = "W" },
        { label = "c", value = 3, hotkey = "E" },
        { label = "d", value = 5 },
    },
    function(evtData)
    
        -- Clean up when the dialog box is no longer used
        evtData.triggerDialog.destroy()
        
        if (evtData.value == 1) then
            --something
        elseif (evtData.value == 2) then
            --something
        elseif (evtData.value == 3) then
            --something
        elseif (evtData.value == 5) then
            --something
        end
        echo("choose: " .. evtData.label .. ", " .. evtData.value)
    end
).show(Player(1))
```

Predefined dialog box, and then the same object can be retrieved according to the title

> For example, in the above dialog box, data can be retrieved without destroy

```lua
Dialog("Selection mode")
```
