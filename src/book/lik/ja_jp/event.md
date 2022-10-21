## Event 事件

#### イベント一覧

```lua
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
}

---@alias noteOnUnitBase {triggerUnit:Unit,triggerAbility:Ability,triggerItem:Item}
EVENT.Unit = {
    --- 攻撃する
    ---@alias noteOnUnitAttackData noteOnUnitDamageData
    Attack = "unitAttack",
    --- 回避する
    ---@alias noteOnUnitAvoidData noteOnUnitBase|{sourceUnit:Unit}
    Avoid = "unitAvoid",
    --- ぼうぎょを破る
    ---@alias noteOnUnitBreakArmorData noteOnUnitBase|{targetUnit:Unit,breakType:"無視タイプ"}
    BreakArmor = "unitBreakArmor",
    --- ターゲットを飛ばす
    ---@alias noteOnUnitCrackFlyData noteOnUnitBase|{targetUnit:Unit,distance:"撃退距離",height:"しょうげきこうど",duration:"凌空時間"}
    CrackFly = "unitCrackFly",
    --- ターゲットをクリティカル
    ---@alias noteOnUnitCritData noteOnUnitBase|{targetUnit:Unit}
    Crit = "unitCrit",
    --- ダメージを与える
    ---@alias noteOnUnitDamageData noteOnUnitBase|{targetUnit:Unit,damage:"ダメージ値",damageSrc:"ダメージ源",damageType:"ダメージタイプ"}
    Damage = "unitDamage",
    --- 単位出産
    ---@alias noteOnUnitBornData noteOnUnitBase
    Born = "unitBorn",
    --- 復活
    ---@alias noteOnUnitRebornData noteOnUnitBase
    Reborn = "unitReborn",
    --- 単位死亡
    ---@alias noteOnUnitDeadData noteOnUnitBase|{sourceUnit:Unit}
    Dead = "unitDead",
    --- 単位破滅
    ---@alias noteOnUnitDestroyData noteOnUnitBase
    Destroy = "unitDestroy",
    --- 魔付き反応
    ---@alias noteOnUnitEnchantData noteOnUnitBase|{sourceUnit:Unit,enchantType:"魔付きタイプ",addition:"加算率"}
    Enchant = "unitEnchant",
    --- 攻撃吸血
    ---@alias noteOnUnitHPSuckAttackData noteOnUnitBase|{targetUnit:Unit,value:"吸血値",percent:"吸血率"}
    HPSuckAttack = "unitHPSuckAttack",
    --- わざ吸血
    ---@alias noteOnUnitHPSuckAbilityData noteOnUnitBase|{targetUnit:Unit,value:"吸血値",percent:"吸血率"}
    HPSuckAbility = "unitHPSuckAbility",
    --- 命令を待つ
    ---@alias noteOnUnitStopData noteOnUnitBase
    Hold = "unitHold",
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
    --- 遮断[0.05秒以下のめまい]
    ---@alias noteOnUnitShockData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Shock = "unitShock",
    --- ぶんれつ
    ---@alias noteOnUnitSplitData noteOnUnitBase|{targetUnit:Unit,radius:number}
    Split = "unitSplit",
    --- ストップコマンド
    ---@alias noteOnUnitStopData noteOnUnitBase
    Stop = "unitStop",
    --- めまい[0.05秒より大きいめまい]
    ---@alias noteOnUnitStunData noteOnUnitBase|{targetUnit:Unit,duration:number}
    Stun = "unitStun",
    --- レベル変更
    ---@alias noteOnUnitLevelChangeData noteOnUnitBase|{value:"へんかさ"}
    LevelChange = "unitLevelChange",
    Be = {
        --- 攻撃される
        ---@alias noteOnUnitBeAttackData noteOnUnitHurtData
        Attack = "be:unitAttack",
        --- 回避される
        ---@alias noteOnUnitBeAvoidData noteOnUnitBase|{targetUnit:Unit}
        Avoid = "be:unitAvoid",
        --- 破られて防ぐ
        ---@alias noteOnUnitBeBreakArmorData noteOnUnitBase|{sourceUnit:Unit,breakType:"無視タイプ"}
        BreakArmor = "be:unitBreakArmor",
        --- 撃たれて飛ぶ
        ---@alias noteOnUnitBeCrackFlyData noteOnUnitBase|{sourceUnit:Unit,distance:"撃退距離",height:"しょうげきこうど",duration:"凌空時間"}
        CrackFly = "be:unitCrackFly",
        --- クリティカルを受ける
        ---@alias noteOnUnitBeCritData noteOnUnitBase|{sourceUnit:Unit}
        Crit = "be:unitCrit",
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
        --- 遮断された[0.05秒以下のめまい]
        ---@alias noteOnUnitBeShockData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Shock = "be:unitShock",
        --- 被分裂[コア型]
        ---@alias noteOnUnitBeSplitData noteOnUnitBase|{sourceUnit:Unit,radius:number}
        Split = "be:unitSplit",
        --- 被分裂[拡散型]
        ---@alias noteOnUnitBeSplitSpreadData noteOnUnitBase|{sourceUnit:Unit}
        SplitSpread = "be:unitSplitSpread",
        --- 被眩暈[0.05秒超の眩暈]
        ---@alias noteOnUnitBeStunData noteOnUnitBase|{sourceUnit:Unit,duration:number}
        Stun = "be:unitStun",
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
    ---@alias noteOnAbilityEffectiveData noteOnAbilityBase|{triggerItem:Item,targetUnit:Unit,targetX:number,targetY:number,targetZ:number}
    Effective = "abilityEffective",
    --- 施術スキル終了（継続施術のみ終了状態）
    ---@alias noteOnAbilityStopData noteOnAbilityBase
    Stop = "abilityStop",
    --- 停止スキル（吟唱、持続的な施法は停止状態）
    ---@alias noteOnAbilityOverData noteOnAbilityBase
    Over = "abilityOver",
    --- レベル変更
    ---@alias noteOnAbilityLevelChangeData noteOnAbilityBase|{value:"へんかさ"}
    LevelChange = "abilityLevelChange",
}

---@alias noteOnItemBase {triggerItem:Item,triggerUnit:Unit}
EVENT.Item = {
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
    ---@alias noteOnItemDropData noteOnItemBase
    Drop = "itemDrop",
    --- 抵当アイテム（所有者による販売）
    ---@alias noteOnItemPawnData noteOnItemBase
    Pawn = "itemPawn",
    --- 合成アイテム
    ---@alias noteOnItemSynthesisData noteOnItemBase
    Synthesis = "itemSynthesis",
    --- アイテムの分割
    ---@alias noteOnItemSeparateData noteOnItemBase
    Separate = "itemSeparate",
    --- レベル変更
    ---@alias noteOnItemLevelChangeData noteOnItemBase|{value:"へんかさ"}
    LevelChange = "itemLevelChange",
    --- アイテム破滅
    ---@alias noteOnItemDestroyData noteOnItemBase
    Destroy = "itemDestroy",
}

---@alias noteOnStoreBase {triggerStore:Store}
EVENT.Store = {
    --- 商品を売り出す
    ---@alias noteOnStoreSellData noteOnStoreBase|{qty:"販売数量"}
    Sell = "storeSell",
}

---@alias noteOnRectBase {triggerRect:Rect}
EVENT.Rect = {
    --- ゾーンに入る
    ---@alias noteOnRectEnterData noteOnRectBase
    Enter = "rectEnter",
    --- ゾーンを出る
    ---@alias noteOnRectLeaveData noteOnRectBase
    Leave = "rectLeave",
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
