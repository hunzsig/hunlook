## Event 事件

#### 事件一览

```lua
EVENT.Game = {
    --- 开始游戏(此事件游戏开始后会自动销毁)
    ---@alias noteOnGameStartData nil
    Start = "gameStart",
    --- 进入凌晨
    ---@alias noteOnGameDawnData nil
    Dawn = "gameDawn",
    --- 进入正午
    ---@alias noteOnGameDayData nil
    Day = "gameDay",
    --- 进入正午
    ---@alias noteOnGameNoonData nil
    Noon = "gameNoon",
    --- 进入黑夜
    ---@alias noteOnGameNightData nil
    Night = "gameNight",
}

---@alias noteOnPropBase {key:"对应属性key", old:"旧值", new:"新值"}
---@alias noteOnPropGame noteOnPropBase|{triggerObject:Game}
---@alias noteOnPropPlayer noteOnPropBase|{triggerObject:Player}
---@alias noteOnPropUnit noteOnPropBase|{triggerObject:Unit}
---@alias noteOnPropAbility noteOnPropBase|{triggerObject:Ability}
---@alias noteOnPropItem noteOnPropBase|{triggerObject:Item}
EVENT.Prop = {
    --- 游戏参数改变前
    BeforeChange = "propBeforeChange",
    --- 游戏参数改变后
    Change = "propChange",
}

---@alias noteOnPlayerBase {triggerPlayer:Player}
EVENT.Player = {
    --- 玩家聊天
    ---@alias noteOnPlayerChatData noteOnPlayerBase|{chatString:"聊天的内容",matchedString:"匹配命中的内容"}
    Chat = "playerChat",
    --- 玩家按下Esc
    ---@alias noteOnPlayerEscData noteOnPlayerBase
    Esc = "playerEsc",
    --- 玩家选中单位
    ---@alias noteOnPlayerSelectUnitData noteOnPlayerBase|{triggerUnit:Unit}
    SelectUnit = "playerSelectUnit",
    --- 玩家取消选择单位
    ---@alias noteOnPlayerDeSelectUnitData noteOnPlayerBase|{triggerUnit:Unit}
    DeSelectUnit = "playerDeSelectUnit",
    --- 玩家选中物品
    ---@alias noteOnPlayerSelectItemData noteOnPlayerBase|{triggerItem:Item}
    SelectItem = "playerSelectItem",
    --- 玩家取消选择物品
    ---@alias noteOnPlayerDeSelectItemData noteOnPlayerBase|{triggerUnit:Unit}
    DeSelectItem = "playerDeSelectItem",
    --- 玩家离开游戏
    ---@alias noteOnPlayerQuitData noteOnPlayerBase
    Quit = "playerQuit",
}

---@alias noteOnUnitBase {triggerUnit:Unit,triggerAbility:Ability,triggerItem:Item}
EVENT.Unit = {
    --- 攻击
    ---@alias noteOnUnitAttackData noteOnUnitDamageData
    Attack = "unitAttack",
    --- 回避
    ---@alias noteOnUnitAvoidData noteOnUnitBase|{sourceUnit:Unit}
    Avoid = "unitAvoid",
    --- 破防
    ---@alias noteOnUnitBreakArmorData noteOnUnitBase|{targetUnit:Unit,breakType:"无视类型"}
    BreakArmor = "unitBreakArmor",
    --- 击飞目标
    ---@alias noteOnUnitCrackFlyData noteOnUnitBase|{targetUnit:Unit,distance:"击退距离",height:"击飞高度",duration:"凌空时长"}
    CrackFly = "unitCrackFly",
    --- 暴击目标
    ---@alias noteOnUnitCritData noteOnUnitBase|{targetUnit:Unit}
    Crit = "unitCrit",
    --- 造成伤害
    ---@alias noteOnUnitDamageData noteOnUnitBase|{targetUnit:Unit,damage:"伤害值",damageSrc:"伤害来源",damageType:"伤害类型"}
    Damage = "unitDamage",
    --- 单位出生
    ---@alias noteOnUnitBornData noteOnUnitBase
    Born = "unitBorn",
    --- 复活
    ---@alias noteOnUnitRebornData noteOnUnitBase
    Reborn = "unitReborn",
    --- 单位死亡
    ---@alias noteOnUnitDeadData noteOnUnitBase|{sourceUnit:Unit}
    Dead = "unitDead",
    --- 单位毁灭
    ---@alias noteOnUnitDestroyData noteOnUnitBase
    Destroy = "unitDestroy",
    --- 附魔反应
    ---@alias noteOnUnitEnchantData noteOnUnitBase|{sourceUnit:Unit,enchantType:"附魔类型",addition:"加成百分比"}
    Enchant = "unitEnchant",
    --- 攻击吸血
    ---@alias noteOnUnitHPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"吸血值",percent:"吸血百分比"}
    HPSuckAttack = "unitHPSuckAttack",
    --- 技能吸血
    ---@alias noteOnUnitHPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"吸血值",percent:"吸血百分比"}
    HPSuckAbility = "unitHPSuckAbility",
    --- 候住命令
    ---@alias noteOnUnitStopData noteOnUnitBase
    Hold = "unitHold",
    --- 单位受伤
    ---@alias noteOnUnitHurtData noteOnUnitBase|{sourceUnit:Unit,targetUnit:Unit,damage:"伤害值",damageSrc:"伤害来源",damageType:"伤害类型"}
    Hurt = "unitHurt",
    --- 单位受伤前
    ---@alias noteOnUnitBeforeHurtData noteOnUnitHurtData
    BeforeHurt = "unitBeforeHurt",
    --- 全抵抗[防御]
    ---@alias noteOnUnitImmuneDefendData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneDefend = "unitImmuneDefend",
    --- 全抵抗[无敌]
    ---@alias noteOnUnitImmuneInvincibleData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneInvincible = "unitImmuneInvincible",
    --- 全抵抗[减伤]
    ---@alias noteOnUnitImmuneReductionData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneReduction = "unitImmuneReduction",
    --- 单位杀敌
    ---@alias noteOnUnitKillData noteOnUnitBase|{targetUnit:Unit}
    Kill = "unitKill",
    --- 闪电链击中目标
    ---@alias noteOnUnitLightningChainData noteOnUnitBase|{targetUnit:Unit,index:"链索引"}
    LightningChain = "unitLightningChain",
    --- 攻击吸魔
    ---@alias noteOnUnitMPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"吸魔值",percent:"吸魔百分比"}
    MPSuckAttack = "unitMPSuckAttack",
    --- 技能吸魔
    ---@alias noteOnUnitMPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"吸魔值",percent:"吸魔百分比"}
    MPSuckAbility = "unitMPSuckAbility",
    --- 移动开始
    ---@alias noteOnUnitMoveStartData noteOnUnitBase|{x:"目标X",y:"目标Y"}
    MoveStart = "unitMoveStart",
    --- 移动停止
    ---@alias noteOnUnitMoveStopData noteOnUnitBase
    MoveStop = "unitMoveStop",
    --- 移动转向
    ---@alias noteOnUnitMoveTurnData noteOnUnitBase|{x:"当前X",y:"当前Y"}
    MoveTurn = "unitMoveTurn",
    --- 移动中
    ---@alias noteOnUnitMovingData noteOnUnitBase|{x:"当前X",y:"当前Y",step:"第几步"}
    Moving = "unitMoving",
    --- 移动路由
    ---@alias noteOnUnitMoveRouteData noteOnUnitBase|{x:"当前X",y:"当前Y"}
    MoveRoute = "unitMoveRoute",
    --- 硬直
    ---@alias noteOnUnitPunishData noteOnUnitBase|{sourceUnit:Unit,percent:"硬直程度",duration:"持续时间"}
    Punish = "unitPunish",
    --- 反伤
    ---@alias noteOnUnitReboundData noteOnUnitDamageData
    Rebound = "unitRebound",
    --- 打断[不大于0.05秒的眩晕]
    ---@alias noteOnUnitShockData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Shock = "unitShock",
    --- 分裂
    ---@alias noteOnUnitSplitData noteOnUnitBase|{targetUnit:Unit,radius:number}
    Split = "unitSplit",
    --- 停止命令
    ---@alias noteOnUnitStopData noteOnUnitBase
    Stop = "unitStop",
    --- 眩晕[大于0.05秒的眩晕]
    ---@alias noteOnUnitStunData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Stun = "unitStun",
    --- 等级改变
    ---@alias noteOnUnitLevelChangeData noteOnUnitBase|{value:"变值差额"}
    LevelChange = "unitLevelChange",
    Be = {
        --- 被攻击
        ---@alias noteOnUnitBeAttackData noteOnUnitHurtData
        Attack = "be:unitAttack",
        --- 被回避
        ---@alias noteOnUnitBeAvoidData noteOnUnitBase|{targetUnit:Unit}
        Avoid = "be:unitAvoid",
        --- 被破防
        ---@alias noteOnUnitBeBreakArmorData noteOnUnitBase|{sourceUnit:Unit,breakType:"无视类型"}
        BreakArmor = "be:unitBreakArmor",
        --- 被击飞
        ---@alias noteOnUnitBeCrackFlyData noteOnUnitBase|{sourceUnit:Unit,distance:"击退距离",height:"击飞高度",duration:"凌空时长"}
        CrackFly = "be:unitCrackFly",
        --- 被暴击
        ---@alias noteOnUnitBeCritData noteOnUnitBase|{sourceUnit:Unit}
        Crit = "be:unitCrit",
        --- 被攻击吸血
        ---@alias noteOnUnitBeHPSuckAttackData noteOnUnitBase|{sourceUnit:Unit,value:"吸血值",percent:"吸血百分比"}
        HPSuckAttack = "be:unitHPSuckAttack",
        --- 被技能吸血
        ---@alias noteOnUnitBeHPSuckAbilityData noteOnUnitBase|{sourceUnit:Unit,value:"吸血值",percent:"吸血百分比"}
        HPSuckAbility = "be:unitHPSuckAbility",
        --- 被闪电链击中
        ---@alias noteOnUnitBeLightningChainData noteOnUnitBase|{sourceUnit:Unit,index:"链索引"}
        LightningChain = "be:unitLightningChain",
        --- 被攻击吸魔
        ---@alias noteOnUnitBeMPSuckAttackData noteOnUnitBase|{sourceUnit:Unit,value:"吸魔值",percent:"吸魔百分比"}
        MPSuckAttack = "be:unitMPSuckAttack",
        --- 被技能吸魔
        ---@alias noteOnUnitBeMPSuckAbilityData noteOnUnitBase|{sourceUnit:Unit,value:"吸魔值",percent:"吸魔百分比"}
        MPSuckAbility = "be:unitMPSuckAbility",
        --- 被反伤
        ---@alias noteOnUnitBeReboundData noteOnUnitHurtData
        Rebound = "be:unitRebound",
        --- 被打断[不大于0.05秒的眩晕]
        ---@alias noteOnUnitBeShockData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Shock = "be:unitShock",
        --- 被分裂[核心型]
        ---@alias noteOnUnitBeSplitData noteOnUnitBase|{sourceUnit:Unit,radius:number}
        Split = "be:unitSplit",
        --- 被分裂[扩散型]
        ---@alias noteOnUnitBeSplitSpreadData noteOnUnitBase|{sourceUnit:Unit}
        SplitSpread = "be:unitSplitSpread",
        --- 被眩晕[大于0.05秒的眩晕]
        ---@alias noteOnUnitBeStunData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Stun = "be:unitStun",
    }
}

---@alias noteOnAbilityBase {triggerAbility:Ability,triggerUnit:Unit}
EVENT.Ability = {
    -- 当单位获得技能
    ---@alias noteOnAbilityGetData noteOnAbilityBase
    Get = "abilityGet",
    --- 单位失去技能
    ---@alias noteOnAbilityLoseData noteOnAbilityBase
    Lose = "abilityLose",
    --- 单位开始施放技能（施法瞬间）
    ---@alias noteOnAbilitySpellData noteOnAbilityBase|{triggerItem:Item,targetUnit:Unit,targetX:number,targetY:number,targetZ:number}
    Spell = "abilitySpell",
    --- 技能生效
    ---@alias noteOnAbilityEffectiveData noteOnAbilityBase|{triggerItem:Item,targetUnit:Unit,targetX:number,targetY:number,targetZ:number}
    Effective = "abilityEffective",
    --- 施放技能结束（只有持续施法有结束状态）
    ---@alias noteOnAbilityStopData noteOnAbilityBase
    Stop = "abilityStop",
    --- 停止施放技能（吟唱、持续施法有停止状态）
    ---@alias noteOnAbilityOverData noteOnAbilityBase
    Over = "abilityOver",
    --- 等级改变
    ---@alias noteOnAbilityLevelChangeData noteOnAbilityBase|{value:"变值差额"}
    LevelChange = "abilityLevelChange",
}

---@alias noteOnItemBase {triggerItem:Item,triggerUnit:Unit}
EVENT.Item = {
    --- 获得物品
    ---@alias noteOnItemGetData noteOnItemBase
    Get = "itemGet",
    --- 失去物品
    ---@alias noteOnItemLoseData noteOnItemBase
    Lose = "itemLose",
    --- 使用物品
    ---@alias noteOnItemUsedData noteOnItemBase|noteOnAbilityEffectiveData
    Used = "itemUsed",
    --- 丢弃物品
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
    --- 等级改变
    ---@alias noteOnItemLevelChangeData noteOnItemBase|{value:"变值差额"}
    LevelChange = "itemLevelChange",
    --- 物品毁灭
    ---@alias noteOnItemDestroyData noteOnItemBase
    Destroy = "itemDestroy",
}

---@alias noteOnStoreBase {triggerStore:Store}
EVENT.Store = {
    --- 卖出货品
    ---@alias noteOnStoreSellData noteOnStoreBase|{qty:"卖出数量"}
    Sell = "storeSell",
}

---@alias noteOnRectBase {triggerRect:Rect}
EVENT.Rect = {
    --- 进入区域
    ---@alias noteOnRectEnterData noteOnRectBase
    Enter = "rectEnter",
    --- 离开区域
    ---@alias noteOnRectLeaveData noteOnRectBase
    Leave = "rectLeave",
}

---@alias noteOnDestructableBase {triggerDestructable:Destructable|number}
EVENT.Destructable = {
    --- 可破坏物死亡
    ---@alias noteOnDestructableDeadData noteOnDestructableBase|{name:"名称",x:"坐标X",y:"坐标Y"}
    Dead = "destructableDead",
}

---@alias noteOnFrameBase {triggerFrame:Frame}
EVENT.Frame = {
    --- 显示
    ---@alias noteOnFrameShowData noteOnFrameBase
    Show = "frameShow",
    --- 隐藏
    ---@alias noteOnFrameHideData noteOnFrameBase
    Hide = "frameHide",
    --- 左键点击
    ---@alias noteOnFrameLeftClickData noteOnFrameBase|{triggerPlayer:Player}
    LeftClick = "frameLeftClick",
    --- 左键释放
    ---@alias noteOnFrameLeftReleaseData noteOnFrameBase|{triggerPlayer:Player,status:"鼠标是否还在Frame内"}
    LeftRelease = "frameLeftRelease",
    --- 右键点击
    ---@alias noteOnFrameRightClickData noteOnFrameBase|{triggerPlayer:Player}
    RightClick = "frameRightClick",
    --- 右键释放
    ---@alias noteOnFrameRightReleaseData noteOnFrameBase|{triggerPlayer:Player,status:"鼠标是否还在Frame内"}
    RightRelease = "frameRightRelease",
    --- 在上移动
    ---@alias noteOnFrameMoveData noteOnFrameBase|{triggerPlayer:Player}
    Move = "frameMove",
    --- 移入
    ---@alias noteOnFrameEnterData noteOnFrameBase|{triggerPlayer:Player}
    Enter = "frameEnter",
    --- 移出
    ---@alias noteOnFrameLeaveData noteOnFrameBase|{triggerPlayer:Player}
    Leave = "frameLeave",
    --- 滚动
    ---@alias noteOnFrameWheelData noteOnFrameBase|{triggerPlayer:Player,delta:"滚动数值"}
    Wheel = "frameWheel",
}
```

#### 自定义事件的构建

```lua
-- 触发埋点
event.trigger(obj, "MY_EVENT_1", {a = 1})

-- 注册触发[default key]
event.register(obj, "MY_EVENT_1", function(evtData){
    print(evtData.a) --1
})

-- 注册触发[custom key]
event.register(obj, "MY_EVENT_1", "custom_key", function(evtData){
    print(evtData.a) --1
})
```
