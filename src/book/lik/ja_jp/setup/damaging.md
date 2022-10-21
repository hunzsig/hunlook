### ダメージフロー

> ダメージフローを挿入するための設定
>
> 定義を記述する順序に従って上から下へ実行を開始すると、optionsは下へ流れて保存され、中にいくつかの値を保存して、次の定義に流れて使用することができます

```lua
--- Flowオブジェクトを構築するには
--- ここではダメージフローにdamageを記入して下地入口に突き合わせる必要があります
local damageFlow = Flow("damage")

--- 必要なパラメータを抽出する
damageFlow:set("prop", function(options)
    options.defend = options.targetUnit:defend()
    options.avoid = options.targetUnit:avoid() - options.sourceUnit:aim()
end)

--- 無視装甲タイプの判断
damageFlow:set("breakArmor", function(options)
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
    --- 回避処理
    if (ignore.avoid == true and options.avoid > 0) then
        options.avoid = 0
    end
    --- 単位が無敵を無視しているか
    if (true == options.targetUnit:isInvulnerable()) then
        if (ignore.invincible == false) then
            --- 無敵防御イベントを触発する
            options.damage = 0
            event.trigger(options.sourceUnit, EVENT.Unit.ImmuneInvincible, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit })
            return
        end
    end
end)

--- 自身攻撃クリティカル
damageFlow:set("crit", function(options)
    local approve = (options.sourceUnit ~= nil and (options.damageSrc == DAMAGE_SRC.attack or options.damageSrc == DAMAGE_SRC.ability))
    if (approve) then
        local crit = options.sourceUnit:crit()
        if (crit > 0) then
            local odds = options.sourceUnit:odds("crit") - options.targetUnit:resistance("crit")
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

--- 回避
damageFlow:set("avoid", function(options)
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
damageFlow:set("damageIncrease", function(options)
    local approve = (options.sourceUnit ~= nil)
    if (approve) then
        local damageIncrease = options.sourceUnit:damageIncrease()
        if (damageIncrease > 0) then
            options.damage = options.damage * (1 + damageIncrease * 0.01)
        end
    end
end)

--- 傷が深くなる(%)
damageFlow:set("hurtIncrease", function(options)
    local hurtIncrease = options.targetUnit:hurtIncrease()
    if (hurtIncrease > 0) then
        options.damage = options.damage * (1 + hurtIncrease * 0.01)
    end
end)

--- 切り傷(%)
damageFlow:set("hurtRebound", function(options)
    -- に抵抗
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.rebound)
    if (approve) then
        local resistance = options.sourceUnit:resistance("hurtRebound")
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
        local hurtRebound = options.targetUnit:hurtRebound()
        local odds = options.targetUnit:odds("hurtRebound")
        if (hurtRebound > 0 and odds > math.rand(1, 100)) then
            local dmgRebound = math.trunc(options.damage * hurtRebound * 0.01, 3)
            if (dmgRebound >= 1.000) then
                local damagedArrived = function()
                    --- アンチダメージイベントのトリガ
                    ability.damage({
                        sourceUnit = options.targetUnit,
                        targetUnit = options.sourceUnit,
                        damage = dmgRebound,
                        damageSrc = DAMAGE_SRC.rebound,
                        damageType = options.damageType,
                        damageTypeLevel = 0,
                    })
                end
                if (options.damageSrc == DAMAGE_SRC.attack) then
                    -- 攻撃状況
                    if (options.sourceUnit:isMelee()) then
                        damagedArrived()
                    else
                        local am = options.sourceUnit:attackMode()
                        local mode = am:mode()
                        if (mode == "lightning") then
                            local lDur = 0.3
                            local lDelay = lDur * 0.6
                            ability.lightning(
                                am:lightningType(),
                                options.targetUnit:x(), options.targetUnit:y(), options.targetUnit:h(),
                                options.sourceUnit:x(), options.sourceUnit:y(), options.sourceUnit:h(),
                                lDur
                            )
                            time.setTimeout(lDelay, function()
                                damagedArrived()
                            end)
                        elseif (mode == "missile") then
                            ability.missile({
                                modelAlias = am:missileModel(),
                                sourceUnit = options.targetUnit,
                                targetUnit = options.sourceUnit,
                                speed = am:speed(),
                                height = am:height() / 4,
                                acceleration = am:acceleration(),
                                onEnd = function() damagedArrived() end,
                            })
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
damageFlow:set("defend", function(options)
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
damageFlow:set("hurtReduction", function(options)
    local hurtReduction = options.targetUnit:hurtReduction()
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
damageFlow:set("hpSuckAttack", function(options)
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.attack)
    if (approve) then
        local percent = options.sourceUnit:hpSuckAttack() - options.targetUnit:resistance("hpSuckAttack")
        local val = options.damage * percent * 0.01
        if (percent > 0 and val > 0) then
            options.sourceUnit:hpCur("+=" .. val)
            --- 吸血イベントのトリガー
            event.trigger(options.sourceUnit, EVENT.Unit.HPSuckAttack, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
            event.trigger(options.targetUnit, EVENT.Unit.Be.HPSuckAttack, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
        end
    end
end)

--- スキル吸血
damageFlow:set("hpSuckAbility", function(options)
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.ability)
    if (approve) then
        local percent = options.sourceUnit:hpSuckAbility() - options.targetUnit:resistance("hpSuckAbility")
        local val = options.damage * percent * 0.01
        if (percent > 0 and val > 0) then
            options.sourceUnit:hpCur("+=" .. val)
            --- スキル吸血イベントのトリガー
            event.trigger(options.sourceUnit, EVENT.Unit.HPSuckAbility, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
            event.trigger(options.targetUnit, EVENT.Unit.Be.HPSuckAbility, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
        end
    end
end)

--- 攻撃吸魔、吸魔はダメージに応じて、目標の魔法値を減算し、パーセンテージに応じて自分の魔法値を増加させる。目標魔法値が1未満で吸収した場合、吸収できません
damageFlow:set("mpSuckAttack", function(options)
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.attack and options.sourceUnit:mp() > 0 and options.targetUnit:mpCur() > 0)
    if (approve) then
        local percent = options.sourceUnit:mpSuckAttack() - options.targetUnit:resistance("mpSuckAttack")
        if (percent > 0) then
            local mana = math.min(options.targetUnit:mp(), options.damage)
            local val = mana * percent * 0.01
            if (val > 1) then
                options.targetUnit:mpCur("-=" .. val)
                options.sourceUnit:mpCur("+=" .. val)
                --- 魔吸収イベントを触発する
                event.trigger(options.sourceUnit, EVENT.Unit.MPSuckAttack, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
                event.trigger(options.targetUnit, EVENT.Unit.Be.MPSuckAttack, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
            end
        end
    end
end)

--- スキル吸魔、吸魔はダメージに応じて、目標の魔法値を減算し、パーセンテージに応じて自分の魔法値を増加させる。目標魔法値が1未満で吸収した場合、吸収できません
damageFlow:set("mpSuckAbility", function(options)
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.ability and options.sourceUnit.mp() > 0 and options.targetUnit.mpCur() > 0)
    if (approve) then
        local percent = options.sourceUnit:mpSuckAbility() - options.targetUnit:resistance("mpSuckAbility")
        if (percent > 0) then
            local mana = math.min(options.targetUnit:mp(), options.damage)
            local val = mana * percent * 0.01
            if (val > 1) then
                options.targetUnit:mpCur("-=" .. val)
                options.sourceUnit:mpCur("+=" .. val)
                --- トリガスキル吸魔イベント
                event.trigger(options.sourceUnit, EVENT.Unit.MPSuckAbility, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
                event.trigger(options.targetUnit, EVENT.Unit.Be.MPSuckAbility, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
            end
        end
    end
end)

--- 硬直
damageFlow:set("punishCur", function(options)
    local approve = (options.targetUnit:punish() > 0 and options.targetUnit:isPunishing() == false)
    if (approve) then
        options.targetUnit:punishCur("-=" .. options.damage)
    end
end)

--- 魔に憑いて加成｜抵抗する
damageFlow:set("enchant", function(options)
    local addition = 0
    if (options.sourceUnit ~= nil) then
        local amplify = options.sourceUnit:enchant(options.damageType.value)
        if (amplify ~= 0) then
            addition = addition + amplify * 0.01
        end
    end
    local resistance = options.targetUnit:enchantResistance(options.damageType.value)
    if (resistance ~= 0) then
        addition = addition - resistance * 0.01
    end
    --- 付魔事件を触発する
    event.trigger(options.targetUnit, EVENT.Unit.Enchant, {
        triggerUnit = options.sourceUnit,
        targetUnit = options.targetUnit,
        enchantType = options.damageType,
        addition = addition
    })
    options.damage = options.damage * (1 + addition)
end)

-- 魔付き付き
damageFlow:set("damageAppend", function(options)
    if (options.damageType ~= DAMAGE_TYPE.common) then
        ability.enchant(options.sourceUnit, options.targetUnit, options.damageType, options.damageTypeLevel)
    end
end)
```
