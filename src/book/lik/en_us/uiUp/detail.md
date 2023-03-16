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
        :text("Detail")
        :onEvent(EVENT.Frame.Enter, function(evtData) evtData.triggerFrame:childHighlight():show(true) end)
        :onEvent(EVENT.Frame.Leave, function(evtData) evtData.triggerFrame:childHighlight():show(false) end)
        :onEvent(EVENT.Frame.LeftClick,
        function(evtData)
            evtData.triggerFrame:childHighlight():show(false)
            FrameTooltips():show(false)
            audio(Vcm("war3_MouseClick1"))
            if (stage.detailType == "data") then
                stage.detailType = "intro"
                evtData.triggerFrame:text("Value")
                evtData.triggerFrame:texture("btn\\e_red")
            else
                stage.detailType = "data"
                evtData.triggerFrame:text("Detail")
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
        return "???"
    end
    local mode = ''
    local params = ''
    local dmgType = ''
    local am = whichUnit:attackMode()
    if (am == nil) then
        mode = colour.hex(colour.gold, "[Weapon]None")
        params = colour.hex(colour.silver, "[Inviolability]")
        dmgType = colour.hex(colour.silver, "[No Enchantment]")
    else
        if (am:mode() == "common") then
            if (whichUnit:attackRange() < 200) then
                mode = mode .. colour.hex(colour.gold, "[Weapon]Closer")
            else
                mode = mode .. colour.hex(colour.gold, "[Weapon]Moment")
            end
            params = colour.hex(colour.silver, "[Hit immediately after action]")
        elseif (am:mode() == "lightning") then
            mode = mode .. colour.hex(colour.gold, "[Weapon]Thunderbolt")
            if (am:scatter() > 0 and am:radius() > 0) then
                params = params .. colour.hex(colour.plum, "[" .. am:radius() .. " random" .. math.floor(am:scatter()) .. " targets scattering]")
            end
            if (am:focus() > 0) then
                params = params .. colour.hex(colour.plum, "[Foucs" .. math.floor(am:focus()) .. " times]")
            end
            if (am:reflex() > 0) then
                params = params .. colour.hex(colour.plum, "[Random rebound transmission" .. math.floor(am:reflex()) .. " times]")
            end
        elseif (am:mode() == "missile") then
           if (am:homing()) then
                mode = mode .. colour.hex(colour.gold, "[Weapon]Trackable")
            else
                mode = mode .. colour.hex(colour.gold, "[Weapon]Non-tracking")
            end
            params = params .. colour.hex(colour.plum, "[Spd " .. math.floor(am:speed()) .. "]")
            params = params .. colour.hex(colour.plum, "[Acc " .. math.floor(am:acceleration()) .. "]")
            params = params .. colour.hex(colour.plum, "[Height " .. math.floor(am:height()) .. "]")
            if (am:scatter() > 0 and am:radius() > 0) then
                params = params .. colour.hex(colour.plum, "[" .. am:radius() .. " random" .. math.floor(am:scatter()) .. " targets scattering]")
            end
            if (am:gatlin() > 0) then
                params = params .. colour.hex(colour.plum, "[Hit the target extra" .. math.floor(am:gatlin()) .. " times]")
            end
            if (am:reflex() > 0) then
                params = params .. colour.hex(colour.plum, "[Random rebound transmission" .. math.floor(am:reflex()) .. " times]")
            end
        end
        if (am:damageType() ~= nil and am:damageType() ~= DAMAGE_TYPE.common) then
            dmgType = colour.hex(colour.mistyrose, "[Armed enchantment " .. am:damageTypeLevel() .. " level " .. am:damageType().label .. " element]")
        else
            dmgType = colour.hex(colour.silver, "[Unarmed enchantment element]")
        end
    end
    return string.implode("|n", { mode, params, dmgType })
end

---@param key string
---@return string
function ui:intro(key)
    local data = {
        ["hp"] = "Survival and some skills require HP",
        ["hpRegen"] = "The amount of life restored per second",
        ["mp"] = "Release skill requires magic value",
        ["mpRegen"] = "The amount of magic restored per second",
        ["move"] = "Distance moved per second",
        ["avoid"] = "The chance to evade when attacked",
        ["aim"] = "Reduce target avoidance during attack",
        ["defend"] = "Fixed reduction when injured",
        ["shield"] = "Resisting damage first does not react with most mechanisms",
        ["shieldBack"] = "Time required for shield recovery",
        ["attackRipple"] = "random increment of normal attack",
        ["attack"] = "Damage caused by ordinary attack",
        [SYMBOL_MUT.. "Attack"] = "normal attack percentage bonus",
        ["attackRange"] = "Maximum attack distance from position to target",
        ["attackRangeAcquire"] = "The distance to attack after finding the target",
        ["attackSpace"] = "Calculated frequency",
        ["attackSpaceBase"] = "Frequency at 0% attack speed bonus",
        ["attackSpeed"] = "Calculate the bonus based on the base frequency",
        [SYMBOL_MUT.. "AttackSpeed"] = "Percentage bonus of attack speed",
        ["hpSuckAttack"] = "The proportion of life absorbed during attack",
        ["hpSuckAbility"] = "Percentage of life absorbed when casting",
        ["mpSuckAttack"] = "The proportion of absorbed magic when attacking",
        ["mpSuckAbility"] = "The percentage of absorbed magic when casting",
        ["hurtIncrease"] = "The percentage of damage increases",
        ["hurtReduction"] = "Percentage reduction when injured",
        ["damageIncrease"] = "Percentage increase when causing damage",
        ["hurtRebound"] = "Percentage of the injury",
        [SYMBOL_ODD.. "HurtRebound"] = "Chance of reverse injury",
        ["reborn"] = "reborn time",
        ["cure"] = "Affects the recovery of life magic",
        ["stun"] = "Vertigo time during attack",
        [SYMBOL_ODD.. "Stun"] = "Vertigo probability during attack",
        ["crit"] = "Critical damage bonus during attack",
        [SYMBOL_ODD.. "Crit"] = "Critical hit probability during attack",
        ["enhanceMystery"] = "Increase the damage of all elements",
        ["sight"] = "Maximum field of vision in daytime",
        ["insight"] = "Maximum field of view at night",
        ["visible"] = "invisible units can be seen through in the range",
        ["coolDownPercent"] = "Increase/decrease ratio of cooling time",
        ["costPercent"] = "Increase/decrease ratio of casting cost",
        ["castChantPercent"] = "Increase/decrease ratio of singing time",
        ["castDistancePercent"] = "Increase/decrease ratio of casting distance",
        ["castRangePercent"] = "Increase/decrease ratio of casting range",
        ["sp"] = "Special strengthening, weakening or setting",
    }
    for _, t in ipairs(ENCHANT_TYPES) do
        local e = Enchant(t)
        data[SYMBOL_E .. t] = "Cause " .. e:name() .. " increase when injured"
        data[SYMBOL_RES .. SYMBOL_E .. t] = "Suffer " .. e:name() .. " reduction in case of injury"
        data[SYMBOL_EI .. t] = "Complete immunity or not " .. e:name() .. " damage"
    end
    return data[key] or "???"
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
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": None"
                            else
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. v
                            end
                        elseif (a == "reborn") then
                            if (v > 0) then
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. attribute.form(a)
                            else
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": Unable to revive"
                            end
                        elseif (string.subPos(a, SYMBOL_EI) == 1) then
                            local label = "N"
                            if (v > 0) then
                                label = "Y"
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
            stage.attackMode:text("Description of unit attack mode|nContains combat mode, arrow attribute, enchantment and other information")
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
        stage.shiftBtn:text("Detail")
        stage.shiftBtn:texture("btn\\e_green")
        return
    end
    audio(Vcm("war3_MouseClick1"))
    stage.main:show(true)
    self:updated(PlayerLocal():selection())
end
```
