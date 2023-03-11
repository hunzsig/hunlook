## Ability

#### List of all initial skills

* [Core]means that the skill is automatically used by the bottom level, and is not automatically called
* [Buff]means that the skill can set name, icon and description to reset the buff information****

### damage

> Damage within this framework is also a skill
>
> DamageSrc represents the damage source, damageType represents the damage element type, and element attachment cannot
> be generated when damageTypeLevel is less than 1
>
> It will trigger injury-related events and cause damage flow, which can be completely customized

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

### crit

> Can critically hit a target to cause damage
>
> Will trigger critical strike related events

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

### split

> Can cause damage to nearby targets
>
> Will trigger splitting related events

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

### stun[Buff]

> Can make a unit fall into a dizzy state
>
> Will trigger vertigo related events

```lua
ability.stun({
    sourceUnit = u,
    targetUnit = tu,
    duration = 1,
})
```

### freeze[Buff]

> Can make a target action pause

```lua
ability.freeze({
    name = "Condensed Snow",
    icon = "ability/BranchSnowFlake",
    description = "The cold of snow makes it freeze",
    whichUnit = eu,
    red = 100,
    green = 100,
    blue = 255,
    duration = dur
})
```

### invisible[Buff]

> Can make a target invisible

```lua
ability.invisible({
    whichUnit = u,
    duration = 3,
    name = "Ghosts Shadows",
    icon = "ability/EvilSpirit",
    effect = "InvisibilityTarget",
})
```

### unInvisible

> Can make a target invisible

```lua
ability.unInvisible({
    whichUnit = u,
    effect = "InvisibilityTarget",
})
```

### parry

> Can only be used after instant damage

```lua
ability.parry({
    whichUnit = u,
})
```

### reborn[Core]

```lua
ability.reborn(deadUnit, rebornDelay, 3, 0, 0, true)
```

### sight[Core]

```lua
ability.sight(u, 1600)
```

### visible[Core]

```lua
ability.visible(u, 1000)
```

### silent[Buff]

> Make the unit unable to release skills, including passive

```lua
ability.silent({
    whichUnit = tu,
    duration = dur,
})
```

### unArm[Buff]

> Make the unit unable to move attack

```lua
ability.unArm({
    whichUnit = tu,
    duration = dur,
})
```

### lightningChain

> Generate conductive lightning chain to hit the target
>
> It will trigger events related to the lightning chain, and can call back to get the number of targets hit

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

### missile

> Can create a virtual arrow

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

### leap[Buff]

> Similar to missile, but only makes the unit charge itself, and can set tracking, distance, height, bounce and other parameters

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

### crackFly[Buff]

> It can make a unit fly to the high altitude, and can set parameters such as the length of stagnation, distance, height, and bounce

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

### whirlwind

> Can make a unit focus on itself and continuously damage nearby targets

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
