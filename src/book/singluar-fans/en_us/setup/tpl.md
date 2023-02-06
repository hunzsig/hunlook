## TPL Template

> No longer rely on the framework compiled by Wu, a new substitute has been derived: TPL
>
> TPL is the abbreviation of template, which means template and standard
>
> Ability, item and unit are all built based on TPL

##### Because there are too many ways to write, only a few are written here for simple reference only

> TPL is like code editing, but you can modify hot updates at run time. It will be great to cooperate with process
> testing

### AbilityTpl

```lua
TPL_ABILITY = {

    ---@param effectiveData noteOnAbilityEffectiveData
    AB1 = AbilityTpl()
        .name("AB1")
        .targetType(ABILITY_TARGET_TYPE.TAG_R)
        .icon("AB1")
        .coolDownAdv(2.5, -0.05)
        .hpCostAdv(10, 5)
        .mpCostAdv(1, 7)
        .castChantAdv(2, -0.1)
        .castKeepAdv(10, 0.5)
        .castRadiusAdv(500, 50)
        .levelMax(9)
        .description(
        function(this)
            local dmg = 0
            if (this.bindUnit and this.bindUnit()) then
                dmg = math.floor(this.bindUnit().attack() * 100)
            else
                dmg = "（BaseOnAtk）"
            end
            return {
                "Cost：" .. colour.hex(colour.violet, this.mpCost()),
                "Dmg：" .. colour.hex(colour.gold, dmg) .. "[Atk*100]"
            }
        end)
        .castTargetFilter(
        function(this, targetUnit)
            return targetUnit ~= nil and targetUnit.isEnemy(this.bindUnit().owner())
        end)
        .onEvent(EVENT.Ability.Effective,
        function(effectiveData)
            local ftp = 1
            time.setInterval(ftp, function(curTimer)
                -- It's just a continuous casting skill. After casting, use isAbilityKeepCasting to determine whether you are still casting
                -- So as to achieve the effect of various cycles
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
    AB2 = AbilityTpl()
        .name("King")
        .targetType(ABILITY_TARGET_TYPE.PAS)
        .icon("AB2")
        .description({ "formula: 50+level*100" })
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
        
    AB3 = AbilityTpl()
        .name("King attributes type")
        .targetType(ABILITY_TARGET_TYPE.PAS)
        .icon("AB3")
        .description("formula: 50+level*100")
        .levelMax(5)
        .levelUpNeedPoint(101)
        .attributes({
            { "attack", 100, 50 },
        })
}

-- Create skill object in subsequent code
-- Units can either pushAbility or pushAbilityTpl, with intelligence and skills

-- myUnit is a Unit object. This is just a demonstration. Please understand
-- myUnitSlot is an AbilitySlot object, representing the skill bar of the unit

local myUnitSlot = myUnit.abilitySlot()
myUnitSlot.push(Ability(TPL_ABILITY.AB1))
myUnitSlot.push(TPL_ABILITY.AB2)
myUnitSlot.push(TPL_ABILITY.AB3, 6)
```

### ItemTpl

```lua
-- The item must first be supported by the model of the item category. Here is also a demonstration of assets resources
-- !!! This resource is in the origin asset of the new project, and you don't need to search for the F6 inventory

-- Item chest
_assets_model(
    ":Objects\\InventoryItems\\TreasureChest\\treasurechest.mdl",
    "TreasureChest", "item" -- The "item" represents that the model can be used for the Item object, and it is not allowed if there is no item
 )
```

> Then define TPL

```lua
TPL_ITEM = {

    IT1 = ItemTpl("TreasureChest")
        .name("item1")
        .ability(Ability(TPL_ABILITY.AB1))
        .icon("AB1")
        .levelMax(9)
        .worth({ gold = 10, silver = 5, copper = 3 })
        .charges(999)

    IT2 = ItemTpl("TreasureChest")
        .name("item2")
        .ability(Ability(TPL_ABILITY.AB2))
        .icon("AB2")
        .levelMax(9)
        .worth({ gold = 10, silver = 5, copper = 3 })

}

-- Runtime Code Creation
-- Direct instance
local it1 = TPL_ITEM.IT1.create(0, 0)
local it2 = TPL_ITEM.IT2.create(0, 0)

-- You can see that the front is directly created to the 0,0 coordinates
-- In fact, the Item object has two states, instantiation state and virtualization state. The simple understanding is that an item is an entity only when it is on the big map

local it1 = Item(TPL_ITEM.IT1) -- At this time, the Item object is created by Tpl, but it is virtual
it1.portal(0, 0) -- After I move it to 0,0, the big map is triggered, so it is automatically converted into an entity

-- If a unit holds an item but is transferred to a portal, it will lose the item because it is converted to a map entity
-- It feels like discarding objects at an instant regardless of distance
```

### UnitTpl

```lua
-- The same as the item, the unit should be supported by the model of the unit category. Here is also a demonstration of assets resources
-- !!! This resource is also included in the origin asset of the new project. Generally, you do not need to look for F6 materials

-- BansheeRanger
_assets_model(
    ":Units\\Creeps\\BansheeRanger\\BansheeRanger", "BansheeRanger", 
    "unit", { Art = "unit\\hero\\BansheeRanger"}
)
-- HeroFlameLord
_assets_model(
    ":Units\\Creeps\\HeroFlameLord\\HeroFlameLord", "HeroFlameLord",
    "unit", { Art = "unit\\hero\\HeroAvatarOfFlame"}
)
```

> Then define TPL

```lua
TPL_UNIT = {}
-- BansheeRanger
TPL_UNIT.BansheeRanger = UnitTpl("BansheeRanger")
-- HeroFlameLord
TPL_UNIT.HeroFlameLord = UnitTpl("HeroFlameLord")

-- TPL also defines setting skills and items and events in advance
TPL_UNIT.Footman = UnitTpl("Footman")
    .superposition("attack", 1)
    .abilitySlot({TPL_ABILITY.AB1,TPL_ABILITY.AB2})
    .itemSlot({TPL_ITEM.IT1,TPL_ITEM.IT2})
    .onEvent(EVENT.Unit.MoveTurn, "myTurn",
    function()
        print("I am turning!")
    end)

-- Runtime Code Creation
local u1 = TPL_UNIT.BansheeRanger
  .create(Player(1), 0, 0, 66.6).level(1)
  .reborn(0.5)
  .hp(1500).hpRegen(10)
  .mp(100).mpRegen(-1)
  .move(522)
  .attack(91).attackRange(1000).attackSpeed(100)
  .attackRipple(30)
  .missilePush(Missile("DragonHawkMissile").homing(true))

local u2 = Player(2)
  .unit(TPL_UNIT.HeroFlameLord, -400, 400, 66.6)
  .period(1000).primary("agi")
  .move(50)
  .hp(1000000)
  .mpRegen("+=10")
  .attack(109).attackRange(300)
  .punish(1000)
  .avoid(35)
  .lightningPush(Lighting(LIGHTING_TYPE.thunderRed))
  
```
