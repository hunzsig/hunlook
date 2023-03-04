## Detail

```lua
local kit = 'my_detail'

---@type UIKitClass
local this = UIKit(kit)

this:prop("detailType", "data")

this:onSetup(function()
    ---@class myDetailStage
    local stage = this:stage()

    stage.main = FrameBackdrop(kit .. "->main", FrameGameUI)
        :adaptive(true)
        :texture("bg/display")
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
        :texture("btn/green")
        :size(0.06, 0.06 * 60 / 128)
        :text("説明の表示")
        :onEvent(EVENT.Frame.Enter, function(evtData) evtData.triggerFrame:childHighlight():show(true) end)
        :onEvent(EVENT.Frame.Leave, function(evtData) evtData.triggerFrame:childHighlight():show(false) end)
        :onEvent(EVENT.Frame.LeftClick,
        function(evtData)
            evtData.triggerFrame:childHighlight():show(false)
            FrameTooltips():show(false)
            audio(Vcm("war3_MouseClick1"))
            local detailType = this:prop("detailType")
            if (detailType == "data") then
                detailType = "intro"
                evtData.triggerFrame:text("数値の表示")
                evtData.triggerFrame:texture("btn/red")
            else
                detailType = "data"
                evtData.triggerFrame:text("説明の表示")
                evtData.triggerFrame:texture("btn/green")
            end
            this:prop("detailType", detailType)
            this:refresh()
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

    ---@type FrameBackdrop
    local bg = UIKit("my_ctl"):stage().bg
    stage.detailBtn = FrameButton(kit .. "->detailBtn", bg)
        :relation(FRAME_ALIGN_LEFT_BOTTOM, bg, FRAME_ALIGN_LEFT_TOP, 0.064, -0.03)
        :prop("texture", "btn/what")
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
function this:attackMode(whichUnit)
    if (isClass(whichUnit, UnitClass) == false) then
        return "不明"
    end
    local mode = ''
    local params = ''
    local dmgType = ''
    local am = whichUnit:attackMode()
    if (am == nil) then
        mode = colour.hex(colour.gold, "[武器]なし")
        params = colour.hex(colour.silver, "[攻撃不可]")
        dmgType = colour.hex(colour.silver, "[非武装特性]")
    else
        if (am:mode() == "common") then
            if (whichUnit:attackRange() < 200) then
                mode = mode .. colour.hex(colour.gold, "[武器]接近戦")
            else
                mode = mode .. colour.hex(colour.gold, "[武器]瞬間")
            end
            params = colour.hex(colour.silver, "[動作直後にヒット]")
        elseif (am:mode() == "lightning") then
            mode = mode .. colour.hex(colour.gold, "[武器]稲妻")
            if (am:scatter() > 0 and am:radius() > 0) then
                params = params .. colour.hex(colour.plum, "[" .. am:radius() .. "範囲ランダム" .. math.floor(am:scatter()) .. "個のターゲットを散乱する]")
            end
            if (am:focus() > 0) then
                params = params .. colour.hex(colour.plum, "[ターゲットフォーカスへの打撃" .. math.floor(am:focus()) .. "次]")
            end
            if (am:reflex() > 0) then
                params = params .. colour.hex(colour.plum, "[ランダムバウンス伝達" .. math.floor(am:reflex()) .. "次]")
            end
        elseif (am:mode() == "missile") then
            if (am:homing()) then
                mode = mode .. colour.hex(colour.gold, "[武器]追跡型遠隔矢印")
            else
                mode = mode .. colour.hex(colour.gold, "[武器]非追跡型遠隔矢印")
            end
            params = params .. colour.hex(colour.plum, "[はっしゃそくど" .. math.floor(am:speed()) .. "]")
            params = params .. colour.hex(colour.plum, "[はっしゃかそくど" .. math.floor(am:acceleration()) .. "]")
            params = params .. colour.hex(colour.plum, "[フィット高さ" .. math.floor(am:height()) .. "]")
            if (am:scatter() > 0 and am:radius() > 0) then
                params = params .. colour.hex(colour.plum, "[" .. am:radius() .. "範囲ランダム" .. math.floor(am:scatter()) .. "個のターゲットを散乱する]")
            end
            if (am:gatlin() > 0) then
                params = params .. colour.hex(colour.plum, "[目標への追加打撃" .. math.floor(am:gatlin()) .. "次]")
            end
            if (am:reflex() > 0) then
                params = params .. colour.hex(colour.plum, "[ランダムバウンス伝達" .. math.floor(am:reflex()) .. "次]")
            end
        end
        if (am:damageType() ~= nil and am:damageType() ~= DAMAGE_TYPE.common) then
            dmgType = colour.hex(colour.mistyrose, "[武装付魔 " .. am:damageTypeLevel() .. " レベルの" .. am:damageType().label .. "エレメント]")
        else
            dmgType = colour.hex(colour.silver, "[無武装付魔元素]")
        end
    end
    return string.implode("|n", { mode, params, dmgType })
end

---@param key string
---@return string
function this:intro(key)
    local data = {
        ["hp"] = "生存といくつかのスキルにはライフ値が必要,
        ["hpRegen"]＝"1秒当たりの生命回復量,
        ["mp"] = "スキルを解放するには魔法値が必要,
        ["mpRegen"] = "魔法を回復する毎秒の量",
        ["move"] = "毎秒移動する距離,
        ["avoid"] = "攻撃された時に避ける確率,
        ["aim"] = "攻撃時にターゲットを下げて回避できる,
        ["defend"] = "被害を受けた場合の固定減免,
        ["shield"] = "先行防御ダメージは多くのメカニズムと反応しない,
        ["shieldBack"] = "シールドの再回復に要する時間,
        ["attackRipple"] = "通常攻撃のランダム増分,
        ["attack"] = "通常攻撃によるダメージ,
        [SYMBOL_MUT.."attack"]＝"通常攻撃のパーセンテージ加算,
        ["attackRange"] = "位置から目標までの極限攻撃距離,
        ["attackRangeAcquire"] = "ターゲットを発見すると攻撃が開始される距離,
        ["attackSpace"] = "計算後の周波数,
        ["attackSpaceBase"] = "0%攻撃速度加算時の周波数,
        ["attackSpeed"]＝"加算を基本周波数で計算する,
        [SYMBOL_MUT.."attackSpeed"]＝"攻撃速度のパーセンテージ加算,
        ["hpSuckAttack"] = "攻撃時の吸い上げライフスケール,
        ["hpSuckAbility"] = "施法時の吸入ライフスケール,
        ["mpSuckAttack"] = "攻撃時の吸い込み魔法の割合,
        ["mpSuckAbility"] = "施術時の吸引魔法割合,
        ["hurtIncrease"] = "ダメージを受けたときの割合が深くなる,
        ["hurtReduction"] = "ダメージを受けた場合のパーセンテージ減免,
        ["damageIncrease"] = "ダメージを与えたときのパーセンテージが深くなる,
        ["hurtRebound"] = "反傷の割合,
        [SYMBOL_ODD.."hurtRebound"]＝"反傷の確率,
        ["reborn"] = "再生時間,
        ["cure"] = "生命魔法回復に影響,
        ["stun"] = "攻撃時の眩暈時間,
        [SYMBOL_ODD.."stun"]＝"攻撃時のめまい確率,
        ["crit"] = "攻撃時の致命的な一撃ダメージ加算,
        [SYMBOL_ODD.."crit"]＝"攻撃時の致命的な一撃確率,
        ["enchantMystery"] = "すべての要素にダメージを加える,
        ["sight"] = "白昼時の最大視野,
        ["nsight"] = "夜の最大視野,
        ["visible"] = "隠れた単位を範囲内で見抜くことができる,
        ["coolDownPercent"] = "冷却時間増減スケール,
        ["costPercent"] = "施用消費増減率,
        ["castChantPercent"] = "吟唱時間増減スケール,
        ["castDistancePercent"] = "適用距離増減スケール,
        ["castRangePercent"] = "適用範囲増減スケール,
        ["sp"] = "特殊な強化、弱体化、または設定,
    }
    for _, t in ipairs(ENCHANT_TYPES) do
        local e = Enchant(t)
        data[SYMBOL_E .. t] = "もたらす" .. e:name() .. "ダメージ時のブースト"
        data[SYMBOL_RES .. SYMBOL_E .. t] = "受ける" .. e:name() .. "傷害時の減免"
        data[SYMBOL_EI .. t] = "完全免疫かどうか" .. e:name() .. "傷害"
    end
    return data[key] or "不明"
end

---@param whichUnit Unit
function this:refresh(whichUnit)
    whichUnit = whichUnit or this:prop("whichUnit")
    if (isClass(whichUnit, UnitClass)) then
        this:prop("whichUnit", whichUnit)
        ---@type myDetailStage
        local stage = this:stage()
        stage.mainTxt:text(whichUnit:name())
        stage.avatar:texture(whichUnit:icon())
        local detailType = this:prop("detailType")
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
        if (detailType == "data") then
            stage.attackMode:text(this:attackMode(whichUnit))
            for i = 1, 4 do
                local d = {}
                for _, a in ipairs(as[i]) do
                    if (a == '') then
                        d[#d + 1] = ''
                    else
                        local v = whichUnit:prop(a) or 0
                        if (a == "sp") then
                            if (v == 0) then
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": 无"
                            else
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. v
                            end
                        elseif (a == "reborn") then
                            if (v > 0) then
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. attribute.form(a)
                            else
                                d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": 復活できない"
                            end
                        elseif (string.subPos(a, SYMBOL_EI) == 1) then
                            local label = "いいえ"
                            if (v > 0) then
                                label = "はい"
                            end
                            d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. label
                        else
                            d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. v .. attribute.form(a)
                        end
                    end
                end
                stage.attrTxt[i]:text(string.implode('|n', d))
            end
        elseif (detailType == "intro") then
            stage.attackMode:text("説明単位攻撃モード|n戦闘モード、矢印属性、魔付きなどの情報を含む")
            for i = 1, 4 do
                local d = {}
                for _, a in ipairs(as[i]) do
                    if (a == '') then
                        d[#d + 1] = ''
                    else
                        local label = this:intro(a)
                        d[#d + 1] = colour.hex(colour.gold, attribute.label(a)) .. ": " .. label
                    end
                end
                stage.attrTxt[i]:text(string.implode('|n', d))
            end
        end
    end
end

function this:display()
    ---@type myDetailStage
    local stage = this:stage()
    local showing = stage.main:show()
    if (showing) then
        audio(Vcm("war3_MouseClick2"))
        stage.main:show(false)
        this:prop("detailType", "data")
        stage.shiftBtn:text("説明の表示")
        stage.shiftBtn:texture("btn/green")
        return
    end
    audio(Vcm("war3_MouseClick1"))
    stage.main:show(true)
    self:refresh(PlayerLocal():selection())
end
```
