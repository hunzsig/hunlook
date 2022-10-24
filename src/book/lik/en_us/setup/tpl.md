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
---@param effectiveData noteOnAbilityEffectiveData
TPL_ABILITY.DEMO = AbilityTpl()
    :name("Demo Ability")
    :targetType(ABILITY_TARGET_TYPE.tag_nil)
    :icon("black")
    :coolDownAdv(10, 0)
    :mpCostAdv(100, 0)
    :onEvent(EVENT.Ability.Effective,
    function(effectiveData)
        echo("spell", effectiveData.triggerUnit:owner())
    end),

---@param hurtData noteOnUnitHurtData
---@param effectiveData noteOnAbilityEffectiveData
TPL_ABILITY.ZZJY = AbilityTpl()
    :name("hurtRebound")
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
        -- Effect of skill being triggered
        local tu = effectiveData.triggerUnit
        tu:attach("DivineShieldTarget", "origin", 3)
          :buff("hurtRebound")
          :duration(3)
          :purpose(function(buffObj)
            buffObj:hurtReduction("+=100"):hurtRebound("+=100"):odds("hurtRebound", "+=100")
        end)
          :rollback(function(buffObj)
            buffObj:hurtReduction("-=100"):hurtRebound("-=100"):odds("hurtRebound", "-=100")
        end)
          :run()
    end)

-- Create skill object in subsequent code
-- Units can either pushAbility or pushAbilityTpl, with intelligence and skills

-- MyUnit is a Unit object. This is just a demonstration. Please understand
-- MyUnitSlot is an AbilitySlot object, representing the skill bar of the unit

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
        :modelAlias("TreasureChest") -- Treasure box model
        :name("Demo Item")
        :ability(TPL_ABILITY.DEMO)
        :icon("black")
        :worth({ gold = 10 })
        :onEvent(EVENT.Item.Get,
        function(getData)
            echo("get", getData.triggerUnit:owner())
        end)

}

-- Runtime Code Creation
-- Direct instance
local it1 = TPL_ITEM.IT1:create(0, 0)
local it2 = TPL_ITEM.IT2:create(0, 0)

-- You can see that the front is directly created to the 0,0 coordinates
-- In fact, the Item object has two states, instantiation state and virtualization state. The simple understanding is that an item is an entity only when it is on the big map

local it1 = Item(TPL_ITEM.IT1) -- At this time, the Item object is created by Tpl, but it is virtual
it1:position(0, 0) -- After I move it to 0,0, the big map is triggered, so it is automatically converted into an entity

-- If a unit holds an item but is placed, it will lose the item because it is converted to a map entity
-- It feels like discarding objects at an instant regardless of distance
```

### UnitTpl

```lua
TPL_UNIT = {
    Footman = UnitTpl("Footman") -- Footman here refers to the quoted voice, and the default is none
        :name("Footman")
        :barStateMode(2) -- Blood Bar Style Settings
        :barStateAlways(true)
        :barStateMarker(500)
        :iconMap(AUIKit("looplorer_minimap", "dot/me", "tga"), 0.03, 0.03) -- Small map icon style
        :modelAlias("TheCaptain") -- Models used
        :icon("unit/TheCaptain")
        :scale(1.2)
        :pickItemMode("warehouseSlot") -- Item Picking Mode
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

-- Runtime Code Creation
local u1 = Unit(TPL_UNIT.Footman, Player(1), 0, 0, 270)
u1:reborn(0.5)
```
