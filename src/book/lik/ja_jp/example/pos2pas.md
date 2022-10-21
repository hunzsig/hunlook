## アクティブスキルをパッシブスキルに変更

#### 能動的なスキルを受動的にするには、まず能動的なスキルを勝手に書く

> スキル効果：瞬時に反撃し、使用後短時間で一定のダメージを跳ね返す

```lua
---@param effectiveData noteOnAbilityEffectiveData
AbilityTpl()
    :name("瞬間反撃")
    :levelMax(9)
    :targetType(ABILITY_TARGET_TYPE.tag_nil)
    :icon("ability/HolyArdentDefender")
    :coolDownAdv(10, -0.5)
    :mpCostAdv(50, 0)
    :description(
    function(obj)
        local dmg = 30 + 5 * obj:level()
        local rer = 8 + 2 * obj:level()
        local dur = 0.4 + 0.1 * obj:level()
        return {
            "シールドを用いた防御とリバウンドダメージ",
            colour.format("傷害を防ぐ：%s%", nil, { { colour.gold, dmg } }),
            colour.format("リバウンドダメージ：%s%", nil, { { colour.gold, rer } }),
            colour.format("継続時間：%s秒", nil, { { colour.skyblue, dur } }),
        }
    end)
    :onEvent(EVENT.Ability.Effective,
    function(effectiveData)
        local lv = effectiveData.triggerAbility:level()
        local tu = effectiveData.triggerUnit
        local reduce = math.floor(30 + 5 * lv)
        local rebound = math.floor(8 + 2 * lv)
        local dur = 0.4 + 0.1 * lv
        ---@param buffObj Unit
        tu:attach("buff/IonCentrifugalCircle", "origin", dur)
        tu:buff("瞬間反撃")
          :duration(dur)
          :purpose(function(buffObj) buffObj:hurtReduction("+=" .. reduce):hurtRebound("+=" .. rebound):odds("hurtRebound", "+=100") end)
          :rollback(function(buffObj) buffObj:hurtReduction("-=" .. reduce):hurtRebound("-=" .. rebound):odds("hurtRebound", "-=100") end)
          :run()
    end)
```

#### パッシブスキルに変更

> targetType を ABILITY_TARGET_TYPE.pas
> 単位イベント Hurt リンクトリガスキルを追加するための Effective アクション
> フレームワークの特性により、Abilityのすべてのデータを動的に修正することができるため、スキルの異なる形態の変換を実現することができます

```lua
---@param hurtData noteOnUnitHurtData
---@param effectiveData noteOnAbilityEffectiveData
AbilityTpl()
    :name("瞬間反撃")
    :levelMax(9)
    :targetType(ABILITY_TARGET_TYPE.pas)
    :icon("ability/HolyArdentDefender")
    :coolDownAdv(10, -0.5)
    :mpCostAdv(50, 0)
    :description(
    function(obj)
        local dmg = 30 + 5 * obj:level()
        local rer = 8 + 2 * obj:level()
        local dur = 0.4 + 0.1 * obj:level()
        return {
            "ダメージを受けた時，シールドを用いた防御とリバウンドダメージ",
            colour.format("傷害を防ぐ：%s%", nil, { { colour.gold, dmg } }),
            colour.format("リバウンドダメージ：%s%", nil, { { colour.gold, rer } }),
            colour.format("継続時間：%s秒", nil, { { colour.skyblue, dur } }),
        }
    end)
    :onUnitEvent(EVENT.Unit.Hurt,
    function(hurtData)
        hurtData.triggerAbility:effective()
    end)
    :onEvent(EVENT.Ability.Effective,
    function(effectiveData)
        local lv = effectiveData.triggerAbility:level()
        local tu = effectiveData.triggerUnit
        local reduce = math.floor(30 + 5 * lv)
        local rebound = math.floor(8 + 2 * lv)
        local dur = 0.4 + 0.1 * lv
        tu:attach("buff/IonCentrifugalCircle", "origin", dur)
          :buff("瞬間反撃")
          :duration(dur)
          :purpose(function(buffObj) buffObj:hurtReduction("+=" .. reduce):hurtRebound("+=" .. rebound):odds("hurtRebound", "+=100") end)
          :rollback(function(buffObj) buffObj:hurtReduction("-=" .. reduce):hurtRebound("-=" .. rebound):odds("hurtRebound", "-=100") end)
          :run()
    end)
```
