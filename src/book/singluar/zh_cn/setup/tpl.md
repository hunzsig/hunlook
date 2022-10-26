## TPL 模版

> 不再依赖物编的本框架，衍生出了新的代替品：TPL
>
> TPL 是 template 的简称，意为模板、标准
>
> Ability、Item、Unit三大件都基于Tpl来构建

##### 由于写法太多，这里只随便写几种，仅供简单参考

> TPL 就像是代码物编一样，但可以在运行时修改热更新，配合流程测试会很爽

### AbilityTpl

```lua
TPL_ABILITY = {

    ---@param effectiveData noteOnAbilityEffectiveData
    AB1 = AbilityTpl("技能1", ABILITY_TARGET_TYPE.TAG_R)
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
            "基础消耗：" .. colour.purple("{this.mpCost()}"),
            "对目标造成伤害：" .. colour.gold("{math.floor(this.bindUnit().attack()*100)}") .. "(攻击x100)"
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
    AB2 = AbilityTpl("唯我独尊", ABILITY_TARGET_TYPE.PAS)
        .icon("AB2")
        .description({ "强击单人特效: +{50+this.level()*100}攻击" })
        .levelMax(5)
        .levelUpNeedPoint(101)
        .onEvent(EVENT.Item.Get,
        function(getData)
            getData.triggerUnit.attack("+=" .. 50 + 100 * getData.triggerAbility.level())
        end)
        .onEvent(EVENT.Item.Lose,
        function(loseData)
            loseData.triggerUnit.attack("-=" .. 50 + 100 * loseData.triggerAbility.level())
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

-- 后续代码创建技能对象
-- 单位既可以pushAbility也可以pushAbilityTpl，智能加技能

-- myUnit是一个Unit对象，这里只是演示，请自行理解
-- myUnitSlot是一个AbilitySlot对象，代表该单位的技能栏

local myUnitSlot = myUnit.abilitySlot()
myUnitSlot.push(Ability(TPL_ABILITY.AB1))
myUnitSlot.push(TPL_ABILITY.AB1)
myUnitSlot.push(TPL_ABILITY.AB2, 6)
```

### ItemTpl

```lua
-- 物品首先要有物品类别的模型支撑，这里也演示一下assets的资源
-- !!! 这个资源在new项目的origin资产里有，一般不需要你再去寻找F6物编

-- 物品宝箱
_assets_model(
    ":Objects\\InventoryItems\\TreasureChest\\treasurechest.mdl",
    "TreasureChest", "item" -- 这个"item"代表这个model可用于Item对象,没有是不行的
 )
```

> 然后定义Tpl

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

-- 运行时代码创建
-- 直接实例
local it1 = TPL_ITEM.IT1.create(0, 0)
local it2 = TPL_ITEM.IT2.create(0, 0)

-- 可以看到前面直接create到0,0坐标了
-- 实际上Item对象是有两种状态的，实例化状态和虚拟化状态，简单理解就是物品需要在大地图的时候才会是实体

local it1 = Item(TPL_ITEM.IT1) -- 此时Item对象由Tpl建立，但是虚拟的
it1.portal(0, 0) -- 我将其移动到0,0后，触发了大地图所以自动转为实体

-- 如果一个单位持有物品但是被portal，由于转化为了地图实体，所以单位会失去物品
-- 感觉类似瞬间无视距离丢弃物品一样
```

### UnitTpl

```lua
-- 单位和物品一样，要有单位类别的模型支撑，这里也演示一下assets的资源
-- !!! 这个资源也在new项目的origin资产里有，一般不需要你再去寻找F6物编

-- 黑暗游侠
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

> 然后定义Tpl

```lua
TPL_UNIT = {}
-- 黑暗游侠
TPL_UNIT.BansheeRanger = UnitTpl("BansheeRanger")
-- 火焰巨魔
TPL_UNIT.HeroFlameLord = UnitTpl("HeroFlameLord")

-- TPL也定义提前设置技能、物品、事件
TPL_UNIT.Footman = UnitTpl("Footman")
    .abilitySlot({TPL_ABILITY.AB1,TPL_ABILITY.AB2})
    .itemSlot({TPL_ITEM.IT1,TPL_ITEM.IT2})
    .onEvent(EVENT.Unit.MoveTurn, "myTurn",
    function()
        print("I am turning!")
    end)

-- 运行时代码创建
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
