## Event 事件

#### イベント一覧

```lua
---@alias noteOnPropBase {key:"対応属性key", old:"古い値", new:"新しい値"}
---@alias noteOnPropGame noteOnPropBase|{triggerObject:Game}
---@alias noteOnPropPlayer noteOnPropBase|{triggerObject:Player}
---@alias noteOnPropUnit noteOnPropBase|{triggerObject:Unit}
---@alias noteOnPropAbility noteOnPropBase|{triggerObject:Ability}
---@alias noteOnPropItem noteOnPropBase|{triggerObject:Item}
EVENT.Prop = {
    --- ゲームパラメータ変更前
    BeforeChange = "propBeforeChange",
    --- ゲームパラメータ変更後
    Change = "propChange",
}

---@alias noteOnObjectConstructData {triggerObject:Object}
---@alias noteOnObjectDestructData {triggerObject:Object}
---@alias noteOnAIDestructData {triggerObject:AI} AI
---@alias noteOnAbilityDestructData {triggerObject:Ability} スキル
---@alias noteOnEffectDestructData {triggerObject:Effect} 効果
---@alias noteOnItemDestructData {triggerObject:Item} アイテム
---@alias noteOnUnitDestructData {triggerObject:Unit} 単位
---@alias noteOnTimerDestructData {triggerObject:Timer} タイマ
EVENT.Object = {
    --- オブジェクト作成
    Construct = "ObjectConstruct",
    --- オブジェクト破壊
    Destruct = "ObjectDestruct",
}

EVENT.Game = {
    --- ゲームを開始（このイベントはゲームが開始されると自動的に破棄されます）
    ---@alias noteOnGameStartData nil
    Start = "gameStart",
    --- 夜明けに入る
    ---@alias noteOnGameDawnData nil
    Dawn = "gameDawn",
    --- 昼に入る
    ---@alias noteOnGameDayData nil
    Day = "gameDay",
    --- 正午に入る
    ---@alias noteOnGameNoonData nil
    Noon = "gameNoon",
    --- 夜になる
    ---@alias noteOnGameNightData nil
    Night = "gameNight",
}

---@alias noteOnPlayerBase {triggerPlayer:Player}
EVENT.Player = {
    --- プレイヤーチャット
    ---@alias noteOnPlayerChatData noteOnPlayerBase|{chatString:"チャットの内容",matchedString:"ヒットしたコンテンツと一致"}
    Chat = "playerChat",
    --- プレイヤーがEscを押す
    ---@alias noteOnPlayerEscData noteOnPlayerBase
    Esc = "playerEsc",
    --- プレイヤー選択単位
    ---@alias noteOnPlayerSelectUnitData noteOnPlayerBase|{triggerUnit:Unit}
    SelectUnit = "playerSelectUnit",
    --- プレイヤーが単位を選択解除する
    ---@alias noteOnPlayerDeSelectUnitData noteOnPlayerBase|{triggerUnit:Unit}
    DeSelectUnit = "playerDeSelectUnit",
    --- プレイヤーが選択したアイテム
    ---@alias noteOnPlayerSelectItemData noteOnPlayerBase|{triggerItem:Item}
    SelectItem = "playerSelectItem",
    --- プレイヤーがアイテムの選択を解除する
    ---@alias noteOnPlayerDeSelectItemData noteOnPlayerBase|{triggerUnit:Unit}
    DeSelectItem = "playerDeSelectItem",
    --- プレイヤーがゲームから離れる
    ---@alias noteOnPlayerQuitData noteOnPlayerBase
    Quit = "playerQuit",
    --- 倉庫バーが変化
    ---@alias noteOnPlayerWarehouseSlotChangeData noteOnPlayerBase|{triggerSlot:WarehouseSlot}
    WarehouseSlotChange = "playerWarehouseSlotChange",
}

---@alias noteOnUnitBase {triggerUnit:Unit,triggerAbility:Ability,triggerItem:Item}
EVENT.Unit = {
    --- 攻撃の準備
    ---@alias noteOnUnitBeforeAttackData noteOnUnitBase|{targetUnit:Unit}
    BeforeAttack = "unitBeforeAttack",
    --- 攻撃する
    ---@alias noteOnUnitAttackData noteOnUnitDamageData
    Attack = "unitAttack",
    --- 回避する
    ---@alias noteOnUnitAvoidData noteOnUnitBase|{sourceUnit:Unit}
    Avoid = "unitAvoid",
    --- ぼうぎょを破る
    ---@alias noteOnUnitBreakArmorData noteOnUnitBase|{targetUnit:Unit,breakType:"無視タイプ"}
    BreakArmor = "unitBreakArmor",
    --- シールド減少
    ---@alias noteOnUnitShieldData noteOnUnitBase|{targetUnit:Unit,value:"ブレークシールド値"}
    Shield = "unitShield",
    --- ターゲットを飛ばす
    ---@alias noteOnUnitCrackFlyData noteOnUnitBase|{targetUnit:Unit,distance:"撃退距離",height:"しょうげきこうど",duration:"凌空時間長"}
    CrackFly = "unitCrackFly",
    --- 致命的ヒットターゲット（自本属性方式）
    ---@alias noteOnUnitCritData noteOnUnitBase|{targetUnit:Unit}
    Crit = "unitCrit",
    --- 致命的ヒットターゲット（スキル呼び出し）
    ---@alias noteOnUnitCritAbilityData noteOnUnitBase|{targetUnit:Unit}
    CritAbility = "unitCritAbility",
    --- ダメージを与える
    ---@alias noteOnUnitDamageData noteOnUnitBase|{targetUnit:Unit,damage:"ダメージ値",damageSrc:"ダメージ源",damageType:"ダメージタイプ"}
    Damage = "unitDamage",
    --- 単位出産
    ---@alias noteOnUnitBornData noteOnUnitBase
    Born = "unitBorn",
    --- 単位死亡
    ---@alias noteOnUnitDeadData noteOnUnitBase|{sourceUnit:Unit}
    Dead = "unitDead",
    --- 単位仮死（復活可能な単位が撃ち殺されたときにトリガーされる）
    ---@alias noteOnUnitFeignDeadData noteOnUnitDeadData
    FeignDead = "unitFeignDead",
    --- 復活
    ---@alias noteOnUnitRebornData noteOnUnitBase
    Reborn = "unitReborn",
    ---命令を待つ
    ---@alias noteOnUnitOrderHoldData noteOnUnitBase
    OrderHold = "unitOrderHold",
    ---停止コマンド
    ---@alias noteOnUnitOrderStopData noteOnUnitBase
    OrderStop = "unitOrderStop",
    ---移動コマンド
    ---@alias noteOnUnitOrderMoveData noteOnUnitBase|{targetX:number,targetY:number}
    OrderMove = "unitOrderMove",
    ---攻撃コマンド
    ---@alias noteOnUnitOrderAttackData noteOnUnitBase|{targetX:number,targetY:number}
    OrderAttack = "unitOrderAttack",
    --- 魔付き反応
    ---@alias noteOnUnitEnchantData noteOnUnitBase|{sourceUnit:Unit,enchantType:"魔付きタイプ",percent:"加算率"}
    Enchant = "unitEnchant",
    --- 攻撃吸血
    ---@alias noteOnUnitHPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"吸血値",percent:"吸血率"}
    HPSuckAttack = "unitHPSuckAttack",
    --- わざ吸血
    ---@alias noteOnUnitHPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"吸血値",percent:"吸血率"}
    HPSuckAbility = "unitHPSuckAbility",
    --- 単位負傷
    ---@alias noteOnUnitHurtData noteOnUnitBase|{sourceUnit:Unit,targetUnit:Unit,damage:"ダメージ値",damageSrc:"ダメージ源",damageType:"ダメージタイプ"}
    Hurt = "unitHurt",
    --- 単位負傷前
    ---@alias noteOnUnitBeforeHurtData noteOnUnitHurtData
    BeforeHurt = "unitBeforeHurt",
    --- 全抵抗[防御]
    ---@alias noteOnUnitImmuneDefendData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneDefend = "unitImmuneDefend",
    --- 全抵抗[無敵]
    ---@alias noteOnUnitImmuneInvincibleData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneInvincible = "unitImmuneInvincible",
    --- 全抵抗[減傷]
    ---@alias noteOnUnitImmuneReductionData noteOnUnitBase|{sourceUnit:Unit}
    ImmuneReduction = "unitImmuneReduction",
    --- 免疫[魔付]
    ---@alias noteOnUnitImmuneEnchantData noteOnUnitBase|{sourceUnit:Unit,enchantType:"魔付きタイプ"}
    ImmuneEnchant = "unitImmuneEnchant",
    --- 単位敵を殺す
    ---@alias noteOnUnitKillData noteOnUnitBase|{targetUnit:Unit}
    Kill = "unitKill",
    --- 稲妻チェーンがターゲットにヒット
    ---@alias noteOnUnitLightningChainData noteOnUnitBase|{targetUnit:Unit,index:"チェーンインデックス"}
    LightningChain = "unitLightningChain",
    --- 攻撃吸魔
    ---@alias noteOnUnitMPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"吸魔値",percent:"吸魔率"}
    MPSuckAttack = "unitMPSuckAttack",
    --- わざ吸魔
    ---@alias noteOnUnitMPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"吸魔値",percent:"吸魔率"}
    MPSuckAbility = "unitMPSuckAbility",
    --- 移動開始
    ---@alias noteOnUnitMoveStartData noteOnUnitBase|{x:"ターゲットX",y:"ターゲットY"}
    MoveStart = "unitMoveStart",
    --- 移動停止
    ---@alias noteOnUnitMoveStopData noteOnUnitBase
    MoveStop = "unitMoveStop",
    --- 移动の方向をそらす
    ---@alias noteOnUnitMoveTurnData noteOnUnitBase|{x:"現在のX",y:"現在のY"}
    MoveTurn = "unitMoveTurn",
    --- 移動中
    ---@alias noteOnUnitMovingData noteOnUnitBase|{x:"現在のX",y:"現在のY",step:"ステップ数"}
    Moving = "unitMoving",
    --- 移动ルーティング
    ---@alias noteOnUnitMoveRouteData noteOnUnitBase|{x:"現在のX",y:"現在のY"}
    MoveRoute = "unitMoveRoute",
    --- 硬直
    ---@alias noteOnUnitPunishData noteOnUnitBase|{sourceUnit:Unit,percent:"硬直度",duration:"継続時間"}
    Punish = "unitPunish",
    --- 切り傷
    ---@alias noteOnUnitReboundData noteOnUnitDamageData
    Rebound = "unitRebound",
    --- ぶんれつ
    ---@alias noteOnUnitSplitData noteOnUnitBase|{targetUnit:Unit,radius:number}
    Split = "unitSplit",
    --- めまい
    ---@alias noteOnUnitStunData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Stun = "unitStun",
    --- 破壊シールド
    ---@alias noteOnUnitBreakShieldData noteOnUnitBase|{targetUnit:Unit}
    BreakShield = "unitBreakShield",
    --- レベル変更
    ---@alias noteOnUnitLevelChangeData noteOnUnitBase|{value:"へんかさ"}
    LevelChange = "unitLevelChange",
    --- スキルバーが変化
    ---@alias noteOnUnitAbilitySlotChangeData noteOnUnitBase|{triggerSlot:AbilitySlot}
    AbilitySlotChange = "unitAbilitySlotChange",
    --- アイテム欄に変化があった
    ---@alias noteOnUnitItemSlotChangeData noteOnUnitBase|{triggerSlot:ItemSlot}
    ItemSlotChange = "unitItemSlotChange",
    --- 中止に陥る
    ---@alias noteOnUnitInterruptInData noteOnUnitBase
    InterruptIn = "unitInterruptIn",
    --- 離脱中止
    ---@alias noteOnUnitInterruptOutData noteOnUnitBase
    InterruptOut = "unitInterruptOut",
    --- Be
    Be = {
        --- 攻撃準備
        ---@alias noteOnUnitBeBeforeAttackData noteOnUnitBase|{sourceUnit:Unit}
        BeforeAttack = "be:unitBeforeAttack",
        --- 攻撃される
        ---@alias noteOnUnitBeAttackData noteOnUnitHurtData
        Attack = "be:unitAttack",
        --- 単位が殺された
        ---@alias noteOnUnitBeKillData noteOnUnitBase|{sourceUnit:Unit}
        Kill = "be:unitKill",
        --- 回避される
        ---@alias noteOnUnitBeAvoidData noteOnUnitBase|{targetUnit:Unit}
        Avoid = "be:unitAvoid",
        --- 破られて防ぐ
        ---@alias noteOnUnitBeBreakArmorData noteOnUnitBase|{sourceUnit:Unit,breakType:"無視タイプ"}
        BreakArmor = "be:unitBreakArmor",
         --- シールド低減
        ---@alias noteOnUnitBeShieldData noteOnUnitBase|{sourceUnit:Unit,value:"減盾値"}
        Shield = "be:unitShield",
        --- 撃たれて飛ぶ
        ---@alias noteOnUnitBeCrackFlyData noteOnUnitBase|{sourceUnit:Unit,distance:"撃退距離",height:"しょうげきこうど",duration:"凌空時間"}
        CrackFly = "be:unitCrackFly",
        --- 致命的な一撃を受ける（本体属性方式）
        ---@alias noteOnUnitBeCritData noteOnUnitBase|{sourceUnit:Unit}
        Crit = "be:unitCrit",
        --- 致命的な一撃（スキル呼び出し）
        ---@alias noteOnUnitCritAbilityData noteOnUnitBase|{sourceUnit:Unit}
        CritAbility = "be:unitCritAbility",
        --- 攻撃されて血を吸う
        ---@alias noteOnUnitBeHPSuckAttackData noteOnUnitBase|{sourceUnit:Unit,value:"吸血値",percent:"吸血率"}
        HPSuckAttack = "be:unitHPSuckAttack",
        --- スキルに吸血される
        ---@alias noteOnUnitBeHPSuckAbilityData noteOnUnitBase|{sourceUnit:Unit,value:"吸血値",percent:"吸血率"}
        HPSuckAbility = "be:unitHPSuckAbility",
        --- 稲妻チェーンに撃たれる
        ---@alias noteOnUnitBeLightningChainData noteOnUnitBase|{sourceUnit:Unit,index:"链索引"}
        LightningChain = "be:unitLightningChain",
        --- 攻撃に吸い込まれる
        ---@alias noteOnUnitBeMPSuckAttackData noteOnUnitBase|{sourceUnit:Unit,value:"吸魔値",percent:"吸魔率"}
        MPSuckAttack = "be:unitMPSuckAttack",
        --- スキルに吸い込まれる
        ---@alias noteOnUnitBeMPSuckAbilityData noteOnUnitBase|{sourceUnit:Unit,value:"吸魔値",percent:"吸魔率"}
        MPSuckAbility = "be:unitMPSuckAbility",
        --- 切り傷を負う
        ---@alias noteOnUnitBeReboundData noteOnUnitHurtData
        Rebound = "be:unitRebound",
        --- 分裂される[コア型]
        ---@alias noteOnUnitBeSplitData noteOnUnitBase|{sourceUnit:Unit,radius:number}
        Split = "be:unitSplit",
        --- 分裂される[拡散型]
        ---@alias noteOnUnitBeSplitSpreadData noteOnUnitBase|{sourceUnit:Unit}
        SplitSpread = "be:unitSplitSpread",
        --- めまいがする
        ---@alias noteOnUnitBeStunData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Stun = "be:unitStun",
        --- 破壊されたシールド
        ---@alias noteOnUnitBeBreakShieldData noteOnUnitBase|{sourceUnit:Unit}
        BreakShield = "be:unitBreakShield",
    }
}

---@alias noteOnAbilityBase {triggerAbility:Ability,triggerUnit:Unit}
EVENT.Ability = {
    -- 単位でスキルを獲得した場合
    ---@alias noteOnAbilityGetData noteOnAbilityBase
    Get = "abilityGet",
    --- 単位がスキルを失う
    ---@alias noteOnAbilityLoseData noteOnAbilityBase
    Lose = "abilityLose",
    --- 単位スタートスキル（施術瞬間）
    ---@alias noteOnAbilitySpellData noteOnAbilityBase|{triggerItem:Item,targetUnit:Unit,targetX:number,targetY:number,targetZ:number}
    Spell = "abilitySpell",
    --- スキルの有効化
    ---@alias noteOnAbilityEffectiveData noteOnAbilitySpellData
    Effective = "abilityEffective",
    --- 技能継続施法周期ごと（動作時）
    ---@alias noteOnAbilityCastingData noteOnAbilitySpellData
    Casting = "abilityCasting",
    --- 停止スキル（吟唱、持続的な施法は停止状態）
    ---@alias noteOnAbilityStopData noteOnAbilityBase
    Stop = "abilityStop",
    --- 施術スキル終了（継続施術のみ終了状態）
    ---@alias noteOnAbilityOverData noteOnAbilityBase
    Over = "abilityOver",
    --- レベル変更
    ---@alias noteOnAbilityLevelChangeData noteOnAbilityBase|{value:"へんかさ"}
    LevelChange = "abilityLevelChange",
}

---@alias noteOnItemBase {triggerItem:Item,triggerUnit:Unit}
EVENT.Item = {
    --- 物を拾う
    ---@alias noteOnItemPickData noteOnItemBase
    Pick = "itemPick",
    --- アイテムを取得
    ---@alias noteOnItemGetData noteOnItemBase
    Get = "itemGet",
    --- アイテムを失う
    ---@alias noteOnItemLoseData noteOnItemBase
    Lose = "itemLose",
    --- アイテムの使用
    ---@alias noteOnItemUsedData noteOnItemBase|noteOnAbilityEffectiveData
    Used = "itemUsed",
    --- アイテムを破棄
    ---@alias noteOnItemDropData noteOnItemBase|{targetX:number,targetY:number}
    Drop = "itemDrop",
    --- 伝達物
    ---@alias noteOnItemDeliverData noteOnItemBase|{targetUnit:Unit}
    Deliver = "itemDeliver",
    --- 抵当アイテム（所有者による販売）
    ---@alias noteOnItemPawnData noteOnItemBase
    Pawn = "itemPawn",
    --- レベル変更
    ---@alias noteOnItemLevelChangeData noteOnItemBase|{value:"へんかさ"}
    LevelChange = "itemLevelChange",
}

---@alias noteOnStoreBase {triggerStore:Store}
EVENT.Store = {
    --- 商品を売り出す
    ---@alias noteOnStoreSellData noteOnStoreBase|{qty:"販売数量"}
    Sell = "storeSell",
}

---@alias noteOnRegionBase {triggerRegion:Region}
EVENT.Region = {
    --- ゾーンに入る
    ---@alias noteOnRegionEnterData noteOnRegionBase|{triggerUnit:Unit}
    Enter = "rectEnter",
    --- ゾーンを出る
    ---@alias noteOnRegionLeaveData noteOnRegionBase|{triggerUnit:Unit}
    Leave = "rectLeave",
}

---@alias noteOnAuraBase {triggerAura:Aura}
EVENT.Aura = {
    --- ゾーンに入る
    ---@alias noteOnAuraEnterData noteOnAuraBase|{triggerUnit:Unit}
    Enter = "auraEnter",
    --- ゾーンを出る
    ---@alias noteOnAuraLeaveData noteOnAuraBase|{triggerUnit:Unit}
    Leave = "auraLeave",
}

---@alias noteOnDestructableBase {triggerDestructable:Destructable|number}
EVENT.Destructable = {
    --- 破壊可能なものは死ぬ
    ---@alias noteOnDestructableDeadData noteOnDestructableBase|{name:"の名前",x:"座標X",y:"座標Y"}
    Dead = "destructableDead",
}

---@alias noteOnFrameBase {triggerFrame:Frame}
EVENT.Frame = {
    --- 表示
    ---@alias noteOnFrameShowData noteOnFrameBase
    Show = "frameShow",
    --- 非表示
    ---@alias noteOnFrameHideData noteOnFrameBase
    Hide = "frameHide",
    --- 左クリック
    ---@alias noteOnFrameLeftClickData noteOnFrameBase|{triggerPlayer:Player}
    LeftClick = "frameLeftClick",
    --- 左キー解放
    ---@alias noteOnFrameLeftReleaseData noteOnFrameBase|{triggerPlayer:Player,status:"マウスがまだFrame内にあるかどうか"}
    LeftRelease = "frameLeftRelease",
    --- 右クリック
    ---@alias noteOnFrameRightClickData noteOnFrameBase|{triggerPlayer:Player}
    RightClick = "frameRightClick",
    --- 右クリック解除
    ---@alias noteOnFrameRightReleaseData noteOnFrameBase|{triggerPlayer:Player,status:"マウスがまだFrame内にあるかどうか"}
    RightRelease = "frameRightRelease",
    --- 上に移動
    ---@alias noteOnFrameMoveData noteOnFrameBase|{triggerPlayer:Player}
    Move = "frameMove",
    --- 移入
    ---@alias noteOnFrameEnterData noteOnFrameBase|{triggerPlayer:Player}
    Enter = "frameEnter",
    --- 移出
    ---@alias noteOnFrameLeaveData noteOnFrameBase|{triggerPlayer:Player}
    Leave = "frameLeave",
    --- スクロール
    ---@alias noteOnFrameWheelData noteOnFrameBase|{triggerPlayer:Player,delta:"スクロール値"}
    Wheel = "frameWheel",
    --- ドラッグ開始
    ---@alias noteOnFrameDragStartData noteOnFrameBase|{triggerPlayer:Player}
    DragStart = "frameDragStart",
    --- ドラッグ終了
    ---@alias noteOnFrameDragStopData noteOnFrameBase|{triggerPlayer:Player}
    DragStop = "frameDragStop",
}

---@alias noteOnAIBase {triggerAI:AI}
EVENT.AI = {
    --- 関連単位
    ---@alias noteOnAILinkData noteOnAIBase|{triggerUnit:Unit}
    Link = "aiLink",
    --- 切断単位
    ---@alias noteOnAIUnlinkData noteOnAIBase|{triggerUnit:Unit}
    Unlink = "aiUnlink",
}
```

#### カスタムイベントの構築

```lua
-- 埋め込み点のトリガ
event.trigger(obj, "MY_EVENT_1", {a = 1})

-- 登録トリガー[default key]
event.register(obj, "MY_EVENT_1", function(evtData){
    print(evtData.a) --1
})

-- 登録トリガー[custom key]
event.register(obj, "MY_EVENT_1", "custom_key", function(evtData){
    print(evtData.a) --1
})
```
