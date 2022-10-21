### prop監視

> 変動時の任意のパラメータのトリガ機構を事前設定することができる

#### 任意のリスニング範囲

```lua
-- 任意の同時発生リスニング範囲
event._prop_std = "any"

-- 任意の非同時発生リスニング範囲
event._prop_dyn = "any"
```

#### 非同時発生傍受限定3 keyの変動

> trueに設定した場合にのみ有効であり、一時的な変更として使用できます

```lua
event._prop_dyn = {
    attack = true,
    defend = true,
    crit = false,
}
```

#### リスニング・イベントの使用方法

> numberデータに変化がない場合、このイベントはトリガーされません

```lua
---@param evtData noteOnPropPlayer
event.reaction(EVENT.Prop.Change, "myChange", function(evtData)
    if (isClass(evtData.triggerObject, UnitClass)) then
        if (evtData.key == "attack") then
            print("攻撃が変わった")
        end
    end
end)
```
