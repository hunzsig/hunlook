## async 异步

#### 本地玩家调用

```lua
async.call(PlayerLocal(), function()
    print("hello")
end)
```

#### 单独玩家1异步调用

```lua
async.call(Player(1), function()
    print("hello")
end)
```

#### 异步随机整数

```lua
-- 同步建池
async.randIntPool(1, 1000)
-- 异步读池
async.call(PlayerLocal(), function()
    print(async.randInt())
end)
```
