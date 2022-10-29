## Description 描述体

> 框架提供了文本描述体的组合方法
>
> 在Game()对象下

#### 先定义你喜欢的描述体

> 可返回 string[] 或者 nil

```lua
-- 这样一个描述配置就定义好了
Game().defineDescription("myAbility", function(this, options)
    return {"第一行","第二行"}
end)
```

> 描述体定义回调函数第一个this指你所引用的对象，例如Ability、Item、Unit

#### 看看技能的常用描述体

> 这个描述体引入了一个options，额外数据，会带入到每一个引用，里面有个whichLevel，后面会演示怎么传入

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
        table.insert(desc, this.name() .. ' - 等级 ' .. colour.hex(colour.gold, whichLevel) .. '（' .. colour.hex(colour.gold, this.hotkey()) .. '）')
    else
        table.insert(desc, this.name() .. " - 等级 " .. colour.hex(colour.gold, whichLevel))
    end
    table.insert(desc, '类型：' .. colour.hex(colour.gold, tt.label))
    if (tt ~= ABILITY_TARGET_TYPE.PAS or this.coolDownRemain() > 0) then
        local chantCast = this.castChant(whichLevel)
        if (chantCast > 0) then
            table.insert(desc, '吟唱时间：' .. colour.hex(colour.skyblue, chantCast .. " 秒"))
        else
            table.insert(desc, '吟唱时间：' .. colour.hex(colour.skyblue, "瞬间施法"))
        end
        local keepCast = this.castKeep(whichLevel)
        if (keepCast > 0) then
            table.insert(desc, '最大施法持续：' .. colour.hex(colour.skyblue, keepCast .. " 秒"))
        end
    end
    return desc
end)
```

#### 描述体定义后当然可以使用它们进行组合，构建你的文本数据

```lua
-- 简单引用
local txtArray = Game().combineDescription(whichAbility, nil, "abilityBase")

-- 使用options，whichLevel设10
local txtArray = Game().combineDescription(whichAbility, {whichLevel = 10}, "abilityBase")

-- 前面我们还定义了一个myAbility，也可以使用两组数据，按你引入的顺序合并
local txtArray = Game().combineDescription(whichAbility, nil, "abilityBase", "myAbility")
```

#### Ability、Item、Unit对象定义了description函数，可以使用特定的简称 &lt;D&gt; 来引入该函数的回调数据

```lua
-- 对象定义descrption特殊引入
local txtArray = Game().combineDescription(whichAbility, nil, "<D>", "abilityBase")
```

#### 直接使用字符串数组数据，也可以供给 combineDescription 使用

```lua
-- 直接引入table
local txtArray = Game().combineDescription(whichAbility, nil, {"第一行","第二行"})
```
