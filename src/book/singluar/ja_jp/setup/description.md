### スキル情報

```lua
--スキル記述体を定義する
--［基礎情報］
---@param this Ability
---@param options {level:number}
Game().defineDescription("abilityBase", function(this, options)
    local desc = {}
    local lv = math.floor(options.level or this.level())
    local tt = this.targetType()
    if (isObject(this, "Ability")) then
        if (tt ~= ABILITY_TARGET_TYPE.PAS) then
            table.insert(desc, this.name() .. ' - 等級 ' .. colour.gold(lv) .. '（' .. colour.gold(this.hotkey()) .. '）')
        else
            table.insert(desc, this.name() .. " - 等級 " .. colour.gold(lv))
        end
    else
        table.insert(desc, this.name())
    end
    table.insert(desc, 'を選択してオプションを設定します：' .. colour.gold(tt.label))
    if (tt ~= ABILITY_TARGET_TYPE.PAS) then
        local chantCast = this.castChant(lv)
        if (chantCast > 0) then
            table.insert(desc, '吟唱時間：' .. colour.skyLight(chantCast .. " 秒"))
        else
            table.insert(desc, '吟唱時間：' .. colour.skyLight("瞬間施法"))
        end
        local keepCast = this.castKeep(lv)
        if (keepCast > 0) then
            table.insert(desc, '最大施法継続：' .. colour.skyLight(keepCast .. " 秒"))
        end
    end
    return desc
end)

-- [技能点信息]
---@param this Ability
Game().defineDescription("abilityLvPoint", function(this, _)
    if (this.levelUpNeedPoint() > 0) then
        return { colour.hex('アップグレードにはスキルポイントが必要: ' .. this.levelUpNeedPoint(), 'EFBA16') }
    end
end)
```

### 物品信息

```lua
-- 定义物品技能描述体
-- [基础信息]
---@param this Ability
Game().defineDescription("itemAbility", function(this, options)
    local str = { '', this.name() .. ': ' }
    local lv = math.floor(this.level())
    local tt = this.targetType()
    local indent = '    '
    table.insert(str, indent .. 'を選択してオプションを設定します：%s')
    table.insert(options, { 'ffcc00', tt.label })
    if (tt ~= ABILITY_TARGET_TYPE.PAS) then
        local chantCast = this.castChant(lv)
        if (chantCast > 0) then
            table.insert(str, indent .. '吟唱時間：%s 秒')
            table.insert(options, { 'ccffff', chantCast })
        else
            table.insert(str, indent .. '吟唱時間：%s')
            table.insert(options, { 'ccffff', '瞬間施法' })
        end
        local keepCast = this.castKeep(lv)
        if (keepCast > 0) then
            table.insert(str, indent .. '最大施法継続：%s 秒')
            table.insert(options, { 'ccffff', keepCast })
        end
    end
    return colour.format(string.implode('|n', str), 'ee82ee', options)
end)

-- 定义物品描述体
-- [基础信息]
---@param this Item
Game().defineDescription("itemBase", function(this, _)
    local desc = {}
    local name
    if (this.level() > 0) then
        name = this.name() .. '[' .. colour.white(this.level()) .. ' 级]'
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
            table.insert(desc, colour.white("|n残り回数：" .. this.charges()))
        end
    else
        table.insert(desc, name)
    end
    if (this.level() < this.levelMax()) then
        table.insert(desc, colour.format('最大アップグレード可能 %s レベル', 'c0c0c0', { { "ffcc00", this.levelMax() } }))
    end
    return desc
end)
```

### 属性信息

```lua
attribute.labelOpts = {
    attack = "攻撃する",
    defend = "ガード",
    ["<WEAPON>e_water"] = "水武装",
}

-- 定义智能属性描述体
-- [基础信息]
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

### 游戏随性信息

```lua
-- 游戏信息
Game().onEvent(EVENT.Game.Start, function()

    --- 游戏介绍
    Game().prop("infoIntro", "しばらく")

    --- 中央顶部信息
    time.setInterval(1, function()
        local info = {}
        local timeOfDay = time.timeOfDay()
        local tit = ""
        if (timeOfDay >= 0.00 and timeOfDay < 6.00) then
            tit = "夜明け前"
        elseif (timeOfDay >= 6.00 and timeOfDay < 8.00) then
            tit = "早朝"
        elseif (timeOfDay >= 8.00 and timeOfDay < 12.00) then
            tit = "午前"
        elseif (timeOfDay >= 12.00 and timeOfDay < 13.00) then
            tit = "昼ごろ"
        elseif (timeOfDay >= 13.00 and timeOfDay < 18.00) then
            tit = "午後"
        elseif (timeOfDay >= 18.00 and timeOfDay < 22.00) then
            tit = "夜"
        else
            tit = "深夜"
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
