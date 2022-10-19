## Event

#### All events

```lua
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
}

---@alias noteOnUnitBase {triggerUnit:Unit,triggerAbility:Ability,triggerItem:Item}
EVENT.Unit = {
    --- Attack
    ---@alias noteOnUnitAttackData noteOnUnitDamageData
    Attack = "unitAttack",
    --- Avoid
    ---@alias noteOnUnitAvoidData noteOnUnitBase|{sourceUnit:Unit}
    Avoid = "unitAvoid",
    --- Armor piercing
    ---@alias noteOnUnitBreakArmorData noteOnUnitBase|{targetUnit:Unit,breakType:"type"}
    BreakArmor = "unitBreakArmor",
    --- Hit the target
    ---@alias noteOnUnitCrackFlyData noteOnUnitBase|{targetUnit:Unit,distance:"value",height:"value",duration:"time"}
    CrackFly = "unitCrackFly",
    --- Critical hit target
    ---@alias noteOnUnitCritData noteOnUnitBase|{targetUnit:Unit}
    Crit = "unitCrit",
    --- Cause damage
    ---@alias noteOnUnitDamageData noteOnUnitBase|{targetUnit:Unit,damage:"data",damageSrc:"source",damageType:"type"}
    Damage = "unitDamage",
    --- Unit birth
    ---@alias noteOnUnitBornData noteOnUnitBase
    Born = "unitBorn",
    --- Unit reborn
    ---@alias noteOnUnitRebornData noteOnUnitBase
    Reborn = "unitReborn",
    --- Unit objects die
    ---@alias noteOnUnitDeadData noteOnUnitBase|{sourceUnit:Unit}
    Dead = "unitDead",
    --- Unit objects destroy
    ---@alias noteOnUnitDestroyData noteOnUnitBase
    Destroy = "unitDestroy",
    --- Enchant
    ---@alias noteOnUnitEnchantData noteOnUnitBase|{sourceUnit:Unit,enchantType:"type",addition:"%"}
    Enchant = "unitEnchant",
    --- Attack blood sucking
    ---@alias noteOnUnitHPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"value",percent:"%"}
    HPSuckAttack = "unitHPSuckAttack",
    --- Skill Vampire
    ---@alias noteOnUnitHPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"value",percent:"%"}
    HPSuckAbility = "unitHPSuckAbility",
    --- Hold Command
    ---@alias noteOnUnitStopData noteOnUnitBase
    Hold = "unitHold",
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
    --- Shock[Vertigo lasting no more than 0.05 seconds]
    ---@alias noteOnUnitShockData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Shock = "unitShock",
    --- Split
    ---@alias noteOnUnitSplitData noteOnUnitBase|{targetUnit:Unit,radius:number}
    Split = "unitSplit",
    --- Stop Command
    ---@alias noteOnUnitStopData noteOnUnitBase
    Stop = "unitStop",
    --- Stun[Vertigo lasting more than 0.05 seconds]
    ---@alias noteOnUnitStunData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Stun = "unitStun",
    --- Unit level Change
    ---@alias noteOnUnitLevelChangeData noteOnUnitBase|{value:"Variation difference"}
    LevelChange = "unitLevelChange",
    Be = {
        --- Be attacked
        ---@alias noteOnUnitBeAttackData noteOnUnitHurtData
        Attack = "be:unitAttack",
        --- Be evaded
        ---@alias noteOnUnitBeAvoidData noteOnUnitBase|{targetUnit:Unit}
        Avoid = "be:unitAvoid",
        --- Be broken
        ---@alias noteOnUnitBeBreakArmorData noteOnUnitBase|{sourceUnit:Unit,breakType:"type"}
        BreakArmor = "be:unitBreakArmor",
        --- Be crack fly
        ---@alias noteOnUnitBeCrackFlyData noteOnUnitBase|{sourceUnit:Unit,distance:number,height:number,duration:number}
        CrackFly = "be:unitCrackFly",
        --- Be critically hit
        ---@alias noteOnUnitBeCritData noteOnUnitBase|{sourceUnit:Unit}
        Crit = "be:unitCrit",
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
        --- Be interrupted[Vertigo lasting no more than 0.05 seconds]
        ---@alias noteOnUnitBeShockData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Shock = "be:unitShock",
        --- Be divided[Core type]
        ---@alias noteOnUnitBeSplitData noteOnUnitBase|{sourceUnit:Unit,radius:number}
        Split = "be:unitSplit",
        --- Be divided[Diffusive type]
        ---@alias noteOnUnitBeSplitSpreadData noteOnUnitBase|{sourceUnit:Unit}
        SplitSpread = "be:unitSplitSpread",
        --- Be Stun[Vertigo lasting more than 0.05 seconds]
        ---@alias noteOnUnitBeStunData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Stun = "be:unitStun",
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
    ---@alias noteOnAbilityEffectiveData noteOnAbilityBase|{triggerItem:Item,targetUnit:Unit,targetX:number,targetY:number,targetZ:number}
    Effective = "abilityEffective",
    --- End of casting skill (only continuous casting can end)
    ---@alias noteOnAbilityStopData noteOnAbilityBase
    Stop = "abilityStop",
    --- Stop casting skills (chanting and continuous casting have a stop state)
    ---@alias noteOnAbilityOverData noteOnAbilityBase
    Over = "abilityOver",
    --- Level change
    ---@alias noteOnAbilityLevelChangeData noteOnAbilityBase|{value:"Variation difference"}
    LevelChange = "abilityLevelChange",
}

---@alias noteOnItemBase {triggerItem:Item,triggerUnit:Unit}
EVENT.Item = {
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
    ---@alias noteOnItemDropData noteOnItemBase
    Drop = "itemDrop",
    --- Pawn(Sold by the holder)
    ---@alias noteOnItemPawnData noteOnItemBase
    Pawn = "itemPawn",
    --- Synthesis items
    ---@alias noteOnItemSynthesisData noteOnItemBase
    Synthesis = "itemSynthesis",
    --- Separate items
    ---@alias noteOnItemSeparateData noteOnItemBase
    Separate = "itemSeparate",
    --- Level change
    ---@alias noteOnItemLevelChangeData noteOnItemBase|{value:"Variation difference"}
    LevelChange = "itemLevelChange",
    --- Destruction of goods
    ---@alias noteOnItemDestroyData noteOnItemBase
    Destroy = "itemDestroy",
}

---@alias noteOnStoreBase {triggerStore:Store}
EVENT.Store = {
    --- Goods sold
    ---@alias noteOnStoreSellData noteOnStoreBase|{qty:"Quantity sold"}
    Sell = "storeSell",
}

---@alias noteOnRectBase {triggerRect:Rect}
EVENT.Rect = {
    --- Entry area
    ---@alias noteOnRectEnterData noteOnRectBase
    Enter = "rectEnter",
    --- Leave the area
    ---@alias noteOnRectLeaveData noteOnRectBase
    Leave = "rectLeave",
}

---@alias noteOnDestructableBase {triggerDestructable:Destructable|number}
EVENT.Destructable = {
    --- Destructible objects die
    ---@alias noteOnDestructableDeadData noteOnDestructableBase|{name:"name",x:"x",y:"y"}
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
