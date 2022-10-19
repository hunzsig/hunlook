## Difficulty Selection Dialog

Create a "difficulty selection" dialog box with text as a numerical value, and automatically select the first player to
select

```lua
Dialog(
    "Selection mode",
    { "a", "b", "c", "d" },
    function(evtData)
    
        -- Clean up when the dialog box is no longer used
        destroy(evtData.triggerDialog)
        
        if (evtData.value == "b") then
            --something
        elseif (evtData.value == "c") then
            --something
        elseif (evtData.value == "d") then
            --something
        else
            --something
        end
        echo("choose: " .. evtData.value)
    end
):show()
```

Create a "difficulty selection" dialog box with hotkeys, text and numerical values, and give the player 1 to choose

```lua
Dialog(
    "Selection mode",
    {
        { hotkey = "Q", label = "a", value = 1 },
        { hotkey = "W", label = "b", value = 2 },
        { hotkey = "E", label = "c", value = 3 },
        { hotkey = "R", label = "d", value = 4 },
    },
    function(evtData)
    
        -- Clean up when the dialog box is no longer used
        destroy(evtData.triggerDialog)
        
        if (evtData.hotkey == "Q") then
            --something
        elseif (evtData.hotkey == "W") then
            --something
        elseif (evtData.hotkey == "E") then
            --something
        else
            --something
        end
        echo("choose: " .. evtData.label .. "lv:" .. evtData.value)
    end
):show(Player(1))
```

Predefine the dialog box, and then retrieve the same object according to the title

> For example, in the above dialog box, data can be retrieved without destroy

```lua
Dialog("Selection mode")
```
