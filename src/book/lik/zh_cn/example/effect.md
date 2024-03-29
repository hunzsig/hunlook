## 特效

#### 闪电特效

```lua
Lightning(LIGHTNING_TYPE.thunderRed, 0.3, source:x(), source:y(), source:h(), targer:x(), targer:y(), targer:h())
```

#### 点特效

```lua
--- 持续3秒的水爆破
Effect("NagaDeath", 0, 0, 20 + japi.Z(0, 0), 3)

--- 永久后删除方式
local e = Effect("NagaDeath", 0, 0, 20 + japi.Z(0, 0), -1)
time.setTimeout(3, function()
    destroy(e)
end)

--- 以单位为核心创建
(Unit):effect("NagaDeath", 3)
```

#### 附着特效

```lua
--- 持续0.5秒的治疗，默认-1
EffectAttach((Unit), "HealTarget2", "origin", 0.5)

--- 以单位为核心创建
(Unit):attach("HealTarget2", "origin", 0.5)
```

#### 附着特效的buff中的应用

> 有时附着特效用于技能效果，但技能效果会被中途清理
>
> 这时可以使用附着特效的无状态调用，不需要自行管理特效的存亡问题

```lua
--- attach绑定特效 
--- detach解绑特效 
(Unit):buff("火焰免疫")
    :signal(BUFF_SIGNAL.up)
    :icon("ability/FireMan")
    :description("处于火焰免疫中")
    :duration(2)
    :purpose(function(buffObj)
        buffObj:attach("buff/Bullerouge", "origin")
        buffObj:enchantImmune(DAMAGE_TYPE.fire, "+=1")
    end)
    :rollback(function(buffObj)
        buffObj:detach("buff/Bullerouge", "origin")
        buffObj:enchantImmune(DAMAGE_TYPE.fire, "-=1")
    end)
    :run()
```
