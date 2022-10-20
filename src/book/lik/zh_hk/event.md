## Event 事件

#### 事件一覽

```lua
EVENT.Game = {
    --- 開始遊戲(此事件遊戲開始後會自動銷燬)
    ---@alias noteOnGameStartData nil
    Start = "gameStart",
    --- 進入凌晨
    ---@alias noteOnGameDawnData nil
    Dawn = "gameDawn",
    --- 進入正午
    ---@alias noteOnGameDayData nil
    Day = "gameDay",
    --- 進入正午
    ---@alias noteOnGameNoonData nil
    Noon = "gameNoon",
    --- 進入黑夜
    ---@alias noteOnGameNightData nil
    Night = "gameNight",
}

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
}

---@alias noteOnUnitBase {triggerUnit:Unit,triggerAbility:Ability,triggerItem:Item}
EVENT.Unit = {
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
    --- 暴擊目標
    ---@alias noteOnUnitCritData noteOnUnitBase|{targetUnit:Unit}
    Crit = "unitCrit",
    --- 造成傷害
    ---@alias noteOnUnitDamageData noteOnUnitBase|{targetUnit:Unit,damage:"傷害值",damageSrc:"傷害來源",damageType:"傷害類型"}
    Damage = "unitDamage",
    --- 單位出生
    ---@alias noteOnUnitBornData noteOnUnitBase
    Born = "unitBorn",
    --- 復活
    ---@alias noteOnUnitRebornData noteOnUnitBase
    Reborn = "unitReborn",
    --- 單位死亡
    ---@alias noteOnUnitDeadData noteOnUnitBase|{sourceUnit:Unit}
    Dead = "unitDead",
    --- 單位毀滅
    ---@alias noteOnUnitDestroyData noteOnUnitBase
    Destroy = "unitDestroy",
    --- 附魔反應
    ---@alias noteOnUnitEnchantData noteOnUnitBase|{sourceUnit:Unit,enchantType:"附魔類型",addition:"加成百分比"}
    Enchant = "unitEnchant",
    --- 攻擊吸血
    ---@alias noteOnUnitHPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"吸血值",percent:"吸血百分比"}
    HPSuckAttack = "unitHPSuckAttack",
    --- 技能吸血
    ---@alias noteOnUnitHPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"吸血值",percent:"吸血百分比"}
    HPSuckAbility = "unitHPSuckAbility",
    --- 候住命令
    ---@alias noteOnUnitStopData noteOnUnitBase
    Hold = "unitHold",
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
    --- 打斷[不大於0.05秒的眩暈]
    ---@alias noteOnUnitShockData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Shock = "unitShock",
    --- 分裂
    ---@alias noteOnUnitSplitData noteOnUnitBase|{targetUnit:Unit,radius:number}
    Split = "unitSplit",
    --- 停止命令
    ---@alias noteOnUnitStopData noteOnUnitBase
    Stop = "unitStop",
    --- 眩暈[大於0.05秒的眩暈]
    ---@alias noteOnUnitStunData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Stun = "unitStun",
    --- 等級改變
    ---@alias noteOnUnitLevelChangeData noteOnUnitBase|{value:"變值差額"}
    LevelChange = "unitLevelChange",
    Be = {
        --- 被攻擊
        ---@alias noteOnUnitBeAttackData noteOnUnitHurtData
        Attack = "be:unitAttack",
        --- 被迴避
        ---@alias noteOnUnitBeAvoidData noteOnUnitBase|{targetUnit:Unit}
        Avoid = "be:unitAvoid",
        --- 被破防
        ---@alias noteOnUnitBeBreakArmorData noteOnUnitBase|{sourceUnit:Unit,breakType:"無視類型"}
        BreakArmor = "be:unitBreakArmor",
        --- 被擊飛
        ---@alias noteOnUnitBeCrackFlyData noteOnUnitBase|{sourceUnit:Unit,distance:"擊退距離",height:"擊飛高度",duration:"凌空時長"}
        CrackFly = "be:unitCrackFly",
        --- 被暴擊
        ---@alias noteOnUnitBeCritData noteOnUnitBase|{sourceUnit:Unit}
        Crit = "be:unitCrit",
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
        --- 被打斷[不大於0.05秒的眩暈]
        ---@alias noteOnUnitBeShockData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Shock = "be:unitShock",
        --- 被分裂[核心型]
        ---@alias noteOnUnitBeSplitData noteOnUnitBase|{sourceUnit:Unit,radius:number}
        Split = "be:unitSplit",
        --- 被分裂[擴散型]
        ---@alias noteOnUnitBeSplitSpreadData noteOnUnitBase|{sourceUnit:Unit}
        SplitSpread = "be:unitSplitSpread",
        --- 被眩暈[大於0.05秒的眩暈]
        ---@alias noteOnUnitBeStunData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Stun = "be:unitStun",
    }
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
    --- 抵押物品（持有人售出）
    ---@alias noteOnItemPawnData noteOnItemBase
    Pawn = "itemPawn",
    --- 合成物品
    ---@alias noteOnItemSynthesisData noteOnItemBase
    Synthesis = "itemSynthesis",
    --- 拆分物品
    ---@alias noteOnItemSeparateData noteOnItemBase
    Separate = "itemSeparate",
    --- 等級改變
    ---@alias noteOnItemLevelChangeData noteOnItemBase|{value:"變值差額"}
    LevelChange = "itemLevelChange",
    --- 物品毀滅
    ---@alias noteOnItemDestroyData noteOnItemBase
    Destroy = "itemDestroy",
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
