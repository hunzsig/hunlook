## async 非同步

#### 本地玩家呼叫

```lua
async.call(PlayerLocal(), function()
    print("hello")
end)
```

#### 單獨玩家1非同步呼叫

```lua
async.call(Player(1), function()
    print("hello")
end)
```

#### 非同步隨機整數

```lua
async.call(PlayerLocal(), function()
    print(async.rand(0, 1000))
end)
```
