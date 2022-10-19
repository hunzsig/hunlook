### Skill information

```lua
-- Define skill descriptor
-- [Basic information]
---@param this Ability
---@param options {level:number}
Game():defineDescription("abilityBase", function(this, options)
    local desc = {}
    local lv = math.floor(options.level or this.level())
    local tt = this.targetType()
    if (isClass(this, AbilityClass)) then
        if (tt ~= ABILITY_TARGET_TYPE.pas) then
            table.insert(desc, this.name() .. " - lv " .. colour.hex(colour.gold, lv) .. "（" .. colour.hex(colour.gold, this.hotkey()) .. "）")
        else
            table.insert(desc, this.name() .. " - lv " .. colour.hex(colour.gold, lv))
        end
    else
        table.insert(desc, this.name())
    end
    table.insert(desc, "Type:" .. colour.hex(colour.gold, tt.label))
    if (tt ~= ABILITY_TARGET_TYPE.pas) then
        local chantCast = this.castChant(lv)
        if (chantCast > 0) then
            table.insert(desc, "ChantTime:" .. colour.hex(colour.skyLight, chantCast .. " Sec"))
        else
            table.insert(desc, "ChantTime:" .. colour.hex(colour.skyLight, "Instantaneous cast"))
        end
        local keepCast = this.castKeep(lv)
        if (keepCast > 0) then
            table.insert(desc, "MaxSpellTime:" .. colour.hex(colour.skyLight, keepCast .. " Sec"))
        end
    end
    return desc
end)

-- [Skill point information]
---@param this Ability
Game():defineDescription("abilityLvPoint", function(this, _)
    if (this.levelUpNeedPoint() > 0) then
        return { colour.hex("EFBA16", "Upgrade requires skill points: " .. this.levelUpNeedPoint()) }
    end
end)
```

### Item information

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

-- Define item description
-- [Basic information]
---@param this Item
Game():defineDescription("itemBase", function(this, _)
    local desc = {}
    local name
    if (this:level() > 0) then
        name = this:name() .. "[" .. colour.hex(colour.white, this:level()) .. " lv]"
    else
        name = this:name()
    end
    if (isClass(this:ability(), AbilityClass)) then
        local tt = this:ability():targetType()
        if (isClass(this, ItemClass)) then
            if (tt ~= ABILITY_TARGET_TYPE.pas and this:hotkey() ~= nil) then
                name = name .. "（" .. colour.hex(colour.gold, this:hotkey()) .. "）"
            end
            table.insert(desc, name)
        else
            table.insert(desc, name)
        end
        desc = table.merge(desc, Game():combineDescription(this:ability(), nil, "itemAbility", SYMBOL_D, "attributes"))
        if (this:charges() > 0) then
            table.insert(desc, colour.hex(colour.white, "|Remain:" .. this:charges()))
        end
    else
        table.insert(desc, name)
    end
    if (this:level() < this:levelMax()) then
        table.insert(desc, colour.format("Max %s lv
", "c0c0c0", { { "ffcc00", this:levelMax() } }))
    end
    return desc
end)
```

### Attribute information

```lua
attribute.labels("attack", "Attack")
attribute.labels("defend", "Defend")

-- Define intelligent attribute description body
-- [Basic information]
---@param this Ability|Item
---@param options {level:number}
Game():defineDescription("attributes", function(this, options)
    if (type(this.attributes) ~= "function") then
        return nil
    end
    local attributes = this.attributes()
    if (type(attributes) ~= "table" or #attributes == 0) then
        return nil
    end
    local desc = {}
    local lv = math.floor(options.level or this:level())
    table.insert(desc, "")
    for _, a in ipairs(attributes) do
        local method = a[1]
        local m2 = a[2] or 0
        local d1
        local d2
        if (type(m2) == "number") then
            d1 = m2
            d2 = a[3] or d1
        elseif (type(m2) == "string") then
            method = method .. '_' .. m2
            d1 = a[3] or 0
            d2 = a[4] or d1
        end
        local label = attribute.labels(method)
        if (label ~= nil) then
            local v = d1
            if (lv > 1) then
                v = v + (lv - 1) * d2
            end
            if (v > 0) then
                table.insert(desc, label .. ": +" .. v)
            elseif (v < 0) then
                table.insert(desc, label .. ": " .. v)
            end
        end
    end
    return desc
end)
```

### Game casual information

```lua
-- Game information
Game():onEvent(EVENT.Game.Start, function()

    --- Introduction to the game
    Game():prop("infoIntro", "none")

    --- Top center information
    time.setInterval(1, function()
        local info = {}
        local timeOfDay = time.ofDay()
        local tit = ""
        if (timeOfDay >= 0.00 and timeOfDay < 6.00) then
            tit = "before dawn"
        elseif (timeOfDay >= 6.00 and timeOfDay < 8.00) then
            tit = "morning"
        elseif (timeOfDay >= 8.00 and timeOfDay < 12.00) then
            tit = "day"
        elseif (timeOfDay >= 12.00 and timeOfDay < 13.00) then
            tit = "noon"
        elseif (timeOfDay >= 13.00 and timeOfDay < 18.00) then
            tit = "afternoon"
        elseif (timeOfDay >= 18.00 and timeOfDay < 22.00) then
            tit = "night"
        else
            tit = "deepnight"
        end
        local i, f = math.modf(timeOfDay)
        f = math.floor(59 * f)
        if (i < 10) then
            i = '0' .. i end
        if (f < 10) then
            f = '0' .. f
        end
        table.insert(info, tit)
        table.insert(info, i .. ':' .. f)
        Game():prop("infoCenter", info)
    end)

end)
```
