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
---@param effectiveData noteOnAbilityEffectiveData
TPL_ABILITY.DEMO = AbilityTpl()
    :name("スキル例")
    :targetType(ABILITY_TARGET_TYPE.tag_nil)
    :icon("black")
    :coolDownAdv(10, 0)
    :mpCostAdv(100, 0)
    :onEvent(EVENT.Ability.Effective,
    function(effectiveData)
        echo("スキル解放", effectiveData.triggerUnit:owner())
    end),

---@param hurtData noteOnUnitHurtData
---@param effectiveData noteOnAbilityEffectiveData
TPL_ABILITY.ZZJY = AbilityTpl()
    :name("自在きわめて受動的である")
    :targetType(ABILITY_TARGET_TYPE.pas)
    :icon("ChaosBody")
    :coolDownAdv(5, 0)
    :mpCostAdv(50, 0)
    :levelMax(10)
    :levelUpNeedPoint(2)
    :onUnitEvent(EVENT.Unit.Hurt,
    function(hurtData)
        hurtData.triggerAbility:effective()
    end)
    :onEvent(EVENT.Ability.Effective,
    function(effectiveData)
        -- スキルがトリガーされる効果
        local tu = effectiveData.triggerUnit
        tu:attach("DivineShieldTarget", "origin", 3)
          :buff("自在きわめて受動的である")
          :duration(3)
          :purpose(function(buffObj)
            buffObj:hurtReduction("+=100"):hurtRebound("+=100"):odds("hurtRebound", "+=100")
        end)
          :rollback(function(buffObj)
            buffObj:hurtReduction("-=100"):hurtRebound("-=100"):odds("hurtRebound", "-=100")
        end)
          :run()
    end)

-- 後続コードによるスキルオブジェクトの作成
-- 単位はpushAbilityもpushAbilityTplもでき、インテリジェントなスキルを追加できます
            
-- myUnitはUnitオブジェクトですが、ここではプレゼンテーションのみですので、ご自身でご理解ください
-- myUnitSlotはAbilitySlotオブジェクトで、その単位を表すスキルバーです

local myUnitSlot = (myUnit):abilitySlot()
myUnitSlot:push(Ability(TPL_ABILITY.DEMO))
myUnitSlot:push(TPL_ABILITY.DEMO)
myUnitSlot:push(TPL_ABILITY.ZZJY, 6)
```

### ItemTpl

```lua
TPL_ITEM = {

    ---@param getData noteOnItemGetData
    DEMO = ItemTpl()
        :modelAlias("TreasureChest") -- 宝箱モデル
        :name("アイテムの例")
        :ability(TPL_ABILITY.DEMO)
        :icon("black")
        :worth({ gold = 10 })
        :onEvent(EVENT.Item.Get,
        function(getData)
            echo("アイテムを取得", getData.triggerUnit:owner())
        end)

}

-- ランタイムコード作成
-- 直接インスタンス
local it1 = TPL_ITEM.IT1:create(0, 0)
local it2 = TPL_ITEM.IT2:create(0, 0)

-- 0、0座標に直接createが見えるようになりました
-- 実際にItemオブジェクトには2つの状態があります。インスタンス化状態と仮想化状態、簡単に理解すると、アイテムは大きな地図のときにエンティティになる必要があります

local it1 = Item(TPL_ITEM.IT1) -- このときItemオブジェクトはTplによって構築されますが、仮想的な
it1:position(0, 0) -- 私はそれを0、0に移動した後、大きな地図がトリガーされたので自動的にエンティティに変換しました

-- 1つの単位が物を持っているがpositionされている場合、地図本体に変換されるため、単位は物を失う
-- 瞬間的に距離を無視して物を捨てるような感覚です
```

### UnitTpl

```lua
TPL_UNIT = {
    Footman = UnitTpl("Footman") -- ここでFootmanは参照音声を指し、デフォルトではなし
        :name("歩兵")
        :barStateMode(2) -- 血液ストリップパターン設定
        :barStateAlways(true)
        :barStateMarker(500)
        :iconMap(AUIKit("looplorer_minimap", "dot/me", "tga"), 0.03, 0.03) -- 小さな地図アイコンスタイル
        :modelAlias("TheCaptain") -- 使用するモデル
        :icon("unit/TheCaptain")
        :scale(1.2)
        :pickItemMode("warehouseSlot") -- アイテム選択モード
        :abilitySlot(table.slice(TPL_ABILITY.Me, 1, 4))
        :level(1)
        :hp(100)
        :hpRegen(0)
        :mp(100)
        :mpRegen(5)
        :move(300)
        :material(UNIT_MATERIAL.metal)
        :weaponSound("metal_slice_medium")
        :attack(10)
        :attackModePush(AttackMode():mode("common"))
        :attackSpaceBase(1.0)
        :attackRange(100)
}

-- アイテム選択モード
local u1 = Unit(TPL_UNIT.Footman, Player(1), 0, 0, 270)
u1:reborn(0.5)
```
