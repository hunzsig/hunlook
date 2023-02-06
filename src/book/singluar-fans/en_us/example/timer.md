## timer

#### One time timer

> The one-time timer can be destroyed or written slightly, and the frame will be cleaned automatically
>
> However, in order not to forget to destroy the timer in the cycle timer, it is recommended to develop the good habit of giving up when used up

```lua
time.setTimeout(3, function(curTimer)
    curTimer.destroy()
    print("Three seconds have passed")
end)
```

#### Cycle timer

> The cycle timer must be cleaned manually if necessary

```lua
local i = 0
time.setInterval(1, function(curTimer)
    i = i + 1
    if (i == 100) then
        curTimer.destroy()
        print("i equals 100")
    end
end)
```

#### Asynchronous timer

> The framework supports asynchronous timers
>
> However, it is not recommended to manipulate timers across domains unless you can control the reliability of asynchronous data by yourself

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
