### 引數監聽

> 可以預設任意引數在變動時的觸發機制

#### 任意監聽範圍

```lua
-- 任意同步監聽範圍
event._prop_std = "any"

-- 任意非同步監聽範圍
event._prop_dyn = "any"
```

#### 只限定非同步監聽3個key的變動

> 當設為true時才有效，可作為臨時改動

```lua
event._prop_dyn = {
    attack = true,
    defend = true,
    crit = false,
}
```

#### 監聽事件的使用

> number資料沒有變化時，不會觸發此事件

```lua
---@param evtData noteOnPropPlayer
event.reaction(EVENT.Prop.Change, "myChange", function(evtData)
    if (isClass(evtData.triggerObject, UnitClass)) then
        if (evtData.key == "attack") then
            print("攻擊改變了")
        end
    end
end)
```
