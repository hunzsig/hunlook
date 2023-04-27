## Event

#### All events

```lua
---@alias noteOnPropBase {key:"prop key", old:"old value", new:"new value"}
---@alias noteOnPropGame noteOnPropBase|{triggerObject:Game}
---@alias noteOnPropPlayer noteOnPropBase|{triggerObject:Player}
---@alias noteOnPropUnit noteOnPropBase|{triggerObject:Unit}
---@alias noteOnPropAbility noteOnPropBase|{triggerObject:Ability}
---@alias noteOnPropItem noteOnPropBase|{triggerObject:Item}
EVENT.Prop = {
    --- Before changing game parameters
    BeforeChange = "propBeforeChange",
    --- After changing game parameters
    Change = "propChange",
}

---@alias noteOnObjectConstructData {triggerObject:Object}
---@alias noteOnObjectDestructData {triggerObject:Object}
---@alias noteOnAIDestructData {triggerObject:AI} AI
---@alias noteOnAbilityDestructData {triggerObject:Ability}
---@alias noteOnEffectDestructData {triggerObject:Effect}
---@alias noteOnItemDestructData {triggerObject:Item}
---@alias noteOnUnitDestructData {triggerObject:Unit}
---@alias noteOnTimerDestructData {triggerObject:Timer}
EVENT.Object = {
    --- objects creating
    Construct = "ObjectConstruct",
    --- Object destruction
    Destruct = "ObjectDestruct",
}

EVENT.Game = {
    --- Start the game (this event will be automatically destroyed after the game starts)
    ---@alias noteOnGameStartData nil
    Start = "gameStart",
    --- Entering the early morning
    ---@alias noteOnGameDawnData nil
    Dawn = "gameDawn",
    --- Entering the day
    ---@alias noteOnGameDayData nil
    Day = "gameDay",
    --- Entering noon
    ---@alias noteOnGameNoonData nil
    Noon = "gameNoon",
    --- Entering night
    ---@alias noteOnGameNightData nil
    Night = "gameNight",
}

---@alias noteOnPlayerBase {triggerPlayer:Player}
EVENT.Player = {
    --- Players chat
    ---@alias noteOnPlayerChatData noteOnPlayerBase|{chatString:"Chat content",matchedString:"Match hit content"}
    Chat = "playerChat",
    --- Players press Esc
    ---@alias noteOnPlayerEscData noteOnPlayerBase
    Esc = "playerEsc",
    --- Player selected unit
    ---@alias noteOnPlayerSelectUnitData noteOnPlayerBase|{triggerUnit:Unit}
    SelectUnit = "playerSelectUnit",
    --- Players deselect units
    ---@alias noteOnPlayerDeSelectUnitData noteOnPlayerBase|{triggerUnit:Unit}
    DeSelectUnit = "playerDeSelectUnit",
    --- Player selected item
    ---@alias noteOnPlayerSelectItemData noteOnPlayerBase|{triggerItem:Item}
    SelectItem = "playerSelectItem",
    --- Players cancel the selection of items
    ---@alias noteOnPlayerDeSelectItemData noteOnPlayerBase|{triggerUnit:Unit}
    DeSelectItem = "playerDeSelectItem",
    --- Players leave the game
    ---@alias noteOnPlayerQuitData noteOnPlayerBase
    Quit = "playerQuit",
    --- 仓库栏有所变化
    ---@alias noteOnPlayerWarehouseSlotChangeData noteOnPlayerBase|{triggerSlot:WarehouseSlot}
    WarehouseSlotChange = "playerWarehouseSlotChange",
}

---@alias noteOnUnitBase {triggerUnit:Unit,triggerAbility:Ability,triggerItem:Item}
EVENT.Unit = {
    --- Prepare for attack
    ---@alias noteOnUnitBeforeAttackData noteOnUnitBase|{targetUnit:Unit}
    BeforeAttack = "unitBeforeAttack",
    --- Attack
    ---@alias noteOnUnitAttackData noteOnUnitDamageData
    Attack = "unitAttack",
    --- Avoid
    ---@alias noteOnUnitAvoidData noteOnUnitBase|{sourceUnit:Unit}
    Avoid = "unitAvoid",
    --- Armor piercing
    ---@alias noteOnUnitBreakArmorData noteOnUnitBase|{targetUnit:Unit,breakType:"type"}
    BreakArmor = "unitBreakArmor",
    --- Shield reduction
    ---@alias noteOnUnitShieldData noteOnUnitBase|{targetUnit:Unit,value:"Shield breaking value"}
    Shield = "unitShield",
    --- Hit the target
    ---@alias noteOnUnitCrackFlyData noteOnUnitBase|{targetUnit:Unit,distance:"value",height:"value",duration:"time"}
    CrackFly = "unitCrackFly",
    --- Critical hit target(Self-attribute mode)
    ---@alias noteOnUnitCritData noteOnUnitBase|{targetUnit:Unit}
    Crit = "unitCrit",
    --- Critical hit target(Call ability method)
    ---@alias noteOnUnitCritAbilityData noteOnUnitBase|{targetUnit:Unit}
    CritAbility = "unitCritAbility",
    --- Cause damage
    ---@alias noteOnUnitDamageData noteOnUnitBase|{targetUnit:Unit,damage:"data",damageSrc:"source",damageType:"type"}
    Damage = "unitDamage",
    --- Unit birth
    ---@alias noteOnUnitBornData noteOnUnitBase
    Born = "unitBorn",
    --- Unit objects die
    ---@alias noteOnUnitDeadData noteOnUnitBase|{sourceUnit:Unit}
    Dead = "unitDead",
    --- Unit feign death (triggered when a unit that can be revived is killed)
    ---@alias noteOnUnitFeignDeadData noteOnUnitDeadData
    FeignDead = "unitFeignDead",
    --- Unit reborn
    ---@alias noteOnUnitRebornData noteOnUnitBase
    Reborn = "unitReborn",
    --- Hold Command
    ---@alias noteOnUnitOrderHoldData noteOnUnitBase
    OrderHold = "unitOrderHold",
    --- Stop Command
    ---@alias noteOnUnitOrderStopData noteOnUnitBase
    OrderStop = "unitOrderStop",
    --- Move Command
    ---@alias noteOnUnitOrderMoveData noteOnUnitBase|{targetX:number,targetY:number}
    OrderMove = "unitOrderMove",
    --- Attack Command
    ---@alias noteOnUnitOrderAttackData noteOnUnitBase|{targetX:number,targetY:number}
    OrderAttack = "unitOrderAttack",
    --- Enchant
    ---@alias noteOnUnitEnchantData noteOnUnitBase|{sourceUnit:Unit,enchantType:"type",percent:"%"}
    Enchant = "unitEnchant",
    --- Attack blood sucking
    ---@alias noteOnUnitHPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"value",percent:"%"}
    HPSuckAttack = "unitHPSuckAttack",
    --- Skill Vampire
    ---@alias noteOnUnitHPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"value",percent:"%"}
    HPSuckAbility = "unitHPSuckAbility",
    --- Unit injured
    ---@alias noteOnUnitHurtData noteOnUnitBase|{sourceUnit:Unit,targetUnit:Unit,damage:"data",damageSrc:"source",damageType:"type"}
    Hurt = "unitHurt",
    --- Before unit injury
    ---@alias noteOnUnitBeforeHurtData noteOnUnitHurtData
    BeforeHurt = "unitBeforeHurt",
    --- Total resistance[defence]
    ---@alias noteOnUnitImmuneDefendData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneDefend = "unitImmuneDefend",
    --- Total resistance[invincible]
    ---@alias noteOnUnitImmuneInvincibleData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneInvincible = "unitImmuneInvincible",
    --- Total resistance[reduction]
    ---@alias noteOnUnitImmuneReductionData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneReduction = "unitImmuneReduction",
    --- Enchant Immune
    ---@alias noteOnUnitImmuneEnchantData noteOnUnitBase|{sourceUnit:Unit,enchantType:"type"}
    ImmuneEnchant = "unitImmuneEnchant",
    --- Unit kills enemies
    ---@alias noteOnUnitKillData noteOnUnitBase|{targetUnit:Unit}
    Kill = "unitKill",
    --- Lightning chain hits the target
    ---@alias noteOnUnitLightningChainData noteOnUnitBase|{targetUnit:Unit,index:"index"}
    LightningChain = "unitLightningChain",
    --- Attack absorb magic
    ---@alias noteOnUnitMPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"value",percent:"%"}
    MPSuckAttack = "unitMPSuckAttack",
    --- Skills absorb magic
    ---@alias noteOnUnitMPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"value",percent:"%"}
    MPSuckAbility = "unitMPSuckAbility",
    --- Move Start
    ---@alias noteOnUnitMoveStartData noteOnUnitBase|{x:"x",y:"y"}
    MoveStart = "unitMoveStart",
    --- Move Stop
    ---@alias noteOnUnitMoveStopData noteOnUnitBase
    MoveStop = "unitMoveStop",
    --- Move change direction
    ---@alias noteOnUnitMoveTurnData noteOnUnitBase|{x:"x",y:"y"}
    MoveTurn = "unitMoveTurn",
    --- Moving
    ---@alias noteOnUnitMovingData noteOnUnitBase|{x:"x",y:"y",step:"which"}
    Moving = "unitMoving",
    --- Move Route
    ---@alias noteOnUnitMoveRouteData noteOnUnitBase|{x:"x",y:"y"}
    MoveRoute = "unitMoveRoute",
    --- Punish
    ---@alias noteOnUnitPunishData noteOnUnitBase|{sourceUnit:Unit,percent:"value",duration:"time"}
    Punish = "unitPunish",
    --- Rebound
    ---@alias noteOnUnitReboundData noteOnUnitDamageData
    Rebound = "unitRebound",
    --- Split
    ---@alias noteOnUnitSplitData noteOnUnitBase|{targetUnit:Unit,radius:number}
    Split = "unitSplit",
    --- Stun
    ---@alias noteOnUnitStunData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Stun = "unitStun",
     --- Break the shield
    ---@alias noteOnUnitBreakShieldData noteOnUnitBase|{targetUnit:Unit}
    BreakShield = "unitBreakShield",
    --- Unit level Change
    ---@alias noteOnUnitLevelChangeData noteOnUnitBase|{value:"Variation difference"}
    LevelChange = "unitLevelChange",
    --- The skill column has changed
    ---@alias noteOnUnitAbilitySlotChangeData noteOnUnitBase|{triggerSlot:AbilitySlot}
    AbilitySlotChange = "unitAbilitySlotChange",
    --- The item column has changed
    ---@alias noteOnUnitItemSlotChangeData noteOnUnitBase|{triggerSlot:ItemSlot}
    ItemSlotChange = "unitItemSlotChange",
    --- Trap In Interrupt
    ---@alias noteOnUnitInterruptInData noteOnUnitBase
    InterruptIn = "unitInterruptIn",
    --- Disengagement suspension
    ---@alias noteOnUnitInterruptOutData noteOnUnitBase
    InterruptOut = "unitInterruptOut",
    --- Be
    Be = {
        --- Before attacked
        ---@alias noteOnUnitBeBeforeAttackData noteOnUnitBase|{sourceUnit:Unit}
        BeforeAttack = "be:unitBeforeAttack",
        --- Be attacked
        ---@alias noteOnUnitBeAttackData noteOnUnitHurtData
        Attack = "be:unitAttack",
        --- Before killed
        ---@alias noteOnUnitBeKillData noteOnUnitBase|{sourceUnit:Unit}
        Kill = "be:unitKill",
        --- Be evaded
        ---@alias noteOnUnitBeAvoidData noteOnUnitBase|{targetUnit:Unit}
        Avoid = "be:unitAvoid",
        --- Be broken
        ---@alias noteOnUnitBeBreakArmorData noteOnUnitBase|{sourceUnit:Unit,breakType:"type"}
        BreakArmor = "be:unitBreakArmor",
        --- Shield reduced
        ---@alias noteOnUnitBeShieldData noteOnUnitBase|{sourceUnit:Unit,value:"value"}
        Shield = "be:unitShield",
        --- Be crack fly
        ---@alias noteOnUnitBeCrackFlyData noteOnUnitBase|{sourceUnit:Unit,distance:number,height:number,duration:number}
        CrackFly = "be:unitCrackFly",
        --- Be critically hit
        ---@alias noteOnUnitBeCritData noteOnUnitBase|{sourceUnit:Unit}
        Crit = "be:unitCrit",
        --- Be critically hit
        ---@alias noteOnUnitCritAbilityData noteOnUnitBase|{sourceUnit:Unit}
        CritAbility = "be:unitCritAbility",
        --- Be attacked to suck blood
        ---@alias noteOnUnitBeHPSuckAttackData noteOnUnitBase|{sourceUnit:Unit,value:"value",percent:"%"}
        HPSuckAttack = "be:unitHPSuckAttack",
        --- Sucked by skills
        ---@alias noteOnUnitBeHPSuckAbilityData noteOnUnitBase|{sourceUnit:Unit,value:"value",percent:"%"}
        HPSuckAbility = "be:unitHPSuckAbility",
        --- Hit by lightning chain
        ---@alias noteOnUnitBeLightningChainData noteOnUnitBase|{sourceUnit:Unit,index:"index"}
        LightningChain = "be:unitLightningChain",
        --- Be attacked and absorb demons
        ---@alias noteOnUnitBeMPSuckAttackData noteOnUnitBase|{sourceUnit:Unit,value:"value",percent:"%"}
        MPSuckAttack = "be:unitMPSuckAttack",
        --- Absorbed by skills
        ---@alias noteOnUnitBeMPSuckAbilityData noteOnUnitBase|{sourceUnit:Unit,value:"value",percent:"%"}
        MPSuckAbility = "be:unitMPSuckAbility",
        --- Be injured in return
        ---@alias noteOnUnitBeReboundData noteOnUnitHurtData
        Rebound = "be:unitRebound",
        --- Be divided[Core type]
        ---@alias noteOnUnitBeSplitData noteOnUnitBase|{sourceUnit:Unit,radius:number}
        Split = "be:unitSplit",
        --- Be divided[Diffusive type]
        ---@alias noteOnUnitBeSplitSpreadData noteOnUnitBase|{sourceUnit:Unit}
        SplitSpread = "be:unitSplitSpread",
        --- Be Stun
        ---@alias noteOnUnitBeStunData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Stun = "be:unitStun",
        --- Broken shield
        ---@alias noteOnUnitBeBreakShieldData noteOnUnitBase|{sourceUnit:Unit}
        BreakShield = "be:unitBreakShield",
    }
}

---@alias noteOnAbilityBase {triggerAbility:Ability,triggerUnit:Unit}
EVENT.Ability = {
    -- When the unit gains skills
    ---@alias noteOnAbilityGetData noteOnAbilityBase
    Get = "abilityGet",
    --- Unit lost skill
    ---@alias noteOnAbilityLoseData noteOnAbilityBase
    Lose = "abilityLose",
    --- When Unit starts to cast skills (at the moment of casting)
    ---@alias noteOnAbilitySpellData noteOnAbilityBase|{triggerItem:Item,targetUnit:Unit,targetX:number,targetY:number,targetZ:number}
    Spell = "abilitySpell",
    --- Skills come into effect
    ---@alias noteOnAbilityEffectiveData noteOnAbilitySpellData
    Effective = "abilityEffective",
    --- Skill continuous casting weekly period (action time)
    ---@alias noteOnAbilityCastingData noteOnAbilitySpellData
    Casting = "abilityCasting",
    --- Stop casting skills (chanting and continuous casting have a stop state)
    ---@alias noteOnAbilityStopData noteOnAbilityBase
    Stop = "abilityStop",
    --- End of casting skill (only continuous casting can end)
    ---@alias noteOnAbilityOverData noteOnAbilityBase
    Over = "abilityOver",
    --- Level change
    ---@alias noteOnAbilityLevelChangeData noteOnAbilityBase|{value:"Variation difference"}
    LevelChange = "abilityLevelChange",
}

---@alias noteOnItemBase {triggerItem:Item,triggerUnit:Unit}
EVENT.Item = {
    --- Pick up items
    ---@alias noteOnItemPickData noteOnItemBase
    Pick = "itemPick",
    --- Get items
    ---@alias noteOnItemGetData noteOnItemBase
    Get = "itemGet",
    --- Lose items
    ---@alias noteOnItemLoseData noteOnItemBase
    Lose = "itemLose",
    --- Use items
    ---@alias noteOnItemUsedData noteOnItemBase|noteOnAbilityEffectiveData
    Used = "itemUsed",
    --- Drop items
    ---@alias noteOnItemDropData noteOnItemBase|{targetX:number,targetY:number}
    Drop = "itemDrop",
    --- Deliver items
    ---@alias noteOnItemDeliverData noteOnItemBase|{targetUnit:Unit}
    Deliver = "itemDeliver",
    --- Pawn(Sold by the holder)
    ---@alias noteOnItemPawnData noteOnItemBase
    Pawn = "itemPawn",
    --- Level change
    ---@alias noteOnItemLevelChangeData noteOnItemBase|{value:"Variation difference"}
    LevelChange = "itemLevelChange",
    --- Item dead
    ---@alias noteOnItemDeadData noteOnItemBase|{sourceUnit:Unit}
    Dead = "itemDead",
    --- Be
    Be = {
        --- Be attacked
        ---@alias noteOnItemBeAttackData noteOnItemBase|{sourceUnit:Unit,damage:"data"}
        Attack = "be:itemAttack",
    }
}

---@alias noteOnStoreBase {triggerStore:Store}
EVENT.Store = {
    --- Goods sold
    ---@alias noteOnStoreSellData noteOnStoreBase|{qty:"Quantity sold"}
    Sell = "storeSell",
}

---@alias noteOnRegionBase {triggerRegion:Region}
EVENT.Region = {
    --- Entry the region
    ---@alias noteOnRegionEnterData noteOnRegionBase|{triggerUnit:Unit}
    Enter = "regionEnter",
    --- Leave the region
    ---@alias noteOnRegionLeaveData noteOnRegionBase|{triggerUnit:Unit}
    Leave = "regionLeave",
}

---@alias noteOnAuraBase {triggerAura:Aura}
EVENT.Aura = {
    --- Entry the aura
    ---@alias noteOnAuraEnterData noteOnAuraBase|{triggerUnit:Unit}
    Enter = "auraEnter",
    --- Leave the aura
    ---@alias noteOnAuraLeaveData noteOnAuraBase|{triggerUnit:Unit}
    Leave = "auraLeave",
}

---@alias noteOnDestructableBase {triggerDestructable:number}
EVENT.Destructable = {
    --- Destructible objects die
    ---@alias noteOnDestructableDeadData noteOnDestructableBase|{name:"unreliableName",x:"x",y:"y"}
    Dead = "destructableDead",
}

---@alias noteOnFrameBase {triggerFrame:Frame}
EVENT.Frame = {
    --- When Frame Show
    ---@alias noteOnFrameShowData noteOnFrameBase
    Show = "frameShow",
    --- When Frame Hide
    ---@alias noteOnFrameHideData noteOnFrameBase
    Hide = "frameHide",
    --- Mouse Click Left
    ---@alias noteOnFrameLeftClickData noteOnFrameBase|{triggerPlayer:Player}
    LeftClick = "frameLeftClick",
    --- Mouse Release Left
    ---@alias noteOnFrameLeftReleaseData noteOnFrameBase|{triggerPlayer:Player,status:"Whether the mouse is still in the frame"}
    LeftRelease = "frameLeftRelease",
    --- Mouse Click Right
    ---@alias noteOnFrameRightClickData noteOnFrameBase|{triggerPlayer:Player}
    RightClick = "frameRightClick",
    --- Mouse Release Right
    ---@alias noteOnFrameRightReleaseData noteOnFrameBase|{triggerPlayer:Player,status:"Whether the mouse is still in the frame"}
    RightRelease = "frameRightRelease",
    --- Mouse move on
    ---@alias noteOnFrameMoveData noteOnFrameBase|{triggerPlayer:Player}
    Move = "frameMove",
    --- Mouse enter
    ---@alias noteOnFrameEnterData noteOnFrameBase|{triggerPlayer:Player}
    Enter = "frameEnter",
    --- Mouse leave
    ---@alias noteOnFrameLeaveData noteOnFrameBase|{triggerPlayer:Player}
    Leave = "frameLeave",
    --- Mouse roll
    ---@alias noteOnFrameWheelData noteOnFrameBase|{triggerPlayer:Player,delta:"Scroll Values"}
    Wheel = "frameWheel",
    --- Drag Start
    ---@alias noteOnFrameDragStartData noteOnFrameBase|{triggerPlayer:Player}
    DragStart = "frameDragStart",
    --- Drag Stop
    ---@alias noteOnFrameDragStopData noteOnFrameBase|{triggerPlayer:Player}
    DragStop = "frameDragStop",
}

---@alias noteOnAIBase {triggerAI:AI}
EVENT.AI = {
    --- link unit
    ---@alias noteOnAILinkData noteOnAIBase|{triggerUnit:Unit}
    Link = "aiLink",
    --- unlink unit
    ---@alias noteOnAIUnlinkData noteOnAIBase|{triggerUnit:Unit}
    Unlink = "aiUnlink",
}
```

#### Build custom events

```lua
-- Trigger buried point
event.trigger(obj, "MY_EVENT_1", {a = 1})

-- Registration trigger[default key]
event.register(obj, "MY_EVENT_1", function(evtData){
    print(evtData.a) --1
})

-- Registration trigger[custom key]
event.register(obj, "MY_EVENT_1", "custom_key", function(evtData){
    print(evtData.a) --1
})
```
