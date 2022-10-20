## 難易度選択ダイアログ

テキストを数値として使用する「難易度選択」ダイアログを作成し、最初のプレイヤーを自動的に選択して選択させる

```lua
Dialog(
    "選択の難しさ",
    { "一般的な困難」、「非常に困難」、「極めて困難」、「破天荒で難しい」" },
    function(evtData)
    
        -- ダイアログボックスが使用されなくなったらクリーンアップ
        evtData.triggerDialog.destroy()
        
        if (evtData.value == "非常に困難") then
            --仕事をする
        elseif (evtData.value == "困難をきわめる") then
            --仕事をする
        elseif (evtData.value == "破天荒で難しい.") then
            --仕事をする
        else
            --仕事をする
        end
        echo("選択した：" .. evtData.value)
    end
).show()
```

ホットキー、テキスト、数値を使用した「難易度選択」ダイアログを作成し、プレイヤーに1、選択させる

```lua
Dialog(
    "選択の難しさ",
    {
        { hotkey = "Q", label = "一般的な困難", value = 1 },
        { hotkey = "W", label = "非常に困難", value = 2 },
        { hotkey = "E", label = "困難をきわめる", value = 3 },
        { hotkey = "R", label = "破天荒で難しい.", value = 4 },
    },
    function(evtData)
    
        -- ダイアログボックスが使用されなくなったらクリーンアップ
        evtData.triggerDialog.destroy()
        
        if (evtData.hotkey == "Q") then
            --仕事をする
        elseif (evtData.hotkey == "W") then
            --仕事をする
        elseif (evtData.hotkey == "E") then
            --仕事をする
        else
            --仕事をする
        end
        echo("選択した：" .. evtData.label .. "等級：" .. evtData.value)
    end
).show(Player(1))
```

titleに基づいて同じオブジェクトをフェッチするための事前定義済みダイアログボックス

> 上のダイアログボックスのように、destroyなしでデータを再フェッチできます

```lua
Dialog("選択の難しさ")
```
