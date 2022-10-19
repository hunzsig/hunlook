## async 異步

#### 本地玩家調用

```lua
async.call(PlayerLocal(), function()
    print("hello")
end)
```

#### 單獨玩家1異步調用

```lua
async.call(Player(1), function()
    print("hello")
end)
```

#### 異步隨機整數

```lua
async.call(PlayerLocal(), function()
    print(async.rand(0, 1000))
end)
```
