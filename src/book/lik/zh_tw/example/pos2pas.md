## 主動改被動

#### 將一個主動技能變成被動，先隨便寫個主動技能

> 技能效果：瞬間反擊，使用後在短時間內反彈一定的傷害

```lua
---@param effectiveData noteOnAbilityEffectiveData
AbilityTpl()
    :name("瞬間反擊")
    :levelMax(9)
    :targetType(ABILITY_TARGET_TYPE.tag_nil)
    :icon("ability/HolyArdentDefender")
    :coolDownAdv(10, -0.5)
    :mpCostAdv(50, 0)
    :description(
    function(obj)
        local dmg = 30 + 5 * obj:level()
        local rer = 8 + 2 * obj:level()
        local dur = 0.4 + 0.1 * obj:level()
        return {
            "運用盾牌進行防禦並反彈傷害",
            colour.format("抵禦傷害：%s%", nil, { { colour.gold, dmg } }),
            colour.format("反彈傷害：%s%", nil, { { colour.gold, rer } }),
            colour.format("持續時間：%s秒", nil, { { colour.skyblue, dur } }),
        }
    end)
    :onEvent(EVENT.Ability.Effective,
    function(effectiveData)
        local lv = effectiveData.triggerAbility:level()
        local tu = effectiveData.triggerUnit
        local reduce = math.floor(30 + 5 * lv)
        local rebound = math.floor(8 + 2 * lv)
        local dur = 0.4 + 0.1 * lv
        ---@param buffObj Unit
        tu:attach("buff/IonCentrifugalCircle", "origin", dur)
        tu:buff("瞬間反擊")
          :duration(dur)
          :purpose(function(buffObj) buffObj:hurtReduction("+=" .. reduce):hurtRebound("+=" .. rebound):odds("hurtRebound", "+=100") end)
          :rollback(function(buffObj) buffObj:hurtReduction("-=" .. reduce):hurtRebound("-=" .. rebound):odds("hurtRebound", "-=100") end)
          :run()
    end)
```

#### 將它改為被動

> targetType 改為 ABILITY_TARGET_TYPE.pas
> 增加一個單位事件 Hurt 連結觸發技能的 Effective 動作
> 由於框架特性，Ability所有資料都可以動態修改，所以可以實現技能的不同形態的轉化

```lua
---@param hurtData noteOnUnitHurtData
---@param effectiveData noteOnAbilityEffectiveData
AbilityTpl()
    :name("瞬間反擊")
    :levelMax(9)
    :targetType(ABILITY_TARGET_TYPE.pas)
    :icon("ability/HolyArdentDefender")
    :coolDownAdv(10, -0.5)
    :mpCostAdv(50, 0)
    :description(
    function(obj)
        local dmg = 30 + 5 * obj:level()
        local rer = 8 + 2 * obj:level()
        local dur = 0.4 + 0.1 * obj:level()
        return {
            "受到傷害時，運用盾牌進行防禦並反彈傷害",
            colour.format("抵禦傷害：%s%", nil, { { colour.gold, dmg } }),
            colour.format("反彈傷害：%s%", nil, { { colour.gold, rer } }),
            colour.format("持續時間：%s秒", nil, { { colour.skyblue, dur } }),
        }
    end)
    :onUnitEvent(EVENT.Unit.Hurt,
    function(hurtData)
        hurtData.triggerAbility:effective()
    end)
    :onEvent(EVENT.Ability.Effective,
    function(effectiveData)
        local lv = effectiveData.triggerAbility:level()
        local tu = effectiveData.triggerUnit
        local reduce = math.floor(30 + 5 * lv)
        local rebound = math.floor(8 + 2 * lv)
        local dur = 0.4 + 0.1 * lv
        tu:attach("buff/IonCentrifugalCircle", "origin", dur)
          :buff("瞬間反擊")
          :duration(dur)
          :purpose(function(buffObj) buffObj:hurtReduction("+=" .. reduce):hurtRebound("+=" .. rebound):odds("hurtRebound", "+=100") end)
          :rollback(function(buffObj) buffObj:hurtReduction("-=" .. reduce):hurtRebound("-=" .. rebound):odds("hurtRebound", "-=100") end)
          :run()
    end)
```
