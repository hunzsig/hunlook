## timer 计时器

#### 一次性计时器

> 一次性计时器可摧毁也可以略写，框架会自动清理
>
> 但为了不在循环计时器中忘记摧毁计时器，建议养成用完即弃的好习惯

```lua
time.setTimeout(3, function(curTimer)
    curTimer.destroy()
    print("3秒已到")
end)
```

#### 循环计时器

> 循环计时器如需要必须手动清理

```lua
local i = 0
time.setInterval(1, function(curTimer)
    i = i + 1
    if (i == 100) then
        curTimer.destroy()
        print("i等于100了")
    end
end)
```

#### 异步计时器

> 框架支持异步计时器
>
> 但不建议跨域操纵计时器，除非你能自己把控异步数据的可靠性

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
