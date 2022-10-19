## Frame specific design

### Modify specific modification parameters

* When this parameter is present, the method is obtain if it does not exist, and modify if it exists

> Take the name of the Game object as an example
>
> Game():name(modify:string)

```lua
-- Get the name of the game map
-- Get from map structure by default
Game():name() -- return string

-- Custom game map name
Game():name("Wheel of Death") -- return this

```

* Support floating modification of numeric attributes

> Take the player warehouse capacity of Game object as an example
>
> Game():warehouseSlot(max:number)

```lua
-- Set the player's warehouse capacity to 18
Game():warehouseSlot(18)
-- Set the player's warehouse capacity to decrease by 1
Game():warehouseSlot("-=1")
-- Set the player's warehouse capacity to increase by 4
Game():warehouseSlot("+=4")
-- Set the player's warehouse capacity to 3 times
Game():warehouseSlot("*=3")
-- Set the player's warehouse capacity to half of the current one
Game():warehouseSlot("/=2")
```

### Coherent operation

* The methods of most objects will return this, that is, the object itself, so that coherent operations can be achieved

> Take the AbilityTpl skill template as an example

```lua
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
            colour.format("def：%s%", nil, { { colour.gold, dmg } }),
            colour.format("ref：%s%", nil, { { colour.gold, rer } }),
            colour.format("dur：%sSec", nil, { { colour.sky, dur } }),
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
