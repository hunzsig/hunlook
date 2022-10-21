## TPL テンプレート

> 編集物に依存しなくなった本フレームワークは、新たな代替品：TPL
>
> TPLはtemplateの略称であり、テンプレート、標準を意味する
>
> Ability、Item、Unitの3つの要素はすべてTplに基づいて構築されています

##### 書き方が多すぎるので、ここでは何種類か書きたいだけです。簡単な参考にしてください。

> TPL ード物編のようなものですが、運転中に熱更新を修正することができ、プロセステストに合わせて快適になります

### AbilityTpl

```lua
TPL_ABILITY = {

    ---@param effectiveData noteOnAbilityEffectiveData
    AbilityTpl("スキル1", ABILITY_TARGET_TYPE.TAG_R)
        .icon("AB1")
        .coolDownAdv(2.5, -0.05)
        .hpCostAdv(10, 5)
        .mpCostAdv(1, 7)
        .castChantAdv(2, -0.1)
        .castKeepAdv(10, 0.5)
        .castRadiusAdv(500, 50)
        .levelMax(9)
        .description(
        {
            "きそしょうひ：" .. colour.purple("{this.mpCost()}"),
            "ターゲットにダメージを与える：" .. colour.gold("{math.floor(this.bindUnit().attack()*100)}") .. "(攻撃x 100)"
        })
        .castTargetAllow(
            function(this, targetUnit)
            return targetUnit ~= nil and targetUnit.isEnemy(this.bindUnit().owner())
        end)
        .onEvent(EVENT.Ability.Effective,
        function(effectiveData)
            function(effectiveData)
            local ftp = 1
            time.setInterval(ftp, function(curTimer)
                -- 只是一个持续施法技能，施法后使用isAbilityKeepCasting判定是否仍在施法
                -- 从而可以实现各种周期的效果
                if (not effectiveData.triggerUnit.isAbilityKeepCasting()) then
                    curTimer.destroy()
                    return
                end
                effectiveData.triggerAbility.exp("+=10")
                effectiveData.triggerUnit.abilityPoint("+=1")
                effect.xy("slash/Red_swing", effectiveData.targetX, effectiveData.targetY, 0)
            end)
        end),

    ---@param getData noteOnAbilityGetData
    ---@param loseData noteOnAbilityLoseData
    ---@param lvcData noteOnAbilityLevelChangeData
    AbilityTpl("唯我独尊", ABILITY_TARGET_TYPE.PAS)
        .icon("AB2")
        .description({ "強打シングル特効: +{50+this.level()*100}攻撃" })
        .levelMax(5)
        .levelUpNeedPoint(101)
        .onEvent(EVENT.Item.Get,
        function(getData)
            getData.triggerUnit.attack("+=" .. 100 * getData.triggerAbility.level())
        end)
        .onEvent(EVENT.Item.Lose,
        function(loseData)
            loseData.triggerUnit.attack("-=" .. 100 * loseData.triggerAbility.level())
        end)
        .onEvent(EVENT.Ability.LevelChange,
        function(lvcData)
            if (lvcData.value > 0) then
                lvcData.triggerUnit.attack("+=" .. 100 * lvcData.value)
            elseif (evtData.value < 0) then
                lvcData.triggerUnit.attack("-=" .. 100 * math.abs(lvcData.value))
            end
        end)
}

-- 後続コードによるスキルオブジェクトの作成
-- 単位はpushAbilityもpushAbilityTplもでき、インテリジェントなスキルを追加できます
            
-- myUnitはUnitオブジェクトですが、ここではプレゼンテーションのみですので、ご自身でご理解ください
-- myUnitSlotはAbilitySlotオブジェクトで、その単位を表すスキルバーです

local myUnitSlot = myUnit.abilitySlot()
myUnitSlot.push(Ability(TPL_ABILITY.AB1))
myUnitSlot.push(TPL_ABILITY.AB2)
myUnitSlot.push(TPL_ABILITY.AB3, 6)
```

### ItemTpl

