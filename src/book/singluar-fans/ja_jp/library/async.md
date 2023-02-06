## async 非同時発生

#### ローカルプレイヤー呼び出し

```lua
async.call(PlayerLocal(), function()
    print("hello")
end)
```

#### シングルプレイヤー1非同期呼び出し

```lua
async.call(Player(1), function()
    print("hello")
end)
```

#### ひどうきかくりつせいすう

```lua
async.call(PlayerLocal(), function()
    print(async.rand(0, 1000))
end)
```
