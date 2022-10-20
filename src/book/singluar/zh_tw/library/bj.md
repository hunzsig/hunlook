## BJ (Blizzard Jass)

### 因為BJ本質是多餘的，所以YDlua引擎自帶並冇有BJ。

> 下麵說明下為什麼BJ是多餘的？
>
> 因為BJ本質就是對CJ的封裝，所以編寫lua可以自己封裝需要的而冇必要用它的。
>
> 簡單來說就是並不需要它來幫你封裝

例如我們來看一個暴雪的BJ封裝 （設定單位的生命周期）

```jass
UnitApplyTimedLifeBJ( 60, 'BTLF', GetTriggerUnit() )
```

那麼這個BJ其實對應CJ的是什麼呢？

> 在F4觸發編輯器，將T轉為jass自定義文字後，按住ctrl點選函式名即可檢視WE的函式詳情

```jass
function UnitApplyTimedLifeBJ takes real duration, integer buffId, unit whichUnit returns nothing
    call UnitApplyTimedLife(whichUnit, buffId, duration)
endfunction
```

可以看到，暴雪的BJ封裝大多都是這種換個位置的無謂封裝

假如說是在編寫其他語種的程式碼（例如lua）需要封裝就算了，在jass裡麵這樣的封裝根本毫無意義

所以一般認為BJ在自定義程式碼層麵來講是冇用的

```jass
UnitApplyTimedLife(whichUnit, buffId, duration)
```

那麼有的BJ函式是有用的，那怎麼辦呢？相信聰明的你已經明白了

冇錯，就和上麵一樣嘛。看看它的BJ怎麼寫的，然後寫你自己的程式碼風格封裝就好了

舉個例子，玩家選擇單位這個BJ方法

> 並不是名字有BJ才是BJ函式，在WE裡麵顯示紅名的就是BJ函式

```
SelectUnitForPlayerSingle( GetTriggerUnit(), Player(0) )

// 它的本質
function SelectUnitForPlayerSingle takes unit whichUnit, player whichPlayer returns nothing
    if (GetLocalPlayer() == whichPlayer) then
        // Use only local code (no net traffic) within this block to avoid desyncs.
        call ClearSelection()
        call SelectUnit(whichUnit, true)
    endif
endfunction
```

那麼你在lua裡麵就可以這樣寫

```lua
if (J.GetLocalPlayer() == whichPlayer) then
    J.ClearSelection()
    J.SelectUnit(whichUnit, true)
end
```


