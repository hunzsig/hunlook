## timer 計時器

#### 一次性計時器

> 一次性計時器可摧毀也可以略寫，框架會自動清理
>
> 但為了不在循環計時器中忘記摧毀計時器，建議養成用完即棄的好習慣

```lua
time.setTimeout(3, function(curTimer)
    destroy(curTimer)
    print("3秒已到")
end)
```

#### 循環計時器

> 循環計時器如需要必須手動清理

```lua
local i = 0
time.setInterval(1, function(curTimer)
    i = i + 1
    if (i == 100) then
        destroy(curTimer)
        print("i等於100了")
    end
end)
```

#### 異步計時器

> 框架支持異步計時器
>
> 但不建議跨域操縱計時器，除非你能自己把控異步數據的可靠性

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

#### 修改計時器時間

> 框架支持修改計時器的設定

```lua
local t = time.setTimeout(3, function(curTimer) end)
t:period(2) -- 修改週期為2秒（注意當週期小於當前剩餘時間時，剩餘時間自動變為設定的週期時間）
t:remain(9) -- 修改剩餘為9秒[實際效果為3秒]（注意當剩餘時間大於週期時，只能最大設定為週期時間）
t:period(10) -- 修改週期為10秒
t:remain(9) -- 修改剩餘為9秒
```
