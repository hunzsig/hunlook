### Preset enchantment

> It is used to define the type and reaction of enchanting

```lua
--- Convenient injury type reference
---@alias noteDamageTypeData {value:string,label:string}

---@type noteDamageTypeData
DAMAGE_TYPE.fire = nil
---@type noteDamageTypeData
DAMAGE_TYPE.rock = nil
---@type noteDamageTypeData
DAMAGE_TYPE.water = nil
---@type noteDamageTypeData
DAMAGE_TYPE.ice = nil
---@type noteDamageTypeData
DAMAGE_TYPE.wind = nil
---@type noteDamageTypeData
DAMAGE_TYPE.light = nil
---@type noteDamageTypeData
DAMAGE_TYPE.dark = nil
---@type noteDamageTypeData
DAMAGE_TYPE.grass = nil
---@type noteDamageTypeData
DAMAGE_TYPE.thunder = nil
---@type noteDamageTypeData
DAMAGE_TYPE.poison = nil
---@type noteDamageTypeData
DAMAGE_TYPE.steel = nil

-- Enchant setting
Enchant("fire")
    :name("Fire")
    :strengthen(0)
    :resistance(0)
    :attachEffect("origin", "BreathOfFireDamage")
    :attachEffect("left hand", "BreathOfFireDamage")
    :attachEffect("right hand", "BreathOfFireDamage")
    :attachEffect("head", "BreathOfFireDamage")
    :reaction("grass", function(evtData) evtData.triggerUnit:hpRegen("-=200;5") end)

Enchant("rock"):name("Rock")
Enchant("water"):name("Water")
Enchant("ice"):name("Ice")
Enchant("wind"):name("Wind")
Enchant("light"):name("Light")
Enchant("dark"):name("Dark")
Enchant("grass"):name("Grass")
Enchant("thunder"):name("Thunder")
Enchant("poison"):name("Poison")
Enchant("steel"):name("Steel")
```
