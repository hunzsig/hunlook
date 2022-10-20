## TPL 模版

> 不再依賴物編的本框架，衍生出了新的代替品：TPL
>
> TPL 是 template 的簡稱，意為模闆、標準
>
> Ability、Item、Unit三大件都基於Tpl來構建

##### 由於寫法太多，這裡隻隨便寫幾種，僅供簡單參考

> TPL 就像是程式碼物編一樣，但可以在執行時修改熱更新，配合流程測試會很爽

### AbilityTpl

```lua
TPL_ABILITY = {

    ---@param effectiveData noteOnAbilityEffectiveData
     AbilityTpl("技能1", ABILITY_TARGET_TYPE.TAG_R)
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
            "基礎消耗：" .. colour.purple("{this.mpCost()}"),
            "對目標造成傷害：" .. colour.gold("{math.floor(this.bindUnit().attack()*100)}") .. "(攻擊x100)"
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
                -- 隻是一個持續施法技能，施法後使用isAbilityKeepCasting判定是否仍在施法
                -- 從而可以實現各種周期的效果
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
    AbilityTpl("唯我獨尊", ABILITY_TARGET_TYPE.PAS)
        .icon("AB2")
        .description({ "強擊單人特效: +{50+this.level()*100}攻擊" })
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

-- 後續程式碼建立技能物件
-- 單位既可以pushAbility也可以pushAbilityTpl，智慧加技能

-- myUnit是一個Unit物件，這裡隻是演示，請自行理解
-- myUnitSlot是一個AbilitySlot物件，代錶該單位的技能欄

local myUnitSlot = myUnit.abilitySlot()
myUnitSlot.push(Ability(TPL_ABILITY.AB1))
myUnitSlot.push(TPL_ABILITY.AB2)
myUnitSlot.push(TPL_ABILITY.AB3, 6)
```

### ItemTpl

```lua
-- 物品首先要有物品類別的模型支撐，這裡也演示一下assets的資源
-- !!! 這個資源在new專案的origin資産裡有，一般不需要你再去尋找F6物編

-- 物品寶箱
_assets_model(
    ":Objects\\InventoryItems\\TreasureChest\\treasurechest.mdl",
    "TreasureChest", "item" -- 這個"item"代錶這個model可用於Item物件,冇有是不行的
 )
```

> 然後定義Tpl

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

-- 執行時程式碼建立
-- 直接例項
local it1 = TPL_ITEM.IT1.create(0, 0)
local it2 = TPL_ITEM.IT2.create(0, 0)

-- 可以看到前麵直接create到0,0坐標了
-- 實際上Item物件是有兩種狀態的，例項化狀態和虛擬化狀態，簡單理解就是物品需要在大地圖的時候才會是實體

local it1 = Item(TPL_ITEM.IT1) -- 此時Item物件由Tpl建立，但是虛擬的
it1.portal(0, 0) -- 我將其移動到0,0後，觸發了大地圖所以自動轉為實體

-- 如果一個單位持有物品但是被portal，由於轉化為了地圖實體，所以單位會失去物品
-- 感覺類似瞬間無視距離丟棄物品一樣
```

### UnitTpl

```lua
-- 單位和物品一樣，要有單位類別的模型支撐，這裡也演示一下assets的資源
-- !!! 這個資源也在new專案的origin資産裡有，一般不需要你再去尋找F6物編

-- 黑暗遊俠
_assets_model(
    ":Units\\Creeps\\BansheeRanger\\BansheeRanger", "BansheeRanger", 
    "unit", { Art = "unit\\hero\\BansheeRanger"}
)
-- 火焰巨魔
_assets_model(
    ":Units\\Creeps\\HeroFlameLord\\HeroFlameLord", "HeroFlameLord",
    "unit", { Art = "unit\\hero\\HeroAvatarOfFlame"}
)
```

> 然後定義Tpl

```lua
TPL_UNIT = {}
-- 黑暗遊俠
TPL_UNIT.BansheeRanger = UnitTpl("BansheeRanger")
-- 火焰巨魔
TPL_UNIT.HeroFlameLord = UnitTpl("HeroFlameLord")

-- TPL也定義提前設定技能、物品
TPL_UNIT.Footman = UnitTpl("Footman")
    .abilitySlot({TPL_ABILITY.AB1,TPL_ABILITY.AB2})
    .itemSlot({TPL_ITEM.IT1,TPL_ITEM.IT2})

-- 執行時程式碼建立
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
