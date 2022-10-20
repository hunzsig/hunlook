### 聊天命令註冊

```lua
-- 命令
--- -gg 投降
Game():command("^-gg$", function()
    evtData.triggerPlayer.quit("GG")
end)
--- -apm 查看玩家分鐘操作數
Game():command("^-apm$", function(evtData)
    echo("您的apm為:" .. evtData.triggerPlayer.apm(), evtData.triggerPlayer)
end)
--- -d [+|-|=][NUMBER]減少/增加/設置視距
Game():command("^-d [-+=]%d+$", function(evtData)
    local cds = string.explode(" ", string.lower(evtData.chatString))
    local first = string.sub(cds[2], 1, 1)
    if (first == "+" or first == "-" or first == "=") then
        --視距
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
                echo("視距已設置為：" .. Camera().distance(), evtData.triggerPlayer)
            end)
        end
    end
end)
if (DEBUGGING) then
    --- 流程掌控
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
            print(p .. "流程已重置")
            proc:start()
        end
    end)
end
```
