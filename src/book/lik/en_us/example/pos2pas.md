## Change active skills into passive skills

#### Turn an active skill into a passive one. Write an active skill first

> Skill effect: instant counterattack, which can rebound a certain amount of damage in a short time after use

```lua
---@param effectiveData noteOnAbilityEffectiveData
AbilityTpl()
    :name("Instantaneous counterattack")
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
            "Use shield to defend and reflect damage",
            colour.format("Resist damage: %s%", nil, { { colour.gold, dmg } }),
            colour.format("Rebound damage: %s%", nil, { { colour.gold, rer } }),
            colour.format("Duration: %s秒", nil, { { colour.skyblue, dur } }),
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
        tu:buff("Instantaneous counterattack")
          :duration(dur)
          :purpose(function(buffObj) buffObj:hurtReduction("+=" .. reduce):hurtRebound("+=" .. rebound):odds("hurtRebound", "+=100") end)
          :rollback(function(buffObj) buffObj:hurtReduction("-=" .. reduce):hurtRebound("-=" .. rebound):odds("hurtRebound", "-=100") end)
          :run()
    end)
```

#### Change it to passive

> targetType to ABILITY_TARGET_TYPE.pas
> Add a unit event Hurt link to trigger the effective action of the skill
> Due to the framework feature, all data of Ability can be dynamically modified, so different forms of skills can be
> transformed

```lua
---@param hurtData noteOnUnitHurtData
---@param effectiveData noteOnAbilityEffectiveData
AbilityTpl()
    :name("Instantaneous counterattack")
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
            "Use the shield to defend and reflect the damage when being hurt",
            colour.format("Resist damage: %s%", nil, { { colour.gold, dmg } }),
            colour.format("Rebound damage: %s%", nil, { { colour.gold, rer } }),
            colour.format("Duration: %s秒", nil, { { colour.skyblue, dur } }),
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
          :buff("Instantaneous counterattack")
          :duration(dur)
          :purpose(function(buffObj) buffObj:hurtReduction("+=" .. reduce):hurtRebound("+=" .. rebound):odds("hurtRebound", "+=100") end)
          :rollback(function(buffObj) buffObj:hurtReduction("-=" .. reduce):hurtRebound("-=" .. rebound):odds("hurtRebound", "-=100") end)
          :run()
    end)
```
