## 特效

#### 閃電特效

```lua
Lightning(LIGHTNING_TYPE.thunderRed, 0.3, source:x(), source:y(), source:h(), targer:x(), targer:y(), targer:h())
```

#### 點特效

```lua
--- 持續3秒的水爆破
Effect("NagaDeath", 0, 0, 20 + japi.Z(0, 0), 3)

--- 永久後刪除方式
local e = Effect("NagaDeath", 0, 0, 20 + japi.Z(0, 0), -1)
time.setTimeout(3, function()
    destroy(e)
end)

--- 以單位為核心創建
(Unit):effect("NagaDeath", 3)
```

#### 附着特效

```lua
--- 持續0.5秒的治療，默認-1
EffectAttach((Unit), "HealTarget2", "origin", 0.5)

--- 以單位為核心創建
(Unit):attach("HealTarget2", "origin", 0.5)
```

#### 附着特效的buff中的應用

> 有時附着特效用於技能效果，但技能效果會被中途清理
>
> 這時可以使用附着特效的無狀態調用，不需要自行管理特效的存亡問題

```lua
--- attach綁定特效 
--- detach解綁特效 
(Unit):buff("火焰免疫")
    :signal(BUFF_SIGNAL.up)
    :icon("ability/FireMan")
    :description("處於火焰免疫中")
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
