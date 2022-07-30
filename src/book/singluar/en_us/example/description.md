## Description

> The framework provides a combination method of text description body
>
> Under the Game object

#### First define your preferred descriptor

> return string[] or nil

```lua
-- 这样一个描述配置就定义好了
Game().defineDescription("myAbility", function(this, options)
    return {"第一行","第二行"}
end)
```

> The description body defines the callback function The first this refers to the object you refer to, such as Ability, Item, Unit

#### Take a look at common descriptors for skills

> This description body introduces an options, extra data, which will be brought into each reference, which has a whichLevel, and how to pass it will be shown later.

```lua
-- 定义技能描述体
-- [基础信息]
---@param this Ability
---@param options {whichLevel:number}
Game().defineDescription("abilityBase", function(this, options)
    local desc = {}
    local whichLevel = math.floor(options.whichLevel or this.level())
    local tt = this.targetType()
    if (tt ~= ABILITY_TARGET_TYPE.PAS or this.coolDownRemain() > 0) then
        table.insert(desc, this.name() .. ' - 等级 ' .. colour.gold(whichLevel) .. '（' .. colour.gold(this.hotkey()) .. '）')
    else
        table.insert(desc, this.name() .. " - 等级 " .. colour.gold(whichLevel))
    end
    table.insert(desc, '类型：' .. colour.gold(tt.label))
    if (tt ~= ABILITY_TARGET_TYPE.PAS or this.coolDownRemain() > 0) then
        local chantCast = this.castChant(whichLevel)
        if (chantCast > 0) then
            table.insert(desc, '吟唱时间：' .. colour.skyLight(chantCast .. " 秒"))
        else
            table.insert(desc, '吟唱时间：' .. colour.skyLight("瞬间施法"))
        end
        local keepCast = this.castKeep(whichLevel)
        if (keepCast > 0) then
            table.insert(desc, '最大施法持续：' .. colour.skyLight(keepCast .. " 秒"))
        end
    end
    return desc
end)
```

#### After the description body is defined, you can of course use them to combine to build your text data

```lua
-- 简单引用
local txtArray = Game().combineDescription(whichAbility, nil, "abilityBase")

-- 使用options，whichLevel设10
local txtArray = Game().combineDescription(whichAbility, {whichLevel = 10}, "abilityBase")

-- 前面我们还定义了一个myAbility，也可以使用两组数据，按你引入的顺序合并
local txtArray = Game().combineDescription(whichAbility, nil, "abilityBase", "myAbility")
```

#### If your object defines a description function, you can also use the specific abbreviation &lt;D&gt; to import the function's callback data

> You can refer to the existing writing methods of Ability, Item, and Unit.

```lua
-- 对象定义descrption特殊引入
local txtArray = Game().combineDescription(whichAbility, nil, "<D>", "abilityBase")
```

#### Use string array data directly, or supply it to combineDescription

```lua
-- 直接引入table
local txtArray = Game().combineDescription(whichAbility, nil, {"第一行","第二行"})
```
