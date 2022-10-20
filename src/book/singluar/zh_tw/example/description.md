## Description 描述體

> 框架提供了文字描述體的組合方法
>
> 在Game()物件下

#### 先定義你喜歡的描述體

> 可返回 string[] 或者 nil

```lua
-- 這樣一個描述配置就定義好了
Game().defineDescription("myAbility", function(this, options)
    return {"第一行","第二行"}
end)
```

> 描述體定義回撥函式第一個this指你所引用的物件，例如Ability、Item、Unit

#### 看看技能的常用描述體

> 這個描述體引入了一個options，額外資料，會帶入到每一個引用，裡麵有個whichLevel，後麵會演示怎麼傳入

```lua
-- 定義技能描述體
-- [基礎資訊]
---@param this Ability
---@param options {whichLevel:number}
Game().defineDescription("abilityBase", function(this, options)
    local desc = {}
    local whichLevel = math.floor(options.whichLevel or this.level())
    local tt = this.targetType()
    if (tt ~= ABILITY_TARGET_TYPE.PAS or this.coolDownRemain() > 0) then
        table.insert(desc, this.name() .. ' - 等級 ' .. colour.gold(whichLevel) .. '（' .. colour.gold(this.hotkey()) .. '）')
    else
        table.insert(desc, this.name() .. " - 等級 " .. colour.gold(whichLevel))
    end
    table.insert(desc, '型別：' .. colour.gold(tt.label))
    if (tt ~= ABILITY_TARGET_TYPE.PAS or this.coolDownRemain() > 0) then
        local chantCast = this.castChant(whichLevel)
        if (chantCast > 0) then
            table.insert(desc, '吟唱時間：' .. colour.skyLight(chantCast .. " 秒"))
        else
            table.insert(desc, '吟唱時間：' .. colour.skyLight("瞬間施法"))
        end
        local keepCast = this.castKeep(whichLevel)
        if (keepCast > 0) then
            table.insert(desc, '最大施法持續：' .. colour.skyLight(keepCast .. " 秒"))
        end
    end
    return desc
end)
```

#### 描述體定義後當然可以使用它們進行組合，構建你的文字資料

```lua
-- 簡單引用
local txtArray = Game().combineDescription(whichAbility, nil, "abilityBase")

-- 使用options，whichLevel設10
local txtArray = Game().combineDescription(whichAbility, {whichLevel = 10}, "abilityBase")

-- 前麵我們還定義了一個myAbility，也可以使用兩組資料，按你引入的順序合並
local txtArray = Game().combineDescription(whichAbility, nil, "abilityBase", "myAbility")
```

#### Ability、Item、Unit物件定義了description函式，可以使用特定的簡稱 &lt;D&gt; 來引入該函式的回撥資料

```lua
-- 物件定義descrption特殊引入
local txtArray = Game().combineDescription(whichAbility, nil, "<D>", "abilityBase")
```

#### 直接使用字串陣列資料，也可以供給 combineDescription 使用

```lua
-- 直接引入table
local txtArray = Game().combineDescription(whichAbility, nil, {"第一行","第二行"})
```
