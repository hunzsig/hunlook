## TPL 模版

> 不再依賴物編的本框架，衍生出了新的代替品：TPL
>
> TPL 是 template 的簡稱，意為模板、標準
>
> Ability、Item、Unit三大件都基於Tpl來構建

##### 由於寫法太多，這裡只隨便寫幾種，僅供簡單參考

> TPL 就像是程式碼物編一樣，但可以在執行時修改熱更新，配合流程測試會很爽

### AbilityTpl

```lua
TPL_ABILITY = {

    ---@param effectiveData noteOnAbilityEffectiveData
    TPL_ABILITY.DEMO = AbilityTpl()
        :name("技能例子")
        :targetType(ABILITY_TARGET_TYPE.tag_nil)
        :icon("black")
        :coolDownAdv(10, 0)
        :mpCostAdv(100, 0)
        :onEvent(EVENT.Ability.Effective,
        function(effectiveData)
            echo("技能釋放", effectiveData.triggerUnit:owner())
        end),

    ---@param hurtData noteOnUnitHurtData
    ---@param effectiveData noteOnAbilityEffectiveData
    TPL_ABILITY.ZZJY = AbilityTpl()
        :name("自在極意被動")
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
            -- 技能被觸發的效果
            local tu = effectiveData.triggerUnit
            tu:attach("DivineShieldTarget", "origin", 3)
              :buff("自在極意被動")
              :duration(3)
              :purpose(function(buffObj)
                buffObj:hurtReduction("+=100"):hurtRebound("+=100"):odds("hurtRebound", "+=100")
            end)
              :rollback(function(buffObj)
                buffObj:hurtReduction("-=100"):hurtRebound("-=100"):odds("hurtRebound", "-=100")
            end)
              :run()
        end)
}

-- 後續程式碼建立技能物件
-- 單位既可以pushAbility也可以pushAbilityTpl，智慧加技能

-- myUnit是一個Unit物件，這裡只是演示，請自行理解
-- myUnitSlot是一個AbilitySlot物件，代表該單位的技能欄

local myUnitSlot = myUnit:abilitySlot()
myUnitSlot:push(Ability(TPL_ABILITY.AB1))
myUnitSlot:push(TPL_ABILITY.AB2)
myUnitSlot:push(TPL_ABILITY.AB3, 6)
```

### ItemTpl

```lua
TPL_ITEM = {

    ---@param getData noteOnItemGetData
    DEMO = ItemTpl()
        :modelAlias("TreasureChest") -- 寶箱模型
        :name("物品例子")
        :ability(TPL_ABILITY.DEMO)
        :icon("black")
        :worth({ gold = 10 })
        :onEvent(EVENT.Item.Get,
        function(getData)
            echo("獲得物品", getData.triggerUnit:owner())
        end)

}

-- 執行時程式碼建立
-- 直接例項
local it1 = TPL_ITEM.IT1:create(0, 0)
local it2 = TPL_ITEM.IT2:create(0, 0)

-- 可以看到前面直接create到0,0座標了
-- 實際上Item物件是有兩種狀態的，例項化狀態和虛擬化狀態，簡單理解就是物品需要在大地圖的時候才會是實體

local it1 = Item(TPL_ITEM.IT1) -- 此時Item物件由Tpl建立，但是虛擬的
it1:position(0, 0) -- 我將其移動到0,0後，觸發了大地圖所以自動轉為實體

-- 如果一個單位持有物品但是被position，由於轉化為了地圖實體，所以單位會失去物品
-- 感覺類似瞬間無視距離丟棄物品一樣
```

### UnitTpl

```lua
TPL_UNIT = {
    Footman = UnitTpl("Footman") -- 此處的Footman指引用語音，預設無
        :name("步兵")
        :barStateMode(2) -- 血條樣式設定
        :barStateAlways(true)
        :barStateMarker(500)
        :iconMap(AUIKit("looplorer_minimap", "dot/me", "tga"), 0.03, 0.03) -- 小地圖圖示樣式
        :modelAlias("TheCaptain") -- 使用的模型
        :icon("unit/TheCaptain")
        :scale(1.2)
        :pickItemMode("warehouseSlot") -- 物品拾取模式
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

-- 執行時程式碼建立
local u1 = Unit(TPL_UNIT.Footman, Player(1), 0, 0, 270)
u1:reborn(0.5)
```
