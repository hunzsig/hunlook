### Preset damage flow

> Setting for inserting injury process
>
> Execute from top to bottom according to the order in which you write the definition. Options will flow down and be
> saved. You can save some values to the next definition

```lua
--- Build a Flow object
--- Damage flow must be filled in here for docking with the bottom entrance
local damageFlow = Flow("damage")

--- Extract some required parameters
damageFlow:set("prop", function(options)
    options.defend = options.targetUnit:defend()
    options.avoid = options.targetUnit:avoid() - options.sourceUnit:aim()
end)

--- Judge whether to ignore armor type
damageFlow:set("breakArmor", function(options)
    local ignore = { defend = false, avoid = false, invincible = false }
    if (#options.breakArmor > 0) then
        for _, b in ipairs(options.breakArmor) do
            if (b ~= nil) then
                ignore[b.value] = true
                --- Trigger Ignore Defense Event
                event.trigger(options.sourceUnit, EVENT.Unit.BreakArmor, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, breakType = b })
                --- Trigger the broken defense event
                event.trigger(options.targetUnit, EVENT.Unit.Be.BreakArmor, { triggerUnit = options.targetUnit, breakUnit = options.sourceUnit, breakType = b })
            end
        end
    end
    --- Handling armor
    if (ignore.defend == true and options.defend > 0) then
        options.defend = 0
    end
    --- Handling avoidance
    if (ignore.avoid == true and options.avoid > 0) then
        options.avoid = 0
    end
    --- Whether the unit ignores invincibility
    if (true == options.targetUnit:isInvulnerable()) then
        if (ignore.invincible == false) then
            --- Trigger invincible defense event
            options.damage = 0
            event.trigger(options.sourceUnit, EVENT.Unit.ImmuneInvincible, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit })
            return
        end
    end
end)

--- Self attack critical hit
damageFlow:set("crit", function(options)
    local approve = (options.sourceUnit ~= nil and (options.damageSrc == DAMAGE_SRC.attack or options.damageSrc == DAMAGE_SRC.ability))
    if (approve) then
        local crit = options.sourceUnit:crit()
        if (crit > 0) then
            local odds = options.sourceUnit:odds("crit") - options.targetUnit:resistance("crit")
            if (odds > math.rand(1, 100)) then
                options.damage = options.damage * (1 + crit * 0.01)
                --- Automatically ignore avoidance when triggered
                options.avoid = 0
                --- Trigger critical hit event
                ability.crit({ sourceUnit = options.sourceUnit, targetUnit = options.targetUnit })
            end
        end
    end
end)

--- avoid
damageFlow:set("avoid", function(options)
    local approve = (options.avoid > 0 and (options.damageSrc == DAMAGE_SRC.attack or options.damageSrc == DAMAGE_SRC.rebound))
    if (approve) then
        if (options.avoid > math.rand(1, 100)) then
            -- Trigger avoidance event
            options.damage = 0
            event.trigger(options.targetUnit, EVENT.Unit.Avoid, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit })
            event.trigger(options.sourceUnit, EVENT.Unit.Be.Avoid, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit })
            return
        end
    end
end)

--- Damage deepening(%)
damageFlow:set("damageIncrease", function(options)
    local approve = (options.sourceUnit ~= nil)
    if (approve) then
        local damageIncrease = options.sourceUnit:damageIncrease()
        if (damageIncrease > 0) then
            options.damage = options.damage * (1 + damageIncrease * 0.01)
        end
    end
end)

--- Injury deepens(%)
damageFlow:set("hurtIncrease", function(options)
    local hurtIncrease = options.targetUnit:hurtIncrease()
    if (hurtIncrease > 0) then
        options.damage = options.damage * (1 + hurtIncrease * 0.01)
    end
end)

--- Reflexive injury(%)
damageFlow:set("hurtRebound", function(options)
    -- resistance
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
    -- rebound
    approve = (options.sourceUnit ~= nil and (options.damageSrc == DAMAGE_SRC.attack or options.damageSrc == DAMAGE_SRC.ability))
    if (approve) then
        local hurtRebound = options.targetUnit:hurtRebound()
        local odds = options.targetUnit:odds("hurtRebound")
        if (hurtRebound > 0 and odds > math.rand(1, 100)) then
            local dmgRebound = math.trunc(options.damage * hurtRebound * 0.01, 3)
            if (dmgRebound >= 1.000) then
                local damagedArrived = function()
                    --- Trigger a counter injury event
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
                    -- Attacks
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
                    -- Skills
                    damagedArrived()
                end
            end
        end
    end
end)

--- defense
damageFlow:set("defend", function(options)
    if (options.defend < 0) then
        options.damage = options.damage + math.abs(options.defend)
    elseif (options.defend > 0) then
        options.damage = options.damage - options.defend
        if (options.damage < 1) then
            -- Trigger defense completely offset event
            options.damage = 0
            event.trigger(options.targetUnit, EVENT.Unit.ImmuneDefend, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit })
            return
        end
    end
end)

--- Reduce injuries(%)
damageFlow:set("hurtReduction", function(options)
    local hurtReduction = options.targetUnit:hurtReduction()
    if (hurtReduction > 0) then
        options.damage = options.damage * (1 - hurtReduction * 0.01)
        if (options.damage < 1) then
            -- Trigger the event of fully canceling the damage reduction
            options.damage = 0
            event.trigger(options.targetUnit, EVENT.Unit.ImmuneReduction, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit })
            return
        end
    end
end)

--- Attack blood sucking
damageFlow:set("hpSuckAttack", function(options)
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.attack)
    if (approve) then
        local percent = options.sourceUnit:hpSuckAttack() - options.targetUnit:resistance("hpSuckAttack")
        local val = options.damage * percent * 0.01
        if (percent > 0 and val > 0) then
            options.sourceUnit:hpCur("+=" .. val)
            --- Trigger blood sucking event
            event.trigger(options.sourceUnit, EVENT.Unit.HPSuckAttack, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
            event.trigger(options.targetUnit, EVENT.Unit.Be.HPSuckAttack, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
        end
    end
end)

--- Skill Vampire
damageFlow:set("hpSuckAbility", function(options)
    local approve = (options.sourceUnit ~= nil and options.damageSrc == DAMAGE_SRC.ability)
    if (approve) then
        local percent = options.sourceUnit:hpSuckAbility() - options.targetUnit:resistance("hpSuckAbility")
        local val = options.damage * percent * 0.01
        if (percent > 0 and val > 0) then
            options.sourceUnit:hpCur("+=" .. val)
            --- Trigger skill blood sucking event
            event.trigger(options.sourceUnit, EVENT.Unit.HPSuckAbility, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
            event.trigger(options.targetUnit, EVENT.Unit.Be.HPSuckAbility, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
        end
    end
end)

--- Attack and absorb demons; Absorbing magic will reduce the target's magic value according to the damage, and then increase your own magic value according to the percentage; When the target's magic value is less than 1, it cannot be absorbed
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
                --- Trigger the evil absorption event
                event.trigger(options.sourceUnit, EVENT.Unit.MPSuckAttack, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
                event.trigger(options.targetUnit, EVENT.Unit.Be.MPSuckAttack, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
            end
        end
    end
end)

--- Skill absorption; Absorbing magic will reduce the target's magic value according to the damage, and then increase your own magic value according to the percentage; When the target's magic value is less than 1, it cannot be absorbed
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
                --- Trigger the event of skill absorption
                event.trigger(options.sourceUnit, EVENT.Unit.MPSuckAbility, { triggerUnit = options.sourceUnit, targetUnit = options.targetUnit, value = val, percent = percent })
                event.trigger(options.targetUnit, EVENT.Unit.Be.MPSuckAbility, { triggerUnit = options.targetUnit, sourceUnit = options.sourceUnit, value = val, percent = percent })
            end
        end
    end
end)

--- Stiff straightness
damageFlow:set("punishCur", function(options)
    local approve = (options.targetUnit:punish() > 0 and options.targetUnit:isPunishing() == false)
    if (approve) then
        options.targetUnit:punishCur("-=" .. options.damage)
    end
end)

--- Enchant bonus | Resistance
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
    --- Trigger Enchant Event
    event.trigger(options.targetUnit, EVENT.Unit.Enchant, {
        triggerUnit = options.sourceUnit,
        targetUnit = options.targetUnit,
        enchantType = options.damageType,
        addition = addition
    })
    options.damage = options.damage * (1 + addition)
end)

-- Enchant attachment
damageFlow:set("damageAppend", function(options)
    if (options.damageType ~= DAMAGE_TYPE.common) then
        ability.enchant(options.sourceUnit, options.targetUnit, options.damageType, options.damageTypeLevel)
    end
end)
```