```lua
--アイテムにはまず、アイテムカテゴリのモデルサポートが必要です。ここではassetsのリソースについても示します
-- !!! このリソースはnewプロジェクトのorigin資産にあり、一般的にはF 6物編を探す必要はありません

-- アイテムボックス
_assets_model(
    ":Objects\\InventoryItems\\TreasureChest\\treasurechest.mdl",
    "TreasureChest", "item" -- 这个"item"代表这个model可用于Item对象,没有是不行的
 )
```

> 次に、Tplを定義します

```lua
TPL_ITEM = {

    IT1 = ItemTpl("TreasureChest")
        .ability(Ability(TPL_ABILITY.AB1))
        .icon("AB1")
        .levelMax(9)
        .worth({ gold = 10, silver = 5, copper = 3 })
        .charges(999)

    IT2 = ItemTpl("TreasureChest")
        .ability(Ability(TPL_ABILITY.AB2))
        .icon("AB2")
        .levelMax(9)
        .worth({ gold = 10, silver = 5, copper = 3 })

}

--ランタイムコード作成
--直接インスタンス
local it1 = TPL_ITEM.IT1.create(0, 0)
local it2 = TPL_ITEM.IT2.create(0, 0)

--0、0座標に直接createが見えるようになりました
--実際にItemオブジェクトには2つの状態があります。インスタンス化状態と仮想化状態、簡単に理解すると、アイテムは大きな地図のときにエンティティになる必要があります

local it1 = Item(TPL_ITEM.IT1) -- このときItemオブジェクトはTplによって構築されますが、仮想的な
it1.portal(0, 0) -- 私はそれを0、0に移動した後、大きな地図がトリガーされたので自動的にエンティティに変換しました

--1つの単位がアイテムを持っているがportalされている場合、マップエンティティに変換されるため、単位はアイテムを失う
--瞬間的に距離を無視して物を捨てるような感覚です
```

### UnitTpl

```lua
--単位と物品は同じで、単位クラスのモデルサポートが必要です。ここではassetsのリソースもデモします
-- !!! このリソースはnewプロジェクトのorigin資産にもあり、一般的にはF 6物編を探す必要はありません

-- ダーク・レンジャー
_assets_model(
    ":Units\\Creeps\\BansheeRanger\\BansheeRanger", "BansheeRanger", 
    "unit", { Art = "unit\\hero\\BansheeRanger"}
)
-- 炎の巨魔
_assets_model(
    ":Units\\Creeps\\HeroFlameLord\\HeroFlameLord", "HeroFlameLord",
    "unit", { Art = "unit\\hero\\HeroAvatarOfFlame"}
)
```

> 次に、Tplを定義します

```lua
TPL_UNIT = {}
-- ダーク・レンジャー
TPL_UNIT.BansheeRanger = UnitTpl("BansheeRanger")
-- 炎の巨魔
TPL_UNIT.HeroFlameLord = UnitTpl("HeroFlameLord")

-- TPLも事前設定技能、物品を定義する
TPL_UNIT.Footman = UnitTpl("Footman")
    .abilitySlot({TPL_ABILITY.AB1,TPL_ABILITY.AB2})
    .itemSlot({TPL_ITEM.IT1,TPL_ITEM.IT2})

-- ランタイムコード作成
local u1 = TPL_UNIT.BansheeRanger
  .create(Player(1), 0, 0, 66.6).level(1)
  .reborn(0.5)
  .hp(1500).hpRegen(10)
  .mp(100).mpRegen(-1)
  .move(522)
  .attack(91).attackRange(1000).attackSpeed(100)
  .attackRipple(30)
  .missileAdd(Missile("DragonHawkMissile").homing(true))

local u2 = Player(2)
  .unit(TPL_UNIT.HeroFlameLord, -400, 400, 66.6)
  .period(1000).primary("agi")
  .move(50)
  .hp(1000000)
  .mpRegen("+=10")
  .attack(109).attackRange(300)
  .punish(1000)
  .avoid(35)
  .lightningAdd(Lighting(LIGHTING_TYPE.thunderRed))
  
```
