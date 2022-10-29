## Description

> The framework provides a combination method of text description body
>
> Under the Game object

#### First define your preferred descriptor

> return string[] or nil

```lua
-- So a description configuration is defined
Game().defineDescription("myAbility", function(this, options)
    return {"first", "second"}
end)
```

> The description body defines the callback function The first this refers to the object you refer to, such as Ability, Item, Unit

#### Take a look at common descriptors for skills

> This description body introduces an options, extra data, which will be brought into each reference, which has a whichLevel, and how to pass it will be shown later.

```lua
-- Define skill descriptor
-- [Basic info]
---@param this Ability
---@param options {whichLevel:number}
Game().defineDescription("abilityBase", function(this, options)
    local desc = {}
    local whichLevel = math.floor(options.whichLevel or this.level())
    local tt = this.targetType()
    if (tt ~= ABILITY_TARGET_TYPE.PAS or this.coolDownRemain() > 0) then
        table.insert(desc, this.name() .. ' - lv ' .. colour.hex(colour.gold, whichLevel) .. '（' .. colour.hex(colour.gold, this.hotkey()) .. '）')
    else
        table.insert(desc, this.name() .. " - lv " .. colour.hex(colour.gold, whichLevel))
    end
    table.insert(desc, 'type：' .. colour.hex(colour.gold, tt.label))
    if (tt ~= ABILITY_TARGET_TYPE.PAS or this.coolDownRemain() > 0) then
        local chantCast = this.castChant(whichLevel)
        if (chantCast > 0) then
            table.insert(desc, 'chantTime：' .. colour.hex(colour.skyblue, chantCast .. " Sec"))
        else
            table.insert(desc, 'chantTime：' .. colour.hex(colour.skyblue, "instant"))
        end
        local keepCast = this.castKeep(whichLevel)
        if (keepCast > 0) then
            table.insert(desc, 'maxChant：' .. colour.hex(colour.skyblue, keepCast .. " Sec"))
        end
    end
    return desc
end)
```

#### After the description body is defined, you can of course use them to combine to build your text data

```lua
-- Simple reference
local txtArray = Game().combineDescription(whichAbility, nil, "abilityBase")

-- set options，whichLevel = 10
local txtArray = Game().combineDescription(whichAbility, {whichLevel = 10}, "abilityBase")

-- Earlier, we also defined a myAbility, which can also use two sets of data to merge in the order you introduced them
local txtArray = Game().combineDescription(whichAbility, nil, "abilityBase", "myAbility")
```

#### Ability、Item、Unit objects defines a description function, you can also use the specific abbreviation &lt;D&gt; to import the function's callback data

```lua
-- Special introduction of object definition
local txtArray = Game().combineDescription(whichAbility, nil, "<D>", "abilityBase")
```

#### Use string array data directly, or supply it to combineDescription

```lua
-- Directly import table
local txtArray = Game().combineDescription(whichAbility, nil, {"first","second"})
```
