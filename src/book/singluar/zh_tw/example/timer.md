## timer 秒錶

#### 一次性秒錶

> 一次性秒錶可摧毀也可以略寫，框架會自動清理
>
> 但為了不在循環秒錶中忘記摧毀秒錶，建議養成用完即棄的好習慣

```lua
time.setTimeout(3, function(curTimer)
    curTimer.destroy()
    print("3秒已到")
end)
```

#### 循環秒錶

> 循環秒錶如需要必須手動清理

```lua
local i = 0
time.setInterval(1, function(curTimer)
    i = i + 1
    if (i == 100) then
        curTimer.destroy()
        print("i等於100了")
    end
end)
```

#### 異步秒錶

> 框架支持異步秒錶
>
> 但不建議跨域操縱秒錶，除非你能自己把控異步數據的可靠性

```lua

async.call(Player(1),function()
    time.setInterval(1, function(curTimer)
        print("t1")
    end)
end)

async.call(Player(2),function()
    time.setInterval(1, function(curTimer)
        print("t2")
    end)
end)

```
