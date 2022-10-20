### Enchantments

> Settings for defining enchantment types and reactions

```lua
--- Convenient injury type reference {value:string,label:string}
DAMAGE_TYPE.fire = nil
DAMAGE_TYPE.rock = nil
DAMAGE_TYPE.water = nil
DAMAGE_TYPE.ice = nil
DAMAGE_TYPE.wind = nil
DAMAGE_TYPE.light = nil
DAMAGE_TYPE.dark = nil
DAMAGE_TYPE.grass = nil
DAMAGE_TYPE.thunder = nil
DAMAGE_TYPE.poison = nil

-- Enchant setting
enchant.defined("fire", "Fire", {
    strengthen = 0,
    resistance = 0,
    append = {
        { attach = 'origin', effect = 'BreathOfFireDamage' },
        { attach = 'left hand', effect = 'BreathOfFireDamage' },
        { attach = 'right hand', effect = 'BreathOfFireDamage' },
        { attach = 'head', effect = 'BreathOfFireDamage' },
    },
    reaction = {
        grass = enchant.reaction(function(evtData)
            evtData.triggerUnit.hpRegen("-=200;5")
        end)
    },
})

enchant.defined("rock", "Rock")
enchant.defined("water", "Water")
enchant.defined("ice", "Ice")
enchant.defined("wind", "Wind")
enchant.defined("light", "Light")
enchant.defined("dark", "Dark")
enchant.defined("grass", "Grass")
enchant.defined("thunder", "Thunder")
enchant.defined("poison", "Poison")
```
