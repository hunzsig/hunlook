### Chat command registration

```lua
-- Command
--- -gg surrender
Game():command("^-gg$", function()
    evtData.triggerPlayer.quit("GG")
end)
--- -apm View player minutes
Game():command("^-apm$", function(evtData)
    echo("Your Apm:" .. evtData.triggerPlayer.apm(), evtData.triggerPlayer)
end)
--- -d [+|-|=][NUMBER]Decrease/Increase/Set Sight Distance
Game():command("^-d [-+=]%d+$", function(evtData)
    local cds = string.explode(" ", string.lower(evtData.chatString))
    local first = string.sub(cds[2], 1, 1)
    if (first == "+" or first == "-" or first == "=") then
        --Sight Distance
        local v = string.sub(cds[2], 2, string.len(cds[2]))
        v = math.abs(tonumber(v))
        if (v > 0) then
            local val = math.abs(v)
            async.call(evtData.triggerPlayer, function()
                if (first == "+") then
                    Camera().distance("+=" .. val)
                elseif (first == "-") then
                    Camera().distance("-=" .. val)
                elseif (first == "=") then
                    Camera().distance(val)
                end
                echo("Sight Distance:" .. Camera().distance(), evtData.triggerPlayer)
            end)
        end
    end
end)
if (DEBUGGING) then
    --- Process control
    Game():command("^-proc [a-zA-Z0-9_]+$", function(evtData)
        local p = string.trim(evtData.matchedString)
        p = string.sub(p, 7, string.len(p))
        local proc
        if (p == "this") then
            proc = ProcessCurrent
        else
            proc = Process(p)
        end
        if (isClass(proc, ProcessClass)) then
            print(p .. "Process reset")
            proc:start()
        end
    end)
end
```
