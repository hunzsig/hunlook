## コンピテンシー

#### すべての初期スキル一覧

* 下位レベルの関連付けとは、このスキルが自動的に下位レベルで使用され、通常は自分で呼び出されないことを意味します
* Buff関連付けとは、このスキルがbuff情報をリセットするためにname、icon、descriptionを設定できることを意味します

### 怪我 damage

> このフレーム内でダメージを与えるのもスキルです
>
> damageSrcはダメージ源を表し、damageTypeはダメージ要素タイプを表し、damageTypeLevelが1未満の場合は要素付着を生成できない
>
> 傷害関連イベントがトリガーされ、傷害フローが発生します。フローは完全にカスタマイズできます

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

### 致命一撃 crit

> ターゲットを致命的に撃ってダメージを与えることができる
>
> 致命的な一撃に関連するイベントがトリガーされます

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

### ぶんれつ split

> 近くのターゲットにダメージを与えることができる
>
> 分裂関連イベントがトリガーされます

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

### めまいが stun[Buff関連]

> 単位をめまい状態にすることができます
>
> めまい関連イベントがトリガーされます

```lua
ability.stun({
    sourceUnit = u,
    targetUnit = tu,
    duration = 1,
})
```

### とうけつ freeze[Buff関連]

> ターゲットアクションを一時停止することができます

```lua
ability.freeze({
    name = "凝集した雪",
    icon = "ability/BranchSnowFlake",
    description = "雪の寒さで凍る",
    whichUnit = eu,
    red = 100,
    green = 100,
    blue = 255,
    duration = dur
})
```

### 身を隠す invisible[Buff関連]

> ターゲットを隠すことができます

```lua
ability.invisible({
    whichUnit = u,
    duration = 3,
    name = "幽霊が姿を消す",
    icon = "ability/EvilSpirit",
    effect = "InvisibilityTarget",
})
```

### 身を隠すの解除 unInvisible

> ターゲットを身を隠すにすることができます

```lua
ability.unInvisible({
    whichUnit = u,
    effect = "InvisibilityTarget",
})
```

### グリッドストップ parry

> 瞬間的なダメージの後にしか使えない

```lua
ability.parry({
    whichUnit = u,
})
```

### 生まれ変わる reborn[下位レベルの関連]

```lua
ability.reborn(deadUnit, rebornDelay, 3, 0, 0, true)
```

### 単位視野値 sight[下位レベルの関連]

```lua
ability.sight(u, 1600)
```

### バック隠線範囲値 visible[下位レベルの関連]

```lua
ability.visible(u, 1000)
```

### 沈黙 silent[Buff関連]

> ユニットがパッシブなどのスキルを解放できないようにする

```lua
ability.silent({
    whichUnit = tu,
    duration = dur,
})
```

### 武器を納める unArm[Buff関連]

> ユニットを動作不能にする攻撃

```lua
ability.unArm({
    whichUnit = tu,
    duration = dur,
})
```

### 稲妻チェーン lightningChain

> 伝導稲妻チェーン打撃目標の生成
>
> 稲妻チェーン関連イベントがトリガーされ、何番目のターゲットに打撃を与えたかをコールバックできます

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

### 矢印 missile

> 仮想矢印を作成できます

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

### 突撃する leap[Buff関連]

> missileと類似しているが、単位自体を突撃させ、追跡、距離、高さ、バウンドなどのパラメータを設定することができる

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

### ぶっ飛ばす crackFly[Buff関連]

> 1つの単位を上空に飛ばすことができ、滞空時間の長さ、距離、高さ、バウンドなどのパラメータを設定することができる

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

### ブレイドストーム whirlwind

> 1つの単位を自分中心にして、近くのターゲットを傷つけ続けることができます

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
