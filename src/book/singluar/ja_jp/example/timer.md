## timer 計時係

#### 使い捨てタイマ

>使い捨てタイマーは破壊も略記もでき、フレームは自動的にクリーンアップされる
>
>ただし循環タイマーの中でタイマーを壊し忘れないためには、使い終わったら捨てるという良い習慣をつけることをおすすめします

```lua
time.setTimeout(3, function(curTimer)
    curTimer.destroy()
    print("3秒が経過しました")
end)
```

#### サイクルタイマ

> 循環タイマは必要に応じて手動でクリーンアップしなければならない

```lua
local i = 0
time.setInterval(1, function(curTimer)
    i = i + 1
    if (i == 100) then
        curTimer.destroy()
        print("iは100に等しい")
    end
end)
```

#### 非同期タイマ

> フレームワークは非同期タイマをサポートする
>
> 非同期データの信頼性を自分で制御できない限り、ドメイン間でタイマーを操作することはお勧めしません

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
