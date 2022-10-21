## timer タイマ

#### 使い捨てタイマ

> 使い捨てタイマーは破壊も略記もでき、フレームは自動的に消去される
>
> ただし、循環タイマーの中でタイマーを壊し忘れないためには、使い終わったら捨てるという良い習慣を身につけることをおすすめします

```lua
time.setTimeout(3, function(curTimer)
    destroy(curTimer)
    print("3秒が経過しました")
end)
```

#### 循環タイマ

> 循環タイマは必要に応じて手動でクリーンアップしなければならない

```lua
local i = 0
time.setInterval(1, function(curTimer)
    i = i + 1
    if (i == 100) then
        destroy(curTimer)
        print("iは100に等しい")
    end
end)
```

#### 非同時発生タイマ

> フレームワークは非同時発生タイマをサポートする
>
> 非同時発生データの信頼性を自分で制御できない限り、ドメイン間でタイマーを操作することはお勧めしません

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

#### タイマー時間の変更

> フレームサポート修正タイマの設定

```lua
local t = time.setTimeout(3, function(curTimer) end)
t:period(2) -- 修正サイクルは2秒（サイクルが現在の残り時間より小さい場合、残り時間は自動的に設定されたサイクル時間になることに注意）
t:remain(9) -- 残りを9秒に変更（実際の効果は3秒）（残り時間がサイクルより大きい場合は、最大でサイクル時間に設定できることに注意）
t:period(10) -- 変更サイクルは10秒
t:remain(9) -- 変更残り9秒
```
