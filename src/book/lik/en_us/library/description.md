## Description

> The framework provides a combination method of text description body
>
> Under the Game object

#### First define your preferred descriptor

> return string[] or nil

```lua
-- So a description configuration is defined
Game():defineDescription("myAbility", function(this, options)
    return {"first","second"}
end)
```

> The description body defines the callback function The first this refers to the object you refer to, such as Ability, Item, Unit

#### Take a look at common descriptors for skills

> This description body introduces an options, extra data, which will be brought into each reference, which has a whichLevel, and how to pass it will be shown later.

```lua
-- Define item skill description
-- [Basic information]
---@param this Ability
Game():defineDescription("itemAbility", function(this, options)
    local str = { '', this.name() .. ": " }
    local lv = math.floor(this.level())
    local tt = this.targetType()
    local indent = "    "
    table.insert(str, indent .. "Type:%s")
    table.insert(options, { "ffcc00", tt.label })
    if (tt ~= ABILITY_TARGET_TYPE.pas) then
        local chantCast = this.castChant(lv)
        if (chantCast > 0) then
            table.insert(str, indent .. "ChantTime:%s Sec")
            table.insert(options, { "ccffff", chantCast })
        else
            table.insert(str, indent .. "ChantTime:%s")
            table.insert(options, { "ccffff", "Instantaneous cast
" })
        end
        local keepCast = this.castKeep(lv)
        if (keepCast > 0) then
            table.insert(str, indent .. "MaxSpellTime:%s Sec")
            table.insert(options, { "ccffff", keepCast })
        end
    end
    return colour.format(string.implode("|n", str), "ee82ee", options)
end)
```

#### After the description body is defined, you can of course use them to combine to build your text data

```lua
-- Simple reference
local txtArray = Game():combineDescription(whichAbility, nil, "abilityBase")

-- Use options, which Level to set 10
local txtArray = Game():combineDescription(whichAbility, {whichLevel = 10}, "abilityBase")

-- Earlier, we also defined a myAbility, which can also use two sets of data to merge in the order you introduced them
local txtArray = Game():combineDescription(whichAbility, nil, "abilityBase", "myAbility")
```

#### Ability、Item、Unit objects defines a description function, you can also use the specific abbreviation &lt;D&gt; to import the function's callback data

```lua
-- Special introduction of object definition
-- Use SYMBOL_D
local txtArray = Game():combineDescription(whichAbility, nil, SYMBOL_D, "abilityBase")
```

#### Use string array data directly, or supply it to combineDescription

```lua
-- Directly import table
local txtArray = Game():combineDescription(whichAbility, nil, {"first","second"})
```
