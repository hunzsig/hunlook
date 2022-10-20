### ダメージフローのプリセット

>ダメージフローを挿入するための設定
>
>定義を記述する順序に従って上から下へ実行を開始すると、optionsは下へ流れて保存され、中にいくつかの値を保存して、次の定義に流れて使用することができます

```lua
--- 必要なパラメータを抽出する
damaging.defined("prop", function(options)
    options.defend = options.targetUnit.defend()
    options.avoid = options.targetUnit.avoid() - options.sourceUnit.aim()
end)

--- 無視装甲タイプの判断
damaging.defined("breakArmor", function(options)
    local ignore = { defend = false, avoid = false, invincible = false }
    if (#options.breakArmor > 0) then
        for _, b in ipairs(options.breakArmor) do
            if (b ~= nil) then
                ignore[b.value] = true
                --- 防御無視イベントをトリガーする
                event.trigger(options.sourceUnit, EVENT.Unit.BreakArmor, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, breakType = b })
                --- 破壊されたイベントのトリガ
                event.trigger(options.targetUnit, EVENT.Unit.Be.BreakArmor, { triggerUnit = options.targetUnit, breakUnit = options.sourceUnit, breakType = b })
            end
        end
    end
    --- 防甲処理
    if (ignore.defend == true and options.defend > 0) then
        options.defend = 0
    end
    --- 処理回避
    if (ignore.avoid == true and options.avoid > 0) then
        options.avoid = 0
    end
    --- 単位が無敵を無視しているか
    if (true == options.targetUnit.isInvulnerable()) then
        if (ignore.invincible == false) then
            --- 無敵防御イベントを触発する
            options.damage = 0
            event.trigger(options.sourceUnit, EVENT.Unit.ImmuneInvincible, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit })
            return
        end
    end
end)

--- 自身攻撃クリティカル
damaging.defined("crit", function(options)
    local approve = (options.sourceUnit ~= nil and (options.damageSrc == DAMAGE_SRC.attack or options.damageSrc == DAMAGE_SRC.ability))
    if (approve) then
        local crit = options.sourceUnit.crit()
        if (crit > 0) then
            local odds = options.sourceUnit.odds("crit") - options.targetUnit.resistance("crit")
            if (odds > math.rand(1, 100)) then
                options.damage = options.damage * (1 + crit * 0.01)
                --- トリガ時に自動無視回避
                options.avoid = 0
                --- クリティカル・イベントのトリガー
                ability.crit({ sourceUnit = options.sourceUnit, targetUnit = options.targetUnit })
            end
        end
    end
end)

--- そらす
damaging.defined("avoid", function(options)
    local approve = (options.avoid > 0 and (options.damageSrc == DAMAGE_SRC.attack or options.damageSrc == DAMAGE_SRC.rebound))
    if (approve) then
        if (options.avoid > math.rand(1, 100)) then
            -- 回避イベントのトリガ
            options.damage = 0
            event.trigger(options.targetUnit, EVENT.Unit.Avoid, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit })
            event.trigger(options.sourceUnit, EVENT.Unit.Be.Avoid, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit })
            return
        end
    end
end)

--- 傷が深まる(%)
damaging.defined("damageIncrease", function(options)
    local approve = (options.sourceUnit ~= nil)
    if (approve) then
        local damageIncrease = options.sourceUnit.damageIncrease()
        if (damageIncrease > 0) then
            options.damage = options.damage * (1 + damageIncrease * 0.01)
        end
    end
end)

--- 傷が深くなる(%)
damaging.defined("hurtIncrease", function(options)
    local hurtIncrease = options.targetUnit.hurtIncrease()
    if (hurtIncrease > 0) then
        options.damage = options.damage * (1 + hurtIncrease * 0.01)
    end
end)

--- 切り傷(%)
damaging.defined("hurtRebound", function(options)
    -- に抵抗
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.rebound)
    if (approve) then
        local resistance = options.sourceUnit.resistance("hurtRebound")
        if (resistance > 0) then
            options.damage = math.max(0, options.damage * (1 - resistance * 0.01))
            if (options.damage < 1) then
                options.damage = 0
                return
            end
        end
    end
    -- はんしゃ
    approve = (options.sourceUnit ~= nil and (options.damageSrc == DAMAGE_SRC.attack or options.damageSrc == DAMAGE_SRC.ability))
    if (approve) then
        local hurtRebound = options.targetUnit.hurtRebound()
        local odds = options.targetUnit.odds("hurtRebound")
        if (hurtRebound > 0 and odds > math.rand(1, 100)) then
            local dmgRebound = math.round(options.damage * hurtRebound * 0.01, 3)
            if (dmgRebound >= 1.000) then
                local damagedArrived = function()
                    --- アンチダメージイベントのトリガ
                    ability.damage({
                        sourceUnit = options.targetUnit,
                        targetUnit = options.sourceUnit,
                        damage = dmgRebound,
                        damageSrc = DAMAGE_SRC.rebound,
                        damageType = options.damageType,
                    })
                end
                if (options.damageSrc == DAMAGE_SRC.attack) then
                    -- 攻撃下
                    if (options.sourceUnit.isMelee()) then
                        damagedArrived()
                    elseif (options.sourceUnit.isRanged()) then
                        local lt = options.sourceUnit.lightning()
                        if (isObject(lt, "Lightning")) then
                            local lDur = 0.3
                            local lDelay = lDur * 0.6
                            ability.lightning(lt.lightningType(), options.targetUnit.x(), options.targetUnit.y(), targetUnit.h(), sourceUnit.x(), sourceUnit.y(), sourceUnit.h(), lDur)
                            time.setTimeout(lDelay, function()
                                damagedArrived()
                            end)
                        else
                            local m = options.sourceUnit.missile()
                            if (isObject(m, "Missile")) then
                                ability.missile({
                                    modelAlias = m.modelAlias(),
                                    hover = math.rand(m.hover() - 5, m.hover() + 5),
                                    sourceUnit = options.targetUnit,
                                    targetUnit = options.sourceUnit,
                                    speed = m.speed(),
                                    height = 0,
                                    acceleration = m.acceleration(),
                                    onEnd = function() damagedArrived() end,
                                })
                            end
                        end
                    end
                elseif (options.damageSrc == DAMAGE_SRC.ability) then
                    -- スキル状況
                    damagedArrived()
                end
            end
        end
    end
end)

--- ガード
damaging.defined("defend", function(options)
    if (options.defend < 0) then
        options.damage = options.damage + math.abs(options.defend)
    elseif (options.defend > 0) then
        options.damage = options.damage - options.defend
        if (options.damage < 1) then
            -- ガード完全相殺イベントのトリガ
            options.damage = 0
            event.trigger(options.targetUnit, EVENT.Unit.ImmuneDefend, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit })
            return
        end
    end
end)

--- 傷を減らす(%)
damaging.defined("hurtReduction", function(options)
    local hurtReduction = options.targetUnit.hurtReduction()
    if (hurtReduction > 0) then
        options.damage = options.damage * (1 - hurtReduction * 0.01)
        if (options.damage < 1) then
            -- トリガ減傷完全相殺イベント
            options.damage = 0
            event.trigger(options.targetUnit, EVENT.Unit.ImmuneReduction, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit })
            return
        end
    end
end)

--- 攻撃吸血
damaging.defined("hpSuckAttack", function(options)
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.attack)
    if (approve) then
        local percent = options.sourceUnit.hpSuckAttack() - options.targetUnit.resistance("hpSuckAttack")
        local val = options.damage * percent * 0.01
        if (percent > 0 and val > 0) then
            options.sourceUnit.hpCur("+=" .. val)
            --- 吸血イベントのトリガー
            event.trigger(options.sourceUnit, EVENT.Unit.HPSuckAttack, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
            event.trigger(options.targetUnit, EVENT.Unit.Be.HPSuckAttack, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
        end
    end
end)

--- 技能吸血
damaging.defined("hpSuckAbility", function(options)
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.ability)
    if (approve) then
        local percent = options.sourceUnit.hpSuckAbility() - options.targetUnit.resistance("hpSuckAbility")
        local val = options.damage * percent * 0.01
        if (percent > 0 and val > 0) then
            options.sourceUnit.hpCur("+=" .. val)
            --- スキル吸血イベントのトリガー
            event.trigger(options.sourceUnit, EVENT.Unit.HPSuckAbility, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
            event.trigger(options.targetUnit, EVENT.Unit.Be.HPSuckAbility, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
        end
    end
end)

--- 攻撃吸魔、吸魔はダメージに応じて、目標の魔法値を減算し、パーセンテージに応じて自分の魔法値を増加させる。目標魔法値が1未満で吸収した場合、吸収できません
damaging.defined("mpSuckAttack", function(options)
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.attack and options.sourceUnit.mp() > 0 and options.targetUnit.mpCur() > 0)
    if (approve) then
        local percent = options.sourceUnit.mpSuckAttack() - options.targetUnit.resistance("mpSuckAttack")
        if (percent > 0) then
            local mana = math.min(options.targetUnit.mp(), options.damage)
            local val = mana * percent * 0.01
            if (val > 1) then
                options.targetUnit.mpCur("-=" .. val)
                options.sourceUnit.mpCur("+=" .. val)
                --- 魔吸収イベントを触発する
                event.trigger(options.sourceUnit, EVENT.Unit.MPSuckAttack, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
                event.trigger(options.targetUnit, EVENT.Unit.Be.MPSuckAttack, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
            end
        end
    end
end)

--- スキル吸魔、吸魔はダメージに応じて、目標の魔法値を減算し、パーセンテージに応じて自分の魔法値を増加させる。目標魔法値が1未満で吸収した場合、吸収できません
damaging.defined("mpSuckAbility", function(options)
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.ability and options.sourceUnit.mp() > 0 and options.targetUnit.mpCur() > 0)
    if (approve) then
        local percent = options.sourceUnit.mpSuckAbility() - options.targetUnit.resistance("mpSuckAbility")
        if (percent > 0) then
            local mana = math.min(options.targetUnit.mp(), options.damage)
            local val = mana * percent * 0.01
            if (val > 1) then
                options.targetUnit.mpCur("-=" .. val)
                options.sourceUnit.mpCur("+=" .. val)
                --- トリガスキル吸魔イベント
                event.trigger(options.sourceUnit, EVENT.Unit.MPSuckAbility, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
                event.trigger(options.targetUnit, EVENT.Unit.Be.MPSuckAbility, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
            end
        end
    end
end)

--- 硬直
damaging.defined("punishCur", function(options)
    local approve = (options.targetUnit.punish() > 0 and options.targetUnit.isPunishing() == false)
    if (approve) then
        options.targetUnit.punishCur("-=" .. options.damage)
    end
end)

--- ダメージタイプの割合処理
damaging.defined("enchant", function(options)
    options.damageTypeRatio = {}
    options.enchantType = {}
    local damageTypeOcc = 0
    local ratio = {}
    if (options.damageSrc == DAMAGE_SRC.attack and options.sourceUnit ~= nil) then
        -- 追加攻撃形態のダメージタイプ
        enchant.types.forEach(function(ek, _)
            local ew = options.sourceUnit.enchantWeapon(ek)
            if (ew > 0) then
                damageTypeOcc = damageTypeOcc + ew
                if (ratio[ek] == nil) then
                    ratio[ek] = 0
                end
                ratio[ek] = ratio[ek] + ew
                table.insert(options.enchantType, ek)
            end
        end)
    elseif (type(options.damageType) == "table" and #options.damageType > 0) then
        for _, d in ipairs(options.damageType) do
            if (type(d) == "table" and d.value) then
                damageTypeOcc = damageTypeOcc + 1
                if (ratio[d.value] == nil) then
                    ratio[d.value] = 0
                end
                ratio[d.value] = ratio[d.value] + 1
                table.insert(options.enchantType, d.value)
            end
        end
    end
    if (damageTypeOcc == 0) then
        damageTypeOcc = 1
        ratio[DAMAGE_TYPE.common.value] = 1
    end
    local dtu = 1 / damageTypeOcc
    for _, dt in ipairs(DAMAGE_TYPE_KEYS) do
        if (ratio[dt] == nil) then
            ratio[dt] = 0
        end
        options.damageTypeRatio[dt] = dtu * ratio[dt]
    end
end)

-- 魔付きタイプ（加成｜抵抗｜上半身）
damaging.defined("enchantAppend", function(options)
    for _, et in ipairs(options.enchantType) do
        local addition = 0
        if (options.sourceUnit ~= nil) then
            local amplify = options.sourceUnit.enchant(et)
            if (amplify ~= 0) then
                addition = addition + amplify * 0.01
            end
        end
        local resistance = options.targetUnit.enchantResistance(et)
        if (resistance ~= 0) then
            addition = addition - resistance * 0.01
        end
        local d = options.damage * addition * options.damageTypeRatio[et]
        --- 付魔事件を触発する
        event.trigger(options.targetUnit, EVENT.Unit.Enchant, {
            triggerUnit = options.sourceUnit, targetUnit = options.targetUnit,
            enchantType = et,
            radio = options.damageTypeRatio[et], damage = d, addition = addition
        })
        options.damage = options.damage + d
    end
    if (#options.enchantType > 0) then
        enchant.append(options.targetUnit, options.sourceUnit, options.enchantType)
    end
end)
```
