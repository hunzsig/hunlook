## Async asynchronous

#### Local player call

```lua
async.call(PlayerLocal(), function()
    print("hello")
end)
```

#### Asynchronous call of individual player 1

```lua
async.call(Player(1), function()
    print("hello")
end)
```

#### Asynchronous random integer

```lua
async.call(PlayerLocal(), function()
    print(async.rand(0, 1000))
end)
```
