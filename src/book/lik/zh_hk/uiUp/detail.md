## Detail

```lua
local kit = "my_detail"

---@class UI_MyDetail:UIKit
local ui = UIKit(kit)

---@type UI_MyDetail
ui:onSetup(function(this)
    ---@class UI_MyDetailStage
    local stage = this:stage()

    ---@type Unit|nil
    stage.whichUnit = nil

    ---@type string
    stage.detailType = "data"

    stage.main = FrameBackdrop(kit .. "->main", FrameGameUI)
        :adaptive(true)
        :prop("texture", "bg\\display")
        :block(true)
        :esc(true)
        :close(true)
        :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0.055)
        :size(0.7, 0.36)
        :show(false)
        :onEvent(EVENT.Frame.Hide, function() FrameTooltips():show(false) end)

    stage.mainTxt = FrameText(kit .. "->mainTxt", stage.main)
        :relation(FRAME_ALIGN_TOP, stage.main, FRAME_ALIGN_TOP, 0, -0.03)
        :textAlign(TEXT_ALIGN_LEFT)
        :fontSize(13)

    stage.avatar = FrameBackdrop(kit .. "->avatar", stage.main)
        :relation(FRAME_ALIGN_TOP, stage.main, FRAME_ALIGN_TOP, -0.255, -0.03)
        :size(0.06, 0.06)

    stage.attackMode = FrameText(kit .. "->attackMode", stage.avatar)
        :relation(FRAME_ALIGN_LEFT_BOTTOM, stage.avatar, FRAME_ALIGN_RIGHT_BOTTOM, 0.003, 0.003)
        :textAlign(TEXT_ALIGN_LEFT)
        :fontSize(9)
        :text('···')

    stage.shiftBtn = FrameButton(kit .. "->shiftBtn", stage.main)
        :relation(FRAME_ALIGN_TOP, stage.main, FRAME_ALIGN_TOP, 0.24, -0.03)
        :texture("btn\\e_green")
        :size(0.06, 0.06 * 60 / 128)
        :text("查看説明")
        :onEvent(EVENT.Frame.Enter, function(evtData) evtData.triggerFrame:childHighlight():show(true) end)
        :onEvent(EVENT.Frame.Leave, function(evtData) evtData.triggerFrame:childHighlight():show(false) end)
        :onEvent(EVENT.Frame.LeftClick,
        function(evtData)
            evtData.triggerFrame:childHighlight():show(false)
            FrameTooltips():show(false)
            audio(Vcm("war3_MouseClick1"))
            if (stage.detailType == "data") then
                stage.detailType = "intro"
                evtData.triggerFrame:text("查看數值")
                evtData.triggerFrame:texture("btn\\e_red")
            else
                stage.detailType = "data"
                evtData.triggerFrame:text("查看説明")
                evtData.triggerFrame:texture("btn\\e_green")
            end
            this:updated()
        end)
    stage.shiftBtn:childText():relation(FRAME_ALIGN_CENTER, stage.shiftBtn, FRAME_ALIGN_CENTER, 0, 0.002)

    ---@type FrameText[]
    stage.attrTxt = {}
    local rel = { 0.004, 0.19, 0.342, 0.47 }
    for i = 1, 4 do
        stage.attrTxt[i] = FrameText(kit .. "->attrTxt->" .. i, stage.main)
            :relation(FRAME_ALIGN_LEFT_TOP, stage.avatar, FRAME_ALIGN_LEFT_BOTTOM, rel[i], -0.008)
            :fontSize(9)
            :textAlign(TEXT_ALIGN_LEFT)
            :text('···')
    end

    ---@type UI_MyCtlStage
    local ctlStage = UIKit("my_ctl"):stage()
    stage.detailBtn = FrameButton(kit .. "->detailBtn")
        :relation(FRAME_ALIGN_CENTER, FrameGameUI, FRAME_ALIGN_CENTER, 0, 0)
        :prop("texture", "btn/open")
        :alpha(160)
        :size(0.02, 0.02)
        :onEvent(EVENT.Frame.Leave, function(evtData) evtData.triggerFrame:alpha(160) end)
        :onEvent(EVENT.Frame.Enter, function(evtData) evtData.triggerFrame:alpha(255) end)
        :onEvent(EVENT.Frame.LeftClick, function() this:display() end)

    ---@param evtData noteOnPropGame|noteOnPropPlayer
    event.reaction(EVENT.Prop.Change, kit, function(evtData)
        if (isClass(evtData.triggerObject, PlayerClass)) then
            if (evtData.key == "selection" and sync.is()) then
                if (isClass(evtData.new, UnitClass)) then
                    async.call(evtData.triggerObject, function()
                        stage.detailBtn:show(true)
                    end)
                else
                    async.call(evtData.triggerObject, function()
                        stage.detailBtn:show(false)
                    end)
                end
                async.call(evtData.triggerObject, function()
                    stage.main:show(false)
                end)
            end
        end
    end)

end)

---@param whichUnit UnitClass
---@return string
function ui:attackMode(whichUnit)
    if (isClass(whichUnit, UnitClass) == false) then
        return "未知"
    end
    local mode = ''
    local params = ''
    local dmgType = ''
    local am = whichUnit:attackMode()
    if (am == nil) then
        mode = colour.hex(colour.gold, "[武器]無")
        params = colour.hex(colour.silver, "[不可攻擊]")
        dmgType = colour.hex(colour.silver, "[無武裝特性]")
    else
        if (am:mode() == "common") then
            if (whichUnit:attackRange() < 200) then
                mode = mode .. colour.hex(colour.gold, "[武器]近戰")
            else
                mode = mode .. colour.hex(colour.gold, "[武器]極速")
            end
            params = colour.hex(colour.silver, "[動作後立刻擊中]")
        elseif (am:mode() == "lightning") then
            mode = mode .. colour.hex(colour.gold, "[武器]閃電霹靂")
            if (am:scatter() > 0 and am:radius() > 0) then
                params = params .. colour.hex(colour.plum, "[" .. am:radius() .. "範圍隨機" .. math.floor(am:scatter()) .. "個目標進行散射]")
            end
            if (am:focus() > 0) then
                params = params .. colour.hex(colour.plum, "[對目標聚焦打擊" .. math.floor(am:focus()) .. "次]")
            end
            if (am:reflex() > 0) then
                params = params .. colour.hex(colour.plum, "[可隨機反彈傳遞" .. math.floor(am:reflex()) .. "次]")
            end
        elseif (am:mode() == "missile") then
            if (am:homing()) then
                mode = mode .. colour.hex(colour.gold, "[武器]可跟蹤型遠程箭矢")
            else
                mode = mode .. colour.hex(colour.gold, "[武器]非跟蹤型遠程箭矢")
            end
            params = params .. colour.hex(colour.plum, "[發射速度" .. math.floor(am:speed()) .. "]")
            params = params .. colour.hex(colour.plum, "[發射加速度" .. math.floor(am:acceleration()) .. "]")
            params = params .. colour.hex(colour.plum, "[拋物擬合高度" .. math.floor(am:height()) .. "]")
            if (am:scatter() > 0 and am:radius() > 0) then
                params = params .. colour.hex(colour.plum, "[" .. am:radius() .. "範圍隨機" .. math.floor(am:scatter()) .. "個目標進行散射]")
            end
            if (am:gatlin() > 0) then
                params = params .. colour.hex(colour.plum, "[對目標額外打擊" .. math.floor(am:gatlin()) .. "次]")
            end
            if (am:reflex() > 0) then
                params = params .. colour.hex(colour.plum, "[可隨機反彈傳遞" .. math.floor(am:reflex()) .. "次]")
            end
        end
        if (am:damageType() ~= nil and am:damageType() ~= DAMAGE_TYPE.common) then
            dmgType = colour.hex(colour.mistyrose, "[武裝附魔 " .. am:damageTypeLevel() .. " 級的" .. am:damageType().label .. "元素]")
        else
            dmgType = colour.hex(colour.silver, "[無武裝附魔元素]")
        end
    end
    return string.implode("|n", { mode, params, dmgType })
end

---@param key string
---@return string
function ui:intro(key)
    local data = {
        ["hp"] = "存活和某些技能需要生命值",
        ["hpRegen"] = "每秒恢復生命的量",
        ["mp"] = "釋放技能需要魔法值",
        ["mpRegen"] = "每秒恢復魔法的量",
        ["move"] = "每秒移動的距離",
        ["avoid"] = "被攻擊時躲避的幾率",
        ["aim"] = "攻擊時可降低目標迴避",
        ["defend"] = "受到傷害時的固定減免",
        ["shield"] = "先行抵禦傷害不與多數機制反應",
        ["shieldBack"] = "護盾重新恢復需要的時間",
        ["attackRipple"] = "普通攻擊的隨機增量",
        ["attack"] = "普通攻擊造成的傷害",
        [SYMBOL_MUT .. "attack"] = "普通攻擊的百分比加成",
        ["attackRange"] = "從位置到目標的極限攻擊距離",
        ["attackRangeAcquire"] = "發現目標後會發起攻擊的距離",
        ["attackSpace"] = "計算後的頻率",
        ["attackSpaceBase"] = "0%攻速加成時的頻率",
        ["attackSpeed"] = "以基礎頻率計算加成",
        [SYMBOL_MUT .. "attackSpeed"] = "攻擊速度的百分比加成",
        ["hpSuckAttack"] = "攻擊時的吸取生命比例",
        ["hpSuckAbility"] = "施法時的吸取生命比例",
        ["mpSuckAttack"] = "攻擊時的吸取魔法比例",
        ["mpSuckAbility"] = "施法時的吸取魔法比例",
        ["hurtIncrease"] = "受到傷害時的百分比加深",
        ["hurtReduction"] = "受到傷害時的百分比減免",
        ["damageIncrease"] = "造成傷害時的百分比加深",
        ["hurtRebound"] = "反傷的百分比比例",
        [SYMBOL_ODD .. "hurtRebound"] = "反傷的幾率",
        ["reborn"] = "重生時間",
        ["cure"] = "影響生命魔法恢復",
        ["stun"] = "攻擊時的眩暈時間",
        [SYMBOL_ODD .. "stun"] = "攻擊時的眩暈幾率",
        ["crit"] = "攻擊時的暴擊傷害加成",
        [SYMBOL_ODD .. "crit"] = "攻擊時的暴擊幾率",
        ["enchantMystery"] = "增加所有元素傷害",
        ["sight"] = "白晝時的最大視野",
        ["nsight"] = "夜晚時的最大視野",
        ["visible"] = "在範圍內可看穿隱形單位",
        ["coolDownPercent"] = "冷卻時間增減比例",
        ["costPercent"] = "施法消耗增減比例",
        ["castChantPercent"] = "吟唱時間增減比例",
        ["castDistancePercent"] = "施法距離增減比例",
        ["castRangePercent"] = "施法範圍增減比例",
        ["sp"] = "特殊的強化、弱化或設定",
    }
    for _, t in ipairs(ENCHANT_TYPES) do
        local e = Enchant(t)
        data[SYMBOL_E .. t] = "造成" .. e:name() .. "傷害時的提升"
        data[SYMBOL_RES .. SYMBOL_E .. t] = "受到" .. e:name() .. "傷害時的減免"
        data[SYMBOL_EI .. t] = "是否完全免疫" .. e:name() .. "傷害"
    end
    return data[key] or "未知"
end

---@param whichUnit Unit
function ui:updated(whichUnit)
    ---@type UI_MyDetailStage
    local stage = self:stage()
    whichUnit = whichUnit or stage.whichUnit
    if (isClass(whichUnit, UnitClass)) then
        stage.whichUnit = whichUnit
        stage.mainTxt:text(stage.whichUnit:name())
        stage.avatar:texture(stage.whichUnit:icon())
        local as = {
            {
                "hp",
                "hpRegen",
                "mp",
                "mpRegen",
                '',
                "move",
                "avoid",
                "aim",
                '',
                "defend",
                "shield",
                "shieldBack",
                '',
                "attackRipple",
                "attack",
                SYMBOL_MUT .. "attack",
                '',
                "attackRange",
                "attackRangeAcquire",
                '',
                "attackSpace",
                "attackSpaceBase",
                "attackSpeed",
                SYMBOL_MUT .. "attackSpeed",
                '',
                "sp"
            },
            {
                "hpSuckAttack",
                "hpSuckAbility",
                "mpSuckAttack",
                "mpSuckAbility",
                '',
                "hurtIncrease",
                "hurtReduction",
                "damageIncrease",
                "hurtRebound",
                SYMBOL_ODD .. "hurtRebound",
                '',
                "reborn",
                "cure",
                "stun",
                SYMBOL_ODD .. "stun",
                "crit",
                SYMBOL_ODD .. "crit",
                '',
                "enchantMystery",
                "sight",
                "nsight",
                "visible",
            },
            {},
            {},
        }
        for _, t in ipairs(ENCHANT_TYPES) do
            as[3][#as[3] + 1] = SYMBOL_E .. t
        end
        as[3][#as[3] + 1] = ''
        for _, t in ipairs(ENCHANT_TYPES) do
            as[3][#as[3] + 1] = SYMBOL_RES .. SYMBOL_E .. t
        end
        for _, t in ipairs(ENCHANT_TYPES) do
            as[4][#as[4] + 1] = SYMBOL_EI .. t
        end
        as[4][#as[4] + 1] = ''
        as[4][#as[4] + 1] = "coolDownPercent"
        as[4][#as[4] + 1] = "costPercent"
        as[4][#as[4] + 1] = "castChantPercent"
        as[4][#as[4] + 1] = "castDistancePercent"
        as[4][#as[4] + 1] = "castRangePercent"
        if (stage.detailType == "data") then
            stage.attackMode:text(ui:attackMode(stage.whichUnit))
            for i = 1, 4 do
                local d = {}
                for _, a in ipairs(as[i]) do
                    if (a == '') then
                        d[#d + 1] = ''
                    else
                        local v = stage.whichUnit:prop(a) or 0
                        if (a == "sp") then
                            if (v == 0) then
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": 無"
                            else
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. v
                            end
                        elseif (a == "reborn") then
                            if (v > 0) then
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. attribute.form(a)
                            else
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": 無法復活"
                            end
                        elseif (string.subPos(a, SYMBOL_EI) == 1) then
                            local label = "否"
                            if (v > 0) then
                                label = "是"
                            end
                            d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. label
                        else
                            d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. v .. attribute.form(a)
                        end
                    end
                end
                stage.attrTxt[i]:text(string.implode('|n', d))
            end
        elseif (stage.detailType == "intro") then
            stage.attackMode:text("説明單位攻擊模式|n包含戰鬥模式、箭矢屬性、附魔等信息")
            for i = 1, 4 do
                local d = {}
                for _, a in ipairs(as[i]) do
                    if (a == '') then
                        d[#d + 1] = ''
                    else
                        local label = ui:intro(a)
                        d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. label
                    end
                end
                stage.attrTxt[i]:text(string.implode('|n', d))
            end
        end
    end
end

function ui:display()
    ---@type UI_MyDetailStage
    local stage = ui:stage()
    local showing = stage.main:show()
    if (showing) then
        audio(Vcm("war3_MouseClick2"))
        stage.main:show(false)
        stage.detailType = "data"
        stage.shiftBtn:text("查看説明")
        stage.shiftBtn:texture("btn\\e_green")
        return
    end
    audio(Vcm("war3_MouseClick1"))
    stage.main:show(true)
    self:updated(PlayerLocal():selection())
end
```
