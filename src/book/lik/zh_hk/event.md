## Event 事件

#### 事件一覽

```lua
---@alias noteOnPropBase {key:"對應屬性key", old:"舊值", new:"新值"}
---@alias noteOnPropGame noteOnPropBase|{triggerObject:Game}
---@alias noteOnPropPlayer noteOnPropBase|{triggerObject:Player}
---@alias noteOnPropUnit noteOnPropBase|{triggerObject:Unit}
---@alias noteOnPropAbility noteOnPropBase|{triggerObject:Ability}
---@alias noteOnPropItem noteOnPropBase|{triggerObject:Item}
EVENT.Prop = {
    --- 遊戲參數改變前
    BeforeChange = "propBeforeChange",
    --- 遊戲參數改變後
    Change = "propChange",
}

---@alias noteOnObjectCreateData {triggerObject:Object}
---@alias noteOnObjectDestroyData {triggerObject:Object}
---@alias noteOnAIDestroyData {triggerObject:AI} AI
---@alias noteOnAbilityDestroyData {triggerObject:Ability} 技能
---@alias noteOnCorpseDestroyData {triggerObject:Corpse} 屍體
---@alias noteOnEffectDestroyData {triggerObject:Effect} 特效
---@alias noteOnItemDestroyData {triggerObject:Item} 物品
---@alias noteOnUnitDestroyData {triggerObject:Unit} 單位
EVENT.Object = {
    --- 對象創建
    Create = "CorpseCreate",
    --- 對象毀滅
    Destroy = "CorpseDestroy",
}

EVENT.Game = {
    --- 開始遊戲(此事件遊戲開始後會自動銷燬)
    ---@alias noteOnGameStartData nil
    Start = "gameStart",
    --- 進入凌晨
    ---@alias noteOnGameDawnData nil
    Dawn = "gameDawn",
    --- 進入白天
    ---@alias noteOnGameDayData nil
    Day = "gameDay",
    --- 進入正午
    ---@alias noteOnGameNoonData nil
    Noon = "gameNoon",
    --- 進入黑夜
    ---@alias noteOnGameNightData nil
    Night = "gameNight",
}

---@alias noteOnPlayerBase {triggerPlayer:Player}
EVENT.Player = {
    --- 玩家聊天
    ---@alias noteOnPlayerChatData noteOnPlayerBase|{chatString:"聊天的內容",matchedString:"匹配命中的內容"}
    Chat = "playerChat",
    --- 玩家按下Esc
    ---@alias noteOnPlayerEscData noteOnPlayerBase
    Esc = "playerEsc",
    --- 玩家選中單位
    ---@alias noteOnPlayerSelectUnitData noteOnPlayerBase|{triggerUnit:Unit}
    SelectUnit = "playerSelectUnit",
    --- 玩家取消選擇單位
    ---@alias noteOnPlayerDeSelectUnitData noteOnPlayerBase|{triggerUnit:Unit}
    DeSelectUnit = "playerDeSelectUnit",
    --- 玩家選中物品
    ---@alias noteOnPlayerSelectItemData noteOnPlayerBase|{triggerItem:Item}
    SelectItem = "playerSelectItem",
    --- 玩家取消選擇物品
    ---@alias noteOnPlayerDeSelectItemData noteOnPlayerBase|{triggerUnit:Unit}
    DeSelectItem = "playerDeSelectItem",
    --- 玩家離開遊戲
    ---@alias noteOnPlayerQuitData noteOnPlayerBase
    Quit = "playerQuit",
    --- 倉庫欄有所變化
    ---@alias noteOnPlayerWarehouseSlotChangeData noteOnPlayerBase|{triggerSlot:WarehouseSlot}
    WarehouseSlotChange = "playerWarehouseSlotChange",
}

---@alias noteOnUnitBase {triggerUnit:Unit,triggerAbility:Ability,triggerItem:Item}
EVENT.Unit = {
    --- 準備攻擊
    ---@alias noteOnUnitBeforeAttackData noteOnUnitBase|{targetUnit:Unit}
    BeforeAttack = "unitBeforeAttack",
    --- 攻擊
    ---@alias noteOnUnitAttackData noteOnUnitDamageData
    Attack = "unitAttack",
    --- 迴避
    ---@alias noteOnUnitAvoidData noteOnUnitBase|{sourceUnit:Unit}
    Avoid = "unitAvoid",
    --- 破防
    ---@alias noteOnUnitBreakArmorData noteOnUnitBase|{targetUnit:Unit,breakType:"無視類型"}
    BreakArmor = "unitBreakArmor",
    --- 擊飛目標
    ---@alias noteOnUnitCrackFlyData noteOnUnitBase|{targetUnit:Unit,distance:"擊退距離",height:"擊飛高度",duration:"凌空時長"}
    CrackFly = "unitCrackFly",
    --- 暴擊目標（本體屬性方式）
    ---@alias noteOnUnitCritData noteOnUnitBase|{targetUnit:Unit}
    Crit = "unitCrit",
    --- 暴擊目標（調用技能方式）
    ---@alias noteOnUnitCritAbilityData noteOnUnitBase|{targetUnit:Unit}
    CritAbility = "unitCritAbility",
    --- 造成傷害
    ---@alias noteOnUnitDamageData noteOnUnitBase|{targetUnit:Unit,damage:"傷害值",damageSrc:"傷害來源",damageType:"傷害類型"}
    Damage = "unitDamage",
    --- 單位出生
    ---@alias noteOnUnitBornData noteOnUnitBase
    Born = "unitBorn",
    --- 單位死亡
    ---@alias noteOnUnitDeadData noteOnUnitBase|{sourceUnit:Unit}
    Dead = "unitDead",
    --- 單位假死（可以復活的單位被擊殺時觸發）
    ---@alias noteOnUnitFeignDeadData noteOnUnitDeadData
    FeignDead = "unitFeignDead",
    --- 復活
    ---@alias noteOnUnitRebornData noteOnUnitBase
    Reborn = "unitReborn",
    --- 候住命令
    ---@alias noteOnUnitOrderHoldData noteOnUnitBase
    OrderHold = "unitOrderHold",
    --- 停止命令
    ---@alias noteOnUnitOrderStopData noteOnUnitBase
    OrderStop = "unitOrderStop",
    --- 移動命令
    ---@alias noteOnUnitOrderMoveData noteOnUnitBase|{targetX:number,targetY:number}
    OrderMove = "unitOrderMove",
    --- 攻擊命令
    ---@alias noteOnUnitOrderAttackData noteOnUnitBase|{targetX:number,targetY:number}
    OrderAttack = "unitOrderAttack",
    --- 附魔反應
    ---@alias noteOnUnitEnchantData noteOnUnitBase|{sourceUnit:Unit,enchantType:"附魔類型",addition:"加成百分比"}
    Enchant = "unitEnchant",
    --- 攻擊吸血
    ---@alias noteOnUnitHPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"吸血值",percent:"吸血百分比"}
    HPSuckAttack = "unitHPSuckAttack",
    --- 技能吸血
    ---@alias noteOnUnitHPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"吸血值",percent:"吸血百分比"}
    HPSuckAbility = "unitHPSuckAbility",
    --- 單位受傷
    ---@alias noteOnUnitHurtData noteOnUnitBase|{sourceUnit:Unit,targetUnit:Unit,damage:"傷害值",damageSrc:"傷害來源",damageType:"傷害類型"}
    Hurt = "unitHurt",
    --- 單位受傷前
    ---@alias noteOnUnitBeforeHurtData noteOnUnitHurtData
    BeforeHurt = "unitBeforeHurt",
    --- 全抵抗[防禦]
    ---@alias noteOnUnitImmuneDefendData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneDefend = "unitImmuneDefend",
    --- 全抵抗[無敵]
    ---@alias noteOnUnitImmuneInvincibleData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneInvincible = "unitImmuneInvincible",
    --- 全抵抗[減傷]
    ---@alias noteOnUnitImmuneReductionData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneReduction = "unitImmuneReduction",
    --- 單位殺敵
    ---@alias noteOnUnitKillData noteOnUnitBase|{targetUnit:Unit}
    Kill = "unitKill",
    --- 閃電鏈擊中目標
    ---@alias noteOnUnitLightningChainData noteOnUnitBase|{targetUnit:Unit,index:"鏈索引"}
    LightningChain = "unitLightningChain",
    --- 攻擊吸魔
    ---@alias noteOnUnitMPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"吸魔值",percent:"吸魔百分比"}
    MPSuckAttack = "unitMPSuckAttack",
    --- 技能吸魔
    ---@alias noteOnUnitMPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"吸魔值",percent:"吸魔百分比"}
    MPSuckAbility = "unitMPSuckAbility",
    --- 移動開始
    ---@alias noteOnUnitMoveStartData noteOnUnitBase|{x:"目標X",y:"目標Y"}
    MoveStart = "unitMoveStart",
    --- 移動停止
    ---@alias noteOnUnitMoveStopData noteOnUnitBase
    MoveStop = "unitMoveStop",
    --- 移動轉向
    ---@alias noteOnUnitMoveTurnData noteOnUnitBase|{x:"當前X",y:"當前Y"}
    MoveTurn = "unitMoveTurn",
    --- 移動中
    ---@alias noteOnUnitMovingData noteOnUnitBase|{x:"當前X",y:"當前Y",step:"第幾步"}
    Moving = "unitMoving",
    --- 移動路由
    ---@alias noteOnUnitMoveRouteData noteOnUnitBase|{x:"當前X",y:"當前Y"}
    MoveRoute = "unitMoveRoute",
    --- 硬直
    ---@alias noteOnUnitPunishData noteOnUnitBase|{sourceUnit:Unit,percent:"硬直程度",duration:"持續時間"}
    Punish = "unitPunish",
    --- 反傷
    ---@alias noteOnUnitReboundData noteOnUnitDamageData
    Rebound = "unitRebound",
    --- 分裂
    ---@alias noteOnUnitSplitData noteOnUnitBase|{targetUnit:Unit,radius:number}
    Split = "unitSplit",
    --- 眩暈
    ---@alias noteOnUnitStunData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Stun = "unitStun",
    --- 破護盾
    ---@alias noteOnUnitBreakShieldData noteOnUnitBase|{targetUnit:Unit}
    BreakShield = "unitBreakShield",
    --- 等級改變
    ---@alias noteOnUnitLevelChangeData noteOnUnitBase|{value:"變值差額"}
    LevelChange = "unitLevelChange",
    --- 技能欄有所變化
    ---@alias noteOnUnitAbilitySlotChangeData noteOnUnitBase|{triggerSlot:AbilitySlot}
    AbilitySlotChange = "unitAbilitySlotChange",
    --- 物品欄有所變化
    ---@alias noteOnUnitItemSlotChangeData noteOnUnitBase|{triggerSlot:ItemSlot}
    ItemSlotChange = "unitItemSlotChange",
    Be = {
        --- 被準備攻擊
        ---@alias noteOnUnitBeBeforeAttackData noteOnUnitBase|{sourceUnit:Unit}
        BeforeAttack = "be:unitBeforeAttack",
        --- 被攻擊
        ---@alias noteOnUnitBeAttackData noteOnUnitHurtData
        Attack = "be:unitAttack",
        --- 被迴避
        ---@alias noteOnUnitBeAvoidData noteOnUnitBase|{targetUnit:Unit}
        Avoid = "be:unitAvoid",
        --- 被破防
        ---@alias noteOnUnitBeBreakArmorData noteOnUnitBase|{sourceUnit:Unit,breakType:"無視類型"}
        BreakArmor = "be:unitBreakArmor",
        --- 被減少護盾
        ---@alias noteOnUnitBeShieldData noteOnUnitBase|{sourceUnit:Unit,value:"減盾值"}
        Shield = "be:unitShield",
        --- 被擊飛
        ---@alias noteOnUnitBeCrackFlyData noteOnUnitBase|{sourceUnit:Unit,distance:"擊退距離",height:"擊飛高度",duration:"凌空時長"}
        CrackFly = "be:unitCrackFly",
        --- 被暴擊（本體屬性方式）
        ---@alias noteOnUnitBeCritData noteOnUnitBase|{sourceUnit:Unit}
        Crit = "be:unitCrit",
        --- 被暴擊（調用技能方式）
        ---@alias noteOnUnitCritAbilityData noteOnUnitBase|{sourceUnit:Unit}
        CritAbility = "be:unitCritAbility",
        --- 被攻擊吸血
        ---@alias noteOnUnitBeHPSuckAttackData noteOnUnitBase|{sourceUnit:Unit,value:"吸血值",percent:"吸血百分比"}
        HPSuckAttack = "be:unitHPSuckAttack",
        --- 被技能吸血
        ---@alias noteOnUnitBeHPSuckAbilityData noteOnUnitBase|{sourceUnit:Unit,value:"吸血值",percent:"吸血百分比"}
        HPSuckAbility = "be:unitHPSuckAbility",
        --- 被閃電鏈擊中
        ---@alias noteOnUnitBeLightningChainData noteOnUnitBase|{sourceUnit:Unit,index:"鏈索引"}
        LightningChain = "be:unitLightningChain",
        --- 被攻擊吸魔
        ---@alias noteOnUnitBeMPSuckAttackData noteOnUnitBase|{sourceUnit:Unit,value:"吸魔值",percent:"吸魔百分比"}
        MPSuckAttack = "be:unitMPSuckAttack",
        --- 被技能吸魔
        ---@alias noteOnUnitBeMPSuckAbilityData noteOnUnitBase|{sourceUnit:Unit,value:"吸魔值",percent:"吸魔百分比"}
        MPSuckAbility = "be:unitMPSuckAbility",
        --- 被反傷
        ---@alias noteOnUnitBeReboundData noteOnUnitHurtData
        Rebound = "be:unitRebound",
        --- 被分裂[核心型]
        ---@alias noteOnUnitBeSplitData noteOnUnitBase|{sourceUnit:Unit,radius:number}
        Split = "be:unitSplit",
        --- 被分裂[擴散型]
        ---@alias noteOnUnitBeSplitSpreadData noteOnUnitBase|{sourceUnit:Unit}
        SplitSpread = "be:unitSplitSpread",
        --- 被眩暈
        ---@alias noteOnUnitBeStunData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Stun = "be:unitStun",
        --- 被破護盾
        ---@alias noteOnUnitBeBreakShieldData noteOnUnitBase|{sourceUnit:Unit}
        BreakShield = "be:unitBreakShield",
    }
}

EVENT.Slot = {
    --- 技能欄有所變化
    ---@alias noteOnSlotAbilityData {triggerSlot: AbilitySlot,triggerUnit:Unit}
    Ability = "slotAbility",
}

---@alias noteOnAbilityBase {triggerAbility:Ability,triggerUnit:Unit}
EVENT.Ability = {
    -- 當單位獲得技能
    ---@alias noteOnAbilityGetData noteOnAbilityBase
    Get = "abilityGet",
    --- 單位失去技能
    ---@alias noteOnAbilityLoseData noteOnAbilityBase
    Lose = "abilityLose",
    --- 單位開始施放技能（施法瞬間）
    ---@alias noteOnAbilitySpellData noteOnAbilityBase|{triggerItem:Item,targetUnit:Unit,targetX:number,targetY:number,targetZ:number}
    Spell = "abilitySpell",
    --- 技能生效
    ---@alias noteOnAbilityEffectiveData noteOnAbilityBase|{triggerItem:Item,targetUnit:Unit,targetX:number,targetY:number,targetZ:number}
    Effective = "abilityEffective",
    --- 技能持續施法每週期時（動作時）
    ---@alias noteOnAbilityCastingData noteOnAbilitySpellData
    Casting = "abilityCasting",
    --- 施放技能結束（只有持續施法有結束狀態）
    ---@alias noteOnAbilityStopData noteOnAbilityBase
    Stop = "abilityStop",
    --- 停止施放技能（吟唱、持續施法有停止狀態）
    ---@alias noteOnAbilityOverData noteOnAbilityBase
    Over = "abilityOver",
    --- 等級改變
    ---@alias noteOnAbilityLevelChangeData noteOnAbilityBase|{value:"變值差額"}
    LevelChange = "abilityLevelChange",
}

---@alias noteOnItemBase {triggerItem:Item,triggerUnit:Unit}
EVENT.Item = {
    --- 撿取物品
    ---@alias noteOnItemPickData noteOnItemBase
    Pick = "itemPick",
    --- 獲得物品
    ---@alias noteOnItemGetData noteOnItemBase
    Get = "itemGet",
    --- 失去物品
    ---@alias noteOnItemLoseData noteOnItemBase
    Lose = "itemLose",
    --- 使用物品
    ---@alias noteOnItemUsedData noteOnItemBase|noteOnAbilityEffectiveData
    Used = "itemUsed",
    --- 丟棄物品
    ---@alias noteOnItemDropData noteOnItemBase
    Drop = "itemDrop",
    --- 傳遞物品
    ---@alias noteOnItemDeliverData noteOnItemBase|{targetUnit:Unit}
    Deliver = "itemDeliver",
    --- 抵押物品（持有人售出）
    ---@alias noteOnItemPawnData noteOnItemBase
    Pawn = "itemPawn",
    --- 等級改變
    ---@alias noteOnItemLevelChangeData noteOnItemBase|{value:"變值差額"}
    LevelChange = "itemLevelChange",
}

---@alias noteOnStoreBase {triggerStore:Store}
EVENT.Store = {
    --- 賣出貨品
    ---@alias noteOnStoreSellData noteOnStoreBase|{qty:"賣出數量"}
    Sell = "storeSell",
}

---@alias noteOnRectBase {triggerRect:Rect}
EVENT.Rect = {
    --- 進入區域
    ---@alias noteOnRectEnterData noteOnRectBase
    Enter = "rectEnter",
    --- 離開區域
    ---@alias noteOnRectLeaveData noteOnRectBase
    Leave = "rectLeave",
}

---@alias noteOnAuraBase {triggerAura:Aura}
EVENT.Aura = {
    --- 進入領域
    ---@alias noteOnAuraEnterData noteOnAuraBase|{triggerUnit:Unit}
    Enter = "auraEnter",
    --- 離開領域
    ---@alias noteOnAuraLeaveData noteOnAuraBase|{triggerUnit:Unit}
    Leave = "auraLeave",
}

---@alias noteOnDestructableBase {triggerDestructable:Destructable|number}
EVENT.Destructable = {
    --- 可破壞物死亡
    ---@alias noteOnDestructableDeadData noteOnDestructableBase|{name:"名稱",x:"座標X",y:"座標Y"}
    Dead = "destructableDead",
}

---@alias noteOnFrameBase {triggerFrame:Frame}
EVENT.Frame = {
    --- 顯示
    ---@alias noteOnFrameShowData noteOnFrameBase
    Show = "frameShow",
    --- 隱藏
    ---@alias noteOnFrameHideData noteOnFrameBase
    Hide = "frameHide",
    --- 左鍵點擊
    ---@alias noteOnFrameLeftClickData noteOnFrameBase|{triggerPlayer:Player}
    LeftClick = "frameLeftClick",
    --- 左鍵釋放
    ---@alias noteOnFrameLeftReleaseData noteOnFrameBase|{triggerPlayer:Player,status:"鼠標是否還在Frame內"}
    LeftRelease = "frameLeftRelease",
    --- 右鍵點擊
    ---@alias noteOnFrameRightClickData noteOnFrameBase|{triggerPlayer:Player}
    RightClick = "frameRightClick",
    --- 右鍵釋放
    ---@alias noteOnFrameRightReleaseData noteOnFrameBase|{triggerPlayer:Player,status:"鼠標是否還在Frame內"}
    RightRelease = "frameRightRelease",
    --- 在上移動
    ---@alias noteOnFrameMoveData noteOnFrameBase|{triggerPlayer:Player}
    Move = "frameMove",
    --- 移入
    ---@alias noteOnFrameEnterData noteOnFrameBase|{triggerPlayer:Player}
    Enter = "frameEnter",
    --- 移出
    ---@alias noteOnFrameLeaveData noteOnFrameBase|{triggerPlayer:Player}
    Leave = "frameLeave",
    --- 滾動
    ---@alias noteOnFrameWheelData noteOnFrameBase|{triggerPlayer:Player,delta:"滾動數值"}
    Wheel = "frameWheel",
}

---@alias noteOnAIBase {triggerAI:AI}
EVENT.AI = {
    --- 關連單位
    ---@alias noteOnAILinkData noteOnAIBase|{triggerUnit:Unit}
    Link = "aiLink",
    --- 斷連單位
    ---@alias noteOnAIUnlinkData noteOnAIBase|{triggerUnit:Unit}
    Unlink = "aiUnlink",
}
```

#### 自定義事件的構建

```lua
-- 觸發埋點
event.trigger(obj, "MY_EVENT_1", {a = 1})

-- 註冊觸發[default key]
event.register(obj, "MY_EVENT_1", function(evtData){
    print(evtData.a) --1
})

-- 註冊觸發[custom key]
event.register(obj, "MY_EVENT_1", "custom_key", function(evtData){
    print(evtData.a) --1
})
```
