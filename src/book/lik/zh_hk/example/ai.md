## AI

### 使用AI對象可以定義一些行為組，供適合的時候使用

> 下面是一些參考例子

#### 遊蕩進攻型AI

```lua
--- 每隔5秒選擇攻擊到附近350範圍內隨機座標
AI("wander")
    :period(5)
    :action(
    function(linkUnit)
        local x, y = vector2.polar(linkUnit:x(), linkUnit:y(), math.rand(50, 350), math.rand(0, 359))
        linkUnit:orderAttack(x, y)
    end)
```

#### 遊蕩移動型AI

```lua
--- 每隔5秒選擇移動到附近350範圍內隨機座標
AI("loiter")
    :period(5)
    :action(
    function(linkUnit)
        local x, y = vector2.polar(linkUnit:x(), linkUnit:y(), math.rand(50, 350), math.rand(0, 359))
        linkUnit:orderAIMove(x, y)
    end)
```

#### 反擊型AI

```lua
--- 每隔5秒選擇攻擊到最後傷害單位，沒有則攻擊當前座標
AI("counter")
    :period(5)
    :action(
    function(linkUnit)
        local last = linkUnit:lastHurtSource()
        if (isClass(last, UnitClass)) then
            linkUnit:orderAttackTargetUnit(last)
        else
            linkUnit:orderAttack(linkUnit:x(), linkUnit:y())
        end
    end)
```

#### 仇恨型AI

```lua
--- 記住傷害它的仇敵，每隔10秒執行以下決策
--- [目標內]1000範圍之類才被考慮
--- [目標內]選擇優先攻擊處於不利狀態的仇敵，包含眩暈、沉默、繳械、擊飛、硬直
--- [目標外]其次選擇生命最低的生命小於5%其他目標
--- [目標內]其次選擇實施過控制手段的仇敵
--- [目標內]其次選擇傷害最高的仇敵
--- [目標內]沒有目標則攻擊到附近1000範圍內隨機座標或攻擊me
---@param unlinkData noteOnAIUnlinkData
---@param linkData noteOnAILinkData
AI("hate")
    :period(10)
    :onEvent(EVENT.AI.Unlink,
    function(unlinkData)
        local aiKey = "hate_ai"
        local whichUnit = unlinkData.triggerUnit
        whichUnit:onEvent(EVENT.Unit.Shield, aiKey, nil)
        whichUnit:onEvent(EVENT.Unit.Hurt, aiKey, nil)
        whichUnit:onEvent(EVENT.Unit.Be.Stun, aiKey, nil)
        whichUnit:onEvent(EVENT.Unit.Be.Rebound, aiKey, nil)
        whichUnit:clear(aiKey)
    end)
    :onEvent(EVENT.AI.Link,
    function(linkData)
        local aiKey = "hate_ai"
        local whichUnit = linkData.triggerUnit
        local call = function(u, sid, key, value)
            ---@alias noteAIHateList table<string,{dmg:number,ctl:number}>
            ---@class noteAIHateList
            local hl = u:prop(aiKey)
            if (type(hl) ~= "table") then
                hl = {}
                u:prop(aiKey, hl)
            end
            -- [ctl]累計指控制次數
            -- [dmg]累計傷害量
            if (hl[sid] == nil) then
                hl[sid] = { ctl = 0, dmg = 0 }
            end
            hl[sid][key] = hl[sid][key] + value
        end
        ---@param shieldData noteOnUnitShieldData
        whichUnit:onEvent(EVENT.Unit.Shield, aiKey, function(shieldData)
            if (isClass(shieldData.sourceUnit, UnitClass)) then
                call(shieldData.triggerUnit, shieldData.sourceUnit:id(), "dmg", shieldData.value)
            end
        end)
        ---@param hurtData noteOnUnitHurtData
        whichUnit:onEvent(EVENT.Unit.Hurt, aiKey, function(hurtData)
            if (isClass(hurtData.sourceUnit, UnitClass)) then
                call(hurtData.triggerUnit, hurtData.sourceUnit:id(), "dmg", hurtData.damage)
            end
        end)
        ---@param beStunData noteOnUnitBeStunData
        whichUnit:onEvent(EVENT.Unit.Be.Stun, aiKey, function(beStunData)
            if (isClass(beStunData.sourceUnit, UnitClass)) then
                call(beStunData.triggerUnit, beStunData.sourceUnit:id(), "ctl", 3)
            end
        end)
        ---@param beReboundData noteOnUnitBeReboundData
        whichUnit:onEvent(EVENT.Unit.Be.Rebound, aiKey, function(beReboundData)
            if (isClass(beReboundData.sourceUnit, UnitClass)) then
                call(beReboundData.triggerUnit, beReboundData.sourceUnit:id(), "ctl", -1)
                call(beReboundData.triggerUnit, beReboundData.sourceUnit:id(), "dmg", -beReboundData.damage)
            end
        end)
    end)
    :action(
    function(linkUnit)
        local aiKey = "hate_ai"
        local target
        ---@type noteAIHateList
        local hl = linkUnit:prop(aiKey)
        if (type(hl) == "table") then
            local x, y = linkUnit:x(), linkUnit:y()
            for id, v in pairx(hl) do
                ---@type Unit
                local u = i2o(id)
                if (false == isClass(u, UnitClass) or u:isDead()) then
                    hl[id] = nil
                elseif (vector2.distance(x, y, u:x(), u:y()) > 1000) then
                    hl[id] = nil
                else
                    local hp = u:hpCur()
                    local isBad = u:isStunning() or u:isSilencing() or u:isUnArming() or u:isCrackFlying() or u:isPunishing()
                    if (target == nil) then
                        target = { u = u, hp = hp, ctl = v.ctl, dmg = v.dmg, isBad = isBad }
                        if (isBad) then
                            break
                        end
                    elseif (isBad) then
                        target.u = u
                        break
                    else
                        local checkHP = (hp < u:hp() * 0.05 and target.hp < hp)
                        local checkCtl = (v.ctl > target.ctl)
                        local checkDmg = (v.dmg > target.dmg)
                        if (checkHP and checkCtl and checkDmg) then
                            target.u = u
                            target.hp = hp
                            target.ctl = v.ctl
                            target.dmg = v.dmg
                        elseif (checkCtl and checkDmg) then
                            target.u = u
                            target.ctl = v.ctl
                            target.dmg = v.dmg
                        elseif (checkDmg) then
                            target.u = u
                            target.dmg = v.dmg
                        end
                    end
                end
            end
            if (target ~= nil) then
                linkUnit:orderAttackTargetUnit(target.u)
            end
        end
        if (target == nil) then
            local me = Game():GD().me
            if (isClass(me, UnitClass) == false or math.rand(1, 2) == 1) then
                local x2, y2 = vector2.polar(linkUnit:x(), linkUnit:y(), math.rand(200, 1000), math.rand(0, 359))
                linkUnit:orderAttack(x2, y2)
            else
                linkUnit:orderAttackTargetUnit(me)
            end
        end
    end)
```

#### 單位引用AI

```lua
AI("loiter"):link(Unit)
```

#### 單位棄用AI

```lua
AI("loiter"):unlink(Unit)
```
