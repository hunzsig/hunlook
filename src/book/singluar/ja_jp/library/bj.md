## BJ (Blizzard Jass)

### BJは本質的に余分なので、YDluaエンジンがBJを持っているわけではありません。

>なぜBJが余分なのか説明します。
>
>BJの本質はCJのカプセル化であるため、luaを作成することで必要なものを自分でカプセル化することができ、それを使用する必要はありません。
>
>簡単に言えばパッケージ化のために必要ではありません

例えば、大雪のBJパッケージ（設定単位のライフサイクル）を見てみましょう

```jass
UnitApplyTimedLifeBJ( 60, 'BTLF', GetTriggerUnit() )
```

ではこのBJが実はCJに対応しているのは何なのでしょうか。

> F4トリガエディタでTをjassカスタムテキストに変換したら、ctrlを押したまま関数名をクリックするとWEの関数の詳細が表示されます

```jass
function UnitApplyTimedLifeBJ takes real duration, integer buffId, unit whichUnit returns nothing
    call UnitApplyTimedLife(whichUnit, buffId, duration)
endfunction
```

大雪のBJパッケージの多くは、このような場所を変えた無意味なパッケージであることがわかります

他の言語のコード（例えばlua）を記述するのにパッケージが必要だとしても、jassではこのようなパッケージは意味がありません

だからBJはカスタムコードレベルでは役に立たないと考えられている

```jass
UnitApplyTimedLife(whichUnit, buffId, duration)
```

では有用なBJ関数がありますが、どうすればいいのでしょうか。賢い君を信じてわかった

そう、上と同じですね。BJの書き方を見て、自分のコードスタイルを書いてカプセル化すればいい

例えば、プレイヤーが単位を選択するというBJメソッド

> 名前にBJがあるからBJ関数なのではなく、WEで赤名を示すのがBJ関数です

```
SelectUnitForPlayerSingle( GetTriggerUnit(), Player(0) )

// その本質
function SelectUnitForPlayerSingle takes unit whichUnit, player whichPlayer returns nothing
    if (GetLocalPlayer() == whichPlayer) then
        // Use only local code (no net traffic) within this block to avoid desyncs.
        call ClearSelection()
        call SelectUnit(whichUnit, true)
    endif
endfunction
```

では、luaにはこのように書くことができます

```lua
if (J.GetLocalPlayer() == whichPlayer) then
    J.ClearSelection()
    J.SelectUnit(whichUnit, true)
end
```


