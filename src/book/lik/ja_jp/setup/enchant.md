### 付魔を設ける

> 魔付きの種類、反応を定義するための設定

```lua
--- 便利なダメージタイプ参照
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

-- 魔の設定
Enchant("fire")
    :name("火")
    :strengthen(0)
    :resistance(0)
    :attachEffect("origin", "BreathOfFireDamage")
    :attachEffect("left hand", "BreathOfFireDamage")
    :attachEffect("right hand", "BreathOfFireDamage")
    :attachEffect("head", "BreathOfFireDamage")
    :reaction("grass", function(evtData) evtData.triggerUnit:hpRegen("-=200;5") end)

Enchant("rock"):name("岩")
Enchant("water"):name("水")
Enchant("ice"):name("氷")
Enchant("wind"):name("風")
Enchant("light"):name("光")
Enchant("dark"):name("闇")
Enchant("grass"):name("草")
Enchant("thunder"):name("雷")
Enchant("poison"):name("毒")
Enchant("steel"):name("鋼")
```
