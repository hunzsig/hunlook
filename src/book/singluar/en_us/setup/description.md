### Ability Description

```lua
-- Define skill descriptor
-- [Basic info]
---@param this Ability
---@param options {level:number}
Game().defineDescription("abilityBase", function(this, options)
    local desc = {}
    local lv = math.floor(options.level or this.level())
    local tt = this.targetType()
    if (isObject(this, "Ability")) then
        if (tt ~= ABILITY_TARGET_TYPE.PAS) then
            table.insert(desc, this.name() .. ' - lv ' .. colour.gold(lv) .. '（' .. colour.gold(this.hotkey()) .. '）')
        else
            table.insert(desc, this.name() .. " - lv " .. colour.gold(lv))
        end
    else
        table.insert(desc, this.name())
    end
    table.insert(desc, 'type: ' .. colour.gold(tt.label))
    if (tt ~= ABILITY_TARGET_TYPE.PAS) then
        local chantCast = this.castChant(lv)
        if (chantCast > 0) then
            table.insert(desc, 'chant: ' .. colour.skyLight(chantCast .. " Sec"))
        else
            table.insert(desc, 'chant: ' .. colour.skyLight("instant"))
        end
        local keepCast = this.castKeep(lv)
        if (keepCast > 0) then
            table.insert(desc, 'max: ' .. colour.skyLight(keepCast .. " Sec"))
        end
    end
    return desc
end)

-- [Ability Point]
---@param this Ability
Game().defineDescription("abilityLvPoint", function(this, _)
    if (this.levelUpNeedPoint() > 0) then
        return { colour.hex('need: ' .. this.levelUpNeedPoint(), 'EFBA16') }
    end
end)
```

### Item Description

```lua
-- 定义物品技能描述体
-- [基础信息]
---@param this Ability
Game().defineDescription("itemAbility", function(this, options)
    local str = { '', this.name() .. ': ' }
    local lv = math.floor(this.level())
    local tt = this.targetType()
    local indent = '    '
    table.insert(str, indent .. '类型: %s')
    table.insert(options, { 'ffcc00', tt.label })
    if (tt ~= ABILITY_TARGET_TYPE.PAS) then
        local chantCast = this.castChant(lv)
        if (chantCast > 0) then
            table.insert(str, indent .. 'chant: %s 秒')
            table.insert(options, { 'ccffff', chantCast })
        else
            table.insert(str, indent .. 'chant: %s')
            table.insert(options, { 'ccffff', 'instant' })
        end
        local keepCast = this.castKeep(lv)
        if (keepCast > 0) then
            table.insert(str, indent .. 'max: %s Sec')
            table.insert(options, { 'ccffff', keepCast })
        end
    end
    return colour.format(string.implode('|n', str), 'ee82ee', options)
end)

-- Define item description
-- [Basic info]
---@param this Item
Game().defineDescription("itemBase", function(this, _)
    local desc = {}
    local name
    if (this.level() > 0) then
        name = this.name() .. '[' .. colour.white(this.level()) .. ' lv]'
    else
        name = this.name()
    end
    if (isObject(this.ability(), "Ability")) then
        local tt = this.ability().targetType()
        if (isObject(this, "Item")) then
            if (tt ~= ABILITY_TARGET_TYPE.PAS and this.hotkey() ~= nil) then
                name = name .. '（' .. colour.gold(this.hotkey()) .. '）'
            end
            table.insert(desc, name)
        else
            table.insert(desc, name)
        end
        desc = table.merge(desc, Game().combineDescription(this.ability(), nil, "itemAbility", "<D>", "attributes"))
        if (this.charges() > 0) then
            table.insert(desc, colour.white("|nremain: " .. this.charges()))
        end
    else
        table.insert(desc, name)
    end
    if (this.level() < this.levelMax()) then
        table.insert(desc, colour.format('max %s lv', 'c0c0c0', { { "ffcc00", this.levelMax() } }))
    end
    return desc
end)
```

### Attribute Description

```lua
attribute.labelOpts = {
    attack = "Atk",
    defend = "Def",
    ["<WEAPON>e_water"] = "Weapon-Water",
}

-- Define intelligent attribute description body
-- [Basic info]
---@param this Ability|Item
---@param options {level:number}
Game().defineDescription("attributes", function(this, options)
    if (type(this.attributes) ~= "function") then
        return nil
    end
    local attributes = this.attributes()
    if (type(attributes) ~= "table" or #attributes == 0) then
        return nil
    end
    local desc = {}
    local lv = math.floor(options.level or this.level())
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
        if (attribute.labelOpts[method] ~= nil) then
            local v = d1
            if (lv > 1) then
                v = v + (lv - 1) * d2
            end
            if (v > 0) then
                table.insert(desc, attribute.labelOpts[method] .. ": +" .. v)
            elseif (v < 0) then
                table.insert(desc, attribute.labelOpts[method] .. ": " .. v)
            end
        end
    end
    return desc
end)
```

### Game Description

```lua
-- Game information
Game().onEvent(EVENT.Game.Start, function()

    --- Introduction to the game
    Game().prop("infoIntro", "none")

    --- Top center information
    time.setInterval(1, function()
        local info = {}
        local timeOfDay = time.timeOfDay()
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
            tit = "ngiht"
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
        Game().prop("infoCenter", info)
    end)

end)
```
