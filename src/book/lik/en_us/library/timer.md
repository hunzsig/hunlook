## Timer

#### One time timer

> The one-time timer can be destroyed or sketched, and the framework will be automatically cleaned
>
> But in order not to forget to destroy the timer in the cycle timer, it is recommended to develop the good habit of discarding the timer when it is used up

```lua
time.setTimeout(3, function(curTimer)
    destroy(curTimer)
    print("3 seconds have arrived")
end)
```

#### Cycle Timer

> The cycle timer must be cleaned manually if necessary

```lua
local i = 0
time.setInterval(1, function(curTimer)
    i = i + 1
    if (i == 100) then
        destroy(curTimer)
        print("i equals 100")
    end
end)
```

#### Asynchronous timer

> The framework supports asynchronous timers
>
> However, it is not recommended to operate timers across domains unless you can control the reliability of asynchronous data yourself

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

#### Modify timer time

> The framework supports modifying timer settings

```lua
local t = time.setTimeout(3, function(curTimer) end)
t:period(2) -- Modify the cycle to 2 seconds (note that when the cycle is less than the current remaining time, the remaining time automatically changes to the set cycle time)
t:remain(9) -- Modify the remaining time to 9 seconds [the actual effect is 3 seconds] (note that when the remaining time is greater than the cycle, only the maximum cycle time can be set)
t:period(10) -- The modification cycle is 10 seconds
t:remain(9) -- 修改剩余为9秒
```
