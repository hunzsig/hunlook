## SETUP 预设值参考

> 一个游戏肯定需要很多预设值，下列是一些常见的配置
>
> 参考一下，可以让你知道框架有什么功能，方便拓展，不重复造轮子
>
> 此框架有非常多的功能基于UI套件的前端协助，摒弃了原生的笨重

### 技能栏热键、等级极限、技能经验计算

```lua
-- 配置游戏 - 技能栏热键
-- A S H 被默认命令占用建议不使用
Game().abilityHotkey({ "Q", "W", "E", "R", "D", "F", "C", "V" })

-- 技能升级极限以及经验计算参数 max fixed ratio limit
Game().abilityExp(99, 100, 1.00, 10000)

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

-- [技能点信息]
---@param this Ability
Game().defineDescription("abilityLvPoint", function(this, _)
    if (this.levelUpNeedPoint() > 0) then
        return { colour.hex('升级需要技能点: ' .. this.levelUpNeedPoint(), 'EFBA16') }
    end
end)
```

### 物品栏热键、等级极限、技能经验计算

```lua
-- 配置游戏 - 物品栏热键
-- 这里使用魔兽的 78 45 12
Game().itemHotkey({ "Numpad7", "Numpad8", "Numpad4", "Numpad5", "Numpad1", "Numpad2" })

-- 技能升级极限以及经验计算参数 max fixed ratio limit
Game().itemExp(99, 100, 1.00, 10000)

-- 定义物品描述体
-- [基础信息]
---@param this Item
Game().defineDescription("itemBase", function(this, _)
    local desc = {}
    if (this.level() > 0) then
        if (this.level() < this.levelMax()) then
            table.insert(desc, this.name() .. ' - 等级 ' .. colour.white(this.level()) .. colour.gold(' / ' .. this.levelMax()))
        else
            table.insert(desc, this.name() .. ' - 等级 ' .. colour.white(this.level()))
        end
    else
        table.insert(desc, this.name())
    end
    return desc
end)
```

### 属性值展示

```lua
attribute.labelOpts = {
    attack = "攻击",
    defend = "防御",
    enchantWeapon_water = "水武装",
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

### 玩家财物单位转化

```lua
-- 财物设定
Game().worth("lumber", "木头", { "gold", 1000000 }) -- 1木 = 1000000金
Game().worth("gold", "黄金", { "silver", 100 }) -- 1金 = 100银
Game().worth("silver", "白银", { "copper", 100 }) -- 1银 = 100铜
Game().worth("copper", "青铜") -- 无下级
```

### 玩家仓库上限

```lua
-- 配置游戏 - 玩家仓库
Game().warehouseSlot(18)
```

### 聊天命令注册

```lua
--- -gg 投降
Game().command("^-gg$", function()
    evtData.triggerPlayer.quit("GG")
end)
--- -apm 查看玩家分钟操作数
Game().command("^-apm$", function(evtData)
    echo("您的apm为:" .. evtData.triggerPlayer.apm(), evtData.triggerPlayer.__HANDLE__)
end)
--- -d [+|-|=][NUMBER]减少/增加/设置视距
Game().command("^-d [-+=]%d+$", function(evtData)
    local cds = string.explode(" ", string.lower(evtData.chatString))
    local first = string.sub(cds[2], 1, 1)
    if (first == "+" or first == "-" or first == "=") then
        --视距
        local v = string.sub(cds[2], 2, string.len(cds[2]))
        v = math.abs(tonumber(v))
        if (v > 0) then
            local val = math.abs(v)
            async.call(evtData.triggerPlayer, function()
                if (first == "+") then
                    Camera().distance("+=" .. val)
                elseif (first == "-") then
                    Camera().distance("-=" .. val)
                elseif (first == "=") then
                    Camera().distance(val)
                end
                echo("视距已设置为：" .. Camera().distance(), evtData.triggerPlayer)
            end)
        end
    end
end)
if (DEBUGGING) then
    --- 流程掌控
    Game().command("^-proc [a-zA-Z0-9_]+$", function(evtData)
        local p = string.trim(evtData.matchedString)
        p = string.sub(p, 7, string.len(p))
        local proc
        if (p == "this") then
            proc = ProcessCurrent
        else
            proc = Processes.get(p)
        end
        if (instanceof(proc, "Process")) then
            print(p .. "流程已重置")
            proc.start()
        end
    end)
end
```

### F9 任务

```lua
-- 任务
Quest("主动投降", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content("-gg 投降并退出")

Quest("查看你的APM数值", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content("-apm 查看你的APM数值")

Quest("调整你的视距", "right")
    .icon("ReplaceableTextures\\CommandButtons\\BTNTomeOfRetraining.blp")
    .content({
    "-d +[number] 增加视距",
    "-d -[number] 减少视距",
    "-d =[number] 设置视距",
})
```

### 监听器

```lua
--- 恢复生命监听器
---@param obj Unit
monitor.create("monitor-life_back", 0.4,
    function(obj) obj.hpCur("+=" .. 0.4 * obj.hpRegen()) end,
    function(obj) return obj.isDead() or obj.hpRegen() == nil or obj.hpRegen() == 0 end
)

--- 恢复魔法监听器
---@param obj Unit
monitor.create("monitor-mana_back", 0.5,
    function(obj) obj.mpCur("+=" .. 0.5 * obj.mpRegen()) end,
    function(obj) return obj.isDead() or obj.mpRegen() == nil or obj.mpRegen() == 0 end
)

--- 硬直监听器
---@param obj Unit
monitor.create("monitor-punish_back", 1,
    function(obj) obj.punishCur("+=" .. obj.mpRegen()) end,
    function(obj) return obj.isDead() or obj.punishRegen() == nil or obj.punishRegen() == 0 end
)
```
