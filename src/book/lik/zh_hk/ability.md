## 技能庫

#### 所有初始技能一覽

* 底層關聯是指該技能自動被底層使用，一般不自行調用
* Buff關聯是指該技能可以設置name、icon、description來重置buff信息

### 傷害 damage

> 此框架內傷害也是一個技能
>
> damageSrc表達傷害來源，damageType表達傷害元素類型，damageTypeLevel小於1時無法產生元素附着
>
> 會觸發傷害相關事件，並引發傷害流，流可完全自定義

```lua
ability.damage({
    sourceUnit = u,
    targetUnit = eu,
    damage = dmg,
    damageSrc = DAMAGE_SRC.ability,
    damageType = DAMAGE_TYPE.fire,
    damageTypeLevel = 1,
})
```

### 暴擊 crit

> 可以暴擊一個目標造成傷害
>
> 會觸發暴擊相關事件

```lua
ability.crit({
    sourceUnit = u,
    targetUnit = tu,
    damage = dmg,
    damageSrc = DAMAGE_SRC.item,
    damageType = DAMAGE_TYPE.water,
    effect = "NagaDeath",
})
```

### 分裂 split

> 可以對附近目標造成傷害
>
> 會觸發分裂相關事件

```lua
 ability.split({
    containSelf = true,
    sourceUnit = u,
    targetUnit = tu,
    damage = dmg,
    damageSrc = DAMAGE_SRC.ability,
    damageType = DAMAGE_TYPE.water,
    radius = radius,
    effect = "eff/WaterElementalImpactBase",
})
```

### 眩暈 stun[Buff關聯]

> 可以令一個單位陷入眩暈狀態
>
> 會觸發眩暈相關事件

```lua
ability.stun({
    sourceUnit = u,
    targetUnit = tu,
    duration = 1,
})
```

### 凍結 freeze[Buff關聯]

> 可以令一個目標動作暫停

```lua
ability.freeze({
    name = "凝聚之雪",
    icon = "ability/BranchSnowFlake",
    description = "雪的寒冷令其凍結",
    whichUnit = eu,
    red = 100,
    green = 100,
    blue = 255,
    duration = dur
})
```

### 隱身 invisible[Buff關聯]

> 可以令一個目標隱身

```lua
ability.invisible({
    whichUnit = u,
    duration = 3,
    name = "鬼影無蹤",
    icon = "ability/EvilSpirit",
    effect = "InvisibilityTarget",
})
```

### 取消隱身 unInvisible

> 可以令一個目標取消隱身

```lua
ability.unInvisible({
    whichUnit = u,
    effect = "InvisibilityTarget",
})
```

### 格擋 parry

> 只能用在瞬間傷害之後

```lua
ability.parry({
    whichUnit = u,
})
```

### 重生 reborn[底層關聯]

```lua
ability.reborn(deadUnit, rebornDelay, 3, 0, 0, true)
```

### 單位視野值 sight[底層關聯]

```lua
ability.sight(u, 1600)
```

### 反隱範圍值 visible[底層關聯]

```lua
ability.visible(u, 1000)
```

### 沉默 silent[Buff關聯]

> 令單位無法釋放技能，包括被動

```lua
ability.silent({
    whichUnit = tu,
    duration = dur,
})
```

### 繳械 unArm[Buff關聯]

> 令單位無法動作性攻擊

```lua
ability.unArm({
    whichUnit = tu,
    duration = dur,
})
```

### 閃電鏈 lightningChain

> 生成傳導閃電鏈打擊目標
>
> 會觸發閃電鏈相關事件，能回調獲得已打擊到第幾個目標

```lua
ability.lightningChain({
    sourceUnit = u,
    targetUnit = eu,
    lightningType = LIGHTNING_TYPE.thunderLite,
    qty = 3,
    rate = -15,
    radius = radius,
    isRepeat = true,
    damage = dmg,
    damageSrc = DAMAGE_SRC.reaction,
    damageType = dmgType,
    damageTypeLevel = 0,
})
```

### 箭矢 missile

> 可以創建一個虛擬的箭矢

```lua
ability.missile({
    modelAlias = "missile/SpiritBolt",
    sourceUnit = u,
    weaponLength = 100,
    weaponHeight = 120,
    targetVec = { targetX, targetY, 100 },
    speed = 300,
})
```

### 衝鋒 leap[Buff關聯]

> 與missile類似但只令單位自身衝鋒，並可以設定跟蹤、距離、高度、彈跳等參數

```lua
ability.crackFly({
    sourceUnit = u,
    targetUnit = eu,
    effect = "slash/BlueShuttle",
    attach = "Tornado_Target",
    distance = 20,
    height = math.rand(100, 150),
    duration = 0.3,
})
```

### 擊飛 crackFly[Buff關聯]

> 可以令一個單位擊飛至高空，並可以設定滯空時長、距離、高度、彈跳等參數

```lua
ability.crackFly({
    sourceUnit = u,
    targetUnit = eu,
    effect = "slash/BlueShuttle",
    attach = "Tornado_Target",
    distance = 20,
    height = math.rand(100, 150),
    duration = 0.3,
})
```

### 劍刃風暴 whirlwind

> 可以令一個單位以自身為中心，持續傷害附近目標

```lua
ability.whirlwind({
    sourceUnit = u,
    radius = 300,
    frequency = 0.3,
    duration = 10,
    enumModel = "slash/Ephemeral_Cut_Orange",
    damage = dmg,
    damageSrc = DAMAGE_SRC.ability,
    damageType = DAMAGE_TYPE.wind,
    damageTypeLevel = 0,
})
```
